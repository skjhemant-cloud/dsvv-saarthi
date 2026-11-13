import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Sparkles, 
  ArrowRight, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  Utensils, 
  FileText, 
  MapPin, 
  Calendar,
  X,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { SearchEngine } from '../services/searchEngine';

export default function HeroSearch({ onNavigate, lang, onOpenReport }) {
  const [query, setQuery] = useState('');
  const [searchOutput, setSearchOutput] = useState(null);
  const [isSearching, setIsSearching] = useState(false);

  // Suggested prompt chips for immediate testing
  const samplePrompts = [
    { text: "How to get into DSVV?", icon: FileText, tag: "Admission Guide" },
    { text: "Aaj mess mein kya bana hai?", icon: Utensils, tag: "Maa Anandamayi Mess" },
    { text: "Lost ID card Parisampatti Vibhag", icon: FileText, tag: "ID Card" },
    { text: "Scholarship documents Registrar office", icon: FileText, tag: "Scholarship" },
    { text: "Where is the library?", icon: MapPin, tag: "Campus Location" },
    { text: "Medical leave procedure", icon: FileText, tag: "Medical Attendance" },
  ];

  const handleSearch = (textToSearch) => {
    const q = textToSearch !== undefined ? textToSearch : query;
    if (!q || q.trim().length === 0) {
      setSearchOutput(null);
      return;
    }
    setIsSearching(true);
    // Instant zero-cost local search
    const results = SearchEngine.search(q);
    setSearchOutput(results);
    setIsSearching(false);
  };

  const handleClear = () => {
    setQuery('');
    setSearchOutput(null);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="relative pt-10 pb-14 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-56 bg-gradient-to-r from-dsvv-blue-200/30 via-dsvv-gold-200/40 to-amber-200/30 blur-3xl pointer-events-none rounded-full -z-10"></div>

      {/* Editorial Headline */}
      <div className="text-center space-y-3.5 mb-9">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-dsvv-blue-950 text-xs font-semibold border border-dsvv-gold-400/50 shadow-sm shadow-dsvv-gold-500/10">
          <Sparkles size={14} className="text-dsvv-gold-600 animate-spin-slow" />
          <span className="tracking-wide">
            {lang === 'en' 
              ? 'Dev Sanskriti Vishwavidyalaya • Zero-Cost Student Knowledge Engine' 
              : 'देव संस्कृति विश्वविद्यालय • निःशुल्क छात्र ज्ञान एवं सहायता केंद्र'}
          </span>
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-dsvv-blue-950 tracking-tight leading-[1.15]">
          {lang === 'en' 
            ? 'Everything you need to know about your university, in one place.' 
            : 'विश्वविद्यालय से जुड़ी हर ज़रूरी जानकारी, एक ही स्थान पर।'}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
          {lang === 'en'
            ? 'Instant verified campus guidance: Maa Anandamayi mess menus, departmental events, duplicate ID cards, and official procedures in English or Hindi.'
            : 'सत्यापित परिसर मार्गदर्शन: माँ आनंदमयी मेस मेन्यू, विभागीय प्रतियोगिताएं, परिचय पत्र व अवकाश प्रक्रियाएं।'}
        </p>
      </div>

      {/* Prominent Search Bar */}
      <div className="relative max-w-3xl mx-auto mb-7">
        <div className="relative flex items-center bg-white rounded-2xl shadow-xl shadow-dsvv-blue-950/10 border-2 border-dsvv-blue-900/30 hover:border-dsvv-blue-900 focus-within:border-dsvv-blue-900 focus-within:ring-4 focus-within:ring-dsvv-gold-400/30 transition-all p-2.5">
          <div className="pl-3 pr-2 text-dsvv-blue-800">
            <Search size={22} className="text-dsvv-blue-900" />
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              if (e.target.value.length > 2) {
                handleSearch(e.target.value);
              } else if (e.target.value.length === 0) {
                setSearchOutput(null);
              }
            }}
            onKeyDown={handleKeyDown}
            placeholder={lang === 'en' 
              ? 'Ask a question (e.g., "Where is library?", "Aaj mess me kya hai", "Medical leave")...' 
              : 'प्रश्न पूछें (उदा. "लाइब्रेरी कहाँ है?", "आज मेस में क्या है?", "मेडिकल लीव कैसे लें")...'}
            className="w-full py-2.5 px-2 text-slate-800 text-sm sm:text-base placeholder-slate-400 focus:outline-none bg-transparent"
          />
          {query && (
            <button
              onClick={handleClear}
              className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 mr-1"
              title="Clear search"
            >
              <X size={18} />
            </button>
          )}
          <button
            onClick={() => handleSearch()}
            className="bg-dsvv-blue-900 hover:bg-dsvv-blue-800 text-white px-5 py-2.5 rounded-xl font-medium text-sm flex items-center gap-1.5 shadow-md hover:shadow-lg transition-all shrink-0"
          >
            <span>{lang === 'en' ? 'Search' : 'खोजें'}</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* Quick Question Prompt Chips */}
      <div className="max-w-3xl mx-auto">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
          <span>{lang === 'en' ? 'Frequently Asked Questions:' : 'प्रायः पूछे जाने वाले प्रश्न:'}</span>
        </p>
        <div className="flex flex-wrap gap-2">
          {samplePrompts.map((p, idx) => {
            const Icon = p.icon;
            return (
              <button
                key={idx}
                onClick={() => {
                  setQuery(p.text);
                  handleSearch(p.text);
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-dsvv-gold-50 border border-slate-200 hover:border-dsvv-gold-400 text-xs text-slate-700 hover:text-dsvv-blue-950 shadow-2xs transition-all font-medium group"
              >
                <Icon size={13} className="text-dsvv-gold-600 group-hover:scale-110 transition-transform" />
                <span>{p.text}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Search Output Section */}
      {searchOutput && (
        <div className="max-w-3xl mx-auto mt-8 animate-fadeIn">
          {/* Status Header */}
          <div className="flex items-center justify-between px-2 mb-3">
            <span className="text-xs font-semibold text-slate-500">
              {searchOutput.message}
            </span>
            {searchOutput.confidence === 'high' && (
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                <CheckCircle size={12} />
                High Confidence Match
              </span>
            )}
          </div>

          {/* Results List */}
          {searchOutput.results.length > 0 ? (
            <div className="space-y-4">
              {searchOutput.results.map((res, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-dsvv-blue-800 shadow-sm hover:shadow-md transition-all relative overflow-hidden"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-dsvv-blue-50 text-dsvv-blue-900 border border-dsvv-blue-200">
                      {res.category}
                    </span>
                    <div className="flex items-center gap-2 text-[11px] text-slate-500">
                      <span className="inline-flex items-center gap-1 text-emerald-700 font-medium">
                        <CheckCircle size={12} />
                        {res.details?.verificationStatus === 'verified' ? 'Verified DSVV Record' : 'Sample Demonstration'}
                      </span>
                      {res.details?.lastVerifiedDate && (
                        <span>• Updated {res.details.lastVerifiedDate}</span>
                      )}
                    </div>
                  </div>

                  <h3 className="text-lg font-serif font-bold text-dsvv-blue-950 mb-1">
                    {lang === 'hi' && res.titleHi ? res.titleHi : res.title}
                  </h3>

                  <p className="text-sm text-slate-700 leading-relaxed mb-3">
                    {res.answer}
                  </p>

                  {/* Contextual Extra Info for Locations, Mess, Procedures */}
                  {res.type === 'mess' && res.details && (
                    <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-3 text-xs mb-3 space-y-1">
                      <div className="font-semibold text-amber-900 flex items-center justify-between">
                        <span>Dining Schedule: {res.details.timing}</span>
                        <span className="bg-amber-200/70 text-amber-950 px-2 py-0.5 rounded text-[10px] font-bold">100% SATTVIK</span>
                      </div>
                      <p className="text-amber-800 italic">Special: {res.details.special}</p>
                    </div>
                  )}

                  {res.type === 'procedure' && res.details && (
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs mb-3 space-y-1">
                      <div className="text-slate-600">
                        <strong className="text-slate-900">Office:</strong> {res.details.responsibleOffice} ({res.details.location})
                      </div>
                      <div className="text-slate-600">
                        <strong className="text-slate-900">Required Docs:</strong> {res.details.requiredDocs?.slice(0, 2).join(', ')}...
                      </div>
                    </div>
                  )}

                  {res.type === 'location' && res.details && (
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs mb-3 space-y-1">
                      <div className="text-slate-600">
                        <strong className="text-slate-900">Timings:</strong> {res.details.timings}
                      </div>
                      <div className="text-slate-600">
                        <strong className="text-slate-900">Directions:</strong> {res.details.directions}
                      </div>
                    </div>
                  )}

                  {/* Actions & Deep link */}
                  <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
                    <button
                      onClick={() => onOpenReport(res.title, res.type)}
                      className="text-slate-400 hover:text-slate-600 flex items-center gap-1"
                    >
                      <AlertCircle size={13} />
                      <span>Report Outdated Info</span>
                    </button>
                    <button
                      onClick={() => {
                        if (res.type === 'mess') onNavigate('mess');
                        else if (res.type === 'procedure') onNavigate('procedures');
                        else if (res.type === 'location') onNavigate('directory');
                        else if (res.type === 'event') onNavigate('events');
                      }}
                      className="text-dsvv-blue-900 hover:text-dsvv-blue-700 font-semibold flex items-center gap-1"
                    >
                      <span>Explore full details</span>
                      <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-6 border border-slate-200 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mx-auto">
                <AlertCircle size={24} />
              </div>
              <h4 className="font-serif font-bold text-slate-800 text-base">
                No reliable answer could be confidently verified
              </h4>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                We prioritize accuracy over guessing. Try checking one of the core categories directly:
              </p>
              <div className="flex flex-wrap justify-center gap-2 pt-2">
                <button
                  onClick={() => onNavigate('mess')}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs font-medium text-slate-700"
                >
                  Check Mess Menu
                </button>
                <button
                  onClick={() => onNavigate('procedures')}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs font-medium text-slate-700"
                >
                  View Student Procedures
                </button>
                <button
                  onClick={() => onNavigate('directory')}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs font-medium text-slate-700"
                >
                  Campus Directory
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
