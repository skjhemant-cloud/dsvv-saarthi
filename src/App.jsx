import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ReportModal from './components/ReportModal';
import HomePage from './pages/HomePage';
import MessMenuPage from './pages/MessMenuPage';
import ProceduresPage from './pages/ProceduresPage';
import DirectoryPage from './pages/DirectoryPage';
import EventsPage from './pages/EventsPage';
import AdminPortal from './pages/admin/AdminPortal';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [lang, setLang] = useState('en'); // 'en' | 'hi'

  // Report Modal state
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [reportTargetTitle, setReportTargetTitle] = useState('General');
  const [reportTargetType, setReportTargetType] = useState('General');

  const handleOpenReport = (title = 'General Issue', type = 'General') => {
    setReportTargetTitle(title);
    setReportTargetType(type);
    setReportModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-dsvv-gold-200 selection:text-dsvv-blue-900">
      {/* Top Navigation Bar */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        lang={lang} 
        setLang={setLang}
        onOpenReport={handleOpenReport}
      />

      {/* Main Page Area */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <HomePage 
            setActiveTab={setActiveTab} 
            lang={lang} 
            onOpenReport={handleOpenReport} 
          />
        )}

        {activeTab === 'mess' && (
          <MessMenuPage 
            lang={lang} 
            onOpenReport={handleOpenReport} 
          />
        )}

        {activeTab === 'procedures' && (
          <ProceduresPage 
            lang={lang} 
            onOpenReport={handleOpenReport} 
          />
        )}

        {activeTab === 'directory' && (
          <DirectoryPage 
            lang={lang} 
            onOpenReport={handleOpenReport} 
          />
        )}

        {activeTab === 'events' && (
          <EventsPage 
            lang={lang} 
            onOpenReport={handleOpenReport} 
          />
        )}

        {activeTab === 'admin' && (
          <AdminPortal 
            lang={lang} 
          />
        )}
      </main>

      {/* Footer */}
      <Footer 
        setActiveTab={setActiveTab} 
        onOpenReport={handleOpenReport} 
        lang={lang} 
      />

      {/* Interactive Discrepancy Reporting Modal */}
      <ReportModal
        isOpen={reportModalOpen}
        onClose={() => setReportModalOpen(false)}
        targetTitle={reportTargetTitle}
        targetType={reportTargetType}
      />
    </div>
  );
}
