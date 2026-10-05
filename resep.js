let sel = [];
function render(){
    const chips = $("chips"); chips.innerHTML = "";
    sel.forEach((e,i) => { const c = el("span","chip"+(e.unknown?" unk":""),e.label+" "); const x = el("button","","×");
        x.type="button"; x.setAttribute("aria-label","Hapus "+e.label); x.onclick = () => { sel.splice(i,1); render(); }; c.appendChild(x); chips.appendChild(c); });
    const h = $("hasil"); h.innerHTML = "";
    if (!sel.length) { h.appendChild(el("p","muted","Belum ada obat dalam daftar.")); return; }
    h.appendChild(el("h3","","Penjelasan obat"));
    sel.forEach(e => {
        const box = el("div","card");
        if (e.drug) {
            const a = el("a","",e.label); a.href="obat.html?id="+e.id; box.appendChild(el("h4")).appendChild(a);
            const s = e.drug.sec, overview = window.MW_LANG === "en" ? "Summary" : "Ringkasan";
            const uses = window.MW_LANG === "en" ? "Indications" : "Indikasi";
            const first = k => (s[k]||[]).filter(r => r !== "-")[0];
            if (first(overview)) box.appendChild(el("p","",first(overview)));
            if (first(uses)) box.appendChild(el("p","",first(uses)));
            box.appendChild(el("p","muted",window.MW_LANG === "en" ? "See the medicine page for full dosage and side-effect information." : "Dosis dan efek samping lengkap ada di halaman obat."));
        } else {
            box.appendChild(el("h4","",e.label));
            box.appendChild(el("p","muted", e.unknown ? "Tidak ada di database Medwise, jadi tidak ada penjelasan dan interaksinya tidak bisa dicek." : "Tidak ada penjelasan lengkap, hanya dipakai untuk cek interaksi."));
        }
        h.appendChild(box);
    });
    h.appendChild(el("h3","","Interaksi antar obat"));
    const ix = cekInteraksi(sel);
    if (!ix.length) h.appendChild(el("p","ok","Tidak ada interaksi yang tercatat di database Medwise untuk obat-obat ini. Itu belum menjamin aman, karena databasenya terbatas."));
    ix.forEach(r => { const b = el("div","warn"); b.appendChild(el("strong","",r.x.label+" + "+r.y.label)); b.appendChild(el("p","",r.t)); h.appendChild(b); });
}
function tambah(e){ if (!sel.some(s => s.label === e.label)) sel.push(e); }
function tambahManual(){
    const v = $("tambah").value.trim(); if (!v) return;
    const f = cariEntri(v);
    tambah(f || {id:null,label:v,unknown:true}); $("tambah").value=""; render();
}
function pakaiTeks(t){ cocokkan(t).forEach(tambah); render(); }

const dl = $("daftar");
ENTRIES.forEach(e => { const o = document.createElement("option"); o.value = e.label; dl.appendChild(o); });
$("btnTambah").onclick = tambahManual;
$("tambah").addEventListener("keydown", e => { if (e.key === "Enter") tambahManual(); });
if ($("cocok")) $("cocok").onclick = () => pakaiTeks($("teks").value);
if ($("foto")) $("foto").onchange = () => { const f = $("foto").files[0]; if (f) { $("prev").src = URL.createObjectURL(f); $("prev").hidden = false; } };
if ($("baca")) $("baca").onclick = async () => {
    const f = $("foto").files[0]; if (!f) { $("stat").textContent = "Pilih foto resep dulu."; return; }
    if (typeof Tesseract === "undefined") { $("stat").textContent = "Pembaca teks gagal dimuat. Periksa koneksi internet, atau ketik nama obat manual."; return; }
    $("baca").disabled = true; $("stat").textContent = "Membaca resep...";
    try {
        const r = await Tesseract.recognize(f, "eng", {logger: m => { if (m.status === "recognizing text") $("stat").textContent = "Membaca resep... " + Math.round(m.progress*100) + "%"; }});
        $("teks").value = r.data.text; const n = cocokkan(r.data.text);
        n.forEach(tambah); render();
        $("stat").textContent = n.length ? "Ditemukan " + n.length + " obat. Periksa daftarnya di langkah 2." : "Tidak ada nama obat yang dikenali. Tambahkan manual di langkah 2.";
    } catch (err) { $("stat").textContent = "Gagal membaca foto. Coba foto yang lebih jelas atau ketik manual."; }
    $("baca").disabled = false;
};
render();

// Daftar cakupan interaksi (transparansi)
const GRUP = {aminoglikosida:"Aminoglikosida (gentamisin, amikasin)","hemat-kalium":"Diuretik hemat kalium",imunosupresan:"Imunosupresan","penyekat-beta":"Penyekat beta",kalium:"Suplemen kalium"};
const nm = id => GRUP[id] || (ENTRIES.find(e => e.id === id) || {label:id}).label;
if ($("cakupan")) RULES.forEach(r => $("cakupan").appendChild(el("li","",nm(r.a)+" dengan "+r.b.map(nm).join(", "))));
