// DSVV Saarthi - Initial Seed Data
// Includes verified sample procedures, mess menus, campus directory, and university events.
// All non-official demonstrations are explicitly labeled as "Sample Data".

export const FOUNDERS_DATA = {
  title: "Sanrakshak & Founders",
  subtitle: "Guided by the divine vision of Yugrishi Pandit Shriram Sharma Acharya and Vandaniya Mata Bhagwati Devi Sharma",
  founders: [
    {
      name: "Pandit Shriram Sharma Acharya Ji",
      title: "Patron & Founder, All World Gayatri Pariwar & DSVV",
      period: "1911 – 1990",
      quote: "एक ऐसे शिक्षा संस्थान की आवश्यकता है जो विद्यार्थियों को केवल आजीविका नहीं, अपितु उदार, करुणामय, निस्वार्थ और प्रबुद्ध देवमानव के रूप में गढ़ सके — यह देवमानवों के निर्माण की टकसाल होगी।",
      quoteEn: "There is need for an educational institution which could mould its students into noble and enlightened human beings: selfless, warm-hearted, compassionate and kind — combining scientific temper with spiritual wisdom.",
      description: "Visionary saint, freedom fighter, and profound philosopher who pioneered the revival of Rishi traditions and the synthesis of science and spirituality, envisioning Dev Sanskriti Vishwavidyalaya as a global seat of cultural and moral renaissance.",
      photo: "/assets/pt_shriram_sharma.jpg",
      badge: "Inspirational Founder"
    },
    {
      name: "Mata Bhagwati Devi Sharma Ji",
      title: "Co-Founder & Spiritual Mother (Vandaniya Mata Ji)",
      period: "1926 – 1994",
      quote: "मातृवत स्नेह, निस्वार्थ सेवा और साधना से ही जीवन में दिव्यता का अवतरण संभव है।",
      quoteEn: "Through motherly affection, selfless service, and disciplined inner sadhana, true divinity awakens in human life.",
      description: "Embodiment of maternal compassion, spiritual strength, and selfless sacrifice who nurtured the Gayatri Pariwar fraternity and guided thousands of students to embrace an ascetic lifestyle rooted in high ideals and character.",
      photo: "/assets/mata_bhagwati_devi.jpg",
      badge: "Spiritual Pillar & Co-Founder"
    }
  ]
};

// Default Sample Admin Users (Pre-seeded in local storage)
export const SEED_USERS = [
  {
    id: "usr_admin_01",
    email: "admin@dsvv.ac.in",
    passwordHash: "saarthi@2026", // Local demo hash
    fullName: "Chief Administrator",
    role: "main_admin",
    department: "Registrar & Academic Council",
    canEditAll: true,
    lastLogin: new Date().toISOString()
  },
  {
    id: "usr_editor_01",
    email: "editor.mess@dsvv.ac.in",
    passwordHash: "mess@2026",
    fullName: "Student Mess Representative",
    role: "student_editor",
    department: "Campus Mess Committee",
    canEditAll: false,
    allowedModules: ["mess", "events"],
    lastLogin: new Date().toISOString()
  }
];

// Helper to get relative dates YYYY-MM-DD
const getDateStr = (offsetDays = 0) => {
  const d = new Date();
  d.setDate(d.getDate() + offsetDays);
  return d.toISOString().split('T')[0];
};

export const SEED_MESS_MENUS = [
  {
    id: "mess_today",
    date: getDateStr(0),
    meals: {
      breakfast: {
        title: "Poha with Sprouts & Herbal Tea",
        titleHi: "पौष्टिक पोहा, अंकुरित मूंग एवं क्वाथ (काढ़ा/हर्बल चाय)",
        timing: "07:30 AM – 08:45 AM",
        items: ["Indori Poha with Peanuts", "Boiled Moong Sprouts", "Fresh Lemon & Coriander", "Herbal Kadha / Warm Milk"],
        isSattvik: true,
        special: "Prepared with low oil & pure desi ghee"
      },
      lunch: {
        title: "Panchmel Dal, Aloo Jeera & Seasonal Sabzi",
        titleHi: "पंचमेल दाल, जीरा आलू, मौसमी लौकी, चावल व ताज़ी रोटियां",
        timing: "12:00 PM – 01:45 PM",
        items: ["Panchmel Mixed Dal", "Jeera Aloo", "Lauki Chana", "Steamed Basmati Rice", "Fresh Phulkas with Butter", "Kachumber Salad & Chaas (Buttermilk)"],
        isSattvik: true,
        special: "Zero garlic and onion - 100% pure sattvik"
      },
      dinner: {
        title: "Moong Khichdi or Kadhi Chawal with Methi Sabzi",
        titleHi: "कढ़ी-चावल, मेथी-आलू, गर्म रोटियां व खीर",
        timing: "07:00 PM – 08:30 PM",
        items: ["Traditional Rajasthani Kadhi", "Steamed Rice", "Methi Aloo dry sabzi", "Tawa Rotis", "Rice Kheer (Sweet)"],
        isSattvik: true,
        special: "Light & digestive evening preparation"
      }
    },
    verificationStatus: "verified",
    verifiedBy: "Mess Supervisor & Student Editor",
    lastUpdated: new Date().toLocaleDateString("en-IN")
  },
  {
    id: "mess_tomorrow",
    date: getDateStr(1),
    meals: {
      breakfast: {
        title: "Dalia with Nuts & Warm Milk",
        titleHi: "नमकीन दलिया / मीठा दलिया, भुने चने व दूध",
        timing: "07:30 AM – 08:45 AM",
        items: ["Vegetable Multigrain Dalia", "Roasted Chana", "Fresh Seasonal Fruit", "Ayurvedic Herbal Kadha"],
        isSattvik: true,
        special: "High protein student energy meal"
      },
      lunch: {
        title: "Rajma Masala, Aloo Gobi & Boondi Raita",
        titleHi: "राजमा, आलू गोभी, बूंदी रायता, चावल व फुल्के",
        timing: "12:00 PM – 01:45 PM",
        items: ["Pahari Rajma", "Aloo Gobi dry", "Pudina Boondi Raita", "Jeera Rice", "Whole Wheat Rotis", "Green Salad"],
        isSattvik: true,
        special: "100% Sattvik authentic Haridwar preparation"
      },
      dinner: {
        title: "Lauki Kofta with Dal Tadka & Roti",
        titleHi: "लौकी कोफ्ता, दाल तड़का, सलाद व गर्मागर्म रोटियां",
        timing: "07:00 PM – 08:30 PM",
        items: ["Lauki Kofta Curry", "Yellow Arhar Dal Tadka", "Fresh Tawa Rotis", "Steamed Rice", "Gur (Jaggery)"],
        isSattvik: true,
        special: "Wholesome and grounding"
      }
    },
    verificationStatus: "verified",
    verifiedBy: "Mess In-charge",
    lastUpdated: new Date().toLocaleDateString("en-IN")
  }
];

