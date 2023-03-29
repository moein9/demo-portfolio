import { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";

const PortfolioDetail = () => {
  const whoAmI = [
    "Full Stack Developer",
    "Security Researcher",
    "Cyber Security Enthusiast",
  ];

  return (
    <>
      <div className="flex items-center justify-center bg-gray-900 rounded-3xl h-60">
        <div className="border border-green-500 rounded-md shadow-lg p-4 w-96">
          <div className="flex justify-end items-center mb-2">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-green-500">
            <span className="font-space">${">"} whoami</span>
            <br />
            <span className="font-space">
              <Typewriter
                options={{
                  strings: ["Moein Abas"].concat(whoAmI),
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>

            <br />
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="text-3xl font-bold mb-8">About Me</div>
      <div className="bg-white shadow-lg rounded-lg px-8 py-10 ">
        <div className="text-gray-700 text-lg font-semibold leading-tight mb-6">
          Hey there! I'm a{" "}
          <span className="text-green-500">fullstack developer</span> and
          <span className="text-green-500"> cyber security enthusiast</span>.
          <Typewriter
            options={{
              strings: [
                "My portfolio reflects my passion for creating comprehensive solutions for web applications. With expertise in both front-end and back-end development, I can design user-friendly interfaces and scalable systems. I take cyber security seriously and ensure that all the systems I build are protected from potential threats. I work with a range of programming languages and frameworks, including HTML/CSS, JavaScript, Python, React, Node.js, SQL, and more. I'm committed to delivering complex projects on time and always strive for excellence in my work.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
    </>
  );
};

export default PortfolioDetail;
