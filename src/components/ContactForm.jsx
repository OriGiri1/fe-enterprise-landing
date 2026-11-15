import React, { useState, useEffect } from 'react';
import { 
  Send, 
  CheckCircle, 
  AlertCircle, 
  Loader2, 
  Sparkles, 
  Mail, 
  Phone, 
  Building, 
  User, 
  MessageSquare,
  ShieldCheck,
  CalendarCheck
} from 'lucide-react';
import { servicesData } from '../data/mockData';

export default function ContactForm({ initialSelectedService = "" }) {
  // Hook 5: Controlled Components with useState
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    selectedService: initialSelectedService || '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Sync initialSelectedService if updated from modal
  useEffect(() => {
    if (initialSelectedService) {
      setFormData((prev) => ({ ...prev, selectedService: initialSelectedService }));
    }
  }, [initialSelectedService]);

  // Handle Input Changes and Clear Field-specific Error
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Xóa lỗi chữ đỏ dưới ô đó ngay khi người dùng bắt đầu gõ lại
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  // Validate form fields client-side
  const validateForm = () => {
    const newErrors = {};

    // Validate Họ tên
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Vui lòng nhập họ và tên của bạn.";
    }

    // Validate Email bằng Regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Vui lòng nhập địa chỉ email doanh nghiệp.";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Email không đúng định dạng (ví dụ: name@company.com).";
    }

    // Validate Số điện thoại (nếu có nhập)
    if (formData.phone.trim()) {
      const phoneRegex = /^(0|\+84)[3|5|7|8|9][0-9]{8}$/;
      if (!phoneRegex.test(formData.phone.trim().replace(/\s/g, ''))) {
        newErrors.phone = "Số điện thoại không hợp lệ (10 chữ số tại Việt Nam).";
      }
    }

    // Validate Nội dung yêu cầu
    if (!formData.message.trim()) {
      newErrors.message = "Vui lòng chia sẻ sơ lược về nhu cầu hoặc bài toán của bạn.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Nội dung tối thiểu 10 ký tự để chuyên gia chuẩn bị tài liệu tư vấn.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form Submit Handler (Async Simulation: 1500ms)
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitSuccess(false);

    // Giả lập gửi dữ liệu bất đồng bộ 1.5 giây
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Reset toàn bộ các ô input về rỗng
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        selectedService: '',
        message: ''
      });
      setErrors({});

      // Tự động tắt thông báo sau 6 giây
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 6000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Brand Consultation Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-indigo-100 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
              <CalendarCheck className="w-3.5 h-3.5" />
              <span>Tư Vấn Kiến Trúc 1-on-1 & Nhận Báo Giá</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Bắt đầu hành trình chuyển đổi số cùng <span className="text-indigo-600 dark:text-indigo-400">NexaFlow AI</span>
            </h2>

            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Điền thông tin dự án của bạn để nhận báo giá chi tiết, phân tích kiến trúc sơ bộ và lộ trình triển khai trong vòng 24 giờ làm việc.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    Cam kết Bảo mật Tuyệt đối
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Sẵn sàng ký kết thỏa thuận bảo mật NDA trước khi tiếp cận dữ liệu và tài liệu kỹ thuật nội bộ.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
                  <CalendarCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    Phản hồi & Báo giá trong 24h
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Kiến trúc sư trưởng trực tiếp đánh giá và phản hồi bảng phân tích kỹ thuật cùng báo giá minh bạch.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Contact Box */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-indigo-500" />
                <span className="font-semibold text-slate-800 dark:text-slate-100">Email:</span>
                <span>contact@nexaflow.ai</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-indigo-500" />
                <span className="font-semibold text-slate-800 dark:text-slate-100">Hotline kỹ thuật:</span>
                <span>(+84) 28 8888 6688</span>
              </div>
            </div>
          </div>

          {/* Right Column: Controlled Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6 sm:p-10 shadow-xl shadow-slate-900/5">
              
              {/* Success Toast Banner */}
              {submitSuccess && (
                <div 
                  className="mb-6 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-700 text-emerald-800 dark:text-emerald-200 flex items-start gap-3 animate-fade-in"
                  role="alert"
                >
                  <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-bold">Đăng ký thành công!</p>
                    <p className="text-xs mt-0.5 text-emerald-700 dark:text-emerald-300">
                      Cảm ơn bạn. Chuyên gia tư vấn NexaFlow AI sẽ liên hệ lại qua email hoặc số điện thoại trong vòng 15-30 phút.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  
                  {/* Họ và tên */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                      Họ và tên <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Nguyễn Văn A"
                        className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-sm border bg-slate-50 dark:bg-slate-900/80 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none transition-all ${
                          errors.fullName
                            ? 'border-rose-500 ring-1 ring-rose-500'
                            : 'border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500'
                        }`}
                      />
                    </div>
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-rose-500 flex items-center gap-1 animate-fade-in">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Email doanh nghiệp */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                      Email doanh nghiệp <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="a.nguyen@company.com"
                        className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-sm border bg-slate-50 dark:bg-slate-900/80 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none transition-all ${
                          errors.email
                            ? 'border-rose-500 ring-1 ring-rose-500'
                            : 'border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500'
                        }`}
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1 text-xs text-rose-500 flex items-center gap-1 animate-fade-in">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  
                  {/* Số điện thoại */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                      Số điện thoại
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="0912 345 678"
                        className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-sm border bg-slate-50 dark:bg-slate-900/80 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none transition-all ${
                          errors.phone
                            ? 'border-rose-500 ring-1 ring-rose-500'
                            : 'border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500'
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-1 text-xs text-rose-500 flex items-center gap-1 animate-fade-in">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                  {/* Tên công ty / Doanh nghiệp */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                      Tên công ty
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Tên doanh nghiệp..."
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/80 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500 transition-all"
                      />
                    </div>
                  </div>

                </div>

                {/* Dịch vụ quan tâm (Dropdown) */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                    Dịch vụ quan tâm
                  </label>
                  <select
                    name="selectedService"
                    value={formData.selectedService}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl text-sm border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/80 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500 transition-all cursor-pointer"
                  >
                    <option value="">-- Chọn giải pháp bạn muốn nhận báo giá --</option>
                    {servicesData.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title} ({s.price})
                      </option>
                    ))}
                    <option value="Tư vấn giải pháp tùy chỉnh riêng">
                      Tư vấn giải pháp tùy chỉnh riêng theo nhu cầu
                    </option>
                  </select>
                </div>

                {/* Nội dung yêu cầu */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                    Nội dung yêu cầu / Bài toán doanh nghiệp <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Mô tả sơ lược về quy mô người dùng, hạ tầng hiện tại hoặc mục tiêu chuyển đổi số bạn mong muốn đạt được..."
                    className={`w-full p-4 rounded-xl text-sm border bg-slate-50 dark:bg-slate-900/80 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none transition-all resize-none ${
                      errors.message
                        ? 'border-rose-500 ring-1 ring-rose-500'
                        : 'border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-rose-500 flex items-center gap-1 animate-fade-in">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button with Loading Spinner & Disabled state */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 shadow-lg shadow-indigo-600/25 transition-all duration-200 cursor-pointer ${
                    isSubmitting 
                      ? 'opacity-70 cursor-not-allowed' 
                      : 'hover:from-indigo-700 hover:to-violet-700 hover:shadow-indigo-600/40 hover:-translate-y-0.5'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Đang xử lý gửi thông tin...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Gửi Yêu Cầu & Đặt Lịch Tư Vấn</span>
                    </>
                  )}
                </button>

                <p className="text-center text-[11px] text-slate-400 dark:text-slate-500">
                  Thông tin của bạn được cam kết bảo mật theo tiêu chuẩn ISO/IEC 27001 và không chia sẻ cho bên thứ ba.
                </p>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
