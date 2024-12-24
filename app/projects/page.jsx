"use client";

import React, { useState } from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import "swiper/swiper-bundle.css";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// components
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Secure Ticketing System for Events",
    title: "Project 1",
    description:
      "Designed and developed a cutting-edge ticketing app that revolutionizes in-person events with AES/RSA-encrypted QR codes, anti-screenshot security, and instant validation, delivering unmatched fraud prevention and a seamless user experience on Android devices.",
    stack: [
      { name: "Java" },
      { name: "Android Studio" },
      { name: "Figma" },
      { name: "Firebase" },
    ],
    image: "/assets/projects/ticketingapp.jpeg",
    live: "",
    github: "https://github.com/yogesh92/Secure-Ticketing-System",
  },
  {
    num: "02",
    category: "Blockchain in Food Supply",
    title: "Project 2",
    description:
      "Developed a blockchain-based system to revolutionize food supply chain traceability, ensuring transparency, security, and authenticity through smart contracts and immutable records, empowering stakeholders and enhancing consumer trust in the journey from farm to fork.",
    stack: [
      { name: "Solidity" }, 
      { name: "Python" }, 
      { name: "JavaScript" },
      { name: "Truffle Suite" },
      { name: "Smart Contracts" },
      { name: "Ethereum" },
    ],
    image: "/assets/projects/blockchain.jpeg",
    live: "",
    github: "https://github.com/yogesh92/ETH-FoodSupplyChain",
  },
  {
    num: "03",
    category: "Travel Agent Booking Service",
    title: "Project 3",
    description:
      "Designed and developed a travel booking service with RESTful APIs to manage Customers, Taxis, and Bookings, utilizing Java and JPA for efficient entity relationships, transactional handling, and seamless database integration, ensuring reliability and scalability.",
    stack: [
      { name: "Java" }, 
      { name: "SQL" }, 
      { name: "RedHat" }, 
      { name: "OpenShift" }, 
      { name: "JPA" },  
      { name: "RESTful Services" }, 
      { name: "Microservices" }, 
    ],
    image: "/assets/projects/travelagent.jpeg",
    live: "",
    github: "https://github.com/yogesh92/travelagent/tree/master",
  },
];

const Projects = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* Top section with number and github button */}
              <div className="flex justify-between items-center">
                {/* outline num */}
                <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                  {project.num}
                </div>
                {/* github button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>

              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none transition-all duration-500 capitalize">
                {project.category} 
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex flex-wrap gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li 
                      key={index} 
                      className="text-base text-accent"
                    >
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
              modules={[Autoplay]}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
              }}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
