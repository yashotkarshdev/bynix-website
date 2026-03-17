import SectionBadge from "../components/SectionBadge";
import FAQSection from "../components/FAQSection";
import BackgroundGraphics from "../components/BackgroundGraphic";
import Reveal from "../components/animate/Reveal";
import SEO from "../components/SEO";
import { Helmet } from "react-helmet-async";

function WebAppDevService() {
    const services = [
        {
            title: "Custom Website Development",
            desc: "At Bynix Technology, we create fully customized websites tailored to your business goals and brand identity. Our websites are fast, responsive, and designed to deliver a seamless user experience across all devices.",
            image: "/web-app-development/custom-web.jpg",
        },
        {
            title: "Mobile App Development (Android & iOS)",
            desc: "Our apps are designed to provide high performance, smooth functionality, and an engaging user experience.",
            image: "/web-app-development/mobile-app.jpg",
        },
        {
            title: "E-Commerce Development",
            desc: "Build a secure and scalable online store with our e-commerce development services. We create feature-rich platforms that make it easy to manage products, process payments, and grow your online business.",
            image: "/web-app-development/ecommerce.jpg",
        },
        {
            title: "Web Application Development",
            desc: "Our team develops robust and scalable web applications that streamline business operations and improve efficiency. We focus on performance, security, and flexibility to deliver reliable digital solutions.",
            image: "/web-app-development/web-app-dev.jpg",
        },
        {
            title: "UI/UX Design",
            desc: "We design intuitive and visually appealing UI/UX experiences that keep users engaged. Our design approach focuses on usability, creativity, and delivering a smooth interaction for your customers.",
            image: "/web-app-development/ui-ux.jpg",
        },
        {
            title: "Website Maintenance & Support",
            desc: "We provide updates, security monitoring, bug fixes, and performance optimization to ensure your site stays secure and up to date.",
            image: "/web-app-development/maintenance.jpg",
        }
    ];

    const webAppFaqs = [
        {
            "id": 1,
            "question": "What services does Bynix Technology offer in web and app development?"
        },
        {
            "id": 2,
            "question": "How long does it take to develop a website or mobile app?"
        },
        {
            "id": 3,
            "question": "Will my website or app be mobile-friendly?"
        },
        {
            "id": 4,
            "question": "Can you redesign an existing website or app?"
        }
    ];
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Web & Mobile App Development Services",
        url: "https://www.bynixtechnology.com/services/web-app-development-service",
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
            url: "https://www.bynixtechnology.com"
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
                item: "https://www.bynixtechnology.com"
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "Services",
                item: "https://www.bynixtechnology.com/services"
            },
            {
                "@type": "ListItem",
                position: 3,
                name: "Web & App Development",
                item: "https://www.bynixtechnology.com/services/web-app-development-service"
            }
        ]
    };
    return (
        <>
            <SEO
                title="Web & Mobile App Development Services | Bynix Technology"
                description="Bynix Technology offers professional web and mobile app development services including custom websites, e-commerce platforms, UI/UX design, and scalable web applications."
                keywords="web development services, mobile app development company, ecommerce development, web application development, UI UX design services"
                image="/web-app-development/custom-web.jpg"
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
                className="relative py-16 lg:py-44 px-6 overflow-hidden"
            >
                <div className="container md:px-6 lg:px-18 mx-auto grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <Reveal animation="left">
                        <div className="z-10">
                            {/* <Reveal animation="right"> */}
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-950 leading-tight mb-6">
                                Smart <span className="text-[#F27115]">Web & Mobile</span> App
                                Development That Drives Results
                            </h1>
                            {/* </Reveal> */}
                            {/* <Reveal animaiton="left"> */}
                            <p className="text-gray-700 text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
                                Turn your ideas into powerful digital solutions with Bynix Technology's
                                Web & App Development services. We design and develop innovative
                                websites and mobile apps that help businesses stand out and succeed online.
                            </p>
                            {/* </Reveal> */}

                            <Reveal animation="zoom" delay={200}>
                                <div className="flex flex-wrap gap-4">
                                    <button className="px-8 py-3 bg-white border border-gray-300 text-black font-semibold rounded-md hover:bg-gray-50 transition-all">
                                        Explore Our Solutions
                                    </button>

                                    <button className="px-8 py-3 bg-black text-white font-semibold rounded-md hover:bg-[#F27115] transition-all">
                                        Get In Touch
                                    </button>
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
                <section className="py-12 md:py-24 bg-white/20 relative overflow-hidden">
                    <div className="container mx-auto px-6 lg:px-18 relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight">

                                <span className="relative inline-block px-2">
                                    Why Your Business Needs a
                                    <span className="absolute left-0 bottom-2 w-full h-1 md:h-3 bg-[#FFC107] -z-10"></span>
                                </span>

                                <br />

                                <span className="relative inline-block px-2 mt-2">
                                    Website or App
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
                                        In today’s digital world, having a professional website and mobile app helps your business reach more customers and build a strong online presence. A well-developed platform allows customers to easily explore your services, interact with your brand, and make purchases anytime.
                                    </p>
                                </Reveal>
                                <Reveal animation="right" delay={200}>
                                    <p className="text-[#444] text-[19px] leading-[1.8] font-medium text-justify lg:text-right">
                                        Web and app development also improves business efficiency, enhances customer experience, and helps you stay competitive in the modern market. With the right digital solution, your business can grow faster and connect with a wider audience.
                                    </p>
                                </Reveal>

                            </div>
                        </div>
                    </div>
                </section >

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
                                        <p className="text-gray-600 leading-relaxed text-[15px]">
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