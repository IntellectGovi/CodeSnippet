import { HoverBorderGradient } from "../components/common/GradientButton";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "../components/common/Navbar";
import { useState } from "react";
import { CodeSnippetLogo } from "../components/core/HomePage/CodeSnippetLogo";
import { Timeline } from "../components/core/HomePage/Timeline";
import { motion } from "framer-motion";
import { CometCard } from "../components/core/HomePage/CometCard";
import Leadership from "../assets/Images/random bg img/Lead.jpg";
import Responsibility from "../assets/Images/random bg img/Team.jpg";
import SolveProblem from "../assets/Images/random bg img/codePng.jpg";
import { TypewriterEffectSmooth } from "../components/core/HomePage/TypeWritter";
import { AnimatedTestimonials } from "../components/common/Testimonial";
import { MainFooter } from "../components/common/MainFooter";

const Home = () => {
  

  return (
    <div className="relative w-full">


      {/* PAGE CONTENT */}
      <PageContent />


      
    </div>
  );
};

export default Home;

const PageContent = () => {


  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "Code Snippet.",
      className: "text-black-500   dark:text-black-400",
    },
  ];
   const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="container mx-auto p-8 pt-24">


      {/* HERO SECTION */}
      <div className="md:py-20">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300">
          {"Launch your website in hours, not days"
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
        </h1>
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
        >
          With AI, you can launch your website in hours, not days. Try our best
          in class, state of the art, cutting edge AI tools to get your website
          up.
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 1,
          }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <button className="w-60 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
            Learn More
          </button>
          <button className="w-60 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900">
            Book a Demo
          </button>
        </motion.div>
      </div>


      {/* INSTRUCTOR CALL TO ACTION */}
      <div className=" flex justify-center text-center">
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
        >
          <CodeSnippetLogo />
          <span>Become an Instructor</span>
        </HoverBorderGradient>
      </div>

      {/* PROCEDURE */}
      <div className="mt-20">
        <Timeline />
      </div>

      {/* TYPEWRITER TEXT */}
       <div className="flex flex-col items-center justify-center h-[20rem]  ">
        <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
          The road to freedom starts from here
        </p>
        <TypewriterEffectSmooth words={words} />
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
          <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
            Join now
          </button>
          <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
            Signup
          </button>
        </div>
      </div>


      {/* CARDS */}
      <div className="w-full flex flex-col md:flex-row flex-wrap justify-center gap-6 md:gap-10">
  <CometCard>
    <button
      type="button"
      className="my-6 md:my-10 flex w-full max-w-xs cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121] p-2 saturate-0 md:p-4"
      aria-label="View invite F7RA"
      style={{
        transformStyle: "preserve-3d",
        transform: "none",
        opacity: 1,
      }}
    >
      <div className="mx-2 flex-4">
        <div className="relative mt-2 aspect-[3/4] w-full">
          <img
            loading="lazy"
            className="absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] object-cover contrast-75"
            alt="Invite background"
            src={Leadership}
            style={{
              boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
              opacity: 1,
            }}
          />
        </div>
      </div>
      <div className="mt-2 flex flex-shrink-0 items-center justify-between p-4 font-mono text-white">
        <div className="text-xs">Leadership</div>
        <div className="text-xs text-gray-300 opacity-50">
          Fully committed to the success of the company
        </div>
      </div>
    </button>
  </CometCard>

  <CometCard>
    <button
      type="button"
      className="my-6 md:my-10 flex w-full max-w-xs cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121] p-2 saturate-0 md:p-4"
      aria-label="View invite F7RA"
      style={{
        transformStyle: "preserve-3d",
        transform: "none",
        opacity: 1,
      }}
    >
      <div className="mx-2 flex-4">
        <div className="relative mt-2 aspect-[3/4] w-full">
          <img
            loading="lazy"
            className="absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] object-cover contrast-75"
            alt="Invite background"
            src={Responsibility}
            style={{
              boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
              opacity: 1,
            }}
          />
        </div>
      </div>
      <div className="mt-2 flex flex-shrink-0 items-center justify-between p-4 font-mono text-white">
        <div className="text-xs">Responsibility</div>
        <div className="text-xs text-gray-300 opacity-50">
          Students our top priority
        </div>
      </div>
    </button>
  </CometCard>

  <CometCard>
    <button
      type="button"
      className="my-6 md:my-10 flex w-full max-w-xs cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121] p-2 saturate-0 md:p-4"
      aria-label="View invite F7RA"
      style={{
        transformStyle: "preserve-3d",
        transform: "none",
        opacity: 1,
      }}
    >
      <div className="mx-2 flex-4">
        <div className="relative mt-2 aspect-[3/4] w-full">
          <img
            loading="lazy"
            className="absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] object-cover contrast-75"
            alt="Invite background"
            src={SolveProblem}
            style={{
              boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
              opacity: 1,
            }}
          />
        </div>
      </div>
      <div className="mt-2 flex flex-shrink-0 items-center justify-between p-4 font-mono text-white">
        <div className="text-xs">Solve the problem</div>
        <div className="text-xs text-gray-300 opacity-50">
          Code your way to a solution
        </div>
      </div>
    </button>
  </CometCard>
</div>



      {/* TESTIMONIALS */}
      <div>
        <AnimatedTestimonials testimonials={testimonials}/>
      </div>
    </div>
  );
};
