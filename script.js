// ===== Medwise - script.js =====
const $ = id => document.getElementById(id);

// Cek data obat
const dataOK = typeof DRUGS !== "undefined";
if (!dataOK) {
    document.body.insertAdjacentHTML("afterbegin",
        '<div style="background:#b00020;color:#fff;padding:12px;text-align:center;font-weight:700">' +
        'Data obat tidak termuat. Pastikan data (3).js satu folder dengan index.html, lalu tekan Ctrl+F5.</div>');
}
const DATA = dataOK ? DRUGS : [];
if ($("jumlahObat") && dataOK) $("jumlahObat").textContent = DATA.length + " obat";

// Menu mobile
const menuBtn = $("menuBtn"), nav = $("nav");
if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
        const open = nav.classList.toggle("open");
        menuBtn.setAttribute("aria-expanded", open);
    });
}

// Huruf A-Z
const az = $("az");
if (az) {
    [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ", "0-9"].forEach(ch => {
        const a = document.createElement("a");
        a.href = "obat.html?huruf=" + encodeURIComponent(ch);
        a.textContent = ch;
        az.appendChild(a);
    });
}

// Tab Obat / Kondisi / Gejala
const hints = {
    obat: "Pilih huruf pertama nama obat.",
    kondisi: "Pilih huruf pertama nama penyakit atau kondisi.",
    gejala: "Pilih huruf pertama gejala yang kamu rasakan."
};
document.querySelectorAll(".tabs button").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".tabs button").forEach(b => b.setAttribute("aria-selected", "false"));
        btn.setAttribute("aria-selected", "true");
        if ($("tabHint")) $("tabHint").textContent = hints[btn.dataset.tab];
    });
});

// Pencarian dengan saran
const q = $("q"), list = $("suggest"), form = $("searchForm");
if (q && list) {
    q.addEventListener("input", () => {
        const v = q.value.trim().toLowerCase();
        list.innerHTML = "";
        if (!v) { list.hidden = true; return; }
        const hits = DATA.filter(d => (d.nama + " " + d.idn).toLowerCase().includes(v)).slice(0, 6);
        hits.forEach(d => {
            const li = document.createElement("li");
            const s1 = document.createElement("span");
            const s2 = document.createElement("small");
            s1.textContent = d.nama;
            s2.textContent = d.kelas;
            li.appendChild(s1);
            li.appendChild(s2);
            li.addEventListener("click", () => { location.href = "obat.html?id=" + d.id; });
            list.appendChild(li);
        });
        list.hidden = hits.length === 0;
    });
    document.addEventListener("click", e => {
        if (!e.target.closest("#searchForm")) list.hidden = true;
    });
}
if (form && q) {
    form.addEventListener("submit", e => {
        e.preventDefault();
        if (q.value.trim()) location.href = "obat.html?q=" + encodeURIComponent(q.value.trim());
    });
}

// Daftar obat umum
const pop = $("popular");
if (pop) {
    DATA.forEach(d => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = "obat.html?id=" + d.id;
        a.textContent = d.nama;
        li.appendChild(a);
        pop.appendChild(li);
    });
}

// Jelajahi per kelas obat
const kl = $("kelas");
if (kl) {
    [...new Set(DATA.map(d => d.kelas))].sort().forEach(k => {
        const a = document.createElement("a");
        a.className = "chip"; a.href = "obat.html?kelas=" + encodeURIComponent(k); a.textContent = k;
        kl.appendChild(a);
    });
}
