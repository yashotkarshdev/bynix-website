import { Link } from "react-router-dom";
import FAQSection from "../components/FAQSection";
import SectionBadge from "../components/SectionBadge";
import BackgroundGraphics from "../components/BackgroundGraphic";
import Reveal from "../components/animate/Reveal";
import SEO from "../components/SEO";
import { Helmet } from "react-helmet-async";

const BASE_URL = import.meta.env.VITE_SITE_URL;

const services = [
    {
        id: "1.",
        title: "Custom SaaS Development",
        desc: "Bynix develops tailored SaaS solutions that address unique business challenges while ensuring scalability, performance, and long-term growth.",
        align: "left"
    },
    {
        id: "2.",
        title: "SaaS Integration & Migration",
        desc: "Bynix enables seamless integration and migration by eliminating data silos and minimizing downtime during system transitions.",
        align: "right"
    },
    {
        id: "3.",
        title: "SaaS Product Design & UI/UX",
        desc: "Bynix designs intuitive SaaS interfaces that solve usability challenges and improve user engagement and adoption.",
        align: "left"
    },
    {
        id: "4.",
        title: "SaaS Maintenance & Support",
        desc: "Bynix provides continuous monitoring and support to prevent performance issues and ensure secure and reliable operations.",
        align: "right"
    },
    {
        id: "5.",
        title: " SaaS Analytics & Reporting",
        desc: "Bynix delivers data-driven insights that help businesses overcome decision-making challenges and optimize overall performance.",
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
        "question": "How can SaaS help improve business efficiency?",
        "answer": "SaaS streamlines operations by centralizing data, automating processes, and enabling real-time collaboration across teams."
    },
    {
        "id": 2,
        "question": "Does Bynix Technology offer custom SaaS development?",
        "answer": "Yes, Bynix Technology provides fully customized SaaS solutions designed to meet specific business needs and operational goals."
    },
    {
        "id": 3,
        "question": "How do SaaS analytics help businesses?",
        "answer":"SaaS analytics provide real-time insights into performance, user behavior, and operations, enabling better decision-making and optimization."
    },
    {
        "id": 4,
        "question": "How secure are SaaS solutions?",
        "answer":"SaaS platforms are built with advanced security protocols including data encryption, access controls, and regular updates to ensure data protection."
    },
    {
        "id": 5,
        "question": "Do you provide ongoing support after SaaS deployment?",
        "answer": "Yes, Bynix offers continuous maintenance, updates, and performance monitoring to ensure long-term reliability and efficiency."
    }
];
function SaasService() {

    const saasServiceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "SaaS Development Services",
        url: `${BASE_URL}/services/saas-service`,
        description:
            "Custom SaaS development services including SaaS product design, integration, analytics, and long-term support for scalable cloud software.",
        serviceType: "SaaS Development",
        provider: {
            "@type": "Organization",
            name: "Bynix Technology",
            url: `${BASE_URL}`
        },
        areaServed: {
            "@type": "Place",
            name: "Worldwide"
        },
        knowsAbout: [
            "SaaS Development",
            "Cloud Software Development",
            "SaaS Product Design",
            "SaaS Integration",
            "SaaS Analytics",
            "SaaS Maintenance"
        ]
    };

    const servicesSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: services.map((service, index) => ({
            "@type": "Service",
            position: index + 1,
            name: service.title,
            description: service.desc,
            provider: {
                "@type": "Organization",
                name: "Bynix Technology",
                url: `${BASE_URL}`
            }
        }))
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: saasFaqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Bynix Technology provides scalable SaaS development services including product design, integration, analytics, and long-term platform support."
            }
        }))
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
                name: "SaaS Development",
                item: `${BASE_URL}/services/saas-service`
            }
        ]
    };
    return (
        <>
            <SEO
                title="SaaS Development Services | Custom SaaS, UI/UX & Analytics"
                description="Bynix Technology provides custom SaaS development, integration, UI/UX design, and analytics solutions for businesses across industries."
                keywords="saas development, saas integration, saas ui/ux, saas analytics, saas support, jaipur"
                image="/saas/bynix-saas-service.webp"
            />
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(saasServiceSchema)}
                </script>

                <script type="application/ld+json">
                    {JSON.stringify(servicesSchema)}
                </script>

                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>

                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbSchema)}
                </script>
            </Helmet>
            <section className="relative bg-white py-8 lg:py-32 px-6 overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-20"
                    style={{ backgroundImage: "url('/saas/bynix-saas-service.webp')" }}
                ></div>

                <div className="container mx-auto text-center relative z-10">
                    <Reveal animation="right">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-black mb-6 leading-tight">
                            Flexible <span className="text-[#F27115]">SaaS Solutions</span> Built for <span className="text-[#F27115]">Growing Businesses</span>
                        </h1>
                    </Reveal>

                    <Reveal animation="left">

                        <p className="text-black text-center font-medium text-lg md:text-xl sm:px-20 mx-auto mb-10 leading-relaxed">
                            SaaS allows businesses to transform their operations with secure and cloud-powered software. Bynix Technology delivers tailored SaaS solutions that ensure uninterrupted access. 
                        </p>
                    </Reveal>

                    <Reveal animation="zoom" delay={100}>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link to={"/services"} className="px-8 py-3 cursor-pointer bg-white/0 border-2 border-gray-400 text-black font-bold rounded-lg hover:bg-gray-50 transition-all">
                                Explore Our Solutions
                            </Link>
                            <Link to={"/contact"} className="px-8 py-3 bg-black cursor-pointer text-white font-bold rounded-lg hover:bg-[#F27115] transition-all shadow-lg">
                                Get a Quote
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

                        <div className="hidden md:flex md:justify-center md:items-center">
                            <img src="/saas/service-graphic.webp" alt="Bynix Srevices for SaaS" className="h-30 w-30" />
                        </div>

                        {/* Timeline Container */}
                        <div className="relative max-w-5xl mx-auto py-4">

                            {/* Vertical Center Line - Desktop Only */}
                            <div className="absolute left-1/2 top-0 bottom-0 w-[1.5px] bg-black -translate-x-1/2 hidden md:block"></div>

                            <div className="space-y-12 md:space-y-0">
                                {services.map((service, index) => {
                                    const isEven = index % 2 !== 0;
                                    return (
                                        <Reveal key={index} animation={service.align} delay={index * 100}>
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
                <section className="py-4 lg:py-10 bg-white/0 overflow-hidden">
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
                                        <Reveal animation="up" delay={index * 100}>
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