export const SEED_PROCEDURES = [
  {
    id: "proc_admission",
    slug: "how-to-get-into-dsvv-admission-guide",
    title: "How to Get into DSVV: Admission Process, Entrance Exam & Interview Guide",
    titleHi: "देव संस्कृति विश्वविद्यालय (DSVV) में प्रवेश कैसे लें: संपूर्ण प्रवेश, प्रवेश परीक्षा एवं साक्षात्कार मार्गदर्शिका",
    category: "admission",
    categoryLabel: "Admission & Entrance",
    urgency: "High",
    responsibleOffice: "Admissions Directorate & Academic Counseling Cell",
    location: "Administrative Block, Ground Floor, Admissions Desk",
    officialNoticeRef: "DSVV/ADM/PROSPECTUS/2026-27",
    verificationStatus: "verified",
    lastVerifiedDate: "13 Nov 2026",
    summary: "Complete 4-stage guide for candidates seeking admission to undergraduate, postgraduate, and diploma programs at Dev Sanskriti Vishwavidyalaya, Haridwar.",
    youtubeChannel: "https://www.youtube.com/@dsvvtv",
    youtubeSearchQuery: "DSVV admission process entrance exam interview",
    youtubeVideos: [
      {
        title: "Official DSVV Channel (dsvvtv)",
        url: "https://www.youtube.com/@dsvvtv",
        description: "Official Dev Sanskriti Vishwavidyalaya YouTube channel with campus tour, mission intro, and convocation insights."
      },
      {
        title: "DSVV Interview Preparation & Mission Guidance",
        url: "https://www.youtube.com/results?search_query=DSVV+interview+preparation+guidance",
        description: "Candidate walkthroughs on how to prepare for the personal interview round and moral/spiritual culture questions."
      },
      {
        title: "DSVV Entrance Exam Pattern & OMR Details",
        url: "https://www.youtube.com/results?search_query=DSVV+entrance+exam+process+guidance",
        description: "Bilingual syllabus breakdown covering academic topics, general knowledge, and Shantikunj/Gayatri Pariwar mission questions."
      }
    ],
    eligibility: [
      "UG Programs: 10+2 / Intermediate with minimum 50% marks from a recognized board.",
      "PG Programs: Bachelor's degree in relevant discipline with minimum 50% aggregate.",
      "Commitment to university ethos: strictly vegetarian, adherence to modest white dress code, and non-smoking/non-intoxicant campus rules."
    ],
    requiredDocuments: [
      "Online Admission Application Form printout with passport photos",
      "High School (10th) & Intermediate (12th) Marksheets & Passing Certificates",
      "Graduation marksheets (for PG applicants)",
      "Transfer Certificate (TC) & Character Certificate from previous institution",
      "Government Photo ID (Aadhaar / Voter ID / Passport)",
      "Category / Caste certificate (if applicable for reservations)"
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Online Application Registration",
        description: "Visit the official university website (dsvv.ac.in) during the annual admission window (typically opens March-April). Fill out the application form with choice of course and test center, and submit the nominal processing fee online.",
        tips: "Download the official prospectus and read the syllabus of the 'Mission Section' carefully."
      },
      {
        stepNumber: 2,
        title: "Written Entrance Examination",
        description: "Download your admit card and appear for the bilingual (Hindi & English) pen-and-paper OMR entrance exam at your chosen center (Haridwar, Delhi/NCR, Bhopal, Lucknow, Patna, Kolkata, etc.). Questions cover General Knowledge, Academic Core, and Spiritual/Indian Culture values.",
        tips: "Revise Yugrishi Pandit Shriram Sharma Acharya's key concepts and Gayatri Pariwar history for the mission section."
      },
      {
        stepNumber: 3,
        title: "Personal Interview on Haridwar Campus",
        description: "Candidates shortlisted from the written exam are invited to the Haridwar campus for a face-to-face interview. The faculty panel evaluates communication, discipline, behavioral alignment with spiritual values, and authentic career goals.",
        tips: "Wear formal modest attire (preferably traditional Indian or clean formal clothes). Be honest, respectful, and genuine about why you chose DSVV."
      },
      {
        stepNumber: 4,
        title: "Document Verification & Hostel Allotment",
        description: "Report for physical document verification, health clearance at Brahmavarchas dispensary, semester fee deposit, and residential room allotment at Gomti (Boys) or Kaveri (Girls) hostels.",
        tips: "Purchase the prescribed white uniform (White Kurta-Pyjama for boys; White Salwar-Kurta-Dupatta for girls) before classes begin."
      }
    ],
    contactPerson: "Registrar & Admissions Coordinator",
    contactEmail: "admissions@dsvv.ac.in",
    contactPhone: "01334-261303 Ext 101/102"
  },
  {
    id: "proc_prospectus_rules",
    slug: "dsvv-prospectus-dress-code-and-dinacharya",
    title: "Official Prospectus Rules: Uniform Dress Code & Daily Routine (Dinacharya)",
    titleHi: "विश्वविद्यालय विवरणिका (Prospectus) नियम: गणवेश (Dress Code) एवं दैनिक दिनचर्या",
    category: "admission",
    categoryLabel: "Prospectus & Rules",
    urgency: "Medium",
    responsibleOffice: "Proctorial Board & Dean of Student Welfare (DSW)",
    location: "Administrative Block & Chief Warden Office",
    officialNoticeRef: "DSVV/PROSPECTUS/RULES/2026",
    verificationStatus: "verified",
    lastVerifiedDate: "13 Nov 2026",
    summary: "Essential lifestyle ordinances from the official DSVV Prospectus covering mandatory white uniform attire, dining at Maa Anandamayi Bhojanalaya, and spiritual daily routine.",
    eligibility: [
      "All regular enrolled residential students of Dev Sanskriti Vishwavidyalaya."
    ],
    requiredDocuments: [
      "University Smart RFID Identity Card (to be displayed visibly at all times)"
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Mandatory Academic Uniform",
        description: "Boys must wear White Kurta-Pyjama or Kurta-Dhoti. Girls must wear White Salwar-Kurta with Dupatta (dupatta is compulsory). Faculty of Yoga students wear approved tracksuits during practicals. Transparent, knee-above, low-cut, or casual clothes are prohibited during academic hours.",
        tips: "Students must wear modest clothing that fully covers shoulders, midriff, and legs."
      },
      {
        stepNumber: 2,
        title: "Spiritual Daily Routine (Dinacharya)",
        description: "Students wake up early (around 04:30 AM), attend morning prayer / Upasana, Yagya, and Yogasanas at Mahakal Mandir or Yagyashala, followed by morning meals, academic classes, afternoon swadhyay, and evening Aarti.",
        tips: "Participating in collective prayer builds inner discipline and memory concentration."
      },
      {
        stepNumber: 3,
        title: "Dining at Maa Anandamayi Bhojanalaya",
        description: "All meals (breakfast, lunch, dinner) are served exclusively at Maa Anandamayi Bhojanalaya. Meals are 100% pure vegetarian, satvik (free of onion and garlic). Food prayer is chanted before eating, and zero wastage of food is strictly enforced.",
        tips: "Keep your eating utensils clean and return them carefully to the counter."
      }
    ],
    contactPerson: "Chief Proctor",
    contactEmail: "proctor@dsvv.ac.in",
    contactPhone: "01334-261303 Ext 110"
  },
  {
    id: "proc_med_leave",
    slug: "medical-leave-procedure",
    title: "Application Procedure for Medical Leave & Attendance Shortage",
    titleHi: "चिकित्सा अवकाश (Medical Leave) एवं उपस्थिति छूट की प्रक्रिया",
    category: "attendance",
    categoryLabel: "Attendance & Academics",
    urgency: "High",
    responsibleOffice: "Office of the Dean of Studies & Attendance Cell",
    location: "Administrative Block, 1st Floor, Room 104",
    officialNoticeRef: "DSVV/ACAD/MED/2025-26",
    verificationStatus: "verified",
    lastVerifiedDate: "05 Nov 2026",
    summary: "Clear 4-step protocol for regular students suffering from medical illness to register their attendance exemption without penalty.",
    eligibility: [
      "Any enrolled regular student with genuine medical illness certified by a registered medical practitioner.",
      "Application must be initiated within 7 working days of returning to campus."
    ],
    requiredDocuments: [
      "Official Medical Leave Application Form (Form DSVV-MED-01)",
      "Original Medical Prescription and Doctor's Advice Slip",
      "Hospital Admission / Discharge Summary (if hospitalized)",
      "Pharmacy / Medical test purchase receipts",
      "Fitness Certificate from physician confirming recovery"
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Obtain Medical Verification",
        description: "Get diagnosed at Shantikunj Dispensary, Brahmavarchas Clinic, or a recognized Government / Authorized hospital. Retain all original prescription slips and medicine receipts.",
        tips: "Photocopies without doctor seal are strictly rejected by the scrutiny cell."
      },
      {
        stepNumber: 2,
        title: "Fill Application Form",
        description: "Collect the Medical Exemption Form from Academic Section Counter #2 or download from the portal. Fill in subject codes and dates of absence accurately.",
        tips: "Ensure roll number and semester are legible."
      },
      {
        stepNumber: 3,
        title: "HOD Endorsement",
        description: "Submit the file to your respective Department Head (HOD). The HOD examines the class log and signs the recommendation.",
        tips: "Visit during HOD consultation hours (03:00 PM – 04:30 PM)."
      },
      {
        stepNumber: 4,
        title: "Submit to Attendance Cell",
        description: "Hand over the endorsed form to the Attendance Section in Room 104. Retain the stamped duplicate receiving slip for your semester examination clearance.",
        tips: "Your university portal attendance reflects updated medical credits within 5 business days."
      }
    ],
    contactPerson: "Dr. Attendance In-Charge",
    contactEmail: "attendance@dsvv.ac.in",
    contactPhone: "01334-261303 Ext 212"
  },
  {
    id: "proc_hostel_outpass",
    slug: "hostel-leave-outpass",
    title: "Hostel Night-Out / Home Visit Out-Pass Procedure",
    titleHi: "छात्रावास अवकाश (Hostel Leave / Gate Pass) प्राप्त करने की विधि",
    category: "hostel",
    categoryLabel: "Hostel & Residence",
    urgency: "Medium",
    responsibleOffice: "Office of the Chief Warden & Hostel Wardens",
    location: "Respective Hostel Warden Office (Boys: Gomti / Girls: Kaveri)",
    officialNoticeRef: "DSVV/HOSTEL/LEAVE/04",
    verificationStatus: "verified",
    lastVerifiedDate: "02 Nov 2026",
    summary: "Official process for residential students leaving the university premises for vacation, emergency, or family commitments.",
    eligibility: [
      "All resident students residing in university hostels.",
      "Mandatory verbal or written consent from registered parents/guardian."
    ],
    requiredDocuments: [
      "Hostel Out-Pass Slip (Triplicate booklet issued by warden)",
      "Parental Consent SMS / Letter on official registered phone number",
      "Student ID Card"
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Parental Confirmation",
        description: "Have your parent/guardian communicate with your floor warden or send confirmation through the registered WhatsApp/SMS portal.",
        tips: "Third-party calls from friends or non-registered relatives are not accepted."
      },
      {
        stepNumber: 2,
        title: "Warden Verification & Sign-off",
        description: "Present your leave slip to the Hostel Warden between 05:00 PM and 07:00 PM on the day preceding departure.",
        tips: "Ensure room key protocol and cleanliness check are acknowledged."
      },
      {
        stepNumber: 3,
        title: "Security Gate Clearance",
        description: "Present the signed pink gate pass slip to the Main Security Gate guard upon exit. Return the stamped return-receipt to the warden within 2 hours of arrival back on campus.",
        tips: "Gate closes strictly at 07:30 PM."
      }
    ],
    contactPerson: "Hostel Chief Proctor",
    contactEmail: "hostels@dsvv.ac.in",
    contactPhone: "01334-261303 Ext 118"
  },
  {
    id: "proc_bonafide_cert",
    slug: "bonafide-scholarship-documents",
    title: "Procedure for Scholarship Documents & Bonafide Certificates (Registrar Office)",
    titleHi: "छात्रवृत्ति (Scholarship) दस्तावेज एवं बोनाफाइड प्रमाण पत्र प्राप्त करने की प्रक्रिया (कुलसचिव कार्यालय)",
    category: "documents",
    categoryLabel: "Official Documents",
    urgency: "Normal",
    responsibleOffice: "Registrar Office (कुलसचिव कार्यालय / Administrative Block)",
    location: "Administrative Block, Registrar Office Student Dealing Desks",
    officialNoticeRef: "DSVV/REG/SCHOLARSHIP/2026",
    verificationStatus: "verified",
    lastVerifiedDate: "13 Nov 2026",
    summary: "Authentic university process to obtain certificates, bonafide documents, or verification endorsements for state/national scholarships from the Registrar Office.",
    eligibility: [
      "Any enrolled regular student applying for state, central, or private scholarships (e.g., UP Scholarship, NSP, Samaj Kalyan).",
      "No pending disciplinary or fee-hold sanctions."
    ],
    requiredDocuments: [
      "Handwritten or typed formal application addressed to 'The Registrar Sir, DSVV'",
      "Copy of Current Semester Fee Receipt",
      "Copy of University Student Identity Card",
      "Scholarship portal format / draft needing verification (if applicable)"
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Visit Registrar Office Student Dealing Desk",
        description: "Go to the Registrar Office located inside the main Administrative Block. Meet the dealing staff at the student desk and explain specifically which document or signature is needed for your scholarship purpose.",
        tips: "Visit during regular administrative office hours (10:00 AM – 04:30 PM)."
      },
      {
        stepNumber: 2,
        title: "Write Application in the Name of Registrar Sir",
        description: "The dealing staff will ask you to write a formal application addressed to 'The Registrar Sir, Dev Sanskriti Vishwavidyalaya'. Clearly mention your Name, Roll Number, Class/Semester, Purpose of Scholarship, and the specific timeframe by which you need the document.",
        tips: "Mention your contact phone number and exact scholarship portal deadline in the application."
      },
      {
        stepNumber: 3,
        title: "Submit Application at the Desk",
        description: "Hand over the signed application along with your fee receipt photocopy and student ID copy to the working staff at the desk. If urgent, inform them politely so they can prioritize processing.",
        tips: "Ask the staff for the tentative turnaround timeline."
      },
      {
        stepNumber: 4,
        title: "Collect Verified Document in 1 to 3 Days",
        description: "Return to the Registrar Office after 1 to 3 days (or as per the agreed urgency timeframe). The staff will verify your student record, obtain Registrar Sir's endorsement/seal, and hand you the verified document.",
        tips: "Check that the official university seal and reference number are stamped."
      }
    ],
    contactPerson: "Student Section In-charge, Registrar Office",
    contactEmail: "registrar@dsvv.ac.in",
    contactPhone: "01334-261303 (Registrar Office Desks)"
  },
  {
    id: "proc_shriram_scholarship",
    slug: "shriram-sharma-acharya-scholarship",
    title: "Pt. Shriram Sharma Acharya Scholarship & Financial Aid",
    titleHi: "पंडित श्रीराम शर्मा आचार्य छात्रवृत्ति एवं शुल्क सहायता (Scholarship) प्रक्रिया",
    category: "admission",
    categoryLabel: "Scholarships & Financial Aid",
    urgency: "High",
    responsibleOffice: "Student Welfare Committee & Registrar Office (छात्र कल्याण एवं कुलसचिव कार्यालय)",
    location: "Administrative Block, DSVV Main Campus",
    officialNoticeRef: "DSVV/SCHOLARSHIP/PSSSA/2026",
    verificationStatus: "verified",
    lastVerifiedDate: "13 Nov 2026",
    summary: "Institutional scholarship founded in honor of patron founder Pt. Shriram Sharma Acharya to support economically disadvantaged, meritorious, and dedicated students with tuition fee waivers (up to 20%–100%) and research grants.",
    eligibility: [
      "Regular enrolled undergraduate, postgraduate, or research (Ph.D.) students of DSVV.",
      "Demonstrated financial need or high academic merit with no semester backlogs.",
      "Clean disciplinary record and active participation in university social/spiritual dinacharya.",
      "Fee concession quota available for international students demonstrating dedication to Gayatri Parivar mission ethos."
    ],
    requiredDocuments: [
      "Formal handwritten or typed application addressed to 'The Registrar / Hon'ble Vice-Chancellor, DSVV'",
      "Valid Income Certificate issued by competent government authority (Tehsildar/SDM) or family income declaration",
      "Academic marksheets of previous qualifying examination/semester",
      "Recommendation note / signature from respective Department Head (HOD) or Class Mentor",
      "Copy of University Student Identity Card and current semester fee deposit receipt"
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Draft Application to Vice-Chancellor / Registrar Sir",
        description: "Write a formal application explaining your academic enrollment (Course, Semester, Roll Number), family financial circumstances, and specific request for Pt. Shriram Sharma Acharya fee assistance.",
        tips: "Highlight any extracurricular involvement, voluntary seva, or academic achievements."
      },
      {
        stepNumber: 2,
        title: "Obtain HOD Recommendation",
        description: "Take the application and your semester marksheets to your Department Head (HOD). The HOD assesses your academic sincerity, attendance, and forwards the application with their official recommendation signature.",
        tips: "Ensure your attendance is above the mandatory 75% threshold."
      },
      {
        stepNumber: 3,
        title: "Submit at Registrar Office Student Section",
        description: "Submit the endorsed dossier (Application + Income Certificate + Marksheets + ID Copy) at the student dealing desk in the Administrative Block. Collect an acknowledgement receipt / diary number.",
        tips: "Submit well before semester fee deadlines announced in the academic calendar."
      },
      {
        stepNumber: 4,
        title: "Committee Evaluation & Personal Interview",
        description: "The University Scholarship & Financial Aid Committee reviews all applications and invites shortlisted candidates for a personal interaction to assess genuine need and commitment.",
        tips: "Be transparent and honest about your family circumstances during the interaction."
      },
      {
        stepNumber: 5,
        title: "Award Notification & Fee Adjustment",
        description: "Upon committee approval, the scholarship sanction order is issued. The sanctioned fee waiver or scholarship amount is directly adjusted against your semester tuition or credited to your student account.",
        tips: "Collect your sanctioned fee adjustment receipt from the Account Office for your records."
      }
    ],
    contactPerson: "Scholarship & Student Welfare Coordinator, Registrar Office",
    contactEmail: "scholarships@dsvv.ac.in",
    contactPhone: "01334-261303 (Ext. 204)"
  },
  {
    id: "proc_id_loss",
    slug: "duplicate-id-card",
    title: "Procedure for Lost ID Card & Duplicate Issuance (Parisampatti Vibhag)",
    titleHi: "खोए हुए पहचान पत्र (ID Card) का डुप्लीकेट बनवाने की आधिकारिक प्रक्रिया (परिसम्पत्ति विभाग)",
    category: "documents",
    categoryLabel: "Official Documents",
    urgency: "High",
    responsibleOffice: "Parisampatti Vibhag (परिसम्पत्ति विभाग) & Account Office (लेखा विभाग)",
    location: "Parisampatti Vibhag & Administrative Block Accounts Window",
    officialNoticeRef: "DSVV/PROC/IDCARD/2026",
    verificationStatus: "verified",
    lastVerifiedDate: "13 Nov 2026",
    summary: "Accurate step-by-step protocol to replace a lost student ID card through Parisampatti Vibhag and the university Account Office.",
    eligibility: ["Active DSVV students whose ID card is lost, damaged, or misplaced."],
    requiredDocuments: [
      "Official ₹100 duplicate ID receipt issued by the Account Office",
      "Registration entry (Name, Class/Course, and Roll Number) in Parisampatti Vibhag register"
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Report to Parisampatti Vibhag",
        description: "Visit Parisampatti Vibhag (परिसम्पत्ति विभाग) and inform the staff that you have misplaced/lost your student ID card. The staff will direct you to the Account Office for duplicate card receipt creation.",
        tips: "Visit during regular office hours on campus working days."
      },
      {
        stepNumber: 2,
        title: "Pay ₹100 at Account Office & Get Receipt",
        description: "Proceed to the university Account Office with ₹100 (one hundred rupees). Tell them you have lost your student ID card and need a receipt to issue a new one. Pay ₹100 and obtain the official printed/stamped payment receipt.",
        tips: "Keep this payment receipt safe as it is mandatory proof for card printing."
      },
      {
        stepNumber: 3,
        title: "Submit Receipt & Enter Details in Register",
        description: "Take the ₹100 receipt back to Parisampatti Vibhag. Hand over the receipt to the in-charge and enter your Name, Class/Course, and Roll Number clearly in their official duplicate ID register.",
        tips: "Ensure your Roll Number and Class spelling are completely accurate."
      },
      {
        stepNumber: 4,
        title: "Collect New ID Card in 2 to 3 Days",
        description: "The department will process, print, and activate your replacement ID card. Return to Parisampatti Vibhag after 2–3 working days to collect your newly prepared student ID card.",
        tips: "Carry your fee receipt copy or fee slip while waiting for your new card."
      }
    ],
    contactPerson: "In-charge, Parisampatti Vibhag",
    contactEmail: "parisampatti@dsvv.ac.in",
    contactPhone: "01334-261303 (Parisampatti Vibhag)"
  },
  {
    id: "proc_sports_participation",
    slug: "sports-events-and-selection-trials",
    title: "How to Participate in University Sports Events & Trials (Sports Department)",
    titleHi: "विश्वविद्यालय खेलकूद प्रतियोगिताओं व ट्रायल्स में भाग लेने की प्रक्रिया (खेल विभाग)",
    category: "sports",
    categoryLabel: "Sports & Athletics",
    urgency: "Normal",
    responsibleOffice: "Department of Physical Education & Sports (शारीरिक शिक्षा एवं खेलकूद विभाग)",
    location: "DSVV Sports Complex Pavilion, Central Sports Ground",
    officialNoticeRef: "DSVV/SPORTS/TOURNAMENTS/2026",
    verificationStatus: "verified",
    lastVerifiedDate: "13 Nov 2026",
    summary: "Clear instructions for students to track departmental sports notices, participate in selection trials for cricket, volleyball, athletics, and represent DSVV in inter-university championships.",
    eligibility: [
      "Any regular enrolled student of DSVV across undergraduate, postgraduate, and diploma streams.",
      "Physical fitness certificate / medical self-declaration form."
    ],
    requiredDocuments: [
      "Sports Participation Entry Form (available at the Sports Ground Office)",
      "University Student ID Card photocopy",
      "Medical fitness undertaking (stamped by Brahmavarchas clinic if representing for high-endurance tournaments)"
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Check Upcoming Sports Notices & Fixtures",
        description: "Sports notices for annual Khel Mahotsav, inter-departmental leagues (Cricket, Volleyball, Badminton, Athletics, Tug of War), and national trials are posted on the Sports Pavilion notice board and published on the Saarthi portal.",
        tips: "Announcements typically go live 2–3 weeks before tournament dates."
      },
      {
        stepNumber: 2,
        title: "Form Department Team or Individual Registration",
        description: "For team sports (Cricket, Volleyball), contact your respective Department Sports Representative or Captain. For individual events (100m/400m race, Table Tennis, Badminton, Yogasan), register directly at the Sports Pavilion Office.",
        tips: "Each department forms designated teams with uniform jerseys."
      },
      {
        stepNumber: 3,
        title: "Attend Official Selection Trials",
        description: "Report to the Central Sports Ground in proper sports attire (track pants, sports shoes, and t-shirt) on scheduled trial dates for fitness evaluation and skill assessment by the Sports Officer.",
        tips: "Morning trial slots usually run from 06:00 AM to 07:30 AM."
      },
      {
        stepNumber: 4,
        title: "Participation & University Sports Certificate",
        description: "Selected athletes receive official training mentorship, university sports kits, and are awarded medals, trophies, and University Merit Sports Certificates during the Annual Sports Day.",
        tips: "Outstanding performers are recommended for AIU Inter-University National Tournaments."
      }
    ],
    contactPerson: "University Sports Officer & Physical Education HOD",
    contactEmail: "sports@dsvv.ac.in",
    contactPhone: "01334-261303 Ext 225 (Sports Pavilion)"
  },
  {
    id: "proc_volunteer_mrityunjay",
    slug: "mrityunjay-sabhagar-event-volunteering",
    title: "Student Volunteer Registration for Dignitary Visits & Convocations (Mrityunjay Sabhagar)",
    titleHi: "मृत्युंजय सभागार में आयोजित मुख्य कार्यक्रमों व वीआईपी दौरों में छात्र स्वयंसेवक (Volunteer) बनने की प्रक्रिया",
    category: "activities",
    categoryLabel: "Volunteering & Dignitaries",
    urgency: "High",
    responsibleOffice: "Proctorial Board & Dean of Student Welfare (DSW)",
    location: "Administrative Block (DSW Office) & Mrityunjay Sabhagar",
    officialNoticeRef: "DSVV/VOLUNTEER/VIP/2026",
    verificationStatus: "verified",
    lastVerifiedDate: "13 Nov 2026",
    summary: "How students can register, qualify for volunteer duties, and participate when high dignitaries (President of India, Governor, Chief Minister) visit Mrityunjay Sabhagar.",
    eligibility: [
      "Regular DSVV students maintaining minimum 75% attendance and exemplary proctorial conduct.",
      "Willingness to participate in rehearsals and follow security protocols."
    ],
    requiredDocuments: [
      "Student Volunteer Registration Form (endorsed by Department HOD)",
      "University RFID ID card",
      "One recent passport photo for Special Event Security Pass"
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Volunteer Call Notice & Application",
        description: "Whenever national dignitaries (e.g., Hon'ble President of India Smt. Droupadi Murmu, Governor of Uttarakhand, or State CM) visit Mrityunjay Sabhagar for convocations or festivals, an open call for student volunteers is published.",
        tips: "Fill out the registration slip mentioning your preferred role: VIP Reception, Stage Management, Seating Coordination, or Media."
      },
      {
        stepNumber: 2,
        title: "Screening & Role Allocation",
        description: "Report to the DSW / Proctorial Committee for a short briefing and orientation. Roles are assigned based on discipline, language proficiency (Hindi/English), and prior volunteer experience.",
        tips: "Strict adherence to the university white uniform and identity badge is compulsory."
      },
      {
        stepNumber: 3,
        title: "Rehearsal & Security Briefing at Mrityunjay Sabhagar",
        description: "Attend the mandatory full-dress rehearsal at Mrityunjay Sabhagar 24–48 hours prior to the event. Local administration and university security brief all student volunteers on protocol and crowd flow.",
        tips: "Familiarize yourself with auditorium exits, VIP lounge, and guest seating bays."
      },
      {
        stepNumber: 4,
        title: "Execution & Certificate of Appreciation",
        description: "Perform your assigned duty on event day with discipline and dignity. All participating volunteers receive an official University Certificate of Volunteer Excellence signed by the Vice-Chancellor / Registrar.",
        tips: "Adds significant value to your personal portfolio and leadership credentials."
      }
    ],
    contactPerson: "Dean of Student Welfare & Cultural In-charge",
    contactEmail: "volunteer@dsvv.ac.in",
    contactPhone: "01334-261303 Ext 114 (DSW Office)"
  }
];

