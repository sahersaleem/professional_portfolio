"use client";

import Carousel from "./ui/carousal";
export default function Projects() {
  const slideData = [
    {
      title: "Full Stack Learning Management System",
      button: "Live preview",
      src: "/images/lms.png",
    },
    {
      title: "Coza store",
      button: "Live preview",
      src: "/images/coza.png",
    },
    {
      title: "Avion Market Place",
      button: "Live preview",
      src: "/images/avion.png",
    },
    {
      title: "Air bnb",
      button: "Live preview",
      src: "/images/airbnb.png",
    },
    {
      title: "Resume builder",
      button: "Live preview",
      src: "/images/resumebuilder.png",
    },
    {
      title: "Portfolio",
      button: "Live preview",
      src: "/images/portfolio.png",
    },
    {
      title: "Glint",
      button: "Live preview",
      src: "/images/glint.png",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10" id="projects">
      <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
        My Projects
      </h2>
      <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm font-jost">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        fugiat aliquam sapiente cupiditate dolorum, laudantium autem odio? Odio
        eaque cupiditate dolorum dolor nemo quis molestiae excepturi, iusto unde
        repellendus aperiam!
      </p>

      <div className="relative overflow-hidden w-full h-full py-20">
        <Carousel slides={slideData} />
      </div>
    </div>
  );
}
