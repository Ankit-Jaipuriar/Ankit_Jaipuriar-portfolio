import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  // FaBriefcase,
  FaGraduationCap,
  // FaCode,
} from "react-icons/fa";
// import { FiFileText, FiExternalLink } from "react-icons/fi";

import Work1 from "./assets/scac.png";
import Work2 from "./assets/projectpage.png";
import Work3 from "./assets/vege.png";
import Work4 from "./assets/note.png";
// import Work5 from "./assets/QR_code_generator.png";
// import Work6 from "./assets/project-2.jpg";

import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Projects",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    description:"Hello, I'm Ankit Kumar Jaipuriar, Experienced in full-stack development using React, Node.js, Express.js, and MongoDB. Skilled in AI integration, natural language processing (NLP), and real-time communication platforms. Proficient in C++, Python, JavaScript, and Java, with expertise in JWT authentication, RESTful APIs, and WebContainer technology. Strong in competitive programming, solving 700+ questions on platforms like CodeChef and LeetCode. Familiar with Docker, Git, and Redux Toolkit for state management and containerization."},

  // {
  //   id: 2,
  //   title: 'Email : ',
  //   description: 'aanyasharma2408@gmail.com',
  // },

  // {
  //   id: 3,
  //   title: 'Github : ',
  //   description: 'https://github.com/Aanyaa26',
  // },
  // {
  //   id: 4,
  //   title: ' : ',
  //   description: 'https://.com/aanyasharma2408/',
  // },
  // {
  //   id: 5,
  //   title: 'Linkedin ',
  //   description: 'https://www.linkedin.com/in/aanya-sharma-2841b2248/',
  // },
];

export const stats = [
  {
    id: 1,
    no: "700+",
    title: "Coding<br /> Questions",
  },

  {
    id: 2,
    no: "4+",
    title: "Completed <br /> Projects",
  },

  {
    id: 3,
    no: "1",
    title: "Participation<br /> in hackathons",
  },

  {
    id: 3,
    no: "6+",
    title: "Achievements &<br />Certifications ",
  },
];


export const resume = [
  {
    id: 1,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2022-2026",
    title: "B.Tech. Computer Science and Engineering <span> Lovely Professional University </span>",
    desc: "Currently pursuing a Bachelor's degree in Computer Science and Engineering with a CGPA of 8.37 from Lovely Professional University.",
  },
  {
    id: 2,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2020-2021",
    title: "Senior Secondary (XIIth) <span> Manav Bharti National School </span>",
    desc: "Completed Senior Secondary education with a percentage of 91.6%.",
  },
  {
    id: 3,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2018-2019",
    title: "Secondary (Xth) <span> Manav Bharti National School </span>",
    desc: "Completed Secondary education with a percentage of 91.3%.",
  },
];

export const skills = [
  {
    id: 1,
    title: "C",
    percentage: "90",
  },
  {
    id: 2,
    title: "C++",
    percentage: "95",
  },
  {
    id: 3,
    title: "JavaScript",
    percentage: "90",
  },
  {
    id: 4,
    title: "SQL",
    percentage: "85",
  },
  {
    id: 5,
    title: "HTML",
    percentage: "95",
  },
  {
    id: 6,
    title: "CSS",
    percentage: "95",
  },
  {
    id: 7,
    title: "ReactJS",
    percentage: "90",
  },
  {
    id: 8,
    title: "NodeJS",
    percentage: "85",
  },
  {
    id: 9,
    title: "ExpressJS",
    percentage: "85",
  },
  {
    id: 10,
    title: "MongoDB",
    percentage: "85",
  },
];

export const portfolio = [
  // Existing 6 projects...
  // Add your projects below

  {
    id: 1,
    img: Work4, // Add a relevant image reference
    title: "Secure Notebook",
    details: [
      {
        title: "Project : ",
        desc: "Secure-Notebook",
      },
      {
        title: "Language : ",
        desc: "ReactJs, Tailwind CSS, MongoDB, NodeJS, ExpressJS",
      },
      {
        title: "Description : ",
        desc: "JWT-based authentication, bcrypt-encrypted password-locking, RBAC, expiring shared notes, RESTful API architecture.",
      },
      { title: "Link :", desc: "https://secure-notebook-production-ready.onrender.com/" },
    ],
  },
  {
    id: 2,
    img: Work2,
    title: "AI-WorkSpace",
    details: [
      {
        title: "Project : ",
        desc: "AI-WorkSpace",
      },
      {
        title: "Language : ",
        desc: "ReactJs, Tailwind CSS, MongoDB, NodeJS, ExpressJS",
      },
      {
        title: "Description : ",
        desc: "Real-time team collaboration platform with AI-assisted code generation and WebContainer browser execution.",
      },
      { title: "Link :", desc: "https://github.com/Ankit-Jaipuriar/AI-WorkSpace" },
    ],
  },
  {
    id: 3,
    img: Work3,
    title: "Vegetable Classifier",
    details: [
      {
        title: "Project : ",
        desc: "Vegetable Classifier",
      },
      {
        title: "Language : ",
        desc: "Deep Learning, Transfer Learning, MobileNetV2, TensorFlow",
      },
      {
        title: "Description : ",
        desc: "Classifies 15 vegetables with 99.69% accuracy using MobileNetV2 and data augmentation.",
      },
      { title: "Link :", desc: "https://vegetable-classifier-ankit-jaipuriar.streamlit.app/" },
    ],
  },
  {
    id: 4,
    img: Work1,
    title: "TextFix & Complete",
    details: [
      {
        title: "Project : ",
        desc: "TextFix & Complete",
      },
      {
        title: "Language : ",
        desc: "NLP, Hidden Markov Model, Streamlit",
      },
      {
        title: "Description : ",
        desc: "Bi-gram and HMM-based text auto-completion and spelling correction tool with Viterbi algorithm and interactive UI.",
      },
      { title: "Link :", desc: "https://spellcheckandautocomplete.streamlit.app/" },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme9,
    color: "green",
  },

  {
    id: 2,
    img: Theme1,
    color: "purple",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme2,
    color: "red",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
