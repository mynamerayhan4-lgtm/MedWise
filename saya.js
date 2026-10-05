let meds = []; try { meds = JSON.parse(localStorage.getItem("mw_obatku") || "[]"); } catch (e) {}
const simpan = () => { try { localStorage.setItem("mw_obatku", JSON.stringify(meds)); } catch (e) {} };
ENTRIES.filter(e => e.drug).forEach(e => { const o = document.createElement("option"); o.value = e.label; $("daftar").appendChild(o); });

function render(){
    const box = $("daftarSaya"); box.innerHTML = "";
    if (!meds.length) box.appendChild(el("p","muted","Belum ada obat. Tambahkan obat yang kamu minum di atas."));
    meds.forEach((m,i) => {
        const c = el("div","card"), f = cariEntri(m.nama), h = el("h4");
        if (f && f.drug) { const a = el("a","",f.label); a.href = "obat.html?id=" + f.id; h.appendChild(a); } else h.textContent = m.nama;
        c.appendChild(h); c.appendChild(el("p","",[m.dosis,m.aturan,m.catatan].filter(Boolean).join(" · ") || "Tanpa keterangan"));
        const x = el("button","btn line","Hapus"); x.type = "button"; x.onclick = () => { meds.splice(i,1); simpan(); render(); }; c.appendChild(x); box.appendChild(c);
    });
    const ib = $("interaksiSaya"); ib.innerHTML = "";
    if (meds.length < 2) { ib.appendChild(el("p","muted","Tambahkan minimal dua obat untuk memeriksa interaksi.")); return; }
    const ents = []; let unk = 0;
    meds.forEach(m => { const f = cariEntri(m.nama); if (!f) unk++; else if (!ents.some(e => e.label === f.label)) ents.push(f); });
    const ix = cekInteraksi(ents);
    if (!ix.length) ib.appendChild(el("p","ok","Tidak ada interaksi yang tercatat di database Medwise untuk obat-obat ini. Itu belum menjamin aman, karena databasenya terbatas."));
    ix.forEach(r => { const b = el("div","warn"); b.appendChild(el("strong","",r.x.label+" + "+r.y.label)); b.appendChild(el("p","",r.t)); ib.appendChild(b); });
    if (unk) ib.appendChild(el("p","muted",unk + " obat tidak ada di database Medwise, jadi tidak ikut diperiksa."));
}
$("tambahObat").onclick = () => {
    const nama = $("nama").value.trim(); if (!nama) { $("msg").textContent = "Isi nama obat dulu."; return; }
    meds.push({nama, dosis:$("dosis").value.trim(), aturan:$("aturan").value.trim(), catatan:$("catatan").value.trim()});
    simpan(); ["nama","dosis","aturan","catatan"].forEach(i => $(i).value = ""); $("msg").textContent = ""; render();
};
$("salin").onclick = async () => {
    const t = meds.map(m => "- " + [m.nama,m.dosis,m.aturan,m.catatan].filter(Boolean).join(", ")).join("\n") || "(kosong)";
    const title = window.MW_LANG === "en" ? "My medicine list:\n" : "Daftar obat saya:\n";
    try { await navigator.clipboard.writeText(title + t); $("msg").textContent = window.MW_LANG === "en" ? "List copied." : "Daftar disalin."; } catch (e) { $("msg").textContent = window.MW_LANG === "en" ? "Could not copy the list." : "Gagal menyalin."; }
};
render();