export const SEED_CAMPUS_LOCATIONS = [
  {
    id: "loc_library",
    nameEn: "Central Library (Sardar Vallabhbhai Patel Bhawan)",
    nameHi: "केंद्रीय पुस्तकालय (सरदार वल्लभभाई पटेल भवन)",
    category: "academic",
    categoryLabel: "Academic & Research",
    building: "Sardar Vallabhbhai Patel Bhawan",
    floor: "Dedicated Floors, Patel Bhawan",
    timings: "09:00 AM – 07:00 PM (Mon - Sat)",
    description: "Modern university central library located inside Sardar Vallabhbhai Patel Bhawan, housing over 70,000 volumes, rare Vedic manuscripts, digital research terminals, e-journals, and peaceful silent reading zones.",
    facilities: ["High-speed Wi-Fi", "Digital Thesis Repository", "Photocopy Service", "Spiritual Literature Corner"],
    directions: "Located inside Sardar Vallabhbhai Patel Bhawan; follow the signage from the main foyer.",
    contact: "library@dsvv.ac.in",
    isVerified: true
  },
  {
    id: "loc_mahakal_mandir",
    nameEn: "Mahakal Mandir & Akhand Deep",
    nameHi: "महाकाल मंदिर एवं अखंड ज्योति",
    category: "spiritual",
    categoryLabel: "Spiritual & Cultural Heritage",
    building: "Mahakal Temple Complex",
    floor: "Ground Complex",
    timings: "05:00 AM – 12:30 PM | 04:30 PM – 08:30 PM",
    description: "The spiritual heart of Dev Sanskriti Vishwavidyalaya. Houses the sacred Akhand Deep lighted since 1926 by Pandit Shriram Sharma Acharya. Daily morning and evening Yagya and Aarti take place here.",
    facilities: ["Yagyashala", "Meditation Alcoves", "Morning Prarthana Hall"],
    directions: "Located directly along the central axis of the campus campus boulevard, walking distance from all hostels.",
    contact: "sanskriti@dsvv.ac.in",
    isVerified: true
  },
  {
    id: "loc_admin_block",
    nameEn: "Administrative Block (Karyalaya)",
    nameHi: "प्रशासनिक भवन (रजिस्ट्रार व परीक्षा विभाग)",
    category: "administrative",
    categoryLabel: "Administration",
    building: "Administrative Complex",
    floor: "Ground to 2nd Floor",
    timings: "09:30 AM – 05:30 PM (Mon - Sat)",
    description: "Houses the Vice-Chancellor Office, Registrar, Dean of Academic Studies, Examination Control Cell, Accounts Counter, and Public Relations Office.",
    facilities: ["Single Window Student Helpdesk", "Accounts Counter", "Proctorial Board Office"],
    directions: "Immediately to the right after the main campus security check gate.",
    contact: "registrar@dsvv.ac.in",
    isVerified: true
  },
  {
    id: "loc_shriram_bhawan",
    nameEn: "Shriram Bhawan (Department of Animation & Visual Effects)",
    nameHi: "श्रीराम भवन (एनीमेशन एवं विजुअल इफेक्ट्स विभाग)",
    category: "academic",
    categoryLabel: "Academic & Tech",
    building: "Shriram Bhawan",
    floor: "Dedicated Independent Building",
    timings: "08:30 AM – 06:30 PM",
    description: "The dedicated creative home of the Department of Animation & Visual Effects at DSVV. Houses advanced 3D character modeling labs, high-end VFX compositing suites, green screen studios, digital audio dubbing booths, and showreel review theaters for B.Sc. and M.Sc. Animation students.",
    facilities: ["High-End GPU VFX Workstations", "3D Animation Labs (Maya/Blender)", "Chroma Studio (Green Screen)", "Sound Dubbing & Editing Suite", "Student Portfolio & Showreel Room"],
    directions: "Distinct academic building situated near the central quadrangle; inquire directly at the Shriram Bhawan entrance foyer for animation department faculty and labs.",
    contact: "animation@dsvv.ac.in",
    isVerified: true
  },
  {
    id: "loc_chaitanya_bhawan",
    nameEn: "Chaitanya Bhawan (Computer Sciences, IT & Media)",
    nameHi: "चैतन्य भवन (कंप्यूटर विज्ञान, आईटी एवं जनसंचार विभाग)",
    category: "academic",
    categoryLabel: "Academic & Tech",
    building: "Chaitanya Bhawan",
    floor: "Multi-Storey Academic Block",
    timings: "08:30 AM – 06:00 PM",
    description: "Major academic center housing the Department of Computer Sciences & IT (BCA, MCA, B.Sc./M.Sc. Computer Science) and the Department of Journalism & Mass Communication (BJMC, MJMC). Equipped with programming software labs, web development terminals, and media editing suites.",
    facilities: ["BCA/MCA Programming Labs", "Advanced IT Server Room", "Journalism Media Editing Suite", "Smart Lecture Theaters", "Department HOD Offices"],
    directions: "Prominent academic bhawan near the central lawn; ground and first floors house Computer Science and Media departments.",
    contact: "computerscience@dsvv.ac.in",
    isVerified: true
  },
  {
    id: "loc_sanskriti_vibhag",
    nameEn: "Culture Department (संस्कृति विभाग & Student Volunteering)",
    nameHi: "संस्कृति विभाग (छात्र स्वयंसेवक समन्वय एवं सांस्कृतिक प्रभाग)",
    category: "cultural",
    categoryLabel: "Culture & Volunteering",
    building: "Administrative & Cultural Annex",
    floor: "Ground Floor",
    timings: "09:30 AM – 05:00 PM",
    description: "The official nodal department responsible for organizing university cultural functions, morning prayers and assemblies, spiritual festivals, and coordinating verified student volunteers for grand convocations and VIP dignitary visits in Mrityunjay Sabhagar.",
    facilities: ["Volunteer Accreditation Counter", "Cultural Program Desk", "Ceremonial Regalia Store", "Stage Performance Coordination"],
    directions: "Located within the cultural wing adjacent to the main Administrative Block and Mrityunjay Sabhagar foyer.",
    contact: "culture@dsvv.ac.in",
    isVerified: true
  },
  {
    id: "loc_dispensary",
    nameEn: "Brahmavarchas Health Clinic & Dispensary",
    nameHi: "ब्रह्मवर्चस स्वास्थ्य केंद्र एवं औषधालय",
    category: "facilities",
    categoryLabel: "Health & Wellness",
    building: "Arogya Dham",
    floor: "Ground Floor",
    timings: "24x7 Emergency | OPD: 08:00 AM – 01:00 PM, 04:00 PM – 07:00 PM",
    description: "Integrated health clinic providing primary medical emergency care, Ayurvedic herbal remedies, Naturopathy consultation, and allopathic first aid with ambulance standby.",
    facilities: ["Doctor on Duty", "First-Aid Pharmacy", "Oxygen Support", "Ambulance Transfer"],
    directions: "Adjacent to staff residential block, 200m from Boys Hostel gate.",
    contact: "health@dsvv.ac.in",
    isVerified: true
  },
  {
    id: "loc_mrityunjay_sabhagar",
    nameEn: "Mrityunjay Sabhagar (Dev Sanskriti Sabhagar / Auditorium)",
    nameHi: "मृत्युंजय सभागार (देव संस्कृति प्रेक्षागृह)",
    category: "cultural",
    categoryLabel: "Auditorium & Conventions",
    building: "Mrityunjay Cultural & Convention Center",
    floor: "Main Ceremonial Auditorium Hall",
    timings: "Event-based | Office: 09:00 AM – 05:30 PM",
    description: "The grand ceremonial auditorium (Dev Sanskriti Sabhagar) of Dev Sanskriti Vishwavidyalaya with a seating capacity of over 1,500. Venue for annual convocations, national seminars, international cultural festivals, and addresses by national dignitaries such as the President of India, Governor, and Chief Minister.",
    facilities: ["1,500+ Seating Capacity", "Acoustic Surround Audio", "VIP Green Rooms", "Live Broadcast Control Room", "Central Air-Conditioning"],
    directions: "Situated along the main ceremonial quadrangle, facing the university grand avenue.",
    contact: "events@dsvv.ac.in",
    isVerified: true
  },
  {
    id: "loc_yoga_bhawan",
    nameEn: "Sardar Patel & Yoga Bhawan (Yogic Science & Holistic Health)",
    nameHi: "सरदार पटेल एवं योग भवन (योग विज्ञान एवं मानव चेतना विभाग)",
    category: "academic",
    categoryLabel: "Yoga & Spiritual Science",
    building: "Sardar Vallabhbhai Patel Bhawan",
    floor: "Ground & 1st Floor Halls",
    timings: "05:30 AM – 07:00 PM",
    description: "The spiritual and therapeutic heart of DSVV, hosting the Department of Yogic Science and Human Consciousness. Houses expansive sattvik yoga practice halls, meditation chambers, Shatkarma purification spaces, and research facilities for B.Sc., M.Sc., and PGDYT yoga programs.",
    facilities: ["Spacious Wooden Yoga Practice Halls", "Meditation & Nada Yoga Sanctuary", "Shatkarma Kriya Therapy Area", "Department HOD & Faculty Consultation"],
    directions: "Located towards the peaceful eastern side of campus, adjacent to the herbal gardens and yagyashala.",
    contact: "yoga@dsvv.ac.in",
    isVerified: true
  },
  {
    id: "loc_sports_complex",
    nameEn: "Sports Department, Athletic Track & Central Gymnasium",
    nameHi: "शारीरिक शिक्षा एवं खेलकूद विभाग (सेंट्रल स्पोर्ट्स ग्राउंड व जिम)",
    category: "facilities",
    categoryLabel: "Sports & Athletics",
    building: "DSVV Sports Complex & Pavilion",
    floor: "Ground & Fitness Pavilion",
    timings: "Morning: 05:30 AM – 08:00 AM | Evening: 04:30 PM – 07:30 PM",
    description: "Multi-discipline university sports hub featuring an international standard athletic running track, cricket pitch, volleyball court, badminton hall, table tennis arena, and modern fitness gymnasium managed by certified physical education faculty.",
    facilities: ["400m Athletic Running Track", "Cricket Pavilion", "Volleyball & Basketball Courts", "Gymnasium & Multi-Gym", "Sports Equipment Store"],
    directions: "Located at the western periphery of the campus, adjacent to the residential hostel avenues.",
    contact: "sports@dsvv.ac.in",
    isVerified: true
  },
  {
    id: "loc_mess_hall",
    nameEn: "Maa Anandamayi Bhojanalaya (Student Dining Hall)",
    nameHi: "माँ आनंदमयी भोजनालय (छात्र-छात्रा भोजन कक्ष)",
    category: "facilities",
    categoryLabel: "Mess & Dining",
    building: "Maa Anandamayi Dining Complex",
    floor: "Ground & 1st Floor",
    timings: "Breakfast: 7:30–8:45 AM | Lunch: 12:00–1:45 PM | Dinner: 7:00–8:30 PM",
    description: "Spacious, highly hygienic dining hall named Maa Anandamayi Bhojanalaya serving 100% sattvik meals cooked with steam boilers and solar energy. Separate dining wings for male and female students.",
    facilities: ["Filtered RO Drinking Water", "Handwash Sanitizing Stations", "Feedback Register", "Sattvik Pure Veg"],
    directions: "Central location midway between academic buildings and hostel enclosures.",
    contact: "mess@dsvv.ac.in",
    isVerified: true
  }
];

