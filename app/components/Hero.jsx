"use client";

import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section
      id="hero"
      className="container grid items-center grid-cols-1 px-6 mx-auto my-8 text-white md:my-20 
      md:px-[4rem] lg:px-[10rem] justify-items-center 
      md:grid-cols-2 md:gap-12"
    >
      {/* Text and Animation Section */}
      <div className="flex flex-col gap-6 md:gap-8 md:justify-self-start">
        <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl leading-tight">
          <span className="text-[#A594FD]">Hello, I&apos;m Prateek,</span>
          <br />
          <TypeAnimation
            sequence={[
              "Frontend Developer",
              1000,
              "Web Developer",
              1000,
              "Software Engineer",
              1000,
              "Backend Designer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-white text-2xl md:text-3xl lg:text-4xl"
          />
        </h1>
        <p className="text-sm text-gray-400 md:text-lg lg:text-xl">
          Passionate about crafting responsive and dynamic user interfaces. I
          turn complex problems into elegant digital solutions.
        </p>
        <Link
          href="#"
          className="w-48 px-5 py-2.5 text-base font-semibold text-center transition bg-gradient-to-r from-purple-600 to-blue-500 rounded-full shadow-lg hover:opacity-90"
        >
          Hire Me
        </Link>
      </div>

      {/* Image Section */}
      <div
        className="relative hidden md:block justify-self-start mt-10 md:mt-0 before:content-[''] 
        before:bg-[#5a80d2] before:w-[80%] before:h-[80%] before:absolute 
        before:top-[10rem] before:left-[10rem] before:rounded-full before:opacity-30"
      >
        <div className="relative p-3 border-4 rounded-full border-cyan-500 shadow-lg">
          <div className="overflow-hidden rounded-full">
            <Image
              src="/img.png"
              width={420}
              height={420}
              alt="Prateek's Profile"
              className="transition-transform duration-500 rounded-full hover:scale-105"
            />
          </div>
        </div>
      </div>
      <div className="mt-8 md:mt-16 lg:mt-24"></div>
    </section>
  );
}

export default Hero;
