'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  Menu,
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
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

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

export function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex h-16 items-center justify-between border-b border-[#C0C0C0]/20 bg-black/80 backdrop-blur-xl px-4 lg:hidden">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#C0C0C0] to-white">
          <Sparkles className="h-4 w-4 text-black" />
        </div>
        <span className="font-bold text-white">AI Marketing</span>
      </div>

      {/* Hamburger Menu */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-white/5 hover:text-white">
            <Menu className="h-6 w-6" />
          </button>
        </SheetTrigger>
        <SheetContent side="left" className="w-72 bg-black p-0">
          <SheetHeader className="border-b border-[#C0C0C0]/20 p-6">
            <SheetTitle className="flex items-center gap-3 text-left">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#C0C0C0] to-white">
                <Sparkles className="h-5 w-5 text-black" />
              </div>
              <div>
                <p className="text-lg font-bold text-white">AI Marketing</p>
                <p className="text-xs text-gray-400">Platform</p>
              </div>
            </SheetTitle>
          </SheetHeader>

          <nav className="flex flex-col gap-1 p-4">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200',
                    isActive
                      ? 'border-l-4 border-[#C0C0C0] bg-white/10 text-white'
                      : 'text-gray-400 hover:bg-white/5 hover:text-white'
                  )}
                >
                  <Icon className={cn('h-5 w-5', isActive && 'text-[#C0C0C0]')} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="absolute bottom-0 left-0 right-0 border-t border-[#C0C0C0]/20 p-4">
            <button
              onClick={() => signOut({ callbackUrl: '/auth/login' })}
              className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-gray-400 transition-all duration-200 hover:bg-white/5 hover:text-red-400"
            >
              <LogOut className="h-5 w-5" />
              <span>ออกจากระบบ</span>
            </button>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
