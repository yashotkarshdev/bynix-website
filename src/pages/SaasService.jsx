import { Link } from "react-router-dom";
import FAQSection from "../components/FAQSection";
import SectionBadge from "../components/SectionBadge";
import BackgroundGraphics from "../components/BackgroundGraphic";
import Reveal from "../components/animate/Reveal";

function SaasService() {
    const services = [
        {
            id: "1.",
            title: "Custom SaaS Development",
            desc: "We build tailor-made SaaS applications for your unique business needs, focused on performance, security, and scalability",
            align: "left"
        },
        {
            id: "2.",
            title: "SaaS Integration & Migration",
            desc: "Seamlessly integrate SaaS with your existing systems or migrate data from legacy software without disruption.",
            align: "right"
        },
        {
            id: "3.",
            title: "SaaS Product Design & UI/UX",
            desc: "Our UI/UX design experts ensure your SaaS platform is intuitive, user-friendly, and visually engaging.",
            align: "left"
        },
        {
            id: "4.",
            title: "SaaS Maintenance & Support",
            desc: "We provide ongoing support, updates, and performance monitoring to keep your SaaS platform reliable and secure.",
            align: "right"
        },
        {
            id: "5.",
            title: " SaaS Analytics & Reporting",
            desc: "Gain actionable insights with real-time analytics and reporting, helping you optimize operations and improve decision-making.",
            align: "left"
        }
    ];

    const industries = [
        {
            name: "Healthcare",
            icon: "/saas/icons/healthcare.png",
        },
        {
            name: "Finance & Banking",
            icon: "/saas/icons/finance.png",
        },
        {
            name: "Education & eLearning",
            icon: "/saas/icons/education.png",
        },
        {
            name: "E-commerce & Retail",
            icon: "/saas/icons/ecommerce.png",
        },
        {
            name: "Logistics & Supply Chain",
            icon: "/saas/icons/logistics.png",
        },
    ];


    const saasFaqs = [
        {
            "id": 1,
            "question": "What is SaaS and how does it work?"
        },
        {
            "id": 2,
            "question": "How secure is a SaaS platform?"
        },
        {
            "id": 3,
            "question": "How much does SaaS development cost?"
        },
        {
            "id": 4,
            "question": "Do you provide SaaS support after launch?"
        }
    ];
    return (
        <>
            <section className="relative bg-white py-8 lg:py-32 px-6 overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-20"
                    style={{ backgroundImage: "url('/saas/bynix-saas-service.jpg')" }}
                ></div>

                {/* Background Pattern - Optional visual element */}
                <div className="relative inset-0 opacity-5 pointer-events-none">
                    <img src="/path-to-your-bg-pattern.svg" alt="" className="w-full h-full object-cover" />
                </div>

                <div className="container mx-auto text-center relative z-10">
                    <Reveal animation="right">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-black mb-6 leading-tight">
                            Transform Your Business <br /> with Powerful <span className="text-[#F27115]">SaaS</span> Solutions
                        </h1>
                    </Reveal>

                    <Reveal animation="left">

                        <p className="text-black text-center font-medium text-lg md:text-xl sm:px-20 mx-auto mb-10 leading-relaxed">
                            SaaS allows businesses to access software anytime, anywhere without the hassle of installations or maintenance. It’s cost-effective, scalable, and keeps your business agile in a competitive digital world.
                        </p>
                    </Reveal>

                    <Reveal animation="zoom" delay={200}>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <button className="px-8 py-3 cursor-pointer bg-white/0 border-2 border-gray-400 text-black font-bold rounded-lg hover:bg-gray-50 transition-all">
                                Explore Our Solutions
                            </button>
                            <Link to={"/contact"} className="px-8 py-3 bg-black cursor-pointer text-white font-bold rounded-lg hover:bg-[#F27115] transition-all shadow-lg">
                                Get In Touch
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </section>
            <section className="relative overflow-hidden"> {/* removed bg-white */}
                <BackgroundGraphics topLeftImage="/home-section-bg.jpg" bottomRightImage="/home-section-bg.jpg" />
                <section className="py-16 md:py-24 bg-white/0 overflow-hidden">
                    <div className="container mx-auto px-6 md:px-20">

                        {/* Section Heading */}
                        <SectionBadge title={"Our SaaS Services"} />

                        <div className="flex justify-center items-center">
                            <img src="/saas/service-graphic.png" alt="Bynix Srevices for SaaS" className="h-30 w-30" />
                        </div>

                        {/* Timeline Container */}
                        <div className="relative max-w-5xl mx-auto">

                            {/* Vertical Center Line - Desktop Only */}
                            <div className="absolute left-1/2 top-0 bottom-0 w-[1.5px] bg-black -translate-x-1/2 hidden md:block"></div>

                            <div className="space-y-12 md:space-y-0">
                                {services.map((service, index) => {
                                    const isEven = index % 2 !== 0;
                                    return (
                                        <Reveal key={index} animation={service.align} delay={index * 200}>
                                            <div className="relative flex flex-col md:flex-row items-center md:min-h-[160px]">

                                                {/* Item Content Wrapper */}
                                                <div className={`w-full flex ${isEven ? 'md:justify-end' : 'md:justify-start'} items-center`}>
                                                    <div className="w-full md:w-1/2 relative">

                                                        {/* Content Container: Mobile par left alignment, Desktop par alternating */}
                                                        <div className={`flex flex-col items-start ${isEven ? 'md:items-end md:text-right md:pr-12' : 'md:items-start md:pl-12'} pl-12 md:pl-0`}>

                                                            {/* Number Circle: Mobile par text ke sath, Desktop par branch line ke end mein */}
                                                            <div className={`
                      flex items-center justify-center rounded-full border border-gray-200 bg-white font-bold text-gray-900 shadow-sm z-10
                      absolute left-0 top-0 w-9 h-9 text-base   /* Mobile Style */
                      md:top-1/2 md:-translate-y-1/2 md:w-12 md:h-12 md:text-xl /* Desktop Style */
                      ${isEven ? 'md:left-auto md:-right-16' : 'md:-left-16'}
                    `}>
                                                                {service.id}
                                                            </div>

                                                            {/* Title */}
                                                            <h3 className="text-lg md:text-xl font-bold text-[#002B5B] mb-1 md:mb-0 md:pb-1">
                                                                {service.title}
                                                            </h3>

                                                            {/* Branch Line - Desktop Only */}
                                                            <div className="w-full h-[1.5px] bg-black relative hidden md:block"></div>

                                                            {/* Description */}
                                                            <p className="text-gray-600 text-sm leading-relaxed pt-2 md:max-w-[90%]">
                                                                {service.desc}
                                                            </p>
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>
                                        </Reveal>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-16 md:py-24 bg-white/0 overflow-hidden">
                    <div className="container mx-auto px-6 md:px-20">
                        <SectionBadge title={"Industries we serve"} />

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-y-12 py-8">

                            {industries.map((item, index) => {
                                let colClass = "";

                                if (index < 3) colClass = "lg:col-span-2";
                                if (index === 3) colClass = "lg:col-span-2 lg:col-start-2";
                                if (index === 4) colClass = "lg:col-span-2 lg:col-start-4";

                                return (
                                    <div
                                        key={index}
                                        className={`flex items-center gap-4 lg:justify-center ${colClass}`}
                                    >
                                        <Reveal animation="up" delay={index * 150}>
                                            <div className="flex items-center gap-4 group">

                                                <div className="w-16 h-16 flex items-center justify-center border rounded-full transition-transform duration-300 group-hover:scale-110">
                                                    <img
                                                        src={item.icon}
                                                        alt={item.name}
                                                        className="w-8 h-8 animate-icon-wave"
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
                <Reveal animation="up" delay={100}>
                <FAQSection faqs={saasFaqs} />
                </Reveal>
            </section>
        </>
    )
}

export default SaasService;