'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TestInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTestIds?: string[];
  selectedPackageId?: string;
  selectedTestsData?: any[];
  selectedPackageData?: any;
  title: string;
}

export default function TestInquiryModal({ isOpen, onClose, selectedTestIds, selectedPackageId, selectedTestsData, selectedPackageData, title }: TestInquiryModalProps) {
  const [formData, setFormData] = useState({
    patientName: '',
    phone: '',
    email: '',
    date: '',
    timeSlot: '',
    type: 'LAB_TEST',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          testIds: selectedTestIds,
          packageId: selectedPackageId
        })
      });
      
      if (res.ok) {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
          onClose();
        }, 3000);
      }
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  let totalAmount = 0;
  if (selectedPackageData) totalAmount += selectedPackageData.price || 0;
  if (selectedTestsData) {
    selectedTestsData.forEach(t => totalAmount += (t.rate || 0));
  }

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
      >
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
          className="bg-white rounded-3xl w-full max-w-lg shadow-2xl flex flex-col max-h-[90vh]"
        >
          <div className="bg-teal-600 p-6 text-white text-center relative shrink-0">
            <h2 className="text-2xl font-bold">{title}</h2>
            <button onClick={onClose} className="absolute right-6 top-6 text-white/70 hover:text-white font-bold">✕</button>
          </div>

          <div className="p-8 overflow-y-auto">
            {success ? (
              <div className="text-center py-10">
                <div className="w-20 h-20 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Submitted!</h3>
                <p className="text-slate-500">We will contact you shortly to confirm your appointment.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <label className="block text-sm font-bold text-slate-700 mb-1">Patient Name *</label>
                    <input required type="text" className="w-full border-slate-200 rounded-xl px-4 py-3 bg-slate-50 focus:bg-white transition-colors" value={formData.patientName} onChange={e => setFormData({...formData, patientName: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Phone Number *</label>
                    <input required type="tel" className="w-full border-slate-200 rounded-xl px-4 py-3 bg-slate-50 focus:bg-white transition-colors" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Email</label>
                    <input type="email" className="w-full border-slate-200 rounded-xl px-4 py-3 bg-slate-50 focus:bg-white transition-colors" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Preferred Date</label>
                    <input type="date" className="w-full border-slate-200 rounded-xl px-4 py-3 bg-slate-50 focus:bg-white transition-colors" value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Time Slot</label>
                    <select className="w-full border-slate-200 rounded-xl px-4 py-3 bg-slate-50 focus:bg-white transition-colors" value={formData.timeSlot} onChange={e => setFormData({...formData, timeSlot: e.target.value})}>
                      <option value="">Any Time</option>
                      <option value="Morning (8AM - 12PM)">Morning (8AM - 12PM)</option>
                      <option value="Afternoon (12PM - 4PM)">Afternoon (12PM - 4PM)</option>
                      <option value="Evening (4PM - 8PM)">Evening (4PM - 8PM)</option>
                    </select>
                  </div>
                  <div className="col-span-2">
                    <label className="block text-sm font-bold text-slate-700 mb-1">Visit Type</label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="type" value="LAB_TEST" checked={formData.type === 'LAB_TEST'} onChange={e => setFormData({...formData, type: e.target.value})} className="text-teal-600 focus:ring-teal-500" />
                        <span className="text-slate-700">Lab Visit</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="type" value="HOME_COLLECTION" checked={formData.type === 'HOME_COLLECTION'} onChange={e => setFormData({...formData, type: e.target.value})} className="text-teal-600 focus:ring-teal-500" />
                        <span className="text-slate-700">Home Collection</span>
                      </label>
                    </div>
                  </div>
                  <div className="col-span-2">
                    <label className="block text-sm font-bold text-slate-700 mb-1">Additional Message</label>
                    <textarea rows={2} className="w-full border-slate-200 rounded-xl px-4 py-3 bg-slate-50 focus:bg-white transition-colors" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
                  </div>

                  {/* Billing Summary */}
                  {(selectedPackageData || (selectedTestsData && selectedTestsData.length > 0)) && (
                    <div className="col-span-2 bg-slate-50 border border-slate-200 rounded-xl p-5">
                      <h4 className="font-bold text-slate-800 mb-3 border-b border-slate-200 pb-2">Estimated Bill</h4>
                      <div className="max-h-32 overflow-y-auto pr-2 space-y-2">
                        {selectedPackageData && (
                          <div className="flex justify-between text-sm text-slate-600">
                            <span>{selectedPackageData.name}</span>
                            <span className="font-bold">₹{selectedPackageData.price}</span>
                          </div>
                        )}
                        {selectedTestsData && selectedTestsData.map((t: any) => (
                          <div key={t.id} className="flex justify-between text-sm text-slate-600">
                            <span>{t.name}</span>
                            <span className="font-bold">₹{t.rate}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-between items-center font-black text-teal-700 mt-3 pt-3 border-t border-slate-200 text-lg">
                        <span>Total Amount</span>
                        <span>₹{totalAmount}</span>
                      </div>
                    </div>
                  )}
                </div>

                <button disabled={loading} type="submit" className="w-full py-4 bg-slate-900 hover:bg-teal-600 text-white rounded-xl font-bold text-lg transition-all shadow-xl shadow-slate-900/20 disabled:opacity-70">
                  {loading ? 'Submitting...' : 'Confirm Booking Request'}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
