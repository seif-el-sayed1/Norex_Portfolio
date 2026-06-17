import medCareImg from './assets/medCare.webp';
import techZoneImg from './assets/techZone.webp';
import hotelBookingImg from './assets/hotelBoking.webp';

export const projectsData = [
  {
    id: 1,
    title: {
      ar: "ميد كير - نظام متكامل لإدارة العيادات",
      en: "MedCare - Advanced Medical System"
    },
    description: {
      ar: "نظام ذكي لرقمنة العيادات والمراكز الطبية بالكامل. يسهل عملية حجز المواعيد وتنظيم قوائم انتظار المرضى، مع تقديم لوحات تحكم مخصصة للأطباء لإدارة الملفات المرضية، وإصدار التقارير الفورية، ومتابعة حسابات ومدفوعات العيادة بدقة.",
      en: "A smart management system to fully digitize clinic operations. It simplifies appointment booking and patient waiting lists, while providing dedicated dashboards for doctors to manage medical records, generate instant reports, and track finances seamlessly."
    },
    image: medCareImg,
    tech: ["React", "Node.js", "PostgreSQL", "Firebase", "Docker"],
    link: "https://drive.google.com/drive/folders/1--i5nqMxGiNueSz7eo31EcD9mbxDC-IV?usp=sharing",
    year: "2026"
  },
  {
    id: 2,
    title: {
      ar: "تك زون - منصة تجارة إلكترونية متقدمة",
      en: "TechZone E-commerce Platform" 
    },
    description: {
      ar: "متجر إلكتروني متكامل يمنح المستخدمين تجربة تسوق سريعة ومريحة لتصفح وشراء المنتجات والدفع أونلاين. يتضمن لوحة تحكم إدارية شاملة تتيح لصاحب العمل متابعة حجم المبيعات والأرباح اليومية، وإدارة المنتجات، وتتبع حالات شحن وتوصيل الطلبات للعملاء.",
      en: "A comprehensive online store providing users with a smooth and fast shopping experience to browse products and pay securely. It includes a powerful admin dashboard to track sales, manage inventory, and monitor order delivery statuses in real-time."
    },
    image: techZoneImg,
    tech: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "JWT"],
    link: "https://drive.google.com/drive/folders/1W37f2KC8c-6iuOe3r1eFc1Q6ONZKmwhd?usp=sharing",
    year: "2025"
  },
  {
    id: 3,
    title: {
      ar: "كويك ستاي - منصة حجز الفنادق",
      en: "Quick Stay - Hotel Booking Platform" 
    },
    description: {
      ar: "منصة ذكية لحجز الفنادق والإقامات، تتيح للنزلاء البحث عن الغرف المتاحة وتأكيد حجزها ودفع قيمتها بسهولة بدون أي تداخل في المواعيد. يوفر النظام لأصحاب الفنادق أدوات متكاملة لإدارة الغرف، تحديث الأسعار، ومتابعة نسب الإشغال والإيرادات المالية بشكل دوري.",
      en: "An intelligent hotel booking system that allows guests to easily find, book, and pay for available rooms without double-booking issues. It empowers hotel owners with full control over room status, dynamic pricing, and comprehensive revenue tracking."
    },
    image: hotelBookingImg,
    tech: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "JWT"],
    link: "https://drive.google.com/drive/folders/1Enp7-M_LuJFes8mW8rn2vyuC8dRPT3gv?usp=sharing",
    year: "2025"
  },
];

export default projectsData;