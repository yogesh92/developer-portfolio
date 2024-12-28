"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaTypo3,
  FaPhp,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiC, SiCplusplus, SiCsharp, SiSpring, SiSpringboot, SiAngular, SiJquery, SiOracle, SiMysql, SiPostgresql, SiMongodb, SiSqlite, SiFirebase, SiSolidity, SiDocker, SiKubernetes, SiRedhat, SiSelenium, SiTestinglibrary, SiJunit5, SiCucumber, SiJenkins } from "react-icons/si";
import React, { useState } from "react";
import { 
  SiSwagger,
  SiGradle,
  SiUbuntu,
  SiLinux,
  SiMacos,
  SiGit,
  SiSonarqube,
  SiJira  // for Agile
} from "react-icons/si";
import { GiPuzzle } from "react-icons/gi";  // for Java Collection
import { DiJava } from "react-icons/di"; 
import Image from "next/image";

const about = {
  title: "About Me",
  description: [
    "Hey there! 👋 I’m Yogesh, a software engineer who thrives on solving puzzles—whether it's debugging code or figuring out what to watch next on Netflix. I build high-performance microservices and front-end interfaces that not only perform but dazzle. Think of me as the coder with a creative twist.", 
    "🎨💻 When I’m not crafting digital solutions, you’ll find me binge-watching movies and series (yes, I’ve probably seen that one you’re thinking of), exploring the underwater world through scuba diving 🐠, or daydreaming about my next adventure. Life is about balance, right? 🌊🎬 Let’s create something amazing—and maybe swap some movie recommendations while we’re at it! 🎥🤝",
  ],
};

const aboutTabs = [
  {
    title: "Education",
    description: "Solid academic foundation in computer science.",
    items: [
      {
        institution: "Newcastle University",
        degree: "MSc Advanced Computer Science",
        duration: "Sep 2022 - Dec 2023",
        location: "Newcastle, UK",
        coursework:
          "Advanced Java, Enterprise Middleware, Machine Learning, Cloud Computing, Data Science, Artificial Intelligence, Databases, DevOps",
      },
      {
        institution: "National Institute of Technology Tiruchirappalli",
        degree: "Bachelor of Technology Computer Science Engineering",
        duration: "June 2016 - June 2020",
        location: "Tiruchirappalli, India",
        coursework:
          "Software Engineering, Object Oriented Application Development, Computational Thinking, Data Mining",
      },
    ],
  },
  {
    title: "Skills",
    description:
      "Adept in the React Ecosystem with proficiency in UI/UX collaboration using Figma.",
    skillCategories: [
      {
        category: "Languages",
        skills: [
          {
            icon: <FaJava />,
            name: "Java",
          },
          {
            icon: <FaPython />,
            name: "Python",
          },
          {
            icon: <FaPhp />,
            name: "PHP",
          },
          {
            icon: <FaJs />,
            name: "JavaScript",
          },
          {
            icon: <FaTypo3 />,
            name: "TypeScript",
          },
          {
            icon: <SiC />,
            name: "C",
          },
          {
            icon: <SiCplusplus />,
            name: "C++",
          },
          {
            icon: <SiCsharp />,
            name: "C#",
          },
          {
            icon: <SiSolidity />,
            name: "Solidity",
          },
          {
            icon: <FaHtml5 />,
            name: "HTML 5",
          },
          {
            icon: <FaCss3 />,
            name: "CSS 3",
          },
          {
            icon: <FaNodeJs />,
            name: "node.js",
          },
        ],
      },
      {
        category: "Frameworks",
        skills: [
          {
            icon: <FaReact />,
            name: "React",
          },
          {
            icon: <SiSpring />,
            name: "Spring",
          },
          {
            icon: <SiSpringboot />,
            name: "Spring Boot",
          },
          {
            icon: <SiOracle />,
            name: "OJET",
          },
          {
            icon: <SiAngular />,
            name: "Angular",
          },
          {
            icon: <SiJquery />,
            name: "jQuery",
          },
          {
            icon: <SiNextdotjs />,
            name: "next.js",
          },
          {
            icon: <SiTailwindcss />,
            name: "tailwind.css",
          },
        ],
      },
      {
        category: "Databases",
        skills: [
          {
            icon: <SiMysql />,
            name: "MySQL",
          },
          {
            icon: <SiPostgresql />,
            name: "PostgreSQL",
          },
          {
            icon: <SiMongodb />,
            name: "MongoDB",
          },
          {
            icon: <SiOracle />,
            name: "Oracle",
          },
          {
            icon: <SiSqlite />,
            name: "SQLite",
          },
          {
            icon: <SiFirebase />,
            name: "Firebase",
          },
        ],
      },
      {
        category: "Tools",
        skills: [
          {
            icon: <SiDocker />,
            name: "Docker",
          },
          {
            icon: <SiKubernetes />,
            name: "Kubernetes",
          },
          {
            icon: <SiRedhat />,
            name: "Red Hat OpenShift",
          },
          {
            icon: <SiSelenium />,
            name: "Selenium",
          },
          {
            icon: <SiTestinglibrary />,
            name: "TestNG",
          },
          {
            icon: <SiJunit5 />,
            name: "JUnit",
          },
          {
            icon: <SiCucumber />,
            name: "Cucumber",
          },
          {
            icon: <SiJenkins />,
            name: "Jenkins",
          },
        ],
      },
      {
        category: "Others",
        skills: [
          {
            icon: <SiSwagger />,
            name: "Swagger",
          },
          {
            icon: <GiPuzzle />,
            name: "Java Collection",
          },
          {
            icon: <SiGradle />,
            name: "Gradle",
          },
          {
            icon: <SiUbuntu />,
            name: "Linux/Ubuntu",
          },
          {
            icon: <SiMacos />,
            name: "MacOS",
          },
          {
            icon: <SiGit />,
            name: "Git",
          },
          {
            icon: <DiJava />,
            name: "J2EE",
          },
          {
            icon: <SiSonarqube />,
            name: "SonarQube",
          },
          {
            icon: <SiJira />,
            name: "Agile",
          },
        ],
      },
    ],
  },
];

