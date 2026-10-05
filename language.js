(() => {
    const KEY = "mw_language";
    const current = localStorage.getItem(KEY) === "en" ? "en" : "id";
    window.MW_LANG = current;
    const en = {
        "Medwise – Informasi obat dan kesehatan": "Medwise – Medicines and health information",
        "Medwise – Informasi obat": "Medwise – Medicines",
        "Semua obat": "All medicines",
        "Kenali obatmu sebelum diminum.": "Know your medicine before you take it.",
        "Dosis, efek samping, dan interaksi obat dalam bahasa yang mudah dipahami.": "Medicine doses, side effects, and interactions explained in plain language.",
        "Cari obat atau kondisi": "Search for a medicine or condition",
        "Cari nama obat, kondisi, atau gejala": "Search for a medicine, condition, or symptom",
        "Cari": "Search",
        "Sering dicari:": "Frequently searched:",
        "obat umum di Indonesia, dari ISO, Martindale, dan Fornas": "common medicines in Indonesia, based on ISO, Martindale, and the National Formulary",
        "Foto resep": "Prescription photo",
        "unggah resep cetak, lihat penjelasan obat dan interaksinya": "upload a printed prescription to see medicine information and interactions",
        "Baca resep": "Read a prescription",
        "Tensi dan gula": "Blood pressure and glucose",
        "Tensi dan gula darah": "Blood pressure and glucose",
        "Daftar obat A–Z": "A–Z medicine list",
        "Semua obat": "All medicines",
        "Berita": "News",
        "Masuk": "Sign in",
        "Menu": "Menu",
        "Fakta singkat": "Quick facts",
        "Pilih huruf pertama nama obat.": "Choose the first letter of a medicine name.",
        "Pilih huruf pertama nama penyakit atau kondisi.": "Choose the first letter of a disease or condition.",
        "Pilih huruf pertama gejala yang kamu rasakan.": "Choose the first letter of a symptom.",
        "Obat": "Medicines",
        "Kondisi": "Conditions",
        "Gejala": "Symptoms",
        "Jelajahi situs": "Explore the site",
        "Cek interaksi obat": "Check medicine interactions",
        "Cek interaksi": "Check interactions",
        "Cari informasi dan efek samping obat": "Medicine information and side effects",
        "Cek izin edar di BPOM": "Check product registration with BPOM",
        "Panduan dosis": "Dosage guide",
        "Cek tekanan darah dan gula darah": "Check blood pressure and blood glucose",
        "Kelola obat dan siapkan daftar untuk tenaga kesehatan": "Manage medicines and prepare a list for your healthcare professional",
        "Baca resep dari foto": "Read a prescription from a photo",
        "Foto resep, lihat penjelasan obat": "Upload a prescription photo and see medicine information",
        "Periksa obat yang dipakai bersamaan": "Check medicines taken together",
        "Simpan obat yang kamu minum": "Keep a list of medicines you take",
        "Dosis dewasa, anak, dan lansia": "Doses for adults, children, and older adults",
        "Cek hasil ukur dan catat riwayat": "Review measurements and keep a history",
        "Jelajahi situs": "Explore the site",
        "Obat umum di Indonesia": "Common medicines in Indonesia",
        "Kabar terbaru seputar obat": "Latest medicine news",
        "BPOM edukasi ratusan warga Ancol Jakut tentang penggunaan obat yang aman": "BPOM educates hundreds of residents in North Jakarta about safe medicine use",
        "BBPOM Jakarta mengajak warga mengelola obat di rumah: beli dari sumber berizin, pakai obat keras sesuai resep, dan buang obat rusak atau kedaluwarsa dengan benar. Warga juga diingatkan memakai Cek KLIK sebelum membeli atau minum obat.": "Jakarta's BBPOM encourages residents to manage medicines safely at home: buy from licensed sources, use prescription medicines as directed, and dispose of damaged or expired medicines properly. Residents are also reminded to use Cek KLIK before buying or taking medicine.",
        "BPOM temukan gudang obat bahan alam, suplemen kesehatan, dan kosmetik ilegal di Tangerang": "BPOM finds a warehouse storing illegal traditional medicines, health supplements, and cosmetics in Tangerang",
        "Nilai barang yang ditemukan mencapai puluhan miliar rupiah.": "The seized goods were valued at tens of billions of rupiah.",
        "BPOM ungkap pyrimidenafil sebagai modus baru obat bahan alam mengandung BKO": "BPOM identifies pyrimidenafil in a new case of traditional medicines containing medicinal chemicals",
        "BPOM menemukan jenis bahan kimia obat (BKO) baru yang dicampurkan ke obat bahan alam.": "BPOM found a new type of medicinal chemical mixed into traditional medicines.",
        "Jangan tertipu klaim alami, BPOM temukan 31 obat bahan alam dan suplemen ilegal mengandung BKO": "Do not be misled by \"natural\" claims: BPOM finds 31 illegal traditional medicines and supplements containing medicinal chemicals",
        "BPOM dorong akses obat inovatif yang aman guna jamin ketahanan kesehatan masyarakat": "BPOM promotes access to safe innovative medicines to strengthen public health resilience",
        "Kepala BPOM meninjau pusat distribusi obat nasional di Cikarang untuk memastikan rantai pasok sesuai standar, dan meminta pelaku usaha memperkuat pengawasan keamanan obat setelah beredar (farmakovigilans).": "The BPOM chief visited a national medicine distribution center in Cikarang to review supply-chain standards and called on businesses to strengthen post-market medicine safety monitoring (pharmacovigilance).",
        "ANTARA · 2 Okt 2026": "ANTARA · 2 Oct 2026",
        "BPOM · siaran pers 30 Sep 2026": "BPOM · press release, 30 Sep 2026",
        "BPOM · siaran pers 10 Sep 2026": "BPOM · press release, 10 Sep 2026",
        "BPOM · berita Juli 2026": "BPOM · news, July 2026",
        "Setiap judul menautkan ke sumber aslinya.": "Each headline links to its original source.",
        "Semua siaran pers BPOM": "All BPOM press releases",
        "Cek izin edar produk di CekBPOM": "Check product registration on CekBPOM",
        "Informasi di situs ini bersifat edukasi dan tidak menggantikan saran dokter atau apoteker.": "This site provides educational information and does not replace advice from a doctor or pharmacist.",
        "Baca resep": "Read a prescription",
        "Kenali obatmu sebelum diminum.": "Know your medicine before you take it.",
        "Baca resep dan cek interaksi – Medwise": "Read a prescription and check interactions – Medwise",
        "Unggah foto resep, lalu Medwise mencocokkan nama obatnya dan memeriksa interaksi antar obat. Foto diproses di browsermu dan tidak dikirim ke server kami. Hasil bacaan paling baik untuk resep cetak. Tulisan tangan dokter sering gagal terbaca, jadi selalu periksa dan ubah daftar di langkah 2.": "Upload a prescription photo. Medwise matches medicine names and checks for interactions. The photo is processed in your browser and is not sent to our server. Printed prescriptions work best. Handwriting may not be read correctly, so always review and edit the list in step 2.",
        "1. Foto resep": "1. Prescription photo",
        "Pratinjau resep": "Prescription preview",
        "Teks hasil bacaan (bisa diedit atau ditempel manual)": "Recognized text (you can edit it or paste text here)",
        "Teks resep muncul di sini": "Prescription text will appear here",
        "Cocokkan teks": "Match text",
        "2. Daftar obat": "2. Medicine list",
        "3. Hasil": "3. Results",
        "Database interaksi Medwise masih terbatas pada obat yang tercatat di ISO 2021 dan Martindale. Tidak adanya interaksi di sini bukan berarti aman. Tanyakan selalu kepada dokter atau apoteker.": "Medwise's interaction database is limited to medicines listed in ISO 2021 and Martindale. No interaction shown here does not mean a combination is safe. Always ask a doctor or pharmacist.",
        "Cek interaksi obat – Medwise": "Medicine interaction checker – Medwise",
        "Pilih dua obat atau lebih yang dipakai bersamaan, lalu lihat interaksi yang tercatat. Punya foto resep? Pakai": "Select two or more medicines taken together to see recorded interactions. Have a prescription photo? Use",
        "Pilih obat": "Select medicines",
        "Hasil": "Results",
        "Interaksi apa saja yang dicakup?": "Which interactions are included?",
        "Hanya yang tercatat di ISO 2021 dan Martindale. Daftar ini terbatas, jadi hasil \"tidak ada interaksi\" belum menjamin aman.": "Only interactions recorded in ISO 2021 and Martindale are included. This list is limited, so a result of \"no interactions found\" does not guarantee safety.",
        "Ketik nama obat lalu Tambah": "Enter a medicine name, then select Add",
        "Tambah": "Add",
        "Belum ada obat dalam daftar.": "No medicines have been added yet.",
        "Penjelasan obat": "Medicine information",
        "Dosis dan efek samping lengkap ada di halaman obat.": "See the medicine page for full dosage and side-effect information.",
        "Tidak ada di database Medwise, jadi tidak ada penjelasan dan interaksinya tidak bisa dicek.": "This medicine is not in the Medwise database, so its information and interactions cannot be checked.",
        "Tidak ada penjelasan lengkap, hanya dipakai untuk cek interaksi.": "Detailed information is unavailable; this entry is only used for interaction checks.",
        "Interaksi antar obat": "Interactions between medicines",
        "Tidak ada interaksi yang tercatat di database Medwise untuk obat-obat ini. Itu belum menjamin aman, karena databasenya terbatas.": "No interactions for these medicines are recorded in the Medwise database. This does not guarantee safety because the database is limited.",
        "Baca resep dan cek interaksi": "Read a prescription and check interactions",
        "Daftar obat saya – Medwise": "My medicine list – Medwise",
        "Daftar obat saya": "My medicine list",
        "Tambah obat": "Add medicine",
        "Catat obat yang kamu minum. Daftar ini hanya tersimpan di browser ini dan tidak dikirim ke mana pun. Medwise otomatis memeriksa interaksi antar obat di daftarmu.": "Keep track of medicines you take. This list is stored only in this browser and is not sent anywhere. Medwise automatically checks for interactions among your listed medicines.",
        "Nama obat": "Medicine name",
        "mis. Metformin": "e.g. Metformin",
        "Dosis": "Dose",
        "mis. 500 mg": "e.g. 500 mg",
        "Aturan pakai": "Instructions",
        "mis. 2x sehari sesudah makan": "e.g. twice daily after meals",
        "Catatan": "Notes",
        "opsional": "optional",
        "Obat yang kamu minum": "Medicines you take",
        "Salin daftar untuk ditunjukkan ke dokter": "Copy list to show your doctor",
        "Interaksi dalam daftarmu": "Interactions in your list",
        "Belum ada obat. Tambahkan obat yang kamu minum di atas.": "No medicines yet. Add the medicines you take above.",
        "Masukkan hasil ukur dari alat atau laboratorium, lalu lihat artinya. Alat ini tidak mengukur tubuhmu dan tidak menggantikan diagnosis dokter.": "Enter a measurement from a device or laboratory to see what it may mean. This tool does not measure your body and does not replace a doctor's diagnosis.",
        "Tanpa keterangan": "No additional details",
        "Hapus": "Remove",
        "Tambahkan minimal dua obat untuk memeriksa interaksi.": "Add at least two medicines to check for interactions.",
        "Daftar disalin.": "List copied.",
        "Gagal menyalin.": "Could not copy the list.",
        "Isi nama obat dulu.": "Enter a medicine name first.",
        "Data obat tidak termuat. Pastikan data (3).js satu folder dengan index.html, lalu tekan Ctrl+F5.": "Medicine data could not be loaded. Make sure data (3).js is in the same folder as index.html, then press Ctrl+F5.",
        "Obat tidak ada di database Medwise, jadi tidak ikut diperiksa.": "A medicine is not in the Medwise database and was not checked.",
        "Panduan dosis – Medwise": "Dosage guide – Medwise",
        "Dosis umum dewasa, anak, dan lansia dari ISO 2021 dan Martindale. Dosis sebenarnya bergantung pada usia, berat badan, fungsi ginjal dan hati, serta penyakitnya. Ikuti resep dokter atau saran apoteker.": "General doses for adults, children, and older adults from ISO 2021 and Martindale. The appropriate dose depends on age, weight, kidney and liver function, and medical conditions. Follow your doctor's prescription or a pharmacist's advice.",
        "Cari obat": "Search medicines",
        "mis. amoksisilin": "e.g. amoxicillin",
        "Kelas obat": "Medicine class",
        "Semua kelas": "All classes",
        "Obat tidak ditemukan.": "No medicines found.",
        "Dosis belum tersedia.": "Dosage information is not available.",
        "Cek tekanan darah dan gula darah – Medwise": "Check blood pressure and blood glucose – Medwise",
        "Masukkan hasil ukur dari alat atau laboratorium, lalu lihat artinya. Alat ini tidak mengukur tubuhmu dan tidak menggantikan diagnosis dokter.": "Enter a measurement from a device or laboratory to see what it may mean. This tool does not measure your body and does not replace a doctor's diagnosis.",
        "Tekanan darah (mmHg)": "Blood pressure (mmHg)",
        "Tensi": "Blood pressure",
        "Sistolik": "Systolic",
        "Diastolik": "Diastolic",
        "Cek": "Check",
        "Gula darah": "Blood glucose",
        "Jenis pemeriksaan": "Test type",
        "Gula darah puasa (mg/dL)": "Fasting blood glucose (mg/dL)",
        "2 jam setelah beban glukosa 75 g (mg/dL)": "2 hours after a 75 g glucose load (mg/dL)",
        "Gula darah sewaktu (mg/dL)": "Random blood glucose (mg/dL)",
        "Nilai": "Value",
        "HbA1c (%)": "HbA1c (%)",
        "Riwayat di browser ini": "History in this browser",
        "Hapus riwayat": "Clear history",
        "Rujukan klasifikasi: tekanan darah mengikuti kategori ESC/ESH 2018 yang dipakai konsensus PERHI, gula darah mengikuti kriteria PERKENI dan ADA. Satu kali ukur belum cukup untuk diagnosis. Pastikan pengukuran sesuai petunjuk alat dan ulangi di waktu berbeda.": "Classification references: blood pressure follows the ESC/ESH 2018 categories used by the PERHI consensus; blood glucose follows PERKENI and ADA criteria. One measurement is not enough for a diagnosis. Follow your device instructions and repeat measurements at different times.",
        "Belum ada catatan.": "No records yet.",
        "Nilai tidak masuk akal": "Invalid reading",
        "Sistolik harus lebih besar dari diastolik. Periksa kembali angkanya.": "Systolic pressure must be higher than diastolic pressure. Check the values.",
        "Tekanan darah rendah": "Low blood pressure",
        "Bila disertai pusing, lemas, atau nyaris pingsan, periksakan ke dokter.": "If accompanied by dizziness, weakness, or near-fainting, consult a doctor.",
        "Normal tinggi": "Elevated",
        "Normal": "Normal",
        "Optimal": "Optimal",
        "Segera periksakan ke dokter. Bila disertai nyeri dada, sesak napas, lemah satu sisi tubuh, atau bicara pelo, segera ke IGD.": "Seek medical care promptly. If accompanied by chest pain, shortness of breath, weakness on one side, or slurred speech, go to an emergency department immediately.",
        "Ulangi pengukuran di hari berbeda dan konsultasikan dengan dokter.": "Repeat the measurement on different days and consult a doctor.",
        "Jaga gaya hidup sehat dan pantau berkala.": "Maintain a healthy lifestyle and monitor regularly.",
        "Pertahankan gaya hidup sehat.": "Continue a healthy lifestyle.",
        "Diagnosis diabetes memerlukan pemeriksaan laboratorium dan konfirmasi dokter.": "Diabetes requires laboratory testing and confirmation by a doctor.",
        "Prediabetes": "Prediabetes",
        "Prediabetes (glukosa puasa terganggu)": "Prediabetes (impaired fasting glucose)",
        "Prediabetes (toleransi glukosa terganggu)": "Prediabetes (impaired glucose tolerance)",
        "Konsultasikan dengan dokter tentang pola makan dan aktivitas.": "Consult a doctor about diet and physical activity.",
        "Konsultasikan dengan dokter.": "Consult a doctor.",
        "Masuk rentang diabetes": "In the diabetes range",
        "Gula darah rendah (di bawah 70 mg/dL)": "Low blood glucose (below 70 mg/dL)",
        "Bila gemetar, berkeringat dingin, atau bingung, segera minum atau makan sumber gula cepat dan cari bantuan medis bila tidak membaik.": "If you are shaky, sweating, or confused, take a fast-acting source of sugar and seek medical help if you do not improve.",
        "Tinggi": "High",
        "Nilai sewaktu 200 mg/dL atau lebih dengan gejala seperti sering haus, sering buang air kecil, dan berat badan turun mengarah ke diabetes. ": "A random reading of 200 mg/dL or higher with symptoms such as increased thirst, frequent urination, and weight loss may indicate diabetes. ",
        "Belum dapat disimpulkan": "Inconclusive",
        "Gula sewaktu tidak cukup untuk menilai. Lakukan pemeriksaan gula puasa.": "A random blood glucose reading is not enough to assess this. Get a fasting blood glucose test.",
        "Isi angka yang valid": "Enter a valid value",
        "Sistolik 50 sampai 300, diastolik 30 sampai 200.": "Systolic: 50 to 300; diastolic: 30 to 200.",
        "Rentang yang diterima ": "Accepted range: ",
        "Tidak ada interaksi yang tercatat di database Medwise untuk obat-obat ini. Itu belum menjamin aman, karena databasenya terbatas.": "No interactions for these medicines are recorded in the Medwise database. This does not guarantee safety because the database is limited.",
        "Semua obat": "All medicines",
        "Obat tidak ditemukan. Coba kata kunci lain.": "No medicines found. Try another search term.",
        "Informasi ini bersifat edukasi. Konsultasikan dengan dokter atau apoteker sebelum memakai obat.": "This information is for educational purposes. Consult a doctor or pharmacist before using any medicine.",
        "Kelas: ": "Class: ",
        "Obat berawalan ": "Medicines starting with ",
        "Hasil pencarian ": "Search results for ",
        "Medwise: Informasi obat": "Medwise: Medicine information"
    };
    const sections = {
        "Ringkasan": "Summary", "Indikasi": "Indications", "Dosis": "Dosage",
        "Efek samping": "Side effects", "Peringatan": "Warnings",
        "Interaksi": "Interactions", "Penyimpanan": "Storage",
        "Ketersediaan di Fornas": "Availability in the National Formulary",
        "Catatan verifikasi": "Verification notes", "Sumber": "Sources"
    };
    const GRUPS = {
        "Aminoglikosida (gentamisin, amikasin)": "Aminoglycosides (gentamicin, amikacin)",
        "Diuretik hemat kalium": "Potassium-sparing diuretics",
        "Imunosupresan": "Immunosuppressants", "Penyekat beta": "Beta blockers",
        "Suplemen kalium": "Potassium supplements"
    };
    const EXTRA_NAMES = {
        "Aspirin": "Aspirin", "Fenitoin": "Phenytoin", "Fenobarbital": "Phenobarbital",
        "Gentamisin": "Gentamicin", "Amikasin": "Amikacin", "Probenesid": "Probenecid",
        "Litium": "Lithium", "Alopurinol": "Allopurinol", "Spironolakton": "Spironolactone",
        "Amilorida": "Amiloride", "Suplemen kalium": "Potassium supplement",
        "Azatioprin": "Azathioprine", "Siklosporin": "Ciclosporin", "Propranolol": "Propranolol",
        "Atenolol": "Atenolol", "Bisoprolol": "Bisoprolol", "Metoprolol": "Metoprolol",
        "Simetidin": "Cimetidine", "Warfarin": "Warfarin", "Antasida": "Antacid",
        "Teofilin": "Theophylline", "Sukralfat": "Sucralfate", "Ergotamin": "Ergotamine",
        "Karbamazepin": "Carbamazepine", "Ketokonazol": "Ketoconazole",
        "Eritromisin": "Erythromycin", "Insulin": "Insulin"
    };
    const INTERACTION_TEXT = {
        "Obat ini mempercepat pemecahan kortikosteroid di tubuh, sehingga efek prednison dapat berkurang.": "This medicine speeds up the breakdown of corticosteroids in the body and may reduce the effect of prednisone.",
        "Aspirin bersama kortikosteroid tidak dianjurkan pada penderita kolitis ulseratif.": "Aspirin with corticosteroids is not recommended for people with ulcerative colitis.",
        "Furosemid dapat menambah efek merusak telinga dari antibiotik aminoglikosida.": "Furosemide may increase the ear-damaging effects of aminoglycoside antibiotics.",
        "Probenesid menghambat pembuangan furosemid lewat ginjal.": "Probenecid may reduce the kidney clearance of furosemide.",
        "Furosemid dapat menaikkan risiko keracunan salisilat dan litium.": "Furosemide may increase the risk of salicylate and lithium toxicity.",
        "Probenesid menaikkan dan memperpanjang kadar amoksisilin dalam darah.": "Probenecid may increase and prolong amoxicillin levels in the blood.",
        "Alopurinol dapat menambah reaksi kulit akibat amoksisilin.": "Allopurinol may increase the risk of skin reactions from amoxicillin.",
        "Kombinasi ini dapat menaikkan kadar kalium dalam darah.": "This combination may increase potassium levels in the blood.",
        "Imunosupresan dapat menimbulkan kelainan darah pada pasien gagal ginjal yang memakai kaptopril.": "Immunosuppressants may cause blood disorders in people with kidney failure who take captopril.",
        "Penyekat beta sebaiknya tidak dipakai bersama salbutamol karena dapat saling melawan efek.": "Beta blockers should generally not be used with salbutamol because they may oppose its effects.",
        "Simetidin menurunkan pembuangan metformin lewat ginjal sehingga kadarnya dapat naik.": "Cimetidine may reduce the kidney clearance of metformin and increase its levels.",
        "Dosis antikoagulan mungkin perlu disesuaikan bila dipakai bersama metformin.": "The anticoagulant dose may need adjustment when taken with metformin.",
        "Nifedipin dapat menaikkan ketersediaan sefiksim di dalam tubuh.": "Nifedipine may increase the availability of cefixime in the body.",
        "Dapat memperkuat efek penurun gula darah sehingga risiko hipoglikemia naik.": "This may strengthen the blood-glucose-lowering effect and increase the risk of hypoglycemia.",
        "Dapat memperkuat efek penurun gula darah gliklazid sehingga risiko hipoglikemia naik.": "This may strengthen gliclazide's blood-glucose-lowering effect and increase the risk of hypoglycemia.",
        "ISO mencantumkan kombinasi ini dalam daftar interaksi ramipril. Minta dokter atau apoteker memeriksanya, misalnya tekanan darah dan kadar kalium.": "ISO lists this combination among ramipril interactions. Ask a doctor or pharmacist to review it, including blood pressure and potassium monitoring where appropriate.",
        "Hati-hati bila dipakai bersama obat penenang karena dapat menambah kantuk.": "Use caution with sedatives, as they may increase drowsiness.",
        "Obat ini mempercepat pembuangan doksisiklin sehingga kadarnya dalam darah turun.": "This medicine speeds up doxycycline clearance and may lower its level in the blood.",
        "Kotrimoksazol dapat menambah efek antikoagulan.": "Cotrimoxazole may increase the effect of anticoagulants.",
        "Kotrimoksazol memperpanjang waktu paruh fenitoin.": "Cotrimoxazole may prolong the half-life of phenytoin.",
        "Dapat memengaruhi dosis obat penurun gula darah.": "This may affect the dose of blood-glucose-lowering medicines.",
        "Antasida berisi aluminium atau magnesium hidroksida mengurangi penyerapan siprofloksasin. Minum siprofloksasin 1 sampai 2 jam sebelum atau minimal 4 jam sesudah antasida.": "Antacids containing aluminium or magnesium hydroxide reduce ciprofloxacin absorption. Take ciprofloxacin 1 to 2 hours before, or at least 4 hours after, the antacid.",
        "Siprofloksasin dapat menaikkan kadar teofilin dalam darah.": "Ciprofloxacin may increase theophylline levels in the blood.",
        "Menurunkan penyerapan levofloksasin. Beri jarak 2 jam sebelum atau sesudah levofloksasin.": "This reduces levofloxacin absorption. Separate administration by 2 hours before or after levofloxacin.",
        "Tidak boleh diberikan bersamaan karena kemungkinan ergotisme.": "Do not use together because of the risk of ergotism.",
        "Minum azitromisin minimal 1 jam sebelum atau 2 jam sesudah antasida.": "Take azithromycin at least 1 hour before or 2 hours after the antacid.",
        "Kadar loratadin dalam darah dapat naik, tetapi perubahan klinis bermakna tidak dilaporkan.": "Loratadine levels in the blood may increase, although no clinically significant change has been reported."
    };

    const localizeData = () => {
        if (current !== "en" || typeof DRUGS === "undefined" || typeof DRUGS_EN === "undefined") return;
        DRUGS.forEach(drug => {
            const translation = DRUGS_EN[drug.id];
            if (!translation) return;
            ["nama", "idn", "kelas", "kondisi", "gejala"].forEach(key => {
                if (translation[key] !== undefined) drug[key] = translation[key];
            });
            if (translation.sec) {
                const translatedSections = {};
                Object.keys(translation.sec).forEach(key => {
                    translatedSections[(typeof DRUGS_EN_SECTION_LABELS !== "undefined" && DRUGS_EN_SECTION_LABELS[key]) || sections[key] || key] = translation.sec[key];
                });
                drug.sec = translatedSections;
            }
        });
        if (typeof EXTRA !== "undefined") {
            EXTRA.forEach(entry => {
                if (GRUPS[entry.label]) entry.label = GRUPS[entry.label];
                else if (EXTRA_NAMES[entry.label]) entry.label = EXTRA_NAMES[entry.label];
            });
        }
        if (typeof RULES !== "undefined") {
            RULES.forEach(rule => {
                if (INTERACTION_TEXT[rule.t]) rule.t = INTERACTION_TEXT[rule.t];
            });
        }
    };
    localizeData();

    const translateText = value => {
        const trimmed = value.trim();
        if (en[trimmed]) return value.replace(trimmed, en[trimmed]);
        if (trimmed.includes(" dengan ")) {
            let translated = trimmed.replaceAll(" dengan ", " with ");
            Object.keys(GRUPS).forEach(source => { translated = translated.replaceAll(source, GRUPS[source]); });
            return value.replace(trimmed, translated);
        }
        const medicineCount = trimmed.match(/^(\d+) obat$/);
        if (medicineCount) return value.replace(trimmed, `${medicineCount[1]} medicines`);
        if (trimmed === "ANTARA · 2 Okt 2026") return value.replace(trimmed, "ANTARA · 2 Oct 2026");
        if (trimmed === "BPOM · siaran pers 30 Sep 2026") return value.replace(trimmed, "BPOM · press release, 30 Sep 2026");
        if (trimmed.startsWith("Membaca resep... ")) return value.replace("Membaca resep...", "Reading prescription...");
        if (trimmed === "Pilih foto resep dulu.") return value.replace(trimmed, "Choose a prescription photo first.");
        if (trimmed.startsWith("Pembaca teks gagal dimuat.")) return value.replace(trimmed, "The text reader could not be loaded. Check your internet connection or enter the medicine names manually.");
        const found = trimmed.match(/^Ditemukan (\d+) obat\. Periksa daftarnya di langkah 2\.$/);
        if (found) return value.replace(trimmed, `${found[1]} medicines found. Review the list in step 2.`);
        const unknownMeds = trimmed.match(/^(\d+) obat tidak ada di database Medwise, jadi tidak ikut diperiksa\.$/);
        if (unknownMeds) return value.replace(trimmed, `${unknownMeds[1]} medicines are not in the Medwise database and were not checked.`);
        const range = trimmed.match(/^Rentang yang diterima (\d+(?:\.\d+)?) sampai (\d+(?:\.\d+)?)\.$/);
        if (range) return value.replace(trimmed, `Accepted range: ${range[1]} to ${range[2]}.`);
        const hypertension = trimmed.match(/^Hipertensi derajat (\d+)( \(sistolik terisolasi\))?$/);
        if (hypertension) return value.replace(trimmed, `Hypertension stage ${hypertension[1]}${hypertension[2] ? " (isolated systolic)" : ""}`);
        if (trimmed.startsWith("Gagal membaca foto.")) return value.replace(trimmed, "Could not read the photo. Try a clearer image or enter the medicines manually.");
        if (trimmed.startsWith("Tidak ada nama obat yang dikenali.")) return value.replace(trimmed, "No medicine names were recognized. Add them manually in step 2.");
        if (/^Interaksi antara/.test(trimmed)) return value.replace(trimmed, trimmed.replace("Interaksi antara", "Interaction between"));
        return value;
    };
    const translateDom = root => {
        if (current !== "en" || !root) return;
        const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
        let node;
        while ((node = walker.nextNode())) {
            if (node.parentElement && /^(SCRIPT|STYLE|TEXTAREA)$/i.test(node.parentElement.tagName)) continue;
            const translated = translateText(node.nodeValue);
            if (translated !== node.nodeValue) node.nodeValue = translated;
        }
        root.querySelectorAll("[placeholder],[aria-label],[alt],[title]").forEach(element => {
            ["placeholder", "aria-label", "alt", "title"].forEach(attribute => {
                const value = element.getAttribute(attribute);
                if (!value) return;
                let translated = en[value];
                if (!translated && attribute === "aria-label" && value.startsWith("Hapus ")) translated = "Remove " + value.slice("Hapus ".length);
                if (translated) element.setAttribute(attribute, translated);
            });
        });
    };

    if (current === "en") {
        document.documentElement.lang = "en";
        const title = en[document.title];
        if (title) document.title = title;
        translateDom(document.body);
        document.title = en[document.title] || document.title;
        new MutationObserver(records => records.forEach(record => {
            record.addedNodes.forEach(node => {
                if (node.nodeType === Node.TEXT_NODE) {
                    const translated = translateText(node.nodeValue);
                    if (translated !== node.nodeValue) node.nodeValue = translated;
                }
                else if (node.nodeType === Node.ELEMENT_NODE) translateDom(node);
            });
        })).observe(document.body, {childList: true, subtree: true, characterData: true});
    }

    const bar = document.querySelector(".site-header .bar");
    if (bar) {
        const switcher = document.createElement("button");
        switcher.type = "button";
        switcher.className = "language-switch";
        switcher.textContent = current === "en" ? "EN | ID" : "ID | EN";
        switcher.setAttribute("aria-label", current === "en" ? "Switch to Indonesian" : "Switch to English");
        switcher.addEventListener("click", () => {
            localStorage.setItem(KEY, current === "en" ? "id" : "en");
            location.reload();
        });
        bar.appendChild(switcher);
    }
})();
