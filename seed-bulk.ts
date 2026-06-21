import mongoose from 'mongoose';
import dbConnect from './app/lib/db';
import { TestCategory, Test, Package } from './app/models';

const data = {
  categories: [
    "HEMATOLOGY", "SEROLOGY", "BIOCHEMISTRY", "CYTOLOGY", "MICROBIOLOGY", 
    "THYROID PROFILE", "URINE & STOOL", "HORMONES / PROTEINS / OTHER", 
    "COAGULATION STUDY", "CLINICAL", "Other Test", "HISTOPATHOLOGY", "ALLERGY TESTING"
  ],
  tests: [
    // HEMATOLOGY
    { cat: "HEMATOLOGY", name: "Blood Group", rate: 50, color: "Purple" },
    { cat: "HEMATOLOGY", name: "BT/ CT", rate: 100, color: "None" },
    { cat: "HEMATOLOGY", name: "CBC", rate: 200, color: "Purple" },
    { cat: "HEMATOLOGY", name: "CBC/ PS", rate: 300, color: "Purple" },
    { cat: "HEMATOLOGY", name: "ESR", rate: 100, color: "Purple" },
    { cat: "HEMATOLOGY", name: "RBS", rate: 50, color: "Grey" },
    { cat: "HEMATOLOGY", name: "Hb- Electrophoresis", rate: 900, color: "Purple" },
    { cat: "HEMATOLOGY", name: "MP -PS", rate: 200, color: "Purple" },
    { cat: "HEMATOLOGY", name: "PT- INR", rate: 200, color: "Blue" },
    { cat: "HEMATOLOGY", name: "Sickling", rate: 150, color: "Purple" },
    { cat: "HEMATOLOGY", name: "TLC/ DLC", rate: 200, color: "Purple" },
    { cat: "HEMATOLOGY", name: "Haemoglobin", rate: 50, color: "Purple" },
    { cat: "HEMATOLOGY", name: "AEC", rate: 200, color: "Purple" },
    { cat: "HEMATOLOGY", name: "Microfilaria", rate: 400, color: "Purple" },
    { cat: "HEMATOLOGY", name: "Retic Count", rate: 250, color: "Purple" },

    // SEROLOGY
    { cat: "SEROLOGY", name: "ASO", rate: 200, color: "Red" },
    { cat: "SEROLOGY", name: "CRP (Qualitative)", rate: 300, color: "Red" },
    { cat: "SEROLOGY", name: "CRP (Quantitative)", rate: 400, color: "Red" },
    { cat: "SEROLOGY", name: "Dengue", rate: 500, color: "Red" },
    { cat: "SEROLOGY", name: "HBsAg", rate: 200, color: "Red" },
    { cat: "SEROLOGY", name: "HCV", rate: 200, color: "Red" },
    { cat: "SEROLOGY", name: "HIV", rate: 200, color: "Red" },
    { cat: "SEROLOGY", name: "MP Card test", rate: 100, color: "Purple" },
    { cat: "SEROLOGY", name: "RA (Qualitative)", rate: 200, color: "Red" },
    { cat: "SEROLOGY", name: "RA (Quantitative)", rate: 300, color: "Red" },
    { cat: "SEROLOGY", name: "TYPHI CARD", rate: 400, color: "Red" },
    { cat: "SEROLOGY", name: "VDRL", rate: 200, color: "Red" },
    { cat: "SEROLOGY", name: "Widal", rate: 100, color: "Red" },

    // BIOCHEMISTRY
    { cat: "BIOCHEMISTRY", name: "Alk.Phosphatase", rate: 100, color: "Red" },
    { cat: "BIOCHEMISTRY", name: "Amylase", rate: 300, color: "Red" },
    { cat: "BIOCHEMISTRY", name: "Bilirubin (T , D, ID)", rate: 100, color: "Red" },
    { cat: "BIOCHEMISTRY", name: "Calcium", rate: 100, color: "Red" },
    { cat: "BIOCHEMISTRY", name: "Cholesterol", rate: 100, color: "Red" },
    { cat: "BIOCHEMISTRY", name: "LFT", rate: 500, color: "Red" },
    { cat: "BIOCHEMISTRY", name: "Lipase", rate: 350, color: "Red" },
    { cat: "BIOCHEMISTRY", name: "Lipid Profile", rate: 500, color: "Red" },
    { cat: "BIOCHEMISTRY", name: "Phosphorus", rate: 200, color: "Red" },
    { cat: "BIOCHEMISTRY", name: "RFT", rate: 500, color: "Red" },
    { cat: "BIOCHEMISTRY", name: "RFT + Sr. Electrolyte", rate: 700, color: "Red" },
    { cat: "BIOCHEMISTRY", name: "SGOT", rate: 100, color: "Red" },
    { cat: "BIOCHEMISTRY", name: "SGPT", rate: 100, color: "Red" },
    { cat: "BIOCHEMISTRY", name: "Sr. Creatinine", rate: 150, color: "Red" },
    { cat: "BIOCHEMISTRY", name: "Sr. Electrolyte", rate: 300, color: "Red" },
    { cat: "BIOCHEMISTRY", name: "Sr.Uric Acid", rate: 100, color: "Red" },
    { cat: "BIOCHEMISTRY", name: "Sugar (Fasing/ PP/ R)", rate: 50, color: "Grey" },
    { cat: "BIOCHEMISTRY", name: "Total Protein", rate: 100, color: "Red" },
    { cat: "BIOCHEMISTRY", name: "Triglycerides", rate: 200, color: "Red" },
    { cat: "BIOCHEMISTRY", name: "Urea", rate: 100, color: "Red" },

    // CYTOLOGY
    { cat: "CYTOLOGY", name: "FNAC", rate: 500, color: "None" },
    { cat: "CYTOLOGY", name: "Fluid examination", rate: 500, color: "None" },
    { cat: "CYTOLOGY", name: "Pap Smear", rate: 300, color: "None" },
    { cat: "CYTOLOGY", name: "Pap with Sampling", rate: 500, color: "None" },

    // MICROBIOLOGY
    { cat: "MICROBIOLOGY", name: "Sputum C/S", rate: 400, color: "None" },
    { cat: "MICROBIOLOGY", name: "Pus C/S", rate: 400, color: "None" },
    { cat: "MICROBIOLOGY", name: "KOH Mount", rate: 300, color: "None" },
    { cat: "MICROBIOLOGY", name: "URINE C/S", rate: 400, color: "None" },
    { cat: "MICROBIOLOGY", name: "Stool C/S", rate: 400, color: "None" },
    { cat: "MICROBIOLOGY", name: "Sputum AFB", rate: 200, color: "None" },
    { cat: "MICROBIOLOGY", name: "Blood Culture", rate: 1100, color: "Purple" },

    // THYROID PROFILE
    { cat: "THYROID PROFILE", name: "TSH", rate: 200, color: "Red" },
    { cat: "THYROID PROFILE", name: "T3/T4/TSH", rate: 500, color: "Red" },
    { cat: "THYROID PROFILE", name: "FT3", rate: 200, color: "Red" },
    { cat: "THYROID PROFILE", name: "FT4", rate: 200, color: "Red" },
    { cat: "THYROID PROFILE", name: "FT3/FT4/TSH", rate: 600, color: "Red" },
    { cat: "THYROID PROFILE", name: "T3/T4", rate: 200, color: "Red" },
    { cat: "THYROID PROFILE", name: "THYRO 5", rate: 800, color: "Red" },
    { cat: "THYROID PROFILE", name: "Anti TPO", rate: 1000, color: "Red" },
    { cat: "THYROID PROFILE", name: "Anti TG", rate: 850, color: "Red" },
    { cat: "THYROID PROFILE", name: "Thyroglobulin", rate: 750, color: "Red" },

    // URINE & STOOL
    { cat: "URINE & STOOL", name: "Pregnancy Test", rate: 100, color: "None" },
    { cat: "URINE & STOOL", name: "Urine R/M", rate: 100, color: "None" },
    { cat: "URINE & STOOL", name: "Urine C/S", rate: 400, color: "None" },
    { cat: "URINE & STOOL", name: "Microalbumin", rate: 400, color: "None" },
    { cat: "URINE & STOOL", name: "Stool - Occult Blood", rate: 100, color: "None" },
    { cat: "URINE & STOOL", name: "Stool R/M", rate: 200, color: "None" },
    { cat: "URINE & STOOL", name: "Bence jones protein", rate: 700, color: "None" },
    { cat: "URINE & STOOL", name: "Urine 24 hour", rate: 500, color: "None" },

    // HORMONES / PROTEINS / OTHER
    { cat: "HORMONES / PROTEINS / OTHER", name: "ACTH", rate: 1600, color: "Red" },
    { cat: "HORMONES / PROTEINS / OTHER", name: "ADA", rate: 800, color: "None" },
    { cat: "HORMONES / PROTEINS / OTHER", name: "AFP", rate: 700, color: "Red" },
    { cat: "HORMONES / PROTEINS / OTHER", name: "AMH", rate: 1850, color: "Red" },
    { cat: "HORMONES / PROTEINS / OTHER", name: "ANA", rate: 700, color: "Red" },
    { cat: "HORMONES / PROTEINS / OTHER", name: "Anti CCP", rate: 1750, color: "Red" },
    { cat: "HORMONES / PROTEINS / OTHER", name: "Anti-ds DNA", rate: 700, color: "Red" },
    { cat: "HORMONES / PROTEINS / OTHER", name: "Beta 2 Glycoprotein", rate: 1800, color: "Red" },
    { cat: "HORMONES / PROTEINS / OTHER", name: "B-HCG", rate: 600, color: "Red" },
    { cat: "HORMONES / PROTEINS / OTHER", name: "B-HCG Free", rate: 1600, color: "Red" },
    { cat: "HORMONES / PROTEINS / OTHER", name: "Bile Salt-Pigment", rate: 100, color: "None" },
    { cat: "HORMONES / PROTEINS / OTHER", name: "CA125", rate: 1000, color: "Red" },
    { cat: "HORMONES / PROTEINS / OTHER", name: "Anti Cardiolipin IgG/IgM", rate: 800, color: "Red" },
    { cat: "HORMONES / PROTEINS / OTHER", name: "CD3,CD4,CD8 PANEL", rate: 1400, color: "Purple" },
    { cat: "HORMONES / PROTEINS / OTHER", name: "CEA", rate: 700, color: "Red" },
    { cat: "HORMONES / PROTEINS / OTHER", name: "CK-MB", rate: 500, color: "Red" },
    { cat: "HORMONES / PROTEINS / OTHER", name: "CK-NAC", rate: 500, color: "Red" },
    { cat: "HORMONES / PROTEINS / OTHER", name: "Cortisol ( 7 to 9 am)", rate: 700, color: "Red" },
    { cat: "HORMONES / PROTEINS / OTHER", name: "Cortisol (3 to 5 pm)", rate: 700, color: "Red" },
    { cat: "HORMONES / PROTEINS / OTHER", name: "Estradiol(E2)", rate: 600, color: "Red" },
    { cat: "HORMONES / PROTEINS / OTHER", name: "Estriol- unconjugated (E3)", rate: 700, color: "Red" },
    { cat: "HORMONES / PROTEINS / OTHER", name: "Ferritin", rate: 800, color: "Red" },
    { cat: "HORMONES / PROTEINS / OTHER", name: "Folic acid", rate: 1500, color: "Red" },
    { cat: "HORMONES / PROTEINS / OTHER", name: "FSH", rate: 400, color: "Red" },
    { cat: "HORMONES / PROTEINS / OTHER", name: "G6PD", rate: 900, color: "Red" },
    { cat: "HORMONES / PROTEINS / OTHER", name: "HbA1C", rate: 500, color: "Purple" },
    { cat: "HORMONES / PROTEINS / OTHER", name: "Human Growth Hormone", rate: 900, color: "Red" },
    { cat: "HORMONES / PROTEINS / OTHER", name: "IGE", rate: 700, color: "Red" },
    { cat: "HORMONES / PROTEINS / OTHER", name: "IL-6", rate: 3000, color: "Red" },
    { cat: "HORMONES / PROTEINS / OTHER", name: "Iron Profile", rate: 600, color: "Red" },
    { cat: "HORMONES / PROTEINS / OTHER", name: "LDH serum/fluid", rate: 400, color: "Red" },
    { cat: "HORMONES / PROTEINS / OTHER", name: "Lead", rate: 1700, color: "Red" },
    { cat: "HORMONES / PROTEINS / OTHER", name: "LH", rate: 400, color: "Red" },
    { cat: "HORMONES / PROTEINS / OTHER", name: "Lupus Anticoagulant", rate: 1900, color: "Blue" },
    { cat: "HORMONES / PROTEINS / OTHER", name: "MicroAlbumin", rate: 400, color: "None" },
    { cat: "HORMONES / PROTEINS / OTHER", name: "Phospholipid Antibody IgG", rate: 700, color: "Red" },
    { cat: "HORMONES / PROTEINS / OTHER", name: "Progesterone", rate: 600, color: "Red" },
    { cat: "HORMONES / PROTEINS / OTHER", name: "Prolactin", rate: 400, color: "Red" },
    { cat: "HORMONES / PROTEINS / OTHER", name: "PSA Toal", rate: 700, color: "Red" },
    { cat: "HORMONES / PROTEINS / OTHER", name: "PSA-Free", rate: 1000, color: "Red" },
    { cat: "HORMONES / PROTEINS / OTHER", name: "Quadraple Marker", rate: 2800, color: "Red" },
    { cat: "HORMONES / PROTEINS / OTHER", name: "TB Gold", rate: 3000, color: "Red" },
    { cat: "HORMONES / PROTEINS / OTHER", name: "Testosterone Total/Free", rate: 900, color: "Red" },
    { cat: "HORMONES / PROTEINS / OTHER", name: "TORCH M&G", rate: 2400, color: "Red" },
    { cat: "HORMONES / PROTEINS / OTHER", name: "Transferrin", rate: 1100, color: "Red" },
    { cat: "HORMONES / PROTEINS / OTHER", name: "Triple Marker with Graph", rate: 1900, color: "Red" },
    { cat: "HORMONES / PROTEINS / OTHER", name: "TROPI/ TROP T", rate: 700, color: "Purple" },
    { cat: "HORMONES / PROTEINS / OTHER", name: "Vitamin B12", rate: 900, color: "Red" },
    { cat: "HORMONES / PROTEINS / OTHER", name: "Vitamin D3", rate: 1100, color: "Red" },

    // COAGULATION STUDY
    { cat: "COAGULATION STUDY", name: "APTT", rate: 500, color: "Blue" },
    { cat: "COAGULATION STUDY", name: "BT/CT", rate: 100, color: "None" },
    { cat: "COAGULATION STUDY", name: "D DIMER", rate: 1200, color: "Red" },
    { cat: "COAGULATION STUDY", name: "Factor V/VII/IX", rate: 1500, color: "None" },
    { cat: "COAGULATION STUDY", name: "PT INR", rate: 300, color: "Blue" },
    { cat: "COAGULATION STUDY", name: "Protein c,s", rate: 2800, color: "None" },

    // CLINICAL
    { cat: "CLINICAL", name: "CSF examination", rate: 500, color: "None" },
    { cat: "CLINICAL", name: "Semen Examination", rate: 400, color: "None" },
    { cat: "CLINICAL", name: "Mauntoux test", rate: 200, color: "None" },

    // Other Test
    { cat: "Other Test", name: "Chromosomal Analysis (PS)", rate: 3100, color: "None" },
    { cat: "Other Test", name: "Coomb's DCT/ICT", rate: 600, color: "Purple" },
    { cat: "Other Test", name: "Factor V mutation PCR", rate: 4200, color: "None" },
    { cat: "Other Test", name: "Hb- HPLC", rate: 1200, color: "Purple" },
    { cat: "Other Test", name: "Hb-Electrophoresis", rate: 900, color: "Purple" },
    { cat: "Other Test", name: "HBV DNA Viral Load", rate: 4999, color: "Red" },
    { cat: "Other Test", name: "HCV RNA Viral Load", rate: 4999, color: "Red" },
    { cat: "Other Test", name: "HLA B27 PCR", rate: 2700, color: "Purple" },

    // HISTOPATHOLOGY
    { cat: "HISTOPATHOLOGY", name: "Biopsy- Small", rate: 700, color: "None" },
    { cat: "HISTOPATHOLOGY", name: "Biopsy- Medium", rate: 1000, color: "None" },
    { cat: "HISTOPATHOLOGY", name: "Biopsy- Large", rate: 1400, color: "None" },

    // ALLERGY TESTING
    { cat: "ALLERGY TESTING", name: "Profile with Drug", rate: 5000, color: "Red" },
    { cat: "ALLERGY TESTING", name: "Profile without Drug", rate: 4500, color: "Red" }
  ],
  packages: [
    { name: "DIABETES PROFILE", price: 875, params: 5, tests: "SUGAR F/PP/R, HbA1C, RFT, LIPID PROFILE, URINE R/M", purpose: "Comprehensive check for diabetes markers and related organ health." },
    { name: "ARTHRITIS PROFILE", price: 650, params: 6, tests: "CBC, ESR, CRP QUANT., RA FACTOR, ASO, S. URIC ACID", purpose: "Screening for inflammation and joint-related disorders." },
    { name: "PRE-OP PROFILE", price: 1200, params: 10, tests: "CBC, BLOOD GROUP, B.SUGAR, URINE R/M, RFT + Sr. Electrolyte, LFT, HIV, HBsAG, HCV, VDRL", purpose: "Pre-operative health assessment." },
    { name: "FEVER PROFILE", price: 700, params: 6, tests: "CBC, ESR, MP CARD, TYPHOID CARD, DENGUE, URINE R/M", purpose: "Check for common causes of fever and infections." },
    { name: "BONE PROFILE", price: 800, params: 5, tests: "CALCIUM, PHOSPHOROUS, ALKALINE PHOSPHATASE, URIC ACID, VITAMIN D3", purpose: "Assess bone health and mineral levels." },
    { name: "ANC PROFILE", price: 675, params: 9, tests: "CBC, BLOOD GROUP, B.SUGAR, URINE R/M, HIV, HBsAG, HCV, VDRL, SICKLING", purpose: "Antenatal care screening for pregnant women." },
    { name: "PROSTATE CANCER PROFILE", price: 1500, params: 4, tests: "B2 Microglobulin, Ferritin, PSA Free & Total, Acid phosphatase-prostatic (PAP)", purpose: "Targeted screening for prostate health." },
    { name: "FULL BODY PROFILE", price: 1099, params: 6, tests: "CBC, B.SUGAR, RFT, LFT, LIPID PROFILE, THYROID PROFILE", purpose: "Routine whole body health assessment." },
    { name: "MASTER HEALTH CHECKUP", price: 2299, params: 10, tests: "CBC, B.SUGAR, HbA1C, RFT, LFT, LIPID PROFILE, THYROID PROFILE, SR. CALCIUM, VITAMIN D, VITAMIN B12", purpose: "Extensive evaluation of overall health and vitamin levels." }
  ]
};

async function main() {
  console.log('Connecting to MongoDB...');
  await dbConnect();

  console.log('Clearing existing data...');
  const { Inquiry, Test, TestCategory, Package } = await import('./app/models');
  
  await Inquiry.deleteMany({});
  await Test.deleteMany({});
  await TestCategory.deleteMany({});
  await Package.deleteMany({});

  console.log('Seeding categories...');
  const catMap: Record<string, mongoose.Types.ObjectId> = {};
  for (let i = 0; i < data.categories.length; i++) {
    const c = await TestCategory.create({ name: data.categories[i], sortOrder: i });
    catMap[c.name] = c._id as mongoose.Types.ObjectId;
  }

  console.log(`Seeding ${data.tests.length} tests...`);
  for (const t of data.tests) {
    await Test.create({
      name: t.name,
      rate: t.rate,
      tubeColor: t.color,
      categoryId: catMap[t.cat]
    });
  }

  console.log(`Seeding ${data.packages.length} packages...`);
  for (const p of data.packages) {
    await Package.create({
      name: p.name,
      price: p.price,
      parametersCount: p.params,
      testsIncluded: p.tests,
      purpose: p.purpose
    });
  }

  console.log('Done!');
  process.exit(0);
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