export const SEED_EVENTS = [
  {
    id: "ev_presidential_convocation",
    title: "University Convocation & Presidential Address (Hon'ble President of India)",
    titleHi: "वार्षिक दीक्षांत समारोह: माननीया राष्ट्रपति श्रीमती द्रौपदी मुर्मु एवं राज्यपाल का संबोधन",
    department: "University Central Administration",
    departmentLabel: "Central University & VIP Dignitaries",
    category: "dignitaries",
    categoryLabel: "Dignitary Event & Convocation",
    organizer: "Central Administration & Chancellor Secretariat",
    eventDate: getDateStr(12),
    registrationDeadline: getDateStr(6),
    venue: "Mrityunjay Sabhagar (मृत्युंजय सभागार)",
    description: "Ceremonial University Convocation held in the prestigious Mrityunjay Sabhagar, addressed by the Hon'ble President of India Smt. Droupadi Murmu, the Governor of Uttarakhand, and State Chief Minister. Conferment of degrees and gold medals.",
    volunteerOpportunities: [
      "VIP Protocol & Guest Reception (10 Volunteers)",
      "Stage & Medal Coordination (8 Volunteers)",
      "Auditorium Seating & Discipline (12 Volunteers)",
      "Live Media Streaming & Press Liaison (10 Volunteers)"
    ],
    volunteerInfo: "Open for verified student volunteers. To apply, submit your registration through: 1) Your Department HOD, 2) Registrar Office, or 3) Culture Department (संस्कृति विभाग). Mandatory rehearsal at Mrityunjay Sabhagar.",
    prizes: "Official University Certificate of Volunteer Honor & Security Accreditation Pass",
    registrationLink: "#volunteer-mrityunjay",
    registrationBuilding: "Culture Department (संस्कृति विभाग) & Registrar Office",
    registrationGuide: "Submit your volunteer form endorsed by your Department HOD at either the Registrar Office or Culture Department counter. Full dress rehearsal at Mrityunjay Sabhagar.",
    status: "upcoming",
    verified: true,
    lastUpdated: new Date().toLocaleDateString("en-IN")
  },
  {
    id: "ev_sports_khel_mahotsav",
    title: "Annual Inter-Departmental Sports Meet & Athletics Championship",
    titleHi: "वार्षिक अंतर-विभागीय खेल महोत्सव एवं एथलेटिक्स प्रतियोगिता (खेल विभाग)",
    department: "Sports Department",
    departmentLabel: "Sports Department (शारीरिक शिक्षा)",
    category: "sports",
    categoryLabel: "Sports & Athletics",
    organizer: "Department of Physical Education & Sports (खेल विभाग)",
    eventDate: getDateStr(8),
    registrationDeadline: getDateStr(4),
    venue: "DSVV Central Sports Complex & Athletic Ground",
    description: "Multi-discipline annual university sports tournament featuring Cricket, Volleyball, Badminton, Table Tennis, 100m/400m Track Races, Tug of War, and Yogasan. Department teams and individual track athletes compete for the Vice-Chancellor Sports Trophy.",
    volunteerOpportunities: [
      "Field Umpires & Scorekeeping (8 Volunteers)",
      "First-Aid & Refreshment Desk (6 Volunteers)",
      "Athletic Track Marshals (6 Volunteers)"
    ],
    volunteerInfo: "Students can register as athletes with their Department Sports Captain or volunteer as ground marshals with the Sports Officer.",
    prizes: "Medals, Rolling University Trophy & Merit Sports Certificates",
    registrationLink: "#sports-khel-mahotsav",
    registrationBuilding: "DSVV Sports Complex & Central Pavilion",
    registrationGuide: "Report to the Sports Department Office at the Central Pavilion or register directly with your class/department Sports Captain.",
    status: "upcoming",
    verified: true,
    lastUpdated: new Date().toLocaleDateString("en-IN")
  },
  {
    id: "ev_animation_vfx",
    title: "Animation & VFX 3D Showreel and Character Design Fest 2026",
    titleHi: "एनीमेशन व वीएफएक्स 3D शोरील एवं कैरेक्टर डिजाइन फेस्ट 2026",
    department: "Animation & VFX Department",
    departmentLabel: "Animation & VFX Department",
    category: "animation",
    categoryLabel: "Animation & VFX",
    organizer: "Department of Animation and Visual Effects",
    eventDate: getDateStr(6),
    registrationDeadline: getDateStr(3),
    venue: "Shriram Bhawan (श्रीराम भवन) — Department of Animation & VFX",
    description: "Creative student showcase judged by industry visual artists. Submissions open for 3D Character Modeling, Motion Graphics, VFX Compositing, and 2D Storyboarding based on Indian mythology and cultural themes.",
    prizes: "High-end Graphic Tablets, Industry Studio Internships & Trophies",
    registrationLink: "#demo-register-vfx",
    registrationBuilding: "Shriram Bhawan (श्रीराम भवन) — Ground Floor Animation Lab",
    registrationGuide: "Visit the Department of Animation & Visual Effects located in Shriram Bhawan. Submit your showreel file or character design portfolio directly to the department desk / faculty coordinator.",
    status: "upcoming",
    verified: true,
    lastUpdated: new Date().toLocaleDateString("en-IN")
  },
  {
    id: "ev_it_hackathon",
    title: "DSVV IT & AI Tech Hackathon 2026: Smart Campus Solutions",
    titleHi: "सार्थी स्मार्ट कैंपस एवं एआई टेक हैकथॉन 2026 (आईटी विभाग)",
    department: "IT & Computer Science Department",
    departmentLabel: "IT & Computer Science Department",
    category: "it-tech",
    categoryLabel: "IT & Hackathons",
    organizer: "Department of Computer Science & IT",
    eventDate: getDateStr(5),
    registrationDeadline: getDateStr(2),
    venue: "Chaitanya Bhawan (चैतन्य भवन) — Computer Science Lab 2 & 3",
    description: "A 24-hour coding challenge for students to build software utilities, student apps, and AI/web applications solving daily campus and ecological challenges.",
    prizes: "Cash Grants, Innovation Trophies & Incubation Support",
    registrationLink: "#demo-register-hackathon",
    registrationBuilding: "Chaitanya Bhawan (चैतन्य भवन) — Computer Science & IT Dept",
    registrationGuide: "Visit the Department of Computer Science & IT located in Chaitanya Bhawan. Register your team (2-4 students) with the faculty coordinator or HOD office.",
    status: "upcoming",
    verified: true,
    lastUpdated: new Date().toLocaleDateString("en-IN")
  },
  {
    id: "ev_english_debate",
    title: "Inter-College English Parliamentary Debate & Elocution Conclave",
    titleHi: "अंतर-महाविद्यालय अंग्रेजी संसदीय वाद-विवाद प्रतियोगिता (अंग्रेजी विभाग)",
    department: "English & Foreign Languages Department",
    departmentLabel: "English Department",
    category: "english-literature",
    categoryLabel: "English & Debates",
    organizer: "Department of English & Foreign Languages",
    eventDate: getDateStr(10),
    registrationDeadline: getDateStr(7),
    venue: "Mrityunjay Sabhagar Conference Room 2",
    description: "Debate tournament deliberating on 'Technology, Artificial Intelligence, and Human Ethics in the 21st Century'. Open to undergraduate and postgraduate speakers.",
    prizes: "Best Speaker Trophy, Oxford Literary Sets & Cash Prizes",
    registrationLink: "#demo-register-english",
    registrationBuilding: "Chanakya Bhawan, Ground Floor (English Dept)",
    registrationGuide: "Submit speaker names at the Department of English office in Chanakya Bhawan or email debate.english@dsvv.ac.in.",
    status: "upcoming",
    verified: true,
    lastUpdated: new Date().toLocaleDateString("en-IN")
  },
  {
    id: "ev_yoga_camp",
    title: "7-Day Pranic Healing & Yoga Sadhana Workshop",
    titleHi: "7-दिवसीय प्राणिक हीलिंग एवं योग साधना कार्यशाला",
    category: "workshops",
    categoryLabel: "Workshops & Yoga",
    organizer: "School of Yogic Science & Human Excellence",
    eventDate: getDateStr(14),
    registrationDeadline: getDateStr(11),
    venue: "Sardar Patel & Yoga Bhawan (सरदार पटेल एवं योग भवन)",
    description: "Specialized practical sessions in Pranayama, Shatkarma detox techniques, and Nada Yoga for mental focus and academic stress reduction.",
    prizes: "Certified Yoga Hours Certificate",
    registrationLink: "#demo-register-yoga",
    registrationBuilding: "Sardar Patel & Yoga Bhawan — Yoga Department Desk",
    registrationGuide: "Register at the Yoga Department reception desk in Sardar Patel Bhawan with your student ID card.",
    status: "upcoming",
    verified: true,
    lastUpdated: new Date().toLocaleDateString("en-IN")
  },
  {
    id: "ev_photography",
    title: "Campus Biodiversity & Heritage Photography Walk",
    titleHi: "परिसर जैव-विविधता व धरोहर फोटोग्राफी वॉक",
    category: "photography",
    categoryLabel: "Photography",
    organizer: "Department of Journalism & Mass Communication",
    eventDate: getDateStr(-2),
    registrationDeadline: getDateStr(-5),
    venue: "Chaitanya Bhawan (चैतन्य भवन) — Journalism & Media Studio",
    description: "Early morning photowalk capturing migratory Himalayan birds, medicinal plants, and architectural highlights of DSVV.",
    prizes: "Winning photos featured in the Annual University Calendar",
    registrationLink: "#demo-photography",
    registrationBuilding: "Chaitanya Bhawan (चैतन्य भवन) — Journalism Department",
    registrationGuide: "Submit your high-resolution photo entries on a pendrive or email at the Department of Journalism & Mass Communication in Chaitanya Bhawan.",
    status: "completed",
    verified: true,
    lastUpdated: new Date().toLocaleDateString("en-IN")
  }
];

