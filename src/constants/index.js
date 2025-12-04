import realtime from "../assets/realtimewhiteboard.jpg";
import news from "../assets/news.jpeg";
import raiserequital from "../assets/raiserequital.jpg";
import socialmedia from "../assets/socialmedia.jpg";
import todo from "../assets/Todo.jpeg";
import experience from "../assets/experience.jpg";
export const HERO_CONTENT = `Welcome to my portfolio—a place where creativity meets technology, and ideas evolve into impactful solutions. I am a passionate Full Stack Web Developer committed to building seamless, user-centric web applications that empower businesses and individuals alike.
With both front-end aesthetics and back-end robustness at my fingertips, I transform challenges into elegant, scalable solutions. From crafting pixel-perfect interfaces to designing efficient APIs, my work is rooted in precision, innovation, and purpose`;

export const ABOUT_TEXT = `
I am a dedicated and results-oriented Full Stack Web Developer with an unwavering passion for crafting innovative, efficient, and user-focused digital solutions. With a career built on a foundation of technical excellence and a creative mindset, I am committed to transforming complex challenges into intuitive, high-performing applications that deliver measurable value.
Driven by a love for problem-solving and an acute attention to detail, I approach every project as an opportunity to push boundaries and exceed expectations. My expertise spans the full spectrum of web development, from designing visually engaging and responsive front-end interfaces to engineering scalable, secure, and reliable back-end systems.`;

export const EXPERIENCES = [
  {
    year: "2024 November - 2024 December",
    role: "Full Stack Web Developemet Intern",
    company: "Unified Mentors",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "React.js", "MySQL", "MERN stack"],
    image: experience,
  },
];

export const PROJECTS = [
  {
    title: "Real-Time Collaborative WhiteBoard with AI-Image Classifier",
    image: realtime,
    description:
      "Created a fully functional real-time collaborative whiteboard (React + Socket.IO) with AI image classification to recognize drawings instantly and support multi-user collaboration",
    technologies: ["KeyCloak", "Socket.Io", "TensorFlow", "React", "Docker"],
    link: "https://github.com/ManideekshithEtikala/RealTime-Collaborative-WhiteBoard",
  },
  {
    title: "Task Management App",
    image: todo,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "React", "mongodb", "Node.js"],
    link: "",
  },
  {
    title: "Raise-Requital",
    image: raiserequital,
    description:
      "A platform which bridges the gap between investors and entrepreneurs, allowing them to connect and collaborate on innovative projects.",
    technologies: ["MERN stack", "Socket.io", "Calendly", "Google auth"],
    link: "https://raise-requital.vercel.app/",
  },
  {
    title: "Social Media Platform",
    image: socialmedia,
    description:
      "A platform used to interact with other users, post content, and engage in conversations.",
    technologies: [
      "Next.js",
      "MERN stack",
      "Firebase",
      "Rest api",
      "Google auth",
    ],
    link: "https://socialmedia-app-seven.vercel.app/",
  },
  {
    title: "News-App",
    image: news,
    description:
      "A Website which updates and gives daily news to the users and also allows them to search for the news they want. using news api.",
    technologies: ["React.js", "Css", "Mongodb", "Rapid api"],
    link: "https://news-today-smoky.vercel.app/",
  },
];

export const CONTACT = {
  address: "1-104/4/4/1,SGSR colony , Ragannguda ,Hyderabad",
  phoneNo: "91+ 8790810051",
  email: "manideekshithwork@gmail.com",
};
