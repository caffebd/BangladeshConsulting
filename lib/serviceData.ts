export interface ServicePageData {
  descriptionLong: string;
  steps: { name: string; text: string }[];
  documents: string[];
  faqs: { question: string; answer: string }[];
}

export const serviceData: Record<string, ServicePageData> = {
  "company-formation": {
    descriptionLong:
      "Bengal Consulting provides end-to-end company formation services in Bangladesh for local entrepreneurs, Bangladeshi expats living abroad, and foreign nationals looking to establish a legal business presence. We work with the Registrar of Joint Stock Companies and Firms (RJSC) on your behalf.",
    steps: [
      {
        name: "Initial Consultation",
        text: "We discuss your business goals, ownership structure, and the most appropriate company type (Private Limited, Public Limited, Partnership, or Sole Proprietorship).",
      },
      {
        name: "Name Reservation & Document Preparation",
        text: "We prepare the Memorandum and Articles of Association, collect required documents, and manage the filing with RJSC.",
      },
      {
        name: "Trade Licence & Tax Registration",
        text: "Once incorporated, we assist with obtaining a City Corporation Trade Licence and registering for e-TIN with the National Board of Revenue.",
      },
      {
        name: "Bank Account Opening",
        text: "We coordinate with a reputable Bangladeshi bank to open a business account in your company's name.",
      },
      {
        name: "Certificate of Incorporation",
        text: "We deliver your Certificate of Incorporation and all founding documents, keeping digital copies for your records.",
      },
    ],
    documents: [
      "National ID (NID) or passport of all directors/shareholders",
      "Proof of address for all directors",
      "Proposed company name (at least 3 options)",
      "Business address in Bangladesh",
      "Share distribution plan",
      "For foreign nationals: notarised passport copies",
    ],
    faqs: [
      {
        question: "What types of companies can be formed in Bangladesh?",
        answer:
          "The most common types are Private Limited Companies, Public Limited Companies, Sole Proprietorships, and Partnerships. For foreign investment, a Private Limited Company is usually the most suitable structure.",
      },
      {
        question: "Can a non-resident Bangladeshi or foreign national form a company in Bangladesh?",
        answer:
          "Yes. Non-resident Bangladeshis (NRBs) and foreign nationals can form companies in Bangladesh. We specialise in exactly this service and handle all paperwork remotely on your behalf.",
      },
      {
        question: "How long does it take to register a company in Bangladesh?",
        answer:
          "Typically 4–6 weeks from receipt of all documents, subject to RJSC processing times. We keep you updated at every step.",
      },
      {
        question: "Is it possible to check if a company name is available?",
        answer:
          "Unlike some other countries, Bangladesh does not have a public online API for company name availability. We submit name reservation requests through the official RJSC channels and can advise you on availability.",
      },
      {
        question: "What ongoing compliance is required after company formation?",
        answer:
          "Annual returns must be filed with RJSC, and tax returns with the NBR. We offer ongoing compliance packages to keep your company in good standing.",
      },
    ],
  },

  "bank-account": {
    descriptionLong:
      "Opening a bank account in Bangladesh can be complex — especially for expats and non-residents. Bengal Consulting works with established local banks to facilitate personal and business account openings, managing all the paperwork and liaison on your behalf.",
    steps: [
      {
        name: "Assess Your Requirements",
        text: "We determine the right account type (personal savings, current, NRB, or business account) based on your needs and residency status.",
      },
      {
        name: "Document Preparation",
        text: "We prepare and verify all required documentation, including notarised copies where necessary.",
      },
      {
        name: "Bank Liaison",
        text: "We liaise directly with the bank on your behalf, submitting your application and following up on any queries.",
      },
      {
        name: "Account Activation",
        text: "Once approved, we assist with initial deposit requirements and ensure the account is fully operational.",
      },
    ],
    documents: [
      "Passport (for non-residents) or NID (for residents)",
      "Proof of address (utility bill, bank statement)",
      "Passport-size photographs",
      "e-TIN certificate (for business accounts)",
      "Trade Licence (for business accounts)",
      "Introduction letter from an existing account holder (some banks)",
    ],
    faqs: [
      {
        question: "Can a Bangladeshi living abroad open a bank account in Bangladesh?",
        answer:
          "Yes. Non-Resident Bangladeshis (NRBs) can open both NRB accounts (for foreign currency) and regular taka accounts. We handle this for clients across the UK, USA, Middle East and beyond.",
      },
      {
        question: "Can a foreign national open a bank account in Bangladesh?",
        answer:
          "Yes, subject to certain conditions. Foreign nationals with a valid work permit or business investment in Bangladesh can generally open accounts. We advise on eligibility case by case.",
      },
      {
        question: "Do I need to be physically present to open a bank account?",
        answer:
          "Some banks allow remote account opening for NRBs with properly notarised documents. We can advise on which banks support this and manage the process for you.",
      },
      {
        question: "How long does it take to open a bank account?",
        answer:
          "Typically 1–2 weeks once all documents are submitted and verified, subject to the bank's internal process.",
      },
    ],
  },

  "etin-vat-bin": {
    descriptionLong:
      "Bangladesh's National Board of Revenue (NBR) requires businesses and individuals to hold an e-TIN (Electronic Taxpayer Identification Number), and businesses over certain thresholds to register for VAT and obtain a BIN (Business Identification Number). We manage the full registration process for you.",
    steps: [
      {
        name: "Eligibility Assessment",
        text: "We review your situation to determine which registrations you require — e-TIN, VAT, BIN, or all three.",
      },
      {
        name: "Document Collection",
        text: "We gather all required documents including NID, Trade Licence, and business details.",
      },
      {
        name: "NBR Portal Registration",
        text: "We complete the online registration on the NBR portal (using Form Mushak-2.1 for BIN) on your behalf.",
      },
      {
        name: "Certificate Delivery",
        text: "We deliver your e-TIN certificate and/or BIN/VAT registration documents, explaining obligations and next steps.",
      },
    ],
    documents: [
      "National ID (NID) or passport",
      "Passport-size photographs",
      "Trade Licence (for business e-TIN)",
      "Business address details",
      "Mobile number registered in Bangladesh",
      "Bank account details (for BIN)",
    ],
    faqs: [
      {
        question: "What is an e-TIN in Bangladesh?",
        answer:
          "An e-TIN (Electronic Taxpayer Identification Number) is a 12-digit unique number issued by the NBR to individuals and businesses for income tax purposes. It is required for opening bank accounts, getting trade licences, import/export, and many government transactions.",
      },
      {
        question: "What is a BIN number in Bangladesh?",
        answer:
          "A BIN (Business Identification Number) is a 13-digit number issued by the NBR to businesses registered for VAT. It is mandatory for businesses with an annual turnover exceeding BDT 3 crore, and for all importers and exporters since July 2023.",
      },
      {
        question: "Who needs to register for VAT in Bangladesh?",
        answer:
          "Businesses with an annual turnover exceeding BDT 3 crore (approximately USD 27,000) are required to register for VAT and obtain a BIN. Importers and exporters must also register regardless of turnover.",
      },
      {
        question: "Can I get an e-TIN if I live abroad?",
        answer:
          "Yes. Non-resident Bangladeshis can obtain an e-TIN. We manage the process remotely, requiring only scanned copies of your documents.",
      },
      {
        question: "How long does e-TIN registration take?",
        answer:
          "The online registration can typically be completed in 1–3 business days. BIN registration may take slightly longer (3–7 days) due to NBR verification steps.",
      },
    ],
  },

  "trade-licence": {
    descriptionLong:
      "A City Corporation Trade Licence is mandatory for operating any business within a city corporation area in Bangladesh. Bengal Consulting handles the application, renewal, and correction of trade licences on your behalf, including liaison with the Dhaka North City Corporation, Dhaka South City Corporation, Chittagong City Corporation, and others.",
    steps: [
      {
        name: "Business Assessment",
        text: "We assess your business type, location, and the appropriate trade licence category required.",
      },
      {
        name: "Document Preparation",
        text: "We prepare all required documentation including proof of business address, TIN, and ownership documents.",
      },
      {
        name: "Application Submission",
        text: "We submit the application to the relevant City Corporation ward office and pay applicable fees.",
      },
      {
        name: "Follow-up & Collection",
        text: "We follow up with the City Corporation and collect the Trade Licence on your behalf.",
      },
    ],
    documents: [
      "National ID (NID) or passport of business owner",
      "e-TIN certificate",
      "Proof of business address (rent agreement or ownership deed)",
      "Passport-size photographs",
      "Previous trade licence (for renewals)",
      "Relevant sector-specific permits (if applicable)",
    ],
    faqs: [
      {
        question: "What is a City Corporation Trade Licence?",
        answer:
          "A Trade Licence is a mandatory certificate issued by the local City Corporation or municipal authority that authorises a business to operate legally within its jurisdiction. It must be renewed annually.",
      },
      {
        question: "Which city corporation areas do you cover?",
        answer:
          "We cover Dhaka North City Corporation, Dhaka South City Corporation, Chittagong City Corporation, Sylhet City Corporation, Rajshahi City Corporation, and other municipal areas across Bangladesh.",
      },
      {
        question: "How long does a trade licence take to obtain?",
        answer:
          "New applications typically take 2–4 weeks. Renewals are often faster at 1–2 weeks, subject to the City Corporation's current processing times.",
      },
      {
        question: "What happens if I operate without a trade licence?",
        answer:
          "Operating without a valid trade licence is illegal in Bangladesh and can result in fines, penalties, and forced closure of your business. We strongly advise obtaining one before commencing operations.",
      },
    ],
  },

  "bsti-mark": {
    descriptionLong:
      "The BSTI (Bangladesh Standards and Testing Institution) Mark is mandatory for many products sold in Bangladesh to ensure they meet national quality and safety standards. Bengal Consulting guides manufacturers and importers through the certification process, including testing coordination and application management.",
    steps: [
      {
        name: "Product Eligibility Check",
        text: "We identify whether your product requires mandatory BSTI certification and which standards apply.",
      },
      {
        name: "Application Preparation",
        text: "We prepare all application documents, product samples, and technical specifications required by BSTI.",
      },
      {
        name: "Laboratory Testing",
        text: "We coordinate sample submission to BSTI-approved laboratories and manage the testing process.",
      },
      {
        name: "Inspection & Certification",
        text: "We manage the BSTI factory/premise inspection and follow through to certificate issuance.",
      },
      {
        name: "Licence Maintenance",
        text: "We advise on renewal timelines and ongoing compliance requirements to maintain your BSTI licence.",
      },
    ],
    documents: [
      "Company Trade Licence",
      "e-TIN certificate",
      "Product technical specifications",
      "Manufacturing process documentation",
      "Product samples (as required by BSTI)",
      "Factory premises documents (for manufacturing licences)",
    ],
    faqs: [
      {
        question: "What is the BSTI Mark?",
        answer:
          "The BSTI Mark is a quality certification mark awarded by the Bangladesh Standards and Testing Institution (BSTI) to products that meet Bangladesh national standards (BDS). It demonstrates product quality and safety compliance.",
      },
      {
        question: "Which products require mandatory BSTI certification?",
        answer:
          "Over 100 product categories require mandatory BSTI certification, including food products, cement, chemicals, electrical equipment, and consumer goods. We can advise on whether your specific product requires certification.",
      },
      {
        question: "How long does BSTI certification take?",
        answer:
          "The process typically takes 6–12 weeks depending on product complexity, laboratory testing requirements, and BSTI processing times.",
      },
    ],
  },

  "tea-board-licence": {
    descriptionLong:
      "The Bangladesh Tea Board regulates all aspects of tea production, processing, and trade in Bangladesh. A Tea Board Licence is required for tea garden owners, processors, auction agents, brokers, and exporters. Bengal Consulting handles the licence application and renewal process.",
    steps: [
      {
        name: "Licence Type Assessment",
        text: "We identify the correct licence type based on your business activity (garden, processing, trading, export, or auction).",
      },
      {
        name: "Application Preparation",
        text: "We prepare all required documentation for submission to the Bangladesh Tea Board.",
      },
      {
        name: "Submission & Follow-up",
        text: "We submit the application and liaise with the Tea Board throughout the review process.",
      },
      {
        name: "Licence Issuance",
        text: "We collect and deliver your Tea Board Licence and advise on renewal obligations.",
      },
    ],
    documents: [
      "Trade Licence",
      "e-TIN certificate",
      "Land ownership or lease documents (for gardens)",
      "Business registration documents",
      "Bank solvency certificate",
      "Passport-size photographs of applicant",
    ],
    faqs: [
      {
        question: "Who needs a Bangladesh Tea Board Licence?",
        answer:
          "Tea garden owners, tea processing factories, tea traders, export agents, auction agents, and brokers all require appropriate licences from the Bangladesh Tea Board.",
      },
      {
        question: "How long does the Tea Board Licence process take?",
        answer:
          "Processing typically takes 3–6 weeks from submission of a complete application, subject to Tea Board review times.",
      },
    ],
  },

  passport: {
    descriptionLong:
      "Bengal Consulting assists with all types of Bangladesh passport services, including new passport applications, corrections to personal information, amendments following name changes, and emergency passport requests. We work with the Department of Immigration and Passports (DIP) on your behalf.",
    steps: [
      {
        name: "Application Assessment",
        text: "We assess your situation — new application, correction, amendment, or renewal — and advise on the required process and documents.",
      },
      {
        name: "Document Verification",
        text: "We verify all documents for accuracy and completeness before submission to avoid rejections.",
      },
      {
        name: "Application Submission",
        text: "We submit the application to the Department of Immigration and Passports (DIP) and pay applicable fees.",
      },
      {
        name: "Tracking & Collection",
        text: "We track your application status and arrange collection and delivery of the completed passport.",
      },
    ],
    documents: [
      "National ID (NID)",
      "Birth Registration Certificate",
      "Academic certificates (for new applications)",
      "Previous passport (for renewals and corrections)",
      "Supporting legal documents (for name changes/corrections)",
      "Passport-size photographs meeting DIP specifications",
    ],
    faqs: [
      {
        question: "How long does a new Bangladesh passport application take?",
        answer:
          "Regular processing typically takes 3–4 weeks. Express processing (where available) can reduce this to 1–2 weeks. We advise on the best option for your timeline.",
      },
      {
        question: "Can I apply for a Bangladesh passport from abroad?",
        answer:
          "Yes, applications can be made through Bangladesh missions abroad. However, we can assist with document preparation and coordination regardless of your location.",
      },
      {
        question: "How do I correct a mistake on my Bangladesh passport?",
        answer:
          "Corrections require supporting documents proving the correct information (e.g., birth certificate, NID, academic certificates). We manage the correction process end to end.",
      },
    ],
  },

  "national-id": {
    descriptionLong:
      "The National Identity Card (NID) is a fundamental document for all Bangladeshi citizens. Bengal Consulting assists with new NID applications for first-time applicants, corrections to existing NIDs, smart NID card applications, and NID re-issuance following loss or damage.",
    steps: [
      {
        name: "Eligibility Check",
        text: "We verify your eligibility and determine the correct process — new application, correction, or re-issuance.",
      },
      {
        name: "Form Preparation",
        text: "We complete all required forms accurately and prepare supporting documentation.",
      },
      {
        name: "Election Commission Submission",
        text: "We submit your application to the Bangladesh Election Commission (which manages NIDs) and attend on your behalf where possible.",
      },
      {
        name: "Smart NID Collection",
        text: "We assist with collecting the Smart NID card and confirm all details are correct.",
      },
    ],
    documents: [
      "Birth Registration Certificate",
      "Citizenship certificate",
      "Academic certificates",
      "Proof of address",
      "Parent's NID copies",
      "Existing NID (for corrections/re-issuance)",
    ],
    faqs: [
      {
        question: "Who issues National ID Cards in Bangladesh?",
        answer:
          "The Bangladesh Election Commission (EC) is responsible for issuing and managing National ID Cards (NIDs) for all eligible Bangladeshi citizens.",
      },
      {
        question: "What is the Smart NID?",
        answer:
          "The Smart NID is a chip-enabled card that replaces the older laminated NID. It contains biometric data and can be used for electronic verification. Bangladesh has been rolling out Smart NIDs progressively.",
      },
      {
        question: "How do I correct information on my NID?",
        answer:
          "Corrections require the submission of supporting documentary evidence (birth certificate, academic records, etc.) to the Election Commission. We manage this process and reduce the risk of rejection.",
      },
    ],
  },

  "birth-registration": {
    descriptionLong:
      "A Birth Registration Certificate is a fundamental civil document required for school admission, passport applications, NID registration, and many other purposes. Bengal Consulting manages new birth registration applications and corrections to existing certificates through the Registrar General's office and local authorities.",
    steps: [
      {
        name: "Application Assessment",
        text: "We determine whether you need a new registration, a correction, or a certified copy of an existing certificate.",
      },
      {
        name: "Document Preparation",
        text: "We prepare all required documents and complete the application forms accurately.",
      },
      {
        name: "Local Authority Submission",
        text: "We submit to the relevant ward councillor, union parishad, or city corporation office.",
      },
      {
        name: "Certificate Delivery",
        text: "We collect and deliver the Birth Registration Certificate, ensuring all details are correct.",
      },
    ],
    documents: [
      "Hospital birth certificate or discharge summary",
      "Parents' National ID cards",
      "Parents' marriage certificate",
      "Existing birth certificate (for corrections)",
      "Affidavit (for late registration)",
    ],
    faqs: [
      {
        question: "What is the deadline for registering a birth in Bangladesh?",
        answer:
          "Births should ideally be registered within 45 days. Late registration (after 45 days) is possible but may require additional documentation including an affidavit.",
      },
      {
        question: "Can I correct an error on a Bangladesh birth certificate?",
        answer:
          "Yes. Corrections require supporting evidence such as hospital records, parents' documents, and school certificates. We manage the correction process on your behalf.",
      },
      {
        question: "Can an expatriate obtain a birth certificate for a child born abroad?",
        answer:
          "Children born abroad to Bangladeshi parents may need to register their birth with the Bangladesh Embassy/High Commission abroad and subsequently with local authorities. We can advise on the appropriate process.",
      },
    ],
  },

  "national-university-certificate": {
    descriptionLong:
      "A Bangladesh National University (NU) certificate is an official academic document confirming the completion of undergraduate (Honours or Pass) or postgraduate (Master’s or PGD) programs at affiliated colleges. It may take the form of an original certificate, provisional certificate, or academic transcript, and is commonly used for employment, studying abroad, or immigration purposes.\n\nWe handle the entire workflow end-to-end: submitting applications, tracing records, requesting corrections if needed, arranging attestation or apostille for international use, and delivering the final documents securely to you. Bengal Consulting manages the entire process of obtaining, correcting, and attesting National University certificates on your behalf, liaising directly with the university and relevant government bodies.",
    steps: [
      {
        name: "Record Tracing",
        text: "We identify your specific college affiliation and trace your academic records within the National University system.",
      },
      {
        name: "Application Preparation",
        text: "We prepare the application for certificate/transcript retrieval or correction and gather all supporting documents.",
      },
      {
        name: "University Submission",
        text: "We submit to the National University's Controller of Examinations office and follow up on processing.",
      },
      {
        name: "Attestation & Delivery",
        text: "We collect your certificate/transcript and can arrange government attestation or apostille for use abroad.",
      },
    ],
    documents: [
      "Registration number and roll number",
      "Exam year and subject details",
      "Affiliated college name",
      "National ID or passport",
      "Original certificates (for corrections)",
    ],
    faqs: [
      {
        question: "What is the National University of Bangladesh?",
        answer:
          "The National University of Bangladesh is a public affiliating university established in 1992 that oversees academic programmes at hundreds of colleges across the country. It is responsible for conducting examinations and issuing certificates for Honours, Masters, and Degree courses.",
      },
      {
        question: "How do I get a replacement certificate if I lost the original?",
        answer:
          "You can apply to the National University for a duplicate or certified copy of your certificate. We manage this application including all required documentation and follow-up.",
      },
      {
        question: "Can I get my National University certificate attested for use abroad?",
        answer:
          "Yes. We can arrange attestation through the Ministry of Education and/or the Ministry of Foreign Affairs (apostille), making your certificate valid for use in other countries.",
      },
      {
        question: "How long does the certificate retrieval process take?",
        answer:
          "Typically 2–5 weeks, depending on the National University's current processing load and whether attestation is also required.",
      },
    ],
  },
};
