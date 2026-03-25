import SectionBadge from "../components/SectionBadge";
import FAQSection from "../components/FAQSection";
import BackgroundGraphics from "../components/BackgroundGraphic";
import Reveal from "../components/animate/Reveal";
import SEO from "../components/SEO";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import OurClients from "../components/OurClients";

const BASE_URL = import.meta.env.VITE_SITE_URL;

const services = [
    {
        title: "Custom Website Development",
        desc: "Bynix Technology builds secure, responsive websites that enhance credibility and generate leads. Clean code and SEO-optimized architecture are implemented to ensure long-term scalability.",
        image: "/web-app-development/custom-web.webp",
    },
    {
        title: "Mobile App Development (Android & iOS)",
        desc: "Intuitive mobile apps are developed with secure integrations for engagement and automation. Also, a cross-platform approach ensures seamless performance with faster time-to-market.",
        image: "/web-app-development/mobile-app.webp",
    },
    {
        title: "E-Commerce Development",
        desc: "End-to-end eCommerce solutions are provided to optimize B2B and B2C journeys. Scalable architecture with secure integrations drives consistent revenue growth.",
        image: "/web-app-development/ecommerce.webp",
    },
    {
        title: "Web Application Development",
        desc: "We create cloud-ready web applications to automate workflows and operations. Our scalable and secure solutions improve productivity and data management.",
        image: "/web-app-development/web-app-dev.webp",
    },
    {
        title: "UI/UX Design",
        desc: "We design user-centric interfaces that balance functionality with visual appeal. Our approach enhances engagement and delivers a consistent brand experience.",
        image: "/web-app-development/ui-ux-designer.webp",
    },
    {
        title: "Website Maintenance & Support",
        desc: "We provide proactive maintenance for performance, security, and stability. Our support ensures smooth operations while you focus on your core business.",
        image: "/web-app-development/maintenance.webp",
    }
];

const webAppFaqs = [
    {
        "id": 1,
        "question": "Do you develop mobile applications for both Android and iOS?",
        "answer": "Yes, we build high-performance native and cross-platform mobile applications using the latest frameworks for both Android and iOS. "
    },
    {
        "id": 2,
        "question": "What is your approach to UI/UX design for B2B platforms?",
        "answer": "Our design methodology prioritizes user-centric architectures that bridge the gap between aesthetic appeal and functional efficiency. "
    },
    {
        "id": 3,
        "question": "How do you handle data security in your development projects?",
        "answer": "We implement industry-standard security protocols, including encrypted data transmission and secure API integrations, to protect sensitive business information."
    },
    {
        "id": 4,
        "question": "What is the typical timeline for a custom development project? ",
        "answer": "Project timelines are determined by the complexity of your requirements and the scope of the discovery phase."
    },
    {
        "id": 5,
        "question": "How does Bynix Technology approach SEO during the development phase? ",
        "answer": "Our development process incorporates search-optimized architecture and clean code to ensure high visibility from the moment of launch. "
    }
];

const architectureFeatures = [
    {
        title: "High-Performance Custom Platforms",
        description: "We build scalable web and mobile solutions where elite design meets industrial-grade functionality."
    },
    {
        title: "Industry-Specific Precision",
        description: "Tailored digital ecosystems purpose-built for the complexities of various sectors."
    },
    {
        title: "Seamless Ecosystem Integration",
        description: "We create interoperable systems that unify your existing tools and data."
    },
    {
        title: "Enterprise-Grade Security & Speed",
        description: "Solutions built to handle heavy usage with strong data security and smooth, delay-free performance."
    },
    {
        title: "Workflow & Lead Optimization",
        description: "Streamline workflows and automate lead generation to simplify your client acquisition process."
    },
    {
        title: "Future-Ready Scalability",
        description: "Agile architectures that scale effortlessly and adapt quickly to changing market demands."
    }
];

const architectureConclusion = "We deliver a frictionless digital experience that transforms operational complexity into a competitive powerhouse.";

