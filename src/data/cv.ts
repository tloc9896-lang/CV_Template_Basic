/**
 * Nội dung CV — Basic template
 *
 * ⚠️ CHỈ NHẬP NỘI DUNG BẰNG TIẾNG VIỆT tại file này.
 * Bản tiếng Anh: bấm "English" trên website (dịch tự động qua Lingva / MyMemory).
 *
 * Hướng dẫn: src/data/HUONG_DAN_NHAP_LIEU.md
 * Màu: src/color/theme.ts
 * Font: src/font/config.ts
 * Ảnh: src/avatar/config.ts
 */

export type ContactLink = {
  label: string;
  href: string;
  /** icon key: email | phone | location | linkedin | github | website */
  icon: "email" | "phone" | "location" | "linkedin" | "github" | "website";
};

export type Experience = {
  company: string;
  role: string;
  location?: string;
  period: string;
  highlights: string[];
};

export type Education = {
  school: string;
  degree: string;
  period: string;
  details?: string;
};

export type Project = {
  name: string;
  link?: string;
  period?: string;
  description: string;
  tech: string[];
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type Certification = {
  name: string;
  issuer: string;
  year: string;
};

export type Language = {
  name: string;
  level: string;
};

export type CVContent = {
  personal: {
    fullName: string;
    title: string;
    tagline: string;
    location: string;
  };
  summary: string;
  personalInfo: {
    motto: string;
    softSkills: string[];
    interests: string[];
    aspirations: string;
  };
  contact: ContactLink[];
  experience: Experience[];
  education: Education[];
  skills: SkillGroup[];
  projects: Project[];
  certifications: Certification[];
  languages: Language[];
  references: { name: string; role: string; contact: string }[];
  meta: {
    siteTitle: string;
    description: string;
    siteUrl: string;
  };
};

export const cv = {
 
  personal: {
    fullName: "Nguyễn Thị Phúc Lộc ",
    title: "Thực tập sinh",
    tagline: "Sống khoẻ,sống đẹp là được",
    location: "Tây Ninh, Việt Nam",
  },

  
  summary:
    " Quảng trị mạng / Thiết kế web ",
  personalInfo: {
  Sống khoẻ , sống đẹp là được
    motto: "Học hỏi không ngừng, làm việc có trách nhiệm, coi trọng sự tử tế.",
  " Làm việc hiệu quả hơn , tăng cơ hội nghề nghiệp và thăng tiến "
    softSkills: [
      "Giao tiếp & thuyết trình",
      "Làm việc nhóm & Agile",
      "Giải quyết vấn đề",
      "Tư duy phản biện",
      "Quản lý thời gian",
    ],
    
    interests: ["Đọc sách công nghệ", "Chạy bộ", "Mở source", "Nhiếp ảnh"],
        aspirations:
      "Mong muốn trở thành lập trình viên giỏi và tạo ra các phần mềm hữu ích .",
  },

  contact: [
    { label: "tloc9896@gmail.com", href: "mailto:tloc9896@gmail.com", icon: "email" },
    { label: "+84 877132695", href: "tel:+84877132695", icon: "phone" },
    { label: "Tây Ninh, Việt Nam", href: "#", icon: "location" },
    {
      label: "linkedin.com/in/username",
      href: "https://linkedin.com/in/username",
      icon: "linkedin",
    },
    { label: "github.com/username", href: "https://github.com/username", icon: "github" },
    { label: "yourdomain.com", href: "https://yourdomain.com", icon: "website" },
  ] satisfies ContactLink[],

  experience: [
    {
      company: "Công ty ABC Technology",
      role: "Senior Frontend Developer",
      location: "TP. Hồ Chí Minh",
      period: "01/2023 – Hiện tại",
      highlights: [
        "Thiết kế và triển khai giao diện dashboard phục vụ 10.000+ người dùng doanh nghiệp.",
        "Giảm 40% thời gian tải trang nhờ tối ưu bundle, lazy loading và caching.",
        "Hướng dẫn 2 junior developer, review code và thiết lập chuẩn component.",
      ],
    },
    {
      company: " TTC ",
      role: "Thực tập sinh",
      location: "Tây Nninh , Việt Nam",
      period: "05/2024 – 05/2026",
      highlights: [
        "Xây dựng MVP sản phẩm SaaS từ ý tưởng đến production trong 4 tháng.",
        "Tích hợp thanh toán, xác thực OAuth và hệ thống thông báo real-time.",
        "Viết tài liệu API và unit test, đạt coverage ~75%.",
      ],
    },
  ] satisfies Experience[],

  education: [
    {
      school: "Đại học Bách Khoa TP.HCM",
      degree: "Cử nhân Công nghệ Thông tin",
      period: "2017 – 2021",
      details: "Chuyên ngành Kỹ thuật phần mềm · GPA: 3.2/4.0",
    },
  ] satisfies Education[],

  skills: [
    {
      category: "Ngôn ngữ & Framework",
      items: ["TypeScript", "React", "Next.js", "Node.js", "Python"],
    },
    {
      category: "Cơ sở dữ liệu & Cloud",
      items: ["PostgreSQL", "MongoDB", "Redis", "AWS", "Vercel"],
    },
  ] satisfies SkillGroup[],

  projects: [
    {
      name: "Hệ thống quản lý dự án nội bộ",
      link: "https://github.com/username/project",
      period: "2024",
      description:
        "Ứng dụng web quản lý task, sprint và báo cáo tiến độ cho team 15 người.",
      tech: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
    },
    {
      name: "Portfolio cá nhân",
      link: "https://yourdomain.com",
      period: "2023",
      description: "Trang giới thiệu bản thân, blog kỹ thuật và form liên hệ.",
      tech: ["Next.js", "MDX", "Vercel"],
    },
  ] satisfies Project[],

  certifications: [
    { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", year: "2024" },
    { name: "Meta Front-End Developer", issuer: "Coursera / Meta", year: "2023" },
  ] satisfies Certification[],

  languages: [
    { name: "Tiếng Việt", level: "Bản ngữ" },
    { name: "Tiếng Anh", level: "TOEIC 850 — Giao tiếp công việc" },
  ] satisfies Language[],

  /** Tùy chọn — để mảng rỗng [] để ẩn section */
  references: [] as { name: string; role: string; contact: string }[],

  /** Meta cho SEO & chia sẻ link */
  meta: {
    siteTitle: "Nguyễn Văn A — CV",
    description: "Curriculum Vitae của Nguyễn Văn A — Software Engineer",
    /** URL sau khi deploy Vercel, ví dụ: https://cv-basic.vercel.app */
    siteUrl: "https://your-cv.vercel.app",
  },
} satisfies CVContent;

/** Dữ liệu mẫu — luôn nhập tiếng Việt */
export type CVData = typeof cv;
