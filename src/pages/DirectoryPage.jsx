import React, { useState } from 'react';
import { 
  MapPin, 
  Building, 
  Clock, 
  Compass, 
  Search, 
  ShieldCheck, 
  ExternalLink,
  BookOpen,
  Sparkles,
  Phone,
  Mail,
  AlertCircle,
  GraduationCap,
  Users,
  Award
} from 'lucide-react';
import { StorageService } from '../services/storageService';

export default function DirectoryPage({ lang, onOpenReport }) {
  const allLocations = StorageService.getLocations();
  const allFaculty = StorageService.getFaculty();
  const allCourses = StorageService.getCourses();

  const [activeTab, setActiveTab] = useState('locations'); // locations | courses | faculty
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Location filters
  const locationFilters = [
    { id: 'all', labelEn: 'All Facilities', labelHi: 'सभी भवन' },
    { id: 'academic', labelEn: 'Academic Bhawans', labelHi: 'शैक्षणिक भवन' },
    { id: 'spiritual', labelEn: 'Spiritual Landmarks', labelHi: 'आध्यात्मिक स्थल' },
    { id: 'cultural', labelEn: 'Auditorium & Culture', labelHi: 'सभागार व संस्कृति' },
    { id: 'administrative', labelEn: 'Administration', labelHi: 'प्रशासनिक भवन' },
    { id: 'facilities', labelEn: 'Mess & Health', labelHi: 'मेस व चिकित्सालय' }
  ];

  // Department filters for Faculty and Courses
  const deptFilters = [
    { id: 'all', label: 'All Departments' },
    { id: 'animation_vfx', label: 'Animation & VFX (Shriram Bhawan)' },
    { id: 'cs_it', label: 'Computer Science & IT (Chaitanya Bhawan)' },
    { id: 'yoga', label: 'Yogic Science (Patel Bhawan)' },
    { id: 'ayurveda', label: 'Ayurveda & Health' },
    { id: 'journalism', label: 'Journalism & Media (Chaitanya Bhawan)' },
    { id: 'tourism', label: 'Tourism Management' },
    { id: 'psychology', label: 'Psychology' },
    { id: 'english', label: 'English & Languages' }
  ];

  const filteredLocations = allLocations.filter(loc => {
    const matchesCategory = selectedFilter === 'all' || loc.category === selectedFilter;
    const matchesSearch = !searchTerm ||
      loc.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (loc.nameHi && loc.nameHi.toLowerCase().includes(searchTerm.toLowerCase())) ||
      loc.building.toLowerCase().includes(searchTerm.toLowerCase()) ||
      loc.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const filteredCourses = allCourses.filter(c => {
    const matchesDept = selectedFilter === 'all' || c.departmentId === selectedFilter;
    const matchesSearch = !searchTerm ||
      c.titleEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.titleHi.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.departmentEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.building.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.degree.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesDept && matchesSearch;
  });

  const filteredFaculty = allFaculty.filter(f => {
    const matchesDept = selectedFilter === 'all' || f.departmentId === selectedFilter;
    const matchesSearch = !searchTerm ||
      f.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.nameHi.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.departmentEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.officeLocation.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesDept && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-200 text-xs font-semibold mb-2">
            <Compass size={13} className="text-emerald-700" />
            <span>Campus Landmarks, Courses & Faculty Directory</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-serif font-bold text-dsvv-blue-950">
            {lang === 'en' ? 'Campus & Academic Directory' : 'परिसर, पाठ्यक्रम एवं शिक्षक निर्देशिका'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            {lang === 'en'
              ? 'Locate buildings, explore degree programs, and connect with faculty across all departments.'
              : 'श्रीराम भवन, चैतन्य भवन, सरदार पटेल भवन, शैक्षणिक पाठ्यक्रम एवं शिक्षक संपर्क।'}
          </p>
        </div>

        <button
          onClick={() => onOpenReport('Campus Directory', 'Directory Module')}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold border border-slate-200 shadow-2xs self-start md:self-auto"
        >
          <AlertCircle size={14} className="text-amber-500" />
          <span>Report Directory Update</span>
        </button>
      </div>

      {/* Main View Switcher Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-3">
        <button
          onClick={() => { setActiveTab('locations'); setSelectedFilter('all'); }}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
            activeTab === 'locations'
              ? 'bg-dsvv-blue-900 text-white shadow-sm'
              : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
          }`}
        >
          <Building size={16} />
          <span>{lang === 'en' ? 'Campus Bhawans & Map' : 'परिसर भवन एवं स्थल'} ({allLocations.length})</span>
        </button>

        <button
          onClick={() => { setActiveTab('courses'); setSelectedFilter('all'); }}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
            activeTab === 'courses'
              ? 'bg-dsvv-blue-900 text-white shadow-sm'
              : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
          }`}
        >
          <GraduationCap size={16} />
          <span>{lang === 'en' ? 'Departments & Courses' : 'विभाग व पाठ्यक्रम'} ({allCourses.length})</span>
        </button>

        <button
          onClick={() => { setActiveTab('faculty'); setSelectedFilter('all'); }}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
            activeTab === 'faculty'
              ? 'bg-dsvv-blue-900 text-white shadow-sm'
              : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
          }`}
        >
          <Users size={16} />
          <span>{lang === 'en' ? 'Faculty & Teachers' : 'प्राध्यापक व शिक्षक सूची'} ({allFaculty.length})</span>
        </button>
      </div>

      {/* Search and Filters */}
      <div className="space-y-4">
        <div className="relative">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={
              activeTab === 'locations' 
                ? "Search Shriram Bhawan, Chaitanya Bhawan, Central Library, Mrityunjay Sabhagar..." 
                : activeTab === 'courses'
                ? "Search courses like B.Sc. Animation, BCA, MCA, Yogic Science, BJMC..."
                : "Search professors by name, department, or specialization (e.g., Dr. Abhay Saxena)..."
            }
            className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white border border-slate-200 text-slate-800 text-sm focus:outline-hidden focus:ring-2 focus:ring-dsvv-blue-900/20 focus:border-dsvv-blue-900 shadow-2xs"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 pt-1">
          {(activeTab === 'locations' ? locationFilters : deptFilters).map(filter => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedFilter === filter.id
                  ? 'bg-dsvv-blue-950 text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
              }`}
            >
              {filter.labelEn || filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* VIEW 1: CAMPUS LOCATIONS */}
      {activeTab === 'locations' && (
        <div className="space-y-6">
          {/* Visual Campus Interactive SVG Map Card */}
          <div className="bg-gradient-to-br from-slate-900 via-dsvv-blue-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl overflow-hidden relative">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <span className="px-3 py-1 rounded-full bg-dsvv-gold-500/20 text-dsvv-gold-300 text-xs font-bold uppercase tracking-wider border border-dsvv-gold-500/30">
                  Interactive Campus Layout Guide
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mt-1">
                  Dev Sanskriti Vishwavidyalaya Campus Map
                </h3>
                <p className="text-xs text-slate-400">
                  Visual layout of prominent academic bhawans, administrative centers, dining, and holy landmarks.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Active Campus Overview</span>
              </div>
            </div>

            {/* SVG Visual Layout */}
            <div className="bg-slate-950/80 rounded-2xl p-4 border border-slate-800 overflow-x-auto">
              <svg viewBox="0 0 950 480" className="w-full min-w-[750px] h-auto select-none font-sans">
                {/* Background Lawn & Pathways */}
                <rect x="10" y="10" width="930" height="460" rx="16" fill="#0f172a" />
                <path d="M 50 240 L 900 240" stroke="#334155" strokeWidth="20" strokeLinecap="round" />
                <path d="M 475 40 L 475 440" stroke="#334155" strokeWidth="20" strokeLinecap="round" />

                {/* Central Circle - Mahakal Mandir */}
                <circle cx="475" cy="240" r="48" fill="#d97706" fillOpacity="0.2" stroke="#f59e0b" strokeWidth="3" />
                <text x="475" y="235" textAnchor="middle" fill="#fef3c7" fontSize="13" fontWeight="bold">Mahakal Mandir</text>
                <text x="475" y="252" textAnchor="middle" fill="#fde68a" fontSize="10">Akhand Jyoti</text>

                {/* Main Entrance Gate */}
                <g transform="translate(40, 205)">
                  <rect width="100" height="70" rx="10" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
                  <text x="50" y="32" textAnchor="middle" fill="#e0f2fe" fontSize="11" fontWeight="bold">Main Entrance</text>
                  <text x="50" y="48" textAnchor="middle" fill="#94a3b8" fontSize="9">Security & Gate</text>
                </g>

                {/* Shriram Bhawan (VC, Pro-VC, Animation, Reception) */}
                <g transform="translate(170, 80)">
                  <rect width="180" height="95" rx="12" fill="#1e3a8a" stroke="#60a5fa" strokeWidth="2.5" />
                  <text x="90" y="28" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="bold">Shriram Bhawan</text>
                  <text x="90" y="46" textAnchor="middle" fill="#93c5fd" fontSize="10">VC & Pro-VC Office • Reception</text>
                  <text x="90" y="62" textAnchor="middle" fill="#bfdbfe" fontSize="9.5">Animation & VFX Department</text>
                  <rect x="15" y="72" width="150" height="15" rx="4" fill="#3b82f6" fillOpacity="0.3" />
                  <text x="90" y="83" textAnchor="middle" fill="#dbeafe" fontSize="8.5">Executive & Creative Labs</text>
                </g>

                {/* Administrative Block (Registrar, COE, Accounts) */}
                <g transform="translate(170, 300)">
                  <rect width="180" height="90" rx="12" fill="#1e293b" stroke="#94a3b8" strokeWidth="2" />
                  <text x="90" y="28" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">Administrative Block</text>
                  <text x="90" y="46" textAnchor="middle" fill="#cbd5e1" fontSize="10">Registrar • Accounts Desk</text>
                  <text x="90" y="62" textAnchor="middle" fill="#94a3b8" fontSize="9.5">Controller of Exams (COE)</text>
                </g>

                {/* Chaitanya Bhawan (CS/IT, Media, Baltic/AI) */}
                <g transform="translate(385, 60)">
                  <rect width="180" height="90" rx="12" fill="#1e293b" stroke="#a78bfa" strokeWidth="2" />
                  <text x="90" y="28" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">Chaitanya Bhawan</text>
                  <text x="90" y="46" textAnchor="middle" fill="#c4b5fd" fontSize="10">CS & IT • BCA / MCA Labs</text>
                  <text x="90" y="62" textAnchor="middle" fill="#ddd6fe" fontSize="9.5">Media & Baltic AI Center</text>
                </g>

                {/* Maa Anandamayi Bhojanalaya & Campus Canteen */}
                <g transform="translate(385, 330)">
                  <rect width="180" height="90" rx="12" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
                  <text x="90" y="28" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">Dining & Canteen Zone</text>
                  <text x="90" y="46" textAnchor="middle" fill="#fde68a" fontSize="10">Maa Anandamayi Mess (Lunch/Dinner)</text>
                  <text x="90" y="62" textAnchor="middle" fill="#fef08a" fontSize="9.5">Campus Canteen • Fresh Sprouts</text>
                </g>

                {/* Sardar Patel & Yoga Bhawan (Library, Yogic Science & Public Therapies) */}
                <g transform="translate(600, 80)">
                  <rect width="180" height="95" rx="12" fill="#14532d" stroke="#4ade80" strokeWidth="2.5" />
                  <text x="90" y="28" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">Sardar Patel Bhawan</text>
                  <text x="90" y="46" textAnchor="middle" fill="#86efac" fontSize="10">Central Library • Printing Hub</text>
                  <text x="90" y="62" textAnchor="middle" fill="#bbf7d0" fontSize="9.5">Dept of Yogic Science</text>
                  <rect x="10" y="72" width="160" height="15" rx="4" fill="#16a34a" fillOpacity="0.4" />
                  <text x="90" y="83" textAnchor="middle" fill="#dcfce7" fontSize="8.5">Public Holistic Therapy OPD</text>
                </g>

                {/* Mrityunjay Sabhagar */}
                <g transform="translate(600, 300)">
                  <rect width="180" height="90" rx="12" fill="#581c87" stroke="#c084fc" strokeWidth="2" />
                  <text x="90" y="28" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">Mrityunjay Sabhagar</text>
                  <text x="90" y="46" textAnchor="middle" fill="#e9d5ff" fontSize="10">Dev Sanskriti Convention Hall</text>
                  <text x="90" y="62" textAnchor="middle" fill="#d8b4fe" fontSize="9.5">1500+ Seating Convocation Venue</text>
                </g>

                {/* Student Amenities Hub (Stationery, Srijana, Ironing) */}
                <g transform="translate(805, 195)">
                  <rect width="125" height="90" rx="10" fill="#1e293b" stroke="#f472b6" strokeWidth="2" />
                  <text x="62" y="26" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">Amenities Hub</text>
                  <text x="62" y="42" textAnchor="middle" fill="#fbcfe8" fontSize="9">Stationery & Forms</text>
                  <text x="62" y="56" textAnchor="middle" fill="#f472b6" fontSize="9">Press Wali Didi</text>
                  <text x="62" y="70" textAnchor="middle" fill="#cbd5e1" fontSize="8.5">Srijana & Gaushala</text>
                </g>
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredLocations.map(loc => (
              <div 
                key={loc.id}
                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-dsvv-gold-600 bg-dsvv-gold-50 px-2.5 py-0.5 rounded-full">
                      {loc.categoryLabel}
                    </span>
                    <h3 className="font-serif font-bold text-slate-900 text-lg mt-1 group-hover:text-dsvv-blue-900 transition-colors">
                      {lang === 'en' ? loc.nameEn : (loc.nameHi || loc.nameEn)}
                    </h3>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 shrink-0">
                    <ShieldCheck size={12} />
                    Verified
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-500 mb-3">
                  <div className="flex items-center gap-1 font-semibold text-slate-700">
                    <Building size={13} className="text-dsvv-gold-600" />
                    <span>{loc.building}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={13} />
                    <span>{loc.timings}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {loc.description}
                </p>

                {/* Directions / Landmark Note */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs mb-4">
                  <div className="font-bold text-slate-800 flex items-center gap-1 mb-1">
                    <Compass size={13} className="text-dsvv-blue-900" />
                    <span>Directions & Landmark:</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    {loc.directions}
                  </p>
                </div>

                {/* Facilities Chips */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {loc.facilities?.map((f, idx) => (
                    <span 
                      key={idx}
                      className="text-[10px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md border border-slate-200"
                    >
                      • {f}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="text-[11px]">{loc.contact}</span>
                <button
                  onClick={() => onOpenReport(loc.nameEn, 'Location')}
                  className="text-slate-400 hover:text-slate-600 text-[11px]"
                >
                  Report Issue
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      )}

      {/* VIEW 2: COURSES & ACADEMIC PROGRAMS */}
      {activeTab === 'courses' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCourses.map(crs => (
            <div 
              key={crs.id}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-dsvv-blue-900 bg-dsvv-blue-50 px-2.5 py-0.5 rounded-full">
                    {crs.degree} • {crs.duration}
                  </span>
                  <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    DSVV Recognized
                  </span>
                </div>

                <h3 className="font-serif font-bold text-slate-900 text-lg leading-snug mb-1">
                  {crs.titleEn}
                </h3>
                <p className="text-xs text-slate-500 mb-3">
                  {crs.titleHi}
                </p>

                <div className="bg-slate-50 rounded-2xl p-3 border border-slate-200/80 space-y-2 mb-4 text-xs">
                  <div className="flex items-center gap-1.5 font-bold text-dsvv-blue-950">
                    <Building size={14} className="text-dsvv-gold-600 shrink-0" />
                    <span>Location: {crs.building}</span>
                  </div>
                  <div className="text-slate-600">
                    <span className="font-semibold text-slate-700">Department:</span> {crs.departmentEn}
                  </div>
                  <div className="text-slate-600">
                    <span className="font-semibold text-slate-700">Eligibility:</span> {crs.eligibility}
                  </div>
                </div>

                <div className="text-xs text-slate-600">
                  <span className="font-semibold text-slate-800">Core Highlights:</span> {crs.highlights}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="text-[11px] font-medium text-dsvv-gold-700">Regular On-Campus Program</span>
                <button
                  onClick={() => onOpenReport(crs.titleEn, 'Course')}
                  className="text-slate-400 hover:text-slate-600 text-[11px]"
                >
                  Report Update
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* VIEW 3: FACULTY & TEACHERS */}
      {activeTab === 'faculty' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFaculty.map(fac => (
            <div 
              key={fac.id}
              className="bg-white rounded-3xl p-5 border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-dsvv-blue-900 to-dsvv-blue-800 text-white flex items-center justify-center font-bold text-base shadow-xs shrink-0">
                    {fac.nameEn.replace('Dr. ', '').replace('Prof. ', '').substring(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base leading-snug">
                      {fac.nameEn}
                    </h3>
                    <p className="text-[11px] font-semibold text-dsvv-gold-700">
                      {fac.designationEn}
                    </p>
                  </div>
                </div>

                <div className="space-y-1.5 text-xs text-slate-600 mb-3 bg-slate-50 p-3 rounded-2xl border border-slate-200/70">
                  <p className="text-[11px] font-medium text-slate-700">
                    <strong>Dept:</strong> {fac.departmentEn}
                  </p>
                  <p className="text-[11px] text-slate-600">
                    <strong>Room / Bhawan:</strong> {fac.officeLocation}
                  </p>
                  <p className="text-[11px] text-slate-500">
                    <strong>Qualification:</strong> {fac.qualification}
                  </p>
                </div>

                <div className="text-[11px] text-slate-600 mb-2">
                  <strong className="text-slate-700">Specialization:</strong> {fac.specialization}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <a 
                  href={`mailto:${fac.email}`}
                  className="inline-flex items-center gap-1 text-[11px] font-medium text-dsvv-blue-900 hover:underline"
                >
                  <Mail size={12} />
                  <span>{fac.email}</span>
                </a>
                <button
                  onClick={() => onOpenReport(fac.nameEn, 'Faculty')}
                  className="text-slate-400 hover:text-slate-600 text-[10px]"
                >
                  Report
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
