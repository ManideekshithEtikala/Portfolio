import logo from '../assets/logo.png'
import { FaLinkedin } from "react-icons/fa";
import {FaGithub} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";
const Navbar = () => {
  return (
    <nav className='mb-10 flex items-center justify-between py-8 '>
        <div className='flex  flex-shrink-0 items-center'>
            <img src={logo} alt='logo'className='h-10 w-10 md:h-14 md:w-14 rounded-full'/>
        </div>
        <div className='m-8 items-center justify-center gap-4 text-2xl flex'>
          <FaGithub color='white' className=' w-4 h-4 md:w-6 md:h-6 hover:cursor-pointer' href='https://github.com/manideekshith' target='_blank'/>
          <FaLinkedin color='white'className='w-6 h-6' href='https://www.linkedin.com/in/manideekshithetikala' target='_blank'/>
          <FaInstagram color='white'className='w-6 h-6 ' href='https://www.instagram.com/manideekshith_etikala/profilecard/?igsh=aGMzcDIwZW42bzds' target='_blank'/>
          <FaXTwitter color='white'className='w-6 h-6' href='https://x.com/Manideeksh59417?t=AFa5UFcP_G6l01cbTAd-ZQ&s=09' target='_blank'/>
        </div>
    </nav>
  )
}

export default Navbar

