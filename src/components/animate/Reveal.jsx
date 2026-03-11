import { useInView } from "react-intersection-observer";

const Reveal = ({ children, animation = "up", delay = 0 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const animations = {
    up: "opacity-0 translate-y-10 scale-95",
    left: "opacity-0 -translate-x-10 scale-95",
    right: "opacity-0 translate-x-10 scale-95",
    zoom: "opacity-0 scale-90",
  };

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        inView
          ? "opacity-100 translate-x-0 translate-y-0 scale-100"
          : animations[animation]
      }`}
    >
      {children}
    </div>
  );
};

export default Reveal;