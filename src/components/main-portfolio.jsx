import { useState } from "react";
import PortfolioDetail from "./Details";

const Portfolio = ({}) => {
  const projects = [
    {
      id: 1,
      title: "SecureChat",
      image: "https://svgur.com/i/U7z.svg",
      description:
        "A secure messaging app built with React, Node.js, and MongoDB. Implements end-to-end encryption to protect user privacy.",
      tags: ["React", "Node.js", "MongoDB", "Encryption"],
      url: "https://github.com/example/securechat",
    },
    {
      id: 2,
      title: "Websec ",
      image: "https://svgur.com/i/UzK.svg",
      description:
        "A web application vulnerability scanner built with Python and Django. Uses various techniques to identify security vulnerabilities in web apps.",
      tags: ["Python", "Django", "Security"],
      url: "https://github.com/example/vulnscanner",
    },
    {
      id: 3,
      title: "Portfolio ",
      image: "https://svgur.com/i/Uyl.svg",
      description:
        "My personal portfolio website built with React and Tailwind CSS. Showcases my skills and projects in full-stack development and cybersecurity.",
      tags: ["React", "Tailwind CSS", "Web Design"],
      url: "https://github.com/example/portfolio",
    },
  ];

  return (
    <div className="bg-gray-100 py-12 rounded-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-800 font-extrabold tracking-wide uppercase p-4 m-4">
            My Portfolio
          </h2>
          <div className="w-32 h-22 border-4 border-white rounded-full overflow-hidden shadow-lg mx-auto">
            <img src="https://avataaars.io/?avatarStyle=Transparent&topType=WinterHat4&accessoriesType=Sunglasses&hatColor=Blue02&hairColor=BrownDark&facialHairType=BeardMajestic&facialHairColor=Blonde&clotheType=Hoodie&clotheColor=Blue02&eyeType=Side&eyebrowType=Default&mouthType=Twinkle&skinColor=Pale" />{" "}
          </div>
          <br />
          <PortfolioDetail className="rounded-2xl" />

          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl p-4 m-4">
            Some of my recent projects
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            there are some of my recent projects that i have Done, in the pas
            three years in the field of web and cyber security
          </p>
        </div>

        <div className="mt-10">
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {projects.map((project) => (
              <li
                key={project.id}
                className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200 cursor-pointer"
              >
                <div className="flex-1 flex flex-col p-8">
                  <img
                    className="w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full"
                    src={project.image}
                    alt={project.title}
                  ></img>
                  <h3 className="mt-6 text-gray-900 text-lg font-medium">
                    {project.title}
                  </h3>
                  <dl className="mt-1 flex-grow flex flex-col justify-between">
                    <dt className="sr-only">Project description</dt>
                    <dd className="text-gray-500 text-sm">
                      {project.description}
                    </dd>
                    <dt className="sr-only">Technologies used</dt>
                    <dd className="mt-3">
                      <ul className="list-disc text-gray-500 text-sm">
                        {project.tags.map((tag) => (
                          <li key={tag}>{tag}</li>
                        ))}
                      </ul>
                    </dd>
                  </dl>
                </div>
                <div className="p-6 bg-gray-50">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Visit Website
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
