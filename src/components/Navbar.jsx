import React, { useState, useEffect } from 'react';
import { 
  Cpu, 
  Moon, 
  Sun, 
  Bookmark, 
  Menu, 
  X, 
  ArrowRight,
  Layers,
  Sparkles
} from 'lucide-react';
import { companyInfo } from '../data/mockData';

export default function Navbar({ 
  theme, 
  onToggleTheme, 
  bookmarkCount = 0, 
  onOpenBookmarks 
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Hook 1: useEffect + Event Cleanup for window scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Bắt buộc return cleanup function để tránh rò rỉ bộ nhớ (Memory Leak)
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Giải pháp & Bảng giá', href: '#services' },
    { name: 'Câu hỏi FAQ', href: '#faq' },
    { name: 'Tư vấn & Báo giá', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'backdrop-blur-md bg-white/85 dark:bg-slate-900/85 shadow-lg shadow-slate-900/5 py-3 border-b border-slate-200/60 dark:border-slate-800/80' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a 
            href="#" 
            className="flex items-center gap-2.5 group cursor-pointer"
            aria-label="NexaFlow AI Trang chủ"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-violet-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/25 group-hover:scale-105 transition-transform duration-200">
              <Cpu className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 dark:from-white dark:via-indigo-200 dark:to-white bg-clip-text text-transparent">
                {companyInfo.name}
              </span>
              <span className="text-[10px] uppercase font-semibold tracking-wider text-indigo-600 dark:text-indigo-400">
                Enterprise Cloud & AI
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Tools & CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            
            {/* Bookmarks Counter Button */}
            <button
              onClick={onOpenBookmarks}
              type="button"
              className="relative p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition-all cursor-pointer group"
              title="Xem danh sách giải pháp đã lưu"
            >
              <Bookmark className="w-4 h-4 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform" />
              {bookmarkCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 min-w-[20px] h-5 px-1.5 flex items-center justify-center text-[11px] font-bold text-white bg-gradient-to-r from-indigo-600 to-violet-600 rounded-full shadow-sm animate-scale-in">
                  {bookmarkCount}
                </span>
              )}
            </button>

            {/* Dark / Light Mode Switcher */}
            <button
              onClick={onToggleTheme}
              type="button"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition-all cursor-pointer"
              aria-label="Chuyển chế độ sáng tối"
              title={theme === 'dark' ? 'Chuyển sang giao diện Sáng' : 'Chuyển sang giao diện Tối'}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 hover:rotate-45 transition-transform" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600 hover:-rotate-12 transition-transform" />
              )}
            </button>

            {/* Primary CTA Button */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 hover:from-indigo-700 hover:to-violet-700 shadow-md shadow-indigo-600/25 hover:shadow-indigo-600/35 transition-all duration-200"
            >
              <span>Nhận Báo Giá</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu & Theme Buttons */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenBookmarks}
              type="button"
              className="relative p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200"
              aria-label="Bookmarks"
            >
              <Bookmark className="w-4 h-4 text-indigo-500" />
              {bookmarkCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 flex items-center justify-center text-[10px] font-bold text-white bg-indigo-600 rounded-full">
                  {bookmarkCount}
                </span>
              )}
            </button>

            <button
              onClick={onToggleTheme}
              type="button"
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200"
              aria-label="Theme toggle"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600" />
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200"
              aria-label="Mở menu điều hướng"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="sm:hidden mt-3 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-3 animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-violet-600 shadow-md"
              >
                <span>Nhận Báo Giá Ngay</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}
