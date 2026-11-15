import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Layers, 
  ShieldCheck, 
  Activity, 
  Zap, 
  CheckCircle,
  Database,
  Cloud
} from 'lucide-react';
import { companyInfo } from '../data/mockData';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Ambience & Grid */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#6366f110_1px,transparent_1px),linear-gradient(to_bottom,#6366f110_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        {/* Subtle glow orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-indigo-500/15 via-violet-500/15 to-transparent blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Trust Eyebrow Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-200/80 dark:border-indigo-500/30 bg-indigo-50/80 dark:bg-indigo-950/40 backdrop-blur-sm text-xs md:text-sm font-semibold text-indigo-700 dark:text-indigo-300 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-ping"></span>
            <Sparkles className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
            <span>Tăng tốc chuyển đổi số với Hạ tầng Cloud & AI Agent thế hệ mới</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
            Kiến tạo Hạ tầng Số & <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 dark:from-indigo-400 dark:via-violet-400 dark:to-indigo-300 bg-clip-text text-transparent">
              Tự động hóa Doanh nghiệp
            </span>{" "}
            bằng AI
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
            {companyInfo.description}
          </p>

          {/* 2 CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 hover:from-indigo-700 hover:to-violet-700 shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>Nhận Báo Giá Ngay</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800/90 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:-translate-y-0.5 transition-all duration-200"
            >
              <Layers className="w-4 h-4 text-indigo-500" />
              <span>Khám Phá Giải Pháp</span>
            </a>
          </div>

          {/* Trust Guarantees */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span>Bảo mật chuẩn ISO 27001 & NDA</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span>Bàn giao 100% Source Code</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span>Hỗ trợ kỹ thuật 24/7 SLA &lt;15p</span>
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="mt-16 sm:mt-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {companyInfo.stats.map((stat, index) => (
              <div
                key={stat.id}
                className="relative group p-6 rounded-2xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm border border-slate-200/80 dark:border-slate-800 hover:border-indigo-500/40 dark:hover:border-indigo-500/40 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight bg-gradient-to-br from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="mt-1.5 text-sm font-medium text-slate-600 dark:text-slate-400">
                  {stat.label}
                </div>
                <div className="absolute top-4 right-4 text-indigo-200 dark:text-indigo-900/60 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
                  {index === 0 && <Layers className="w-5 h-5" />}
                  {index === 1 && <Activity className="w-5 h-5" />}
                  {index === 2 && <ShieldCheck className="w-5 h-5" />}
                  {index === 3 && <Zap className="w-5 h-5" />}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
