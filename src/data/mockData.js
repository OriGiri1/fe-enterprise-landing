// src/data/mockData.js

export const companyInfo = {
  name: "NexaFlow AI",
  tagline: "Kiến tạo Hạ tầng Số & Tự động hóa Doanh nghiệp bằng AI",
  description:
    "Chúng tôi giúp các doanh nghiệp tối ưu 60% chi phí vận hành thông qua hệ thống AI Agent tùy chỉnh, kiến trúc Microservices và nền tảng Web/App hiệu năng cao.",
  stats: [
    { id: 1, label: "Dự án triển khai", value: "120+" },
    { id: 2, label: "Uptime hệ thống", value: "99.99%" },
    { id: 3, label: "Khách hàng doanh nghiệp", value: "45+" },
    { id: 4, label: "Tốc độ phản hồi hỗ trợ", value: "< 15 phút" },
  ],
};

export const categories = [
  "Tất cả",
  "AI Automation",
  "Cloud & DevOps",
  "Web & App",
  "Data Analytics",
];

export const servicesData = [
  {
    id: "srv-1",
    title: "AI Customer Support Agent 24/7",
    category: "AI Automation",
    badge: "Nổi bật",
    price: "15.000.000đ / tháng",
    duration: "Triển khai trong 2 tuần",
    shortDesc: "Trợ lý ảo AI tích hợp RAG, tự động giải đáp 85% câu hỏi khách hàng dựa trên tài liệu nội bộ.",
    fullDesc:
      "Giải pháp xây dựng hệ thống Chatbot thông minh sử dụng mô hình ngôn ngữ lớn (LLM) kết hợp Retrieval-Augmented Generation (RAG). Hỗ trợ đa kênh từ Website, Zalo OA đến Messenger với độ trễ dưới 2 giây.",
    deliverables: [
      "Tích hợp dữ liệu nội bộ (PDF, Notion, Docs) tự động",
      "Dashboard theo dõi lịch sử hội thoại và tỷ lệ chuyển đổi",
      "Chuyển tiếp mượt mà sang nhân viên trực khi gặp ca khó",
      "Bảo mật dữ liệu chuẩn doanh nghiệp (ISO/IEC 27001)",
    ],
    techStack: ["OpenAI API", "LangChain", "Vector DB", "Node.js", "React"],
  },
  {
    id: "srv-2",
    title: "High-Conversion Enterprise Web Platform",
    category: "Web & App",
    badge: "Phổ biến",
    price: "35.000.000đ / gói",
    duration: "Triển khai trong 4 tuần",
    shortDesc: "Thiết kế và phát triển Web App chuẩn SEO, điểm Google Lighthouse 95+, tối ưu tỷ lệ chuyển đổi.",
    fullDesc:
      "Xây dựng nền tảng website doanh nghiệp và cổng thông tin khách hàng với kiến trúc Frontend hiện đại, tốc độ tải trang tức thì và giao diện UI/UX cá nhân hóa theo hành vi người dùng.",
    deliverables: [
      "Thiết kế UI/UX độc quyền trên Figma (Responsive đa thiết bị)",
      "Phát triển Frontend React/Next.js kết hợp CMS quản trị dễ dùng",
      "Tối ưu hóa Core Web Vitals & Technical SEO toàn diện",
      "Tích hợp công cụ phân tích hành vi người dùng (GA4, Hotjar)",
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "NestJS", "PostgreSQL"],
  },
  {
    id: "srv-3",
    title: "Cloud Migration & Auto-Scaling CI/CD",
    category: "Cloud & DevOps",
    badge: "Chuyên sâu",
    price: "28.000.000đ / gói",
    duration: "Triển khai trong 3 tuần",
    shortDesc: "Chuyển đổi hạ tầng lên AWS/GCP với pipeline CI/CD tự động và kiến trúc Docker/Kubernetes.",
    fullDesc:
      "Tối ưu hóa hóa đơn Cloud hàng tháng và loại bỏ thời gian chết (Downtime) khi cập nhật phiên bản mới nhờ quy trình tự động hóa kiểm thử, đóng gói container và cân bằng tải tự động.",
    deliverables: [
      "Thiết kế kiến trúc hạ tầng dưới dạng mã (Infrastructure as Code)",
      "Thiết lập CI/CD Pipeline tự động hóa từ GitHub đến Production",
      "Cấu hình cảnh báo (Monitoring & Alerting) qua Prometheus & Grafana",
      "Tối ưu hóa chi phí máy chủ giảm từ 25% - 40%",
    ],
    techStack: ["Docker", "Kubernetes", "AWS", "GitHub Actions", "Terraform"],
  },
  {
    id: "srv-4",
    title: "Automated Workflow & ERP Connector",
    category: "AI Automation",
    badge: "Mới nhất",
    price: "18.000.000đ / gói",
    duration: "Triển khai trong 2 tuần",
    shortDesc: "Tự động hóa quy trình xử lý hóa đơn, đồng bộ CRM và báo cáo doanh thu đa sàn không cần nhập liệu.",
    fullDesc:
      "Kết nối liền mạch các phần mềm rời rạc trong doanh nghiệp (CRM, Kế toán, Email, Slack/Telegram) thành một luồng tự động khép kín, tích hợp OCR đọc chứng từ bằng AI.",
    deliverables: [
      "Tự động trích xuất thông tin hóa đơn/hợp đồng bằng AI OCR",
      "Đồng bộ dữ liệu khách hàng thời gian thực giữa CRM và Google Sheets",
      "Hệ thống gửi báo cáo tổng hợp tự động mỗi 8:00 sáng",
      "Hướng dẫn vận hành và bàn giao toàn bộ kịch bản workflow",
    ],
    techStack: ["n8n", "Python", "FastAPI", "Webhooks", "Redis"],
  },
  {
    id: "srv-5",
    title: "Real-Time BI & Predictive Data Warehouse",
    category: "Data Analytics",
    badge: "Chuyên sâu",
    price: "42.000.000đ / gói",
    duration: "Triển khai trong 5 tuần",
    shortDesc: "Kho dữ liệu tập trung kết hợp thuật toán dự báo nhu cầu hàng tồn kho và xu hướng doanh thu.",
    fullDesc:
      "Thu thập, làm sạch và hợp nhất dữ liệu từ nhiều nguồn về một Data Warehouse duy nhất, cung cấp bảng điều khiển trực quan giúp ban giám đốc ra quyết định dựa trên dữ liệu thời gian thực.",
    deliverables: [
      "Xây dựng luồng ETL tự động làm sạch dữ liệu mỗi giờ",
      "Hệ thống Dashboard trực quan theo dõi KPI từng phòng ban",
      "Mô hình Machine Learning dự báo doanh số quý tiếp theo",
      "Phân quyền truy cập dữ liệu chi tiết theo cấp bậc nhân sự",
    ],
    techStack: ["Python", "BigQuery", "Apache Airflow", "Metabase", "Scikit-learn"],
  },
  {
    id: "srv-6",
    title: "Cross-Platform Mobile App MVP",
    category: "Web & App",
    badge: "Nổi bật",
    price: "50.000.000đ / gói",
    duration: "Triển khai trong 6 tuần",
    shortDesc: "Phát triển ứng dụng di động iOS & Android nhanh chóng cho Startup cần ra mắt sản phẩm thử nghiệm.",
    fullDesc:
      "Giải pháp xây dựng ứng dụng di động đa nền tảng với chi phí tối ưu, đảm bảo trải nghiệm mượt mà 60fps, tích hợp sẵn thanh toán trực tuyến và thông báo đẩy (Push Notification).",
    deliverables: [
      "Ứng dụng chạy mượt trên cả iOS và Android từ một codebase",
      "Tích hợp cổng thanh toán QR, Ví điện tử và xác thực OTP",
      "Hỗ trợ đưa ứng dụng lên App Store và Google Play Store",
      "Bảo hành kỹ thuật và sửa lỗi miễn phí trong 6 tháng đầu",
    ],
    techStack: ["React Native", "TypeScript", "Firebase", "Node.js", "REST API"],
  },
];

