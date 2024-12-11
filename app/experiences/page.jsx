"use client";

import React, { useState } from "react";
import Image from "next/image";

const experiences = [
  {
    company: "Oracle",
    position: "Software Engineer",
    duration: "May 2022 - September 2022",
    location: "Bengaluru, India",
    description: [
      "Designed and developed Restful APIs for new and existing Oracle Banking products, employing Agile methodology to ensure iterative and collaborative development processes",
      "Implemented all functionality using Spring Boot and Hibernate ORM, while leveraging Azure DevOps for streamlined project management and continuous integration",
      "Designed and executed automated test scripts for banking APIs using Selenium WebDriver, ensuring a 90% reduction in manual testing efforts",
      "Leveraged Jenkins for continuous integration and delivery of test cases, maintaining a seamless development pipeline",
      "Facilitated the education of the current team members about microservices and conducted workshops and webinars with close to twenty team members which improved productivity 45%, according to performance surveys",
    ],
    logo: "/assets/experiences/oracle.png",
  },
  {
    company: "Profinch Solutions",
    position: "Software Engineer",
    duration: "July 2020 - May 2022",
    location: "Bengaluru, India",
    description: [
      "Engineered secure Spring Boot microservices tailored for leading multi-national banks, ensuring robust and scalable solutions with embedded security measures",
      "Collaborated with the team to develop front-end client applications using Angular, enhancing user interface functionality and aesthetics",
      "Orchestrated cross-functional efforts to implement new UI features, resulting in a 74% improvement in customer satisfaction through smoother onboarding experiences for banking clientele meeeng their performance targets",
      "Led the on-site deployment of banking projects with a focus on security compliance, ensuring seamless integration and alignment with client specifications and expectations",
      "Provided prompt and accurate technical troubleshooting for live production services, ensuring minimal downtime and maintaining client satisfaction through meticulous root-cause analysis, resolution, and proactive monitoring of system performance",
      "Spearheaded automation of UI testing for client applications using Selenium, enhancing testing efficiency by 60%",
    ],
    logo: "/assets/experiences/profinch.jpeg",
  },
  {
    company: "Neurosynaptic Communications",
    position: "Software Engineer Intern",
    duration: "May 2019 - July 2019",
    location: "Bengaluru, India",
    description: [
      "Worked under the Design and Development team to build Language Support for current e-health software to improve outreach for remote healthcare applications",
      "Invested time to enhance knowledge in using effective coding patterns, compliant with professional standards",
      "Effectively utilized Spring/Hibernate frameworks to implement, debug and review product code",
    ],
    logo: "/assets/experiences/neuro.png",
  },
  {
    company: "Finonyx Software Solutions",
    position: "Software Engineer Intern",
    duration: "November 2017 - December 2017",
    location: "Bengaluru, India",
    description: [
      "Conceptualized a new banking website for clients using Spring MVC and Hibernate to prototype, design, and develop solutions",
      "Effectively integrated with SQL Database to ensure smooth and efficient data management",
      "Contributed to the creation and implementation of robust test plans to ensure the quality and reliability of projects",
    ],
    logo: "/assets/experiences/finonyx.jpg",
  },
];

const Experiences = () => {
  const [selectedExperience, setSelectedExperience] = useState(0);

  return (
    <div className="min-h-[80vh] flex items-start justify-center py-12 xl:py-10 bg-dark-gray">
      <div className="container mx-auto flex flex-col xl:flex-row">
        {/* Left Sidebar */}
        <div className="flex flex-col xl:w-[25%] p-4 border-r border-accent">
          {experiences.map((experience, index) => (
            <button
              key={index}
              className={`text-left p-4 cursor-pointer transition-all duration-300 flex items-center gap-4 rounded-lg ${
                index === selectedExperience
                  ? "text-accent bg-accent bg-opacity-20"
                  : "text-gray-400 bg-dark-gray"
              }`}
              onClick={() => setSelectedExperience(index)}
            >
              <Image
                src={experience.logo}
                alt={experience.company}
                width={40}
                height={40}
                className="rounded-md"
              />
              <span className="text-lg font-semibold">{experience.company}</span>
            </button>
          ))}
        </div>

        {/* Right Content Area */}
        <div className="flex flex-col xl:w-[75%] pl-8">
          <h2 className="text-3xl font-bold text-white mb-2">
            {experiences[selectedExperience].position}{" "}
            <span className="text-accent">
              @ {experiences[selectedExperience].company}
            </span>
          </h2>
          <p className="text-gray-400 mb-4">
            {experiences[selectedExperience].duration} | {experiences[selectedExperience].location}
          </p>
          <ul className="space-y-4 text-white">
            {experiences[selectedExperience].description.map((item, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="text-accent">▹</span>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
