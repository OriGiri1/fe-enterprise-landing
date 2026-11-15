import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Bookmark, 
  BookmarkCheck, 
  Clock, 
  Tag, 
  ArrowUpRight, 
  RotateCcw, 
  Sparkles,
  Layers,
  Heart,
  Filter
} from 'lucide-react';
import { categories, servicesData } from '../data/mockData';

export default function ServiceCatalog({ 
  bookmarkedIds = [], 
  onToggleBookmark, 
  onSelectService 
}) {
  // Hook 2: useState for category & search query
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [searchQuery, setSearchQuery] = useState("");
  const [showOnlyBookmarks, setShowOnlyBookmarks] = useState(false);

  // Hook 2: useMemo for filtering services
  const filteredServices = useMemo(() => {
    return servicesData.filter((service) => {
      // Filter by bookmarked only toggle
      if (showOnlyBookmarks && !bookmarkedIds.includes(service.id)) {
        return false;
      }

      // Filter by category
      const matchesCategory = 
        selectedCategory === "Tất cả" || service.category === selectedCategory;

      if (!matchesCategory) return false;

      // Filter by search query across title, shortDesc, techStack
      if (!searchQuery.trim()) return true;

      const query = searchQuery.toLowerCase().trim();
      const matchesTitle = service.title.toLowerCase().includes(query);
      const matchesDesc = service.shortDesc.toLowerCase().includes(query);
      const matchesTech = service.techStack.some((tech) => 
        tech.toLowerCase().includes(query)
      );

      return matchesTitle || matchesDesc || matchesTech;
    });
  }, [selectedCategory, searchQuery, showOnlyBookmarks, bookmarkedIds]);

  // Reset filters handler
  const handleResetFilters = () => {
    setSelectedCategory("Tất cả");
    setSearchQuery("");
    setShowOnlyBookmarks(false);
  };

  return (
    <section id="services" className="py-20 bg-slate-100/60 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-indigo-100 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
            <Layers className="w-3.5 h-3.5" />
            <span>Danh mục Dịch vụ & Giải pháp Doanh nghiệp</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Hạ tầng Số & Tự Động Hóa Thế Hệ Mới
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Khám phá các gói giải pháp chìa khóa trao tay, tối ưu hiệu suất và cam kết bàn giao 100% mã nguồn độc quyền.
          </p>
        </div>

        {/* Filter Bar & Search Input */}
        <div className="mb-10 space-y-5">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm theo tên dịch vụ, mô tả, React, AI, AWS..."
                className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1"
                  aria-label="Xóa từ khóa"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Quick Filter: Show Bookmarked Only */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowOnlyBookmarks(!showOnlyBookmarks)}
                className={`inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all border cursor-pointer ${
                  showOnlyBookmarks
                    ? 'bg-rose-50 dark:bg-rose-950/40 border-rose-300 dark:border-rose-800 text-rose-600 dark:text-rose-300 shadow-sm'
                    : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-750'
                }`}
              >
                <Heart className={`w-4 h-4 ${showOnlyBookmarks ? 'fill-rose-500 text-rose-500' : 'text-slate-400'}`} />
                <span>Chỉ xem đã lưu ({bookmarkedIds.length})</span>
              </button>
            </div>

          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-150 cursor-pointer ${
                    isSelected
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20 font-semibold'
                      : 'bg-white dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/80'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Count Summary */}
        <div className="flex items-center justify-between mb-6 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          <span>
            Hiển thị <strong>{filteredServices.length}</strong> / {servicesData.length} giải pháp phù hợp
          </span>
          {(searchQuery || selectedCategory !== "Tất cả" || showOnlyBookmarks) && (
            <button
              onClick={handleResetFilters}
              className="inline-flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Xóa bộ lọc</span>
            </button>
          )}
        </div>

        {/* Services Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredServices.map((service) => {
              const isBookmarked = bookmarkedIds.includes(service.id);

              return (
                <div
                  key={service.id}
                  className="group relative flex flex-col justify-between rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 p-6 hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all duration-300"
                >
                  <div>
                    {/* Card Top: Badges & Bookmark Toggle */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-2">
                        {service.badge && (
                          <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                            service.badge === 'Nổi bật'
                              ? 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300'
                              : service.badge === 'Phổ biến'
                              ? 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-300'
                              : service.badge === 'Mới nhất'
                              ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300'
                              : 'bg-violet-100 text-violet-800 dark:bg-violet-950/60 dark:text-violet-300'
                          }`}>
                            {service.badge}
                          </span>
                        )}
                        <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                          {service.category}
                        </span>
                      </div>

                      {/* Bookmark Button */}
                      <button
                        onClick={() => onToggleBookmark(service.id)}
                        type="button"
                        className={`p-2 rounded-xl transition-all cursor-pointer ${
                          isBookmarked 
                            ? 'bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 shadow-sm'
                            : 'bg-slate-100 dark:bg-slate-700 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
                        }`}
                        title={isBookmarked ? "Bỏ lưu giải pháp này" : "Lưu giải pháp quan tâm"}
                        aria-label="Lưu quan tâm"
                      >
                        <Heart className={`w-4 h-4 transition-transform group-hover:scale-105 ${
                          isBookmarked ? 'fill-rose-500 text-rose-500' : ''
                        }`} />
                      </button>
                    </div>

                    {/* Service Title */}
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
                      {service.title}
                    </h3>

                    {/* Short Description */}
                    <p className="mt-2.5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                      {service.shortDesc}
                    </p>

                    {/* Duration & Delivery Info */}
                    <div className="mt-4 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                      <Clock className="w-3.5 h-3.5 text-indigo-500" />
                      <span>{service.duration}</span>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {service.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[11px] rounded-md font-medium bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom: Price & Details Action */}
                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700/80 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold block">
                        Chi phí dự kiến
                      </span>
                      <span className="text-base sm:text-lg font-extrabold text-indigo-600 dark:text-indigo-400">
                        {service.price}
                      </span>
                    </div>

                    <button
                      onClick={() => onSelectService(service)}
                      type="button"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-700 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 dark:hover:text-white transition-all duration-200 cursor-pointer"
                    >
                      <span>Xem chi tiết</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty State */
          <div className="p-12 text-center rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 max-w-lg mx-auto space-y-4">
            <div className="w-14 h-14 mx-auto rounded-full bg-indigo-50 dark:bg-indigo-950/60 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Không tìm thấy giải pháp phù hợp
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Không có giải pháp nào khớp với danh mục "{selectedCategory}" hoặc từ khóa "{searchQuery}".
            </p>
            <button
              onClick={handleResetFilters}
              type="button"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-sm"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Xóa bộ lọc & Xem tất cả</span>
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
