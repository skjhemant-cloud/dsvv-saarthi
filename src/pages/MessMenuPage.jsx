import React, { useState } from 'react';
import { 
  Utensils, 
  Clock, 
  Calendar, 
  CheckCircle, 
  AlertCircle, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles,
  Info,
  ShieldCheck,
  Search
} from 'lucide-react';
import { StorageService } from '../services/storageService';

export default function MessMenuPage({ lang, onOpenReport }) {
  const allMenus = StorageService.getMessMenus();

  // Helper to format date nicely
  const todayStr = new Date().toISOString().split('T')[0];
  const [selectedDate, setSelectedDate] = useState(todayStr);
  const [mealFilter, setMealFilter] = useState('all'); // all | breakfast | lunch | dinner
  const [searchMealTerm, setSearchMealTerm] = useState('');

  // Find menu for selected date or fallback
  const currentMenu = allMenus.find(m => m.date === selectedDate) || allMenus[0];

  const handleDateOffset = (offset) => {
    const cur = new Date(selectedDate);
    cur.setDate(cur.getDate() + offset);
    setSelectedDate(cur.toISOString().split('T')[0]);
  };

  const meals = currentMenu?.meals || {};
  const canteen = currentMenu?.canteenMenu || null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200 text-xs font-semibold mb-2">
            <Utensils size={13} className="text-amber-600" />
            <span>Maa Anandamayi Bhojanalaya • Daily Sattvik Dining</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-serif font-bold text-dsvv-blue-950">
            {lang === 'en' ? 'Campus Mess Schedule & Menus (Maa Anandamayi)' : 'दैनिक मेस मेन्यू (माँ आनंदमयी भोजनालय)'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            {lang === 'en'
              ? 'Nutritious, 100% Sattvik vegetarian meals prepared according to yogic dietary principles.'
              : 'योगिक व सात्विक परंपरा के अनुसार शुद्ध एवं पौष्टिक आहार तालिका।'}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onOpenReport('Mess Menu', 'Mess Module')}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold border border-slate-200 shadow-2xs transition-colors"
          >
            <AlertCircle size={14} className="text-amber-500" />
            <span>Report Menu Change</span>
          </button>
        </div>
      </div>

      {/* Date Navigator Bar */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-4">
        {/* Quick Date Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleDateOffset(-1)}
            className="p-2 rounded-lg border border-slate-200 hover:bg-slate-100 text-slate-600 transition-colors"
            title="Previous Day"
          >
            <ChevronLeft size={18} />
          </button>
          
          <button
            onClick={() => {
              const d = new Date();
              d.setDate(d.getDate() - 1);
              setSelectedDate(d.toISOString().split('T')[0]);
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
              selectedDate === new Date(Date.now() - 86400000).toISOString().split('T')[0]
                ? 'bg-dsvv-blue-900 text-white border-dsvv-blue-900'
                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
            }`}
          >
            Yesterday
          </button>

          <button
            onClick={() => setSelectedDate(todayStr)}
            className={`px-4 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
              selectedDate === todayStr
                ? 'bg-dsvv-gold-500 text-dsvv-blue-950 border-dsvv-gold-600 shadow-xs'
                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
            }`}
          >
            Today (आज)
          </button>

          <button
            onClick={() => {
              const d = new Date();
              d.setDate(d.getDate() + 1);
              setSelectedDate(d.toISOString().split('T')[0]);
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
              selectedDate === new Date(Date.now() + 86400000).toISOString().split('T')[0]
                ? 'bg-dsvv-blue-900 text-white border-dsvv-blue-900'
                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
            }`}
          >
            Tomorrow (कल)
          </button>

          <button
            onClick={() => handleDateOffset(1)}
            className="p-2 rounded-lg border border-slate-200 hover:bg-slate-100 text-slate-600 transition-colors"
            title="Next Day"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Date Selector input */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
            <Calendar size={14} className="text-dsvv-blue-900" />
            <span>Select Date:</span>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="text-xs font-semibold bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1 text-slate-800 focus:outline-none focus:ring-2 focus:ring-dsvv-blue-900"
            />
          </div>

          {/* Verification Badge */}
          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-medium">
            <ShieldCheck size={14} className="text-emerald-600" />
            <span>Verified by {currentMenu?.verifiedBy || 'Mess Admin'}</span>
          </div>
        </div>
      </div>

      {/* Meal Tabs Filter (All, Canteen/Breakfast, Lunch, Dinner) */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          {[
            { id: 'all', label: 'All Meals & Canteen' },
            { id: 'canteen', label: 'Canteen & Breakfast' },
            { id: 'lunch', label: 'Lunch (दोपहर)' },
            { id: 'dinner', label: 'Dinner (संध्या)' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setMealFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                mealFilter === tab.id
                  ? 'bg-dsvv-blue-900 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="text-xs text-slate-500">
          Showing schedule for: <strong className="text-slate-800">{new Date(selectedDate).toDateString()}</strong>
        </div>
      </div>

      {/* Note about Mess vs Canteen */}
      <div className="bg-amber-50 border border-amber-300 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-amber-950">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0"></span>
          <div>
            <strong>Campus Reality Note:</strong> Maa Anandamayi Bhojanalaya serves <strong>Lunch and Dinner</strong>. Breakfast is not served in the mess; students have healthy morning sprouts & snacks at the <strong>Campus Canteen (कैंटीन)</strong>.
          </div>
        </div>
        <button 
          onClick={() => setMealFilter('canteen')}
          className="px-3 py-1 rounded-lg bg-amber-200/80 hover:bg-amber-300 text-amber-950 font-bold shrink-0 transition-colors"
        >
          View Canteen Menu →
        </button>
      </div>

      {/* Meals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* 1. CANTEEN & MORNING BREAKFAST */}
        {(mealFilter === 'all' || mealFilter === 'canteen' || mealFilter === 'breakfast') && (
          <div className="bg-white rounded-3xl p-6 border-2 border-amber-300 hover:border-amber-500 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
                  Campus Canteen (प्रातः नाश्ता)
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-slate-500 font-medium">
                  <Clock size={13} className="text-amber-600" />
                  07:30 AM – 10:00 AM
                </span>
              </div>

              <h3 className="text-lg font-serif font-bold text-dsvv-blue-950 mb-1">
                {lang === 'hi' ? 'दैनिक ताज़ा अंकुरित एवं नाश्ता' : 'Daily Fresh Sprouts & Morning Snacks'}
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                Served at Campus Canteen (Maa Anandamayi mess does not serve breakfast)
              </p>

              {/* Sprouts Special */}
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-3 mb-4">
                <div className="flex items-center justify-between text-xs font-bold text-emerald-900 mb-1">
                  <span>🌱 Daily Morning Ankurit (अंकुरित)</span>
                  <span className="text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md">₹15 – ₹20</span>
                </div>
                <p className="text-[11px] text-emerald-800">Fresh Moong, Kala Chana, lemon & mild chaat masala</p>
              </div>

              {/* Rotating Hot Dishes */}
              <div className="space-y-2 mb-4">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Daily Changing Hot Snacks:</p>
                <div className="grid grid-cols-1 gap-1.5 text-xs text-slate-700">
                  {(canteen?.dailyHotDishes || [
                    { dish: "Chole Bhature (छोले भटूरे)", price: "₹30" },
                    { dish: "Puri Aloo (पूरी आलू)", price: "₹25" },
                    { dish: "Veg Chow mein (चाउमीन)", price: "₹25" },
                    { dish: "Bhel Puri / Pani Puri", price: "₹20" }
                  ]).map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between bg-slate-50 p-2 rounded-xl">
                      <span className="font-medium">{item.dish}</span>
                      <span className="font-bold text-dsvv-blue-900">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Packaged Snacks & Sweets */}
              <div className="space-y-1 text-[11px] text-slate-500 border-t border-slate-100 pt-3">
                <p className="font-bold text-slate-600">Also in Stock:</p>
                <p>Paper Boat, Gulab Jamun, Laddoos (₹15), Burgers, Pastries, Chips.</p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-2 mt-4">
              <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-2.5 text-xs text-amber-900">
                <span className="font-bold">Location:</span> Central Campus Canteen
              </div>
              <div className="flex items-center justify-between text-[11px] text-slate-400">
                <span className="text-amber-700 font-semibold">Self Paid Counter</span>
                <span>07:30 AM – 08:00 PM</span>
              </div>
            </div>
          </div>
        )}

        {/* 2. LUNCH */}
        {(mealFilter === 'all' || mealFilter === 'lunch') && meals.lunch && (
          <div className="bg-white rounded-3xl p-6 border-2 border-amber-300 hover:border-amber-500 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-dsvv-gold-500 text-dsvv-blue-950 font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-bl-xl shadow-xs">
              Principal Meal
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-dsvv-blue-900 text-white text-xs font-bold uppercase tracking-wider">
                  Lunch (दोपहर भोजन)
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-slate-500 font-medium">
                  <Clock size={13} className="text-amber-600" />
                  {meals.lunch.timing}
                </span>
              </div>

              <h3 className="text-lg font-serif font-bold text-dsvv-blue-950 mb-1">
                {lang === 'hi' && meals.lunch.titleHi ? meals.lunch.titleHi : meals.lunch.title}
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                {meals.lunch.titleHi}
              </p>

              <div className="space-y-2 mb-6">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Menu Items:</p>
                <ul className="space-y-2">
                  {meals.lunch.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 bg-amber-50/50 p-2 rounded-xl">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0"></span>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-2">
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-2.5 text-xs text-amber-900">
                <span className="font-bold">Dietary Note:</span> {meals.lunch.special}
              </div>
              <div className="flex items-center justify-between text-[11px] text-slate-400">
                <span className="text-emerald-700 font-semibold">✓ Pure Sattvik (No Onion/Garlic)</span>
                <span>Unlimited Portions</span>
              </div>
            </div>
          </div>
        )}

        {/* 3. DINNER */}
        {(mealFilter === 'all' || mealFilter === 'dinner') && meals.dinner && (
          <div className="bg-white rounded-3xl p-6 border-2 border-slate-200 hover:border-dsvv-blue-800 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider">
                  Dinner (संध्या भोजन)
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-slate-500 font-medium">
                  <Clock size={13} className="text-amber-600" />
                  {meals.dinner.timing}
                </span>
              </div>

              <h3 className="text-lg font-serif font-bold text-dsvv-blue-950 mb-1">
                {lang === 'hi' && meals.dinner.titleHi ? meals.dinner.titleHi : meals.dinner.title}
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                {meals.dinner.titleHi}
              </p>

              <div className="space-y-2 mb-6">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Menu Items:</p>
                <ul className="space-y-2">
                  {meals.dinner.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 bg-slate-50 p-2 rounded-xl">
                      <span className="w-1.5 h-1.5 rounded-full bg-dsvv-blue-900 mt-1.5 shrink-0"></span>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-2">
              <div className="bg-blue-50/70 border border-blue-200 rounded-xl p-2.5 text-xs text-dsvv-blue-900">
                <span className="font-bold">Evening Schedule:</span> {meals.dinner.special}
              </div>
              <div className="flex items-center justify-between text-[11px] text-slate-400">
                <span className="text-emerald-700 font-semibold">✓ Easy to Digest</span>
                <span>Closes 08:30 PM</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* University Dining Guidelines Notice */}
      <div className="bg-slate-100 rounded-2xl p-6 border border-slate-200 space-y-3">
        <div className="flex items-center gap-2 text-dsvv-blue-950 font-serif font-bold text-sm">
          <Info size={16} className="text-dsvv-gold-600" />
          <span>Maa Anandamayi Dining Etiquette & Spiritual Culture</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-600">
          <div className="bg-white p-3 rounded-xl border border-slate-200">
            <strong className="block text-slate-900 mb-1">1. Gayatri Mantra Recitation</strong>
            Students recite the food prayer (*Om Bhoor Bhuvah Swah...*) collectively before partaking in meals.
          </div>
          <div className="bg-white p-3 rounded-xl border border-slate-200">
            <strong className="block text-slate-900 mb-1">2. Zero Food Wastage</strong>
            DSVV upholds a sacred zero-wastage rule. Take only as much food on your thali as you can consume.
          </div>
          <div className="bg-white p-3 rounded-xl border border-slate-200">
            <strong className="block text-slate-900 mb-1">3. Cleanliness & Utensil Return</strong>
            Kindly rinse your own thali and place it systematically at the designated washing counter.
          </div>
        </div>
      </div>
    </div>
  );
}
