import React, { useEffect } from 'react';
import { 
  X, 
  Trash2, 
  ArrowRight, 
  Bookmark, 
  ExternalLink,
  Layers,
  Heart
} from 'lucide-react';
import { servicesData } from '../data/mockData';

export default function SavedDrawer({ 
  isOpen, 
  onClose, 
  bookmarkedIds = [], 
  onToggleBookmark,
  onSelectService,
  onProceedToQuote
}) {
  // Lock body scroll when drawer is open
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      document.body.style.overflow = originalOverflow || 'unset';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const savedServices = servicesData.filter((s) => bookmarkedIds.includes(s.id));

  return (
    <div 
      className="fixed inset-0 z-50 flex justify-end bg-slate-950/60 backdrop-blur-sm animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        className="w-full max-w-md h-full bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col justify-between p-6 animate-scale-in text-slate-900 dark:text-slate-100"
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
              <Bookmark className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Giải pháp đã lưu</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {savedServices.length} mục quan tâm trong phiên làm việc
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            type="button"
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Đóng danh sách lưu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto py-4 space-y-3">
          {savedServices.length > 0 ? (
            savedServices.map((service) => (
              <div
                key={service.id}
                className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 hover:border-indigo-500/40 transition-all space-y-2"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300">
                    {service.category}
                  </span>
                  <button
                    onClick={() => onToggleBookmark(service.id)}
                    type="button"
                    className="text-slate-400 hover:text-rose-500 transition-colors p-1"
                    title="Xóa khỏi danh sách lưu"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <h4 className="font-bold text-sm text-slate-900 dark:text-white line-clamp-1">
                  {service.title}
                </h4>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
                    {service.price}
                  </span>
                  <button
                    onClick={() => {
                      onClose();
                      onSelectService(service);
                    }}
                    className="inline-flex items-center gap-1 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-500 transition-colors"
                  >
                    <span>Xem chi tiết</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
              <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400">
                <Heart className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-slate-700 dark:text-slate-300">
                Chưa có giải pháp nào được lưu
              </h4>
              <p className="text-xs text-slate-400 max-w-xs">
                Bấm vào biểu tượng trái tim trên các thẻ dịch vụ để lưu lại và so sánh nhanh tại đây.
              </p>
            </div>
          )}
        </div>

        {/* Drawer Footer Actions */}
        {savedServices.length > 0 && (
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-2">
            <button
              onClick={() => {
                const names = savedServices.map((s) => s.title).join(", ");
                onClose();
                onProceedToQuote(names);
              }}
              type="button"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 shadow-md shadow-indigo-600/20 transition-all cursor-pointer"
            >
              <span>Nhận báo giá các mục đã lưu</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
