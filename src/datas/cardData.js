import {
  AiOutlinePicture,
  AiOutlineIdcard,
  AiFillSignature,
  AiOutlineFileDone,
} from "react-icons/ai";

export const servicesData = [
  {
    id: 1,
    title: "Landing Pages",
    text: "Landing page is designed to captivate visitors with a clean and engaging layout. It highlights key features, benefits, and calls to action, guiding users towards their desired goals with ease.",
    icon: AiOutlinePicture,
    bgColor: "bg-purple-200",
    iconColor: "text-purple-500",
  },
  {
    id: 2,
    title: "Portfolio Websites",
    text: "A portfolio website is a personal online showcase of your work and skills. It's designed to present your projects, achievements, and professional experience in a visually appealing manner.",
    icon: AiOutlineIdcard,
    bgColor: "bg-blue-200/50",
    iconColor: "text-blue-600",
  },
  {
    id: 3,
    title: "Resume Websites",
    text: "A resume website is a personal online platform that presents your professional background, skills, and achievements. Unlike a traditional resume, it allows for a more dynamic and interactive presentation.",
    icon: AiFillSignature,
    bgColor: "bg-green-200",
    iconColor: "text-green-500",
  },
  {
    id: 4,
    title: "Business Websites",
    text: "A business website is an online presence for a company, designed to provide information about its products, services, and values. It serves as a digital storefront and enhances credibility.",
    icon: AiOutlineFileDone,
    bgColor: "bg-red-200/50",
    iconColor: "text-red-500",
  },
];
