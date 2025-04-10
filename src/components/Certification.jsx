import { motion } from "framer-motion";

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

      <div className="relative mx-auto flex flex-col items-center">
        {certifications.map((cert, index) => (
          <div key={cert.id} className="relative flex flex-col items-center">
            <a href={cert.image} download>
              <motion.div
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.8 }}
                className=" z-10 mb-6 flex flex-col items-center rounded-2xl border-2 border-stone-200 bg-transparent p-6 text-center shadow-lg transition-all duration-500 ease-in-out hover:bg-gradient-to-tl hover:from-purple-700 hover:to-gray-500"
                style={{ width: "300px", height: "200px" }} // Fixed size for consistency
              >
                <h3 className="text-lg font-semibold text-white">
                  {cert.title}
                </h3>
                <p className="mt-2 text-sm text-gray-400">
                  {cert.organization}
                </p>
                <span className="mt-1 text-xs text-gray-500">{cert.year}</span>
              </motion.div>
            </a>

            {index < certifications.length - 1 && (
              <motion.div
                whileInView={{ height: "4rem" }}
                initial={{ height: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-1 bg-neutral-300"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certification;