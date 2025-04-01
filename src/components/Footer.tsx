import React from "react";
import { RiGithubFill, RiLinkedinBoxFill } from "react-icons/ri";
import { RiYoutubeFill } from "react-icons/ri";

import { RiTwitterFill } from "react-icons/ri";
const Footer = () => {
  return (
    <div className="w-full h-[30vh] bg-[#0000009c]">
      <div className="max-w-7xl mx-auto flex justify-center items-center py-20">
        <div className="flex flex-col">
          <h1 className="text-3xl font-jost text-center">Follow me on</h1>

          <div className="flex gap-x-3 items-center justify-center text-gray">
          <a className="hover:text-white">
            <RiLinkedinBoxFill size={30}/>
          </a>
          <a className="hover:text-white">
            <RiYoutubeFill size={30}/>
          </a>
          <a className="hover:text-white">
            <RiGithubFill size={30}/>
          </a>
          <a className="hover:text-white">
            <RiTwitterFill size={30}/>
          </a>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Footer;
