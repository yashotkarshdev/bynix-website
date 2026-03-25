import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionBadge from "./SectionBadge";
import api from "../services/api";

export default function TeamCarousel() {

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchTeamData = async () => {

      try {
        const response = await api.get("/team");
        setTeamMembers(response.data?.data || []);
      } catch (error) {
        console.error("Error fetching team data:", error);
        setTeamMembers([]);
      } finally {
        setLoading(false);
      }

    };

    fetchTeamData();

  }, []);

  // Auto slide only if more than 1 member
  useEffect(() => {

    if (teamMembers.length <= 1) return;

    const timer = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % teamMembers.length);
    }, 3000);

    return () => clearInterval(timer);

  }, [teamMembers]);

  const nextStep = () => {
    if (teamMembers.length <= 1) return;
    setDirection(1);
    setIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const prevStep = () => {
    if (teamMembers.length <= 1) return;
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

  // 🔹 Loading State
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
        <div className="w-12 h-12 border-4 border-[#F27115]/20 border-t-[#F27115] rounded-full animate-spin"></div>
        <p className="text-gray-400 font-bold tracking-widest uppercase text-xs">
          Fetching Team...
        </p>
      </div>
    );
  }

  // 🔹 Empty State
  if (!teamMembers.length) {
    return (
      <div className="text-center py-20">
        No team members found
      </div>
    );
  }

  const member = teamMembers[index] || {};

  return (

    <section className="bg-[#F3F3F3CC] py-12 px-4">

      <div className="container mx-auto flex flex-col items-center">

        <SectionBadge title={"Our Team"} />

        <div className="relative w-full max-w-xl h-[320px] flex items-center justify-center overflow-hidden">

          <AnimatePresence custom={direction} mode="wait">

            <motion.div
              key={member._id || index}
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
                  src={member.imageUrl || "/fallback.jpg"}
                  alt={member.name || "Team Member"}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/fallback.jpg";
                  }}
                  className="h-full w-full object-cover"
                />

              </div>

              <div className="text-center">

                <h3 className="font-bold text-2xl text-gray-900">
                  {member.name || "Unknown Member"}
                </h3>

                <p className="text-[#FF5722] font-semibold">
                  {member.role || "Team Member"}
                </p>

              </div>

            </motion.div>

          </AnimatePresence>

          {/* Hide arrows if only 1 member */}
          {teamMembers.length > 1 && (
            <>
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
            </>
          )}

        </div>

        {/* Dots */}
        {teamMembers.length > 1 && (
          <div className="flex gap-3 mt-6">

            {teamMembers.map((member, i) => (

              <button
                key={member._id || i}
                onClick={() => setIndex(i)}
                className={`h-2.5 rounded-full transition-all ${
                  index === i ? "w-8 bg-[#FF5722]" : "w-2.5 bg-gray-300"
                }`}
              />

            ))}

          </div>
        )}

      </div>

    </section>

  );

}