const About = () => {
  const [selectedAbout, setSelectedAbout] = useState(0); // Default to "Education"

  const renderContent = () => {
    if (aboutTabs[selectedAbout].items) {
      return (
        <ul className="space-y-8 text-white">
          {aboutTabs[selectedAbout].items.map((item, index) => (
            <li key={index} className="flex flex-col">
              <div className="flex items-start space-x-2">
                <span className="text-accent">▹</span>
                <h2 className="text-2xl font-bold text-white mb-2">
                  {item.institution}
                </h2>
              </div>
              <p className="text-white/90">{item.degree}</p>
              <p className="text-white/70">
                <span className="text-accent">Coursework:</span> {item.coursework}
              </p>
              <span className="text-accent">{item.duration} | {item.location}</span>
            </li>
          ))}
        </ul>
      );
    } else if (aboutTabs[selectedAbout].skillCategories) {
      return (
        <div className="space-y-8">
          {aboutTabs[selectedAbout].skillCategories.map((category, index) => (
            <div key={index}>
              <div className="flex items-start space-x-2 mb-4">
                <span className="text-accent">▹</span>
                <h3 className="text-2xl font-semibold text-white">
                  {category.category}
                </h3>
              </div>
              <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-2 xl:gap-[10px]">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex flex-col items-center justify-center text-center p-4 bg-secondary rounded-lg">
                    <div className="text-xl text-accent mb-2">{skill.icon}</div>
                    <p className="text-white/60">{skill.name}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    } else {
      return <p className="text-white">{aboutTabs[selectedAbout].description}</p>;
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-start justify-start py-12 xl:py-0 bg-dark-gray">
      <div className="container mx-auto pb-16">
        {/* About section split into two columns */}
        <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left column - Text */}
          <div className="flex flex-col text-left">
            <h3 className="text-4xl font-bold mb-4">{about.title}</h3>
            {about.description.map((paragraph, index) => (
              <p key={index} className="text-white/60 mb-4">
                {paragraph}
              </p>
            ))}
          </div>
          
          {/* Right column - Photo */}
          <div className="flex justify-center items-center">
            <div className="relative w-[400px] h-[400px] rounded-lg overflow-hidden group">
              <Image
                src="/assets/scuba.jpg" 
                alt="Profile"
                fill
                className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              {/* Optional: Add a colored overlay border on hover */}
              <div className="absolute inset-0 border-2 border-accent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>

        {/* Rest of your content (Skills tabs) */}
        <div className="flex flex-col xl:flex-row">
          {/* Left Sidebar */}
          <div className="flex flex-col xl:w-[25%] p-4 border-r border-accent">
            {aboutTabs.map((aboutTab, index) => (
              <button
                key={index}
                className={`text-left p-4 cursor-pointer transition-all duration-300 flex items-center gap-4 rounded-lg ${
                  index === selectedAbout
                    ? "text-accent bg-accent bg-opacity-20"
                    : "text-gray-400 bg-dark-gray"
                }`}
                onClick={() => setSelectedAbout(index)}
              >
                <span className="text-lg font-semibold">{aboutTab.title}</span>
              </button>
            ))}
          </div>

          {/* Right Content Area */}
          <div className="flex flex-col xl:w-[75%] pl-8">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
