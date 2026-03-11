import { Link } from "react-router-dom";
import FAQSection from "../components/FAQSection";
import SectionBadge from "../components/SectionBadge";
import BackgroundGraphics from "../components/BackgroundGraphic";
import Reveal from "../components/animate/Reveal";

function SeoService() {
    const features = [
        {
            title: "Outsource SEO",
            desc: "We provide professional outsourcing services to improve your customer base and your online presence. We have a professional team that helps in increasing traffic, improving search engine ranking, and business growth.",
            image: "/seo/outsource-seo.png",
        },
        {
            title: "Small Business SEO",
            desc: "Small businesses face many challenges in growing their online presence in today's digital market. SEO is essential to grow and stay ahead, and have a strong presence on Google. We know that small businesses need cost-effective and result-driven solutions.",
            image: "/seo/small-biz-seo.png",
        },
        {
            title: "On-Page SEO",
            desc: "It is used to optimize your website content, structure, layout, and technical elements to increase traffic and user experience. We optimize keywords, internal links, pictures, title tags, headings, and meta descriptions, and enhance the efficiency of the website.",
            image: "/seo/onpage-seo.png",
        },
        {
            title: "Off-page SEO",
            desc: "A strong digital presence is essential for growing your online presence in today's competitive online market. A strong off-page SEO strategy will boost your website traffic and increase your brand reputation.",
            image: "/seo/offpage-seo.png",
        },
        {
            title: "Technical SEO",
            desc: "The website must be technically strong for online presence and search ranking. Technical SEO ensures your website works smoothly or not. We have professional technical experts who provide proper website structure and overall performance of your website.",
            image: "/seo/technical-seo.png",
        }
    ];
    const seoFaq = [
        {
            "id": 1,
            "question": "What is SEO?"
        },
        {
            "id": 2,
            "question": "Why is SEO important for my business?"
        },
        {
            "id": 3,
            "question": "How long does it take to see results from SEO?"
        },
        {
            "id": 4,
            "question": "What is keyword research in SEO?"
        }
    ];


    return (
        <>

            <section className="relative bg-white py-16 lg:py-36 px-6 overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-20"
                    style={{ backgroundImage: "url('/seo/bynix-seo-service-hero.png')" }}
                ></div>

                {/* Background Pattern - Optional visual element */}
                <div className="relative inset-0 opacity-5 pointer-events-none">
                    <img src="/path-to-your-bg-pattern.svg" alt="" className="w-full h-full object-cover" />
                </div>

                <div className="container mx-auto text-center relative z-10">
                    <Reveal animation="right">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-black mb-6 leading-tight">
                            Data-Driven <span className="text-[#F27115]">SEO</span> Solutions <br />
                            for Sustainable Website Growth
                        </h1>
                    </Reveal>
                    <Reveal animation="left">
                        <p className="text-black text-left md:text-center font-medium text-lg md:text-xl sm:px-20 mx-auto mb-10 leading-relaxed">
                            Bynix Technology offers SEO services with advanced solutions to grow your business.
                            We have a dedicated team of professionals who are trained in keyword optimization,
                            link building, and high-quality content development. Our experts use latest SEO
                            techniques that align with search engine algorithms to boost organic traffic.
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
            <section className="relative py-20 overflow-hidden"> {/* removed bg-white */}
                <BackgroundGraphics topLeftImage="/home-section-bg.jpg" bottomRightImage="/home-section-bg.jpg" />

                {/* Main content */}
                <div className="container mx-auto px-6 max-w-7xl relative z-10 bg-transparent p-10 rounded-xl">
                    {/* Heading */}
                    <div className="text-center mb-16">
                        <h2 className="relative inline-block text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 pb-4">
                            Why Local SEO Matters to
                            <span className="absolute top-5 left-1/2 mix-blend-multiply -translate-x-1/2 w-full h-3 bg-[#FFC107]"></span>
                            <br /> Your Business?
                            <span className="absolute bottom-5 mix-blend-multiply left-1/2 -translate-x-1/2 w-64 h-3 bg-[#FFC107]"></span>
                        </h2>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((item, idx) => (
                            <Reveal key={idx} animation="up" delay={idx * 150}>
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
                
                <Reveal animation="up">
                <FAQSection faqs={seoFaq} />
                </Reveal>
            </section>

        </>
    )
}

export default SeoService;