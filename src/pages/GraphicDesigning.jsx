import { Link } from "react-router-dom";
import FAQSection from "../components/FAQSection";
import BackgroundGraphics from "../components/BackgroundGraphic";
import Reveal from "../components/animate/Reveal";
import SEO from "../components/SEO";
import { Helmet } from "react-helmet-async";

const BASE_URL = import.meta.env.VITE_SITE_URL;

const designServices = [
    {
        title: "Logo Design",
        desc: "Our experts create distinctive logos that reflect brand identity and establish a strong visual foundation for businesses.",
        // Replace with actual image path from image_16.png
        image: "/graphic-designing/services/logo-design-display.jpg"
    },
    {
        title: "Creative Graphics Design",
        desc: "We deliver visually compelling graphics that enhance brand communication and ensure consistent messaging across platforms.",
        // Replace with actual image path from image_16.png
        image: "/graphic-designing/services/graphics-design-display.jpg"
    },
    {
        title: "Video Editing",
        desc: "We provide professional video editing services that transform raw footage into engaging content aligned with business objectives.",
        // Replace with actual image path from image_16.png
        image: "/graphic-designing/services/video-editing-display.jpg"
    }
];

const benefits = [
    "Reinforces trust and decision-maker confidence",
    "Translates complex offerings into clear visual narratives",
    "Elevates brand authority and market positioning",
    "Drives consistent engagement across platforms",
    "Contributes directly to pipeline growth and ROI"
];

const designingFaqs = [
    {
        "id": 1,
        "question": "How does graphic design benefit B2B businesses?",
        "answer":"Graphic design helps simplify complex ideas, improve communication, and build trust with decision-makers."
    },
    {
        "id": 2,
        "question": "Do you provide custom logo design?",
        "answer": "Yes, we create unique and tailored logos that reflect your brand identity and business values."
    },
    {
        "id": 3,
        "question": "Can you maintain brand consistency across different platforms?",
        "answer": "Absolutely, we ensure all designs follow a unified style for consistent messaging across digital and offline channels."
    },
    {
        "id": 4,
        "question": "What industries do you serve with your design solutions?",
        "answer": "We work with startups, SMEs, and enterprises across various industries, especially B2B sectors."
    },
    {
        "id": 5,
        "question": "How can I get started with your graphic design services?",
        "answer": "You can click on the Get a Quote button and share your requirements to begin the process."
    }
]