export const faqsData = [
  {
    id: "faq-1",
    question: "NexaFlow AI có bàn giao toàn bộ mã nguồn (Source Code) sau dự án không?",
    answer:
      "Có. Đối với các gói phát triển Web/App và hạ tầng theo yêu cầu, chúng tôi bàn giao 100% mã nguồn, tài liệu kiến trúc hệ thống và quyền quản trị cao nhất sau khi nghiệm thu.",
  },
  {
    id: "faq-2",
    question: "Dữ liệu nội bộ của công ty tôi khi tích hợp vào AI Agent có được bảo mật không?",
    answer:
      "Tuyệt đối bảo mật. Dữ liệu của doanh nghiệp được lưu trữ trên không gian Vector Database riêng biệt, mã hóa hai chiều và cam kết không sử dụng để huấn luyện các mô hình AI công cộng (kèm thỏa thuận NDA).",
  },
  {
    id: "faq-3",
    question: "Thời gian bảo hành và hỗ trợ kỹ thuật sau khi golive là bao lâu?",
    answer:
      "Tất cả dự án đều đi kèm gói bảo hành kỹ thuật từ 3 đến 6 tháng miễn phí. Đội ngũ kỹ sư trực vận hành hỗ trợ xử lý sự cố ưu tiên trong vòng 15 phút qua kênh liên lạc riêng.",
  },
  {
    id: "faq-4",
    question: "Chúng tôi có thể nâng cấp thêm tính năng sau khi giai đoạn 1 hoàn tất không?",
    answer:
      "Hoàn toàn được. Hệ thống được thiết kế theo kiến trúc Module hóa và Microservices ngay từ đầu, giúp việc mở rộng tính năng ở các giai đoạn sau diễn ra nhanh chóng mà không cần đập đi xây lại.",
  },
  {
    id: "faq-5",
    question: "Quy trình thanh toán và triển khai dự án diễn ra như thế nào?",
    answer:
      "Quy trình gồm 4 bước: (1) Tư vấn & Chốt phạm vi công việc (Scope of Work) -> (2) Tạm ứng 30% và thiết kế Prototype -> (3) Phát triển, Demo hàng tuần & nghiệm thu UAT (thanh toán 50%) -> (4) Golive, đào tạo sử dụng và tất toán 20% còn lại.",
  },
];
