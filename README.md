# Longtrade Academy - Trading Indicators Landing Page

เว็บไซต์ Landing Page สำหรับขายอินดิเคเตอร์และระบบช่วยเทรดของ Longtrade Academy

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **TailwindCSS** (with custom theme)
- **shadcn/ui** components
- **Framer Motion** สำหรับ animations
- **lucide-react** สำหรับ icons

## การติดตั้ง

```bash
# ติดตั้ง dependencies
npm install
# หรือ
pnpm install

# รัน dev server
npm run dev
# หรือ
pnpm dev

# Build production
npm run build
```

## โครงสร้างโปรเจค

```
LT-Indicator/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── indicators/page.tsx  # Indicators page
│   ├── pricing/page.tsx     # Pricing page
│   ├── affiliate/page.tsx   # Affiliate program page
│   └── sitemap.xml/route.ts # Sitemap
├── components/
│   ├── ui/                  # shadcn/ui components
│   ├── home/                # Home page sections
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   └── CountdownTimer.tsx
├── lib/
│   └── utils.ts             # Utility functions
└── public/                  # Static assets
    ├── longtrade-logo.svg
    ├── hero-dashboard.svg
    └── ... (other SVG placeholders)
```

## ฟีเจอร์หลัก

### หน้า Home
- ✅ Hero Section พร้อม Countdown Timer
- ✅ Why Longtrade? (4 จุดเด่น)
- ✅ Indicator Showcase (3 อินดิเคเตอร์หลัก)
- ✅ How It Works (3 ขั้นตอน)
- ✅ Pricing Section (3 แพ็กเกจ)
- ✅ Testimonials (รีวิวลูกค้า)
- ✅ FAQ Section (Accordion)
- ✅ Final CTA (ปุ่มสั่งซื้อ LINE/Facebook)

### หน้าอื่นๆ
- ✅ `/indicators` - แสดงอินดิเคเตอร์ทั้งหมด (6 รายการ)
- ✅ `/pricing` - ตารางเปรียบเทียบแพ็กเกจแบบละเอียด
- ✅ `/affiliate` - โปรแกรม Affiliate & IB (4 ระดับคอมมิชชั่น)

### UI/UX Features
- ✅ Glassmorphism design (สีดำ-แดงนีออน)
- ✅ Framer Motion animations
- ✅ Responsive design (Mobile, Tablet, Desktop)
- ✅ Sticky navbar with blur effect
- ✅ Smooth scroll
- ✅ Interactive hover effects

### SEO
- ✅ Metadata ครบทุกหน้า (title, description, og:image)
- ✅ robots.txt
- ✅ Dynamic sitemap.xml
- ✅ Semantic HTML
- ✅ Alt tags สำหรับรูปภาพทั้งหมด

## การปรับแต่ง

### เปลี่ยน LINE & Facebook URLs
แก้ไขใน components ต่างๆ โดยเปลี่ยนจาก:
- `https://line.me/ti/p/YOUR_LINE_ID` → LINE ID ของคุณ
- `https://facebook.com/YOUR_PAGE` → Facebook Page ของคุณ

### เปลี่ยนสี
แก้ไขใน `tailwind.config.ts`:
```typescript
primary: {
  DEFAULT: "#D61F2A", // สีแดงหลัก
  ...
}
```

### เปลี่ยนรูปภาพ
แทนที่ไฟล์ SVG ใน `/public/` ด้วยรูปจริงของคุณ:
- `longtrade-logo.svg` → โลโก้
- `hero-dashboard.svg` → รูป hero
- `indicator-*.svg` → รูปอินดิเคเตอร์
- `user-*.svg` → รูป testimonials

## การ Deploy

### Vercel (แนะนำ)
```bash
# Push to GitHub
git add .
git commit -m "Initial commit"
git push

# Import to Vercel
# https://vercel.com/new
```

### การตั้งค่า Environment
ไม่จำเป็นต้องตั้งค่า environment variables เพิ่มเติม โปรเจครันได้ทันทีหลัง build

## License

© 2024 Longtrade Academy. All rights reserved.
