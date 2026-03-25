import React, { useRef } from 'react'
import {ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
import SEO from '../components/SEO';
import FAQSection from '../components/FAQSection';
import SectionBadge from '../components/SectionBadge';
import { useEffect, useState } from "react";
import Reveal from '../components/animate/Reveal';
import { Helmet } from 'react-helmet-async';
import LeadPopup from '../components/LeadPopup';
import OurClients from '../components/OurClients';
import { useGSAP } from '@gsap/react';
import { time } from 'framer-motion';
// import { getServices } from "../services/serviceApi";

const BASE_URL = import.meta.env.VITE_SITE_URL;

const services = [
    {
        title: "Website Development",
        description: "We build websites that don't just look good — they sell: From wireframe to launch — we handle it all.",
        img: "/website-dev.jpg",
        points: [
            "Business & eCommerce Websites",
            "WordPress, Shopify, or Custom Builds",
            "Mobile Responsive & SEO-Friendly",
            "Fast, secure, and scalable"
        ]
    },
    {
        title: "App Development",
        subtitle: "(Android & iOS)",
        description: "Turn your app idea into reality.",
        img: "/app-dev.jpg",
        points: [
            "Custom mobile app development",
            "UI/UX Design that users love",
            "Backend & API integration",
            "App Store & Play Store support"
        ]
    },
    {
        title: "Digital Marketing",
        subtitle: "That Drives Results",
        description: "We don't just bring traffic — we bring paying customers.",
        img: "/digital-marketing.jpg",
        points: [
            "Facebook & Instagram Ads",
            "Google Ads (Search & Display)",
            "SEO & Local SEO",
            "Social Media Management",
            "Email Marketing Campaigns",
            "Conversion Optimization"
        ]
    }
];
const features = [
    {
        title: "User-Centered Strategy That Drives Results",
        desc: "Each project begins with a deep understanding of user behavior to shape solutions that align with business goals.",
        image: "/icons/strategy.png", // Path to your custom image
    },
    {
        title: "Data-Driven Design Decisions",
        desc: "Every design element is optimized using performance data to improve usability and drive measurable results.",
        image: "/icons/precision.png",
    },
    {
        title: "Seamless Collaboration Across Teams",
        desc: "Designers, developers, and strategists work in close coordination to ensure efficient execution with consistent quality at every stage.",
        image: "/icons/collab.png",
    },
    {
        title: "Consistent Experience Across All Platforms",
        desc: "Solutions are built to perform seamlessly across websites, mobile applications, and devices to ensure a consistent user experience with maximum accessibility.",
        image: "/icons/platform.png",
    },
    {
        title: "Designed to Drive Business Results",
        desc: "Solutions are developed with a focus on conversions, engagement, and long-term value to drive sustainable business growth.",
        image: "/icons/results.png",
    }
];

const FEATURES2 = [
    {
        title: "Results-Driven Strategy",
        desc: "Focused on Measurable Business Outcomes.",
        image: "/icons/bulb-icon.png", // Replace with your image path
    },
    {
        title: "UI/UX Focused Designs",
        desc: "Intuitive Interfaces with Strong Visual Appeal.",
        image: "/icons/gear-icon.png", // Replace with your image path
    },
    {
        title: "Transparent Reporting",
        desc: "Clear Insights with Consistent Performance Tracking.",
        image: "/icons/expert-icon.png", // Replace with your image path
    },
    {
        title: "Long-Term Partnership",
        desc: "Committed to Sustained Growth and Success.",
        image: "/icons/label-icon.png", // Replace with your image path
    }
];
const WORK_STEPS = [
    {
        title: "Discovery & Strategy",
        img: "/how-we-work/discovery.jpg",
    },
    {
        title: "Planning & Design",
        img: "/how-we-work/planning.jpg",
    },
    {
        title: "Development",
        img: "/how-we-work/development.jpg",
    },
    {
        title: "Testing & Optimization",
        img: "/how-we-work/testing.jpg",
    },
    {
        title: "Launch & Growth",
        img: "/how-we-work/launch.jpg",
    },
];

const Home_FAQS = [
    {
        id: 1,
        question: "What services does Bynix Technology offer?",
        answer:
            "Bynix Technology provides website development, SEO services, digital marketing, UI/UX design, and custom software solutions to support business growth and online visibility.",
    },
    {
        id: 2,
        question:
            "Why choose Bynix Technology for digital solutions?",
        answer:
            "We deliver data-driven strategies with a focus on performance, user experience, and measurable business results.",
    },
    {
        id: 3,
        question: "How does Bynix Technology help increase leads and conversions?",
        answer:
            "By combining SEO website optimization and user-focused design, Bynix Technology improves visibility, engagement, and conversion performance.",
    },
    {
        id: 4,
        question: "How long does it take to see results from SEO?",
        answer:
            "SEO results typically become visible within 3 to 6 months, depending on the competition website condition, and strategy execution.",
    },
    {
        id: 5,
        question: "How can I get started with Bynix Technology?",
        answer:
            "Businesses can get started by contacting the team for a consultation to discuss goals, requirements, and the right digital strategy.",
    },
];

gsap.registerPlugin(ScrollTrigger);

function Home() {
    // const [services, setServices] = useState([]);
    // useEffect(() => {
    //     const fetchServices = async () => {
    //         const data = await getServices();
    //         setServices(data);
    //     };

    //     fetchServices();
    // }, []);

    // const scrollRef = useRef();

// useGSAP(() => {
//     gsap.from('.boxes', {
//       x: 200, 
//       opacity: 0,
//       scale:0,
//       borderRadius: "100%",
//       stagger: {
//         amount: 1.5,
//         from: "egdes",
//       },
//       scrollTrigger: {
//         trigger: scrollRef.current,
//         start: "top 70%", 
//         end: "top 10%",
//         scrub: 1.5,
//       },
//       rotation: 90,
//     });
//   }, { scope: scrollRef });

const containerRef = useRef();

useGSAP(() => {
  const ctx = gsap.context(() => {

    const sections = gsap.utils.toArray('.anim-section');

    sections.forEach((section) => {
      const boxes = section.querySelectorAll('.boxes');

      gsap.from(boxes, {
        x: 120,
        opacity: 0,
        scale: 0.8,
        rotation: 30,
        borderRadius: "20px",
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

    });

  }, containerRef);

  return () => ctx.revert(); // 🔥 IMPORTANT
}, []);


    const servicesSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": services.map((service, index) => ({
            "@type": "Service",
            "position": index + 1,
            "name": service.title,
            "description": service.description,
            "url": `${BASE_URL}/services`,
            "provider": {
                "@type": "Organization",
                "name": "Bynix Technology",
                "url": `${BASE_URL}`
            }
        }))
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": Home_FAQS.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };


    return (
        <>
        <div ref={containerRef}>
            <SEO
                title="Digital Marketing & Web Development Agency in Jaipur"
                description="Bynix Technology helps businesses grow with high-performance website development, custom mobile apps, and result-driven digital marketing strategies."
                keywords="digital marketing agency jaipur, website development company jaipur, seo agency jaipur, mobile app development jaipur, digital marketing services india"
                image="/home-preview.jpg"
            />
            <Helmet>

                <script type="application/ld+json">
                    {JSON.stringify(servicesSchema)}
                </script>

                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>

            </Helmet>
            <LeadPopup />
            {/* hero section  */}
            <section className="relative py-12 md:py-24 overflow-hidden">

                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-20 animate-float"
                    style={{ backgroundImage: "url('/home-hero-bg.png')" }}
                ></div>

                {/* Content */}
                <div className="container relative mx-auto px-6 md:px-12 grid md:grid-cols-2 items-center gap-10">

                    {/* Left */}
                    <Reveal animation="left">
                        <div>
                            <h1 className="lg:text-6xl text-3xl font-semibold space-y-2">
                                <span className="text-[#F27115]">
                                    Boost Your Revenue
                                </span><br />
                                with Data-Driven Digital Solutions
                            </h1>

                            <p className="mt-6 lg:text-2xl text-md text-gray-600">
                                Bynix helps organizations build high-performing websites and powerful SEO strategies while crafting experiences that turn visitors into customers.
                            </p>
                        </div>
                    </Reveal>

                    {/* Right */}
                    <Reveal animation="right">
                        <div className="flex justify-center lg:justify-end">
                            <img
                                src="/right-hero.png"
                                alt="Digital marketing and website development services by Bynix Technology"
                                loading="lazy"
                            />
                        </div>
                    </Reveal>

                </div>
            </section>
            {/* Service section  */}
            <section className="py-8 lg:py-20 bg-white">

                <div className="container mx-auto px-6 md:px-12">

                    {/* Our Services Badge */}
                    <SectionBadge title={"Our Services"} />

                    {/* Heading */}
                    <Reveal animation="left" delay={100}>
                        <h2 className="text-4xl md:text-5xl font-semibold text-black leading-tight mb-16 max-w-3xl">
                            Smart <span className='text-[#F27115]'>Web Development</span>, <span className='text-[#F27115]'>Design</span> and <span className='text-[#F27115]'>SEO</span> Solutions for Scalable Growth
                        </h2>
                    </Reveal>

                    {/* Services Grid */}
                    <div className=" anim-section grid grid-cols-1 lg:grid-cols-3 gap-8 overflow-hidden">
                        {services.map((service, index) => (
                            <Reveal key={index} animation="up" delay={index * 150}>
                                <div
                                    // key={index}
                                    className="boxes border-2 border-dashed border-gray-200 rounded-[2.5rem] p-8 flex flex-col hover:border-[#F27115] transition-colors duration-300 group"
                                >
                                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{service.title}</h3>
                                    {service.subtitle && (
                                        <p className="text-sm font-semibold text-[#F27115] mb-4">{service.subtitle}</p>
                                    )}

                                    <p className="text-gray-600 text-sm leading-relaxed mb-8">
                                        {service.description}
                                    </p>

                                    <div className="mb-8 overflow-hidden rounded-2xl">
                                        <img
                                            src={service.img}
                                            alt={service.title}
                                            loading="lazy"
                                            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>

                                    <ul className="space-y-3 mt-auto">
                                        {service.points.map((point, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm font-medium text-gray-800">
                                                <span className="text-[#F27115]">•</span>
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>
            {/* how we help  */}
            <section className="relative bg-transparent py-8 lg:py-20 overflow-hidden">

                {/* Background Images */}
                <div className="absolute inset-0 -z-10 animate-float">

                    {/* First Image - Top Left */}
                    <img
                        src="/home-section-bg.jpg"
                        alt="bg"
                        loading="lazy"
                        className="absolute left-0 top-0 opacity-20 w-[45%] h-1/2 object-cover
      [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent),linear-gradient(to_left,transparent_0%,black_30%)]
      [mask-composite:intersect] [-webkit-mask-composite:source-in]"
                    />

                    {/* Second Image - Bottom Right */}
                    <img
                        src="/home-section-bg.jpg"
                        alt="bg"
                        loading="lazy"
                        className="absolute right-0 bottom-0 opacity-20 w-[45%] h-1/2 object-cover
      [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent),linear-gradient(to_right,transparent_0%,black_30%)]
      [mask-composite:intersect] [-webkit-mask-composite:source-in]"
                    />

                </div>


                {/* ---------------- HOW WE HELP ---------------- */}
                <div className="container mx-auto px-6 md:px-12">

                    <SectionBadge title={"Who We Are"} />

                    <h2 className="text-4xl md:text-5xl font-semibold text-black mb-12">
                        How We Help Businesses in Industry
                    </h2>

                    {/* Banner */}
                    <Reveal animation="up">
                        <div className=" w-full h-64 md:h-80 rounded-[2.5rem] overflow-hidden mb-[-100px] relative z-0">
                            <img
                                src="/team-banner.jpg"
                                alt="Team"
                                loading="lazy"
                                className="w-full h-full object-cover grayscale-[30%] opacity-90 "
                            />
                        </div>
                    </Reveal>

                    {/* Features */}
                    <div className=" relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {features.map((item, idx) => (
                            <Reveal key={idx} animation="up" delay={idx * 100}>
                                <div
                                    // key={idx}
                                    className={`bg-white rounded-[2rem] p-8 shadow-[0_15px_50px_rgba(0,0,0,0.1)] border border-gray-50 transform transition-all duration-300 hover:-translate-y-2 ${idx >= 3 ? "lg:col-span-1 lg:translate-x-1/2" : ""
                                        }`}
                                >
                                    <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-2xl bg-[#F27115] p-3">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            loading="lazy"
                                            className="w-full h-full object-contain animate-icon-wave"
                                        />
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>


                {/* ---------------- HOW WE WORK ---------------- */}
                <div className="container py-10 lg:py-20 mx-auto px-6 lg:px-16 relative z-10">

                    {/* Section Heading */}
                    <div className="mb-16">
                        <h2 className="relative inline-block text-3xl font-extrabold text-[#1a1a1a] pb-2">
                            How We Work
                            <span className="absolute -bottom-1 left-0 w-full h-1.5 bg-[#FBC02D]"></span>
                        </h2>
                    </div>

                    {/* Steps Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">

                        {WORK_STEPS.map((step, index) => (
                            <Reveal key={index} animation="left" delay={index * 150}>

                                <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group">

                                    {/* Image */}
                                    <div className="w-full h-40 mb-8 flex items-center justify-center overflow-hidden">
                                        <img
                                            src={step.img}
                                            alt={step.title}
                                            loading="lazy"
                                            style={{ animationDelay: `${index * 0.5}s` }}
                                            className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500 animate-float"
                                        />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-[17px] font-bold text-[#1a1a1a] leading-snug px-1">
                                        {step.title}
                                    </h3>

                                </div>

                            </Reveal>
                        ))}

                    </div>

                </div>
            </section>

            {/* features section */}
            <Reveal animation="up">
                <section className="py-8 lg:py-20 bg-white">
                    <div className="container mx-auto px-6 overflow-hidden">
                        {/* Section Heading */}
                        <h2 className="text-3xl md:text-5xl font-semibold text-center text-black mb-20 tracking-tight">
                            Why Businesses <span className="text-[#F27115]">Trust Bynix</span> for Digital Growth
                        </h2>

                        {/* Features Grid */}
                        <div className="anim-section grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                            {FEATURES2.map((item, index) => (
                                <Reveal key={index} animation="right" delay={index * 200}>
                                    <div className="boxes flex flex-col items-center text-center group">

                                        {/* Image Circle */}
                                        <div className="w-32 h-32 md:w-40 md:h-40 bg-[#F27115] rounded-full flex items-center justify-center mb-8 transition-transform duration-300 group-hover:scale-110 shadow-lg shadow-orange-100">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                loading="lazy"
                                                className={`w-1/2 h-1/2 object-contain ${index === 0 || index === 3 ? 'animate-float-card' : 'animate-slow-spin'}`}
                                            />
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl font-semibold text-black mb-3">
                                            {item.title}
                                        </h3>

                                        {/* Description */}
                                        <div className="max-w-[220px]">
                                            <p className="text-gray-700 text-lg leading-snug font-medium">
                                                {item.desc}
                                            </p>
                                        </div>

                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>
            </Reveal>
            {/* FAQ Section */}
                <FAQSection faqs={Home_FAQS} />
            <Reveal animation="up">
                <OurClients />
            </Reveal>
        
        </div>
        </>

    )
}

export default Home;