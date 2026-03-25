import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { 
    CheckCircle, 
    Rocket, 
    BarChart3, 
    Settings, 
    Globe, 
    Users, 
    Layers, 
    ArrowRight 
} from "lucide-react";
import BackgroundGraphics from "../components/BackgroundGraphic";
import SEO from "../components/SEO";
import FAQSection from "../components/FAQSection";
import Reveal from "../components/animate/Reveal";

const BASE_URL = import.meta.env.VITE_SITE_URL;

// --- SCALABLE DATA OBJECTS ---

const STATS = [
    { label: "Projects Delivered", val: "50+" },
    { label: "Active Clients Across Industries", val: "20+" },
    { label: "Execution Experience", val: "3+ Years" },
    { label: "Lead Gen & Conversions", val: "Up to 2x" }
];

const TARGET_AUDIENCE = [
    "Startups looking to build scalable digital infrastructure",
    "SMEs aiming to generate consistent inbound leads",
    "Enterprises seeking automation and performance optimization",
    "SaaS companies focused on growth and product scalability"
];

const SERVICES_DATA = [
    {
        title: "Web & App Development Services",
        desc: "Custom-built, scalable, and secure digital platforms designed to handle growth, automate workflows, and enhance user experience.",
        image: "/web-app-development/maintenance.webp",
        link: "/services/web-app-development-service",
        icon: <Globe className="text-[#f27115] w-8 h-8" />,
        outcome: "Faster operations, better user experience, and higher conversion rates."
    },
    {
        title: "Search Engine Optimization Services",
        desc: "We help businesses rank for high-intent keywords and generate consistent organic traffic that converts into leads.",
        image: "/seo/bynix-seo-service-hero.png",
        link: "/services/seo-service",
        icon: <BarChart3 className="text-[#f27115] w-8 h-8" />,
        outcome: "Sustainable traffic, better visibility, and long-term lead generation."
    },
    {
        title: "Social Media Management (SMM Services)",
        desc: "We transform your social media into a lead generation and brand positioning channel.",
        image: "/smm-service/content.webp",
        link: "/services/smm-service",
        icon: <Users className="text-[#f27115] w-8 h-8" />,
        outcome: "Stronger brand authority and consistent lead flow."
    },
    {
        title: "Graphic Designing Services",
        desc: "We create high-impact visual assets that communicate your brand clearly and professionally.",
        image: "/graphic-designing/services/logo-design-display.jpg",
        link: "/services/graphic-designing",
        icon: <Layers className="text-[#f27115] w-8 h-8" />,
        outcome: "Stronger brand perception and improved engagement."
    },
    {
        title: "SaaS Development & Solutions",
        desc: "We build scalable SaaS products and automation systems tailored to your business model.",
        image: "/saas/bynix-saas-service.jpg",
        link: "/services/saas-service",
        icon: <Rocket className="text-[#f27115] w-8 h-8" />,
        outcome: "Recurring revenue models and operational efficiency."
    }
];

const FAQS = [
    {
        id: 1,
        question: "How does Bynix Technology approach a new project?",
        answer: "We begin with a discovery phase to understand your business model, target audience, and objectives, followed by a tailored strategy and structured execution plan."
    },
    {
        id: 2,
        question: "Can you manage both development and marketing under a single strategy?",
        answer: "Yes, we provide integrated solutions that combine web and app development, SEO, paid marketing, and SaaS systems to ensure aligned execution and scalable growth."
    },
    {
        id: 3,
        question: "How do you ensure quality and performance in your deliverables?",
        answer: "We follow a structured process that includes performance tracking, testing, and continuous optimization to ensure high-quality, reliable, and results-driven outcomes."
    },
    {
        id: 4,
        question: "Will I have visibility into project progress?",
        answer: "Yes, we maintain transparent communication through regular updates, reporting, and milestone-based reviews throughout the engagement."
    },
    {
        id: 5,
        question: "How do you measure success for your services?",
        answer: "We measure success using business-focused KPIs such as lead quality, conversion rates, ROI, traffic growth, and overall impact on business performance."
    }
];

const PROBLEM_SOLUTIONS = [
    { problem: "Low-quality Lead Pipeline", solution: "SEO + Paid Ads + Funnel Optimization" },
    { problem: "Weak Market Positioning", s: "Branding + Website Redesign", solution: "Branding + Website Redesign" },
    { problem: "Manual Processes", solution: "SaaS + Automation Systems" },
    { problem: "Low Conversion Rates", solution: "UX Optimization + CRO Strategies" }
];

