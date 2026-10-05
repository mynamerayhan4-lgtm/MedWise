// Mesin pencocokan obat dan interaksi (dipakai beberapa halaman)
const $ = id => document.getElementById(id);
const ALIAS = {paracetamol:["paracetamol","parasetamol","acetaminophen"],ibuprofen:["ibuprofen"],amoxicillin:["amoxicillin","amoksisilin","amoxicilin"],
 metformin:["metformin"],rifampicin:["rifampicin","rifampisin"],amlodipine:["amlodipine","amlodipin"],captopril:["captopril","kaptopril"],
 furosemide:["furosemide","furosemid"],simvastatin:["simvastatin"],omeprazole:["omeprazole","omeprazol"],salbutamol:["salbutamol"],
 dexamethasone:["dexamethasone","deksametason"],prednisone:["prednisone","prednison"],zinc:["zinc","zink"],"folic-acid":["folic acid","asam folat"],
 oxytocin:["oxytocin","oksitosin"],diazepam:["diazepam"],"oral-rehydration-salts":["oralit"],
 cetirizine:["cetirizine","setirizin","cetirizin"],loratadine:["loratadine","loratadin"],ambroxol:["ambroxol","ambroksol"],
 glimepiride:["glimepiride","glimepirid","glimepirida"],gliclazide:["gliclazide","gliklazid","gliklazida"],acarbose:["acarbose","akarbose"],
 pioglitazone:["pioglitazone","pioglitazon"],bisoprolol:["bisoprolol"],candesartan:["candesartan","kandesartan"],valsartan:["valsartan"],
 losartan:["losartan"],lisinopril:["lisinopril"],ramipril:["ramipril"],nifedipine:["nifedipine","nifedipin"],
 ciprofloxacin:["ciprofloxacin","siprofloksasin","ciprofloksasin"],cotrimoxazole:["cotrimoxazole","kotrimoksazol","kotrimoxazol"],
 metronidazole:["metronidazole","metronidazol"],azithromycin:["azithromycin","azitromisin"],cefixime:["cefixime","sefiksim"],
 clindamycin:["clindamycin","klindamisin"],levofloxacin:["levofloxacin","levofloksasin"],doxycycline:["doxycycline","doksisiklin"],
 atenolol:["atenolol"],teofilin:["teofilin","theophylline"]};
const GRUP_ID = {bisoprolol:"penyekat-beta",atenolol:"penyekat-beta"};  // id obat -> id kelompok yang dipakai RULES
const ENTRIES = (typeof DRUGS !== "undefined" ? DRUGS : []).map(d => ({id:d.id,gid:GRUP_ID[d.id]||d.id,label:d.nama,keys:ALIAS[d.id]||[d.nama.toLowerCase()],drug:d}))
    .concat(EXTRA.map(e => ({id:e.id,gid:e.id,label:e.label,keys:e.keys})));
const ALLKEYS = new Set(ENTRIES.flatMap(e => e.keys));  // nama persis milik obat lain tidak boleh dicocokkan samar

function norm(s){ return s.toLowerCase().replace(/[^a-z\s]/g," ").replace(/\s+/g," "); }
function lev(a,b){ const m=[...Array(a.length+1)].map((_,i)=>[i]); for(let j=1;j<=b.length;j++) m[0][j]=j;
    for(let i=1;i<=a.length;i++) for(let j=1;j<=b.length;j++) m[i][j]=Math.min(m[i-1][j]+1,m[i][j-1]+1,m[i-1][j-1]+(a[i-1]===b[j-1]?0:1));
    return m[a.length][b.length]; }
function cocokkan(text){
    const n = norm(text), toks = n.split(" ").filter(t => t.length >= 4), out = [];
    ENTRIES.forEach(e => { const hit = e.keys.some(k => k.includes(" ") ? n.includes(k) :
        toks.some(t => t === k || (!ALLKEYS.has(t) && k.length >= 6 && Math.abs(t.length-k.length) <= 2 && lev(t,k) <= (k.length >= 9 ? 2 : 1))));
        if (hit && !out.some(o => o.label === e.label)) out.push(e); });
    return out;
}
function cekInteraksi(list){
    const res = [];
    for (let i=0;i<list.length;i++) for (let j=i+1;j<list.length;j++) {
        [[list[i],list[j]],[list[j],list[i]]].forEach(([x,y]) => RULES.forEach(r => {
            if (x.gid === r.a && r.b.includes(y.gid)) res.push({x,y,t:r.t}); }));
    }
    return res;
}
const el = (t,c,txt) => { const e=document.createElement(t); if(c) e.className=c; if(txt) e.textContent=txt; return e; };

function cariEntri(v){ v=v.trim(); return ENTRIES.find(e => e.label.toLowerCase()===v.toLowerCase()) || cocokkan(v)[0]; }
