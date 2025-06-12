// social links
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

// availiability links
import { MdPhoneIphone } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";

// skills icons
import { ImHtmlFive2 } from "react-icons/im";
import { FaCss3 } from "react-icons/fa6";
import { SiJavascript } from "react-icons/si";
import { FaSass } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa";
import { FaGulp } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiStyledcomponents } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiReactrouter } from "react-icons/si";

// sidebar icons
import { RxAvatar } from 'react-icons/rx';  
import { PiBookOpen } from 'react-icons/pi';
import { FiGrid } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';

export const icons = [
  { id: 1, title: "html", icon: ImHtmlFive2, color: "text-orange-500" },
  { id: 2, title: "css", icon: FaCss3, color: "text-blue-600" },
  { id: 3, title: "js", icon: SiJavascript, color: "text-yellow-400" },
  { id: 4, title: "sass", icon: FaSass, color: "text-red-600" },
  { id: 5, title: "gulp", icon: FaGulp, color: "text-red-400" },
  { id: 6, title: "git", icon: FaGitAlt, color: "text-orange-600" },
  { id: 7, title: "react", icon: FaReact, color: "text-blue-300" },
  {
    id: 8,
    title: "react-router-dom",
    icon: SiReactrouter,
    color: "text-neutral-700",
  },
  { id: 9, title: "redux", icon: SiRedux, color: "text-violet-600" },
  {
    id: 10,
    title: "tailwindcss",
    icon: RiTailwindCssFill,
    color: "text-blue-400",
  },
  {
    id: 11,
    title: "styled-components",
    icon: SiStyledcomponents,
    color: "text-pink-600",
  },
];

export const socialIcons = [
  {
    id: 1,
    icon: FaFacebook,
    color: "text-blue-500",
    availability: "https://www.facebook.com/",
  },
  {
    id: 2,
    icon: FaInstagram,
    color: "text-orange-500",
    availability: "https://www.instagram.com/",
  },
  {
    id: 3,
    icon: FaLinkedin,
    color: "text-blue-600",
    availability: "https://www.linkedin.com/feed/",
  },
  {
    id: 4,
    icon: FaGithub,
    color: "text-gray-600",
    availability: "https://github.com/ioan-murchello",
  },
];

export const sidebarIcons = [
  {
    id: 1,
    icon: MdPhoneIphone,
    color: "text-red-400",
    availability: "tel:+420771509321",
    title: "+420771509321",
  },
  {
    id: 2,
    icon: MdAlternateEmail,
    color: "text-green-400",
    availability: "mailto:janosmurza@gmail.com",
    title: "janosmurza@gmail.com",
  },
  {
    id: 3,
    icon: MdLocationOn,
    color: "text-violet-400",
    availability:
      "https://www.google.com/maps/place/Pr%C3%A1ga/@50.059553,14.3008183,39802m/data=!3m2!1e3!4b1!4m6!3m5!1s0x470b939c0970798b:0x400af0f66164090!8m2!3d50.0755381!4d14.4378005!16zL20vMDV5d2c?entry=ttu&g_ep=EgoyMDI1MDYwOS4wIKXMDSoASAFQAw%3D%3D",
    title: "Prague",
  },
];

export const iconsForSmallSidebar = [
  {
    id: 1,
    icon: RxAvatar,
    color: "text-green-400", 
    path: "/",
  },
  {
    id: 2,
    icon: PiBookOpen,
    color: "text-green-400", 
    path: "/resume",
  },
  {
    id: 3,
    icon: FiGrid,
    color: "text-green-400", 
    path: "/projects",
  },
  {
    id: 4,
    icon: HiOutlineMail,
    color: "text-green-400", 
    path: "/contakt",
  },
];
