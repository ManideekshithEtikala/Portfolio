import logo from '../assets/profilepic1.png'
import { FaLinkedin } from "react-icons/fa";
import {FaGithub} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";
const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex  flex-shrink-0 items-center'>
            <img src={logo} alt='logo'className='h-12 w-12 rounded-full'/>
        </div>
        <div className='m-8 items-center justify-center gap-4 text-2xl flex'>
          <FaGithub color='white'/>
          <FaLinkedin color='white'/>
          <FaInstagram color='white'/>
          <FaXTwitter color='white'/>
        </div>
    </nav>
  )
}

export default Navbar

