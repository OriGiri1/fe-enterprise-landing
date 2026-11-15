# NexaFlow AI — Landing Page Doanh Nghiệp

## 1. Giới thiệu Doanh nghiệp
- **Tên thương hiệu:** **NexaFlow AI**
- **Lĩnh vực / Chủ đề:** Công nghệ & Phần mềm (Tech / Software Agency) chuyên cung cấp giải pháp Hạ tầng Cloud & AI Agent tự động hóa.
- **Slogan:** *"Tăng tốc chuyển đổi số với Hạ tầng Cloud & AI Agent thế hệ mới."*
- **Mục tiêu chuyển đổi (CTA):** Đặt lịch tư vấn kiến trúc hệ thống 1-1 & Nhận báo giá tự động.

---

## 2. Danh sách Tính năng & React Hooks Đã Triển Khai

| STT | Hooks / Kỹ thuật | File | Mô tả luồng ngắn gọn |
|---|---|---|---|
| **1** | `useEffect` + Cleanup | `src/components/Navbar.jsx` | Lắng nghe `window.scroll`. Khi cuộn > 50px, Navbar tự đổi sang nền mờ (`backdrop-blur-md bg-white/80 dark:bg-slate-900/80 shadow-md py-3`), khi ở đầu trang thì trong suốt (`py-5`). Có hàm cleanup `removeEventListener` khi unmount. |
| **2** | `useState` + `useMemo` | `src/components/ServiceCatalog.jsx` | Quản lý tab danh mục và từ khóa tìm kiếm. `useMemo` tự động lọc danh sách dịch vụ theo danh mục, tiêu đề, mô tả và tech stack; hiển thị Empty State nếu không có kết quả. |
| **3** | `useState` + `useEffect` | `src/components/ServiceModal.jsx` | Mở modal chi tiết khi click dịch vụ. `useEffect` khóa cuộn trang (`body.style.overflow = 'hidden'`) và mở lại khi đóng. Đóng modal bằng phím `Escape` hoặc click Backdrop. Có nút chọn dịch vụ để tự điền vào Contact Form và cuộn xuống `#contact`. |
| **4** | `useState` (Accordion) | `src/components/FaqAccordion.jsx` | Quản lý câu hỏi FAQ theo cơ chế chỉ mở duy nhất 1 câu tại một thời điểm (mở câu mới tự đóng câu cũ, click lại câu đang mở thì đóng lại). |
| **5** | Controlled Component + Async Simulation | `src/components/ContactForm.jsx` | Quản lý toàn bộ input bằng `useState`. Validate regex Email và số điện thoại, báo lỗi đỏ và tự xóa lỗi khi nhập lại. Giả lập gửi form qua `setTimeout` (1.5s): nút chuyển `disabled` kèm icon xoay spinner, gửi xong hiện Toast thành công và reset form. |
| **6** | `useEffect` + `localStorage` | `src/App.jsx` | Đồng bộ 2 trạng thái vào `localStorage`: (1) Chế độ Dark/Light mode (thêm/xóa class `dark` trên thẻ `html`); (2) Danh sách ID dịch vụ đã lưu (Bookmarks) kèm số đếm trên Navbar. Tải lại trang (F5) vẫn giữ nguyên trạng thái. |

---

## 3. Hướng dẫn Chạy Dự án

```bash
# 1. Cài đặt thư viện
npm install

# 2. Khởi chạy môi trường phát triển (Local)
npm run dev
# Mở trình duyệt: http://localhost:3000

# 3. Đóng gói kiểm tra bản Production
npm run build
```
