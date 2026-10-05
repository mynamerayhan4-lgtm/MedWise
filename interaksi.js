// Data interaksi: hanya yang tercatat di sumber (ISO 53/2021 dan Martindale 36). Tidak lengkap.
const EXTRA = [
 {id:"aspirin",label:"Aspirin",keys:["aspirin","asetosal"]},
 {id:"fenitoin",label:"Fenitoin",keys:["fenitoin","phenytoin"]},
 {id:"fenobarbital",label:"Fenobarbital",keys:["fenobarbital","phenobarbital"]},
 {id:"aminoglikosida",label:"Gentamisin",keys:["gentamisin","gentamicin"]},
 {id:"aminoglikosida",label:"Amikasin",keys:["amikasin","amikacin"]},
 {id:"probenesid",label:"Probenesid",keys:["probenesid","probenecid"]},
 {id:"litium",label:"Litium",keys:["litium","lithium"]},
 {id:"alopurinol",label:"Alopurinol",keys:["alopurinol","allopurinol"]},
 {id:"hemat-kalium",label:"Spironolakton",keys:["spironolakton","spironolactone"]},
 {id:"hemat-kalium",label:"Amilorida",keys:["amilorida","amiloride"]},
 {id:"kalium",label:"Suplemen kalium",keys:["kalium","potassium"]},
 {id:"imunosupresan",label:"Azatioprin",keys:["azatioprin","azathioprine"]},
 {id:"imunosupresan",label:"Siklosporin",keys:["siklosporin","ciclosporin"]},
 {id:"penyekat-beta",label:"Propranolol",keys:["propranolol"]},
 {id:"penyekat-beta",label:"Bisoprolol",keys:["bisoprolol"]},
 {id:"penyekat-beta",label:"Metoprolol",keys:["metoprolol"]},
 {id:"simetidin",label:"Simetidin",keys:["simetidin","cimetidine"]},
 {id:"warfarin",label:"Warfarin",keys:["warfarin"]}
];
const RULES = [
 {a:"prednisone",b:["rifampicin","fenitoin","fenobarbital"],t:"Obat ini mempercepat pemecahan kortikosteroid di tubuh, sehingga efek prednison dapat berkurang."},
 {a:"prednisone",b:["aspirin"],t:"Aspirin bersama kortikosteroid tidak dianjurkan pada penderita kolitis ulseratif."},
 {a:"furosemide",b:["aminoglikosida"],t:"Furosemid dapat menambah efek merusak telinga dari antibiotik aminoglikosida."},
 {a:"furosemide",b:["probenesid"],t:"Probenesid menghambat pembuangan furosemid lewat ginjal."},
 {a:"furosemide",b:["aspirin","litium"],t:"Furosemid dapat menaikkan risiko keracunan salisilat dan litium."},
 {a:"amoxicillin",b:["probenesid"],t:"Probenesid menaikkan dan memperpanjang kadar amoksisilin dalam darah."},
 {a:"amoxicillin",b:["alopurinol"],t:"Alopurinol dapat menambah reaksi kulit akibat amoksisilin."},
 {a:"captopril",b:["kalium","hemat-kalium"],t:"Kombinasi ini dapat menaikkan kadar kalium dalam darah."},
 {a:"captopril",b:["imunosupresan"],t:"Imunosupresan dapat menimbulkan kelainan darah pada pasien gagal ginjal yang memakai kaptopril."},
 {a:"salbutamol",b:["penyekat-beta"],t:"Penyekat beta sebaiknya tidak dipakai bersama salbutamol karena dapat saling melawan efek."},
 {a:"metformin",b:["simetidin"],t:"Simetidin menurunkan pembuangan metformin lewat ginjal sehingga kadarnya dapat naik."},
 {a:"metformin",b:["warfarin"],t:"Dosis antikoagulan mungkin perlu disesuaikan bila dipakai bersama metformin."}
];

// Tambahan dari entri ISO 2021 untuk obat batch 3
EXTRA.push(
 {id:"antasida",label:"Antasida",keys:["antasida","antacid"]},
 {id:"sukralfat",label:"Sukralfat",keys:["sukralfat","sucralfate"]},
 {id:"ergot",label:"Ergotamin",keys:["ergotamin","ergotamine"]},
 {id:"karbamazepin",label:"Karbamazepin",keys:["karbamazepin","carbamazepine"]},
 {id:"ketokonazol",label:"Ketokonazol",keys:["ketokonazol","ketoconazole"]},
 {id:"eritromisin",label:"Eritromisin",keys:["eritromisin","erythromycin"]},
 {id:"insulin",label:"Insulin",keys:["insulin"]}
);
RULES.push(
 {a:"cefixime",b:["nifedipine"],t:"Nifedipin dapat menaikkan ketersediaan sefiksim di dalam tubuh."},
 {a:"glimepiride",b:["captopril","lisinopril","ramipril","alopurinol","metformin","gliclazide","pioglitazone","insulin"],t:"Dapat memperkuat efek penurun gula darah sehingga risiko hipoglikemia naik."},
 {a:"gliclazide",b:["aspirin","probenesid","penyekat-beta"],t:"Dapat memperkuat efek penurun gula darah gliklazid sehingga risiko hipoglikemia naik."},
 {a:"ramipril",b:["prednisone","dexamethasone","ibuprofen","alopurinol","imunosupresan","kalium","hemat-kalium","furosemide"],t:"ISO mencantumkan kombinasi ini dalam daftar interaksi ramipril. Minta dokter atau apoteker memeriksanya, misalnya tekanan darah dan kadar kalium."},
 {a:"cetirizine",b:["diazepam"],t:"Hati-hati bila dipakai bersama obat penenang karena dapat menambah kantuk."},
 {a:"doxycycline",b:["fenitoin","fenobarbital","karbamazepin"],t:"Obat ini mempercepat pembuangan doksisiklin sehingga kadarnya dalam darah turun."},
 {a:"cotrimoxazole",b:["warfarin"],t:"Kotrimoksazol dapat menambah efek antikoagulan."},
 {a:"cotrimoxazole",b:["fenitoin"],t:"Kotrimoksazol memperpanjang waktu paruh fenitoin."},
 {a:"cotrimoxazole",b:["metformin","glimepiride","gliclazide","pioglitazone"],t:"Dapat memengaruhi dosis obat penurun gula darah."},
 {a:"ciprofloxacin",b:["antasida"],t:"Antasida berisi aluminium atau magnesium hidroksida mengurangi penyerapan siprofloksasin. Minum siprofloksasin 1 sampai 2 jam sebelum atau minimal 4 jam sesudah antasida."},
 {a:"ciprofloxacin",b:["teofilin"],t:"Siprofloksasin dapat menaikkan kadar teofilin dalam darah."},
 {a:"levofloxacin",b:["antasida","sukralfat"],t:"Menurunkan penyerapan levofloksasin. Beri jarak 2 jam sebelum atau sesudah levofloksasin."},
 {a:"azithromycin",b:["ergot"],t:"Tidak boleh diberikan bersamaan karena kemungkinan ergotisme."},
 {a:"azithromycin",b:["antasida"],t:"Minum azitromisin minimal 1 jam sebelum atau 2 jam sesudah antasida."},
 {a:"loratadine",b:["ketokonazol","eritromisin","simetidin"],t:"Kadar loratadin dalam darah dapat naik, tetapi perubahan klinis bermakna tidak dilaporkan."}
);
