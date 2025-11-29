import Link from "next/link";
import Image from "next/image";
import { Facebook, MessageCircle, Mail, Youtube } from "lucide-react";

const footerLinks = {
  product: [
    { label: "หน้าแรก", href: "/" },
    { label: "อินดิเคเตอร์", href: "/indicators" },
    { label: "ราคา", href: "/pricing" },
    { label: "โปรแกรมพันธมิตร", href: "/affiliate" },
  ],
  support: [
    { label: "คำถามที่พบบ่อย", href: "/#faq" },
    { label: "รีวิวจากผู้ใช้งาน", href: "/#testimonials" },
    { label: "นโยบายความเป็นส่วนตัว", href: "/privacy" },
    { label: "ข้อกำหนดในการให้บริการ", href: "/terms" },
  ],
};

const socialLinks = [
  {
    name: "LINE",
    href: "https://line.me/ti/p/YOUR_LINE_ID",
    icon: MessageCircle,
    color: "hover:text-red-500",
  },
  {
    name: "Facebook",
    href: "https://facebook.com/YOUR_PAGE",
    icon: Facebook,
    color: "hover:text-red-500",
  },
  {
    name: "YouTube",
    href: "https://youtube.com/YOUR_CHANNEL",
    icon: Youtube,
    color: "hover:text-red-500",
  },
  {
    name: "Email",
    href: "mailto:contact@longtrade.academy",
    icon: Mail,
    color: "hover:text-red-500",
  },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/longtrade-logo.png"
                alt="Longtrade Academy"
                width={50}
                height={50}
                className="w-auto h-12"
              />
              
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              อินดิเคเตอร์และระบบช่วยเทรดระดับมืออาชีพ
              <br />
              รองรับ MT4/MT5 และ TradingView
            </p>
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full bg-white/5 text-white/60 ${social.color} transition-all hover:scale-110 hover:bg-white/10`}
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">ผลิตภัณฑ์</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-red-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">ช่วยเหลือ</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-red-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">ติดต่อเรา</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <span className="text-white">LINE:</span> @longtrade
              </li>
              <li>
                <span className="text-white">อีเมล:</span> contact@longtrade.academy
              </li>
              <li>
                <span className="text-white">บริการลูกค้า:</span> 24/7
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Longtrade Academy. สงวนลิขสิทธิ์
            </p>
            <div className="flex items-center space-x-6">
              <Link
                href="/privacy"
                className="text-sm text-gray-400 hover:text-red-400 transition-colors"
              >
                นโยบายความเป็นส่วนตัว
              </Link>
              <Link
                href="/terms"
                className="text-sm text-gray-400 hover:text-red-400 transition-colors"
              >
                ข้อกำหนดในการให้บริการ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
