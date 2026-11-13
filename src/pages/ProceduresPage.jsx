import React, { useState } from 'react';
import { 
  FileText, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  Building, 
  Phone, 
  Mail, 
  Search, 
  ChevronDown, 
  ChevronUp, 
  ExternalLink,
  ShieldCheck,
  FileCheck,
  BookmarkCheck
} from 'lucide-react';
import { StorageService } from '../services/storageService';

export default function ProceduresPage({ lang, onOpenReport }) {
  const allProcedures = StorageService.getProcedures();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedId, setExpandedId] = useState(allProcedures[0]?.id || null);

  const categories = [
    { id: 'all', labelEn: 'All Procedures', labelHi: 'सभी प्रक्रियाएं' },
    { id: 'admission', labelEn: 'Admission & Prospectus', labelHi: 'प्रवेश व विवरणिका' },
    { id: 'attendance', labelEn: 'Medical & Attendance', labelHi: 'चिकित्सा व उपस्थिति' },
    { id: 'hostel', labelEn: 'Hostel & Outpass', labelHi: 'छात्रावास अवकाश' },
    { id: 'documents', labelEn: 'Scholarship & ID Card', labelHi: 'छात्रवृत्ति व पहचान पत्र' }
  ];

  const filteredProcedures = allProcedures.filter(proc => {
    const matchesCategory = selectedCategory === 'all' || proc.category === selectedCategory;
    const matchesSearch = !searchTerm || 
      proc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (proc.titleHi && proc.titleHi.toLowerCase().includes(searchTerm.toLowerCase())) ||
      proc.summary.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-dsvv-blue-100 text-dsvv-blue-900 border border-dsvv-blue-200 text-xs font-semibold mb-2">
            <FileCheck size={13} className="text-dsvv-blue-900" />
            <span>Official University Ordinance & Workflow Guides</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-serif font-bold text-dsvv-blue-950">
            {lang === 'en' ? 'Student Procedures & Guidelines' : 'छात्र नियम एवं आधिकारिक प्रक्रियाएं'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            {lang === 'en'
              ? 'Clear step-by-step instructions for leave applications, attendance shortages, certificates, and proctorial queries.'
              : 'अवकाश, उपस्थिति छूट, बोनाफाइड प्रमाण पत्र व प्रशासनिक कार्यों हेतु चरणबद्ध निर्देश।'}
          </p>
        </div>

        <button
          onClick={() => onOpenReport('Student Procedures', 'Procedures Module')}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold border border-slate-200 shadow-2xs self-start md:self-auto"
        >
          <AlertCircle size={14} className="text-amber-500" />
          <span>Report Rule Change</span>
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white p-3 rounded-2xl border border-slate-200 shadow-xs">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-dsvv-blue-900 text-white shadow-xs'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {lang === 'en' ? cat.labelEn : cat.labelHi}
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
            placeholder="Filter procedures..."
            className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-dsvv-blue-900"
          />
        </div>
      </div>

      {/* Procedures List */}
      <div className="space-y-4">
        {filteredProcedures.length > 0 ? (
          filteredProcedures.map((proc) => {
            const isExpanded = expandedId === proc.id;
            return (
              <div 
                key={proc.id}
                className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isExpanded ? 'border-dsvv-blue-900 shadow-md ring-1 ring-dsvv-blue-900/10' : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                {/* Header Card Summary */}
                <div 
                  onClick={() => toggleExpand(proc.id)}
                  className="p-5 sm:p-6 cursor-pointer flex items-start justify-between gap-4"
                >
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-dsvv-blue-50 text-dsvv-blue-900 border border-dsvv-blue-200">
                        {proc.categoryLabel}
                      </span>
                      <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 inline-flex items-center gap-1">
                        <ShieldCheck size={12} className="text-emerald-600" />
                        Verified Ordinance: {proc.officialNoticeRef || 'DSVV Academic Ordinance'}
                      </span>
                      <span className="text-[11px] text-slate-400">
                        Verified {proc.lastVerifiedDate}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-serif font-bold text-dsvv-blue-950">
                      {lang === 'hi' && proc.titleHi ? proc.titleHi : proc.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-4xl">
                      {proc.summary}
                    </p>
                  </div>

                  <div className="p-2 rounded-xl bg-slate-50 text-slate-600 hover:bg-slate-100 shrink-0 mt-1">
                    {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </div>

                {/* Expanded Detailed Breakdown */}
                {isExpanded && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-slate-100 space-y-6 bg-slate-50/50">
                    {/* Eligibility & Documents Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Eligibility */}
                      <div className="bg-white p-4 rounded-xl border border-slate-200">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-dsvv-blue-900 mb-2.5 flex items-center gap-1.5">
                          <CheckCircle2 size={14} className="text-dsvv-gold-600" />
                          <span>Who Is Eligible:</span>
                        </h4>
                        <ul className="text-xs text-slate-700 space-y-1.5">
                          {proc.eligibility?.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0"></span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Required Documents */}
                      <div className="bg-white p-4 rounded-xl border border-slate-200">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-dsvv-blue-900 mb-2.5 flex items-center gap-1.5">
                          <BookmarkCheck size={14} className="text-dsvv-gold-600" />
                          <span>Required Documents / Attachments:</span>
                        </h4>
                        <ul className="text-xs text-slate-700 space-y-1.5">
                          {proc.requiredDocuments?.map((doc, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-dsvv-gold-500 mt-1.5 shrink-0"></span>
                              <span className="font-medium">{doc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Step-by-Step Instructions */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                        Official Step-by-Step Instructions:
                      </h4>
                      <div className="space-y-3">
                        {proc.steps?.map((step) => (
                          <div 
                            key={step.stepNumber} 
                            className="bg-white rounded-xl p-4 border border-slate-200 flex items-start gap-4"
                          >
                            <div className="w-8 h-8 rounded-xl bg-dsvv-blue-900 text-white flex items-center justify-center font-bold text-sm shrink-0">
                              {step.stepNumber}
                            </div>
                            <div className="space-y-1 flex-1">
                              <h5 className="text-sm font-bold text-dsvv-blue-950">
                                {step.title}
                              </h5>
                              <p className="text-xs text-slate-600 leading-relaxed">
                                {step.description}
                              </p>
                              {step.tips && (
                                <p className="text-[11px] text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200/60 inline-block font-medium mt-1">
                                  💡 Note: {step.tips}
                                </p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* YouTube Video Guides if present */}
                    {proc.youtubeVideos && proc.youtubeVideos.length > 0 && (
                      <div className="bg-rose-50/60 border border-rose-200/80 rounded-2xl p-4 space-y-3">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-rose-900 flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-rose-600 animate-pulse"></span>
                            <span>Official YouTube Video Walkthroughs (dsvvtv & guides):</span>
                          </h4>
                          {proc.youtubeChannel && (
                            <a
                              href={proc.youtubeChannel}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs font-semibold text-rose-700 hover:text-rose-900 inline-flex items-center gap-1 bg-white px-2.5 py-1 rounded-lg border border-rose-200 shadow-2xs"
                            >
                              <span>Official Channel @dsvvtv</span>
                              <ExternalLink size={12} />
                            </a>
                          )}
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          {proc.youtubeVideos.map((vid, idx) => (
                            <a
                              key={idx}
                              href={vid.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-white p-3 rounded-xl border border-rose-100 hover:border-rose-300 shadow-2xs hover:shadow-xs transition-all space-y-1 block group"
                            >
                              <div className="font-bold text-xs text-slate-900 group-hover:text-rose-700 flex items-center justify-between">
                                <span className="truncate">{vid.title}</span>
                                <ExternalLink size={12} className="text-rose-500 shrink-0" />
                              </div>
                              <p className="text-[11px] text-slate-500 line-clamp-2">
                                {vid.description}
                              </p>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Office, Timings & Contact Window */}
                    <div className="bg-dsvv-blue-900 text-white rounded-xl p-4 flex flex-wrap items-center justify-between gap-4">
                      <div className="space-y-1">
                        <div className="text-[11px] uppercase tracking-wider text-dsvv-gold-400 font-bold">
                          Responsible Office
                        </div>
                        <div className="text-sm font-bold">
                          {proc.responsibleOffice}
                        </div>
                        <div className="text-xs text-slate-300 flex items-center gap-1.5">
                          <Building size={13} className="text-dsvv-gold-400" />
                          <span>{proc.location}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-xs">
                        <div className="flex items-center gap-1.5">
                          <Mail size={14} className="text-dsvv-gold-400" />
                          <span>{proc.contactEmail}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Phone size={14} className="text-dsvv-gold-400" />
                          <span>{proc.contactPhone}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="bg-white rounded-2xl p-8 border border-slate-200 text-center space-y-2">
            <p className="text-sm text-slate-600 font-medium">No procedures match your search query.</p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchTerm(''); }}
              className="text-xs text-dsvv-blue-900 font-semibold underline"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>

      {/* Important Disclaimer Notice */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-xs text-amber-900 flex items-start gap-3">
        <AlertCircle size={18} className="text-amber-600 shrink-0 mt-0.5" />
        <div>
          <strong className="block font-bold">Important Administrative Notice:</strong>
          DSVV Saarthi is an advisory student platform designed to clarify procedures. It does NOT automatically approve leaves or waive attendance. Students must complete the official physical or university ERP submission with their respective HOD and Dean.
        </div>
      </div>
    </div>
  );
}
