// English translations of the Indonesian medication catalog.
// `sec` retains the source section keys; use DRUGS_EN_SECTION_LABELS for display labels.
const DRUGS_EN_SECTION_LABELS = {
  "Ringkasan": "Summary",
  "Indikasi": "Indications",
  "Dosis": "Dosage",
  "Efek samping": "Side effects",
  "Peringatan": "Warnings",
  "Interaksi": "Interactions",
  "Penyimpanan": "Storage",
  "Ketersediaan di Fornas": "Availability in the National Formulary",
  "Catatan verifikasi": "Verification notes",
  "Sumber": "Sources"
};

const DRUGS_EN = {
  "paracetamol": {
    nama: "Paracetamol", idn: "Paracetamol", kelas: "Analgesic and antipyretic",
    kondisi: "Fever, mild to moderate pain", gejala: "Fever, headache, pain",
    sec: {
      "Ringkasan": ["Paracetamol relieves pain and reduces fever, with weak anti-inflammatory effects. It is often chosen for older adults, children, people with asthma, and those who cannot tolerate aspirin or similar anti-inflammatory medicines."],
      "Indikasi": ["Mild pain such as headache, toothache, menstrual pain, and muscle pain. Reduces fever, including post-immunization fever. Oral, suppository, and infusion forms are available for short-term moderate pain."],
      "Dosis": ["- **Adults:** 0.5 to 1 g every 4 to 6 hours, maximum 4 g per day. Suppository: 0.5 to 1 g every 4 to 6 hours, up to 4 times daily. According to ISO (500 mg tablets): age 13 years and older, 1 to 2 tablets every 4 to 6 hours.", "- **Children:** 500 mg tablets: ages 1 to 5 years, ¼ to ½ tablet; ages 6 to 12 years, ½ to 1 tablet, every 4 to 6 hours. 120 mg/5 mL syrup: under 1 year, ½ to 1 teaspoon; ages 1 to 5 years, 1 to 2 teaspoons, every 4 to 6 hours.", "- **Older adults:** -"],
      "Efek samping": ["- Common: Rare and usually mild. Skin rash and allergic reactions sometimes occur.", "- Serious: Large doses can damage the liver and sometimes the kidneys. Blood-cell disorders have been reported. Overdose requires prompt treatment with acetylcysteine or methionine."],
      "Peringatan": ["Do not exceed the daily dose. Not for people allergic to paracetamol or those with impaired liver function."],
      "Interaksi": ["-"],
      "Penyimpanan": ["White crystalline powder. Protect from light, moisture, and heat; store in a tightly closed container."],
      "Ketersediaan di Fornas": ["- 500 mg tablets (maximum 180 tablets per month)", "- 120 mg/5 mL syrup (2 bottles per case)", "- 100 mg/mL drops (1 bottle per case)"],
      "Sumber": ["- Martindale: The Complete Drug Reference, 36th edition (2009), Paracetamol monograph", "- Indonesian Pharmacopoeia, 6th edition (2020), Paracetamol monograph (number 1046)", "- ISO Indonesia, 53rd edition (2021), product entry containing paracetamol", "- National Formulary, Minister of Health Decree No. HK.01.07/MENKES/1199/2025"]
    }
  },
  "ibuprofen": {
    nama: "Ibuprofen", idn: "Ibuprofen", kelas: "Nonsteroidal anti-inflammatory drug (NSAID), propionic acid derivative",
    kondisi: "Pain, joint inflammation", gejala: "Pain, fever",
    sec: {
      "Ringkasan": ["Ibuprofen is a propionic acid NSAID. Its anti-inflammatory effect may be weaker than that of some other NSAIDs."],
      "Indikasi": ["Mild to moderate pain in dental disease or after tooth extraction, headache, postoperative pain, rheumatic pain, and sprains. Reduces fever."],
      "Dosis": ["- **Adults:** A maintenance dose of 600 mg to 1.2 g per day is often sufficient. Recommended maximums are 2.4 g per day (UK) and 3.2 g per day (US).", "- **Children:** -", "- **Older adults:** -"],
      "Efek samping": ["- Common: Nausea, vomiting, diarrhea, constipation, stomach pain or upper abdominal burning.", "- Serious: Skin rash, bronchospasm, thrombocytopenia, lymphopenia, and reduced visual acuity. Blood disorders such as agranulocytosis and aplastic anemia have been reported."],
      "Peringatan": ["Do not use if allergic to ibuprofen or other NSAIDs, with peptic ulcer, or during the third trimester of pregnancy. Use caution with a history of upper gastrointestinal disease, kidney impairment, heart failure, hypertension or fluid retention, and bleeding disorders. Breastfeeding: the amount in breast milk is very small and is generally considered compatible."],
      "Interaksi": ["-"],
      "Penyimpanan": ["-"],
      "Ketersediaan di Fornas": ["- 200 mg tablets (maximum 30 tablets per month)", "- 400 mg tablets for acute pain (maximum 14 tablets per case)"],
      "Catatan verifikasi": ["The pediatric dose and interactions could not be read in ISO. Complete from another source."],
      "Sumber": ["- Martindale: The Complete Drug Reference, 36th edition (2009), Ibuprofen monograph", "- Indonesian Pharmacopoeia, 6th edition (2020), Ibuprofen monograph: white crystalline powder, practically insoluble in water, very soluble in ethanol", "- ISO Indonesia, 53rd edition (2021), product entry containing ibuprofen", "- National Formulary, Minister of Health Decree No. HK.01.07/MENKES/1199/2025"]
    }
  },
  "amoxicillin": {
    nama: "Amoxicillin", idn: "Amoxicillin", kelas: "Penicillin antibiotic",
    kondisi: "Bacterial infections", gejala: "-",
    sec: {
      "Ringkasan": ["Amoxicillin is an ampicillin analogue for infections caused by susceptible bacteria. It is destroyed by beta-lactamase enzymes and is therefore ineffective against bacteria that produce these enzymes."],
      "Indikasi": ["Infections of the skin and soft tissues, respiratory tract, urinary and genital tracts, gonorrhea, otitis media, and oral infections."],
      "Dosis": ["- **Adults:** Oral: 250 to 500 mg every 8 hours, or 500 to 875 mg every 12 hours. Gonococcal urethritis: 3 g as a single dose (ISO).", "- **Children:** Up to 10 years: 125 to 250 mg every 8 hours. Under 40 kg: 20 to 40 mg/kg per day in divided doses every 8 hours, or 25 to 45 mg/kg per day in divided doses every 12 hours. ISO uses a 20 kg cutoff: under 20 kg, 20 to 40 mg/kg per day in 3 divided doses.", "- **Older adults:** -"],
      "Efek samping": ["- Common: Rash, hives, nausea, vomiting, diarrhea.", "- Serious: Severe allergic reactions and colitis can occur. Cholestatic jaundice is rare; risk is higher with amoxicillin-clavulanate."],
      "Peringatan": ["Not for people allergic to penicillin. Adjust the dose in renal impairment. Pregnancy category B."],
      "Interaksi": ["Probenecid increases and prolongs amoxicillin concentrations in the blood. Allopurinol may increase skin reactions."],
      "Penyimpanan": ["-"],
      "Ketersediaan di Fornas": ["- 250 mg and 500 mg tablets (maximum 10 days)", "- 100 mg/mL drops (1 bottle per case)", "- 125 mg/5 mL dry syrup (1 bottle per case)"],
      "Catatan verifikasi": ["The pediatric weight cutoff differs between Martindale (40 kg) and ISO (20 kg). Reconcile with current guidelines before publication."],
      "Sumber": ["- Martindale: The Complete Drug Reference, 36th edition (2009), Amoxicillin monograph", "- Indonesian Pharmacopoeia, 6th edition (2020), Amoxicillin monograph", "- ISO Indonesia, 53rd edition (2021), product entry containing amoxicillin", "- National Formulary, Minister of Health Decree No. HK.01.07/MENKES/1199/2025"]
    }
  },
  "metformin": {
    nama: "Metformin", idn: "Metformin hydrochloride", kelas: "Biguanide antidiabetic",
    kondisi: "Type 2 diabetes mellitus", gejala: "-",
    sec: {
      "Ringkasan": ["Metformin is a first-choice treatment for type 2 diabetes in patients who are overweight and whose blood glucose is not controlled by diet alone."],
      "Indikasi": ["Type 2 diabetes mellitus. It may be used alone or with a sulfonylurea, thiazolidinedione, or insulin."],
      "Dosis": ["- **Adults:** Initial dose 500 mg two or three times daily, or 850 mg once or twice daily, with or after meals. Increase gradually at intervals of at least 1 week to 2 to 3 g per day (maximum 3 g). Full effect may not be apparent until after 2 weeks.", "- **Children:** -", "- **Older adults:** -"],
      "Efek samping": ["- Common: -", "- Serious: Lactic acidosis is rare but serious, and about half of cases are fatal. If suspected, stop the medicine and seek immediate hospital care. Hemodialysis may help."],
      "Peringatan": ["Not for diabetic coma or ketoacidosis, kidney impairment, chronic liver disease, heart failure, myocardial infarction, alcoholism, or radiological examinations with iodinated contrast. Avoid during dehydration or after severe infection or trauma. Periodic vitamin B12 testing is recommended with long-term use. Hypoglycemia risk increases when combined with a sulfonylurea. Pregnancy: insulin is generally preferred. Breastfeeding: the medicine can enter breast milk."],
      "Interaksi": ["Some anticoagulants (dose may need adjustment). Cimetidine reduces renal elimination of metformin."],
      "Penyimpanan": ["-"],
      "Ketersediaan di Fornas": ["- 500 mg tablets (maximum 120 tablets per month)", "- 850 mg tablets (maximum 60 tablets per month)"],
      "Catatan verifikasi": ["Common adverse effects were not clearly readable in ISO. Complete this information."],
      "Sumber": ["- Martindale: The Complete Drug Reference, 36th edition (2009), Metformin Hydrochloride monograph", "- Indonesian Pharmacopoeia, 6th edition (2020), Metformin Hydrochloride monograph", "- ISO Indonesia, 53rd edition (2021), product entry containing metformin", "- National Formulary, Minister of Health Decree No. HK.01.07/MENKES/1199/2025"]
    }
  },
  "rifampicin": {
    nama: "Rifampicin", idn: "Rifampicin", kelas: "Rifamycin antimycobacterial",
    kondisi: "Tuberculosis", gejala: "-",
    sec: {
      "Ringkasan": ["Rifampicin is a rifamycin used for mycobacterial infections, especially tuberculosis. It is almost always given with other antibiotics to prevent resistance."],
      "Indikasi": ["Tuberculosis and other infections caused by mycobacteria or susceptible organisms. It is also available in fixed combinations with isoniazid and pyrazinamide."],
      "Dosis": ["- **Adults:** 10 mg/kg per day (maximum 600 mg) on an empty stomach. Alternatively: under 50 kg, 450 mg per day; over 50 kg, 600 mg per day. Intermittent schedule: 600 to 900 mg three times weekly. WHO does not recommend twice-weekly dosing.", "- **Children:** -", "- **Older adults:** -"],
      "Efek samping": ["- Common: Nausea, vomiting, loss of appetite, diarrhea, epigastric pain. Taking it after food may reduce stomach upset, but absorption is best on an empty stomach.", "- Serious: Impaired liver function and hepatitis, sometimes fatal. Thrombocytopenia and purpura occur mainly with intermittent schedules; if they occur, the medicine must not be used again. Kidney and menstrual disorders, headache, drowsiness, ataxia, dizziness, and tingling."],
      "Peringatan": ["Watch for liver impairment, especially during the first few weeks."],
      "Interaksi": ["-"],
      "Penyimpanan": ["-"],
      "Ketersediaan di Fornas": ["- Listed in the antituberculosis and antileprosy section: 150 mg and 300 mg tablets", "- Restriction and program details have not yet been read."],
      "Catatan verifikasi": ["The uploaded ISO contains rifampicin only in fixed-dose antituberculosis combinations, so interactions and warnings for rifampicin alone have not been completed."],
      "Sumber": ["- Martindale: The Complete Drug Reference, 36th edition (2009), Rifampicin monograph", "- Indonesian Pharmacopoeia, 6th edition (2020), Rifampicin monograph", "- National Formulary, Minister of Health Decree No. HK.01.07/MENKES/1199/2025"]
    }
  },
  "amlodipine": {
    nama: "Amlodipine", idn: "Amlodipine besylate", kelas: "Calcium channel blocker (dihydropyridine)",
    kondisi: "Hypertension, angina", gejala: "-",
    sec: {
      "Ringkasan": ["Amlodipine lowers blood pressure by relaxing blood vessels."],
      "Indikasi": ["Hypertension and angina, alone or in combination."],
      "Dosis": ["- **Adults:** Start at 5 mg once daily; may be increased to a maximum of 10 mg. Chronic stable or vasospastic angina: 5 to 10 mg.", "- **Children:** -", "- **Older adults:** Start at 2.5 mg once daily in older, small-bodied, or frail patients, or in patients with impaired liver function."],
      "Efek samping": ["- Common: Headache, swelling (edema), fatigue, drowsiness, nausea, abdominal pain, flushing, palpitations, dizziness.", "- Serious: -"],
      "Peringatan": ["Use caution in congestive heart failure, liver or kidney impairment, pregnancy, breastfeeding, and children."],
      "Interaksi": ["-"],
      "Penyimpanan": ["-"],
      "Ketersediaan di Fornas": ["- 5 mg and 10 mg tablets (maximum 30 tablets per month)", "- Separate entry for angina with bradyarrhythmia (5 mg tablet)"],
      "Catatan verifikasi": ["The contraindications in the readable ISO entry appear inconsistent (the listed conditions are unrelated). Do not use them; obtain them from another source."],
      "Sumber": ["- ISO Indonesia, 53rd edition (2021), product entry containing amlodipine", "- National Formulary, Minister of Health Decree No. HK.01.07/MENKES/1199/2025"]
    }
  },
  "captopril": {
    nama: "Captopril", idn: "Captopril", kelas: "ACE inhibitor",
    kondisi: "Hypertension, heart failure", gejala: "-",
    sec: {
      "Ringkasan": ["Captopril lowers blood pressure and reduces the workload on the heart."],
      "Indikasi": ["Mild to moderate hypertension. Severe hypertension when standard therapy is ineffective. Congestive heart failure with a diuretic and, where possible, digitalis."],
      "Dosis": ["- **Adults:** Initial dose 12.5 mg twice daily. Maintenance 25 mg twice daily, increased every 2 to 4 weeks. Maximum 50 mg twice daily. A thiazide diuretic may be added.", "- **Children:** -", "- **Older adults:** -"],
      "Efek samping": ["- Common: Proteinuria, increased blood urea and creatinine, rash and itching, low blood pressure.", "- Serious: Neutropenia or agranulocytosis, anemia, and thrombocytopenia, usually during the first 1 to 3 months."],
      "Peringatan": ["Do not use in people allergic to captopril or another ACE inhibitor (for example, those with a history of angioedema), pregnant or potentially pregnant women, breastfeeding women, kidney failure, or aortic stenosis. Periodic white blood cell counts are needed, especially in at-risk patients."],
      "Interaksi": ["Immunosuppressants can cause blood disorders in patients with kidney failure. Potassium supplements or potassium-sparing diuretics can raise potassium levels."],
      "Penyimpanan": ["-"],
      "Ketersediaan di Fornas": ["- 12.5 mg, 25 mg, and 50 mg tablets (maximum 90 tablets per month)"],
      "Sumber": ["- ISO Indonesia, 53rd edition (2021), product entry containing captopril", "- National Formulary, Minister of Health Decree No. HK.01.07/MENKES/1199/2025"]
    }
  },
  "furosemide": {
    nama: "Furosemide", idn: "Furosemide", kelas: "Diuretic",
    kondisi: "Edema, hypertension", gejala: "-",
    sec: {
      "Ringkasan": ["Furosemide is a potent diuretic that removes excess fluid through urine."],
      "Indikasi": ["Edema due to heart failure, liver cirrhosis, and kidney disease, including nephrotic syndrome. Mild to moderate hypertension, alone or in combination."],
      "Dosis": ["- **Adults:** Edema: initial single dose 20 to 80 mg; may be repeated after 6 to 8 hours and increased by 20 to 40 mg until response is achieved, then 1 to 2 times daily. Severe edema: up to 600 mg per day. Hypertension: 40 mg per day.", "- **Children:** Initial single dose 1 to 2 mg/kg body weight, gradually increased by 1 to 2 mg/kg every 6 to 8 hours if needed.", "- **Older adults:** -"],
      "Efek samping": ["- Common: Central nervous system, gastrointestinal, and skin disorders.", "- Serious: Blood disorders."],
      "Peringatan": ["Do not use in anuria or allergy to furosemide or sulfonamides. Use caution with electrolyte depletion. During pregnancy and breastfeeding, use only when truly necessary and for a short period. Overdose can cause dehydration and electrolyte depletion, especially in older adults. Long-term use of high doses requires laboratory tests."],
      "Interaksi": ["Increases the ear-damaging effects of aminoglycoside antibiotics. Probenecid inhibits furosemide elimination. Increases the risk of salicylate and lithium toxicity."],
      "Penyimpanan": ["-"],
      "Ketersediaan di Fornas": ["- 40 mg tablets (90 to 120 tablets per month, depending on the entry)", "- 10 mg/mL injection (i.v./i.m.)"],
      "Sumber": ["- ISO Indonesia, 53rd edition (2021), product entry containing furosemide", "- National Formulary, Minister of Health Decree No. HK.01.07/MENKES/1199/2025"]
    }
  },
  "simvastatin": {
    nama: "Simvastatin", idn: "Simvastatin", kelas: "Cholesterol-lowering medicine (statin)",
    kondisi: "Hypercholesterolemia, coronary heart disease", gejala: "-",
    sec: {
      "Ringkasan": ["Simvastatin lowers blood cholesterol levels and the risk of vascular disease."],
      "Indikasi": ["Hypercholesterolemia, coronary heart disease, and patients at high risk of atherosclerotic vascular disease."],
      "Dosis": ["- **Adults:** Start at 10 mg once daily in the evening. Adjust the dose at intervals of no less than 4 weeks, to a maximum of 40 mg per day.", "- **Children:** -", "- **Older adults:** -"],
      "Efek samping": ["- Common: Abdominal pain, constipation, muscle pain, headache.", "- Serious: -"],
      "Peringatan": ["Do not use in people with an allergy, active liver disease or persistent unexplained transaminase elevation, or during pregnancy or breastfeeding."],
      "Interaksi": ["-"],
      "Penyimpanan": ["-"],
      "Ketersediaan di Fornas": ["- Used as an adjunct to diet for hyperlipidemia under certain conditions", "- Formulations and prescribing limits have not yet been read."],
      "Sumber": ["- ISO Indonesia, 53rd edition (2021), product entry containing simvastatin", "- National Formulary, Minister of Health Decree No. HK.01.07/MENKES/1199/2025"]
    }
  },
  "omeprazole": {
    nama: "Omeprazole", idn: "Omeprazole", kelas: "Proton pump inhibitor",
    kondisi: "Peptic ulcer, acid reflux", gejala: "-",
    sec: {
      "Ringkasan": ["Omeprazole suppresses stomach acid production."],
      "Indikasi": ["Duodenal and gastric ulcers, NSAID-induced ulcers, Helicobacter pylori eradication, reflux esophagitis, and Zollinger-Ellison syndrome."],
      "Dosis": ["- **Adults:** Duodenal or gastric ulcer: 20 to 40 mg once daily. Prevention of recurrence: 10 mg per day. NSAID-induced ulcer: 20 mg once daily. H. pylori eradication: 40 mg per day with amoxicillin 1.5 g in divided doses for 2 weeks. Reflux esophagitis: 20 mg per day. Zollinger-Ellison: initial dose 60 mg per day.", "- **Children:** -", "- **Older adults:** -"],
      "Efek samping": ["- Common: -", "- Serious: High-dose, long-term use may stimulate growth of gastric ECL cells and excessive bacterial growth in the gastrointestinal tract."],
      "Peringatan": ["Do not use in people allergic to omeprazole. With long-term use, watch for hypochlorhydria and hypergastrinemia. Avoid during pregnancy and breastfeeding unless essential."],
      "Interaksi": ["-"],
      "Penyimpanan": ["-"],
      "Ketersediaan di Fornas": ["- 20 mg capsules (maximum 30 capsules per month)", "- Restriction: short-term treatment of gastric ulcers and certain conditions (details have not been fully read)"],
      "Sumber": ["- ISO Indonesia, 53rd edition (2021), product entry containing omeprazole", "- National Formulary, Minister of Health Decree No. HK.01.07/MENKES/1199/2025"]
    }
  },
  "salbutamol": {
    nama: "Salbutamol", idn: "Salbutamol", kelas: "Beta-2 agonist (bronchodilator)",
    kondisi: "Asthma, chronic bronchitis, COPD", gejala: "Shortness of breath, wheezing",
    sec: {
      "Ringkasan": ["Salbutamol widens the airways."],
      "Indikasi": ["Bronchial asthma, chronic bronchitis, and emphysema."],
      "Dosis": ["- **Adults:** 4 mg tablets: ½ to 1 tablet, 3 to 4 times daily.", "- **Children:** Ages 2 to 6 years: ¼ to ½ tablet, 3 to 4 times daily. Ages 6 to 12 years: ½ tablet, 3 to 4 times daily.", "- **Older adults:** -"],
      "Efek samping": ["- Common: Fine muscle tremor, palpitations, muscle cramps, rapid heartbeat, headache, peripheral vasodilation, especially at high doses.", "- Serious: -"],
      "Peringatan": ["Use caution with hyperthyroidism, hypertension, diabetes, heart disorders, first-trimester pregnancy, and breastfeeding. Do not combine with beta-blockers."],
      "Interaksi": ["Beta-blockers (avoid concomitant use)."],
      "Penyimpanan": ["-"],
      "Ketersediaan di Fornas": ["- 2 mg tablets", "- Restriction: only for acute asthma attacks and/or bronchospasm in COPD or SOPT"],
      "Sumber": ["- ISO Indonesia, 53rd edition (2021), product entry containing salbutamol", "- National Formulary, Minister of Health Decree No. HK.01.07/MENKES/1199/2025"]
    }
  },
  "dexamethasone": {
    nama: "Dexamethasone", idn: "Dexamethasone", kelas: "Corticosteroid",
    kondisi: "-", gejala: "-",
    sec: {
      "Ringkasan": ["Dexamethasone is a corticosteroid with a strong anti-inflammatory effect."],
      "Indikasi": ["Endocrine disorders, congenital adrenal hyperplasia, nonsuppurative thyroiditis, rheumatic diseases, arthritis, bursitis, collagen diseases, and severe skin diseases."],
      "Dosis": ["- **Adults:** Initial dose 0.75 mg per day, then reduce gradually as needed.", "- **Children:** -", "- **Older adults:** -"],
      "Efek samping": ["- Common: -", "- Serious: -"],
      "Peringatan": ["Not for systemic fungal infections."],
      "Interaksi": ["-"],
      "Penyimpanan": ["-"],
      "Ketersediaan di Fornas": ["- 0.5 mg tablets", "- 5 mg/mL injection (maximum 20 mg per day in one of the entries)"],
      "Catatan verifikasi": ["Side effects and interactions could not be read in ISO."],
      "Sumber": ["- ISO Indonesia, 53rd edition (2021), product entry containing dexamethasone", "- National Formulary, Minister of Health Decree No. HK.01.07/MENKES/1199/2025"]
    }
  },
  "prednisone": {
    nama: "Prednisone", idn: "Prednisone", kelas: "Corticosteroid",
    kondisi: "-", gejala: "-",
    sec: {
      "Ringkasan": ["Prednisone is a corticosteroid used for allergies and inflammation."],
      "Indikasi": ["Allergies, inflammation, and conditions requiring glucocorticoids, such as rheumatic, collagen, and skin diseases."],
      "Dosis": ["- **Adults:** 1 to 4 tablets (5 mg) per day or as directed by a doctor. Gradually reduce to the lowest effective dose.", "- **Children:** -", "- **Older adults:** -"],
      "Efek samping": ["- Common: Sodium and fluid retention, low potassium, hypertension, congestive heart failure, muscle weakness, steroid myopathy.", "- Serious: Osteoporosis, fractures, and gastric ulcer."],
      "Peringatan": ["Do not use with allergy to this medicine, gastric ulcer, active TB, osteoporosis, neurological, kidney, or heart disorders, systemic infection, or herpes simplex of the eye. Do not stop abruptly after long-term use."],
      "Interaksi": ["Aspirin with corticosteroids is not recommended in ulcerative colitis. Rifampicin, phenytoin, and phenobarbital accelerate corticosteroid breakdown. Concomitant vaccination requires consideration."],
      "Penyimpanan": ["-"],
      "Ketersediaan di Fornas": ["- 5 mg tablets"],
      "Sumber": ["- ISO Indonesia, 53rd edition (2021), product entry containing prednisone", "- National Formulary, Minister of Health Decree No. HK.01.07/MENKES/1199/2025"]
    }
  },
  "zinc": {
    nama: "Zinc", idn: "Zinc", kelas: "Mineral supplement",
    kondisi: "Diarrhea in children", gejala: "-",
    sec: {
      "Ringkasan": ["Zinc is used as an adjunct to oral rehydration salts (ORS) in children with diarrhea."],
      "Indikasi": ["Adjunct to ORS to replace fluids and prevent dehydration in children with diarrhea."],
      "Dosis": ["- **Adults:** -", "- **Children:** ISO doses for infants and children are listed, but the readable figures and volume appear inconsistent (10 mg with 2 mL). Use official guidance (the National Formulary states that zinc should be given with ORS for 10 days).", "- **Older adults:** -"],
      "Efek samping": ["- Common: Rare when used as directed.", "- Serious: -"],
      "Peringatan": ["Do not use in people allergic to its components."],
      "Interaksi": ["-"],
      "Penyimpanan": ["-"],
      "Ketersediaan di Fornas": ["- 10 mg/mL drops, for children under 2 years (2 bottles per case)", "- 20 mg dispersible tablets, to be given with ORS for 10 days"],
      "Catatan verifikasi": ["The pediatric dose has not been entered because the source is inconsistent. It must be completed."],
      "Sumber": ["- ISO Indonesia, 53rd edition (2021), product entry containing zinc", "- National Formulary, Minister of Health Decree No. HK.01.07/MENKES/1199/2025"]
    }
  },
  "besi-dan-asam-folat": {
    nama: "Iron and folic acid", idn: "Ferrous sulfate / ferrous fumarate / ferrous gluconate + folic acid", kelas: "Iron supplement",
    kondisi: "Iron-deficiency anemia", gejala: "-",
    sec: {
      "Ringkasan": ["-"], "Indikasi": ["-"],
      "Dosis": ["- **Adults:** -", "- **Children:** -", "- **Older adults:** -"],
      "Efek samping": ["- Common: -", "- Serious: -"],
      "Peringatan": ["-"], "Interaksi": ["-"], "Penyimpanan": ["-"],
      "Ketersediaan di Fornas": ["- Coated tablet: Fe (equivalent to 60 mg elemental Fe) + folic acid 0.4 mg"],
      "Catatan verifikasi": ["No clinical source for this product has yet been reviewed."],
      "Sumber": ["- National Formulary, Minister of Health Decree No. HK.01.07/MENKES/1199/2025"]
    }
  },
  "folic-acid": {
    nama: "Folic acid", idn: "Folic acid", kelas: "Vitamin",
    kondisi: "Folate-deficiency anemia, pregnancy", gejala: "-",
    sec: {
      "Ringkasan": ["Folic acid treats folate deficiency and supports pregnancy."],
      "Indikasi": ["Folic acid deficiency, supplementation during pregnancy and breastfeeding, increased requirements, and megaloblastic anemia due to folate deficiency."],
      "Dosis": ["- **Adults:** Deficiency: initial 0.25 to 1 mg per day, maintenance 0.25 to 0.5 mg per day. Pregnancy or breastfeeding: 0.5 to 1 mg per day. Megaloblastic anemia: 0.5 to 1 mg per day.", "- **Children:** -", "- **Older adults:** -"],
      "Efek samping": ["- Common: -", "- Serious: -"],
      "Peringatan": ["-"], "Interaksi": ["-"], "Penyimpanan": ["-"],
      "Ketersediaan di Fornas": ["- 0.4 mg, 1 mg, and 5 mg tablets"],
      "Sumber": ["- ISO Indonesia, 53rd edition (2021), product entry containing folic acid", "- National Formulary, Minister of Health Decree No. HK.01.07/MENKES/1199/2025"]
    }
  },
  "oxytocin": {
    nama: "Oxytocin", idn: "Oxytocin", kelas: "Uterotonic",
    kondisi: "Labor, postpartum hemorrhage", gejala: "-",
    sec: {
      "Ringkasan": ["Oxytocin stimulates uterine contractions and is used under the supervision of a healthcare professional."],
      "Indikasi": ["To increase uterine contractions during labor and assist contraction during the third stage of labor to control postpartum hemorrhage."],
      "Dosis": ["- **Adults:** Labor induction: start at 1 to 4 mU per minute; may be increased by 1 to 2 mU per minute at intervals of at least 20 minutes. Incomplete abortion: 10 units in 500 mL saline or 5% dextrose (D5%) by infusion at 20 to 40 drops per minute. Postpartum hemorrhage: 10 to 40 units in 1000 mL sterile solution by infusion.", "- **Children:** -", "- **Older adults:** -"],
      "Efek samping": ["- Common: -", "- Serious: -"],
      "Peringatan": ["-"], "Interaksi": ["-"], "Penyimpanan": ["-"],
      "Ketersediaan di Fornas": ["- 10 IU/mL injection"],
      "Catatan verifikasi": ["Side effects and warnings could not be read in ISO."],
      "Sumber": ["- ISO Indonesia, 53rd edition (2021), product entry containing oxytocin", "- National Formulary, Minister of Health Decree No. HK.01.07/MENKES/1199/2025"]
    }
  },
  "diazepam": {
    nama: "Diazepam", idn: "Diazepam", kelas: "Benzodiazepine",
    kondisi: "Seizures, anxiety", gejala: "-",
    sec: {
      "Ringkasan": ["-"], "Indikasi": ["-"],
      "Dosis": ["- **Adults:** -", "- **Children:** -", "- **Older adults:** -"],
      "Efek samping": ["- Common: -", "- Serious: -"],
      "Peringatan": ["-"], "Interaksi": ["-"], "Penyimpanan": ["-"],
      "Ketersediaan di Fornas": ["- 5 mg/mL injection (10 ampoules per case, except in ICU and for seizures in tetanus; not for i.m. use in certain entries)", "- 5 mg/2.5 mL enema (2 tubes per day, for seizures)"],
      "Catatan verifikasi": ["The uploaded ISO contains diazepam only in combination products, so clinical information for diazepam alone has not been completed."],
      "Sumber": ["- National Formulary, Minister of Health Decree No. HK.01.07/MENKES/1199/2025"]
    }
  },
  "oral-rehydration-salts": {
    nama: "Oral rehydration salts", idn: "Oral rehydration salts", kelas: "Oral rehydration therapy",
    kondisi: "Diarrhea, dehydration", gejala: "-",
    sec: {
      "Ringkasan": ["-"], "Indikasi": ["-"],
      "Dosis": ["- **Adults:** -", "- **Children:** -", "- **Older adults:** -"],
      "Efek samping": ["- Common: -", "- Serious: -"],
      "Peringatan": ["-"], "Interaksi": ["-"], "Penyimpanan": ["-"],
      "Ketersediaan di Fornas": ["- Powder"],
      "Catatan verifikasi": ["No clinical source for this product has yet been reviewed."],
      "Sumber": ["- National Formulary, Minister of Health Decree No. HK.01.07/MENKES/1199/2025"]
    }
  },
  "cetirizine": {
    nama: "Cetirizine", idn: "Cetirizine hydrochloride", kelas: "Antihistamine (second generation)",
    kondisi: "Allergic rhinitis, urticaria", gejala: "Sneezing, runny nose, itching",
    sec: {
      "Ringkasan": ["Cetirizine relieves allergy symptoms such as sneezing, runny nose, and itching."],
      "Indikasi": ["Perennial and seasonal allergic rhinitis, and chronic idiopathic urticaria."],
      "Dosis": ["- **Adults:** Adults and children over 12 years: 10 mg once daily with the evening meal.", "- **Children:** Ages 6 to 12 years: 10 mg once daily, or 5 mg in the morning and evening.", "- **Older adults:** There are no data suggesting that dose reduction is needed in older adults."],
      "Efek samping": ["- Common: -", "- Serious: -"],
      "Peringatan": ["Do not use in people allergic to cetirizine or hydroxyzine, or in breastfeeding women. Do not exceed the dose when driving or operating machinery. Avoid during pregnancy because data are very limited."],
      "Interaksi": ["Use caution when taken with sedatives and alcohol."],
      "Penyimpanan": ["-"],
      "Ketersediaan di Fornas": ["- Listed in the 2025 National Formulary (formulations and prescribing limits have not yet been read)"],
      "Catatan verifikasi": ["Side effects were not clearly readable in ISO."],
      "Sumber": ["- ISO Indonesia, 53rd edition (2021), product entry containing cetirizine", "- National Formulary, Minister of Health Decree No. HK.01.07/MENKES/1199/2025"]
    }
  },
  "loratadine": {
    nama: "Loratadine", idn: "Loratadine", kelas: "Antihistamine (second generation)",
    kondisi: "Allergic rhinitis, urticaria", gejala: "Sneezing, runny nose, itching",
    sec: {
      "Ringkasan": ["Loratadine relieves allergy symptoms and, at a dose of 10 mg daily, does not cause clinically significant drowsiness."],
      "Indikasi": ["Relief of allergic rhinitis symptoms such as sneezing, runny nose, itchy nose, and itchy or burning eyes, as well as urticaria symptoms."],
      "Dosis": ["- **Adults:** -", "- **Children:** Safety and efficacy in children under 2 years have not been established.", "- **Older adults:** -"],
      "Efek samping": ["- Common: Fatigue, headache, drowsiness, dry mouth, digestive disturbances.", "- Serious: -"],
      "Peringatan": ["Do not use in people hypersensitive to its components. Pregnancy: safety has not been established; use only if the benefit outweighs the risk. In severe liver impairment, use a lower initial dose: 5 mg daily or 10 mg every 2 days."],
      "Interaksi": ["Loratadine levels may increase with ketoconazole, erythromycin, or cimetidine, but no clinically significant changes have been reported. It does not enhance the effects of alcohol."],
      "Penyimpanan": ["-"],
      "Ketersediaan di Fornas": ["- Listed in the 2025 National Formulary (formulations and prescribing limits have not yet been read)"],
      "Catatan verifikasi": ["Adult and pediatric doses could not be read in ISO. Complete this information."],
      "Sumber": ["- ISO Indonesia, 53rd edition (2021), product entry containing loratadine", "- National Formulary, Minister of Health Decree No. HK.01.07/MENKES/1199/2025"]
    }
  },
  "ambroxol": {
    nama: "Ambroxol", idn: "-", kelas: "Mucolytic (expectorant)",
    kondisi: "Productive cough, bronchitis", gejala: "Productive cough",
    sec: {
      "Ringkasan": ["Ambroxol thins mucus so it can be expelled more easily."],
      "Indikasi": ["Mucolytic treatment for acute and chronic respiratory disorders, especially during exacerbations of chronic bronchitis and asthmatic bronchitis."],
      "Dosis": ["- **Adults:** Adults and children over 12 years: 30 mg/5 mL syrup, 5 mL, or 1 tablet, 2 to 3 times daily.", "- **Children:** Ages 6 to 12 years: ½ tablet 2 to 3 times daily. Ages 2 to 6 years: 30 mg/5 mL syrup, 2.5 mL, 2 to 3 times daily. Follow the strength stated on the package.", "- **Older adults:** -"],
      "Efek samping": ["- Common: Intolerance reactions are rare. Mild gastrointestinal disturbances and allergic reactions have been reported, rarely.", "- Serious: -"],
      "Peringatan": ["Do not use in people hypersensitive to ambroxol. Pregnancy (especially the first trimester) and breastfeeding: use only if truly necessary. Do not use long term without consultation."],
      "Interaksi": ["With antibiotics (amoxicillin, cefuroxime, erythromycin, doxycycline), it increases antibiotic penetration into lung tissue."],
      "Penyimpanan": ["-"],
      "Ketersediaan di Fornas": ["- Not found in the 2025 National Formulary (check manually)"],
      "Sumber": ["- ISO Indonesia, 53rd edition (2021), product entry containing ambroxol"]
    }
  },
  "glimepiride": {
    nama: "Glimepiride", idn: "Glimepiride", kelas: "Sulfonylurea antidiabetic",
    kondisi: "Type 2 diabetes mellitus", gejala: "-",
    sec: {
      "Ringkasan": ["Glimepiride lowers blood glucose in type 2 diabetes by stimulating insulin release."],
      "Indikasi": ["Lowering blood glucose in type 2 diabetes that is not controlled by diet and exercise alone."],
      "Dosis": ["- **Adults:** The dose is determined by the blood glucose target, starting with the lowest adequate dose. Treatment should be initiated and monitored by a doctor.", "- **Children:** -", "- **Older adults:** -"],
      "Efek samping": ["- Common: -", "- Serious: -"],
      "Peringatan": ["Do not use in people hypersensitive to glimepiride or other sulfonamides, or in ketoacidosis. Appropriate diet, regular exercise, and weight loss are as important as the medicine. Recognize signs of high blood glucose, such as frequent urination."],
      "Interaksi": ["Hypoglycemia risk increases with insulin and other oral antidiabetics, ACE inhibitors, and allopurinol (the ISO list is longer and has not been fully read)."],
      "Penyimpanan": ["-"],
      "Ketersediaan di Fornas": ["- Listed in the 2025 National Formulary (formulations and prescribing limits have not yet been read)"],
      "Catatan verifikasi": ["Dose figures (mg), side effects, and the complete interaction list have not yet been read. This must be completed before publication."],
      "Sumber": ["- ISO Indonesia, 53rd edition (2021), product entry containing glimepiride", "- National Formulary, Minister of Health Decree No. HK.01.07/MENKES/1199/2025"]
    }
  },
  "gliclazide": {
    nama: "Gliclazide", idn: "Gliclazide", kelas: "Sulfonylurea antidiabetic",
    kondisi: "Type 2 diabetes mellitus", gejala: "-",
    sec: {
      "Ringkasan": ["Gliclazide is a sulfonylurea for diabetes, including in older adults and patients with vascular complications."],
      "Indikasi": ["Diabetes in adults with or without obesity, diabetes in older adults, and diabetes with vascular complications."],
      "Dosis": ["- **Adults:** Initial dose 40 to 80 mg per day, increased gradually. Maximum 320 mg per day. Doses above 160 mg are divided twice daily.", "- **Children:** Not for diabetes in children.", "- **Older adults:** -"],
      "Efek samping": ["- Common: -", "- Serious: Hypoglycemia can occur with all sulfonylureas."],
      "Peringatan": ["Do not use during pregnancy, in insulin-dependent diabetes with ketosis and acidosis, or in people hypersensitive to other sulfonylureas; also avoid during surgery, after major trauma, or during severe infection. Reduce the dose in renal impairment and use caution in liver impairment. May be used with anticoagulants with regular blood tests."],
      "Interaksi": ["The blood-glucose-lowering effect is increased by long-acting sulfonamides, tuberculosis medicines, phenylbutazone, clofibrate, MAO inhibitors, coumarin derivatives, salicylates, probenecid, propranolol, and miconazole."],
      "Penyimpanan": ["-"],
      "Ketersediaan di Fornas": ["- Listed in the 2025 National Formulary (formulations and prescribing limits have not yet been read)"],
      "Sumber": ["- ISO Indonesia, 53rd edition (2021), product entry containing gliclazide", "- National Formulary, Minister of Health Decree No. HK.01.07/MENKES/1199/2025"]
    }
  },
  "acarbose": {
    nama: "Acarbose", idn: "-", kelas: "Antidiabetic, alpha-glucosidase inhibitor",
    kondisi: "Diabetes mellitus", gejala: "-",
    sec: {
      "Ringkasan": ["Acarbose slows carbohydrate absorption in the intestine, helping control blood glucose after meals."],
      "Indikasi": ["Adjunct to diet in diabetes mellitus."],
      "Dosis": ["- **Adults:** Initial dose 50 mg three times daily (or half of a 100 mg tablet three times daily), then increased by a doctor as needed. Average dose 300 mg per day.", "- **Children:** -", "- **Older adults:** -"],
      "Efek samping": ["- Common: -", "- Serious: Symptomatic increases in liver enzymes may occur in some cases and usually resolve after the medicine is stopped."],
      "Peringatan": ["Do not use in people hypersensitive to it, with chronic intestinal disorders involving marked impairment of digestion and absorption, or with conditions worsened by intestinal gas. Check liver enzymes during the first 6 to 12 months."],
      "Interaksi": ["Eating table sugar or sucrose-containing foods often causes abdominal discomfort or diarrhea due to fermentation."],
      "Penyimpanan": ["-"],
      "Ketersediaan di Fornas": ["- Listed in the 2025 National Formulary (formulations and prescribing limits have not yet been read)"],
      "Sumber": ["- ISO Indonesia, 53rd edition (2021), product entry containing acarbose", "- National Formulary, Minister of Health Decree No. HK.01.07/MENKES/1199/2025"]
    }
  },
  "pioglitazone": {
    nama: "Pioglitazone", idn: "Pioglitazone hydrochloride", kelas: "Thiazolidinedione antidiabetic",
    kondisi: "Type 2 diabetes mellitus", gejala: "-",
    sec: {
      "Ringkasan": ["Pioglitazone helps the body respond to insulin and is used with other diabetes medicines."],
      "Indikasi": ["Combination therapy with a sulfonylurea or metformin in type 2 diabetes when a single medicine is insufficient."],
      "Dosis": ["- **Adults:** One tablet daily, with or without food. Combination with metformin may be started at 15 to 30 mg once daily.", "- **Children:** -", "- **Older adults:** -"],
      "Efek samping": ["- Common: -", "- Serious: May cause fluid retention and worsen heart failure. Monitor for signs of heart failure."],
      "Peringatan": ["Do not use in people hypersensitive to it, with impaired liver function, NYHA class III or IV heart failure, or type 1 diabetes."],
      "Interaksi": ["Medicines that inhibit or induce the liver enzyme CYP3A4 may interact."],
      "Penyimpanan": ["-"],
      "Ketersediaan di Fornas": ["- Listed in the 2025 National Formulary (formulations and prescribing limits have not yet been read)"],
      "Catatan verifikasi": ["Side effects other than fluid retention have not yet been read."],
      "Sumber": ["- ISO Indonesia, 53rd edition (2021), product entry containing pioglitazone", "- National Formulary, Minister of Health Decree No. HK.01.07/MENKES/1199/2025"]
    }
  },
  "bisoprolol": {
    nama: "Bisoprolol", idn: "Bisoprolol fumarate", kelas: "Beta-blocker",
    kondisi: "Hypertension, angina, heart failure", gejala: "-",
    sec: {
      "Ringkasan": ["Bisoprolol slows the heart rate and lowers blood pressure."],
      "Indikasi": ["Stable chronic heart failure (with an ACE inhibitor and diuretic), hypertension, and angina pectoris."],
      "Dosis": ["- **Adults:** One tablet once daily in the morning. Usual range 1.25 to 10 mg per day. Heart failure: start at 1.25 mg once daily during the first week, then increase gradually to 10 mg once daily.", "- **Children:** -", "- **Older adults:** -"],
      "Efek samping": ["- Common: Headache, dizziness, blurred vision, slow heart rate, first-degree AV block, uncontrolled blood pressure. Visual disturbance in the form of flashes of light (phosphenes) is very common.", "- Serious: -"],
      "Peringatan": ["-"], "Interaksi": ["-"], "Penyimpanan": ["-"],
      "Ketersediaan di Fornas": ["- Listed in the 2025 National Formulary (formulations and prescribing limits have not yet been read)"],
      "Catatan verifikasi": ["Contraindications and warnings have not yet been read. This must be completed."],
      "Sumber": ["- ISO Indonesia, 53rd edition (2021), product entry containing bisoprolol", "- National Formulary, Minister of Health Decree No. HK.01.07/MENKES/1199/2025"]
    }
  },
  "candesartan": {
    nama: "Candesartan", idn: "Candesartan cilexetil", kelas: "Angiotensin receptor blocker (ARB)",
    kondisi: "Hypertension", gejala: "-",
    sec: {
      "Ringkasan": ["Candesartan lowers blood pressure by blocking angiotensin receptors."],
      "Indikasi": ["Hypertension."],
      "Dosis": ["- **Adults:** Start at 4 mg per day; may be increased to 16 mg once daily.", "- **Children:** -", "- **Older adults:** -"],
      "Efek samping": ["- Common: Dizziness, headache, vertigo, back pain, upper respiratory tract infection, pharyngitis, rhinitis, low blood pressure, high potassium, increased serum creatinine.", "- Serious: -"],
      "Peringatan": ["Do not use in people hypersensitive to it."],
      "Interaksi": ["-"], "Penyimpanan": ["-"],
      "Ketersediaan di Fornas": ["- Listed in the 2025 National Formulary (formulations and prescribing limits have not yet been read)"],
      "Sumber": ["- ISO Indonesia, 53rd edition (2021), product entry containing candesartan", "- National Formulary, Minister of Health Decree No. HK.01.07/MENKES/1199/2025"]
    }
  },
  "valsartan": {
    nama: "Valsartan", idn: "Valsartan", kelas: "Angiotensin receptor blocker (ARB)",
    kondisi: "Hypertension, heart failure", gejala: "-",
    sec: {
      "Ringkasan": ["Valsartan lowers blood pressure and is also used for heart failure and after a heart attack."],
      "Indikasi": ["Hypertension, heart failure, and post-myocardial infarction."],
      "Dosis": ["- **Adults:** Hypertension: 80 mg once daily (maximum 160 mg). Heart failure: initial dose 40 mg twice daily, maximum 320 mg per day. Post-infarction: initial dose 20 mg twice daily, target 160 mg twice daily.", "- **Children:** -", "- **Older adults:** Use caution in older adults."],
      "Efek samping": ["- Common: Joint pain, weakness, back pain, diarrhea, dizziness, headache, difficulty sleeping, decreased libido, nausea, swelling, sore throat, runny nose, respiratory tract infection.", "- Serious: -"],
      "Peringatan": ["Do not use in people hypersensitive to it, during pregnancy, with severe liver impairment, cirrhosis, or biliary obstruction. Use caution with low sodium or body-fluid volume, renal artery stenosis, or kidney or liver impairment."],
      "Interaksi": ["-"], "Penyimpanan": ["-"],
      "Ketersediaan di Fornas": ["- Listed in the 2025 National Formulary (formulations and prescribing limits have not yet been read)"],
      "Sumber": ["- ISO Indonesia, 53rd edition (2021), product entry containing valsartan", "- National Formulary, Minister of Health Decree No. HK.01.07/MENKES/1199/2025"]
    }
  },
  "losartan": {
    nama: "Losartan", idn: "Losartan potassium", kelas: "Angiotensin receptor blocker (ARB)",
    kondisi: "Hypertension", gejala: "-",
    sec: {
      "Ringkasan": ["Losartan lowers blood pressure and is generally well tolerated."],
      "Indikasi": ["Hypertension."],
      "Dosis": ["- **Adults:** 50 mg once daily. Maximum effect is reached in 3 to 6 weeks. Some patients require 100 mg once daily. If body-fluid volume is reduced (for example, with high-dose diuretic use), consider 25 mg once daily.", "- **Children:** -", "- **Older adults:** -"],
      "Efek samping": ["- Common: Generally mild and transient, comparable to placebo in clinical trials.", "- Serious: -"],
      "Peringatan": ["Do not use in people hypersensitive to its components."],
      "Interaksi": ["No clinically significant interactions were seen in studies with hydrochlorothiazide, digoxin, warfarin, cimetidine, and phenobarbital."],
      "Penyimpanan": ["-"],
      "Ketersediaan di Fornas": ["- Not found in the 2025 National Formulary (check manually)"],
      "Sumber": ["- ISO Indonesia, 53rd edition (2021), product entry containing losartan"]
    }
  },
  "lisinopril": {
    nama: "Lisinopril", idn: "Lisinopril", kelas: "ACE inhibitor",
    kondisi: "Hypertension", gejala: "-",
    sec: {
      "Ringkasan": ["Lisinopril lowers blood pressure and may be used alone or with other antihypertensive medicines."],
      "Indikasi": ["Moderate to severe hypertension, alone or with other antihypertensive medicines."],
      "Dosis": ["- **Adults:** Without a diuretic: initial dose 10 mg once daily; usual dose 20 to 40 mg once daily, increased according to blood pressure. If not controlled, low-dose hydrochlorothiazide 12.5 mg may be added.", "- **Children:** -", "- **Older adults:** -"],
      "Efek samping": ["- Common: -", "- Serious: With renal artery stenosis, urea and creatinine levels may increase and usually return to normal after the medicine or diuretic is stopped."],
      "Peringatan": ["Do not use in people hypersensitive to lisinopril or who have had ACE inhibitor-associated angioedema."],
      "Interaksi": ["-"], "Penyimpanan": ["-"],
      "Ketersediaan di Fornas": ["- Listed in the 2025 National Formulary (formulations and prescribing limits have not yet been read)"],
      "Catatan verifikasi": ["Other indications (heart failure and so on) and interactions have not yet been read."],
      "Sumber": ["- ISO Indonesia, 53rd edition (2021), product entry containing lisinopril", "- National Formulary, Minister of Health Decree No. HK.01.07/MENKES/1199/2025"]
    }
  },
  "ramipril": {
    nama: "Ramipril", idn: "Ramipril", kelas: "ACE inhibitor",
    kondisi: "Hypertension, heart failure", gejala: "-",
    sec: {
      "Ringkasan": ["Ramipril lowers blood pressure and protects the heart."],
      "Indikasi": ["Hypertension, heart failure after acute infarction, adjunctive treatment with a diuretic or cardiac glycoside, and reducing the risk of infarction, stroke, and cardiovascular death in older adults or people with diabetes."],
      "Dosis": ["- **Adults:** Hypertension: initial dose 2.5 mg once daily, maintenance 2.5 to 5 mg, maximum 10 mg per day. Heart failure: initial dose 1.25 mg once daily, maximum 10 mg per day. If taking a diuretic, stop the diuretic 2 to 3 days beforehand.", "- **Children:** -", "- **Older adults:** -"],
      "Efek samping": ["- Common: Nausea, headache, cough.", "- Serious: -"],
      "Peringatan": ["Do not use in people hypersensitive to ACE inhibitors, with a history of angioneurotic edema, during pregnancy, or while breastfeeding."],
      "Interaksi": ["Potassium supplements, other diuretics and antihypertensives, glucocorticoids, laxatives, vasopressors, NSAIDs, allopurinol, and immunosuppressants."],
      "Penyimpanan": ["-"],
      "Ketersediaan di Fornas": ["- Listed in the 2025 National Formulary (formulations and prescribing limits have not yet been read)"],
      "Sumber": ["- ISO Indonesia, 53rd edition (2021), product entry containing ramipril", "- National Formulary, Minister of Health Decree No. HK.01.07/MENKES/1199/2025"]
    }
  },
  "nifedipine": {
    nama: "Nifedipine", idn: "Nifedipine", kelas: "Calcium channel blocker (dihydropyridine)",
    kondisi: "Hypertension, angina, Raynaud phenomenon", gejala: "-",
    sec: {
      "Ringkasan": ["Nifedipine dilates blood vessels, lowering blood pressure and relieving angina."],
      "Indikasi": ["Treatment and prevention of angina pectoris, mild to moderate hypertension, and Raynaud phenomenon."],
      "Dosis": ["- **Adults:** 10 mg tablets: initial dose 1 tablet three times daily with or after food. The effective dose is usually 10 to 20 mg three times daily. For hypertension or Raynaud phenomenon, increase gradually to 2 tablets three times daily; for angina, up to 9 to 12 tablets per day in divided doses. Doses above 120 mg per day are rarely needed.", "- **Children:** -", "- **Older adults:** -"],
      "Efek samping": ["- Common: Headache, leg swelling, palpitations, dizziness, nausea, rash, weakness, muscle cramps, tremor. Usually occur early, are mild, and are transient.", "- Serious: -"],
      "Peringatan": ["Do not use in people hypersensitive to it, during pregnancy, in cardiogenic shock, porphyria, or moderate to severe aortic stenosis."],
      "Interaksi": ["-"], "Penyimpanan": ["-"],
      "Ketersediaan di Fornas": ["- Listed in the 2025 National Formulary (formulations and prescribing limits have not yet been read)"],
      "Sumber": ["- ISO Indonesia, 53rd edition (2021), product entry containing nifedipine", "- National Formulary, Minister of Health Decree No. HK.01.07/MENKES/1199/2025"]
    }
  },
  "ciprofloxacin": {
    nama: "Ciprofloxacin", idn: "Ciprofloxacin hydrochloride", kelas: "Quinolone antibiotic",
    kondisi: "Bacterial infections", gejala: "-",
    sec: {
      "Ringkasan": ["Ciprofloxacin is a quinolone antibiotic for infections caused by susceptible bacteria."],
      "Indikasi": ["Infections caused by susceptible bacteria, including urinary tract infections (including prostatitis), and gonococcal urethritis and cervicitis."],
      "Dosis": ["- **Adults:** -", "- **Children:** Not for children under 12 years.", "- **Older adults:** -"],
      "Efek samping": ["- Common: Nausea, diarrhea, vomiting. Tendon inflammation may occur and may not resolve immediately after the medicine is stopped; it can even appear several months later.", "- Serious: -"],
      "Peringatan": ["Do not use in people hypersensitive to ciprofloxacin or other quinolones, pregnant or breastfeeding women, or children under 12 years."],
      "Interaksi": ["Antacids containing aluminum or magnesium hydroxide reduce absorption: take ciprofloxacin 1 to 2 hours before or at least 4 hours after the antacid. May increase theophylline levels."],
      "Penyimpanan": ["-"],
      "Ketersediaan di Fornas": ["- Listed in the 2025 National Formulary (formulations and prescribing limits have not yet been read)"],
      "Catatan verifikasi": ["The dose could not be read in ISO. This must be completed."],
      "Sumber": ["- ISO Indonesia, 53rd edition (2021), product entry containing ciprofloxacin", "- National Formulary, Minister of Health Decree No. HK.01.07/MENKES/1199/2025"]
    }
  },
  "cotrimoxazole": {
    nama: "Cotrimoxazole", idn: "-", kelas: "Combination sulfonamide antibiotic",
    kondisi: "Bacterial infections", gejala: "-",
    sec: {
      "Ringkasan": ["Cotrimoxazole is a combination of sulfamethoxazole and trimethoprim for infections caused by susceptible bacteria."],
      "Indikasi": ["Urinary tract infections (pyelonephritis, pyelitis, acute and chronic prostatitis) caused by susceptible organisms, and other infections."],
      "Dosis": ["- **Adults:** Adult caplet (sulfamethoxazole 800 mg and trimethoprim 160 mg): usual dose 1 caplet twice daily for 10 to 14 days. Severe infection: 1½ caplets twice daily. Uncomplicated gonorrhea: 2 caplets twice daily for 2 days. Long-term: ½ caplet twice daily.", "- **Children:** Age 2 months and older, every 12 hours: weight 20 kg, ½ caplet; 30 kg, ¾ caplet; 40 kg, 1 caplet.", "- **Older adults:** -"],
      "Efek samping": ["- Common: Nausea, vomiting, skin rash.", "- Serious: Leukopenia, thrombocytopenia, agranulocytosis, aplastic anemia. Long-term use may cause megaloblastic anemia, which can be treated with folinic acid."],
      "Peringatan": ["Do not use in people sensitive to sulfonamides or trimethoprim, infants under 2 months, megaloblastic anemia due to folate deficiency, or during pregnancy or breastfeeding."],
      "Interaksi": ["Enhances anticoagulant effects, prolongs the half-life of phenytoin, and may affect the dose of blood-glucose-lowering medicines."],
      "Penyimpanan": ["-"],
      "Ketersediaan di Fornas": ["- Listed in the 2025 National Formulary (formulations and prescribing limits have not yet been read)"],
      "Sumber": ["- ISO Indonesia, 53rd edition (2021), product entry containing cotrimoxazole", "- National Formulary, Minister of Health Decree No. HK.01.07/MENKES/1199/2025"]
    }
  },
  "metronidazole": {
    nama: "Metronidazole", idn: "Metronidazole", kelas: "Nitroimidazole antibiotic",
    kondisi: "Parasitic infections, anaerobic bacterial infections", gejala: "-",
    sec: {
      "Ringkasan": ["Metronidazole is used for certain parasitic infections and anaerobic bacteria."],
      "Indikasi": ["Intestinal and extraintestinal amebiasis, trichomoniasis, giardiasis, and anaerobic bacterial infections."],
      "Dosis": ["- **Adults:** Giardiasis: 250 mg three times daily for 7 days. Anaerobic infection: 7.5 mg/kg body weight every 6 hours for 7 to 10 days.", "- **Children:** Amebiasis: 35 to 50 mg/kg body weight per day in 3 divided doses.", "- **Older adults:** -"],
      "Efek samping": ["- Common: Nausea, vomiting, loss of appetite, diarrhea, epigastric pain, colic, sometimes headache. Coated tongue, dry mouth, inflammation of the tongue and mouth, fungal infection, and neutropenia (resolves after the medicine is stopped).", "- Serious: -"],
      "Peringatan": ["Do not use in people hypersensitive to it, during the first trimester of pregnancy, with active central nervous system disease, or with a history of blood disorders. Use caution while breastfeeding."],
      "Interaksi": ["-"], "Penyimpanan": ["-"],
      "Ketersediaan di Fornas": ["- Listed in the 2025 National Formulary (formulations and prescribing limits have not yet been read)"],
      "Catatan verifikasi": ["Adult amebiasis and trichomoniasis doses in ISO are mixed together and cannot be read with certainty. Complete this information."],
      "Sumber": ["- ISO Indonesia, 53rd edition (2021), product entry containing metronidazole", "- National Formulary, Minister of Health Decree No. HK.01.07/MENKES/1199/2025"]
    }
  },
  "azithromycin": {
    nama: "Azithromycin", idn: "Azithromycin", kelas: "Macrolide antibiotic",
    kondisi: "Bacterial infections", gejala: "-",
    sec: {
      "Ringkasan": ["Azithromycin is a macrolide antibiotic for mild to moderate infections caused by susceptible organisms."],
      "Indikasi": ["Mild to moderate infections caused by susceptible organisms, including upper respiratory tract infections (tonsillitis, pharyngitis)."],
      "Dosis": ["- **Adults:** Take once daily, about 1 hour before or 2 hours after a meal. Sexually transmitted disease: 1 g as a single dose. Other indications: 500 mg as a single dose on day 1, then 250 mg once daily on days 2 to 5.", "- **Children:** Safety in children under 6 months is unknown.", "- **Older adults:** -"],
      "Efek samping": ["- Common: Hypersensitivity reactions, nausea, vomiting, diarrhea, headache, changes in laboratory values.", "- Serious: -"],
      "Peringatan": ["Do not use in people hypersensitive to it. Use caution with impaired liver function. Pregnancy category B."],
      "Interaksi": ["Do not use with ergot derivatives because of the risk of ergotism. Antacids: take azithromycin at least 1 hour before or 2 hours after."],
      "Penyimpanan": ["-"],
      "Ketersediaan di Fornas": ["- Listed in the 2025 National Formulary (formulations and prescribing limits have not yet been read)"],
      "Sumber": ["- ISO Indonesia, 53rd edition (2021), product entry containing azithromycin", "- National Formulary, Minister of Health Decree No. HK.01.07/MENKES/1199/2025"]
    }
  },
  "cefixime": {
    nama: "Cefixime", idn: "Cefixime", kelas: "Cephalosporin antibiotic",
    kondisi: "Bacterial infections", gejala: "-",
    sec: {
      "Ringkasan": ["Cefixime is an oral cephalosporin antibiotic for infections caused by susceptible bacteria."],
      "Indikasi": ["Infections caused by susceptible bacteria, including uncomplicated urinary tract infections."],
      "Dosis": ["- **Adults:** Adults and children weighing 30 kg or more: usually 50 to 100 mg twice daily. Severe or difficult-to-treat infection: up to 200 mg twice daily. Adjust according to age, body weight, and condition. Renal impairment requires dose adjustment.", "- **Children:** Typhoid fever in children: 10 to 15 mg/kg body weight per day for 2 weeks.", "- **Older adults:** -"],
      "Efek samping": ["- Common: Hypersensitivity reactions, including shock, may occur.", "- Serious: -"],
      "Peringatan": ["Do not use in people hypersensitive to cephalosporins. Use caution with penicillin allergy, a history of allergies (asthma, rash, hives), or severe kidney impairment."],
      "Interaksi": ["Antacids have no significant effect. Nifedipine may increase cefixime bioavailability."],
      "Penyimpanan": ["-"],
      "Ketersediaan di Fornas": ["- Listed in the 2025 National Formulary (formulations and prescribing limits have not yet been read)"],
      "Sumber": ["- ISO Indonesia, 53rd edition (2021), product entry containing cefixime", "- National Formulary, Minister of Health Decree No. HK.01.07/MENKES/1199/2025"]
    }
  },
  "clindamycin": {
    nama: "Clindamycin", idn: "Clindamycin phosphate", kelas: "Lincosamide antibiotic",
    kondisi: "Bacterial infections", gejala: "-",
    sec: {
      "Ringkasan": ["Clindamycin is used for severe infections caused by susceptible Gram-positive anaerobic bacteria."],
      "Indikasi": ["Severe infections caused by susceptible Gram-positive anaerobic bacteria such as Streptococcus, Pneumococcus, and Staphylococcus."],
      "Dosis": ["- **Adults:** Serious infection: 150 to 300 mg every 6 hours. More severe infection: 300 to 450 mg every 6 hours. Swallow capsules with a full glass of water. If diarrhea occurs, stop the medicine.", "- **Children:** 3 to 6 mg/kg body weight every 6 hours, depending on the severity of infection.", "- **Older adults:** -"],
      "Efek samping": ["- Common: Antibiotic-associated colitis, abdominal pain, nausea, vomiting, diarrhea. Rash, hives, Stevens-Johnson syndrome, and anaphylaxis may occur, as may jaundice.", "- Serious: -"],
      "Peringatan": ["Do not use in people hypersensitive to clindamycin."],
      "Interaksi": ["May enhance the effects of neuromuscular blocking medicines. In vitro, it antagonizes erythromycin."],
      "Penyimpanan": ["-"],
      "Ketersediaan di Fornas": ["- Listed in the 2025 National Formulary (formulations and prescribing limits have not yet been read)"],
      "Sumber": ["- ISO Indonesia, 53rd edition (2021), product entry containing clindamycin", "- National Formulary, Minister of Health Decree No. HK.01.07/MENKES/1199/2025"]
    }
  },
  "levofloxacin": {
    nama: "Levofloxacin", idn: "Levofloxacin", kelas: "Quinolone antibiotic",
    kondisi: "Bacterial infections", gejala: "-",
    sec: {
      "Ringkasan": ["Levofloxacin is a quinolone antibiotic taken once daily."],
      "Indikasi": ["Infections caused by susceptible organisms, such as acute maxillary sinusitis and exacerbations of chronic bronchitis."],
      "Dosis": ["- **Adults:** 250 to 500 mg once daily (every 24 hours) for 7 to 14 days with normal renal function. Exacerbation of chronic bronchitis: 500 mg every 24 hours for 7 days. Community-acquired pneumonia: 500 mg every 24 hours for 7 to 14 days.", "- **Children:** Not for children under 18 years.", "- **Older adults:** -"],
      "Efek samping": ["- Common: If an allergic reaction occurs (rash, itching, palpitations, difficulty swallowing or breathing, swelling of the lips, tongue, or face, hoarseness), stop the medicine.", "- Serious: -"],
      "Peringatan": ["Do not use in people hypersensitive to levofloxacin or other quinolones, pregnant or possibly pregnant women, breastfeeding women, or children under 18 years."],
      "Interaksi": ["Antacids, sucralfate, metal cations, and multivitamins reduce absorption: separate administration by 2 hours before or after levofloxacin."],
      "Penyimpanan": ["-"],
      "Ketersediaan di Fornas": ["- Listed in the 2025 National Formulary (formulations and prescribing limits have not yet been read)"],
      "Sumber": ["- ISO Indonesia, 53rd edition (2021), product entry containing levofloxacin", "- National Formulary, Minister of Health Decree No. HK.01.07/MENKES/1199/2025"]
    }
  },
  "doxycycline": {
    nama: "Doxycycline", idn: "Doxycycline", kelas: "Tetracycline antibiotic",
    kondisi: "Bacterial infections", gejala: "-",
    sec: {
      "Ringkasan": ["Doxycycline is a tetracycline antibiotic for various infections, including respiratory tract infections."],
      "Indikasi": ["Respiratory tract infections, including pneumonia caused by susceptible organisms, and other infections."],
      "Dosis": ["- **Adults:** Adults and children over 8 years weighing over 45 kg: day 1, 200 mg (single dose or 100 mg twice); then 100 mg daily or 50 mg twice daily. More severe infections, especially chronic urinary tract infections: 200 mg daily.", "- **Children:** Children over 8 years weighing under 45 kg: day 1, 4.4 mg/kg body weight; subsequent dose not yet readable.", "- **Older adults:** -"],
      "Efek samping": ["- Common: Loss of appetite, nausea, vomiting, diarrhea, inflammation of the tongue, secondary infection, sensitivity to sunlight.", "- Serious: Hemolytic anemia, thrombocytopenia, and neutropenia."],
      "Peringatan": ["Do not use in people hypersensitive to tetracyclines, pregnant or breastfeeding women, or children under 8 years."],
      "Interaksi": ["Phenytoin, phenobarbital, and carbamazepine accelerate doxycycline elimination and reduce its levels. Milk may interfere with tetracycline absorption."],
      "Penyimpanan": ["-"],
      "Ketersediaan di Fornas": ["- Listed in the 2025 National Formulary (formulations and prescribing limits have not yet been read)"],
      "Catatan verifikasi": ["The subsequent pediatric dose and complete list of absorption inhibitors have not yet been read."],
      "Sumber": ["- ISO Indonesia, 53rd edition (2021), product entry containing doxycycline", "- National Formulary, Minister of Health Decree No. HK.01.07/MENKES/1199/2025"]
    }
  },
  "atenolol": {
    nama: "Atenolol", idn: "Atenolol", kelas: "Beta-blocker",
    kondisi: "Hypertension, angina, heart rhythm disorders", gejala: "High blood pressure, chest pain",
    sec: {
      "Ringkasan": ["Atenolol is a beta-blocker that slows the heart rate and helps lower blood pressure. It is used for hypertension, angina (chest pain), and some heart rhythm disorders; a doctor may also prescribe it after a heart attack."],
      "Indikasi": ["Hypertension, angina, and certain heart rhythm disorders. Use after a heart attack should follow a doctor's assessment."],
      "Dosis": ["- The dose varies according to the condition, kidney function, and patient response. Follow the prescription and package label; do not determine or change the dose based on this general information.", "- Do not stop atenolol suddenly without medical advice."],
      "Efek samping": ["- Common: Fatigue, dizziness, cold or tingling hands or feet, nausea, and a slowed heart rate.", "- Seek medical help immediately for severe shortness of breath, fainting, a severe allergic reaction, or signs of worsening heart problems."],
      "Peringatan": ["Tell your doctor if you have asthma or lung disease, a slow or irregular heart rate, heart failure, low blood pressure, diabetes, or kidney impairment. Atenolol can mask some signs of low blood glucose.", "Tell your doctor or pharmacist about all medicines you use. Beta-blockers may oppose the effects of salbutamol; a healthcare professional should assess the combination."],
      "Interaksi": ["Atenolol belongs to the beta-blocker class. Use with salbutamol may cause their effects to oppose each other and should be discussed with a doctor or pharmacist."],
      "Sumber": ["- NHS, Atenolol: https://www.nhs.uk/medicines/atenolol/", "- MedlinePlus, Atenolol: https://medlineplus.gov/druginfo/meds/a684031.html"]
    }
  },
  "teofilin": {
    nama: "Theophylline", idn: "Theophylline", kelas: "Methylxanthine bronchodilator",
    kondisi: "Asthma and chronic obstructive pulmonary disease", gejala: "Wheezing, shortness of breath, chest tightness",
    sec: {
      "Ringkasan": ["Theophylline helps widen the airways and is used to control symptoms of asthma and certain lung diseases. It is not a fast-acting reliever for sudden shortness of breath."],
      "Indikasi": ["Prevention or control of wheezing, shortness of breath, and chest tightness due to asthma, chronic bronchitis, emphysema, or other lung disease as assessed by a doctor."],
      "Dosis": ["- The dose must be determined individually by a doctor. Blood theophylline levels may need monitoring because the range between therapeutic and dangerous levels is relatively narrow.", "- Take exactly as prescribed. Do not increase, reduce, or change the schedule or dosage form without consultation. Swallow extended-release tablets whole; do not crush or chew them."],
      "Efek samping": ["- Nausea, vomiting, headache, restlessness, or difficulty sleeping may occur.", "- Excessive levels may cause severe vomiting, abnormal heart rate, or seizures; seek immediate medical attention if these occur."],
      "Peringatan": ["Tell your doctor about all medicines and supplements, smoking habits, and any change in smoking habits. Other conditions and medicines can change theophylline levels; monitoring may be needed.", "Do not rely on theophylline to relieve a sudden asthma attack. Follow your doctor's emergency action plan."],
      "Interaksi": ["Ciprofloxacin can increase theophylline levels in the blood and raise the risk of toxic effects. Make sure your doctor or pharmacist knows all the medicines you use."],
      "Sumber": ["- MedlinePlus, Theophylline: https://medlineplus.gov/druginfo/meds/a681006.html", "- ISO Indonesia, 53rd edition (2021), product entry containing ciprofloxacin (interaction with theophylline)"]
    }
  }
};
