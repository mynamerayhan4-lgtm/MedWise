const view = document.getElementById("view");
const p = new URLSearchParams(location.search);
const el = (t, c, txt) => { const e = document.createElement(t); if (c) e.className = c; if (txt) e.textContent = txt; return e; };
const empty = v => !v || v === "-";

function listPage(title, rows) {
    view.appendChild(el("h1", "", title));
    if (!rows.length) { view.appendChild(el("p", "muted", "Obat tidak ditemukan. Coba kata kunci lain.")); return; }
    const ul = el("ul", "links");
    rows.forEach(d => { const li = el("li"), a = el("a", "", d.nama + (d.idn !== "-" ? " (" + d.idn + ")" : "")); a.href = "obat.html?id=" + d.id; li.appendChild(a); ul.appendChild(li); });
    view.appendChild(ul);
}
function line(text) {
    const li = el("li"), m = text.match(/^- \*\*(.+?):\*\*\s*(.*)/);
    if (m) { li.appendChild(el("strong", "", m[1] + ": ")); li.appendChild(document.createTextNode(empty(m[2]) ? "belum tersedia" : m[2])); }
    else li.textContent = text.replace(/^- /, "");
    return li;
}
function detail(d) {
    document.title = d.nama + " – Medwise";
    view.appendChild(el("h1", "", d.nama));
    view.appendChild(el("p", "muted", [d.idn, d.kelas, d.atc !== "-" ? "ATC " + d.atc : ""].filter(x => !empty(x)).join("  ·  ")));
    const order = window.MW_LANG === "en"
        ? ["Summary", "Indications", "Dosage", "Side effects", "Warnings", "Interactions", "Storage", "Availability in the National Formulary", "Sources"]
        : ["Ringkasan", "Indikasi", "Dosis", "Efek samping", "Peringatan", "Interaksi", "Penyimpanan", "Ketersediaan di Fornas", "Sumber"];
    order.forEach(h => {
        const rows = d.sec[h]; if (!rows) return;
        const sec = el("section", "panel sec"); sec.appendChild(el("h2", "", h));
        const real = rows.filter(r => !/^(-|- \*\*[^*]+:\*\*\s*-)$/.test(r));
        if (!real.length) { sec.appendChild(el("p", "muted", "Informasi belum tersedia.")); }
        else if (rows.length === 1 && !rows[0].startsWith("- ")) sec.appendChild(el("p", "", rows[0]));
        else { const ul = el("ul", "bul"); rows.forEach(r => { if (r !== "-") ul.appendChild(line(r.startsWith("- ") ? r : "- " + r)); }); sec.appendChild(ul); }
        view.appendChild(sec);
    });
    view.appendChild(el("p", "muted", "Informasi ini bersifat edukasi. Konsultasikan dengan dokter atau apoteker sebelum memakai obat."));
}
const id = p.get("id"), q = (p.get("q") || "").toLowerCase(), h = p.get("huruf");
if (id) { const d = DRUGS.find(x => x.id === id); d ? detail(d) : listPage("Obat tidak ditemukan", []); }
else if (q) listPage('Hasil pencarian "' + p.get("q") + '"', DRUGS.filter(d => [d.nama, d.idn, d.kelas, d.kondisi, d.gejala].join(" ").toLowerCase().includes(q)));
else if (p.get("kelas")) listPage("Kelas: " + p.get("kelas"), DRUGS.filter(d => d.kelas === p.get("kelas")));
else if (h) listPage("Obat berawalan " + h, DRUGS.filter(d => h === "0-9" ? /^\d/.test(d.nama) : d.nama[0].toUpperCase() === h.toUpperCase()));
else listPage("Semua obat", DRUGS);
