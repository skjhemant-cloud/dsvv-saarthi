import React, { useState } from 'react';
import { 
  Compass, 
  Utensils, 
  FileText, 
  MapPin, 
  Calendar, 
  Shield, 
  Menu, 
  X, 
  Globe, 
  UserCheck, 
  LogOut,
  AlertCircle
} from 'lucide-react';
import { StorageService } from '../services/storageService';

export default function Navbar({ activeTab, setActiveTab, lang, setLang, onOpenReport }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const currentUser = StorageService.getCurrentUser();

  const navLinks = [
    { id: 'home', labelEn: 'Home', labelHi: 'होम', icon: Compass },
    { id: 'mess', labelEn: 'Mess Menu', labelHi: 'मेस मेन्यू', icon: Utensils },
    { id: 'procedures', labelEn: 'Procedures', labelHi: 'नियम व प्रक्रिया', icon: FileText },
    { id: 'directory', labelEn: 'Campus Map', labelHi: 'परिसर डायरेक्टरी', icon: MapPin },
    { id: 'events', labelEn: 'Events', labelHi: 'गतिविधियाँ', icon: Calendar },
  ];

  const handleNavClick = (tabId) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogout = () => {
    StorageService.logout();
    window.location.reload();
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
      {/* Top University Band */}
      <div className="bg-dsvv-blue-900 text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-dsvv-gold-400 animate-pulse"></span>
            <span className="font-medium tracking-wide">
              {lang === 'en' 
                ? 'Dev Sanskriti Vishwavidyalaya, Haridwar • Student Assistance Portal' 
                : 'देव संस्कृति विश्वविद्यालय, हरिद्वार • छात्र सूचना एवं सहायता पोर्टल'}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => onOpenReport('General Query', 'Global Header')}
              className="hover:text-dsvv-gold-300 text-slate-300 flex items-center gap-1 transition-colors"
              title="Report an issue or suggest an update"
            >
              <AlertCircle size={13} />
              <span>{lang === 'en' ? 'Report Discrepancy' : 'त्रुटि सूचित करें'}</span>
            </button>
            <span className="text-slate-500">|</span>
            <button
              onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
              className="flex items-center gap-1.5 bg-dsvv-blue-800 hover:bg-dsvv-blue-700 px-2.5 py-0.5 rounded text-xs font-semibold text-dsvv-gold-300 transition-colors"
            >
              <Globe size={13} />
              <span>{lang === 'en' ? 'हिंदी' : 'English'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-[72px] py-2 gap-4">
          {/* Logo Branding */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3.5 cursor-pointer group shrink-0 py-1"
          >
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-dsvv-blue-950 via-dsvv-blue-900 to-dsvv-blue-800 flex items-center justify-center shadow-md shadow-dsvv-blue-900/20 border-2 border-dsvv-gold-400/60 group-hover:border-dsvv-gold-400 group-hover:scale-105 transition-all">
              <span className="text-dsvv-gold-400 font-bold text-xl font-serif tracking-tight">DS</span>
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-bold tracking-tight text-dsvv-blue-950 font-serif group-hover:text-dsvv-blue-800 transition-colors">
                  DSVV Saarthi
                </span>
                <span className="bg-gradient-to-r from-dsvv-gold-500 to-amber-500 text-dsvv-blue-950 text-[10px] uppercase font-extrabold tracking-wider px-2 py-0.5 rounded-full shadow-2xs border border-amber-300">
                  सार्थी
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-500 font-medium tracking-wide mt-0.5">
                {lang === 'en' ? 'Student Knowledge & Helpdesk' : 'विश्वविद्यालय मार्गदर्शिका एवं सहायता केंद्र'}
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive 
                      ? 'bg-dsvv-blue-900 text-white shadow-sm' 
                      : 'text-slate-600 hover:text-dsvv-blue-900 hover:bg-slate-100'
                  }`}
                >
                  <Icon size={16} className={isActive ? 'text-dsvv-gold-400' : 'text-slate-400'} />
                  <span>{lang === 'en' ? item.labelEn : item.labelHi}</span>
                </button>
              );
            })}
          </nav>

          {/* Admin Portal Button */}
          <div className="hidden md:flex items-center gap-2">
            {currentUser ? (
              <div className="flex items-center gap-2 pl-3 border-l border-slate-200">
                <button
                  onClick={() => handleNavClick('admin')}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold border ${
                    activeTab === 'admin'
                      ? 'bg-dsvv-gold-500 text-dsvv-blue-950 border-dsvv-gold-600 shadow'
                      : 'bg-dsvv-blue-50 text-dsvv-blue-900 border-dsvv-blue-200 hover:bg-dsvv-blue-100'
                  }`}
                >
                  <UserCheck size={14} className="text-dsvv-gold-600" />
                  <span className="truncate max-w-[120px]">{currentUser.fullName}</span>
                </button>
                <button
                  onClick={handleLogout}
                  className="p-1.5 text-slate-400 hover:text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                  title="Logout"
                >
                  <LogOut size={16} />
                </button>
              </div>
            ) : (
              <button
                onClick={() => handleNavClick('admin')}
                className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-3.5 py-2 rounded-lg text-xs font-semibold border border-slate-200 transition-all hover:border-slate-300"
              >
                <Shield size={14} className="text-dsvv-blue-800" />
                <span>{lang === 'en' ? 'Staff Login' : 'व्यवस्थापक लॉगिन'}</span>
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-dsvv-blue-900 hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-5 space-y-2 shadow-xl animate-fadeIn">
          {navLinks.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl text-base font-medium ${
                  isActive 
                    ? 'bg-dsvv-blue-900 text-white' 
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <Icon size={18} className={isActive ? 'text-dsvv-gold-400' : 'text-slate-500'} />
                <span>{lang === 'en' ? item.labelEn : item.labelHi}</span>
              </button>
            );
          })}

          <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
            {currentUser ? (
              <div className="flex items-center justify-between w-full">
                <button
                  onClick={() => handleNavClick('admin')}
                  className="flex items-center gap-2 text-sm font-semibold text-dsvv-blue-900"
                >
                  <UserCheck size={18} className="text-dsvv-gold-600" />
                  <span>Admin ({currentUser.role})</span>
                </button>
                <button
                  onClick={handleLogout}
                  className="text-xs text-red-600 font-semibold px-2 py-1 rounded bg-red-50"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() => handleNavClick('admin')}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-slate-100 text-slate-800 text-sm font-semibold"
              >
                <Shield size={16} className="text-dsvv-blue-900" />
                <span>Staff & Editor Login</span>
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
