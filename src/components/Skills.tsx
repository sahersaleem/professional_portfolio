import React from "react";
import LinearWithValueLabel from "./Progress";

const skills = [
  {
    skill: "Next.js",
  },
  {
    skill: "React.js",
  },
  {
    skill: "Typescript",
  },
  {
    skill: "Javascript",
  },
  {
    skill: "Html",
  },
  {
    skill: "CSS",
  },
  {
    skill: "Tailwind Css",
  },
];

const Skills = () => {
  return (
    <div className="sm:mt-30" id="skills">
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          My skills
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm font-jost">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          fugiat aliquam sapiente cupiditate dolorum, laudantium autem odio?
          Odio eaque cupiditate dolorum dolor nemo quis molestiae excepturi,
          iusto unde repellendus aperiam!
        </p>
  
      <div className="flex justify-center  flex-col mt-14">
        {skills.map((item, index) => (
          <div key={index} className="">
             <p>{item.skill}</p>
            {" "}
            <LinearWithValueLabel />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Skills;
