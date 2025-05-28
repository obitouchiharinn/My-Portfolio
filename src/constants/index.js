import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  github,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
 
  {
    title: "Backend Developer",
    icon: backend,
  },

  {
    title: "AIML Developer",
    icon: mobile,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
 
];

const experiences = [
  {
    title: "Real Time AI Voice Agent Interview Platform",
    company_name: "Starbucks",
    icon: github,
    iconBg: "#383E56",
    source_code_link: "https://github.com/",
    points: [
      "Developed a scalable, voice-interactive interview platform using Next.js, TailwindCSS, Firebase, and Vapi, enabling dynamic candidate-agent conversation",
      "Implemented real-time voice interactions through Vapi, allowing users to engage in lifelike interviews powered by AI and voice recognition.",
      "Used Firebase Auth and Firestore for secure login, real-time data storage, and seamless session management.",
      "Delivered a clean, intuitive user experience across devices using modern frontend tools and component-based architecture.",


    ],
  },
  {
    title: "URL detector",
    // company_name: "Tesla",
    icon: github,
    iconBg: "#383E56",
    source_code_link: "https://github.com/", 
    points: [
      "Built a web application using Flask and a trained ML model to classify URLs as safe or malicious, enhancing web security awareness.",
      "Designed a full-stack solution combining Python (Flask) backend with HTML and CSS frontend, providing users with a responsive and user-friendly interface.",
      "Enabled users to input URLs and receive instant classification results, using features like lexical analysis and statistical patterns for detection.",
      "Successfully deployed a trained machine learning model via Flask REST API, showcasing skills in model integration, API development, and server-side logic.",
    ],
  },
  {
    title: "NAVISIGHT A Deep Learning and Voice-Assisted System for Intelligent Indoor Navigation of the Visually Impaired",


    // company_name: "Shopify",
    icon: github,
    iconBg: "383E56",
    source_code_link: "https://github.com/",
    points: [
      "NAVISIGHT integrates object detection (YOLO11n), depth estimation (MiDaS), and scene understanding (LLaVA) to create a comprehensive indoor navigation aid tailored for visually impaired users. It identifies obstacles, estimates distances, and generates natural language scene descriptions to guide users safely and intelligently.",
      "The system uses voice commands and feedback to provide hands-free, intuitive navigation. Commands like scan trigger the detection and analysis pipeline, while responses are delivered via text-to-speech, enabling seamless interaction without the need for visual cues.",
      "Built with Flutter for the frontend and FastAPI for the backend, NAVISIGHT ensures a responsive and scalable solution. The system is optimized for mobile platforms while maintaining flexibility and speed on the server side for real-time processing.",
      "NAVISIGHT combines YOLO11n bounding boxes with MiDaS depth maps to compute object distances precisely. This hybrid approach improves spatial awareness in indoor environments, helping users avoid nearby obstacles and navigate effectively.",
    ],
  },
  {
    title: "Clothing Brand Website",
    // company_name: "Meta",
    icon: github,
    iconBg: "#383E56",
    source_code_link: "https://github.com/",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Public Transport Route Planner",
    // company_name: "Meta",
    icon: github,
    iconBg: "#383E56",
    source_code_link: "https://github.com/",
    points: [
      "Developed a user-friendly web interface using ReactJS that allows users to search and plan optimal public transport routes based on source and destination, including multi-stop and transfer options.",
      "Built a robust Express.js backend to handle user requests, compute shortest or fastest paths, and serve route data dynamically from a PostgreSQL database.",
      "Integrated PostgreSQL with PostGIS to store and query geolocation and public transport network data efficiently, supporting spatial queries for route optimization.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];  

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Bluestock",
    description:[
      
      " Developed responsive web interfaces using HTML, CSS, JavaScript to enhance user experience and performance.",
      "Collaborated with the backend team to integrate RESTful APIs, optimize workflows, and improve overall site functionality.",
    ],
      tags: [
      // {
      //   name: "react",
      //   color: "blue-text-gradient",
      // },
      // {
      //   name: "mongodb",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "tailwind",
      //   color: "pink-text-gradient",
      // },
    ],
    image: "https://media.licdn.com/dms/image/v2/D560BAQHP4iG3eYPHPA/company-logo_200_200/company-logo_200_200/0/1696913393804?e=2147483647&v=beta&t=HA4t0YUgW02oCMWaK5tRs4efzC-2EtEq_ftD3hpZw4E",
    source_code_link: "",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
