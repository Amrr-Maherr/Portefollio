import { Icons } from "@/components/icons";
import {
  HomeIcon,
  UserIcon,
  GraduationCapIcon,
  CodeIcon,
  FolderIcon,
} from "lucide-react";

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
    // Frontend & UI
    "HTML & CSS",
    "JavaScript (ES6+)",
    "Responsive Design",
    "Flexbox & CSS Grid",
    "Bootstrap & Tailwind CSS",

    // React Ecosystem
    "React & React Hooks",
    "React Router",
    "Next.js",
    "Component-Based Architecture",
    "State Management (Redux)",

    // Mobile Development
    "React Native & Expo",

    // Animations
    "Framer Motion",
    "GSAP",

    // Tools & Workflow
    "Git & GitHub",
    "API Integration (REST APIs)",
    "Testing (React Testing Library, Jest)",
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
    email: "@amrr.maherr242gmail.com",
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
        url: "amrr.maherr24@gmail.com",
        icon: Icons.email,

        navbar: true,
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
      href: "https://shopify.com",
      location: "Remote",
      title: "Frontend Engineer",
      logoUrl: "/WhatsApp Image 2025-05-30 at 21.13.06_f352b904.jpg",
      start: "January 2021",
      end: "April 2021",
      description:
        "Built responsive user interfaces using React.js, HTML, CSS, and JavaScript.",
    },
    {
      company: "Tech Titans (Freelance)",
      badges: [],
      href: "https://shopify.com",
      location: "Remote",
      title: "Front-End Developer",
      logoUrl: "/WhatsApp Image 2025-05-30 at 21.08.13_29bbc8fe.jpg",
      start: "Feb 2025",
      end: "Present",
      description:
        "Built responsive user interfaces using React.js, HTML, CSS, and JavaScript.",
    },
    {
      company: "Nexus (Freelance)",
      badges: [],
      href: "https://shopify.com",
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
      href: "https://shopify.com",
      location: "Remote",
      title: "Frontend Engineer",
      logoUrl: "/WhatsApp Image 2025-05-30 at 21.07.29_8f712f40.jpg",
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
    },
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
  courses: [
    {
      title: "Frontend React Diploma",
      provider: "SEF Academy",
      dates: "2024",
      description:
        "Completed a 4-month intensive diploma focused on React, Next.js, JavaScript, and modern web development practices. Ranked 13th with a score of 96%.",
      certificateUrl: "https://sef.academy",
      icon: GraduationCapIcon,
    },
    {
      title: "JavaScript Algorithms & Data Structures",
      provider: "freeCodeCamp",
      dates: "2024",
      description:
        "Covered core JavaScript concepts, ES6, functional programming, OOP, and algorithmic problem solving.",
      certificateUrl: "https://freecodecamp.org",
      icon: CodeIcon,
    },
    {
      title: "React Complete Guide",
      provider: "Udemy",
      dates: "2023",
      description:
        "Learned advanced React concepts including hooks, state management, routing, performance optimization, and component architecture.",
      certificateUrl: "https://udemy.com",
      icon: CodeIcon,
    },
    {
      title: "Responsive Web Design",
      provider: "freeCodeCamp",
      dates: "2022",
      description:
        "Mastered HTML5, CSS3, Flexbox, CSS Grid, and responsive UI techniques.",
      certificateUrl: "https://freecodecamp.org",
      icon: HomeIcon,
    },
  ],
  projects: [
    {
      title: "Ask Genie",
      href: "https://ask-genie-three.vercel.app/",
      dates: "Feb 2025 - Apr 2025",
      active: true,
      description:
        "Built an AI-powered Q&A web application with React and Axios, integrating Google AI API for dynamic responses.",
      technologies: [
        "React",
        "Next.js",
        "Axios",
        "JavaScript",
        "TailwindCSS",
        "React Query",
        "HTML",
        "CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://ask-genie-three.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Amrr-Maherr/AskGenie",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/AskGenie.png",
      video: "",
    },
    {
      title: "SEF E-commerce",
      href: "https://web-monster-e-commerce.vercel.app/",
      dates: "Mar 2025 - May 2025",
      active: true,
      description:
        "Developed a responsive e-commerce platform using React and Bootstrap, supporting product filtering and a catalog with over 500 products.",
      technologies: ["React", "Bootstrap", "JavaScript", "HTML", "CSS"],
      links: [
        {
          type: "Website",
          href: "https://web-monster-e-commerce.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Amrr-Maherr/WebMonster-e-commerce",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/SEF E-commerce.png",
      video: "",
    },
    {
      title: "SEF Dashboard",
      href: "https://products-dashboard-five.vercel.app/",
      dates: "Apr 2025 - Jun 2025",
      active: true,
      description:
        "Built an integrated admin dashboard to manage inventory, track orders, and analyze sales data, improving operational efficiency for vendors.",
      technologies: ["React", "Bootstrap", "JavaScript", "HTML", "CSS"],
      links: [
        {
          type: "Website",
          href: "https://products-dashboard-five.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Amrr-Maherr/Products-Dashboard",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/SEF Dashboard.png",
      video: "",
    },
    {
      title: "YumAuth",
      href: "https://yum-auth.vercel.app/",
      dates: "May 2025 - Jul 2025",
      active: true,
      description:
        "Designed an interactive recipe browsing web application with React and Vite, featuring secure authentication routes.",
      technologies: [
        "React",
        "Vite",
        "JavaScript",
        "TailwindCSS",
        "React Router DOM",
        "Formik",
        "Yup",
        "Axios",
        "React Query",
        "Framer Motion",
        "HTML",
        "CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://yum-auth.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Amrr-Maherr/YumAuth",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/YumAuth.png",
      video: "",
    },
    {
      title: "Charlotte Sweets Dashboard",
      href: "https://charlotte.mlmcosmo.com/",
      dates: "Jan 2025 - Apr 2025",
      active: true,
      description:
        "Engineered an administrative dashboard with React and Bootstrap, integrating with mobile apps to optimize operations for 10+ branches.",
      technologies: [
        "React",
        "Bootstrap",
        "JavaScript",
        "Axios",
        "Framer Motion",
        "React Router DOM",
        "Recharts",
        "SweetAlert2",
        "HTML",
        "CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://charlotte.mlmcosmo.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Amrr-Maherr/Charlotte--Sweets",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Charlotte.png",
      video: "",
    },
    {
      title: "Netflix",
      href: "https://netflix-662d.vercel.app/",
      dates: "Jun 2025 - Aug 2025",
      active: true,
      description:
        "Constructed a dynamic Netflix clone using Next.js, leveraging a movie API for seamless content display.",
      technologies: [
        "Next.js",
        "JavaScript",
        "TMDB API",
        "TailwindCSS",
        "React Query",
        "Axios",
        "Framer Motion",
        "HTML",
        "CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://netflix-662d.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Amrr-Maherr/netflix",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Netflix.png",
      video: "",
    },
    {
      title: "Legends",
      href: "https://legends.legendsagencystuff.com/",
      dates: "Feb 2025 - May 2025",
      active: true,
      description:
        "Developed a dynamic web application with a user-friendly interface, leveraging modern front-end technologies for enhanced interactivity.",
      technologies: ["React", "JavaScript", "HTML", "CSS"],
      links: [
        {
          type: "Website",
          href: "https://legends.legendsagencystuff.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Amrr-Maherr/Legends",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Legends.png",
      video: "",
    },
    {
      title: "Ether Landing Page",
      href: "https://ether-landign-page.vercel.app/",
      dates: "Mar 2025 - Jun 2025",
      active: true,
      description:
        "Developed a responsive landing page using React, designed to provide an engaging and user-friendly experience.",
      technologies: ["React", "JavaScript", "HTML", "CSS"],
      links: [
        {
          type: "Website",
          href: "https://ether-landign-page.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Amrr-Maherr/ether-landign-page",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Ether.png",
      video: "",
    },
    {
      title: "Qafalah Alayman",
      href: "https://qafalah-alayman.vercel.app/",
      dates: "TBD",
      active: true,
      description:
        "Developed a web platform to streamline services for Qafalah Alayman, providing an intuitive user interface and optimized performance.",
      technologies: ["React", "JavaScript", "HTML", "CSS"],
      links: [
        {
          type: "Website",
          href: "https://qafalah-alayman.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Amrr-Maherr/qafalah-alayman",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Qafalah.png",
      video: "",
    },
    {
      title: "Qafalah Alayman Control",
      href: "https://arabic-voyage-admin.vercel.app/",
      dates: "TBD",
      active: true,
      description:
        "Built an admin dashboard to manage and monitor Qafalah Alayman services, featuring a clean interface and efficient data handling.",
      technologies: ["React", "JavaScript", "HTML", "CSS"],
      links: [
        {
          type: "Website",
          href: "https://arabic-voyage-admin.vercel.app/",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Amrr-Maherr/qafalah-alayman-control",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Control.png",
      video: "",
    },
    {
      title: "Nexton E-Commerce",
      href: "https://nexton-e-commerce.vercel.app/",
      dates: "TBD",
      active: true,
      description:
        "Nexton E-Commerce is a front-end only e-commerce application built using Next.js. It implements a modern, responsive, and SEO-friendly interface based on a Figma design, including pages like.",
      technologies: ["Next", "JavaScript", "HTML", "CSS", "Tailwind"],
      links: [
        {
          type: "Website",
          href: "https://nexton-e-commerce.vercel.app/",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Amrr-Maherr/nexton-e-commerce",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/NEXTON.png",
      video: "",
    },
  ],
} as const;
