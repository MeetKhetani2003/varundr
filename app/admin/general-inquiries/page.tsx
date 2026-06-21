'use client';
import React from 'react';

export default function GeneralInquiriesPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-slate-900">General Inquiries</h1>
      </div>
      <div className="bg-white p-10 rounded-2xl border border-slate-200 text-center text-slate-500 shadow-sm">
        <p className="text-lg">This is the General Inquiries dashboard.</p>
        <p className="text-sm mt-2">These are inquiries coming from your Contact page and general appointments, entirely separate from the Pathology Test checklist inquiries!</p>
      </div>
    </div>
  );
}