function Services() {
    // Logic for SEO Schema
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Digital Growth & Technology Solutions",
        url: `${BASE_URL}/services`,
        description: "Bynix Technology provides web development, SEO, SMM, SaaS, and design solutions to help businesses scale.",
        provider: { "@type": "Organization", name: "Bynix Technology", url: `${BASE_URL}` },
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Bynix Services",
            itemListElement: SERVICES_DATA.map((s) => ({
                "@type": "Offer",
                itemOffered: { "@type": "Service", name: s.title, url: `${BASE_URL}${s.link}` }
            }))
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}` },
            { "@type": "ListItem", position: 2, name: "Services", item: `${BASE_URL}/services` }
        ]
    };

    return (
        <div className="bg-white text-black">
            <SEO
                title="Digital Growth & Technology Solutions for Scalable Businesses"
                description="Bynix Technology provides web development, SEO, SMM, SaaS, and design solutions to help businesses scale with performance-driven digital strategies."
                keywords="web development, SEO, SMM, SaaS development, graphic design, Bynix Technology"
                image="/home-preview.jpg"
            />
            
            <Helmet>
                <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
                <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
            </Helmet>

            {/* HERO SECTION */}
            <section className="relative py-20 lg:py-32 px-6 bg-white overflow-hidden text-center">
                <div className="container mx-auto max-w-4xl relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
                        <span className="text-[#f27115]">Digital</span> Growth & <span className="text-[#f27115]">Technology</span> Solutions for Scalable Businesses
                    </h1>
                    <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed">
                        Bynix Technology helps businesses build scalable digital systems that drive measurable growth. We combine technology, marketing, and design to create integrated solutions.
                    </p>
                    <Link to="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-black text-white font-bold rounded-lg hover:bg-[#f27115] transition-all">
                        Get a Quote <ArrowRight size={20} />
                    </Link>
                </div>
            </section>

            {/* CREDIBILITY SECTION */}
            <section className="py-16 bg-black text-white">
                <div className="container mx-auto px-6">
                    <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto italic">
                        Trusted by growing businesses across industries for delivering measurable digital growth through structured execution.
                    </p>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                        {STATS.map((stat, i) => (
                            <div key={i}>
                                <h3 className="text-4xl font-extrabold text-[#f27115] mb-2">{stat.val}</h3>
                                <p className="text-sm uppercase tracking-widest font-medium text-gray-300">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHO WE WORK WITH */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-12 border-l-8 border-[#f27115] pl-4">Who We Work With</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {TARGET_AUDIENCE.map((text, i) => (
                            <div key={i} className="flex items-center gap-4 p-5 bg-gray-50 rounded-xl hover:bg-white hover:shadow-md border border-transparent hover:border-gray-200 transition">
                                <CheckCircle className="text-[#f27115]" size={24} />
                                <span className="text-gray-800 font-medium">{text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SERVICES GRID */}
            <section className="relative py-20 overflow-hidden bg-gray-50">
                <BackgroundGraphics topLeftImage="/home-section-bg.jpg" bottomRightImage="/home-section-bg.jpg" />
                <div className="container mx-auto px-6 relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Explore Our <span className="text-[#f27115]">Core Services</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {SERVICES_DATA.map((s, i) => (
                            <div key={i} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition duration-500 group">
                                <div className="h-52 overflow-hidden relative">
                                    <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                                    <div className="absolute bottom-4 left-4 bg-white p-3 rounded-full shadow-lg">{s.icon}</div>
                                </div>
                                <div className="p-8">
                                    <h3 className="text-xl font-bold mb-4 group-hover:text-[#f27115] transition">{s.title}</h3>
                                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{s.desc}</p>
                                    <div className="bg-orange-50 p-3 rounded-lg mb-6 border-l-4 border-[#f27115]">
                                        <p className="text-xs font-bold text-gray-500 uppercase">Outcome</p>
                                        <p className="text-sm font-semibold text-gray-800">{s.outcome}</p>
                                    </div>
                                    <Link to={s.link} className="flex items-center gap-2 font-bold text-black border-b-2 border-black pb-1 w-fit hover:text-[#f27115] hover:border-[#f27115] transition">
                                        Explore Service <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PROBLEM/SOLUTION TABLE */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold text-center mb-12 uppercase tracking-tight">How Our Services Solve <span className="text-[#f27115]">Business Problems</span></h2>
                    <div className="overflow-hidden rounded-xl border-2 border-black">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-black text-white">
                                    <th className="p-6 font-bold border-r border-gray-700">Business Problem</th>
                                    <th className="p-6 font-bold">Solutions by Bynix</th>
                                </tr>
                            </thead>
                            <tbody>
                                {PROBLEM_SOLUTIONS.map((item, i) => (
                                    <tr key={i} className="border-b border-gray-200 last:border-0 hover:bg-orange-50/50 transition">
                                        <td className="p-6 font-bold text-gray-800 border-r border-gray-100">{item.problem}</td>
                                        <td className="p-6 text-[#f27115] font-semibold">{item.solution}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="py-24 bg-black text-white text-center">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Build a Scalable Growth System?</h2>
                    <p className="text-lg text-gray-400 mb-10">Let’s transform your business with high-performance digital solutions.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link to="/contact" className="px-10 py-4 bg-[#F27115] text-white font-bold rounded-lg hover:bg-white hover:text-black transition">
                            Get Started
                        </Link>
                    </div>
                </div>
            </section>
            <Reveal animation="up" >
            <FAQSection faqs={FAQS} />
            </Reveal>
        </div>
    );
}

export default Services;