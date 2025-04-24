
import { HERO_CONTENT } from "../constants";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import profilepic from "../assets/profilepic1.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});
const Main = () => {
  const [text] = useTypewriter({
    words: ["Full Stack Developer", "Java", "React JS","Devops","Automation Tools"],
    loop: true,
    typeSpeed: 120,
  });

  //Parallax effect for text and image
  const parallaxText = {
    initial: { opacity: 0, y: 50 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
    viewport: { once: true },
  };
  const parallaxImage = {
    initial: { opacity: 0, y: 100 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, ease: "easeInOut" },
    },
    viewport: { once: true },
  };
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-col md:flex-row felx-wrap items-center justify-center">
        <div className="w-full lg:w-1/2">
          <motion.div
            variants={parallaxText}
            initial="initial"
            whileInView="whileInView"
            className="flex flex-col items-center lg:items-start"
          >
            <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
              className="pb-16 text-5xl font-thin tracking-tight lg:mt-1 md:text-6xl"
            >
              ManiDeekshith Etikala
            </motion.h1>
            <motion.span variants={container(0.5)}
            initial="hidden"
            animate="visible" className="bg-gradient-to-r from-pink-300 via-slate-300 to-purple-500 bg-clip-text text-3xl md:text-4xl tracting-tight text-transparent">
              {text}
              <span>
                <Cursor
                  className="bg-gradient-to-r from-pink-300 via-slate-300 to-purple-500 bg-clip-text text-3xl md:text-4xl tracting-tight text-transparent"
                  cursorStyle="|"
                />
              </span>
            </motion.span>
            <motion.p variants={container(1)}
            initial="hidden"
            animate="visible" className="my-2 max-w-xl py-6 font-light tracking-tighter">
                {HERO_CONTENT}
            </motion.p>
          </motion.div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img           
              variants={parallaxImage}
              initial="initial"
              whileInView="whileInView"
              
              src={profilepic}
              className="h-48 w-48 md:h-64 md:w-64 lg:h-96 lg:w-96 rounded-full"
              alt="profile image"

            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
