'use client';
import React, { useState, useEffect } from 'react';

export default function AllInquiriesPage() {
  const [inquiries, setInquiries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    const res = await fetch('/api/inquiries');
    setInquiries(await res.json());
    setLoading(false);
  };

  return (
    <div className="max-w-6xl mx-auto p-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-slate-900">All Inquiries</h1>
      </div>

      {loading ? <p>Loading...</p> : (
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="p-4 font-bold text-slate-600 text-sm">Date</th>
                <th className="p-4 font-bold text-slate-600 text-sm">Patient Details</th>
                <th className="p-4 font-bold text-slate-600 text-sm">Selected Tests/Packages</th>
                <th className="p-4 font-bold text-slate-600 text-sm">Type</th>
              </tr>
            </thead>
            <tbody>
              {inquiries.map((inq) => (
                <tr key={inq.id} className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="p-4 text-sm text-slate-600 align-top">{new Date(inq.createdAt).toLocaleDateString()}</td>
                  <td className="p-4 text-sm text-slate-600 align-top">
                    <div className="font-bold text-slate-900">{inq.patientName}</div>
                    <div>{inq.phone}</div>
                    <div className="text-slate-400">{inq.email}</div>
                  </td>
                  <td className="p-4 text-sm text-slate-600 align-top">
                    {inq.selectedPackage?.length > 0 && (
                      <div className="mb-2">
                        <span className="font-bold text-teal-600 text-xs uppercase block">Package</span>
                        {inq.selectedPackage[0].package?.name}
                      </div>
                    )}
                    {inq.selectedTests?.length > 0 && (
                      <div>
                        <span className="font-bold text-teal-600 text-xs uppercase block">Tests</span>
                        <ul className="list-disc list-inside">
                          {inq.selectedTests.map((t: any) => (
                            <li key={t.id}>{t.test?.name}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </td>
                  <td className="p-4 text-sm text-slate-600 align-top">
                    <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs font-bold">{inq.type}</span>
                    {inq.timeSlot && <div className="mt-1 text-xs">{inq.timeSlot}</div>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {inquiries.length === 0 && (
            <div className="p-8 text-center text-slate-500">No inquiries found.</div>
          )}
        </div>
      )}
    </div>
  );
}
