'use client';
import React, { useState, useEffect, use } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

export default function TestInquiriesPage({ params }: { params: Promise<{ testId: string }> }) {
  const resolvedParams = use(params);
  const [inquiries, setInquiries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, [resolvedParams.testId]);

  const fetchData = async () => {
    setLoading(true);
    const res = await fetch(`/api/tests/${resolvedParams.testId}/inquiries`);
    setInquiries(await res.json());
    setLoading(false);
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text('Test Inquiries Report', 14, 15);
    
    const tableColumn = ["Date", "Patient Name", "Phone", "Email", "Type"];
    const tableRows: any[] = [];

    inquiries.forEach(inq => {
      const row = [
        new Date(inq.createdAt).toLocaleDateString(),
        inq.patientName,
        inq.phone,
        inq.email || 'N/A',
        inq.type
      ];
      tableRows.push(row);
    });

    (doc as any).autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 20,
    });

    doc.save(`Test_${resolvedParams.testId}_Inquiries.pdf`);
  };

  return (
    <div className="max-w-6xl mx-auto p-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Test Inquiries</h1>
        <button onClick={generatePDF} className="px-4 py-2 bg-teal-600 text-white rounded-lg font-medium">Export to PDF</button>
      </div>

      {loading ? <p>Loading...</p> : (
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="p-4 font-bold text-slate-600 text-sm">Date</th>
                <th className="p-4 font-bold text-slate-600 text-sm">Patient</th>
                <th className="p-4 font-bold text-slate-600 text-sm">Contact</th>
                <th className="p-4 font-bold text-slate-600 text-sm">Type</th>
                <th className="p-4 font-bold text-slate-600 text-sm">Message</th>
              </tr>
            </thead>
            <tbody>
              {inquiries.map((inq) => (
                <tr key={inq.id} className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="p-4 text-sm text-slate-600">{new Date(inq.createdAt).toLocaleDateString()}</td>
                  <td className="p-4 font-medium text-slate-900">{inq.patientName}</td>
                  <td className="p-4 text-sm text-slate-600">
                    <div>{inq.phone}</div>
                    <div className="text-slate-400">{inq.email}</div>
                  </td>
                  <td className="p-4 text-sm text-slate-600">{inq.type}</td>
                  <td className="p-4 text-sm text-slate-600 max-w-xs truncate">{inq.message || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {inquiries.length === 0 && (
            <div className="p-8 text-center text-slate-500">No inquiries found for this test.</div>
          )}
        </div>
      )}
    </div>
  );
}
