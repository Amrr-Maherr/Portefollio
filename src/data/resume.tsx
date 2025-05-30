import { Icons } from "@/components/icons";
import { HomeIcon, UserIcon, GraduationCapIcon, CodeIcon, FolderIcon } from "lucide-react";

export const DATA = {
  name: "Amr Maher Ali",
  initials: "DV",
  url: "https://dillion.io",
  location: "Mansoura, Egypt",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
  "Frontend Engineer (React, Next.js, React Native) turned Entrepreneur. I love building things and helping people.",
  summary:
    "At the end of 2024, I made the decision to fully dedicate myself to front-end development after completing a top-ranked diploma in React from SEF Academy. I hold a bachelor’s degree in Management Information Systems and have a passion for creating clean, interactive, and user-friendly web applications. Over the past years, I’ve sharpened my skills in HTML, CSS, JavaScript, and React, building projects like Dish Discovery, which was featured by SEF Academy. My journey has been fueled by constant learning, hands-on projects, and a drive to push my boundaries in web development.",
  skills: [
    "HTML",
    "CSS",
    "Bootstrap",
    "JavaScript (ES6+)",
    "React",
    "React Hooks",
    "React Router",
    "Next.js",
    "React Native",
    "Framer Motion",
    "Redux / State Management",
    "React NativeGit & GitHub",
    "API Integration (REST APIs)",
    "Responsive Design",
    "Flexbox & CSS Grid",
    "Component-Based Architecture",
    "Basic Testing (React Testing Library, Jest)",
    "Deployment (Vercel, Netlify)",
  ],
  internships: [
    {
      company: "SEF Academy",
      title: "Frontend Intern (React & Next.js)",
      location: "Remote",
      start: "July 2024",
      end: "September 2024",
      description:
        "Completed an intensive internship focused on building modern web applications using React and Next.js. Worked on real-world projects, improved UI/UX skills, and collaborated with a team of developers.",
      logoUrl: "/sef-academy.png",
      href: "https://sef.academy",
    },
    {
      company: "SEF Academy",
      title: "Frontend Intern (React & Next.js)",
      location: "Remote",
      start: "July 2024",
      end: "September 2024",
      description:
        "Completed an intensive internship focused on building modern web applications using React and Next.js. Worked on real-world projects, improved UI/UX skills, and collaborated with a team of developers.",
      logoUrl: "/sef-academy.png",
      href: "https://sef.academy",
    },
  ],
  navbar: [
    { href: "#about", icon: UserIcon, label: "About" },
    { href: "#education", icon: GraduationCapIcon, label: "Education" },
    { href: "#skills", icon: CodeIcon, label: "Skills" },
    { href: "#projects", icon: FolderIcon, label: "Projects" },
  ],
  contact: {
    email: "amrr.maherr242gmail.com",
    tel: "+01019672658",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Amrr-Maherr",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/Amrr-Maherr/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "NEOXERO",
      href: "https://www.linkedin.com/company/neoxero/?originalSubdomain=eg",
      badges: [],
      location: "Remote",
      title: "Front-End Developer",
      logoUrl: "/d534a58082815.57176c51d16d0.png",
      start: "Mar 2025",
      end: "Present",
      description:
        "Implemented front-end development best practices to ensure code quality and maintainability.",
    },
    {
      company: "DevNest",
      badges: [],
      href: "https://shopify.com", // قد تحتاج لتغيير هذا الرابط لـ DevNest
      location: "Remote",
      title: "Frontend Engineer",
      logoUrl: "/WhatsApp Image 2025-05-30 at 21.13.06_f352b904.jpg", // قد تحتاج شعار DevNest
      start: "January 2021",
      end: "April 2021",
      description:
        "Built responsive user interfaces using React.js, HTML, CSS, and JavaScript.",
    },
    {
      company: "Tech Titans (Freelance)",
      badges: [],
      href: "https://shopify.com", // قد تحتاج لتغيير هذا الرابط
      location: "Remote",
      title: "Front-End Developer",
      logoUrl: "/WhatsApp Image 2025-05-30 at 21.08.13_29bbc8fe.jpg", // قد تحتاج شعار Tech Titans
      start: "Feb 2025",
      end: "Present",
      description:
        "Built responsive user interfaces using React.js, HTML, CSS, and JavaScript.",
    },
    {
      company: "Nexus (Freelance) / Shopify Context", // تم التعديل بناءً على مدخلاتك السابقة
      badges: [],
      href: "https://shopify.com", // استخدمت رابط Shopify حيث كان الـ href الأصلي نصًا
      location: "Remote",
      title: "Frontend Engineer",
      logoUrl: "/WhatsApp Image 2025-05-30 at 21.11.35_30b91b38.jpg",
      start: "Jan 2025",
      end: "Present",
      description:
        "Developed web solutions using React.js, HTML, CSS, and JavaScript.",
    },
    {
      company: "Soft Development (Freelance)",
      badges: [],
      href: "https://shopify.com", // قد تحتاج لتغيير هذا الرابط
      location: "Remote",
      title: "Frontend Engineer",
      logoUrl: "/WhatsApp Image 2025-05-30 at 21.07.29_8f712f40.jpg", // قد تحتاج شعار Soft Development
      start: "July 2025",
      end: "Present",
      description:
        "Developed custom software solutions using React.js and front-end technologies.",
    },
    {
      company: "The Fourth Pyramid",
      badges: [],
      href: "https://www.linkedin.com/company/fourth-pyramid/?originalSubdomain=eg",
      location: "Remote",
      title: "Front-End Developer",
      logoUrl: "/images.png",
      start: "Jan 2025",
      end: "Mar 2025",
      description:
        "Developed and maintained responsive web applications using React.js, HTML, CSS,and JavaScript",
    }
  ],
  education: [
    {
      school: "M.E.T Academy",
      href: "https://buildspace.so",
      logoUrl: "/buildspace.jpg",
      start: "2019",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ]
} as const;
