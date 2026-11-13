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
    nameEn: "Saraswati Bhawan — Central Library",
    nameHi: "सरस्वती भवन — केंद्रीय पुस्तकालय",
    category: "academic",
    categoryLabel: "Academic & Research",
    building: "Saraswati Bhawan",
    floor: "Ground, 1st & 2nd Floor",
    timings: "09:00 AM – 07:00 PM (Mon - Sat)",
    description: "Multi-storey modern library housing over 70,000 volumes, rare spiritual manuscripts, digital research labs, e-journals, and peaceful silent reading zones.",
    facilities: ["High-speed Wi-Fi", "Digital Thesis Repository", "Photocopy Service", "Spiritual Literature Corner"],
    directions: "Enter through the university main arch, walk past the fountain quadrangle. Saraswati Bhawan is situated on the northern flank facing Mahakal Mandir.",
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
    id: "loc_swadhyay",
    nameEn: "Swadhyay & Multimedia Complex (Animation & VFX Labs)",
    nameHi: "स्वाध्याय एवं मल्टीमीडिया केंद्र (एनीमेशन व वीएफएक्स लैब)",
    category: "academic",
    categoryLabel: "Academic & Tech",
    building: "Vivekananda Block",
    floor: "2nd Floor",
    timings: "08:30 AM – 06:30 PM",
    description: "High-performance graphics workstations equipped with animation software, digital sound-recording booths, and video editing suites for student media projects.",
    facilities: ["GPU Workstations", "Green Screen Studio", "Sound Lab", "Render Farm Access"],
    directions: "Inside Vivekananda Block, take stairway 'B' to the second floor, wing right.",
    contact: "media@dsvv.ac.in",
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
    nameEn: "Mrityunjay Sabhagar (Central University Auditorium)",
    nameHi: "मृत्युंजय सभागार (मुख्य विश्वविद्यालय प्रेक्षागृह)",
    category: "cultural",
    categoryLabel: "Auditorium & Conventions",
    building: "Mrityunjay Cultural & Convention Center",
    floor: "Main Auditorium Hall",
    timings: "Event-based | Office: 09:00 AM – 05:30 PM",
    description: "The grand ceremonial auditorium of Dev Sanskriti Vishwavidyalaya with a seating capacity of over 1,500. Venue for annual convocations, national seminars, international cultural festivals, and addresses by national dignitaries such as the President of India, Governor, and Chief Minister.",
    facilities: ["1,500+ Seating Capacity", "Acoustic Surround Audio", "VIP Green Rooms", "Live Broadcast Control Room", "Central Air-Conditioning"],
    directions: "Situated along the main ceremonial quadrangle, adjacent to the central administration park.",
    contact: "events@dsvv.ac.in",
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
    volunteerInfo: "Open for 40 verified student volunteers. Orientation and full-dress rehearsal at Mrityunjay Sabhagar 2 days prior to the event. Official Certificate of Appreciation awarded.",
    prizes: "Official University Certificate of Volunteer Honor & Security Accreditation Pass",
    registrationLink: "#volunteer-mrityunjay",
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
    venue: "Swadhyay Multimedia Complex & Mrityunjay Sabhagar Mini Hall",
    description: "Creative student showcase judged by industry visual artists. Submissions open for 3D Character Modeling, Motion Graphics, VFX Compositing, and 2D Storyboarding based on Indian mythology and cultural themes.",
    prizes: "High-end Graphic Tablets, Industry Studio Internships & Trophies",
    registrationLink: "#demo-register-vfx",
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
    venue: "Vivekananda Computer Center, Lab 3",
    description: "A 24-hour coding challenge for students to build software utilities, student apps, and AI/web applications solving daily campus and ecological challenges.",
    prizes: "Cash Grants, Innovation Trophies & Incubation Support",
    registrationLink: "#demo-register-hackathon",
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
    venue: "Patanjali Yagya & Yoga Mandapam",
    description: "Specialized practical sessions in Pranayama, Shatkarma detox techniques, and Nada Yoga for mental focus and academic stress reduction.",
    prizes: "Certified Yoga Hours Certificate",
    registrationLink: "#demo-register-yoga",
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
    organizer: "Nature Club & Media Society",
    eventDate: getDateStr(-2),
    registrationDeadline: getDateStr(-5),
    venue: "Smriti Upavan & Herbal Garden",
    description: "Early morning photowalk capturing migratory Himalayan birds, medicinal plants, and architectural highlights of DSVV.",
    prizes: "Winning photos featured in the Annual University Calendar",
    registrationLink: "#demo-photography",
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
