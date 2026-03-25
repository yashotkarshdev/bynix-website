import { Link } from "react-router-dom";
import FAQSection from "../components/FAQSection";
import BackgroundGraphicsLeft from "../components/BackgroundGraphicsLeft";
import SectionBadge from "../components/SectionBadge";
import { useState, useRef, useEffect } from 'react';
import Reveal from "../components/animate/Reveal";
import SEO from "../components/SEO";
import { Helmet } from "react-helmet-async";

const BASE_URL = import.meta.env.VITE_SITE_URL;

const ssmFaqs = [
    {
        "id": 1,
        "question": "Which social media platforms are best for my business growth?",
        "answer": "We select platforms based on your target audience and business goals. For example, LinkedIn for B2B growth and emerging platforms like Threads for real-time brand visibility."
    },
    {
        "id": 2,
        "question": "How does Bynix measure the success and ROI of social media campaigns?",
        "answer": "We track high-intent metrics like lead quality, website conversions, and pipeline attribution instead of focusing only on vanity metrics like likes or followers."
    },
    {
        "id": 3,
        "question": "How often will you post content on our company profiles?",
        "answer": "Posting frequency is planned through a customized content calendar based on your industry, audience behavior, and growth objectives."
    },
    {
        "id": 4,
        "question": "How do you stay updated with the latest social media trends and algorithm changes?",
        "answer": "Bynix stays updated by tracking algorithm changes across social media platforms, along with continuous testing and performance analysis to adapt strategies in real time."
    }
    ,
    {
        "id": 5,
        "question": "What is the typical timeframe to see results from a social media strategy?",
        "answer": "Typical engagement growth is usually visible within the first 90 days, while long-term lead generation scales as brand authority compounds. "
    }
];

const benefits = [
    "Bynix Technology addresses systemic digital growth challenges by engineering high-impact social architectures that convert passive digital profiles into active revenue-generating assets.",
    "The approach replaces inconsistent outreach with a unified and consistent brand voice across all relevant channels.",
    "Precision targeting on appropriate social media platforms ensures the value proposition reaches C-suite executives and key procurement decision-makers directly.",
    "Complex technical services are translated into clear, engaging, and high-performance content tailored for professional audiences.",
    "The strategy strengthens brand authority and credibility to support the acquisition of high-value and long-term B2B partnerships.",
    "Campaigns are built around measurable attribution models that track performance and align outcomes with business objectives.",
    "Continuous optimization connects social engagement with tangible ROI by improving targeting, messaging, and conversion pathways."
];

const platforms = [
    { name: "Instagram Marketing", icon: "/smm-service/icons/instagram-icon.png", position: "lg:top-10 lg:left-[5%]" },
    { name: "Youtube Marketing", icon: "/smm-service/icons/youtube-icon.png", position: "lg:top-24 lg:left-[35%]" },
    { name: "Facebook Marketing", icon: "/smm-service/icons/facebook-icon.png", position: "lg:top-10 lg:left-[65%]" },
    { name: "LinkedIn Marketing", icon: "/smm-service/icons/linkedin-icon.png", position: "lg:bottom-10 lg:left-[20%]" },
    { name: "Twitter Marketing", icon: "/smm-service/icons/twitter-icon.png", position: "lg:bottom-10 lg:left-[55%]" },
];

const services = [
    {
        title: "Paid Advertising",
        desc: "We focus on advanced targeting on emerging platforms for the purpose of high-value lead generation.",
        image: "/smm-service/strategy.webp"
    },
    {
        title: "Social Media Management",
        desc: "We follow a structured scheduling process and cross-platform synchronization to maintain a consistent brand presence.",
        image: "/smm-service/content.webp"
    },
    {
        title: "Content Strategy & Creation",
        desc: "Content is planned and created to align with audience intent and business objectives. Consistent execution builds engagement and reinforces brand authority.",
        image: "/smm-service/content-creation-and-strategy.webp"
    },
    {
        title: "Influencer Marketing",
        desc: "We focus on authority marketing to connect your brand with credible industry voices for validation.",
        image: "/smm-service/influencer.webp"
    },
    {
        title: "Profile Optimization",
        desc: "Profiles are optimized with SEO focused descriptions and cohesive branding to improve visibility.",
        image: "/smm-service/profile-optimization.webp"
    }
];

