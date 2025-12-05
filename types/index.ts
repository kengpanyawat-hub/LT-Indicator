// Enums (matching Prisma schema)
export type Role = 'USER' | 'ADMIN';
export type AssetType = 'IMAGE' | 'VIDEO' | 'REPORT' | 'SLIDES';
export type TemplateType = 'IMAGE' | 'VIDEO' | 'COPY' | 'PRESENTATION';

// User types
export interface UserPublic {
  id: string;
  name: string;
  email: string;
  role: Role;
  createdAt: Date;
}

// Business Profile types
export interface BusinessProfileData {
  id?: string;
  brandName: string;
  description: string;
  industry: string;
  sellingPoints: string[];
  logoUrl?: string;
}

// Template types
export interface TemplateData {
  id: string;
  name: string;
  category: string;
  description: string;
  type: TemplateType;
  config: Record<string, unknown>;
  isPremium: boolean;
}

// Generated Asset types
export interface GeneratedAssetData {
  id: string;
  type: AssetType;
  title: string;
  description?: string;
  dataUrl?: string;
  provider: string;
  createdAt: Date;
}

// AI Analysis types
export interface AiAnalysisData {
  id: string;
  question: string;
  keywords?: string;
  targetAudience?: string;
  budget?: number;
  resultSummary: string;
  kpiSuggestion?: KpiSuggestion[];
  warningNotes?: string;
  createdAt: Date;
}

export interface KpiSuggestion {
  name: string;
  target: string;
  description: string;
}

// Form types
export interface CreateImageFormData {
  productName: string;
  promptText: string;
  aspectRatio: '1:1' | '4:3' | '16:9';
  style: string;
  referenceImageUrl?: string;
  templateId?: string;
}

export interface CreateVideoFormData {
  mode: 'tiktok' | 'animation';
  productInfo: string;
  lengthSec: number;
  personaProps: {
    gender: string;
    skinTone: string;
    bodyType: string;
  };
  style: string;
  moodTone: string;
  referenceAsset?: string;
}

export interface AiConsultFormData {
  question: string;
  keywords?: string;
  targetAudience?: string;
  budget?: number;
}

// API Response types
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface GenerateImageResponse {
  assetId: string;
  imageUrl: string;
}

export interface GenerateVideoResponse {
  assetId: string;
  videoUrl: string;
  status: 'pending' | 'processing' | 'completed' | 'failed';
}

export interface AiConsultResponse {
  analysisId: string;
  strategy: string;
  kpis: KpiSuggestion[];
  warnings: string[];
}

export interface CreateSlidesResponse {
  slidesId: string;
  deckUrl: string;
}
