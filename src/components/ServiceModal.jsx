import React, { useEffect } from 'react';
import { 
  X, 
  CheckCircle2, 
  Clock, 
  CreditCard, 
  Layers, 
  ArrowRight, 
  Bookmark, 
  ShieldCheck, 
  Sparkles,
  Heart
} from 'lucide-react';

export default function ServiceModal({ 
  service, 
  onClose, 
  onChooseService,
  isBookmarked,
  onToggleBookmark 
}) {
  // Hook 3: useEffect for Body Scroll Lock & Escape Key Listener with Cleanup
  useEffect(() => {
    if (!service) return;

    // Khóa cuộn trang nền khi Modal mở
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    // Bắt sự kiện bàn phím Escape để đóng Modal
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Cleanup function: khôi phục cuộn trang và gỡ bỏ event listener
    return () => {
      document.body.style.overflow = originalStyle || 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  // Handle Backdrop click (click ra ngoài vùng nền tối)
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8 animate-scale-in text-slate-900 dark:text-slate-100"
      >
        {/* Close Button Top Right */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          aria-label="Đóng hộp thoại"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-10 space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-100 text-indigo-800 dark:bg-indigo-950/70 dark:text-indigo-300">
              {service.category}
            </span>
            {service.badge && (
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-violet-100 text-violet-800 dark:bg-violet-950/70 dark:text-violet-300">
                {service.badge}
              </span>
            )}
          </div>

          <h3 id="modal-title" className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            {service.title}
          </h3>

          {/* Pricing & Duration Bar */}
          <div className="flex flex-wrap items-center gap-4 py-3 px-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 text-sm">
            <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-base">
              <CreditCard className="w-4 h-4" />
              <span>{service.price}</span>
            </div>
            <div className="w-px h-4 bg-slate-300 dark:bg-slate-700"></div>
            <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 font-medium">
              <Clock className="w-4 h-4 text-indigo-500" />
              <span>{service.duration}</span>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="mt-6 space-y-6">
          
          {/* Detailed Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
              Mô tả chi tiết giải pháp
            </h4>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {service.fullDesc}
            </p>
          </div>

          {/* Deliverables Checklist */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
              Hạng mục bàn giao (Deliverables)
            </h4>
            <ul className="space-y-2.5">
              {service.deliverables.map((item, index) => (
                <li key={index} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2.5">
              Công nghệ & Nền tảng áp dụng
            </h4>
            <div className="flex flex-wrap gap-2">
              {service.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="mt-8 pt-5 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          
          {/* Bookmark Button */}
          <button
            onClick={() => onToggleBookmark(service.id)}
            type="button"
            className={`inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold border transition-all cursor-pointer ${
              isBookmarked
                ? 'bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 border-rose-300 dark:border-rose-800'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-200'
            }`}
          >
            <Heart className={`w-4 h-4 ${isBookmarked ? 'fill-rose-500 text-rose-500' : ''}`} />
            <span>{isBookmarked ? "Đã lưu quan tâm" : "Lưu vào danh sách"}</span>
          </button>

          {/* Direct CTA: Select solution & Quote */}
          <button
            onClick={() => onChooseService(service.title)}
            type="button"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 hover:from-indigo-700 hover:to-violet-700 shadow-lg shadow-indigo-600/25 transition-all cursor-pointer"
          >
            <span>Chọn giải pháp này & Nhận báo giá</span>
            <ArrowRight className="w-4 h-4" />
          </button>

        </div>

      </div>
    </div>
  );
}
