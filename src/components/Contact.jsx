import { CONTACT } from "../constants";
import { TfiEmail } from "react-icons/tfi";
import { FiPhoneForwarded } from "react-icons/fi";
import { FaAddressCard } from "react-icons/fa";
import {motion} from 'framer-motion'
const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:0.5}} className="my-10 text-center text-neutral-500 text-4xl ">
        Get<span className="text-white"> InTouch</span>
      </motion.h1>
      <div
     className="text-center tracking-tighter">
        <motion.div
        whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:0.5}} className="flex justify-center gap-4 items-center">
          <FaAddressCard className="w-6 h-6 text-white" />
          <p className="my-4">{CONTACT.address}</p>
        </motion.div>
        <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:0.5}} className="flex justify-center gap-4 items-center">
          <FiPhoneForwarded className="w-6 h-6 text-white" />
          <p className="my-4">{CONTACT.phoneNo}</p>
        </motion.div>
        <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:0.5}} className="flex justify-center gap-4 items-center">
          <TfiEmail className="w-6 h-6 text-white" />
          <a href="#" className="border-b">
            {CONTACT.email}
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
