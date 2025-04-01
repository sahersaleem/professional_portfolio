"use client";

import Carousel from "./ui/carousal";
export default function Projects() {
  const slideData = [
    {
      title: "Full Stack Learning Management System",
      src: "/images/lms.png",
      button:'https://lms-ten-rust.vercel.app/'
    },
    {
      title: "Coza store",
      src: "/images/coza.png",
      button:'https://full-stack-ecommerce-website-next-js-5xz5.vercel.app/'
    },
    {
      title: "Avion Market Place",
  
      src: "/images/avion.png",
      button:'https://hackathon-nextjs-avion.vercel.app/'
    },
    {
      title: "Air bnb",
      src: "/images/airbnb.png",
      button:'https://airbnb-clone-next-js-2h4i.vercel.app/'
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
      src: "/images/glint.png",
      button:'https://glint-etal.vercel.app/'
    },
  ];
  return (
    <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10" id="projects">
      <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl font-jost">
        My Projects
      </h2>
      <p className="text-neutral-700 dark:text-neutral-300 text-lg  max-w-sm font-jost">
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
