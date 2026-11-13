import React from 'react';
import { ShieldCheck, Heart, MapPin, Mail, Phone, ExternalLink, AlertTriangle } from 'lucide-react';

export default function Footer({ setActiveTab, onOpenReport, lang }) {
  return (
    <footer className="bg-dsvv-blue-950 text-slate-300 pt-12 pb-8 border-t-4 border-dsvv-gold-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-800">
          {/* Brand & Purpose */}
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-dsvv-gold-500 text-dsvv-blue-950 flex items-center justify-center font-bold font-serif text-sm">
                DS
              </div>
              <span className="text-xl font-serif font-bold text-white tracking-wide">
                DSVV Saarthi
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              An independent, zero-cost student assistance and knowledge index built for Dev Sanskriti Vishwavidyalaya, Haridwar. Dedicated to simplifying campus navigation, mess schedules, and administrative workflows.
            </p>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-800/80 text-[11px] text-dsvv-gold-300 border border-slate-700">
              <ShieldCheck size={12} className="text-dsvv-gold-400" />
              <span>Zero-Rupee Open Project</span>
            </div>
          </div>

          {/* Direct Modules */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-3 text-dsvv-gold-400 font-serif">
              {lang === 'en' ? 'Core Modules' : 'मुख्य अनुभाग'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => { setActiveTab('mess'); window.scrollTo({top:0, behavior:'smooth'}); }} className="hover:text-white transition-colors">
                  {lang === 'en' ? '• Daily Mess Menus' : '• दैनिक मेस मेन्यू'}
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('procedures'); window.scrollTo({top:0, behavior:'smooth'}); }} className="hover:text-white transition-colors">
                  {lang === 'en' ? '• Medical & Hostel Leave' : '• चिकित्सा व छात्रावास अवकाश'}
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('directory'); window.scrollTo({top:0, behavior:'smooth'}); }} className="hover:text-white transition-colors">
                  {lang === 'en' ? '• Saraswati Bhawan & Map' : '• सरस्वती भवन व परिसर नक्शा'}
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('events'); window.scrollTo({top:0, behavior:'smooth'}); }} className="hover:text-white transition-colors">
                  {lang === 'en' ? '• Competitions & Tech-Fest' : '• प्रतियोगिताएं व गतिविधियाँ'}
                </button>
              </li>
            </ul>
          </div>

          {/* Important Contacts */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-3 text-dsvv-gold-400 font-serif">
              {lang === 'en' ? 'University Contacts' : 'महत्वपूर्ण संपर्क'}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-dsvv-gold-400 mt-0.5 shrink-0" />
                <span>Gayatrikunj, Shantikunj, Haridwar, Uttarakhand 249411</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-dsvv-gold-400 shrink-0" />
                <span>EPABX: +91-1334-261303</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-dsvv-gold-400 shrink-0" />
                <span>info@dsvv.ac.in</span>
              </li>
            </ul>
          </div>

          {/* Student Discrepancy & Verification */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider text-dsvv-gold-400 font-serif">
              {lang === 'en' ? 'Quality & Accuracy' : 'विश्वसनीयता व सत्यापन'}
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Found an outdated timing or unverified procedure? Help your fellow students by filing an instant correction notice.
            </p>
            <button
              onClick={() => onOpenReport('General Feedback', 'Footer')}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-dsvv-gold-300 border border-slate-700 transition-colors w-full justify-center"
            >
              <AlertTriangle size={14} />
              <span>{lang === 'en' ? 'Submit Information Correction' : 'सुधार या त्रुटि दर्ज करें'}</span>
            </button>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-[11px] text-slate-500 gap-3">
          <p>
            DSVV Saarthi is a zero-budget student product built with React & Vite. Not an official endorsement unless authorized by university administration.
          </p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Crafted with</span>
            <Heart size={12} className="text-rose-500 fill-rose-500" />
            <span>for Dev Sanskriti Vishwavidyalaya Students</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
