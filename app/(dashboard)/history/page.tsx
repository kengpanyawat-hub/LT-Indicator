'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/glass-card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  History,
  Image,
  Video,
  FileText,
  Download,
  Eye,
  Loader2,
  Calendar,
  Sparkles,
} from 'lucide-react';

interface Asset {
  id: string;
  type: 'IMAGE' | 'VIDEO' | 'REPORT' | 'SLIDES';
  title: string;
  description?: string;
  dataUrl?: string;
  provider: string;
  createdAt: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const typeIcons = {
  IMAGE: Image,
  VIDEO: Video,
  REPORT: FileText,
  SLIDES: FileText,
};

const typeColors = {
  IMAGE: 'from-blue-500/20 to-cyan-500/20 text-blue-400',
  VIDEO: 'from-purple-500/20 to-pink-500/20 text-purple-400',
  REPORT: 'from-orange-500/20 to-yellow-500/20 text-orange-400',
  SLIDES: 'from-green-500/20 to-emerald-500/20 text-green-400',
};

const typeLabels = {
  IMAGE: 'ภาพ',
  VIDEO: 'วิดีโอ',
  REPORT: 'รายงาน',
  SLIDES: 'สไลด์',
};

export default function HistoryPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [assets, setAssets] = useState<Asset[]>([]);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const response = await fetch('/api/history');
      const data = await response.json();

      if (response.ok) {
        setAssets(data.data || []);
      }
    } catch (error) {
      console.error('Failed to fetch history:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const filteredAssets = assets.filter(
    (asset) => activeTab === 'all' || asset.type === activeTab.toUpperCase()
  );

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('th-TH', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      {/* Header */}
      <motion.div variants={itemVariants}>
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20">
            <History className="h-6 w-6 text-indigo-400" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white md:text-3xl">ประวัติ</h1>
            <p className="text-gray-400">ดูผลงานทั้งหมดที่คุณสร้างไว้</p>
          </div>
        </div>
      </motion.div>

      {/* Tabs */}
      <motion.div variants={itemVariants}>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="all">ทั้งหมด</TabsTrigger>
            <TabsTrigger value="image">ภาพ</TabsTrigger>
            <TabsTrigger value="video">วิดีโอ</TabsTrigger>
            <TabsTrigger value="report">รายงาน</TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="mt-6">
            {isLoading ? (
              <div className="flex h-64 items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-[#C0C0C0]" />
              </div>
            ) : filteredAssets.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {filteredAssets.map((asset) => {
                  const Icon = typeIcons[asset.type];
                  const colorClass = typeColors[asset.type];

                  return (
                    <GlassCard key={asset.id} className="group overflow-hidden">
                      {/* Thumbnail */}
                      <div className="aspect-video bg-black/50 relative overflow-hidden">
                        {asset.dataUrl ? (
                          asset.type === 'IMAGE' ? (
                            <img
                              src={asset.dataUrl}
                              alt={asset.title}
                              className="h-full w-full object-cover transition-transform group-hover:scale-105"
                            />
                          ) : asset.type === 'VIDEO' ? (
                            <video
                              src={asset.dataUrl}
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            <div className="flex h-full items-center justify-center">
                              <Icon className={`h-12 w-12 ${colorClass.split(' ')[2]}`} />
                            </div>
                          )
                        ) : (
                          <div className="flex h-full items-center justify-center">
                            <Icon className={`h-12 w-12 ${colorClass.split(' ')[2]}`} />
                          </div>
                        )}

                        {/* Type Badge */}
                        <div
                          className={`absolute left-3 top-3 flex items-center gap-1 rounded-full bg-gradient-to-r ${colorClass} px-2 py-1 text-xs font-medium`}
                        >
                          <Icon className="h-3 w-3" />
                          {typeLabels[asset.type]}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-4">
                        <h3 className="font-semibold text-white line-clamp-1">
                          {asset.title}
                        </h3>
                        {asset.description && (
                          <p className="mt-1 text-sm text-gray-400 line-clamp-2">
                            {asset.description}
                          </p>
                        )}

                        <div className="mt-3 flex items-center justify-between">
                          <div className="flex items-center gap-1 text-xs text-gray-500">
                            <Calendar className="h-3 w-3" />
                            {formatDate(asset.createdAt)}
                          </div>
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="h-8 w-8 p-0 border-[#C0C0C0]/40 text-white hover:bg-white/5"
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="h-8 w-8 p-0 border-[#C0C0C0]/40 text-white hover:bg-white/5"
                            >
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>

                        <div className="mt-2 text-xs text-gray-500">
                          สร้างด้วย {asset.provider}
                        </div>
                      </div>
                    </GlassCard>
                  );
                })}
              </div>
            ) : (
              <GlassCard className="p-12 text-center">
                <Sparkles className="mx-auto h-12 w-12 text-gray-600" />
                <h3 className="mt-4 text-lg font-medium text-white">
                  ยังไม่มีประวัติ
                </h3>
                <p className="mt-2 text-gray-400">
                  เริ่มสร้างภาพ วิดีโอ หรือรายงานแรกของคุณเลย!
                </p>
                <div className="mt-6 flex justify-center gap-3">
                  <Button
                    onClick={() => (window.location.href = '/create-image')}
                    className="bg-gradient-to-r from-[#C0C0C0] to-white text-black hover:opacity-90"
                  >
                    <Image className="mr-2 h-4 w-4" />
                    สร้างภาพ
                  </Button>
                  <Button
                    onClick={() => (window.location.href = '/create-video')}
                    variant="outline"
                    className="border-[#C0C0C0]/40 text-white hover:bg-white/5"
                  >
                    <Video className="mr-2 h-4 w-4" />
                    สร้างวิดีโอ
                  </Button>
                </div>
              </GlassCard>
            )}
          </TabsContent>
        </Tabs>
      </motion.div>
    </motion.div>
  );
}
