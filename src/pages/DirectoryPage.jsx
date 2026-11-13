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
  AlertCircle
} from 'lucide-react';
import { StorageService } from '../services/storageService';

export default function DirectoryPage({ lang, onOpenReport }) {
  const allLocations = StorageService.getLocations();
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filterOptions = [
    { id: 'all', labelEn: 'All Facilities', labelHi: 'सभी भवन' },
    { id: 'academic', labelEn: 'Academic & Labs', labelHi: 'शैक्षणिक व प्रयोगशालाएं' },
    { id: 'spiritual', labelEn: 'Spiritual Landmarks', labelHi: 'आध्यात्मिक स्थल' },
    { id: 'administrative', labelEn: 'Administration', labelHi: 'प्रशासनिक भवन' },
    { id: 'facilities', labelEn: 'Mess & Health', labelHi: 'मेस व चिकित्सालय' }
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

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-200 text-xs font-semibold mb-2">
            <Compass size={13} className="text-emerald-700" />
            <span>Campus Landmarks & Architectural Locator</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-serif font-bold text-dsvv-blue-950">
            {lang === 'en' ? 'Campus Facilities Directory' : 'परिसर डायरेक्टरी एवं भवन नक्शा'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            {lang === 'en'
              ? 'Find buildings, department offices, library timings, laboratories, and walking directions.'
              : 'सरस्वती भवन, महाकाल मंदिर, वीएफएक्स लैब, कार्यालय व छात्रावास के सटीक निर्देश।'}
          </p>
        </div>

        <button
          onClick={() => onOpenReport('Campus Location', 'Directory Module')}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold border border-slate-200 shadow-2xs self-start md:self-auto"
        >
          <AlertCircle size={14} className="text-amber-500" />
          <span>Report Location Update</span>
        </button>
      </div>

      {/* Campus Overview Banner */}
      <div className="bg-gradient-to-r from-dsvv-blue-900 to-dsvv-blue-950 text-white rounded-3xl p-6 sm:p-8 shadow-md relative overflow-hidden">
        <div className="relative z-10 max-w-2xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-dsvv-gold-400">
            Dev Sanskriti Vishwavidyalaya Campus Map
          </span>
          <h2 className="text-xl sm:text-2xl font-serif font-bold">
            Haridwar Foothills Campus Navigation
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
            Spanning over 85 acres near the sacred banks of the Ganges, the DSVV campus combines tranquil spiritual sanctity with modern educational infrastructure.
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white p-3 rounded-2xl border border-slate-200 shadow-xs">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
          {filterOptions.map((f) => (
            <button
              key={f.id}
              onClick={() => setSelectedFilter(f.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                selectedFilter === f.id
                  ? 'bg-dsvv-blue-900 text-white shadow-xs'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {lang === 'en' ? f.labelEn : f.labelHi}
            </button>
          ))}
        </div>

        {/* Search input */}
        <div className="relative w-full sm:w-72">
          <Search size={16} className="absolute left-3 top-2.5 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search building, office, lab..."
            className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-dsvv-blue-900"
          />
        </div>
      </div>

      {/* Locations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLocations.map((loc) => (
          <div
            key={loc.id}
            id={loc.id}
            className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-dsvv-blue-900 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-dsvv-blue-50 text-dsvv-blue-900 border border-dsvv-blue-200">
                  {loc.categoryLabel}
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  <ShieldCheck size={12} className="text-emerald-600" />
                  Verified
                </span>
              </div>

              <h3 className="text-lg font-serif font-bold text-dsvv-blue-950 mb-1">
                {lang === 'hi' && loc.nameHi ? loc.nameHi : loc.nameEn}
              </h3>
              <p className="text-xs text-slate-500 mb-3">
                {loc.nameHi}
              </p>

              <div className="space-y-2 mb-4 text-xs">
                <div className="flex items-center gap-2 text-slate-700">
                  <Building size={14} className="text-dsvv-blue-900 shrink-0" />
                  <span className="font-semibold">{loc.building}</span>
                  <span className="text-slate-400">({loc.floor})</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Clock size={14} className="text-dsvv-gold-600 shrink-0" />
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
                className="text-slate-400 hover:text-slate-600"
                title="Report location issue"
              >
                Report
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
