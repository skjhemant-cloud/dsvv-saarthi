import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Award, 
  ExternalLink, 
  ShieldCheck, 
  Tag, 
  Users,
  Search,
  AlertCircle,
  X,
  CheckCircle2,
  Building2
} from 'lucide-react';
import { StorageService } from '../services/storageService';

export default function EventsPage({ lang, onOpenReport }) {
  const allEvents = StorageService.getEvents();
  const [activeTab, setActiveTab] = useState('upcoming'); // upcoming | completed | all
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEventForModal, setSelectedEventForModal] = useState(null);

  const categories = [
    { id: 'all', label: 'All Activities' },
    { id: 'dignitaries', label: 'President / Dignitaries (Mrityunjay)' },
    { id: 'sports', label: 'Sports Department (खेलकूद)' },
    { id: 'animation', label: 'Animation & VFX' },
    { id: 'it-tech', label: 'IT & Hackathons' },
    { id: 'english-literature', label: 'English & Debates' },
    { id: 'workshops', label: 'Yoga & Workshops' }
  ];

  const filteredEvents = allEvents.filter(ev => {
    const matchesTab = activeTab === 'all' || ev.status === activeTab;
    const matchesCategory = selectedCategory === 'all' || ev.category === selectedCategory;
    const matchesSearch = !searchTerm ||
      ev.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (ev.titleHi && ev.titleHi.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (ev.department && ev.department.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (ev.venue && ev.venue.toLowerCase().includes(searchTerm.toLowerCase())) ||
      ev.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ev.organizer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTab && matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 text-purple-900 border border-purple-200 text-xs font-semibold mb-2">
            <Calendar size={13} className="text-purple-700" />
            <span>Campus Activities & Competitions Portal</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-serif font-bold text-dsvv-blue-950">
            {lang === 'en' ? 'Events, Hackathons & Activities' : 'विश्वविद्यालय गतिविधियाँ एवं प्रतियोगिताएं'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            {lang === 'en'
              ? 'Discover departmental competitions, animation/VFX challenges, cultural festivals, and skill workshops.'
              : 'हैकथॉन, पोस्टर निर्माण, एनीमेशन एवं वीएफएक्स प्रतियोगिताएं, और कार्यशालाएं।'}
          </p>
        </div>

        <button
          onClick={() => onOpenReport('University Events', 'Events Module')}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold border border-slate-200 shadow-2xs self-start md:self-auto"
        >
          <AlertCircle size={14} className="text-amber-500" />
          <span>Report Event Change</span>
        </button>
      </div>

      {/* Tabs and Filters */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
        {/* Status Toggle (Upcoming / Completed) */}
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl w-full md:w-auto">
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'upcoming'
                ? 'bg-white text-dsvv-blue-950 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Upcoming Events
          </button>
          <button
            onClick={() => setActiveTab('completed')}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'completed'
                ? 'bg-white text-dsvv-blue-950 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Past Archive
          </button>
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'all'
                ? 'bg-white text-dsvv-blue-950 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            All
          </button>
        </div>

        {/* Category Pills & Search */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          <div className="relative w-full sm:w-64">
            <Search size={16} className="absolute left-3 top-2.5 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search event, organizer..."
              className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-dsvv-blue-900"
            />
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredEvents.map((ev) => (
          <div
            key={ev.id}
            id={ev.id}
            className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 hover:border-purple-300 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-purple-50 text-purple-900 border border-purple-200">
                  {ev.categoryLabel || ev.category}
                </span>
                <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${
                  ev.status === 'upcoming' 
                    ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' 
                    : 'bg-slate-100 text-slate-600 border border-slate-200'
                }`}>
                  {ev.status === 'upcoming' ? '• Registration Open' : '• Event Concluded'}
                </span>
              </div>

              <h3 className="text-xl font-serif font-bold text-dsvv-blue-950 mb-1">
                {lang === 'hi' && ev.titleHi ? ev.titleHi : ev.title}
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                Organized by: <strong className="text-slate-700">{ev.organizer}</strong>
              </p>

              {/* Schedule Info Box */}
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 grid grid-cols-2 gap-3 text-xs mb-4">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">Event Date</span>
                  <div className="font-semibold text-slate-900 flex items-center gap-1.5 mt-0.5">
                    <Calendar size={13} className="text-dsvv-blue-900" />
                    <span>{ev.eventDate}</span>
                  </div>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">Reg. Deadline</span>
                  <div className="font-semibold text-rose-700 flex items-center gap-1.5 mt-0.5">
                    <Clock size={13} />
                    <span>{ev.registrationDeadline}</span>
                  </div>
                </div>
                <div className="col-span-2 pt-2 border-t border-slate-200/60 flex items-center justify-between text-slate-700">
                  <div className="flex items-center gap-1.5 truncate">
                    <MapPin size={13} className="text-dsvv-gold-600 shrink-0" />
                    <span className="font-medium truncate">{ev.venue}</span>
                  </div>
                  {ev.venue && ev.venue.includes('मृत्युंजय सभागार') && (
                    <span className="shrink-0 bg-dsvv-gold-100 text-dsvv-gold-900 text-[10px] font-bold px-2 py-0.5 rounded border border-dsvv-gold-300">
                      🏛️ Main Auditorium
                    </span>
                  )}
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                {ev.description}
              </p>

              {/* Volunteer Opportunities Section if available */}
              {ev.volunteerOpportunities && ev.volunteerOpportunities.length > 0 && (
                <div className="bg-dsvv-blue-50/80 border border-dsvv-blue-200/70 rounded-2xl p-3.5 mb-3 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-dsvv-blue-950 flex items-center gap-1.5">
                      <Users size={14} className="text-dsvv-blue-900" />
                      <span>Student Volunteer Tasks (Mrityunjay Sabhagar):</span>
                    </span>
                    <span className="bg-dsvv-blue-900 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                      Open Calls
                    </span>
                  </div>
                  <ul className="text-[11px] text-slate-700 space-y-1">
                    {ev.volunteerOpportunities.map((vTask, vIdx) => (
                      <li key={vIdx} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-dsvv-gold-500 shrink-0"></span>
                        <span>{vTask}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-[10px] text-dsvv-blue-800 italic pt-1 border-t border-dsvv-blue-200/50">
                    💡 {ev.volunteerInfo}
                  </p>
                </div>
              )}

              {ev.prizes && (
                <div className="flex items-center gap-2 text-xs text-amber-900 bg-amber-50/80 border border-amber-200 rounded-xl p-2.5 mb-2">
                  <Award size={15} className="text-dsvv-gold-600 shrink-0" />
                  <span><strong>Recognition:</strong> {ev.prizes}</span>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-[11px] text-slate-400">
                Verified: {ev.lastUpdated}
              </span>
              {ev.status === 'upcoming' ? (
                <button
                  onClick={() => setSelectedEventForModal(ev)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-dsvv-blue-900 hover:bg-dsvv-blue-800 text-white font-semibold shadow-xs transition-colors"
                >
                  <span>{ev.volunteerOpportunities ? 'Apply as Volunteer' : 'Register / Participate'}</span>
                  <ExternalLink size={13} />
                </button>
              ) : (
                <span className="text-xs text-slate-400 font-medium">Completed</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Registration & Volunteering Guidance Modal */}
      {selectedEventForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-100 space-y-4 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-3">
              <div>
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-dsvv-gold-600 bg-dsvv-gold-50 px-2 py-0.5 rounded-full mb-1">
                  {selectedEventForModal.volunteerOpportunities ? 'Official Volunteering Pathway' : 'Event Registration'}
                </span>
                <h3 className="font-bold text-slate-900 text-base leading-snug">
                  {selectedEventForModal.title}
                </h3>
              </div>
              <button 
                onClick={() => setSelectedEventForModal(null)}
                className="p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              >
                <X size={18} />
              </button>
            </div>

            <div className="space-y-3 text-xs text-slate-700">
              <div className="bg-slate-50 border border-slate-200/70 rounded-2xl p-3.5 space-y-2">
                <div className="flex items-center gap-2 text-dsvv-blue-950 font-bold">
                  <Building2 size={16} className="text-dsvv-gold-600 shrink-0" />
                  <span>Where to Apply / Register:</span>
                </div>
                <p className="font-semibold text-slate-800 pl-6">
                  {selectedEventForModal.registrationBuilding || selectedEventForModal.venue}
                </p>
                <p className="text-[11px] text-slate-600 pl-6">
                  {selectedEventForModal.registrationGuide || "Please visit the designated department desk or contact the event coordinator directly."}
                </p>
              </div>

              {selectedEventForModal.volunteerOpportunities && (
                <div className="bg-dsvv-blue-50/60 border border-dsvv-blue-200/70 rounded-2xl p-3.5 space-y-2">
                  <div className="font-bold text-dsvv-blue-950 flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-dsvv-blue-900" />
                    <span>3 Official Volunteering Pathways:</span>
                  </div>
                  <ul className="list-disc pl-5 space-y-1 text-[11px] text-slate-700">
                    <li><strong>Path 1 (Department HOD):</strong> Submit your name and volunteer registration slip directly to your Department Head.</li>
                    <li><strong>Path 2 (Registrar Office):</strong> Submit at the Student Dealing Desks in the Administrative Block.</li>
                    <li><strong>Path 3 (Culture Department / संस्कृति विभाग):</strong> Submit at the Culture Department desk located in the Administrative Annex.</li>
                  </ul>
                  <p className="text-[10px] text-dsvv-blue-800 italic pt-1 border-t border-dsvv-blue-200/60">
                    * Mandatory rehearsal held at Mrityunjay Sabhagar prior to the ceremonial convocation. White uniform & student RFID card required.
                  </p>
                </div>
              )}

              <div className="space-y-1 text-[11px] text-slate-600 bg-amber-50/70 border border-amber-200/70 rounded-2xl p-3">
                <p className="font-semibold text-amber-900">Mandatory Checklist for Students:</p>
                <p>1. Valid University RFID Student ID Card.</p>
                <p>2. Prescribed university dress code (Kurta-Pyjama/Dhoti for boys, Salwar-Kurta with Dupatta for girls).</p>
                <p>3. Registration deadline: <strong>{selectedEventForModal.registrationDeadline}</strong>.</p>
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setSelectedEventForModal(null)}
                className="px-5 py-2 rounded-xl bg-dsvv-blue-900 hover:bg-dsvv-blue-800 text-white font-semibold text-xs shadow-xs"
              >
                Understood / Got It
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
