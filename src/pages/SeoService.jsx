import { Link } from "react-router-dom";
import FAQSection from "../components/FAQSection";
import SectionBadge from "../components/SectionBadge";
import BackgroundGraphics from "../components/BackgroundGraphic";
import Reveal from "../components/animate/Reveal";
import SEO from "../components/SEO";
import { Helmet } from "react-helmet-async";

const BASE_URL = import.meta.env.VITE_SITE_URL;

    const features = [
        {
            title: "AI SEO",
            desc: "At Bynix, SEO strategies are designed to help brands appear in AI-generated answers such as Google AI Overviews and conversational platforms like ChatGPT.",
            image: "/seo/outsource-seo.webp",
        },
        {
            title: "E-E-A-T Optimization",
            desc: "E-E-A-T optimization at Bynix is carried out by building strong trust and authority signals across both on-page and off-page elements. This includes authoritative backlinks, digital PR campaigns,  optimizing author profiles, adding verifiable credentials, and more.",
            image: "/seo/small-biz-seo.webp",
        },
        {
            title: "Zero-Click Search Optimization",
            desc: "This is achieved by structuring content for featured snippets, rich results, and knowledge panels using schema markup and concise answer formats.",
            image: "/seo/onpage-seo.webp",
        },
        {
            title: "Voice Search Optimization",
            desc: "This includes targeting long-tail, question-based keywords and creating content that directly answers user intent in a brief and clear manner. ",
            image: "/seo/offpage-seo.webp",
        },
        {
            title: "Content Clusters & Topical Authority",
            desc: "Content clusters are developed by organizing related topics under a central pillar page supported by interconnected subtopics.",
            image: "/seo/technical-seo.webp",
        }
        ,
        {
            title: "Brand Mentions & Digital PR",
            desc: "The process involves securing mentions in reputable publications, industry websites, and high-quality directories to enhance brand visibility.",
            image: "/seo/technical-seo.webp",
        }
    ];
    const seoFaq = [
        {
            "id": 1,
            "question": "What makes Bynix Technology’s SEO services different?",
            "answer": "Our strategies go beyond traditional SEO by integrating AI SEO, E-E-A-T optimization, and data-driven decision-making."
        },
        {
            "id": 2,
            "question": "How long does it take to see results from SEO?",
            "answer": "Significant results typically take 4 to 6 months, depending on competition, industry, and current website status."
        },
        {
            "id": 3,
            "question": "Do you provide customized SEO strategies?",
            "answer": "Absolutely. Every business is unique, so we create tailored SEO strategies based on your goals, target audience, and industry to ensure maximum ROI."
        },
        {
            "id": 4,
            "question": "How often should SEO be updated or optimized?",
            "answer": "SEO is an ongoing process that requires regular updates to stay aligned with algorithm changes and market trends. "
        },
        {
            "id": 5,
            "question": "How do you measure SEO success?",
            "answer": "SEO success is measured by tracking organic traffic, keyword rankings, and user engagement metrics. "
        }
    ];

function SeoService() {
    const seoServiceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "SEO Services",
        url: `${BASE_URL}/services/seo-service`,
        description:
            "Professional SEO services including on-page SEO, off-page SEO, technical SEO, and SEO outsourcing to increase website traffic and search rankings.",
        provider: {
            "@type": "Organization",
            name: "Bynix Technology",
            url: `${BASE_URL}`
        },
        serviceType: "Search Engine Optimization",
        areaServed: {
            "@type": "Place",
            name: "Worldwide"
        },
        knowsAbout: [
            "SEO Services",
            "On Page SEO",
            "Off Page SEO",
            "Technical SEO",
            "Local SEO",
            "SEO Outsourcing"
        ]
    };
    const seoServicesSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: features.map((feature, index) => ({
            "@type": "Service",
            position: index + 1,
            name: feature.title,
            description: feature.desc,
            provider: {
                "@type": "Organization",
                name: "Bynix Technology",
                url: `${BASE_URL}`
            }
        }))
    };
    const seoFaqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: seoFaq.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    faq.answer
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
                name: "SEO Services",
                item: `${BASE_URL}/services/seo-service`
            }
        ]
    };


    return (
        <>
            <SEO
                title="Professional SEO Services | Local & Technical SEO Solutions"
                description="Bynix Technology offers data-driven SEO services including on-page, off-page, technical SEO, and local SEO strategies to boost your website traffic."
                keywords="seo services, on-page seo, off-page seo, technical seo, local seo, seo outsourcing, seo pricing"
                image="/seo/bynix-seo-service-hero.webp"
            />
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(seoServiceSchema)}
                </script>

                <script type="application/ld+json">
                    {JSON.stringify(seoServicesSchema)}
                </script>

                <script type="application/ld+json">
                    {JSON.stringify(seoFaqSchema)}
                </script>

                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbSchema)}
                </script>
            </Helmet>
            <section className="relative bg-white py-16 lg:py-36 px-6 overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-20"
                    style={{ backgroundImage: "url('/seo/bynix-seo-service-hero.webp')" }}
                ></div>

                <div className="container mx-auto text-center relative z-10">
                    <Reveal animation="right">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-black mb-6 leading-tight">
                            <span className="text-[#F27115]">SEO</span> That <span className="text-[#F27115]">Delivers Leads,</span> <br />Not Just Rankings
                        </h1>
                    </Reveal>
                    <Reveal animation="left">
                        <p className="text-black text-left md:text-center font-medium text-lg md:text-xl sm:px-20 mx-auto mb-10 leading-relaxed">
                            At Bynix Technology, we combine advanced SEO techniques with analytics-driven insights to ensure your brand reaches the right audience at the right time. 
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
            <section className="relative md:py-10 lg:py-20 overflow-hidden"> {/* removed bg-white */}
                <BackgroundGraphics topLeftImage="/home-section-bg.jpg" bottomRightImage="/home-section-bg.jpg" />

                {/* Main content */}
                <div className="container mx-auto px-6 max-w-7xl relative z-10 bg-transparent p-10 rounded-xl">
                    {/* Heading */}
                    <div className="text-center mb-8 lg:mb-16">
                        <h2 className="relative inline-block text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 pb-4">
                            Comprehensive SEO Services for
                            <span className="absolute top-5 left-1/2 mix-blend-multiply -translate-x-1/2 w-full h-3 bg-[#FFC107]"></span>
                            <br /> Authority, Visibility & Growth
                            <span className="absolute bottom-5 mix-blend-multiply left-1/2 -translate-x-1/2 w-64 h-3 bg-[#FFC107]"></span>
                        </h2>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {features.map((item, idx) => (
                            <Reveal key={idx} animation="up" delay={idx * 100}>
                                <div
                                    // key={idx}
                                    className="bg-white border z-10 border-gray-400 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col items-start text-left group h-full"
                                >
                                    <div className="mb-6 w-20 h-20 flex items-center justify-center">
                                        <img src={item.image} alt={item.title} className="w-full h-full object-contain animate-icon-wave" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">{item.title}</h3>
                                    <p className="text-gray-600 text-[15px] leading-relaxed">{item.desc}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>

                {/* <Reveal animation="up">
                    <SEOPricingSection />
                </Reveal> */}

                <Reveal animation="up">
                    <FAQSection faqs={seoFaq} />
                </Reveal>
            </section>

        </>
    )
}

export default SeoService;