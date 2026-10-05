const $ = id => document.getElementById(id);
const el = (t,c,txt) => { const e=document.createElement(t); if(c) e.className=c; if(txt) e.textContent=txt; return e; };
const kosong = r => !r || /^(-|- \*\*[^*]+:\*\*\s*-)$/.test(r);
[...new Set(DRUGS.map(d => d.kelas))].sort().forEach(k => { const o = el("option","",k); o.value = k; $("kelas").appendChild(o); });
function render(){
    const q = $("cari").value.trim().toLowerCase(), k = $("kelas").value, box = $("list"); box.innerHTML = "";
    const rows = DRUGS.filter(d => (!k || d.kelas === k) && (!q || [d.nama,d.idn,d.kondisi].join(" ").toLowerCase().includes(q)));
    if (!rows.length) { box.appendChild(el("p","muted","Obat tidak ditemukan.")); return; }
    rows.forEach(d => {
        const c = el("div","card"), h = el("h3"), a = el("a","",d.nama); a.href = "obat.html?id=" + d.id; h.appendChild(a); c.appendChild(h);
        c.appendChild(el("p","muted",d.kelas));
        const doseSection = window.MW_LANG === "en" ? "Dosage" : "Dosis";
        const lines = (d.sec[doseSection] || []).filter(r => !kosong(r));
        if (!lines.length) c.appendChild(el("p","muted","Dosis belum tersedia."));
        else { const ul = el("ul","bul"); lines.forEach(r => { const li = el("li"), m = r.match(/^- \*\*(.+?):\*\*\s*(.*)/);
            if (m) { li.appendChild(el("strong","",m[1]+": ")); li.appendChild(document.createTextNode(m[2])); } else li.textContent = r.replace(/^- /,"");
            ul.appendChild(li); }); c.appendChild(ul); }
        box.appendChild(c);
    });
}
$("cari").addEventListener("input", render); $("kelas").addEventListener("change", render); render();