function SMMService() {
    const scrollRef = useRef(null);
    const [progress, setProgress] = useState(0);

    // Function to handle the progress bar width based on scroll position
    const handleScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            const scrollPercent = (scrollLeft / (scrollWidth - clientWidth)) * 100;
            setProgress(scrollPercent);
        }
    };

    // Button Logic: Scroll by one card width
    const scroll = (direction) => {
        if (scrollRef.current) {
            const cardWidth = scrollRef.current.querySelector('.service-card').clientWidth + 24; // Width + Gap
            scrollRef.current.scrollBy({
                left: direction === 'next' ? cardWidth : -cardWidth,
                behavior: 'smooth'
            });
        }
    };
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Social Media Marketing Services",
        url: `${BASE_URL}/services/smm-service`,
        description:
            "Professional social media marketing services including Instagram marketing, Facebook ads, LinkedIn marketing, influencer marketing, and content management.",
        serviceType: "Social Media Marketing",
        areaServed: {
            "@type": "Place",
            name: "Worldwide"
        },
        provider: {
            "@type": "Organization",
            name: "Bynix Technology",
            url: `${BASE_URL}`
        },
        knowsAbout: [
            "Social Media Marketing",
            "Instagram Marketing",
            "Facebook Marketing",
            "LinkedIn Marketing",
            "Twitter Marketing",
            "Influencer Marketing",
            "Social Media Advertising"
        ]
    };
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: `${BASE_URL}`
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "Services",
                item: `${BASE_URL}/services`
            },
            {
                "@type": "ListItem",
                position: 3,
                name: "Social Media Marketing",
                item: `${BASE_URL}/services/smm-service`
            }
        ]
    };
    return (
        <>
            <SEO
                title="Social Media Marketing Services | Instagram, Facebook & LinkedIn Marketing"
                description="Bynix Technology offers professional social media marketing services including Instagram marketing, Facebook advertising, LinkedIn marketing, and influencer campaigns."
                keywords="social media marketing services, instagram marketing agency, facebook ads management, linkedin marketing services, social media advertising"
                image="/smm-service/smmhero.jpg"
            />
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(serviceSchema)}
                </script>

                {/* <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script> */}

                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbSchema)}
                </script>
            </Helmet>
            <section className="relative bg-white py-16 lg:py-36 px-6 overflow-hidden min-h-[600px]">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-20"
                    style={{ backgroundImage: "url('/smm-service/smmhero.jpg')" }}
                ></div>

                <div className="container mx-auto text-left md:text-center relative z-10">
                    <Reveal animation="right">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-black mb-6 leading-tight">
                            Convert Passive Digital Presence into Active <span className="text-[#F27115]">Business Revenue</span> with High-Impact <br /> <span className="text-[#f27115]">Social Media Marketing</span>
                        </h1>
                    </Reveal>

                    <Reveal animation="left">
                        <p className="text-black text-left md:text-center font-medium text-lg md:text-xl sm:px-20 mx-auto mb-10 leading-relaxed">
                            Bynix Technology engineers data-driven social media strategies that accelerate brand authority and drive high-quality lead generation across LinkedIn, Facebook, and Instagram.
                        </p>
                    </Reveal>

                    <Reveal animation="zoom" delay={100}>

                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link to={"/services"} className="px-8 py-3 cursor-pointer hover:bg-white border-2 border-gray-400 text-black font-bold rounded-lg transition-all">
                                Explore Our Solutions
                            </Link>
                            <Link to={"/contact"} className="px-8 py-3 bg-black cursor-pointer text-white font-bold rounded-lg hover:bg-[#F27115] transition-all shadow-lg">
                                Get a Quote
                            </Link>
                        </div>
                    </Reveal>
                </div>
                <div className="absolute bottom-0 left-0 w-full">
                    <img src="/smm-service/wavy.jpg" alt="" className="w-full object-cover" />
                </div>
            </section>
            <section className="relative overflow-hidden">
                <BackgroundGraphicsLeft bottomRightImage="/home-section-bg.jpg" topLeftImage="/home-section-bg.jpg" />
                <section className="relative py-20 bg-transparent overflow-hidden ">

                    <Reveal animation="up">
                        <div className="container mx-auto px-6 lg:px-18 relative z-10">
                            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                                {/* Left Content Column */}
                                <div className="w-full lg:w-1/2">
                                    {/* Heading with Yellow Underline Effect */}
                                    <div className="text-center mb-16">
                                        <h2 className="relative inline-block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 pb-4">
                                             Strategic Social Media Solutions
                                            <span className="absolute top-5 left-1/2 mix-blend-multiply -translate-x-1/2 w-full h-2 md:h-3 bg-[#FFC107]"></span>
                                            <br /> for Modern Business Challenges
                                            {/* The exact Yellow Stroke/Underline from your image */}
                                            <span className="absolute bottom-5 mix-blend-multiply left-1/2 -translate-x-1/2 w-64 h-2 md:h-3 bg-[#FFC107]"></span>
                                        </h2>
                                    </div>

                                    {/* Description Text */}
                                    {/* <p className="text-gray-700 text-lg leading-relaxed mb-8 text-center lg:text-left">
                                        Bynix Technology solves these systemic challenges by engineering high-impact social architectures that transform passive digital profiles into active revenue engines. We replace inconsistent outreach with a unified brand voice, utilizing precision targeting on suitable social media platforms to place your value proposition directly in front of C-suite executives and procurement influencers. By translating complex technical services into engaging, high-performance content, we foster the professional credibility necessary to close high-contract value partnerships. Our focus remains on measurable attribution, ensuring every campaign is optimized to bridge the gap between social engagement and tangible ROI for your organization.
                                    </p> */}

                                    {/* Bullet Points with Custom Markers */}
                                    <ul className="space-y-4">
                                        {benefits.map((benefit, index) => (
                                            <li key={index} className="flex items-start gap-3 group">
                                                {/* The dot marker from the image */}
                                                <span className="mt-2 w-1.5 h-1.5 bg-gray-800 rounded-full flex-shrink-0 group-hover:bg-[#F27115] transition-colors"></span>
                                                <span className="text-gray-800 text-lg font-medium leading-tight">
                                                    {benefit}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Right Image Column (Isometric 3D Illustration) */}
                                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                                    <div className="relative group">
                                        {/* Image with subtle drop shadow to pop against hex bg */}
                                        <img
                                            src="/smm-service/smm-section.webp"
                                            alt="Social Media Marketing Illustration"
                                            className="w-full max-w-[600px] h-auto transform transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </section>

                <section className=" lg:py-10 overflow-hidden">
                    <div className="container mx-auto px-6 md:px-20">
                        <SectionBadge title={"Platforms we cover"} />

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-y-12 py-8">

                            {platforms.map((item, index) => {
                                let colClass = "";

                                if (index < 3) colClass = "lg:col-span-2";
                                if (index === 3) colClass = "lg:col-span-2 lg:col-start-2";
                                if (index === 4) colClass = "lg:col-span-2 lg:col-start-4";

                                return (
                                    <div
                                        key={index}
                                        className={`flex items-center gap-4 lg:justify-center ${colClass}`}
                                    >
                                        <Reveal animation="up" delay={index * 100}>
                                            <div className="flex items-center gap-4 group">

                                                <div className="w-20 h-20 border-2 border-gray-300 flex items-center justify-center rounded-full shadow-2xl transition-transform duration-300 group-hover:scale-110 bg-white">
                                                    <img
                                                        src={item.icon}
                                                        alt={item.name}
                                                        className="w-12 h-12 object-contain animate-icon-wave"
                                                    />
                                                </div>

                                                <h3 className="text-lg font-medium text-gray-800 text-center sm:text-left">
                                                    {item.name}
                                                </h3>

                                            </div>
                                        </Reveal>
                                    </div>
                                );
                            })}

                        </div>
                    </div>
                </section>
                <section className="relative py-10 lg:py-20 bg-transparent overflow-hidden">

                    <div className="container mx-auto px-6 lg:px-18 relative z-10">

                        <Reveal animation="up">
                            <SectionBadge title={"Services We Offer"} />
                        </Reveal>

                        {/* Slider Container */}
                        <div
                            ref={scrollRef}
                            onScroll={handleScroll}
                            className="flex gap-6 overflow-x-auto no-scrollbar pb-12 snap-x snap-mandatory"
                        >
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className="service-card min-w-[100%] md:min-w-[45%] lg:min-w-[32%] bg-white border border-gray-100 rounded-sm snap-start overflow-hidden group"
                                >
                                    <Reveal animation="up" delay={index * 100}>

                                        <div className="h-64 overflow-hidden">
                                            <img
                                                src={service.image}
                                                alt={service.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                        </div>

                                        <div className="p-8">
                                            <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                                                {service.title}
                                            </h3>

                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                {service.desc}
                                            </p>
                                        </div>

                                    </Reveal>
                                </div>
                            ))}
                        </div>

                        {/* Bottom Controls */}
                        <div className="mt-8 flex flex-col items-center justify-center gap-8 border-t border-gray-100 pt-8">

                            {/* Progress Bar */}
                            <div className="w-full md:w-3/4 h-[2px] bg-gray-200 relative">
                                <div
                                    className="absolute top-0 left-0 h-full bg-black transition-all duration-300"
                                    style={{ width: `${Math.max(10, progress)}%` }}
                                ></div>
                            </div>

                            {/* Buttons */}
                            <div className="flex gap-4">

                                <button
                                    onClick={() => scroll('prev')}
                                    className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors group"
                                >
                                    <svg className="w-5 h-5 text-gray-400 group-hover:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>

                                <button
                                    onClick={() => scroll('next')}
                                    className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-[#F27115] transition-colors"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>

                            </div>
                        </div>

                    </div>

                    <style jsx>{`
    .no-scrollbar::-webkit-scrollbar { display: none; }
    .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
  `}</style>

                </section>
                {/* FAQ Section */}
                <Reveal animation="up">
                    <FAQSection faqs={ssmFaqs} />
                </Reveal>
            </section>
        </>
    )
}

export default SMMService;