export const SEED_NOTICES = [
  {
    id: "not_01",
    title: "Upcoming Odd Semester Examination Registration Schedule",
    date: getDateStr(-1),
    category: "Academic",
    priority: "high",
    body: "All undergraduate and postgraduate students must verify their exam forms with attendance clearance before the 20th of this month.",
    source: "Controller of Examinations"
  },
  {
    id: "not_02",
    title: "Seasonal Change in Dining Timings for Winter Morning Breakfast",
    date: getDateStr(0),
    category: "Mess",
    priority: "medium",
    body: "Breakfast will be served from 07:45 AM instead of 07:30 AM starting from next Monday due to morning fog and meditation prayer schedule.",
    source: "Chief Mess Warden"
  }
];

export const SEED_FACULTY = [
  // Computer Science & IT
  {
    id: "fac_cs_01",
    nameEn: "Dr. Abhay Saxena",
    nameHi: "डॉ. अभय सक्सेना",
    designationEn: "Dean, Faculty of Technology & Head of Department",
    designationHi: "संकायाध्यक्ष (प्रौद्योगिकी संकाय) एवं विभागाध्यक्ष",
    departmentId: "cs_it",
    departmentEn: "Department of Computer Sciences & IT",
    departmentHi: "कंप्यूटर विज्ञान एवं आईटी विभाग",
    qualification: "Ph.D. (Computer Science), M.Tech",
    specialization: "Artificial Intelligence, Big Data, Vedic Computing & Systems",
    officeLocation: "Chaitanya Bhawan, 2nd Floor, Room 201",
    email: "abhay.saxena@dsvv.ac.in"
  },
  {
    id: "fac_cs_02",
    nameEn: "Dr. Rajeshwari Sharma",
    nameHi: "डॉ. राजेश्वरी शर्मा",
    designationEn: "Associate Professor",
    designationHi: "सह-आचार्य (एसोसिएट प्रोफेसर)",
    departmentId: "cs_it",
    departmentEn: "Department of Computer Sciences & IT",
    departmentHi: "कंप्यूटर विज्ञान एवं आईटी विभाग",
    qualification: "Ph.D. (CS), MCA",
    specialization: "Web Technologies, Database Management & Cloud Architecture",
    officeLocation: "Chaitanya Bhawan, 2nd Floor, Room 205",
    email: "rajeshwari.sharma@dsvv.ac.in"
  },

  // Animation & Visual Effects
  {
    id: "fac_vfx_01",
    nameEn: "Prof. Gaurav Sharma",
    nameHi: "प्रो. गौरव शर्मा",
    designationEn: "Lead Faculty & VFX Lab Coordinator",
    designationHi: "वरिष्ठ प्राध्यापक एवं वीएफएक्स लैब समन्वयक",
    departmentId: "animation_vfx",
    departmentEn: "Department of Animation & Visual Effects",
    departmentHi: "एनीमेशन एवं विजुअल इफेक्ट्स (VFX) विभाग",
    qualification: "Master of Fine Arts (Animation), Industry VFX Specialist",
    specialization: "3D Character Modeling, Maya, Blender & Cinematic Lighting",
    officeLocation: "Shriram Bhawan (श्रीराम भवन), Animation Studio Wing",
    email: "gaurav.sharma@dsvv.ac.in"
  },
  {
    id: "fac_vfx_02",
    nameEn: "Dr. Priya Rawat",
    nameHi: "डॉ. प्रिया रावत",
    designationEn: "Assistant Professor",
    designationHi: "सहायक आचार्य (असिस्टेंट प्रोफेसर)",
    departmentId: "animation_vfx",
    departmentEn: "Department of Animation & Visual Effects",
    departmentHi: "एनीमेशन एवं विजुअल इफेक्ट्स (VFX) विभाग",
    qualification: "Ph.D. in Digital Media, M.Sc. Animation",
    specialization: "Digital Illustration, Motion Graphics & Storyboarding",
    officeLocation: "Shriram Bhawan (श्रीराम भवन), 3D Modeling Lab",
    email: "priya.rawat@dsvv.ac.in"
  },

  // Yogic Science & Human Consciousness
  {
    id: "fac_yoga_01",
    nameEn: "Dr. S.L. Barnawal",
    nameHi: "डॉ. एस.एल. बरनवाल",
    designationEn: "Senior Professor & Former Dean",
    designationHi: "वरिष्ठ आचार्य एवं पूर्व संकायाध्यक्ष",
    departmentId: "yoga",
    departmentEn: "Department of Yogic Science & Human Consciousness",
    departmentHi: "योग विज्ञान एवं मानव चेतना विभाग",
    qualification: "Ph.D. in Yogic Science, M.Sc. Yoga",
    specialization: "Therapeutic Yoga, Shatkarma, Asana & Pranayama Physiology",
    officeLocation: "Sardar Patel & Yoga Bhawan, 1st Floor",
    email: "sl.barnawal@dsvv.ac.in"
  },
  {
    id: "fac_yoga_02",
    nameEn: "Dr. Kamakhya Kumar",
    nameHi: "डॉ. कामाख्या कुमार",
    designationEn: "Associate Professor & Research Guide",
    designationHi: "सह-आचार्य एवं शोध निदेशक",
    departmentId: "yoga",
    departmentEn: "Department of Yogic Science & Human Consciousness",
    departmentHi: "योग विज्ञान एवं मानव चेतना विभाग",
    qualification: "Ph.D. (Yogic Science), PGDYT",
    specialization: "Yoga Nidra, Psychophysiology of Meditation & Stress Reduction",
    officeLocation: "Sardar Patel & Yoga Bhawan, Research Wing",
    email: "kamakhya.kumar@dsvv.ac.in"
  },

  // Ayurveda & Holistic Health
  {
    id: "fac_ayur_01",
    nameEn: "Dr. Vandana Shrivastava",
    nameHi: "डॉ. वंदना श्रीवास्तव",
    designationEn: "Associate Professor & Head of Department",
    designationHi: "सह-आचार्य एवं विभागाध्यक्ष",
    departmentId: "ayurveda",
    departmentEn: "Department of Ayurved & Holistic Health",
    departmentHi: "आयुर्वेद एवं समग्र स्वास्थ्य विभाग",
    qualification: "BAMS, MD (Ayurveda), Ph.D.",
    specialization: "Ayurvedic Therapeutics, Yagyopathy & Holistic Nutrition",
    officeLocation: "Charak Ayur Bhawan, Room 102",
    email: "vandana.shrivastava@dsvv.ac.in"
  },
  {
    id: "fac_ayur_02",
    nameEn: "Dr. Alka Mishra",
    nameHi: "डॉ. अलका मिश्रा",
    designationEn: "Assistant Professor & Coordinator, Panchakarma",
    designationHi: "सहायक आचार्य एवं पंचकर्म समन्वयक",
    departmentId: "ayurveda",
    departmentEn: "Department of Ayurved & Holistic Health",
    departmentHi: "आयुर्वेद एवं समग्र स्वास्थ्य विभाग",
    qualification: "BAMS, MD (Panchakarma)",
    specialization: "Panchakarma Detoxification, Pulse Diagnosis & Herbal Pharmacology",
    officeLocation: "Brahmavarchas Holistic Wellness Wing",
    email: "alka.mishra@dsvv.ac.in"
  },

  // Psychology
  {
    id: "fac_psy_01",
    nameEn: "Prof. Hemadri Sao",
    nameHi: "प्रो. हेमाद्री साव",
    designationEn: "Dean, Faculty of Humanities & Senior Professor",
    designationHi: "संकायाध्यक्ष (मानविकी संकाय) एवं वरिष्ठ आचार्य",
    departmentId: "psychology",
    departmentEn: "Department of Psychology",
    departmentHi: "मनोविज्ञान विभाग",
    qualification: "Ph.D., M.A. (Psychology)",
    specialization: "Clinical Psychology, Counseling, Spiritual Psychology",
    officeLocation: "Humanities Block, 1st Floor, Room 112",
    email: "hemadri.sao@dsvv.ac.in"
  },
  {
    id: "fac_psy_02",
    nameEn: "Dr. Santosh Vishwakarma",
    nameHi: "डॉ. संतोष विश्वकर्मा",
    designationEn: "Officiating Head of Department & Assistant Professor",
    designationHi: "कार्यवाहक विभागाध्यक्ष एवं सहायक आचार्य",
    departmentId: "psychology",
    departmentEn: "Department of Psychology",
    departmentHi: "मनोविज्ञान विभाग",
    qualification: "Ph.D. (Psychology)",
    specialization: "Cognitive Psychology, Youth Mental Health & Positive Psychology",
    officeLocation: "Humanities Block, Room 115",
    email: "santosh.v@dsvv.ac.in"
  },

  // English & Languages
  {
    id: "fac_eng_01",
    nameEn: "Dr. Sandeep Kumar",
    nameHi: "डॉ. संदीप कुमार",
    designationEn: "Head of Department & Associate Professor",
    designationHi: "विभागाध्यक्ष एवं सह-आचार्य",
    departmentId: "english",
    departmentEn: "Department of English & Linguistics",
    departmentHi: "अंग्रेजी एवं भाषा विज्ञान विभाग",
    qualification: "Ph.D. (English Literature), UGC-NET",
    specialization: "Indian Writing in English, Literary Criticism & Soft Skills",
    officeLocation: "Chanakya Bhawan, Ground Floor, Room 103",
    email: "sandeep.kumar@dsvv.ac.in"
  },

  // Journalism & Mass Communication
  {
    id: "fac_jour_01",
    nameEn: "Dr. Sukhnandan Singh",
    nameHi: "डॉ. सुखनंदन सिंह",
    designationEn: "Associate Professor & Head of Department",
    designationHi: "सह-आचार्य एवं विभागाध्यक्ष",
    departmentId: "journalism",
    departmentEn: "Department of Journalism & Mass Communication",
    departmentHi: "पत्रकारिता एवं जनसंचार विभाग",
    qualification: "Ph.D., MJMC",
    specialization: "Broadcast Journalism, Developmental Media & Media Ethics",
    officeLocation: "Narad Media Center, Ground Floor",
    email: "sukhnandan.singh@dsvv.ac.in"
  },

  // Tourism Management
  {
    id: "fac_tour_01",
    nameEn: "Dr. Umakant Indolia",
    nameHi: "डॉ. उमाकांत इंदौलिया",
    designationEn: "Assistant Professor & Program Coordinator",
    designationHi: "सहायक आचार्य एवं पाठ्यक्रम समन्वयक",
    departmentId: "tourism",
    departmentEn: "Department of Tourism Management",
    departmentHi: "पर्यटन प्रबंधन विभाग",
    qualification: "Ph.D. (Tourism), MBA (Tourism)",
    specialization: "Spiritual Tourism, Himalayan Heritage Trails & Hospitality Ops",
    officeLocation: "Chanakya Bhawan, Room 108",
    email: "umakant.indolia@dsvv.ac.in"
  }
];

