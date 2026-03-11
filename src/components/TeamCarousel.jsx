import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionBadge from "./SectionBadge";

const teamMembers = [
  { name: "Nitesh Gupta", role: "Founder", img: "./founder-profile.jpg" },
  { name: "Ravinder Saini", role: "Software Developer", img: "./ravindra.jpg" },
  { name: "Rajveer Singh", role: "SEO Lead", img: "./founder-profile.jpg" },
  { name: "Kanishka Sharma", role: "UI/UX Designer", img: "./founder-profile.jpg" },
  { name: "Yashotkarsh Apoorva", role: "Junior Web Developer", img: "./yashotkarsh.png" },
];

export default function TeamCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      nextStep();
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const nextStep = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const prevStep = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <section className="bg-[#F3F3F3CC] py-12 px-4">
      <div className="container mx-auto flex flex-col items-center">

        {/* Title */}
        <SectionBadge title={"Our Team"} />

        {/* Carousel */}
        <div className="relative w-full max-w-xl h-[320px] flex items-center justify-center overflow-hidden">

          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute flex flex-col items-center gap-6"
            >
              <div className="h-40 w-40 overflow-hidden rounded-full border-4 border-white shadow-lg">
                <img
                  src={teamMembers[index].img}
                  alt={teamMembers[index].name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="text-center">
                <h3 className="font-bold text-2xl text-gray-900">
                  {teamMembers[index].name}
                </h3>
                <p className="text-[#FF5722] font-semibold">
                  {teamMembers[index].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Buttons */}
          <button
            onClick={prevStep}
            className="absolute left-0 p-3 bg-white rounded-full shadow-lg hover:bg-[#FF5722] hover:text-white transition"
          >
            <ChevronLeft size={26} />
          </button>

          <button
            onClick={nextStep}
            className="absolute right-0 p-3 bg-white rounded-full shadow-lg hover:bg-[#FF5722] hover:text-white transition"
          >
            <ChevronRight size={26} />
          </button>

        </div>

        {/* Dots */}
        <div className="flex gap-3">
          {teamMembers.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2.5 rounded-full transition-all ${
                index === i ? "w-8 bg-[#FF5722]" : "w-2.5 bg-gray-300"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}