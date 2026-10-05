const $ = id => document.getElementById(id);
const el = (t,c,txt) => { const e=document.createElement(t); if(c) e.className=c; if(txt) e.textContent=txt; return e; };

function tensi(s,d){
    if (s <= d) return {t:"Nilai tidak masuk akal",lvl:"warn",tip:"Sistolik harus lebih besar dari diastolik. Periksa kembali angkanya."};
    if (s < 90 || d < 60) return {t:"Tekanan darah rendah",lvl:"warn",tip:"Bila disertai pusing, lemas, atau nyaris pingsan, periksakan ke dokter."};
    const g = (s>=180||d>=110)?3:(s>=160||d>=100)?2:(s>=140||d>=90)?1:0;
    if (g) return {t:"Hipertensi derajat "+g+(s>=140&&d<90?" (sistolik terisolasi)":""),lvl:g===3?"bad":"warn",
        tip:g===3?"Segera periksakan ke dokter. Bila disertai nyeri dada, sesak napas, lemah satu sisi tubuh, atau bicara pelo, segera ke IGD.":"Ulangi pengukuran di hari berbeda dan konsultasikan dengan dokter."};
    if (s>=130||d>=85) return {t:"Normal tinggi",lvl:"ok",tip:"Jaga gaya hidup sehat dan pantau berkala."};
    if (s>=120||d>=80) return {t:"Normal",lvl:"ok",tip:"Pertahankan gaya hidup sehat."};
    return {t:"Optimal",lvl:"ok",tip:"Pertahankan gaya hidup sehat."};
}
const NOTE = "Diagnosis diabetes memerlukan pemeriksaan laboratorium dan konfirmasi dokter.";
function gula(j,v){
    if (j==="hba1c") return v<5.7?{t:"Normal",lvl:"ok",tip:""}:v<6.5?{t:"Prediabetes",lvl:"warn",tip:"Konsultasikan dengan dokter tentang pola makan dan aktivitas."}:{t:"Masuk rentang diabetes",lvl:"bad",tip:NOTE};
    if (v < 70 && j !== "ttgo") return {t:"Gula darah rendah (di bawah 70 mg/dL)",lvl:"bad",tip:"Bila gemetar, berkeringat dingin, atau bingung, segera minum atau makan sumber gula cepat dan cari bantuan medis bila tidak membaik."};
    if (j==="puasa") return v<100?{t:"Normal",lvl:"ok",tip:""}:v<126?{t:"Prediabetes (glukosa puasa terganggu)",lvl:"warn",tip:"Konsultasikan dengan dokter."}:{t:"Masuk rentang diabetes",lvl:"bad",tip:NOTE};
    if (j==="ttgo") return v<140?{t:"Normal",lvl:"ok",tip:""}:v<200?{t:"Prediabetes (toleransi glukosa terganggu)",lvl:"warn",tip:"Konsultasikan dengan dokter."}:{t:"Masuk rentang diabetes",lvl:"bad",tip:NOTE};
    return v>=200?{t:"Tinggi",lvl:"bad",tip:"Nilai sewaktu 200 mg/dL atau lebih dengan gejala seperti sering haus, sering buang air kecil, dan berat badan turun mengarah ke diabetes. "+NOTE}
                 :{t:"Belum dapat disimpulkan",lvl:"ok",tip:"Gula sewaktu tidak cukup untuk menilai. Lakukan pemeriksaan gula puasa."};
}
function tampil(box,r){ box.innerHTML=""; const d=el("div","res "+r.lvl); d.appendChild(el("strong","",r.t)); if(r.tip) d.appendChild(el("p","",r.tip)); box.appendChild(d); }

let log=[]; try { log = JSON.parse(localStorage.getItem("mw_log")||"[]"); } catch(e){}
function simpan(jenis,nilai,hasil){ log.unshift({w:new Date().toLocaleString(window.MW_LANG === "en" ? "en-US" : "id-ID"),jenis,nilai,hasil}); log=log.slice(0,20); try{localStorage.setItem("mw_log",JSON.stringify(log));}catch(e){} riwayat(); }
function riwayat(){ const b=$("riwayat"); b.innerHTML=""; if(!log.length){ b.appendChild(el("p","muted","Belum ada catatan.")); return; }
    const t=el("table","tbl"); log.forEach(x => { const tr=el("tr"); [x.w,x.jenis,x.nilai,x.hasil].forEach(c => tr.appendChild(el("td","",c))); t.appendChild(tr); });
    const w=el("div","scroll"); w.appendChild(t); b.appendChild(w); }

$("cTensi").onclick = () => { const s=+$("sis").value,d=+$("dia").value;
    if(!s||!d||s>300||d>200||s<50||d<30){ tampil($("rTensi"),{t:"Isi angka yang valid",lvl:"warn",tip:"Sistolik 50 sampai 300, diastolik 30 sampai 200."}); return; }
    const r=tensi(s,d); tampil($("rTensi"),r); if(r.t!=="Nilai tidak masuk akal") simpan("Tensi",s+"/"+d+" mmHg",r.t); };
$("cGula").onclick = () => { const j=$("jenis").value,v=parseFloat($("nilai").value);
    const lim = j==="hba1c"?[3,20]:[20,700];
    if(!v||v<lim[0]||v>lim[1]){ tampil($("rGula"),{t:"Isi angka yang valid",lvl:"warn",tip:"Rentang yang diterima "+lim[0]+" sampai "+lim[1]+"."}); return; }
    const r=gula(j,v); tampil($("rGula"),r); simpan($("jenis").selectedOptions[0].text.split(" (")[0],v+(j==="hba1c"?" %":" mg/dL"),r.t); };
$("hapus").onclick = () => { log=[]; try{localStorage.removeItem("mw_log");}catch(e){} riwayat(); };
riwayat();
