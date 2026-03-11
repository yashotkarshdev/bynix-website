import React from "react";

const SectionBadge = ({ title }) => {
  return (
    <div className="flex justify-start mb-6">
      <div className="flex items-center gap-3 rounded-full bg-white px-5 py-2 shadow-sm border border-gray-100">
        <span className="h-2.5 w-2.5 rounded-full bg-[#F27115]"></span>

        <span className="text-xs tracking-normal text-black font-semibold uppercase">
          {title}
        </span>

        <span className="h-2.5 w-2.5 rounded-full bg-[#F27115]"></span>
      </div>
    </div>
  );
};

export default SectionBadge;