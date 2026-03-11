import { Link } from "react-router-dom";
import FAQSection from "../components/FAQSection";
import BackgroundGraphicsLeft from "../components/BackgroundGraphicsLeft";
import SectionBadge from "../components/SectionBadge";
import { useState, useRef, useEffect } from 'react';

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

                <div className="container mx-auto text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-black mb-6 leading-tight">
                        Drive Engagement & Grow Your<br /> Brand with Expert <br /><span className="text-[#F27115]">Social Media Marketing</span>
                    </h1>

                    <p className="text-black text-center font-medium text-lg md:text-xl sm:px-20 mx-auto mb-10 leading-relaxed">
                        At Bynix Technology, we create data-driven social media campaigns that increase traffic, build brand awareness, and generate leads across platforms like Facebook, Instagram, LinkedIn, and Twitter.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="px-8 py-3 cursor-pointer hover:bg-white border-2 border-gray-400 text-black font-bold rounded-lg transition-all">
                            Explore Our Solutions
                        </button>
                        <Link to={"/contact"} className="px-8 py-3 bg-black cursor-pointer text-white font-bold rounded-lg hover:bg-[#F27115] transition-all shadow-lg">
                            Get In Touch
                        </Link>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full z-20">
                    <img src="/smm-service/wavy.jpg" alt="" className="w-full object-cover" />
                </div>
            </section>
            <section className="relative py-20 overflow-hidden"> {/* removed bg-white */}
                <BackgroundGraphicsLeft bottomRightImage="/home-section-bg.jpg" topLeftImage="/home-section-bg.jpg" />
                <section className="relative py-20 bg-transparent overflow-hidden">


                    <div className="container mx-auto px-6 lg:px-18 relative z-10">
                        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                            {/* Left Content Column */}
                            <div className="w-full lg:w-1/2">
                                {/* Heading with Yellow Underline Effect */}
                                <div className="text-center mb-16">
                                    <h2 className="relative inline-block text-3xl md:text-4xl font-semibold text-gray-900 pb-4">
                                        Why Social Media Marketing
                                        <span className="absolute top-5 left-1/2 mix-blend-multiply -translate-x-1/2 w-full h-3 bg-[#FFC107]"></span>
                                        <br /> Matters
                                        {/* The exact Yellow Stroke/Underline from your image */}
                                        <span className="absolute bottom-5 mix-blend-multiply left-1/2 -translate-x-1/2 w-64 h-3 bg-[#FFC107]"></span>
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
                </section>
                <section className="relative py-20 bg-transparent overflow-hidden min-h-[500px]">

                    <div className="container mx-auto px-6 lg:px-18 relative z-10 h-full">

                        {/* 2. Floating "Platforms we cover" Badge - Top Left */}
                        <SectionBadge title={"Platforms we cover"} />

                        {/* 3. The Scattered Platforms Layout */}
                        {/* Platforms Layout - Matching the staggered horizontal flow */}
                        <div className="flex flex-wrap justify-center gap-x-12 gap-y-16 lg:gap-x-24">
                            {platforms.map((item, index) => (
                                <div
                                    key={index}
                                    className={`flex items-center gap-4 transition-transform hover:scale-105 ${
                                        // This creates the staggered "up and down" look from your image
                                        index % 2 !== 0 ? 'lg:translate-y-12' : 'lg:-translate-y-4'
                                        }`}
                                >
                                    {/* White Circle Icon Container */}
                                    <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-50">
                                        <img src={item.icon} alt={item.name} className="w-8 h-8 md:w-10 md:h-10 object-contain" />
                                    </div>

                                    {/* Text Label */}
                                    <span className="text-lg md:text-xl font-bold text-gray-900 whitespace-nowrap">
                                        {item.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="relative py-20 bg-transparent overflow-hidden">
                    {/* Background Hex Pattern matching image_12acfd.png */}
                    <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none bg-[url('/assets/hex-pattern.png')] bg-repeat"></div>

                    <div className="container mx-auto px-6 lg:px-18 relative z-10">

                        {/* Floating Badge */}
                        <SectionBadge title={"Services We Offer"}/>

                        {/* Slider Container */}
                        <div
                            ref={scrollRef}
                            onScroll={handleScroll}
                            className="flex gap-6 overflow-x-auto no-scrollbar pb-12 snap-x snap-mandatory"
                        >
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className="service-card min-w-[85%] md:min-w-[45%] lg:min-w-[32%] bg-white border border-gray-100 rounded-sm snap-start overflow-hidden group"
                                >
                                    <div className="h-64 overflow-hidden">
                                        <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                    </div>
                                    <div className="p-8">
                                        <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">{service.title}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Bottom Controls: Progress Bar & Buttons */}
                        <div className="mt-8 flex flex-col items-center justify-center gap-8 border-t border-gray-100 pt-8">

                            {/* Progress Bar Container */}
                            <div className="w-full md:w-3/4 h-[2px] bg-gray-200 relative">
                                {/* Dynamic Progress Indicator */}
                                <div
                                    className="absolute top-0 left-0 h-full bg-black transition-all duration-300"
                                    style={{ width: `${Math.max(10, progress)}%` }}
                                ></div>
                            </div>

                            {/* Navigation Buttons */}
                            <div className="flex gap-4">
                                {/* Left Button (Grey/White) */}
                                <button
                                    onClick={() => scroll('prev')}
                                    className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors group"
                                >
                                    <svg className="w-5 h-5 text-gray-400 group-hover:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                                </button>

                                {/* Right Button (Solid Black) */}
                                <button
                                    onClick={() => scroll('next')}
                                    className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-[#F27115] transition-colors"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
                </section>
                <FAQSection faqs={ssmFaqs} />
            </section>
        </>
    )
}

export default SMMService;