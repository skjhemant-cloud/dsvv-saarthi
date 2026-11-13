import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  Compass, 
  Info, 
  Navigation,
  ZoomIn,
  ZoomOut,
  Maximize2
} from 'lucide-react';

export default function InteractiveCampusMap({ onSelectLocation, lang }) {
  const [activeBuildingId, setActiveBuildingId] = useState('shriram_bhawan');
  const [zoomLevel, setZoomLevel] = useState(1);
  const [filterType, setFilterType] = useState('all'); // all | academic | executive | spiritual | dining | amenities

  // Rich campus buildings dataset with coordinates and real details
  const campusZones = [
    {
      id: 'shriram_bhawan',
      nameEn: 'Shriram Bhawan',
      nameHi: 'श्रीराम भवन',
      category: 'executive',
      tag: 'Executive & Creative Hub',
      x: 180,
      y: 90,
      w: 160,
      h: 90,
      color: '#2563eb',
      glowColor: 'rgba(37, 99, 235, 0.5)',
      icon: '🏛️',
      keyOffices: [
        'Vice-Chancellor (VC) Secretariat (1st Floor)',
        'Pro-Vice Chancellor (Pro-VC Dr. Chinmay Pandya Ji - 1st Floor)',
        'Central University Reception & Inquiry (Ground Floor)',
        'Dept of Animation & VFX Labs (Maya/Blender Suites)'
      ],
      description: 'The executive and creative nucleus of DSVV. Features administrative leadership, guest welcoming foyer, and high-end 3D graphics studios.'
    },
    {
      id: 'admin_block',
      nameEn: 'Administrative Block (Karyalaya)',
      nameHi: 'प्रशासनिक भवन',
      category: 'executive',
      tag: 'Student Affairs & Records',
      x: 180,
      y: 290,
      w: 160,
      h: 85,
      color: '#475569',
      glowColor: 'rgba(71, 85, 105, 0.5)',
      icon: '📋',
      keyOffices: [
        'Registrar Office (Ground Floor)',
        'Dean of Academic Affairs & Student Welfare',
        'Controller of Examinations (COE Cell - 1st Floor)',
        'Central Accounts & Fee Clearance Counter'
      ],
      description: 'The operational gateway for bonafide certificates, degree dispatches, admit cards, scholarship submissions, and accounts.'
    },
    {
      id: 'mahakal_mandir',
      nameEn: 'Mahakal Mandir & Akhand Deep',
      nameHi: 'महाकाल मंदिर एवं अखंड ज्योति',
      category: 'spiritual',
      tag: 'Spiritual Center',
      x: 430,
      y: 190,
      w: 120,
      h: 100,
      isCircle: true,
      color: '#d97706',
      glowColor: 'rgba(217, 119, 6, 0.6)',
      icon: '🪔',
      keyOffices: [
        'Sacred Akhand Jyoti (Unbroken Flame since 1926)',
        'Yagyashala & Morning Agnihotra',
        'Daily Sandhya Aarti & Meditation Alcoves'
      ],
      description: 'The holy heartbeat of DSVV, consecrated by Pandit Shriram Sharma Acharya. Focal point of campus spiritual sadhana and unity.'
    },
    {
      id: 'chaitanya_bhawan',
      nameEn: 'Chaitanya Bhawan',
      nameHi: 'चैतन्य भवन',
      category: 'academic',
      tag: 'IT, Media & AI Wing',
      x: 400,
      y: 60,
      w: 160,
      h: 85,
      color: '#7c3aed',
      glowColor: 'rgba(124, 58, 237, 0.5)',
      icon: '💻',
      keyOffices: [
        'Dept of Computer Science & IT (BCA, MCA, B.Sc./M.Sc. CS)',
        'Dept of Journalism & Mass Communication (BJMC/MJMC)',
        'Baltic Studies & International Relations Wing',
        'AI & Machine Learning Innovation Lab'
      ],
      description: 'Hub for technology, high-speed coding labs, media broadcast suites, and international Baltic collaborations.'
    },
    {
      id: 'bhojanalaya_canteen',
      nameEn: 'Maa Anandamayi & Campus Canteen',
      nameHi: 'माँ आनंदमयी भोजनालय व कैंटीन',
      category: 'dining',
      tag: 'Dining & Refreshments',
      x: 400,
      y: 325,
      w: 170,
      h: 90,
      color: '#ea580c',
      glowColor: 'rgba(234, 88, 12, 0.5)',
      icon: '🍲',
      keyOffices: [
        'Maa Anandamayi Bhojanalaya: Sattvik Lunch (11:30-1:45) & Dinner (7:00-8:30)',
        'Campus Canteen: Daily Morning Ankurit Sprouts (₹15–20)',
        'Canteen Snacks: Chole Bhature, Puri Aloo, Chow mein (₹15–30)',
        'Fresh Fruit & Juice Counter (Next to courtyard)'
      ],
      description: 'Complete nutritional center. Notice: Students eat lunch and dinner at the Bhojanalaya mess, and get morning breakfast and snacks at the Canteen.'
    },
    {
      id: 'patel_yoga_bhawan',
      nameEn: 'Sardar Patel & Yoga Bhawan',
      nameHi: 'सरदार पटेल एवं योग भवन',
      category: 'academic',
      tag: 'Central Library & Holistic Therapies',
      x: 630,
      y: 75,
      w: 175,
      h: 95,
      color: '#059669',
      glowColor: 'rgba(5, 150, 105, 0.5)',
      icon: '🧘',
      keyOffices: [
        'Central University Library & Printing Services',
        'Dept of Yogic Science & Human Consciousness',
        'Public Holistic Health OPD (Naturopathy & Panchakarma)',
        'Shatkarma Kriya Detox & Acupressure Center'
      ],
      description: 'Houses 70,000+ library volumes and specialized holistic wellness therapy clinics open to both students and outside public visitors.'
    },
    {
      id: 'mrityunjay_sabhagar',
      nameEn: 'Mrityunjay Sabhagar',
      nameHi: 'मृत्युंजय सभागार',
      category: 'academic',
      tag: 'Conventions & Convocations',
      x: 630,
      y: 300,
      w: 165,
      h: 90,
      color: '#9333ea',
      glowColor: 'rgba(147, 51, 234, 0.5)',
      icon: '🎭',
      keyOffices: [
        '1,500+ Seater Grand Ceremonial Auditorium',
        'VIP Dignitary & Presidential Convocation Stage',
        'Culture Department (संस्कृति विभाग) Volunteer Desk'
      ],
      description: 'The monumental auditorium host to national heads of state, Governors, and student cultural convocations.'
    },
    {
      id: 'student_amenities',
      nameEn: 'Student Amenities & Gaushala',
      nameHi: 'सुविधा केंद्र, गौशाला व सृजना',
      category: 'amenities',
      tag: 'Essential Campus Services',
      x: 825,
      y: 180,
      w: 130,
      h: 110,
      color: '#db2777',
      glowColor: 'rgba(219, 39, 119, 0.5)',
      icon: '🛍️',
      keyOffices: [
        'Stationery Store (Official VC/Registrar application forms)',
        'Uniform Pressing Room (प्रेस करने वाली दीदी)',
        'Srijana Handmade Crafts & Handloom Center',
        'DSVV Indigenous Gaushala & Panchgavya Sanctuary',
        'Thesis & Dissertation Book Binding Center'
      ],
      description: 'All essential lifestyle and academic convenience facilities clustered conveniently for residential students.'
    }
  ];

  const activeZone = campusZones.find(z => z.id === activeBuildingId) || campusZones[0];

  const filteredZones = filterType === 'all' 
    ? campusZones 
    : campusZones.filter(z => z.category === filterType);

  return (
    <div className="bg-slate-900 text-white rounded-3xl border border-slate-800 shadow-2xl overflow-hidden flex flex-col">
      {/* Top Map Control Bar */}
      <div className="p-4 sm:p-6 bg-slate-950/80 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="text-xs uppercase font-bold text-dsvv-gold-400 tracking-wider">
              Interactive Campus Radar & Building Explorer
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-white mt-0.5">
            Dev Sanskriti Vishwavidyalaya Animated Map
          </h2>
          <p className="text-xs text-slate-400">
            Hover over or click any building on the grid to inspect departments, offices, and services.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 bg-slate-900/90 p-1.5 rounded-2xl border border-slate-800">
          {[
            { id: 'all', label: 'All 8 Zones' },
            { id: 'executive', label: 'VC & Admin' },
            { id: 'academic', label: 'Academic Bhawans' },
            { id: 'spiritual', label: 'Mahakal Mandir' },
            { id: 'dining', label: 'Mess & Canteen' },
            { id: 'amenities', label: 'Amenities' }
          ].map(f => (
            <button
              key={f.id}
              onClick={() => setFilterType(f.id)}
              className={`px-3 py-1 rounded-xl text-[11px] font-bold transition-all ${
                filterType === f.id
                  ? 'bg-dsvv-gold-500 text-dsvv-blue-950 shadow-xs scale-105'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Map Canvas Area */}
      <div className="relative bg-slate-950 min-h-[460px] overflow-hidden flex items-center justify-center p-2 sm:p-6">
        {/* Subtle Background Grid */}
        <div 
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#38bdf8 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />

        {/* SVG Interactive Canvas */}
        <div 
          className="w-full max-w-5xl transition-transform duration-300 relative"
          style={{ transform: `scale(${zoomLevel})` }}
        >
          <svg 
            viewBox="0 0 1000 480" 
            className="w-full h-auto select-none overflow-visible filter drop-shadow-xl"
          >
            {/* Grand Campus Walkways (Avenues) */}
            <path 
              d="M 60 235 L 940 235" 
              stroke="#1e293b" 
              strokeWidth="28" 
              strokeLinecap="round" 
            />
            <path 
              d="M 60 235 L 940 235" 
              stroke="#334155" 
              strokeWidth="4" 
              strokeDasharray="12 12" 
              strokeLinecap="round" 
            />

            {/* North-South Cross Avenues */}
            <path d="M 260 40 L 260 430" stroke="#1e293b" strokeWidth="22" strokeLinecap="round" />
            <path d="M 485 40 L 485 430" stroke="#1e293b" strokeWidth="22" strokeLinecap="round" />
            <path d="M 715 40 L 715 430" stroke="#1e293b" strokeWidth="22" strokeLinecap="round" />

            {/* Main Security Check Entrance Gate */}
            <g transform="translate(40, 195)" className="cursor-pointer">
              <rect width="85" height="80" rx="14" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
              <text x="42" y="36" textAnchor="middle" fill="#38bdf8" fontSize="18">⛩️</text>
              <text x="42" y="54" textAnchor="middle" fill="#e0f2fe" fontSize="10" fontWeight="bold">Main Gate</text>
              <text x="42" y="68" textAnchor="middle" fill="#94a3b8" fontSize="8.5">Entry / Security</text>
            </g>

            {/* Interactive Campus Buildings */}
            {filteredZones.map((zone) => {
              const isSelected = activeBuildingId === zone.id;

              return (
                <g 
                  key={zone.id}
                  onClick={() => setActiveBuildingId(zone.id)}
                  onMouseEnter={() => setActiveBuildingId(zone.id)}
                  className="cursor-pointer transition-all duration-300"
                  style={{ transformOrigin: `${zone.x + zone.w / 2}px ${zone.y + zone.h / 2}px` }}
                >
                  {/* Glow Shadow when selected */}
                  {isSelected && (
                    <rect 
                      x={zone.x - 6} 
                      y={zone.y - 6} 
                      width={zone.w + 12} 
                      height={zone.h + 12} 
                      rx="18" 
                      fill="none" 
                      stroke="#f59e0b" 
                      strokeWidth="3.5"
                      className="animate-pulse"
                    />
                  )}

                  {/* Building Block */}
                  <rect 
                    x={zone.x} 
                    y={zone.y} 
                    width={zone.w} 
                    height={zone.h} 
                    rx="14" 
                    fill={isSelected ? '#1e293b' : '#0f172a'}
                    stroke={isSelected ? '#f59e0b' : zone.color}
                    strokeWidth={isSelected ? 3 : 2}
                    className="hover:filter hover:brightness-125 transition-all"
                  />

                  {/* Building Header Icon & Badge */}
                  <rect 
                    x={zone.x + 8} 
                    y={zone.y + 8} 
                    width={26} 
                    height={26} 
                    rx="8" 
                    fill={zone.color} 
                    fillOpacity="0.25"
                  />
                  <text 
                    x={zone.x + 21} 
                    y={zone.y + 26} 
                    textAnchor="middle" 
                    fontSize="14"
                  >
                    {zone.icon}
                  </text>

                  {/* Building Title */}
                  <text 
                    x={zone.x + 40} 
                    y={zone.y + 25} 
                    fill={isSelected ? '#fef08a' : '#ffffff'} 
                    fontSize="11.5" 
                    fontWeight="bold"
                  >
                    {zone.nameEn.length > 17 ? zone.nameEn.slice(0, 16) + '…' : zone.nameEn}
                  </text>

                  {/* Tagline */}
                  <text 
                    x={zone.x + 12} 
                    y={zone.y + 48} 
                    fill="#cbd5e1" 
                    fontSize="9" 
                    fontWeight="500"
                  >
                    {zone.tag}
                  </text>

                  {/* Interactive Pulse Pin */}
                  <circle 
                    cx={zone.x + zone.w - 16} 
                    cy={zone.y + 16} 
                    r="4" 
                    fill={isSelected ? '#f59e0b' : '#10b981'} 
                    className={isSelected ? 'animate-ping' : ''}
                  />

                  {/* Hover indicator pill */}
                  <rect 
                    x={zone.x + 10} 
                    y={zone.y + zone.h - 22} 
                    width={zone.w - 20} 
                    height="14" 
                    rx="5" 
                    fill={isSelected ? '#f59e0b' : '#1e293b'} 
                  />
                  <text 
                    x={zone.x + zone.w / 2} 
                    y={zone.y + zone.h - 12} 
                    textAnchor="middle" 
                    fill={isSelected ? '#0c2340' : '#94a3b8'} 
                    fontSize="8" 
                    fontWeight="bold"
                  >
                    {isSelected ? 'ACTIVE VIEWING' : 'CLICK / HOVER'}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Zoom Controls Overlay */}
        <div className="absolute bottom-4 right-4 flex items-center gap-1.5 bg-slate-900/90 p-1.5 rounded-xl border border-slate-800 shadow-lg">
          <button
            onClick={() => setZoomLevel(prev => Math.min(prev + 0.15, 1.4))}
            className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg"
            title="Zoom In"
          >
            <ZoomIn size={15} />
          </button>
          <button
            onClick={() => setZoomLevel(1)}
            className="px-2 py-0.5 text-[10px] font-bold text-slate-400 hover:text-white"
          >
            Reset
          </button>
          <button
            onClick={() => setZoomLevel(prev => Math.max(prev - 0.15, 0.85))}
            className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg"
            title="Zoom Out"
          >
            <ZoomOut size={15} />
          </button>
        </div>
      </div>

      {/* Selected Building Details Drawer */}
      <div className="p-6 bg-slate-950/95 border-t border-slate-800 grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fadeIn">
        <div className="lg:col-span-1 space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{activeZone.icon}</span>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-dsvv-gold-400">
                {activeZone.tag}
              </span>
              <h3 className="text-xl font-serif font-bold text-white">
                {activeZone.nameEn}
              </h3>
              <p className="text-xs text-slate-400">{activeZone.nameHi}</p>
            </div>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed pt-1">
            {activeZone.description}
          </p>
        </div>

        {/* Key Offices & Facilities in this zone */}
        <div className="lg:col-span-2 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
              <Navigation size={13} className="text-dsvv-gold-400" />
              <span>Key Offices, Facilities & Services Located Here:</span>
            </span>
            <span className="text-[11px] text-emerald-400 font-semibold">
              ✓ Ground-Verified DSVV Layout
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
            {activeZone.keyOffices.map((office, i) => (
              <div 
                key={i}
                className="bg-slate-900/90 border border-slate-800 hover:border-dsvv-gold-500/50 rounded-xl p-2.5 text-xs text-slate-200 flex items-start gap-2 transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-dsvv-gold-400 mt-1.5 shrink-0"></span>
                <span className="font-medium">{office}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
