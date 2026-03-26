import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const clients = [
    { id: 1, name: "Fit Quest", logo: "/clientImages/fit-quest-jaipur.webp" },
    { id: 2, name: "Growth Happen", logo: "/clientImages/growth-happen.webp" },
    { id: 3, name: "Elixir Balance", logo: "/clientImages/elixir-balance.webp" },
    { id: 4, name: "Refreshment Flavours", logo: "/clientImages/refreshing-flavours.webp" },
    { id: 5, name: "Sineel Evators", logo: "/clientImages/sineel-evators.webp" },
    { id: 6, name: "The Trusted Beauty", logo: "/clientImages/the-trusted-beuty.webp" },
    { id: 7, name: "Pure Work Athletics", logo: "/clientImages/pure-work-athletics.webp" },
    {id:8, name: "Madistax", logo: "/clientImages/madistax.webp"},
    {id:9, name: "The Style Shaala", logo: "/clientImages/the-style-shaala.webp"},
    {id:10, name: "The AutoN Twk", logo: "/clientImages/the-auton-twk.webp"},
];

const OurClients = () => {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    useEffect(() => {
        const element = triggerRef.current;
        
        // Animation logic
        const tl = gsap.to(element, {
            x: "-20%", // Kyunki humne items double kiye hain, 50% move karne par loop perfect dikhega
            ease: "none",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 30%", 
                end: "top 80%",   
                scrub: 3,        
            }
        });

        // Cleanup to prevent memory leaks
        return () => {
            tl.kill();
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <section ref={sectionRef} className="container mx-auto py-20  overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
                <h2 className="text-4xl font-bold text-gray-800">Our Clients</h2>
            </div>

            {/* Marquee Container */}
            <div className="relative flex w-full">
                <div ref={triggerRef} className="flex whitespace-nowrap gap-12 items-center">
                    {/* Render twice for seamless movement */}
                    {[...clients, ...clients].map((client, index) => (
                        <div key={`${client.id}-${index}`} className="w-20 h-20 md:w-40 md:h-40 flex-shrink-0">
                            <img
                                src={client.logo}
                                alt={client.name}
                                className="w-full h-full rounded-full object-contain grayscale hover:grayscale-0 hover:scale-120 transition-all duration-400"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurClients;