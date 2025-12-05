'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  Home,
  LayoutTemplate,
  Image,
  Video,
  Bot,
  Briefcase,
  History,
  HelpCircle,
  LogOut,
  Sparkles,
} from 'lucide-react';
import { signOut } from 'next-auth/react';

const menuItems = [
  { href: '/dashboard', label: 'หน้าหลัก', icon: Home },
  { href: '/templates', label: 'เทมเพลต', icon: LayoutTemplate },
  { href: '/create-image', label: 'สร้างภาพ', icon: Image },
  { href: '/create-video', label: 'สร้างวิดีโอ', icon: Video },
  { href: '/ai-consultant', label: 'AI ที่ปรึกษา', icon: Bot },
  { href: '/my-business', label: 'ธุรกิจของฉัน', icon: Briefcase },
  { href: '/history', label: 'ประวัติ', icon: History },
  { href: '/how-to-use', label: 'วิธีใช้งาน', icon: HelpCircle },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-screen w-64 flex-col border-r border-[#C0C0C0]/20 bg-black lg:flex">
      {/* Logo */}
      <div className="flex h-16 items-center gap-3 border-b border-[#C0C0C0]/20 px-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#C0C0C0] to-white">
          <Sparkles className="h-5 w-5 text-black" />
        </div>
        <div>
          <h1 className="text-lg font-bold text-white">AI Marketing</h1>
          <p className="text-xs text-gray-400">Platform</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 overflow-y-auto p-4">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200',
                isActive
                  ? 'border-l-4 border-[#C0C0C0] bg-white/10 text-white'
                  : 'text-gray-400 hover:bg-white/5 hover:text-white'
              )}
            >
              <Icon
                className={cn(
                  'h-5 w-5 transition-colors',
                  isActive ? 'text-[#C0C0C0]' : 'group-hover:text-[#C0C0C0]'
                )}
              />
              <span>{item.label}</span>
              {isActive && (
                <span className="ml-auto h-2 w-2 rounded-full bg-[#C0C0C0]" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="border-t border-[#C0C0C0]/20 p-4">
        <button
          onClick={() => signOut({ callbackUrl: '/auth/login' })}
          className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-gray-400 transition-all duration-200 hover:bg-white/5 hover:text-red-400"
        >
          <LogOut className="h-5 w-5" />
          <span>ออกจากระบบ</span>
        </button>
      </div>
    </aside>
  );
}
