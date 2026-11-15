import React from 'react';
import { 
  Cpu, 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  ArrowUp,
  Heart
} from 'lucide-react';
import { companyInfo } from '../data/mockData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 dark:bg-slate-950 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-violet-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/20">
                <Cpu className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                {companyInfo.name}
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {companyInfo.tagline}. Đối tác công nghệ tin cậy đồng hành cùng doanh nghiệp xây dựng hệ sinh thái số bền vững và hiệu năng vượt trội.
            </p>

            {/* Live Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-medium">All Systems Operational</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400">Uptime 99.99%</span>
            </div>
          </div>

          {/* Column 2: Giải pháp */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Giải Pháp Trọng Tâm
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#services" className="hover:text-indigo-400 transition-colors">
                  AI Customer Support Agent
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-indigo-400 transition-colors">
                  Enterprise Web Platform
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-indigo-400 transition-colors">
                  Cloud Migration & CI/CD
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-indigo-400 transition-colors">
                  Automated Workflow ERP
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-indigo-400 transition-colors">
                  Predictive Data Warehouse
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Điều hướng */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Liên Kết Nhanh
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  Trang chủ
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-indigo-400 transition-colors">
                  Dịch vụ & Bảng giá
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-indigo-400 transition-colors">
                  Câu hỏi thường gặp
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-indigo-400 transition-colors">
                  Đặt lịch tư vấn kiến trúc
                </a>
              </li>
              <li>
                <span className="text-slate-500">Chính sách bảo mật (NDA)</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Liên hệ */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Trụ Sở & Liên Hệ
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <span>Tòa nhà Saigon Innovation Hub, Quận 1, TP. Hồ Chí Minh</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>contact@nexaflow.ai</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>(+84) 28 8888 6688</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {companyInfo.name}. Toàn bộ bản quyền được bảo lưu.</p>
          
          <div className="flex items-center gap-4">
            <span>Thiết kế kiến trúc chuẩn Enterprise Frontend</span>
            <button
              onClick={scrollToTop}
              type="button"
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              title="Cuộn lên đầu trang"
              aria-label="Về đầu trang"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
