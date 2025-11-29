'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// --- SVG Icons ---
const ChatIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const FacebookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="white"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

// LINE icon using next/image
const LineIcon = () => (
  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#06C755]">
    <Image
      src="/LINE_APP_Android.png"
      alt="Line App"
      width={28} 
      height={28}
      className="rounded-full object-contain"
    />
  </div>
);

// --- Config ---
type SocialLink = {
  icon: React.ReactNode;
  href: string;
  bgColor: string;
  name: string;
};

const socialLinks: SocialLink[] = [
  {
    icon: <LineIcon />,
    href: 'https://line.me/ti/p/YOUR_LINE_ID',
    bgColor: 'bg-[#06C755]',
    name: 'Line',
  },
  {
    icon: <FacebookIcon />,
    href: 'https://m.me/YOUR_FACEBOOK_PAGE',
    bgColor: 'bg-[#1877F2]',
    name: 'Facebook',
  },
  {
    icon: <PhoneIcon />,
    href: 'tel:YOUR_PHONE_NUMBER',
    bgColor: 'bg-pink-500',
    name: 'Phone',
  },
];

// --- Main component ---
export default function FloatingChatButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Expanded menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="flex flex-col items-end gap-3"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex h-14 w-14 items-center justify-center rounded-full ${link.bgColor} text-white shadow-[0_10px_25px_rgba(0,0,0,0.6)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.85)] transition-transform`}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: index * 0.07,
                  type: 'spring',
                  stiffness: 280,
                  damping: 18,
                }}
                whileHover={{ scale: 1.08, y: -2 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Speech bubble */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="relative"
          >
            <div className="inline-flex items-center rounded-2xl rounded-br-none bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 px-4 py-2 text-xs md:text-sm font-semibold text-white shadow-[0_10px_25px_rgba(0,0,0,0.7)]">
              สั่งซื้อคลิกเลย!
            </div>
            <div className="absolute -bottom-2 right-3 h-0 w-0 border-t-8 border-l-8 border-t-purple-600 border-l-transparent" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main toggle button – ตัด overlay/วงแหวนออกให้เหลือปุ่มกลมล้วน */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-red-500 via-pink-500 to-purple-600 text-white shadow-[0_14px_35px_rgba(0,0,0,0.9)] focus:outline-none transition-all duration-300"
        whileHover={{ scale: 1.08, y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={isOpen ? 'close' : 'chat'}
            initial={{ opacity: 0, rotate: -90, y: 10 }}
            animate={{ opacity: 1, rotate: 0, y: 0 }}
            exit={{ opacity: 0, rotate: 90, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? <CloseIcon /> : <ChatIcon />}
          </motion.div>
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