const processes = [
    {
        title: "Understanding your brand and goals",
        image: "/graphic-designing/processes/process1.webp" // Replace with actual illustration path
    },
    {
        title: "Research and concept creation",
        image: "/graphic-designing/processes/process2.webp"
    },
    {
        title: "Design and creative development",
        image: "/graphic-designing/processes/process3.webp"
    },
    {
        title: "Client feedback and revisions",
        image: "/graphic-designing/processes/process4.webp"
    },
    {
        title: "Final delivery of high-quality design files",
        image: "/graphic-designing/processes/process5.webp"
    }
];
function GraphicDesigning() {
    const designServiceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Graphic Design Services",
        url: `${BASE_URL}/services/graphic-designing`,
        description:
            "Professional graphic design services including logo design, creative graphics, and video editing to help businesses build strong brand identity.",
        serviceType: "Graphic Design",
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
            "Logo Design",
            "Graphic Design",
            "Creative Graphics",
            "Video Editing",
            "Brand Design",
            "Social Media Design"
        ]
    };

    const servicesSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: designServices.map((service, index) => ({
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
        mainEntity: designingFaqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Bynix Technology provides professional graphic design services including logo design, creative graphics, and video editing tailored to your brand."
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
                name: "Graphic Design",
                item: `${BASE_URL}/services/graphic-designing`
            }
        ]
    };

    return (
        <>
            <SEO
                title="Graphic Design Services | Logo, Creative Graphics & Video Editing"
                description="Bynix Technology provides professional graphic design services including logo design, creative graphics, and video editing to help your brand stand out."
                keywords="graphic design jaipur, logo design jaipur, creative graphics, video editing services, brand design india"
                image="/graphic-designing/hero.webp"
            />
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(designServiceSchema)}
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

            <section className="relative bg-white py-8 lg:py-36 px-6 overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-20"
                    style={{ backgroundImage: "url('/graphic-designing/hero.webp')" }}
                ></div>

                <div className="container mx-auto text-center relative z-10">
                    <Reveal animation="right">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-black mb-6 leading-tight">
                            <span className="text-[#f27115]">Design</span> Excellence That Defines <br /> <span className="text-[#f27115]">Market-Leading Brands</span>
                        </h1>
                    </Reveal>
                    <Reveal animation="left">
                        <p className="text-black text-center font-medium text-lg md:text-xl sm:px-20 mx-auto mb-10 leading-relaxed">
                            Bynix Technology creates high-quality visual assets that go beyond aesthetics to deliver meaningful business outcomes. The approach emphasizes precision, consistency, and alignment with broader organizational goals.
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
            <section className="py-4 md:py-8 lg:py-20 bg-white overflow-hidden">
                <div className="container mx-auto px-6 md:px-12 lg:px-20">

                    {/* Section Heading */}
                    <div className="mb-16">
                        <h2 className="relative inline-block text-3xl font-extrabold text-[#1a1a1a] pb-2">
                            Our Design Services
                            {/* The signature yellow underline highlight */}
                            <span className="absolute -bottom-1 left-0 w-full h-1.5 bg-[#FBC02D]"></span>
                        </h2>
                    </div>

                    {/* Services Grid/Stack */}
                    <Reveal animation="left">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-12">
                            {designServices.map((service, index) => (
                                <Reveal key={index} animation="up" delay={index * 100}>
                                    <div
                                        className="bg-white rounded-md border border-gray-100 shadow-sm overflow-hidden group"
                                    >

                                        {/* Image Container with precise aspect ratio and hover effect */}
                                        <div className="aspect-[16/9] overflow-hidden bg-gray-100">
                                            <img
                                                src={service.image}
                                                alt={service.title}
                                                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                                            />
                                        </div>

                                        {/* Text Content Area */}
                                        <div className="p-8">
                                            {/* Precise Title Typography */}
                                            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-5 tracking-tight">
                                                {service.title}
                                            </h3>
                                            {/* Precise Description Typography */}
                                            <p className="text-[#555] text-[15px] leading-relaxed font-normal">
                                                {service.desc}
                                            </p>
                                        </div>

                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </section>
            <section className="relative py-4 md:py-8 lg:py-20 overflow-hidden"> {/* removed bg-white */}
                <BackgroundGraphics topLeftImage="/home-section-bg.jpg" bottomRightImage="/home-section-bg.jpg" />

                <Reveal animation="right">
                    <section className="py-4 md:py-8 lg:py-20 bg-white/0 overflow-hidden">
                        <div className="container mx-auto px-6 lg:px-20">
                            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                                {/* Left Content Side */}
                                <div className="w-full lg:w-1/2">
                                    {/* Heading with Yellow Underline */}
                                    <div className="mb-8">
                                        <h2 className="relative inline-block text-3xl md:text-4xl font-extrabold text-[#1a1a1a] pb-2">
                                            Business Value of Strategic Design
                                            <span className="absolute -bottom-1 left-0 w-full h-2 bg-[#FBC02D]"></span>
                                        </h2>
                                    </div>

                                    {/* Main Paragraph */}
                                    <p className="text-lg md:text-xl text-[#333] leading-relaxed mb-8 font-medium">
                                        Design serves as a critical driver of perception and performance in competitive markets. For B2B organizations, it enables clearer communication, strengthens brand authority, and creates meaningful engagement across every customer touchpoint.
                                    </p>

                                    {/* Bullet List */}
                                    <ul className="space-y-4">
                                        {benefits.map((item, index) => (
                                            <li key={index} className="flex items-center gap-3 group">
                                                {/* Custom Bullet Point */}
                                                <span className="w-1.5 h-1.5 rounded-full bg-black group-hover:scale-125 transition-transform"></span>
                                                <span className="text-lg md:text-xl font-bold text-[#1a1a1a]">
                                                    {item}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Right Image Side */}
                                <div className="w-full md:w-1/2 relative">
                                    <div className="relative z-10">
                                        <img
                                            src="/graphic-designing/design-collage.webp" // Replace with your collage image path
                                            alt="Creative design elements collage"
                                            className="w-full h-auto object-contain"
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                </Reveal>

                <section className="py-4 md:py-8 lg:py-20 bg-white/0 relative overflow-hidden">

                    <div className="container mx-auto px-6 lg:px-16 relative z-10">

                        {/* Section Heading with Yellow Underline */}
                        <div className="mb-16">
                            <h2 className="relative inline-block text-3xl font-extrabold text-[#1a1a1a] pb-2">
                                Our Design process
                                <span className="absolute -bottom-1 left-0 w-full h-1.5 bg-[#FBC02D]"></span>
                            </h2>
                        </div>

                        {/* Process Cards Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                            {processes.map((item, index) => (
                                <Reveal key={index} animation="up" delay={index * 100}>
                                    <div
                                        className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
                                    >
                                        {/* Illustration */}
                                        <div className="w-full aspect-square mb-8 flex items-center justify-center overflow-hidden">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                style={{ animationDelay: `${index * 0.5}s` }}
                                                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 animate-float"
                                            />
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-[17px] font-bold text-[#1a1a1a] leading-snug px-2">
                                            {item.title}
                                        </h3>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>
                <Reveal animation="up">
                    <FAQSection faqs={designingFaqs} />
                </Reveal>
            </section>
        </>
    )
}

export default GraphicDesigning;