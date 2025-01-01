import React from 'react'
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiPhpLine } from "react-icons/ri";

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <h2 className='my-20 text-center text-4xl'>Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-2 border-neutral-900 p-4">
            <RiReactjsLine className='text-5xl md:text-7xl text-cyan-400' />
        </div>
        <div className="rounded-2xl border-2 border-neutral-900 p-4">
            <TbBrandNextjs className='text-5xl md:text-7xl text-white' />
        </div>
        <div className="rounded-2xl border-2 border-neutral-900 p-4">
            <SiMongodb className='text-5xl md:text-7xl text-green-500' />
        </div>
        <div className="rounded-2xl border-2 border-neutral-900 p-4">
            <BiLogoPostgresql className='text-5xl md:text-7xl text-[#306793] rounded-full' />
        </div>
        <div className="rounded-2xl border-2 border-neutral-900 p-4">
            <RiPhpLine className='text-5xl md:text-7xl text-black bg-[#7377ae] rounded-full' />
        </div>
        <div className="rounded-2xl border-2 border-neutral-900 p-4">
            <FaNodeJs className='text-5xl md:text-7xl text-green-500' />
        </div>

      </div>
    </div>
  )
}

export default Technologies