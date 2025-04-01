
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function About() {
  const data = [

    {
        title: "2025",
        content: (
          <div className="font-jost">
            <p className="  text-2xl font-normal mb-8 text-slate-300">
             Currently Full Stack Developer
            </p>
            <p className="text-neutral-800 dark:text-neutral-200 text-lg font-normal mb-8">Expertise in Full Stack Development including 
                React , Next.js , Tailwind CSS , Mongodb , Python , Fast Api , Databases .</p>
           
          </div>
        ),
      },
    {
      title: "2025-2028",
      content: (
        <div className="font-jost">
      <p className="  text-2xl font-normal mb-8 text-slate-300">
          Undergraduate Software Engineer
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-lg font-normal mb-8">Enrolled in bachelor of software engineering program in Sindh Medrassatul Islam University.</p>
         
        </div>
      ),
    },
    {
      title: "2024 and onwards",
      content: (
        <div className="font-jost">
          <p className="  text-2xl font-normal mb-8 text-slate-300">
          Enrolled in Governor Initiative of Agentic AI and Computing.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-lg font-normal mb-8">
          In 2024 I enrolled in GIAIC , where i started my career in proggramming and now I am a full Stack developer and learning Agentic AI.
          </p>
        
        </div>
      ),
    },
   
    {
        title: "2022-2024",
        content: (
            <div className="font-jost">
              <p className="  text-2xl font-normal mb-8 text-slate-300">
          Intermediate from GOVERNMENT COLLEGE FOR WOMEN (pre-medical)
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-lg font-normal mb-8">
            I completed my FSC in pre-medical with A Grade.
          </p>
        
        </div>
        ),
      },
     { title: "2020-2022",
      content: (
        <div className="font-jost">
        <p className="  text-2xl font-normal mb-8 text-slate-300">
      Matric
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-lg font-normal mb-8">
        I completed my matric in Science from king Edward grammaer School with A<sup>+1</sup> Grade
        </p>
      
      </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