function WebAppDevService() {

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Web & Mobile App Development Services",
        url: `${BASE_URL}/services/web-app-development-service`,
        description:
            "Professional web and mobile app development services including custom websites, e-commerce platforms, mobile apps, UI/UX design, and website maintenance.",
        serviceType: "Web & Mobile App Development",
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
            "Website Development",
            "Mobile App Development",
            "E-Commerce Development",
            "Web Application Development",
            "UI UX Design",
            "Website Maintenance"
        ]
    };

    const offerCatalogSchema = {
        "@context": "https://schema.org",
        "@type": "OfferCatalog",
        name: "Web & App Development Services",
        itemListElement: services.map((service) => ({
            "@type": "Offer",
            itemOffered: {
                "@type": "Service",
                name: service.title,
                description: service.desc
            }
        }))
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: webAppFaqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Bynix Technology provides professional web and mobile app development solutions tailored to your business needs."
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
                name: "Web & App Development",
                item: `${BASE_URL}/services/web-app-development-service`
            }
        ]
    };
    return (
        <>
            <SEO
                title="Web & Mobile App Development Services | Bynix Technology"
                description="Bynix Technology offers professional web and mobile app development services including custom websites, e-commerce platforms, UI/UX design, and scalable web applications."
                keywords="web development services, mobile app development company, ecommerce development, web application development, UI UX design services"
                image="/web-app-development/custom-web.webp"
            />

            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(serviceSchema)}
                </script>

                <script type="application/ld+json">
                    {JSON.stringify(offerCatalogSchema)}
                </script>

                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>

                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbSchema)}
                </script>
            </Helmet>
            <section
                style={{
                    backgroundColor: "#f6efe9",
                    backgroundImage:
                        "linear-gradient(180deg, rgba(242, 113, 21, 0.08) 0%, rgba(255, 255, 255, 0.4) 100%)",
                }}
                className="relative py-16 lg:py-24 px-6 overflow-hidden"
            >
                <div className="container md:px-6 lg:px-18 mx-auto grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <Reveal animation="left">
                        <div className="z-10">
                            {/* <Reveal animation="right"> */}
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-950 leading-tight mb-6">
                                Next-Gen <br className="hidden md:block" /> <span className="text-[#F27115]">Web & Mobile App Development</span> Solutions
                            </h1>
                            {/* </Reveal> */}
                            {/* <Reveal animaiton="left"> */}
                            <p className="text-gray-700 text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
                                Bynix Technology provides the technical backbone for your digital presence, ensuring your web and mobile platforms are optimized for peak performance, security, and professional credibility.
                            </p>
                            {/* </Reveal> */}

                            <Reveal animation="zoom" delay={200}>
                                <div className="flex flex-wrap gap-4">
                                    <Link to={"/services"} className="px-8 py-3 bg-white border border-gray-300 text-black font-semibold rounded-md hover:bg-gray-50 transition-all">
                                        Explore Our Solutions
                                    </Link>

                                    <Link to={"/contact"} className="px-8 py-3 bg-black text-white font-semibold rounded-md hover:bg-[#F27115] transition-all">
                                        Start a Project
                                    </Link>
                                </div>
                            </Reveal>
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
            </section >
            <section className="relative overflow-hidden"> {/* removed bg-white */}
                <BackgroundGraphics bottomRightImage="/home-section-bg.jpg" topLeftImage="/home-section-bg.jpg" />
                {/* <section className="py-12 md:py-24 bg-white/20 relative overflow-hidden">
                    <div className="container mx-auto px-6 lg:px-18 relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight">

                                <span className="relative inline-block px-2">
                                    High-Performance Digital Architecture
                                    <span className="absolute left-0 bottom-2 w-full h-1 md:h-3 bg-[#FFC107] -z-10"></span>
                                </span>

                                <br />

                                <span className="relative inline-block px-2 mt-2">
                                    for Scalable Business Operations
                                    <span className="absolute left-0 bottom-2 w-full h-1 md:h-3 bg-[#FFC107] -z-10"></span>
                                </span>

                            </h2>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <Reveal animation="left" delay={50}>
                                <div className="order-2 lg:order-1 flex justify-center">
                                    <img src="/web-app-development/mockup.png" alt="Mockup" className="max-w-md w-[65%] md:w-[80%] lg:w-full  drop-shadow-xl" />
                                </div>
                            </Reveal>
                            <div className="order-1 lg:order-2 space-y-8">
                                <Reveal animation="right" delay={100}>
                                    <p className="text-[#444] text-[19px] leading-[1.8] font-medium text-justify lg:text-right">
                                        In a complex B2B landscape, a sophisticated web and mobile presence serves as the primary engine for operational efficiency and market expansion. Bynix Technology engineers custom digital platforms that go beyond aesthetics, focusing on seamless integration, data security, and high-load performance tailored to industries like real estate and manufacturing.
                                    </p>
                                </Reveal>
                                <Reveal animation="right" delay={200}>
                                    <p className="text-[#444] text-[19px] leading-[1.8] font-medium text-justify lg:text-right">
                                        Our development philosophy centers on building interoperable systems that streamline client acquisition and automate internal workflows. By deploying scalable web and app solutions, your organization gains the technical agility required to outperform competitors and deliver a frictionless user experience at every touchpoint.
                                    </p>
                                </Reveal>

                            </div>
                        </div>
                    </div>
                </section > */}
                <section className="py-12 md:py-24 bg-white/20 relative overflow-hidden">
                    <div className="container mx-auto px-6 lg:px-18 relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight">

                                <span className="relative inline-block px-2">
                                    High-Performance <span className="text-[#f27115] md:text-black">Digital Architecture</span>
                                    <span className="hidden md:block absolute left-0 bottom-2 w-full h-1 md:h-3 bg-[#FFC107] -z-10"></span>
                                </span>

                                <br className="hidden md:block" />

                                <span className="relative inline-block px-2 mt-2">
                                    for <span className="text-[#f27115] md:text-black ">Scalable Business</span> Operations
                                    <span className="hidden md:block absolute left-0 bottom-2 w-full h-1 md:h-3 bg-[#FFC107] -z-10"></span>
                                </span>

                            </h2>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <Reveal animation="left" delay={50}>
                                <div className="order-2 lg:order-1 flex justify-center">
                                    <img
                                        src="/web-app-development/mockup.webp"
                                        alt="Mockup"
                                        className="max-w-md w-[65%] md:w-[80%] lg:w-full drop-shadow-xl"
                                    />
                                </div>
                            </Reveal>

                            <div className="order-1 lg:order-2 space-y-6">

                                {architectureFeatures.map((item, index) => (
                                    <Reveal key={index} animation="right" delay={100 + index * 50}>
                                        <div className="text-[#444] text-[17px] leading-[1.7] font-medium text-left">
                                            <p className="font-semibold text-gray-900">{item.title}</p>
                                            <p>{item.description}</p>
                                        </div>
                                    </Reveal>
                                ))}

                                <Reveal animation="right" delay={100 + architectureFeatures.length * 50}>
                                    <p className="text-[#444] text-[17px] leading-[1.8] font-medium text-left pt-2">
                                        {architectureConclusion}
                                    </p>
                                </Reveal>

                            </div>
                        </div>
                    </div>
                </section>

                <section className="relative lg:py-20 bg-white/20 overflow-hidden">

                    <div className="container mx-auto px-6 lg:px-18 relative z-10">

                        <Reveal animation="up">
                            <SectionBadge title={"Services We Offer"} />
                        </Reveal>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">

                            {services.map((service, index) => (
                                <div key={index} className="group cursor-pointer p-2 md:p-4 rounded-xl bg-white">

                                    <Reveal animation="up" delay={index * 75}>

                                        {/* Image */}
                                        <div className="overflow-hidden rounded-lg mb-6 shadow-sm">
                                            <img
                                                src={service.image}
                                                alt={service.title}
                                                className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-110"
                                            />
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#F27115] transition-colors">
                                            {service.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-gray-600 text-justify leading-relaxed text-[15px]">
                                            {service.desc}
                                        </p>

                                    </Reveal>

                                </div>
                            ))}

                        </div>
                    </div>
                </section>
                <Reveal animation="up">
                    <FAQSection faqs={webAppFaqs} />
                </Reveal>

            </section>
        </>
    );
}

export default WebAppDevService;