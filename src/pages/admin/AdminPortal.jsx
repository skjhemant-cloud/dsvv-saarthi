import React, { useState } from 'react';
import { 
  Shield, 
  Lock, 
  UserCheck, 
  LogOut, 
  Utensils, 
  FileText, 
  MapPin, 
  Calendar, 
  History, 
  AlertTriangle, 
  Plus, 
  Edit3, 
  Trash2, 
  Save, 
  Download, 
  RefreshCw, 
  CheckCircle,
  Eye,
  Key,
  Database
} from 'lucide-react';
import { StorageService } from '../../services/storageService';
import { SEED_USERS } from '../../data/seedData';

export default function AdminPortal({ lang }) {
  const [currentUser, setCurrentUser] = useState(StorageService.getCurrentUser());
  const [loginEmail, setLoginEmail] = useState('admin@dsvv.ac.in');
  const [loginPassword, setLoginPassword] = useState('saarthi@2026');
  const [loginError, setLoginError] = useState('');

  // Admin tabs: mess | procedures | locations | events | reports | audit | backup
  const [activeAdminTab, setActiveAdminTab] = useState('mess');

  // State caches for reactive UI
  const [messMenus, setMessMenus] = useState(StorageService.getMessMenus());
  const [procedures, setProcedures] = useState(StorageService.getProcedures());
  const [locations, setLocations] = useState(StorageService.getLocations());
  const [events, setEvents] = useState(StorageService.getEvents());
  const [reports, setReports] = useState(StorageService.getReports());
  const [auditLogs, setAuditLogs] = useState(StorageService.getAuditLogs());

  // Editing state for Mess Menu
  const [editingDate, setEditingDate] = useState(new Date().toISOString().split('T')[0]);
  const [editingMeal, setEditingMeal] = useState('breakfast');
  const [mealTitle, setMealTitle] = useState('');
  const [mealItems, setMealItems] = useState('');
  const [mealTiming, setMealTiming] = useState('');
  const [mealSpecial, setMealSpecial] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  // Modal / Form state for new procedure
  const [isProcFormOpen, setIsProcFormOpen] = useState(false);
  const [procFormData, setProcFormData] = useState({
    title: '',
    titleHi: '',
    category: 'attendance',
    categoryLabel: 'Attendance & Academics',
    responsibleOffice: '',
    location: '',
    summary: '',
    officialNoticeRef: '',
    requiredDocuments: '',
    step1Title: '',
    step1Desc: '',
    step2Title: '',
    step2Desc: '',
    contactEmail: 'attendance@dsvv.ac.in',
    contactPhone: '01334-261303 Ext 104'
  });

  // Modal for new event
  const [isEventFormOpen, setIsEventFormOpen] = useState(false);
  const [eventFormData, setEventFormData] = useState({
    title: '',
    category: 'hackathons',
    organizer: '',
    eventDate: '',
    registrationDeadline: '',
    venue: '',
    description: '',
    prizes: ''
  });

  // Modal for new location
  const [isLocFormOpen, setIsLocFormOpen] = useState(false);
  const [locFormData, setLocFormData] = useState({
    nameEn: '',
    nameHi: '',
    category: 'academic',
    categoryLabel: 'Academic & Labs',
    building: '',
    floor: 'Ground Floor',
    timings: '09:00 AM – 06:00 PM',
    description: '',
    directions: '',
    contact: ''
  });

  const handleLogin = (e) => {
    e.preventDefault();
    setLoginError('');
    const res = StorageService.login(loginEmail, loginPassword);
    if (res.success) {
      setCurrentUser(res.user);
      setAuditLogs(StorageService.getAuditLogs());
    } else {
      setLoginError(res.error);
    }
  };

  const handleLogout = () => {
    StorageService.logout();
    setCurrentUser(null);
  };

  const notifySuccess = (msg) => {
    setSuccessMsg(msg);
    setTimeout(() => setSuccessMsg(''), 3500);
  };

  // 1. Mess Menu Update Handler
  const handleSaveMessMenu = (e) => {
    e.preventDefault();
    const existing = StorageService.getMenuByDate(editingDate) || {
      date: editingDate,
      meals: {
        breakfast: { title: '', timing: '07:30 AM – 08:45 AM', items: [], special: '' },
        lunch: { title: '', timing: '12:00 PM – 01:45 PM', items: [], special: '' },
        dinner: { title: '', timing: '07:00 PM – 08:30 PM', items: [], special: '' }
      }
    };

    const updatedItems = mealItems.split(',').map(s => s.trim()).filter(Boolean);

    existing.meals[editingMeal] = {
      ...existing.meals[editingMeal],
      title: mealTitle || existing.meals[editingMeal].title,
      items: updatedItems.length > 0 ? updatedItems : existing.meals[editingMeal].items,
      timing: mealTiming || existing.meals[editingMeal].timing,
      special: mealSpecial || existing.meals[editingMeal].special,
      isSattvik: true
    };

    StorageService.saveMessMenu(existing);
    setMessMenus(StorageService.getMessMenus());
    setAuditLogs(StorageService.getAuditLogs());
    notifySuccess(`Updated ${editingMeal.toUpperCase()} for ${editingDate}`);
  };

  // 2. Procedure Handlers
  const handleCreateProcedure = (e) => {
    e.preventDefault();
    const newProc = {
      title: procFormData.title,
      titleHi: procFormData.titleHi || procFormData.title,
      category: procFormData.category,
      categoryLabel: procFormData.categoryLabel,
      responsibleOffice: procFormData.responsibleOffice,
      location: procFormData.location,
      summary: procFormData.summary,
      officialNoticeRef: procFormData.officialNoticeRef,
      requiredDocuments: procFormData.requiredDocuments.split('\n').filter(Boolean),
      eligibility: ["Regular enrolled students of DSVV Haridwar"],
      steps: [
        {
          stepNumber: 1,
          title: procFormData.step1Title || "Application Submission",
          description: procFormData.step1Desc || "Submit formal application with supporting documents."
        },
        {
          stepNumber: 2,
          title: procFormData.step2Title || "Verification & Approval",
          description: procFormData.step2Desc || "Department Dean verifies and stamps clearance."
        }
      ],
      contactEmail: procFormData.contactEmail,
      contactPhone: procFormData.contactPhone,
      verificationStatus: "verified"
    };

    StorageService.saveProcedure(newProc);
    setProcedures(StorageService.getProcedures());
    setAuditLogs(StorageService.getAuditLogs());
    setIsProcFormOpen(false);
    notifySuccess(`Procedure "${newProc.title}" created successfully.`);
  };

  const handleDeleteProcedure = (id) => {
    if (window.confirm("Are you sure you want to remove this official procedure?")) {
      StorageService.deleteProcedure(id);
      setProcedures(StorageService.getProcedures());
      setAuditLogs(StorageService.getAuditLogs());
      notifySuccess("Procedure removed.");
    }
  };

  // 3. Event Handlers
  const handleCreateEvent = (e) => {
    e.preventDefault();
    const newEv = {
      title: eventFormData.title,
      titleHi: eventFormData.title,
      category: eventFormData.category,
      organizer: eventFormData.organizer,
      eventDate: eventFormData.eventDate,
      registrationDeadline: eventFormData.registrationDeadline,
      venue: eventFormData.venue,
      description: eventFormData.description,
      prizes: eventFormData.prizes,
      status: "upcoming"
    };
    StorageService.saveEvent(newEv);
    setEvents(StorageService.getEvents());
    setAuditLogs(StorageService.getAuditLogs());
    setIsEventFormOpen(false);
    notifySuccess(`Event "${newEv.title}" published.`);
  };

  const handleDeleteEvent = (id) => {
    if (window.confirm("Delete this event?")) {
      StorageService.deleteEvent(id);
      setEvents(StorageService.getEvents());
      setAuditLogs(StorageService.getAuditLogs());
      notifySuccess("Event deleted.");
    }
  };

  // 4. Location Handlers
  const handleCreateLocation = (e) => {
    e.preventDefault();
    const newLoc = {
      nameEn: locFormData.nameEn,
      nameHi: locFormData.nameHi || locFormData.nameEn,
      category: locFormData.category,
      categoryLabel: locFormData.categoryLabel,
      building: locFormData.building,
      floor: locFormData.floor,
      timings: locFormData.timings,
      description: locFormData.description,
      directions: locFormData.directions,
      contact: locFormData.contact,
      isVerified: true
    };
    StorageService.saveLocation(newLoc);
    setLocations(StorageService.getLocations());
    setAuditLogs(StorageService.getAuditLogs());
    setIsLocFormOpen(false);
    notifySuccess(`Location "${newLoc.nameEn}" added.`);
  };

  const handleDeleteLocation = (id) => {
    if (window.confirm("Delete this campus facility record?")) {
      StorageService.deleteLocation(id);
      setLocations(StorageService.getLocations());
      setAuditLogs(StorageService.getAuditLogs());
      notifySuccess("Location removed.");
    }
  };

  // 5. Report Discrepancy Status Update
  const handleUpdateReportStatus = (reportId, newStatus) => {
    StorageService.updateReportStatus(reportId, newStatus);
    setReports(StorageService.getReports());
    setAuditLogs(StorageService.getAuditLogs());
    notifySuccess(`Report status updated to ${newStatus}.`);
  };

  // 6. JSON Backup Export
  const handleExportBackup = () => {
    const backupData = {
      app: "DSVV Saarthi",
      exportDate: new Date().toISOString(),
      mess: StorageService.getMessMenus(),
      procedures: StorageService.getProcedures(),
      locations: StorageService.getLocations(),
      events: StorageService.getEvents(),
      auditLogs: StorageService.getAuditLogs()
    };
    const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `dsvv_saarthi_backup_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    notifySuccess("Database JSON backup exported.");
  };

  const handleResetDefaults = () => {
    if (window.confirm("Reset all local records to initial verified DSVV seed data?")) {
      StorageService.resetToDefaults();
      setMessMenus(StorageService.getMessMenus());
      setProcedures(StorageService.getProcedures());
      setLocations(StorageService.getLocations());
      setEvents(StorageService.getEvents());
      setReports(StorageService.getReports());
      setAuditLogs(StorageService.getAuditLogs());
      notifySuccess("Database reset to initial verified defaults.");
    }
  };

  // IF NOT LOGGED IN: Render Login Screen with 1-click Demo credentials
  if (!currentUser) {
    return (
      <div className="max-w-md mx-auto py-16 px-4 animate-fadeIn">
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl space-y-6">
          <div className="text-center space-y-2">
            <div className="w-14 h-14 bg-dsvv-blue-900 text-dsvv-gold-400 rounded-2xl flex items-center justify-center mx-auto shadow-md">
              <Shield size={28} />
            </div>
            <h2 className="text-2xl font-serif font-bold text-dsvv-blue-950">
              Staff & Editor Portal
            </h2>
            <p className="text-xs text-slate-500">
              Authorized access for Dev Sanskriti Vishwavidyalaya content administrators and student representatives.
            </p>
          </div>

          {loginError && (
            <div className="bg-rose-50 border border-rose-200 text-rose-800 text-xs p-3 rounded-xl flex items-center gap-2">
              <AlertTriangle size={15} className="shrink-0" />
              <span>{loginError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Official Email Address
              </label>
              <input
                type="email"
                required
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-dsvv-blue-900"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Security Password
              </label>
              <input
                type="password"
                required
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-dsvv-blue-900"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 bg-dsvv-blue-900 hover:bg-dsvv-blue-800 text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md transition-colors"
            >
              Authenticate & Enter Dashboard
            </button>
          </form>

          {/* 1-Click Role Switcher for Portfolio Demonstration */}
          <div className="pt-4 border-t border-slate-100 space-y-2">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block text-center">
              Demonstration Role Accounts (Zero Cost)
            </span>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => {
                  setLoginEmail('admin@dsvv.ac.in');
                  setLoginPassword('saarthi@2026');
                }}
                className="p-2 text-left bg-slate-50 hover:bg-dsvv-gold-50 border border-slate-200 hover:border-dsvv-gold-400 rounded-xl text-[11px] transition-colors"
              >
                <strong className="block text-dsvv-blue-950">Main Admin</strong>
                <span className="text-slate-500">Full system control</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setLoginEmail('editor.mess@dsvv.ac.in');
                  setLoginPassword('mess@2026');
                }}
                className="p-2 text-left bg-slate-50 hover:bg-dsvv-gold-50 border border-slate-200 hover:border-dsvv-gold-400 rounded-xl text-[11px] transition-colors"
              >
                <strong className="block text-dsvv-blue-950">Student Editor</strong>
                <span className="text-slate-500">Mess & events editor</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // LOGGED IN DASHBOARD
  const isMainAdmin = currentUser.role === 'main_admin';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fadeIn">
      {/* Dashboard Top Header */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-dsvv-blue-900 text-dsvv-gold-400 flex items-center justify-center font-bold text-lg font-serif shadow-xs">
            {isMainAdmin ? 'A' : 'E'}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-serif font-bold text-dsvv-blue-950">
                {currentUser.fullName}
              </h1>
              <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                isMainAdmin 
                  ? 'bg-amber-100 text-amber-900 border border-amber-300' 
                  : 'bg-blue-100 text-blue-900 border border-blue-300'
              }`}>
                {isMainAdmin ? 'Main Administrator (Full Access)' : 'Student Editor (Restricted)'}
              </span>
            </div>
            <p className="text-xs text-slate-500">
              {currentUser.department} • {currentUser.email}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleExportBackup}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold border border-slate-200"
            title="Download JSON Database Backup"
          >
            <Download size={14} />
            <span>Export Backup</span>
          </button>
          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-semibold border border-rose-200"
          >
            <LogOut size={14} />
            <span>End Session</span>
          </button>
        </div>
      </div>

      {/* Success Notification Alert */}
      {successMsg && (
        <div className="bg-emerald-50 border border-emerald-300 text-emerald-900 p-3.5 rounded-2xl flex items-center gap-2 text-xs font-semibold shadow-xs">
          <CheckCircle size={16} className="text-emerald-600" />
          <span>{successMsg}</span>
        </div>
      )}

      {/* Navigation Tabs for Admin Modules */}
      <div className="flex flex-wrap items-center gap-1.5 border-b border-slate-200 pb-2">
        <button
          onClick={() => setActiveAdminTab('mess')}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
            activeAdminTab === 'mess' ? 'bg-dsvv-blue-900 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <Utensils size={14} />
          <span>Mess Menus</span>
        </button>

        {isMainAdmin && (
          <button
            onClick={() => setActiveAdminTab('procedures')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
              activeAdminTab === 'procedures' ? 'bg-dsvv-blue-900 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <FileText size={14} />
            <span>Procedures & Rules</span>
          </button>
        )}

        {isMainAdmin && (
          <button
            onClick={() => setActiveAdminTab('locations')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
              activeAdminTab === 'locations' ? 'bg-dsvv-blue-900 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <MapPin size={14} />
            <span>Campus Directory</span>
          </button>
        )}

        <button
          onClick={() => setActiveAdminTab('events')}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
            activeAdminTab === 'events' ? 'bg-dsvv-blue-900 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <Calendar size={14} />
          <span>Events & Contests</span>
        </button>

        <button
          onClick={() => setActiveAdminTab('reports')}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all relative ${
            activeAdminTab === 'reports' ? 'bg-dsvv-blue-900 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <AlertTriangle size={14} />
          <span>Student Reports</span>
          {reports.filter(r => r.status === 'pending').length > 0 && (
            <span className="w-2 h-2 rounded-full bg-rose-500"></span>
          )}
        </button>

        <button
          onClick={() => setActiveAdminTab('audit')}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
            activeAdminTab === 'audit' ? 'bg-dsvv-blue-900 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <History size={14} />
          <span>Audit Trail ({auditLogs.length})</span>
        </button>

        <button
          onClick={() => setActiveAdminTab('database')}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
            activeAdminTab === 'database' ? 'bg-dsvv-blue-900 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <Database size={14} />
          <span>Database & Backup</span>
        </button>
      </div>

      {/* ----------------- TAB 1: MESS MENU MANAGER ----------------- */}
      {activeAdminTab === 'mess' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center gap-2 text-dsvv-blue-950 font-serif font-bold text-base">
              <Utensils size={18} className="text-dsvv-gold-600" />
              <span>Update Meal Entry</span>
            </div>
            <form onSubmit={handleSaveMessMenu} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Target Date</label>
                <input
                  type="date"
                  required
                  value={editingDate}
                  onChange={(e) => setEditingDate(e.target.value)}
                  className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-800"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Meal Period</label>
                <select
                  value={editingMeal}
                  onChange={(e) => setEditingMeal(e.target.value)}
                  className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-800 font-semibold"
                >
                  <option value="breakfast">Breakfast (प्रातः नाश्ता)</option>
                  <option value="lunch">Lunch (दोपहर भोजन)</option>
                  <option value="dinner">Dinner (संध्या भोजन)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Meal Headline / Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Poha Sprouts or Rajma Chawal"
                  value={mealTitle}
                  onChange={(e) => setMealTitle(e.target.value)}
                  className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-800"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Dishes & Items (Comma-separated)</label>
                <textarea
                  rows={3}
                  required
                  placeholder="e.g. Rajma Masala, Steamed Basmati Rice, Gobi Sabzi, Boondi Raita, Rotis"
                  value={mealItems}
                  onChange={(e) => setMealItems(e.target.value)}
                  className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-800"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Dining Hours</label>
                <input
                  type="text"
                  placeholder="e.g. 12:00 PM – 01:45 PM"
                  value={mealTiming}
                  onChange={(e) => setMealTiming(e.target.value)}
                  className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-800"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Dietary / Purity Note</label>
                <input
                  type="text"
                  placeholder="e.g. 100% Sattvik - Zero onion & garlic"
                  value={mealSpecial}
                  onChange={(e) => setMealSpecial(e.target.value)}
                  className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-800"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-dsvv-blue-900 hover:bg-dsvv-blue-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-xs transition-colors"
              >
                Publish Menu Record
              </button>
            </form>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-serif font-bold text-slate-800 text-sm">
              Live Verified Mess Records in Local Database
            </h3>
            {messMenus.map((m) => (
              <div key={m.id} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-3">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <div className="font-bold text-sm text-dsvv-blue-950">
                    Schedule for {m.date}
                  </div>
                  <span className="text-[11px] text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200 font-medium">
                    Verified by {m.verifiedBy}
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <strong className="block text-slate-900 mb-1">Breakfast ({m.meals?.breakfast?.timing})</strong>
                    <span className="text-slate-600">{m.meals?.breakfast?.items?.join(', ')}</span>
                  </div>
                  <div className="p-3 bg-amber-50/60 rounded-xl border border-amber-200/60">
                    <strong className="block text-amber-950 mb-1">Lunch ({m.meals?.lunch?.timing})</strong>
                    <span className="text-amber-900">{m.meals?.lunch?.items?.join(', ')}</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <strong className="block text-slate-900 mb-1">Dinner ({m.meals?.dinner?.timing})</strong>
                    <span className="text-slate-600">{m.meals?.dinner?.items?.join(', ')}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ----------------- TAB 2: PROCEDURES MANAGER ----------------- */}
      {activeAdminTab === 'procedures' && isMainAdmin && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-serif font-bold text-dsvv-blue-950 text-lg">
              Official University Student Procedures ({procedures.length})
            </h3>
            <button
              onClick={() => setIsProcFormOpen(!isProcFormOpen)}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-dsvv-blue-900 hover:bg-dsvv-blue-800 text-white rounded-xl text-xs font-semibold shadow-xs"
            >
              <Plus size={14} />
              <span>Register New Official Procedure</span>
            </button>
          </div>

          {/* New Procedure Form Modal / Drawer */}
          {isProcFormOpen && (
            <form onSubmit={handleCreateProcedure} className="bg-white p-6 rounded-3xl border-2 border-dsvv-blue-900 shadow-lg space-y-4 animate-fadeIn">
              <h4 className="font-serif font-bold text-dsvv-blue-950 text-base">New Procedure Specifications</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Procedure Title (English)</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Application for Semester Examination Retotaling"
                    value={procFormData.title}
                    onChange={(e) => setProcFormData({...procFormData, title: e.target.value})}
                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Category</label>
                  <select
                    value={procFormData.category}
                    onChange={(e) => setProcFormData({...procFormData, category: e.target.value, categoryLabel: e.target.value.toUpperCase()})}
                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 font-semibold"
                  >
                    <option value="attendance">Attendance & Academics</option>
                    <option value="hostel">Hostel & Outpass</option>
                    <option value="documents">Official Documents</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Responsible Office</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Office of the Controller of Examinations"
                    value={procFormData.responsibleOffice}
                    onChange={(e) => setProcFormData({...procFormData, responsibleOffice: e.target.value})}
                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Physical Location / Room</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Administrative Block, Room 201"
                    value={procFormData.location}
                    onChange={(e) => setProcFormData({...procFormData, location: e.target.value})}
                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Brief Overview Summary</label>
                  <textarea
                    rows={2}
                    required
                    placeholder="Clear 1-2 sentence description for students"
                    value={procFormData.summary}
                    onChange={(e) => setProcFormData({...procFormData, summary: e.target.value})}
                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl p-2.5"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Required Documents (One per line)</label>
                  <textarea
                    rows={3}
                    placeholder="Marksheet photocopy&#10;Fee receipt&#10;Student ID card"
                    value={procFormData.requiredDocuments}
                    onChange={(e) => setProcFormData({...procFormData, requiredDocuments: e.target.value})}
                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl p-2.5 font-mono"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsProcFormOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-dsvv-blue-900 hover:bg-dsvv-blue-800 rounded-xl"
                >
                  Save & Publish Procedure
                </button>
              </div>
            </form>
          )}

          <div className="space-y-3">
            {procedures.map((proc) => (
              <div key={proc.id} className="bg-white p-5 rounded-2xl border border-slate-200 flex items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-dsvv-blue-50 text-dsvv-blue-900 border border-dsvv-blue-200">
                      {proc.categoryLabel}
                    </span>
                    <span className="text-xs text-slate-400">
                      Ref: {proc.officialNoticeRef || 'University Ordinance'}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-dsvv-blue-950 font-serif">
                    {proc.title}
                  </h4>
                  <p className="text-xs text-slate-500">
                    Office: {proc.responsibleOffice} ({proc.location}) • Last verified: {proc.lastVerifiedDate}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleDeleteProcedure(proc.id)}
                    className="p-2 text-slate-400 hover:text-rose-600 rounded-xl hover:bg-rose-50"
                    title="Delete procedure"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ----------------- TAB 3: CAMPUS DIRECTORY MANAGER ----------------- */}
      {activeAdminTab === 'locations' && isMainAdmin && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-serif font-bold text-dsvv-blue-950 text-lg">
              Campus Locations & Facilities ({locations.length})
            </h3>
            <button
              onClick={() => setIsLocFormOpen(!isLocFormOpen)}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-dsvv-blue-900 hover:bg-dsvv-blue-800 text-white rounded-xl text-xs font-semibold shadow-xs"
            >
              <Plus size={14} />
              <span>Add Facility Location</span>
            </button>
          </div>

          {isLocFormOpen && (
            <form onSubmit={handleCreateLocation} className="bg-white p-6 rounded-3xl border-2 border-dsvv-blue-900 shadow-lg space-y-4 animate-fadeIn">
              <h4 className="font-serif font-bold text-dsvv-blue-950 text-base">Facility Details</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Facility Name (English)</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Yagyashala Complex"
                    value={locFormData.nameEn}
                    onChange={(e) => setLocFormData({...locFormData, nameEn: e.target.value})}
                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Building / Quadrangle</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Mahakal Mandir Boulevard"
                    value={locFormData.building}
                    onChange={(e) => setLocFormData({...locFormData, building: e.target.value})}
                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Timings</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 05:30 AM – 08:00 PM"
                    value={locFormData.timings}
                    onChange={(e) => setLocFormData({...locFormData, timings: e.target.value})}
                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Walking Directions / Landmark</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. East flank facing the central lawns"
                    value={locFormData.directions}
                    onChange={(e) => setLocFormData({...locFormData, directions: e.target.value})}
                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2"
                  />
                </div>
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsLocFormOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-dsvv-blue-900 hover:bg-dsvv-blue-800 rounded-xl"
                >
                  Save Facility
                </button>
              </div>
            </form>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {locations.map((loc) => (
              <div key={loc.id} className="bg-white p-5 rounded-2xl border border-slate-200 flex items-start justify-between gap-3">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-700 mb-1 inline-block">
                    {loc.categoryLabel}
                  </span>
                  <h4 className="text-base font-bold text-dsvv-blue-950 font-serif">
                    {loc.nameEn}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {loc.building} • {loc.timings}
                  </p>
                  <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                    {loc.directions}
                  </p>
                </div>
                <button
                  onClick={() => handleDeleteLocation(loc.id)}
                  className="p-2 text-slate-400 hover:text-rose-600 rounded-xl hover:bg-rose-50 shrink-0"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ----------------- TAB 4: EVENTS MANAGER ----------------- */}
      {activeAdminTab === 'events' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-serif font-bold text-dsvv-blue-950 text-lg">
              Campus Competitions & Activities ({events.length})
            </h3>
            <button
              onClick={() => setIsEventFormOpen(!isEventFormOpen)}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-dsvv-blue-900 hover:bg-dsvv-blue-800 text-white rounded-xl text-xs font-semibold shadow-xs"
            >
              <Plus size={14} />
              <span>Create Event Listing</span>
            </button>
          </div>

          {isEventFormOpen && (
            <form onSubmit={handleCreateEvent} className="bg-white p-6 rounded-3xl border-2 border-dsvv-blue-900 shadow-lg space-y-4 animate-fadeIn">
              <h4 className="font-serif font-bold text-dsvv-blue-950 text-base">New Activity Information</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Event Title</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Inter-Hostel Vedic Quiz League"
                    value={eventFormData.title}
                    onChange={(e) => setEventFormData({...eventFormData, title: e.target.value})}
                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Category</label>
                  <select
                    value={eventFormData.category}
                    onChange={(e) => setEventFormData({...eventFormData, category: e.target.value})}
                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 font-semibold"
                  >
                    <option value="hackathons">Hackathons & Tech</option>
                    <option value="poster-making">Poster Making</option>
                    <option value="workshops">Workshops & Yoga</option>
                    <option value="photography">Photography & Animation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Organizing Department</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dept. of Computer Science"
                    value={eventFormData.organizer}
                    onChange={(e) => setEventFormData({...eventFormData, organizer: e.target.value})}
                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Venue</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Saraswati Bhawan Auditorium"
                    value={eventFormData.venue}
                    onChange={(e) => setEventFormData({...eventFormData, venue: e.target.value})}
                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Event Date</label>
                  <input
                    type="date"
                    required
                    value={eventFormData.eventDate}
                    onChange={(e) => setEventFormData({...eventFormData, eventDate: e.target.value})}
                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Registration Deadline</label>
                  <input
                    type="date"
                    required
                    value={eventFormData.registrationDeadline}
                    onChange={(e) => setEventFormData({...eventFormData, registrationDeadline: e.target.value})}
                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Description</label>
                  <textarea
                    rows={2}
                    required
                    placeholder="Event objectives and guidelines"
                    value={eventFormData.description}
                    onChange={(e) => setEventFormData({...eventFormData, description: e.target.value})}
                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl p-2.5"
                  />
                </div>
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsEventFormOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-dsvv-blue-900 hover:bg-dsvv-blue-800 rounded-xl"
                >
                  Publish Event
                </button>
              </div>
            </form>
          )}

          <div className="space-y-3">
            {events.map((ev) => (
              <div key={ev.id} className="bg-white p-5 rounded-2xl border border-slate-200 flex items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-purple-50 text-purple-900 border border-purple-200">
                      {ev.category}
                    </span>
                    <span className="text-xs text-slate-500">
                      Date: {ev.eventDate} • Venue: {ev.venue}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-dsvv-blue-950 font-serif">
                    {ev.title}
                  </h4>
                  <p className="text-xs text-slate-500">
                    Organizer: {ev.organizer} • Reg. Deadline: {ev.registrationDeadline}
                  </p>
                </div>
                <button
                  onClick={() => handleDeleteEvent(ev.id)}
                  className="p-2 text-slate-400 hover:text-rose-600 rounded-xl hover:bg-rose-50"
                  title="Delete event"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ----------------- TAB 5: STUDENT DISCREPANCY REPORTS ----------------- */}
      {activeAdminTab === 'reports' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-serif font-bold text-dsvv-blue-950 text-lg">
              Student Information Discrepancy Reports ({reports.length})
            </h3>
            <span className="text-xs text-slate-500">
              Submitted by students directly through the report button
            </span>
          </div>

          {reports.length > 0 ? (
            <div className="space-y-3">
              {reports.map((rep) => (
                <div key={rep.id} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-amber-50 text-amber-900 border border-amber-200">
                        {rep.discrepancyType}
                      </span>
                      <strong className="text-sm font-serif text-dsvv-blue-950">{rep.targetTitle}</strong>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        rep.status === 'resolved' 
                          ? 'bg-emerald-100 text-emerald-800' 
                          : rep.status === 'reviewed' 
                          ? 'bg-blue-100 text-blue-800' 
                          : 'bg-rose-100 text-rose-800'
                      }`}>
                        {rep.status}
                      </span>
                      <span className="text-slate-400">
                        {new Date(rep.submittedAt).toLocaleString("en-IN")}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    "{rep.description}"
                  </p>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
                    <span className="text-slate-500">
                      Reporter: <strong>{rep.studentContact}</strong>
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleUpdateReportStatus(rep.id, 'reviewed')}
                        className="px-2.5 py-1 rounded-lg border border-slate-200 hover:bg-slate-100 text-slate-600 font-medium"
                      >
                        Mark Reviewed
                      </button>
                      <button
                        onClick={() => handleUpdateReportStatus(rep.id, 'resolved')}
                        className="px-2.5 py-1 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-medium shadow-xs"
                      >
                        Mark Resolved
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white p-8 rounded-2xl border border-slate-200 text-center space-y-2">
              <CheckCircle size={28} className="text-emerald-500 mx-auto" />
              <p className="text-sm font-semibold text-slate-800">No pending student reports</p>
              <p className="text-xs text-slate-500">All information records are currently in sync with verified standards.</p>
            </div>
          )}
        </div>
      )}

      {/* ----------------- TAB 6: AUDIT TRAIL LOG ----------------- */}
      {activeAdminTab === 'audit' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-serif font-bold text-dsvv-blue-950 text-lg">
                System Audit Trail & Edit History
              </h3>
              <p className="text-xs text-slate-500">
                Transparent tamper-evident log of every modification, login, and deletion.
              </p>
            </div>
            <span className="text-xs font-mono text-slate-400">
              Total Log Entries: {auditLogs.length}
            </span>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden">
            <div className="divide-y divide-slate-100">
              {auditLogs.map((log) => (
                <div key={log.id} className="p-4 hover:bg-slate-50 flex items-start justify-between gap-4 text-xs transition-colors">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                        log.action === 'CREATE' ? 'bg-emerald-100 text-emerald-800' :
                        log.action === 'UPDATE' ? 'bg-amber-100 text-amber-800' :
                        log.action === 'DELETE' ? 'bg-rose-100 text-rose-800' :
                        log.action === 'LOGIN' ? 'bg-blue-100 text-blue-800' : 'bg-slate-100 text-slate-800'
                      }`}>
                        {log.action}
                      </span>
                      <strong className="text-dsvv-blue-950 font-semibold">{log.entityTitle}</strong>
                      <span className="text-slate-400 font-mono">({log.entityType})</span>
                    </div>
                    <p className="text-slate-600">
                      {log.details}
                    </p>
                    <div className="text-[11px] text-slate-400">
                      Actor: <strong className="text-slate-700">{log.userName}</strong> ({log.userRole})
                    </div>
                  </div>

                  <span className="text-[11px] font-mono text-slate-400 shrink-0">
                    {new Date(log.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ----------------- TAB 7: DATABASE & ZERO-COST STRATEGY ----------------- */}
      {activeAdminTab === 'database' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
          <div className="space-y-1">
            <h3 className="font-serif font-bold text-dsvv-blue-950 text-xl">
              Zero-Cost Database Management & Supabase Bridge
            </h3>
            <p className="text-xs text-slate-500">
              Seamlessly manage browser-level persistence, export verified datasets, or bridge to Supabase free tier.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3">
              <h4 className="font-bold text-xs uppercase tracking-wider text-dsvv-blue-900 flex items-center gap-1.5">
                <Download size={14} className="text-dsvv-gold-600" />
                <span>Export Platform JSON Backup</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Download the complete university knowledge base including all mess schedules, procedures, events, and audit history as a clean, standardized JSON document.
              </p>
              <button
                onClick={handleExportBackup}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-dsvv-blue-900 hover:bg-dsvv-blue-800 text-white rounded-xl text-xs font-semibold shadow-xs"
              >
                <Download size={13} />
                <span>Export Local Data JSON</span>
              </button>
            </div>

            <div className="bg-rose-50/50 p-5 rounded-2xl border border-rose-200 space-y-3">
              <h4 className="font-bold text-xs uppercase tracking-wider text-rose-900 flex items-center gap-1.5">
                <RefreshCw size={14} className="text-rose-600" />
                <span>Reset Database to Defaults</span>
              </h4>
              <p className="text-xs text-rose-800 leading-relaxed">
                Restore all mess menus, academic procedures, events, and administrator credentials to the original verified DSVV seed database.
              </p>
              <button
                onClick={handleResetDefaults}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-rose-700 hover:bg-rose-800 text-white rounded-xl text-xs font-semibold shadow-xs"
              >
                <RefreshCw size={13} />
                <span>Reset to Seed Data</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
