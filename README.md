# DSVV Saarthi (देव संस्कृति विश्वविद्यालय सार्थी)

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Online-success?style=for-the-badge&logo=githubpages&logoColor=white)](https://skjhemant-cloud.github.io/dsvv-saarthi/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-blue?style=for-the-badge&logo=github)](https://github.com/skjhemant-cloud/dsvv-saarthi)

> **A zero-rupee student information and assistance platform for Dev Sanskriti Vishwavidyalaya, Haridwar.**
> Built with React 18, Vite, and Tailwind CSS. Zero paid APIs, zero subscriptions, zero hosting fees.
>
> 🌐 **Live Website URL:** [https://skjhemant-cloud.github.io/dsvv-saarthi/](https://skjhemant-cloud.github.io/dsvv-saarthi/)

---

## 1. Product Vision & Mission
**DSVV Saarthi** is a centralized, bilingual digital assistant and information retrieval index built to eliminate administrative ambiguity, reduce information friction, and empower students at Dev Sanskriti Vishwavidyalaya (DSVV), Haridwar. 

Instead of an expensive or hallucination-prone generative AI chatbot, Saarthi is an **authentic, structured knowledge platform** featuring a fast client-side phonetic and bilingual search engine, role-based content governance, and zero financial overhead.

---

## 2. Problem Statement
Students at residential universities frequently encounter scattered or fragmented administrative updates:
- **Dining Uncertainty:** Daily mess schedules and dietary preparations are distributed informally across notice boards or chat groups.
- **Procedural Ambiguity:** Students often do not know the mandatory step-by-step paperwork for medical leave, hostel out-passes, or bonafide certificates.
- **Physical Campus Navigation:** New students, visitors, and researchers struggle to locate specialized academic departments, laboratories (e.g. Swadhyay VFX lab), and clinic facilities.
- **Event Awareness:** Extracurricular activities, hackathons, and workshops frequently go unnoticed before registration deadlines close.

---

## 3. Target Audience
- **Undergraduate & Postgraduate Students:** Enrolled regular students across Animation & VFX, Yogic Science, Computer Science, and Humanities.
- **Hostel Residents:** Needing daily Annapurna dining hours and verified gate pass protocols.
- **Student Mess & Activity Representatives:** Updating daily menus and competitions with restricted editor access.
- **University Administrators:** Ensuring ordinances, contact points, and verified guidance remain accurate.

---

## 4. Key Modules & Features
1. **Intelligent Multilingual Search:**
   - Supports natural queries in **English**, **Hindi (Devanagari)**, and **Hinglish (Roman script)** (e.g., *"Where is the library?"*, *"Aaj mess mein kya bana hai?"*, *"medical leave procedure"*).
   - Instant query scoring with confidence markers and direct categorization without paid third-party AI APIs.
2. **Maa Anandamayi Bhojanalaya Mess Module:**
   - Dedicated daily breakfast, lunch, and dinner cards with meal timings, dishes, and pure sattvik certifications.
   - Interactive date navigator (Yesterday, Today, Tomorrow, custom date).
3. **Student Procedures & Workflow Guides (Verified):**
   - **How to Get into DSVV:** Complete 4-stage admission guide (Online registration on dsvv.ac.in, Bilingual OMR Entrance Exam with Mission section, On-campus interview at Haridwar, Document verification, and links to official YouTube channel `@dsvvtv`).
   - **Lost ID Card Procedure:** Step-by-step protocol visiting Parisampatti Vibhag (Estate Department), paying ₹100 at the Account Office, submitting receipt with Name, Class, and Roll No in the register, and collecting the new card in 2–3 days.
   - **Scholarship Documents & Bonafide:** Application addressed to Registrar Sir submitted at the Registrar Office student dealing desks, collected in 1–3 days.
   - **Prospectus Ordinances:** Mandatory white uniform (Kurta-Pyjama/Dhoti for boys, Salwar-Kurta with Dupatta for girls) and daily spiritual dinacharya.
   - **Medical Leave / Attendance Shortage & Hostel Out-Pass:** Dean of Studies and Warden sign-off protocols.
4. **Campus Facilities & Map Directory:**
   - Facility profiles for Saraswati Bhawan (Central Library), Mahakal Mandir, Swadhyay Multimedia Lab (Animation/VFX), Brahmavarchas Dispensary, and Administrative Offices.
   - Clear walking landmarks and opening hours.
5. **Competitions & Events Discovery:**
   - Real-time deadlines, venues, and status markers for Hackathons, Poster Making, and Workshops.
6. **Role-Based Administrator Dashboard (RBAC):**
   - **Main Administrator:** Complete access to manage procedures, campus directory, user accounts, and review audit logs.
   - **Student Editor:** Restricted access to update daily dining schedules and manage student events without altering administrative policies.
   - **Student Discrepancy Reporting Queue:** Immediate intake for student correction notices without unvetted alterations to the live database.
   - **Audit Trail:** Comprehensive timestamped tracking of who edited what and when.
7. **Founder Tribute:**
   - Reverent tribute card honoring Pandit Shriram Sharma Acharya Ji and Vandaniya Mata Bhagwati Devi Sharma Ji.

---

## 5. Technology Stack & Zero-Cost Breakdown

| Layer | Technology | Budget | Reason & Free Tier Verification |
| :--- | :--- | :--- | :--- |
| **Frontend** | React 18 + Vite | ₹0 | Open-source MIT license, blazing fast local HMR |
| **Styling** | Tailwind CSS + Lucide Icons | ₹0 | Custom DSVV deep blue (`#0c2340`) and warm gold (`#f59e0b`) palette |
| **Search Engine** | Client-side Tokenizer & Synonym Engine | ₹0 | Zero OpenAI or Algolia fees; zero latency |
| **Local Persistence** | LocalStorage + JSON Engine | ₹0 | Instant browser-level persistence, zero database hosting fee |
| **Cloud Ready** | Supabase Free Tier (PostgreSQL) | ₹0 | 500 MB database, 50,000 MAU, zero credit card required |
| **Production Hosting**| Cloudflare Pages | ₹0 | Unlimited bandwidth, 500 builds/month free |

---

## 6. How to Run Locally on Your Computer

### Prerequisites
- Node.js LTS (v20+ installed in user profile).

### Step-by-Step Launch
1. Open PowerShell or Command Prompt in the project folder:
   ```powershell
   cd "c:\Users\Hemant\OneDrive\Desktop\dsvv sarthi"
   ```
2. Start the local development server:
   ```powershell
   npm run dev
   ```
3. Open your browser and navigate to:
   ```text
   http://localhost:5173
   ```
4. To stop the development server:
   Press `Ctrl + C` in your terminal and type `Y`.

---

## 7. Administrator Demo Credentials

| Role | Email Address | Password | Permissions |
| :--- | :--- | :--- | :--- |
| **Main Administrator** | `admin@dsvv.ac.in` | `saarthi@2026` | Full platform control, procedures, facilities, audit logs |
| **Student Editor** | `editor.mess@dsvv.ac.in` | `mess@2026` | Daily mess menu schedules & events management |

*(The login screen also features 1-click demo role switches for rapid recruiter walkthroughs.)*

---

## 8. Exporting Backups & Cloud Migration (Supabase)
In the **Admin Dashboard > Database & Backup** tab, click **Export Backup** to download the entire system state as a formatted `dsvv_saarthi_backup.json` file. This JSON file conforms directly to relational tables ready for import into Supabase PostgreSQL.

---

## 9. Product Case Study Outline (For APM Opportunities)
- **Context:** Dev Sanskriti Vishwavidyalaya is a unique residential institution integrating ancient Indian spiritual values with contemporary academia.
- **User Research Question:** *Where do students spend unnecessary time obtaining routine administrative clearance?*
- **Hypothesis:** Providing an offline-capable, verified procedural index will reduce counter queues by 40% and eliminate informal hearsay regarding mess schedules.
- **Key Metrics to Track:**
  - Daily Active Users (DAU) during breakfast and dinner hours.
  - Search success rate for Hinglish queries.
  - Resolution time for student discrepancy reports.
- **Ethical Safeguards:** Advisory-only architecture—no synthetic hallucinated policy generation, clear verification badges on every record.

---

## 10. Known Limitations & Roadmap
- **Interactive Leaflet/SVG Map:** Currently features detailed textual directions; future version can integrate interactive 2D floor plans.
- **Live Supabase Sync:** Ready for cloud synchronization whenever internet-wide deployment is desired.
- **Push Notifications:** PWA service workers can be added for morning mess alerts.
