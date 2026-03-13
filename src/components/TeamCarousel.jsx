import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionBadge from "./SectionBadge";
import api from "../services/api";

export default function TeamCarousel() {

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {

    const fetchTeamData = async () => {

      try {

        const response = await api.get("/team");

        setTeamMembers(response.data.data);

      } catch (error) {

        console.error("Error fetching team data:", error);

      }

    };

    fetchTeamData();

  }, []);

  useEffect(() => {

    if (!teamMembers.length) return;

    const timer = setInterval(() => {
      nextStep();
    }, 3000);

    return () => clearInterval(timer);

  }, [teamMembers]);

  const nextStep = () => {

    if (!teamMembers.length) return;

    setDirection(1);
    setIndex((prev) => (prev + 1) % teamMembers.length);

  };

  const prevStep = () => {

    if (!teamMembers.length) return;

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

  if (!teamMembers.length) {
    return <p className="text-center py-10">Loading team...</p>;
  }

  const member = teamMembers[index];

  return (

    <section className="bg-[#F3F3F3CC] py-12 px-4">

      <div className="container mx-auto flex flex-col items-center">

        <SectionBadge title={"Our Team"} />

        <div className="relative w-full max-w-xl h-[320px] flex items-center justify-center overflow-hidden">

          <AnimatePresence custom={direction} mode="wait">

            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="absolute flex flex-col items-center gap-6"
            >

              <div className="h-40 w-40 overflow-hidden rounded-full border-4 border-white shadow-lg">

                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="h-full w-full object-cover"
                />

              </div>

              <div className="text-center">

                <h3 className="font-bold text-2xl text-gray-900">
                  {member.name}
                </h3>

                <p className="text-[#FF5722] font-semibold">
                  {member.role}
                </p>

              </div>

            </motion.div>

          </AnimatePresence>

          <button
            onClick={prevStep}
            className="absolute left-0 p-3 bg-white rounded-full shadow-lg hover:bg-[#FF5722] hover:text-white"
          >
            <ChevronLeft size={26} />
          </button>

          <button
            onClick={nextStep}
            className="absolute right-0 p-3 bg-white rounded-full shadow-lg hover:bg-[#FF5722] hover:text-white"
          >
            <ChevronRight size={26} />
          </button>

        </div>

        <div className="flex gap-3 mt-6">

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