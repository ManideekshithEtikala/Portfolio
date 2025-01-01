import React from "react";
import aboutImg from "../assets/about.jpeg";
import { ABOUT_TEXT } from "../constants";
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About 
        <span className="text-neutral-500"> Me</span>
      </h1>
      <div className="flex flex-col md:flex-row items-center lg:items-start " >
        <div className="w-full lg:w-1/2 lg:p-8 ">
          <div className="flex items-center justify-center ">
          <img
            src={aboutImg}
            className="rounded-2xl h-60 md:h-96 lg:h-[24rem] hover:shadow-xl hover:shadow-white/50 transition-shadow duration-300 hover:ease-in-out" 
            alt="aboutmeimage"
          />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-5">{ABOUT_TEXT}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
