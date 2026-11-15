import React, { useState } from 'react';
import { 
  ChevronDown, 
  HelpCircle, 
  ShieldCheck, 
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { faqsData } from '../data/mockData';

export default function FaqAccordion() {
  // Hook 4: useState for single active open FAQ item
  // Cơ chế: bấm vào câu mới tự thu gọn câu cũ; bấm lại câu đang mở sẽ đóng lại
  const [openId, setOpenId] = useState(faqsData[0]?.id || null);

  const toggleAccordion = (id) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 bg-white dark:bg-slate-950 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Giải đáp Thắc mắc Doanh nghiệp</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Câu Hỏi Thường Gặp (FAQ)
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Mọi thông tin về quyền sở hữu mã nguồn, tính bảo mật dữ liệu AI, cam kết bảo hành và lộ trình thanh toán minh bạch.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqsData.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-indigo-500/50 bg-indigo-50/20 dark:bg-indigo-950/20 shadow-md shadow-indigo-500/5'
                    : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                {/* Accordion Trigger Button */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer transition-colors"
                >
                  <span className="font-bold text-base sm:text-lg text-slate-900 dark:text-white pr-4">
                    {faq.question}
                  </span>
                  
                  {/* Rotating Chevron Icon */}
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'rotate-180 bg-indigo-600 text-white shadow-sm'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Accordion Content Panel */}
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed border-t border-indigo-100/60 dark:border-indigo-900/40 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions? Help Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-indigo-50 to-violet-50 dark:from-slate-900 dark:to-indigo-950/40 border border-indigo-100 dark:border-indigo-900/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-indigo-600 text-white shadow-sm">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                Doanh nghiệp của bạn có bài toán đặc thù?
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Đội ngũ kỹ sư giải pháp sẵn sàng tư vấn kiến trúc 1-on-1 miễn phí.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-sm shrink-0"
          >
            Đặt Lịch Ngay
          </a>
        </div>

      </div>
    </section>
  );
}
