'use client';

import { Sidebar } from './sidebar';
import { MobileNav } from './mobile-nav';

interface DashboardShellProps {
  children: React.ReactNode;
}

export function DashboardShell({ children }: DashboardShellProps) {
  return (
    <div className="min-h-screen bg-black">
      {/* Desktop Sidebar */}
      <Sidebar />

      {/* Mobile Navigation */}
      <MobileNav />

      {/* Main Content */}
      <main className="lg:pl-64">
        <div className="min-h-screen pt-16 lg:pt-0">
          <div className="p-4 md:p-6 lg:p-8">{children}</div>
        </div>
      </main>
    </div>
  );
}
