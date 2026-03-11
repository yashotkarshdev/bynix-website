import React from 'react'
import SEO from '../components/Seo';
import FAQSection from '../components/FAQSection';
import SectionBadge from '../components/SectionBadge';
import { useEffect, useState } from "react";
import Reveal from '../components/animate/Reveal';
// import { getServices } from "../services/serviceApi";

function Home() {
    // const [services, setServices] = useState([]);
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
    // useEffect(() => {
    //     const fetchServices = async () => {
    //         const data = await getServices();
    //         setServices(data);
    //     };

    //     fetchServices();
    // }, []);

    const features = [
        {
            title: "User-First Design Strategy",
            desc: "Before beginning work on any project, we learn about real users, their needs, behaviours, and main points. Our designs are not only pretty but are made to solve real problems with understanding and compassion.",
            image: "/icons/strategy.png", // Path to your custom image
        },
        {
            title: "Precision in Every Pixel",
            desc: "From alignment to micro-interactions, we observe each and every small detail, whether they are alignment or micro-interactions. We have designed our UI UX services with utmost attention to detail.",
            image: "/icons/precision.png",
        },
        {
            title: "Cross-Team Collaboration",
            desc: "Design isn't a solo act. Our UI/UX professionals collaborate closely with the developers, business analysts, and product managers to make your services flexible and user-friendly.",
            image: "/icons/collab.png",
        },
        {
            title: "Multi-Platform Perfection",
            desc: "Whether it's a mobile app UI UX design, responsive websites, or tablet interfaces - our designers will ensure your platform will work and look great across all devices.",
            image: "/icons/platform.png",
        },
        {
            title: "Results That Go Beyond Aesthetics",
            desc: "We measure our design success using data - clicks, conversions, and retention. Our every decision is guided by the intention to enhance user engagement and your business activity.",
            image: "/icons/results.png",
        }
    ];

    const features2 = [
        {
            title: "Scalable Solutions",
            desc: "Deliver scalable and intelligent solutions for businesses.",
            image: "/icons/bulb-icon.png", // Replace with your image path
        },
        {
            title: "AI & Automation",
            desc: "Help companies leverage AI, automation, and digital transformation.",
            image: "/icons/gear-icon.png", // Replace with your image path
        },
        {
            title: "Expert Resources",
            desc: "Provide expert resources through flexible allocation models.",
            image: "/icons/expert-icon.png", // Replace with your image path
        },
        {
            title: "White-Label",
            desc: "Offer white-label solutions to accelerate business growth.",
            image: "/icons/label-icon.png", // Replace with your image path
        }
    ];
    const workSteps = [
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

    const homeFaqs = [
        {
            id: 1,
            question: "What services does Bynix Technology provide?",
            answer:
                "Bynix Technology provides web development, digital marketing, SEO services, UI/UX design, and custom software solutions to help businesses grow online.",
        },
        {
            id: 2,
            question:
                "What makes Bynix Technology different from other digital marketing agencies?",
            answer:
                "Bynix focuses on data-driven strategies, customized marketing plans, and measurable results that help businesses improve visibility and conversions.",
        },
        {
            id: 3,
            question: "How long does it take to see results from SEO?",
            answer:
                "Most SEO campaigns begin showing noticeable improvements within 3 to 6 months depending on the competition and strategy used.",
        },
        {
            id: 4,
            question: "Do you work with small businesses and startups?",
            answer:
                "Yes. Bynix Technology works with startups, small businesses, and enterprises to create scalable digital solutions.",
        },
    ];


    return (
        <>
            <SEO
                title="Digital Marketing & Web Development Agency in Jaipur"
                description="Bynix Technology helps businesses grow with high-performance website development, custom mobile apps, and result-driven digital marketing strategies."
                image="/home-preview.jpg"
            />
            {/* hero section  */}
            <section className="relative py-24 overflow-hidden">

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
                                    "From Visibility to Conversions —
                                </span><br />
                                We Make It Happen."
                            </h1>

                            <p className="mt-6 lg:text-2xl text-md text-gray-600">
                                Take your business to the next level with Bynix. Our team of digital
                                experts and technical professionals will craft strategies tailored
                                to your brand’s growth.
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
            <section className="py-20 bg-white">

                <div className="container mx-auto px-6 md:px-12">

                    {/* Our Services Badge */}
                    <SectionBadge title={"Our Services"} />

                    {/* Heading */}
                    <Reveal animation="left" delay={100}>
                        <h2 className="text-4xl md:text-5xl font-semibold text-black leading-tight mb-16 max-w-3xl">
                            Let's Make Your Business Smarter,
                            Faster & Digitally Stronger
                        </h2>
                    </Reveal>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <Reveal key={index} animation="up" delay={index * 250}>
                                <div
                                    // key={index}
                                    className="border-2 border-dashed border-gray-200 rounded-[2.5rem] p-8 flex flex-col hover:border-[#F27115] transition-colors duration-300 group"
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
            <section className="relative bg-transparent py-20 overflow-hidden">

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
                        How we help businesses in Industry
                    </h2>

                    {/* Banner */}
                    <Reveal animation="up">
                    <div className="w-full h-64 md:h-80 rounded-[2.5rem] overflow-hidden mb-[-100px] relative z-0">
                        <img
                            src="/team-banner.jpg"
                            alt="Team"
                            loading="lazy"
                            className="w-full h-full object-cover grayscale-[30%] opacity-90 "
                        />
                    </div>
                    </Reveal>

                    {/* Features */}
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {features.map((item, idx) => (
                            <Reveal key={idx} animation="up" delay={idx * 250}>
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
                <div className="container mx-auto px-6 lg:px-16 relative z-10">

                    {/* Section Heading */}
                    <div className="mb-16">
                        <h2 className="relative inline-block text-3xl font-extrabold text-[#1a1a1a] pb-2">
                            How We Work
                            <span className="absolute -bottom-1 left-0 w-full h-1.5 bg-[#FBC02D]"></span>
                        </h2>
                    </div>

                    {/* Steps Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">

                        {workSteps.map((step, index) => (
                            <Reveal key={index} animation="up" delay={index * 200}>

                                <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group">

                                    {/* Image */}
                                    <div className="w-full h-40 mb-8 flex items-center justify-center overflow-hidden">
                                        <img
                                            src={step.img}
                                            alt={step.title}
                                            loading="lazy"
                                            style={{animationDelay:`${index*0.5}s`}}
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
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        {/* Section Heading */}
                        <h2 className="text-3xl md:text-5xl font-semibold text-center text-black mb-20 tracking-tight">
                            We help bussiness to grow faster and bigger
                        </h2>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                            {features2.map((item, index) => (
                                <Reveal key={index} animation="right" delay={index * 400}>
                                <div className="flex flex-col items-center text-center group">

                                    {/* Image Circle Container */}
                                    <div className="w-32 h-32 md:w-40 md:h-40 bg-[#F27115] rounded-full flex items-center justify-center mb-8 transition-transform duration-300 group-hover:scale-110 shadow-lg shadow-orange-100">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            loading="lazy"
                                            className={`w-1/2 h-1/2 object-contain ${index === 0 || index ===3 ? 'animate-float-card' : 'animate-slow-spin'}`}
                                        />
                                    </div>

                                    {/* Description Text */}
                                    <div className="max-w-[200px]">
                                        <p className="text-gray-800 text-lg leading-snug font-medium">
                                            {/* Styling specific words to match your bolding in the image */}
                                            {index === 0 && <>Deliver <span className="font-semibold">scalable and intelligent solutions</span> for businesses.</>}
                                            {index === 1 && <>Help companies leverage <span className="font-semibold">AI, automation, and digital transformation.</span></>}
                                            {index === 2 && <>Provide <span className="font-semibold">expert resources</span> through flexible allocation models.</>}
                                            {index === 3 && <>Offer <span className="font-semibold">white-label solutions</span> to accelerate business growth.</>}
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
            <Reveal animation="up">
                <FAQSection faqs={homeFaqs} title='Frequently Asked Questions' />
            </Reveal>
        </>

    )
}

export default Home;