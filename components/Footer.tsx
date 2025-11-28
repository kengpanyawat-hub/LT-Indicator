import Link from "next/link";
import Image from "next/image";
import { Facebook, MessageCircle, Mail, Youtube } from "lucide-react";

const footerLinks = {
  product: [
    { label: "Home", href: "/" },
    { label: "Indicators", href: "/indicators" },
    { label: "Pricing", href: "/pricing" },
    { label: "Affiliate", href: "/affiliate" },
  ],
  support: [
    { label: "FAQ", href: "/#faq" },
    { label: "Testimonials", href: "/#testimonials" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
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
            <h3 className="text-lg font-semibold text-white mb-4">Product</h3>
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
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
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
                <span className="text-white">Email:</span> contact@longtrade.academy
              </li>
              <li>
                <span className="text-white">Support:</span> 24/7 Customer Service
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Longtrade Academy. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link
                href="/privacy"
                className="text-sm text-gray-400 hover:text-red-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-gray-400 hover:text-red-400 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