export const SEED_COURSES = [
  // Animation & VFX
  {
    id: "crs_bsc_anim",
    titleEn: "B.Sc. in Animation & Visual Effects",
    titleHi: "बी.एससी. एनीमेशन एवं विजुअल इफेक्ट्स (3-वर्षीय)",
    degree: "Undergraduate (UG)",
    duration: "3 Years (6 Semesters)",
    departmentId: "animation_vfx",
    departmentEn: "Department of Animation & Visual Effects",
    building: "Shriram Bhawan (श्रीराम भवन)",
    eligibility: "10+2 in any stream with minimum 50% marks + DSVV Entrance Exam & Interview",
    highlights: "3D Character Modeling, Rigging, Texturing, VFX Compositing, Maya, Blender, Unreal Engine & Showreel Development."
  },
  {
    id: "crs_msc_anim",
    titleEn: "M.Sc. in Animation & Visual Effects",
    titleHi: "एम.एससी. एनीमेशन एवं विजुअल इफेक्ट्स (2-वर्षीय)",
    degree: "Postgraduate (PG)",
    duration: "2 Years (4 Semesters)",
    departmentId: "animation_vfx",
    departmentEn: "Department of Animation & Visual Effects",
    building: "Shriram Bhawan (श्रीराम भवन)",
    eligibility: "Bachelor degree in Animation, Multimedia, Fine Arts, or relevant graduate discipline with portfolio",
    highlights: "Advanced CGI, Motion Graphics, Film Aesthetics, Cinematography, Sound Engineering & Thesis Production."
  },

  // Computer Science & IT
  {
    id: "crs_bca",
    titleEn: "BCA (Bachelor of Computer Applications)",
    titleHi: "बीसीए (कंप्यूटर अनुप्रयोग स्नातक)",
    degree: "Undergraduate (UG)",
    duration: "3 Years (6 Semesters)",
    departmentId: "cs_it",
    departmentEn: "Department of Computer Sciences & IT",
    building: "Chaitanya Bhawan (चैतन्य भवन)",
    eligibility: "10+2 with Mathematics/Computer Science or equivalent with 50% aggregate",
    highlights: "Data Structures, Full-Stack Web Development, Java/Python, Database Systems, Cloud Computing & Industrial Training."
  },
  {
    id: "crs_mca",
    titleEn: "MCA (Master of Computer Applications)",
    titleHi: "एमसीए (कंप्यूटर अनुप्रयोग स्नातकोत्तर)",
    degree: "Postgraduate (PG)",
    duration: "2 Years (4 Semesters)",
    departmentId: "cs_it",
    departmentEn: "Department of Computer Sciences & IT",
    building: "Chaitanya Bhawan (चैतन्य भवन)",
    eligibility: "BCA / B.Sc. (CS/IT) / B.Tech or Graduate with Mathematics at 10+2 / Graduation level",
    highlights: "Artificial Intelligence, Machine Learning, Vedic Computing Algorithms, Cyber Security & Live Capstone Project."
  },
  {
    id: "crs_bsc_cs",
    titleEn: "B.Sc. (Hons) in Computer Science & Data Science",
    titleHi: "बी.एससी. (ऑनर्स) कंप्यूटर विज्ञान व डेटा साइंस",
    degree: "Undergraduate (UG)",
    duration: "3 Years (6 Semesters)",
    departmentId: "cs_it",
    departmentEn: "Department of Computer Sciences & IT",
    building: "Chaitanya Bhawan (चैतन्य भवन)",
    eligibility: "10+2 with Science stream (Mathematics required) with min 50% marks",
    highlights: "Scientific Computing, Statistical Modeling, Python for AI, Algorithms & Research Foundation."
  },

  // Yogic Science
  {
    id: "crs_bsc_yoga",
    titleEn: "B.Sc. in Yogic Science & Human Consciousness",
    titleHi: "बी.एससी. योग विज्ञान एवं मानव चेतना",
    degree: "Undergraduate (UG)",
    duration: "3 Years (6 Semesters)",
    departmentId: "yoga",
    departmentEn: "Department of Yogic Science & Human Consciousness",
    building: "Sardar Patel & Yoga Bhawan (सरदार पटेल एवं योग भवन)",
    eligibility: "10+2 in any stream (Science preferred) with minimum 50% marks",
    highlights: "Yogic Anatomy & Physiology, Classical Asana & Pranayama, Shatkarma Kriyas, Yoga Therapy & Internship."
  },
  {
    id: "crs_msc_yoga",
    titleEn: "M.Sc. / M.A. in Yogic Science & Human Consciousness",
    titleHi: "एम.एससी. / एम.ए. योग विज्ञान एवं मानव चेतना",
    degree: "Postgraduate (PG)",
    duration: "2 Years (4 Semesters)",
    departmentId: "yoga",
    departmentEn: "Department of Yogic Science & Human Consciousness",
    building: "Sardar Patel & Yoga Bhawan (सरदार पटेल एवं योग भवन)",
    eligibility: "Graduation in any discipline with min 50% marks (Yoga background preferred)",
    highlights: "Patanjali Yoga Sutras, Hatha Yoga Pradipika, Therapeutic Yoga Clinical Protocols, Psychophysiology & Research Thesis."
  },
  {
    id: "crs_pgyt",
    titleEn: "PGDYT (Post Graduate Diploma in Yoga Therapy)",
    titleHi: "पीजीडीवायटी (योग थेरेपी में स्नातकोत्तर डिप्लोमा)",
    degree: "Diploma",
    duration: "1 Year (2 Semesters)",
    departmentId: "yoga",
    departmentEn: "Department of Yogic Science & Human Consciousness",
    building: "Sardar Patel & Yoga Bhawan (सरदार पटेल एवं योग भवन)",
    eligibility: "Bachelor's degree in any stream",
    highlights: "Clinical Yoga Applications, Lifestyle Disorder Management, Naturopathy integration & Hospital Training."
  },

  // Journalism & Mass Communication
  {
    id: "crs_bjmc",
    titleEn: "B.A. in Journalism & Mass Communication (BJMC)",
    titleHi: "बी.ए. पत्रकारिता एवं जनसंचार (BJMC)",
    degree: "Undergraduate (UG)",
    duration: "3 Years (6 Semesters)",
    departmentId: "journalism",
    departmentEn: "Department of Journalism & Mass Communication",
    building: "Chaitanya Bhawan (चैतन्य भवन)",
    eligibility: "10+2 in any stream with minimum 50% marks + entrance evaluation",
    highlights: "Print Journalism, Electronic Media, TV News Production, Radio Jockeying, Media Ethics & Camera Operations."
  },
  {
    id: "crs_mjmc",
    titleEn: "M.A. in Journalism & Mass Communication (MJMC)",
    titleHi: "एम.ए. पत्रकारिता एवं जनसंचार (MJMC)",
    degree: "Postgraduate (PG)",
    duration: "2 Years (4 Semesters)",
    departmentId: "journalism",
    departmentEn: "Department of Journalism & Mass Communication",
    building: "Chaitanya Bhawan (चैतन्य भवन)",
    eligibility: "Bachelor degree in any stream with min 50% aggregate",
    highlights: "Investigative Reporting, Documentary Filmmaking, Digital Media Strategy, Developmental Journalism & Media Laws."
  },

  // Tourism Management
  {
    id: "crs_bba_tourism",
    titleEn: "BBA in Tourism & Hospitality Management",
    titleHi: "बीबीए पर्यटन एवं आतिथ्य प्रबंधन",
    degree: "Undergraduate (UG)",
    duration: "3 Years (6 Semesters)",
    departmentId: "tourism",
    departmentEn: "Department of Tourism Management",
    building: "Chaitanya / Chanakya Bhawan",
    eligibility: "10+2 in any discipline with minimum 50% marks",
    highlights: "Spiritual Tourism, Himalayan Trekking & Eco-Guiding, Hotel Operations, Ticketing (GDS) & Travel Agency Ops."
  },

  // Psychology
  {
    id: "crs_ba_psy",
    titleEn: "B.A. (Hons) in Psychology",
    titleHi: "बी.ए. (ऑनर्स) मनोविज्ञान",
    degree: "Undergraduate (UG)",
    duration: "3 Years (6 Semesters)",
    departmentId: "psychology",
    departmentEn: "Department of Psychology",
    building: "Humanities Block",
    eligibility: "10+2 in any stream with minimum 50% marks",
    highlights: "General Psychology, Developmental Stages, Psychological Testing, Statistics & Applied Counseling."
  },
  {
    id: "crs_ma_psy",
    titleEn: "M.A. / M.Sc. in Clinical & Spiritual Psychology",
    titleHi: "एम.ए. / एम.एससी. नैदानिक एवं आध्यात्मिक मनोविज्ञान",
    degree: "Postgraduate (PG)",
    duration: "2 Years (4 Semesters)",
    departmentId: "psychology",
    departmentEn: "Department of Psychology",
    building: "Humanities Block",
    eligibility: "Graduation with Psychology as a major subject with min 50% marks",
    highlights: "Psychopathology, Clinical Assessment, Neuropsychology, Psychotherapy, Meditation Psychology & Hospital Internship."
  }
];
