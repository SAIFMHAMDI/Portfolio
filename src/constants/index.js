import gestiondesincidentsImage from "../assets/gestiondesincidents.png";
import ecommerce from "../assets/ecommerce.png";
import youtube from "../assets/youtube.png";
import spring from "../assets/spring.png";
import angular from "../assets/angular.png";
import sql from "../assets/sql.svg";
import ionic from "../assets/ionic.png";
import webmedia from "../assets/WebMediaImage.png";
import bfi from "../assets/bfi.jpg";
import ayoub from "../assets/ayoub.jpg";
import marwen from "../assets/marwen.jpg";
import ilyes from "../assets/ilyes.jpg";

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
    meta,
    mongodb,
    git,
    figma,
    docker,
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
      title: "Work",
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
      title: "Mobile Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Database Management",
      icon: creator,
    },
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Spring Boot",
      icon: spring,
    },
    {
      name: "Angular",
      icon: angular,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "Ionic Framework",
      icon: ionic,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    }
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Web Media International",
      icon: webmedia,
      iconBg: "#383E56",
      date: "February 2023 - June 2023",
      points: [
        "Contributing to the creation and upkeep of web applications through React.js and associated technologies, within the context of operator incident management.",
        "Working closely with diverse teams including designers, product managers, and fellow developers to collectively craft top-tier products.",
        "Executing responsive design strategies and ensuring seamless compatibility across different browsers.",
        "Engaging in code assessments and furnishing valuable insights to fellow developers during the review process.",
      ],
    },
    {
      title: "Node.js Developer",
      company_name: "Web Media International",
      icon: webmedia,
      iconBg: "#383E56",
      date: "February 2023 - June 2023",
      points: [
        "Creating and maintaining robust server-side applications using Node.js and related technologies for efficient management of operator incidents.",
        "Collaborating seamlessly with multidisciplinary teams, including designers, product managers, and fellow developers, to deliver high-quality solutions.",
        "Implementing responsive server-side design principles to ensure optimal performance and compatibility across various platforms.",
        "Contributing actively to code reviews, offering constructive feedback to fellow developers and upholding code quality standards.",
      ],
    },
    {
      title: "Mobile Developer",
      company_name: "Web Media International",
      icon: webmedia,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - June 2023",
      points: [
        "Creating and maintaining mobile applications using technologies such as React Native, Kotlin, and Swift.",
        "Working closely with interdisciplinary teams, including designers, product managers, and fellow developers, to deliver exceptional mobile experiences.",
        "Implementing responsive layouts and ensuring optimal performance across various devices and screen sizes.",
        "Contributing to code reviews and offering valuable insights to enhance the overall quality of the codebase.",
      ],
    },
    {
      title: "Spring Boot & Angular Developer",
      company_name: "BFI Group",
      icon: bfi,
      iconBg: "#E6DEDD",
      date: "July 2023 - August 2023 ",
      points: [
        "Creating and maintaining dynamic user interfaces using Angular and associated technologies, within the context of cheque management.",
        "Collaborating closely with backend developers, designers, and stakeholders to design and implement user-friendly cheque management interfaces.",
        "Implementing responsive design principles to ensure a consistent and visually appealing experience across various devices and screen sizes.",
        "Contributing actively to code reviews, providing constructive feedback, and adhering to coding standards to maintain high-quality frontend code.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Youtube",
      icon: reactjs,
      iconBg: "#383E56",
      date: "Jan 2022 - March 2022",
      points: [
        "Developing and maintaining a React.js-based YouTube clone, replicating core functionalities and user experiences of the original platform.",
        "Collaborating with a cross-functional team including designers, backend developers, and product managers to create a feature-rich YouTube emulation.",
        "Implementing responsive design practices to ensure seamless user interactions across a variety of devices and screen sizes.",
        "Integrating APIs and services to fetch and display video content, comments, and user data, closely resembling the YouTube experience.",
        "Contributing actively to code reviews, participating in discussions, and providing valuable insights to enhance the quality of the clone.",  
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Ayoub Jebali",
      designation: "DevOps Engineer",
      company: "Vermeg",
      image: ayoub,
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Marwen Omrani",
      designation: "Developer",
      company: "Web Media International",
      image: marwen,
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Ilyes Fatfouti",
      designation: "Software Engineer",
      company: "Sopra",
      image: ilyes,
    },
  ];
  
  const projects = [
    {
      name: "Operator Incident Management",
      description:
        "Powered by ReactJS, Node.js, and Ionic framework, our operator incident management system for web and mobile ensures swift resolution of operational issues in Save Me project Company.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
        {
          name: "ionic",
          color: "pink-text-gradient",
        },
      ],
      image: gestiondesincidentsImage,
      source_code_link: "https://github.com/SAIFMHAMDI/Gestion_Des_Incidents.git",
    },    
    {
      name: "E-commerce",
      description:
        
      "A modern e-commerce hub powered by ReactJS, delivering seamless product exploration, personalized recommendations, and effortless transactions. Elevate your shopping with our intuitive interface and responsive design.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "stripe",
          color: "green-text-gradient",
        },
        {
          name: "sanity",
          color: "pink-text-gradient",
        },
      ],
      image: ecommerce,
      source_code_link: "https://github.com/SAIFMHAMDI/GoCheapStore.git",
    },
    {
      name: "Youtube Clone",
      description:
      "A cutting-edge YouTube clone crafted with ReactJS, offering a platform for seamless video content discovery, viewing, and interaction. Dive into a world of captivating videos, user-friendly navigation, and engaging social features, all wrapped in a familiar interface."  ,
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: youtube,
      source_code_link: "https://github.com/SAIFMHAMDI/youtube-clone-.git",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };