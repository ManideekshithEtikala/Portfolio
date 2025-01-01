import React from "react";
import { HERO_CONTENT } from "../constants";
import profilepic from "../assets/profilepic1.png";
const Main = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-col md:flex-row felx-wrap items-center justify-center">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-5xl font-thin tracking-tight lg:mt-1 md:text-6xl">
              ManiDeekshith Etikala
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-300 to-purple-500 bg-clip-text text-3xl md:text-4xl tracting-tight text-transparent">Full Stack 
              WebDeveloper
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">{HERO_CONTENT}</p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img src={profilepic} className="h-48 w-48 md:h-64 md:w-64 lg:h-96 lg:w-96 rounded-md" alt="profile image"/>
          

          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
