import React from 'react';
import { 
  Utensils, 
  FileText, 
  MapPin, 
  Calendar, 
  ArrowRight, 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  Bell,
  ChevronRight,
  ShieldCheck,
  Award
} from 'lucide-react';
import HeroSearch from '../components/HeroSearch';
import FoundersTribute from '../components/FoundersTribute';
import { StorageService } from '../services/storageService';

export default function HomePage({ setActiveTab, lang, onOpenReport }) {
  const messMenus = StorageService.getMessMenus();
  const todayMenu = messMenus[0] || null;
  const procedures = StorageService.getProcedures();
  const events = StorageService.getEvents().filter(e => e.status === 'upcoming');
  const notices = StorageService.getNotices();

  return (
    <div className="space-y-12">
      {/* 1. Hero Search Area */}
      <section className="bg-gradient-to-b from-dsvv-blue-50/70 via-white to-slate-50 border-b border-slate-200/80">
        <HeroSearch onNavigate={setActiveTab} lang={lang} onOpenReport={onOpenReport} />
      </section>

      {/* 2. Interactive Campus Live Pulse Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-slate-200/90 shadow-lg shadow-dsvv-blue-900/5 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div 
            onClick={() => { setActiveTab('mess'); window.scrollTo({top:0, behavior:'smooth'}); }}
            className="flex items-center gap-3 p-2 rounded-xl hover:bg-amber-50/60 transition-colors cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <Utensils size={18} />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">Maa Anandamayi</span>
              <span className="text-xs font-bold text-dsvv-blue-950 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Sattvik Meals Live</span>
              </span>
            </div>
          </div>

          <div 
            onClick={() => { setActiveTab('events'); window.scrollTo({top:0, behavior:'smooth'}); }}
            className="flex items-center gap-3 p-2 rounded-xl hover:bg-purple-50/60 transition-colors cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-900 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <Calendar size={18} />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">Campus Activities</span>
              <span className="text-xs font-bold text-dsvv-blue-950 flex items-center gap-1.5">
                <span>{events.length} Department Events</span>
              </span>
            </div>
          </div>

          <div 
            onClick={() => { setActiveTab('events'); window.scrollTo({top:0, behavior:'smooth'}); }}
            className="flex items-center gap-3 p-2 rounded-xl hover:bg-blue-50/60 transition-colors cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-dsvv-blue-100 text-dsvv-blue-900 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <Award size={18} />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">Mrityunjay Sabhagar</span>
              <span className="text-xs font-bold text-dsvv-blue-950">
                40 Volunteer Calls
              </span>
            </div>
          </div>

          <div 
            onClick={() => { setActiveTab('procedures'); window.scrollTo({top:0, behavior:'smooth'}); }}
            className="flex items-center gap-3 p-2 rounded-xl hover:bg-emerald-50/60 transition-colors cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <ShieldCheck size={18} />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">Verified Guidance</span>
              <span className="text-xs font-bold text-dsvv-blue-950">
                {procedures.length} Official Guides
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Quick-Access Core Modules Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-dsvv-blue-950">
              {lang === 'en' ? 'Core Information Modules' : 'मुख्य विश्वविद्यालय अनुभाग'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              {lang === 'en' 
                ? 'Structured, verified guidance curated for daily university life' 
                : 'छात्रों की दैनिक आवश्यकताओं के लिए सत्यापित मार्गदर्शन'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Module 1: Mess */}
          <div 
            onClick={() => { setActiveTab('mess'); window.scrollTo({top:0, behavior:'smooth'}); }}
            className="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-dsvv-gold-500 shadow-xs hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform border border-amber-100">
                <Utensils size={24} />
              </div>
              <h3 className="text-base font-serif font-bold text-dsvv-blue-950 group-hover:text-dsvv-gold-600 transition-colors">
                {lang === 'en' ? 'Daily Mess Menu' : 'दैनिक मेस मेन्यू'}
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                {lang === 'en'
                  ? 'Breakfast, lunch, and dinner schedules. 100% pure sattvik dining updates.'
                  : 'प्रातः नाश्ता, दोपहर व सांध्य भोजन का दैनिक विवरण व समय सारिणी।'}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-dsvv-blue-900 group-hover:text-dsvv-gold-600">
              <span>{lang === 'en' ? 'View Today\'s Meals' : 'आज का भोजन देखें'}</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Module 2: Procedures */}
          <div 
            onClick={() => { setActiveTab('procedures'); window.scrollTo({top:0, behavior:'smooth'}); }}
            className="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-dsvv-blue-900 shadow-xs hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-dsvv-blue-900 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform border border-blue-100">
                <FileText size={24} />
              </div>
              <h3 className="text-base font-serif font-bold text-dsvv-blue-950 group-hover:text-dsvv-blue-700 transition-colors">
                {lang === 'en' ? 'Student Procedures' : 'नियम व प्रक्रिया मार्गदर्शिका'}
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                {lang === 'en'
                  ? 'Step-by-step guidance for medical leave, hostel outpass, and bonafide requests.'
                  : 'चिकित्सा अवकाश, उपस्थिति छूट, छात्रावास गेट पास व प्रमाण पत्र हेतु नियम।'}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-dsvv-blue-900">
              <span>{lang === 'en' ? 'Explore 4 Official Guides' : 'मार्गदर्शिकाएं देखें'}</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Module 3: Campus Map Directory */}
          <div 
            onClick={() => { setActiveTab('directory'); window.scrollTo({top:0, behavior:'smooth'}); }}
            className="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-emerald-600 shadow-xs hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform border border-emerald-100">
                <MapPin size={24} />
              </div>
              <h3 className="text-base font-serif font-bold text-dsvv-blue-950 group-hover:text-emerald-700 transition-colors">
                {lang === 'en' ? 'Campus Directory' : 'परिसर डायरेक्टरी व नक्शा'}
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                {lang === 'en'
                  ? 'Saraswati Bhawan, Mahakal Mandir, Animation & VFX labs, and health clinic locations.'
                  : 'सरस्वती भवन, महाकाल मंदिर, वीएफएक्स लैब, औषधालय व प्रशासनिक भवन।'}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-800">
              <span>{lang === 'en' ? 'Navigate Campus' : 'स्थान व समय देखें'}</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Module 4: Events & Activities */}
          <div 
            onClick={() => { setActiveTab('events'); window.scrollTo({top:0, behavior:'smooth'}); }}
            className="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-purple-600 shadow-xs hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform border border-purple-100">
                <Calendar size={24} />
              </div>
              <h3 className="text-base font-serif font-bold text-dsvv-blue-950 group-hover:text-purple-700 transition-colors">
                {lang === 'en' ? 'Events & Activities' : 'गतिविधियाँ व प्रतियोगिताएं'}
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                {lang === 'en'
                  ? 'Code hackathons, poster competitions, yoga workshops, and registration dates.'
                  : 'सार्थी हैकथॉन, पोस्टर निर्माण प्रतियोगिता, योग कार्यशाला एवं पंजीयन तिथियां।'}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-purple-800">
              <span>{lang === 'en' ? 'View 3 Active Events' : 'सक्रिय प्रतियोगिताएं'}</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Today's Mess Spotlight & Circulars Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Today's Mess Card */}
          <div className="lg:col-span-2 bg-gradient-to-br from-white to-amber-50/40 rounded-3xl p-6 sm:p-8 border border-amber-200 shadow-sm relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 rounded-xl bg-dsvv-gold-500 text-dsvv-blue-950 font-bold">
                  <Utensils size={20} />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-dsvv-blue-950">
                    {lang === 'en' ? 'Today\'s Dining (Maa Anandamayi Bhojanalaya)' : 'आज का भोजन (माँ आनंदमयी भोजनालय)'}
                  </h3>
                  <p className="text-xs text-slate-500">
                    Date: {todayMenu?.date || 'Today'} • Verified by Mess Committee
                  </p>
                </div>
              </div>

              <button
                onClick={() => { setActiveTab('mess'); window.scrollTo({top:0, behavior:'smooth'}); }}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-dsvv-blue-900 bg-white hover:bg-amber-100 px-3.5 py-1.5 rounded-lg border border-amber-300 transition-colors shadow-2xs"
              >
                <span>Full Menu</span>
                <ChevronRight size={14} />
              </button>
            </div>

            {todayMenu && todayMenu.meals ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Campus Canteen / Breakfast */}
                <div className="bg-white rounded-2xl p-4 border border-amber-300/80 shadow-2xs">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-bold text-amber-900 uppercase tracking-wider">Canteen Breakfast</span>
                    <span className="text-[10px] text-slate-500">{todayMenu.meals.breakfastNote?.timing || "07:30 AM – 10:00 AM"}</span>
                  </div>
                  <h4 className="text-sm font-semibold text-slate-900 mb-1">
                    Daily Fresh Sprouts & Snacks
                  </h4>
                  <p className="text-[11px] text-amber-800 bg-amber-50 rounded-lg p-1.5 mb-2">
                    🌱 Ankurit (₹15–20) • Hot Dishes (₹15–30)
                  </p>
                  <ul className="text-xs text-slate-600 space-y-1">
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"></span>
                      <span className="truncate">Chole Bhature & Puri Aloo</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"></span>
                      <span className="truncate">Veg Chow mein & Pani Puri</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"></span>
                      <span className="truncate">Gulab Jamun & Laddoos (₹15)</span>
                    </li>
                  </ul>
                </div>

                {/* Lunch */}
                <div className="bg-white rounded-2xl p-4 border border-dsvv-blue-300 shadow-xs relative">
                  <span className="absolute -top-2.5 right-4 bg-dsvv-gold-500 text-dsvv-blue-950 font-bold text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full">
                    Maa Anandamayi
                  </span>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-bold text-dsvv-blue-900 uppercase tracking-wider">Lunch</span>
                    <span className="text-[10px] text-slate-500">{todayMenu.meals.lunch?.timing || "11:30 AM – 01:45 PM"}</span>
                  </div>
                  <h4 className="text-sm font-semibold text-slate-900 mb-2">
                    {todayMenu.meals.lunch?.title || "Sattvik Lunch"}
                  </h4>
                  <ul className="text-xs text-slate-600 space-y-1">
                    {(todayMenu.meals.lunch?.items || []).slice(0, 3).map((it, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-dsvv-blue-900 shrink-0"></span>
                        <span className="truncate">{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Dinner */}
                <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-2xs">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-bold text-dsvv-blue-900 uppercase tracking-wider">Dinner</span>
                    <span className="text-[10px] text-slate-500">{todayMenu.meals.dinner?.timing || "07:00 PM – 08:30 PM"}</span>
                  </div>
                  <h4 className="text-sm font-semibold text-slate-900 mb-2">
                    {todayMenu.meals.dinner?.title || "Sattvik Dinner"}
                  </h4>
                  <ul className="text-xs text-slate-600 space-y-1">
                    {(todayMenu.meals.dinner?.items || []).slice(0, 3).map((it, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-dsvv-gold-500 shrink-0"></span>
                        <span className="truncate">{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <p className="text-sm text-slate-500">Menu not currently loaded.</p>
            )}
          </div>

          {/* Important Notices Sidebar */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Bell size={18} className="text-dsvv-blue-900" />
                <h3 className="font-serif font-bold text-dsvv-blue-950 text-base">
                  {lang === 'en' ? 'Official Notices & Circulars' : 'नवीनतम विश्वविद्यालय सूचनाएं'}
                </h3>
              </div>
              <div className="space-y-3.5">
                {notices.map((n) => (
                  <div key={n.id} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="font-bold text-dsvv-blue-900">{n.category}</span>
                      <span className="text-slate-400">{n.date}</span>
                    </div>
                    <h4 className="text-xs font-semibold text-slate-900 leading-snug">
                      {n.title}
                    </h4>
                    <p className="text-[11px] text-slate-600 line-clamp-2">
                      {n.body}
                    </p>
                    <div className="text-[10px] text-slate-400 pt-1">
                      Source: {n.source}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
              <span className="flex items-center gap-1 text-emerald-700 font-medium">
                <ShieldCheck size={13} />
                Verified Circulars
              </span>
              <span>Updated Daily</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Founder Tribute Section */}
      <FoundersTribute lang={lang} />
    </div>
  );
}
