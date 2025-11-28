"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "อินดิเคเตอร์ใช้กับแพลตฟอร์มไหนได้บ้าง?",
    answer: "อินดิเคเตอร์ของเรารองรับทั้ง MT4, MT5 และ TradingView ครอบคลุมทุกแพลตฟอร์มยอดนิยม คุณสามารถเลือกใช้งานได้ตามความต้องการ ทีมงานพร้อมช่วยติดตั้งและสอนใช้งานจนชำนาญ",
  },
  {
    question: "มีสอนใช้งานไหม? สำหรับคนที่ไม่เคยใช้มาก่อน",
    answer: "มีครับ! เรามี 1-on-1 Training Session และวิดีโอสอนใช้งานครบทุกฟีเจอร์ พร้อม PDF Manual ภาษาไทย ทีมงานพร้อมตอบคำถามและช่วยเหลือตลอด 24/7 รับประกันว่าใช้งานได้แน่นอน",
  },
  {
    question: "ได้อัปเดตฟรีไหม? ต่ออายุเท่าไหร่?",
    answer: "แพ็กเกจ Starter ได้อัปเดตฟรี 1 เดือน, แพ็กเกจ Pro ได้ 6 เดือน และแพ็กเกจ Elite Bundle ได้อัปเดตฟรีตลอดชีพ! ไม่ต้องจ่ายเพิ่มอีกเลย ทุกเวอร์ชั่นใหม่จะได้รับฟรีทันที",
  },
  {
    question: "มีรับประกัน/คืนเงินไหม?",
    answer: "เรามีนโยบายรับประกันความพึงพอใจ 7 วัน หากไม่พอใจสามารถขอคืนเงินได้เต็มจำนวน ไม่มีเงื่อนไข เพราะเรามั่นใจในคุณภาพของผลิตภัณฑ์",
  },
  {
    question: "ราคานี้รวมอะไรบ้าง? มีค่าใช้จ่ายซ่อนเร้นไหม?",
    answer: "ราคาที่แสดงเป็นราคาสุทธิแล้ว รวมอินดิเคเตอร์ตามแพ็กเกจ, คู่มือการใช้งาน, การอบรมสอนใช้, และ Support ไม่มีค่าใช้จ่ายเพิ่มเติมใดๆ ทั้งสิ้น",
  },
  {
    question: "สามารถใช้งานได้กี่เครื่อง?",
    answer: "คุณสามารถใช้งานได้ 1 เครื่องต่อ 1 License แต่สามารถเปลี่ยนเครื่องได้ตลอดเวลา หากต้องการใช้หลายเครื่องพร้อมกัน สามารถซื้อ License เพิ่มได้ในราคาพิเศษ",
  },
  {
    question: "วิธีการชำระเงินมีอะไรบ้าง?",
    answer: "รับชำระผ่าน โอนธนาคาร, พร้อมเพย์, TrueMoney Wallet และบัตรเครดิต/เดบิต ทุกวิธีปลอดภัย 100% มีใบเสร็จรับเงินครบถ้วน",
  },
  {
    question: "ใช้ได้กับ Forex, Gold, Crypto หมดเลยใช่ไหม?",
    answer: "ใช่ครับ! อินดิเคเตอร์ของเราออกแบบมาให้ใช้ได้กับทุก Asset Class ทั้ง Forex คู่เงินทุกคู่, Gold, Crypto, หุ้น, น้ำมัน และสินค้าโภคภัณฑ์อื่นๆ ได้ทั้งหมด",
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="py-24 bg-black relative overflow-hidden">
      {/* Pure black background */}
      <div className="absolute inset-0 bg-[#000000]" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            คำถาม{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-700">
              ที่พบบ่อย
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            ข้อสงสัยทั่วไปที่ลูกค้าถามบ่อย มีคำตอบครบถ้วนที่นี่
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-panel rounded-2xl p-8">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-white/10"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-500 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 leading-relaxed pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Still have questions CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <p className="text-gray-400 mb-4">
              ยังมีคำถามอื่นๆ? ทีมงานพร้อมตอบทุกข้อสงสัย
            </p>
            <a
              href="https://line.me/ti/p/YOUR_LINE_ID"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-red-400 hover:text-red-500 transition-colors font-semibold"
            >
              ติดต่อทีมงานทาง LINE →
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
