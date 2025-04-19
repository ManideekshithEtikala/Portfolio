import { motion } from "framer-motion";
import { FaDownload } from 'react-icons/fa';
const certifications = [
  {
    id: 1,
    title: "Certificate of Participation Hackfinity",
    organization: "Infinity Tech",
    year: 2025,
    image: '/assets/hackathon.jpeg',
  },
  {
    id: 2,
    title: "JavaScript Intermediate and Beginner",
    organization: "HackerRank",
    year: 2024,
    image: '/assets/intermediate.pdf',
  },
  {
    id: 3,
    title: "MySQL Intermediate Certification",
    organization: "HackerRank",
    year: 2025,
    image: '/assets/hackathon.jpeg',
  },
  {
    id: 4,
    title: "Certificate of Participation Yukthi",
    organization: "B.V Raju Institute of Technology",
    year: 2024,
    image: '/assets/hackathon.jpeg',
  },
];

const Certification = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl text-white"
      >
        Certifications
      </motion.h2>

      <div className="relative mx-auto flex flex-row flex-wrap justify-center gap-8">
        {certifications.map((cert, index) => (
          <div key={cert.id} className="relative">
            <motion.div
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8 }}
              className="group z-10 flex h-64 w-64 flex-col items-center justify-center rounded-2xl border-2 border-stone-200 bg-transparent p-6 text-center shadow-lg transition-all duration-300 hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-600 hover:ease-in-out"
            >
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-lg font-semibold text-white">
                    {cert.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-300">
                    {cert.organization}
                  </p>
                  <span className="mt-1 text-xs text-gray-400">{cert.year}</span>
                </div>
                <a
                  href={cert.image}
                  download
                  className="mt-4 hidden group-hover:flex items-center gap-2 text-sm text-blue-500 hover:text-blue-400"
                >
                <FaDownload className="text-base" />
                  Download
                  </a>
                  
            </motion.div>
          
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certification;