import React from "react";

const BackgroundGraphicsLeft = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* First Image - Top Left */}
      <img
        src="/home-section-bg.jpg"
        alt="Background Left"
        loading="lazy"
        className="
          absolute right-0 bottom-0
          w-[45%] h-1/2
          object-cover
          opacity-20
          [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent),linear-gradient(to_right,transparent_0%,black_30%)]
          [mask-composite:intersect]
          [-webkit-mask-composite:source-in]
        "
        
      />

      {/* Second Image - Bottom Right */}
      <img
        src="/home-section-bg.jpg"
        alt="Background Right"
        loading="lazy"
        className="
          absolute left-0 top-0
          w-[45%] h-1/2
          object-cover
          opacity-20
          [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent),linear-gradient(to_left,transparent_0%,black_30%)]
          [mask-composite:intersect]
          [-webkit-mask-composite:source-in]
        "
      />
    </div>
  );
};

export default BackgroundGraphicsLeft;