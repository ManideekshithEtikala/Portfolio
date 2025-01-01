import project1 from '../assets/project1.avif'
import project2 from '../assets/project2.jpeg'
import project3 from '../assets/project3.jpeg'
import project4 from '../assets/project4.jpg'

export const HERO_CONTENT = `Welcome to my portfolio—a place where creativity meets technology, and ideas evolve into impactful solutions. I am a passionate Full Stack Web Developer committed to building seamless, user-centric web applications that empower businesses and individuals alike.
With both front-end aesthetics and back-end robustness at my fingertips, I transform challenges into elegant, scalable solutions. From crafting pixel-perfect interfaces to designing efficient APIs, my work is rooted in precision, innovation, and purpose`;

export const ABOUT_TEXT = `
I am a dedicated and results-oriented Full Stack Web Developer with an unwavering passion for crafting innovative, efficient, and user-focused digital solutions. With a career built on a foundation of technical excellence and a creative mindset, I am committed to transforming complex challenges into intuitive, high-performing applications that deliver measurable value.
Driven by a love for problem-solving and an acute attention to detail, I approach every project as an opportunity to push boundaries and exceed expectations. My expertise spans the full spectrum of web development, from designing visually engaging and responsive front-end interfaces to engineering scalable, secure, and reliable back-end systems.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "React", "mongodb", "Node.js"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
  },
  {
    title: "Social Media Platform",
    image: project4,
    description:
      "A platform used to interact with other users, post content, and engage in conversations.",
    technologies: ["HTML", "CSS", "next.js", "Express", "Firebase","Rest api","Google auth"],
  },
];

export const CONTACT = {
  address: "1-104/4/4/1,SGSR colony , Ragannguda ,Hyderabad",
  phoneNo: "91+ 8790810051",
  email: "manideekshithwork@gmail.com",
};
