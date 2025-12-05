import { z } from 'zod';

// Auth validations
export const registerSchema = z.object({
  name: z.string().min(2, 'ชื่อต้องมีอย่างน้อย 2 ตัวอักษร'),
  email: z.string().email('กรุณากรอกอีเมลที่ถูกต้อง'),
  password: z.string().min(6, 'รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร'),
});

export const loginSchema = z.object({
  email: z.string().email('กรุณากรอกอีเมลที่ถูกต้อง'),
  password: z.string().min(1, 'กรุณากรอกรหัสผ่าน'),
});

// Business Profile validations
export const businessProfileSchema = z.object({
  brandName: z.string().min(1, 'กรุณากรอกชื่อแบรนด์'),
  description: z.string().min(10, 'คำอธิบายต้องมีอย่างน้อย 10 ตัวอักษร'),
  industry: z.string().min(1, 'กรุณาเลือกประเภทธุรกิจ'),
  sellingPoints: z.array(z.string()).min(1, 'กรุณาระบุจุดขายอย่างน้อย 1 ข้อ'),
  logoUrl: z.string().optional(),
});

// Create Image validations
export const createImageSchema = z.object({
  productName: z.string().min(1, 'กรุณากรอกชื่อสินค้า/บริการ'),
  promptText: z.string().min(5, 'กรุณากรอกคำโฆษณาอย่างน้อย 5 ตัวอักษร'),
  aspectRatio: z.enum(['1:1', '4:3', '16:9']),
  style: z.string().min(1, 'กรุณาเลือกสไตล์'),
  referenceImageUrl: z.string().optional(),
  templateId: z.string().optional(),
});

// Create Video validations
export const createVideoSchema = z.object({
  mode: z.enum(['tiktok', 'animation']),
  productInfo: z.string().min(5, 'กรุณากรอกข้อมูลสินค้า'),
  lengthSec: z.number().min(5).max(180),
  personaProps: z.object({
    gender: z.string(),
    skinTone: z.string(),
    bodyType: z.string(),
  }),
  style: z.string().min(1, 'กรุณาเลือกสไตล์'),
  moodTone: z.string().min(1, 'กรุณาเลือก Mood & Tone'),
  referenceAsset: z.string().optional(),
});

// AI Consult validations
export const aiConsultSchema = z.object({
  question: z.string().min(10, 'กรุณาอธิบายปัญหาอย่างน้อย 10 ตัวอักษร'),
  keywords: z.string().optional(),
  targetAudience: z.string().optional(),
  budget: z.number().optional(),
});

// Slides creation validations
export const createSlidesSchema = z.object({
  analysisId: z.string().optional(),
  summary: z.string().optional(),
  kpi: z.array(z.object({
    name: z.string(),
    target: z.string(),
    description: z.string(),
  })).optional(),
  warning: z.array(z.string()).optional(),
});

export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
export type BusinessProfileInput = z.infer<typeof businessProfileSchema>;
export type CreateImageInput = z.infer<typeof createImageSchema>;
export type CreateVideoInput = z.infer<typeof createVideoSchema>;
export type AiConsultInput = z.infer<typeof aiConsultSchema>;
export type CreateSlidesInput = z.infer<typeof createSlidesSchema>;
