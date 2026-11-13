import React, { useState } from 'react';
import { X, Send, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { StorageService } from '../services/storageService';

export default function ReportModal({ isOpen, onClose, targetTitle = 'General Query', targetType = 'General' }) {
  const [discrepancyType, setDiscrepancyType] = useState('Outdated Information');
  const [description, setDescription] = useState('');
  const [studentContact, setStudentContact] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description.trim()) return;

    StorageService.submitReport({
      targetTitle,
      targetType,
      discrepancyType,
      description,
      studentContact
    });

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setDescription('');
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 size={32} />
            </div>
            <h3 className="text-xl font-serif font-bold text-slate-900">
              Report Submitted for Review
            </h3>
            <p className="text-xs text-slate-600 max-w-sm mx-auto">
              Thank you for keeping DSVV Saarthi accurate. Our student editors and administrators will examine the records and update them.
            </p>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="p-2 rounded-lg bg-amber-50 text-amber-600">
                <AlertTriangle size={18} />
              </div>
              <h3 className="text-lg font-serif font-bold text-dsvv-blue-950">
                Report Information Discrepancy
              </h3>
            </div>
            <p className="text-xs text-slate-500 mb-4">
              Help maintain accurate guidance for DSVV students. Submitted reports go directly to the administrator dashboard for verification.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Topic / Record Name
                </label>
                <input
                  type="text"
                  disabled
                  value={targetTitle}
                  className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-600 font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Issue Type
                </label>
                <select
                  value={discrepancyType}
                  onChange={(e) => setDiscrepancyType(e.target.value)}
                  className="w-full text-xs bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-dsvv-blue-900"
                >
                  <option value="Outdated Information">Outdated Information (Timing or Location changed)</option>
                  <option value="Incorrect Procedure Steps">Incorrect Procedure Steps or Missing Documents</option>
                  <option value="Mess Menu Discrepancy">Mess Menu Differed from actual meal served</option>
                  <option value="Event Cancelled / Rescheduled">Event Cancelled or Rescheduled</option>
                  <option value="Typo or Translation Issue">Typo or Hindi Translation Correction</option>
                  <option value="Other">Other Suggestion</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Describe what needs correction <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="e.g. As per latest notice, medical forms must now be submitted to Room 104 instead of Counter 2..."
                  className="w-full text-xs bg-white border border-slate-300 rounded-lg p-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-dsvv-blue-900"
                ></textarea>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Your Student Roll No / Email (Optional)
                </label>
                <input
                  type="text"
                  value={studentContact}
                  onChange={(e) => setStudentContact(e.target.value)}
                  placeholder="e.g. roll24019@dsvv.ac.in (strictly for clarification if needed)"
                  className="w-full text-xs bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-dsvv-blue-900"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-dsvv-blue-900 hover:bg-dsvv-blue-800 rounded-lg shadow-sm"
                >
                  <Send size={13} />
                  <span>Submit for Review</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
