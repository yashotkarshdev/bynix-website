import { Link } from "react-router-dom";
import FAQSection from "../components/FAQSection";
import BackgroundGraphicsLeft from "../components/BackgroundGraphicsLeft";
import SectionBadge from "../components/SectionBadge";
import { useState, useRef, useEffect } from 'react';
import Reveal from "../components/animate/Reveal";

function SMMService() {
    const scrollRef = useRef(null);
    const [progress, setProgress] = useState(0);
    const ssmFaqs = [
        {
            "id": 1,
            "question": "How does SMM benefit my business?"
        },
        {
            "id": 2,
            "question": "How often will you post on my social accounts?"
        },
        {
            "id": 3,
            "question": "Do you manage paid social media ads?"
        },
        {
            "id": 4,
            "question": "How long before I see results from SMM campaigns?"
        }
    ];

    const benefits = [
        "Expand brand visibility across social platforms",
        "Engage directly with your target audience",
        "Drive traffic to your website and landing pages",
        "Build credibility and trust with your audience",
        "Increase leads, sales, and ROI"
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
            title: "Social Media Strategy & Planning",
            desc: "We create a custom social media strategy tailored to your business goals, target audience, and industry trends. This ensures every post, campaign, and ad drives meaningful results.",
            image: "/smm-service/strategy.jpg"
        },
        {
            title: "Content Creation & Management",
            desc: "Our team designs engaging posts, images, videos, and stories that capture attention and encourage interaction. We manage content calendars to keep your social channels active and relevant.",
            image: "/smm-service/content.jpg"
        },
        {
            title: "Social Media Advertising (Paid Ads)",
            desc: "We run targeted paid campaigns on platforms like Facebook, Instagram, and LinkedIn. Our ads are optimized to reach the right audience, increase traffic, and generate leads.",
            image: "/smm-service/ads.jpg"
        },
        {
            title: "Influencer Marketing",
            desc: "We connect your brand with the right influencers to expand your reach and build authentic trust with your target audience.",
            image: "/smm-service/influencer.jpg"
        }
    ];

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
    return (
        <>
            <section className="relative bg-white py-16 lg:py-36 px-6 overflow-hidden min-h-[600px]">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-20"
                    style={{ backgroundImage: "url('/smm-service/smmhero.jpg')" }}
                ></div>

                <div className="container mx-auto text-left md:text-center relative z-10">
                    <Reveal animation="right">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-black mb-6 leading-tight">
                            Drive Engagement & Grow Your<br /> Brand with Expert <br /><span className="text-[#F27115]">Social Media Marketing</span>
                        </h1>
                    </Reveal>

                    <Reveal animation="left">
                        <p className="text-black text-left md:text-center font-medium text-lg md:text-xl sm:px-20 mx-auto mb-10 leading-relaxed">
                            At Bynix Technology, we create data-driven social media campaigns that increase traffic, build brand awareness, and generate leads across platforms like Facebook, Instagram, LinkedIn, and Twitter.
                        </p>
                    </Reveal>

                    <Reveal animation="zoom" delay={200}>

                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <button className="px-8 py-3 cursor-pointer hover:bg-white border-2 border-gray-400 text-black font-bold rounded-lg transition-all">
                                Explore Our Solutions
                            </button>
                            <Link to={"/contact"} className="px-8 py-3 bg-black cursor-pointer text-white font-bold rounded-lg hover:bg-[#F27115] transition-all shadow-lg">
                                Get In Touch
                            </Link>
                        </div>
                    </Reveal>
                </div>
                <div className="absolute bottom-0 left-0 w-full z-20">
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
                                            Why Social Media Marketing
                                            <span className="absolute top-5 left-1/2 mix-blend-multiply -translate-x-1/2 w-full h-2 md:h-3 bg-[#FFC107]"></span>
                                            <br /> Matters
                                            {/* The exact Yellow Stroke/Underline from your image */}
                                            <span className="absolute bottom-5 mix-blend-multiply left-1/2 -translate-x-1/2 w-64 h-2 md:h-3 bg-[#FFC107]"></span>
                                        </h2>
                                    </div>

                                    {/* Description Text */}
                                    <p className="text-gray-700 text-lg leading-relaxed mb-8 text-center lg:text-left">
                                        Social media is a powerful tool to connect with your audience, build trust, and drive sales.
                                        With the right strategy, businesses can improve engagement, reach new customers,
                                        and grow their online presence.
                                    </p>

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
                                            src="/smm-service/smm-section.png"
                                            alt="Social Media Marketing Illustration"
                                            className="w-full max-w-[600px] h-auto transform transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </section>

                <section className="py-16 md:py-24 overflow-hidden">
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
                                        <Reveal animation="up" delay={index * 180}>
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
                <section className="relative py-20 bg-transparent overflow-hidden">

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
                                    <Reveal animation="up" delay={index * 150}>

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