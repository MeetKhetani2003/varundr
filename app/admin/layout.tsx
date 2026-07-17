'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { LayoutDashboard, Beaker, Package, Inbox, FileText, ImageIcon, Tags, LogOut } from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  const links = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Test Inquiries', href: '/admin/test-inquiries', icon: FileText },
    { name: 'General Inquiries', href: '/admin/general-inquiries', icon: Inbox },
    { name: 'Manage Tests', href: '/admin/tests', icon: Beaker },
    { name: 'Manage Packages', href: '/admin/packages', icon: Package },
    { name: 'Gallery Items', href: '/admin/gallery', icon: ImageIcon },
    { name: 'Gallery Categories', href: '/admin/gallery/categories', icon: Tags },
  ];

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
    router.refresh();
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-72 bg-slate-900 text-white flex flex-col shrink-0">
        <div className="p-6 border-b border-slate-800">
          <h2 className="font-bold text-2xl text-teal-400">Admin Panel</h2>
          <p className="text-slate-400 text-sm">Control Dashboard</p>
        </div>
        
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = link.href === '/admin' ? pathname === '/admin' : pathname.startsWith(link.href);
            return (
              <Link 
                key={link.name} 
                href={link.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${isActive ? 'bg-teal-600 text-white font-bold shadow-md shadow-teal-500/20' : 'text-slate-300 hover:bg-slate-800 hover:text-white font-medium'}`}
              >
                <Icon className="w-5 h-5" />
                {link.name}
              </Link>
            );
          })}
        </nav>
        
        <div className="p-4 border-t border-slate-800">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-red-400 hover:bg-red-500/10 hover:text-red-300 font-medium"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto h-screen">
        <div className="p-10">
          {children}
        </div>
      </main>
    </div>
  );
}
