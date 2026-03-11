import { Link } from "react-router-dom";
import FAQSection from "../components/FAQSection";
import BackgroundGraphics from "../components/BackgroundGraphic";
import Reveal from "../components/animate/Reveal";
const designServices = [
    {
        title: "Logo Design",
        desc: "We create unique and memorable logos that represent your brand identity. Our designs are crafted to be modern, professional, and easily recognizable across all platforms.",
        // Replace with actual image path from image_16.png
        image: "/graphic-designing/services/logo-design-display.jpg"
    },
    {
        title: "Creative Graphics Design",
        desc: "Our creative team designs social media posts, banners, ads, and marketing materials that capture attention and strengthen your brand presence online.",
        // Replace with actual image path from image_16.png
        image: "/graphic-designing/services/graphics-design-display.jpg"
    },
    {
        title: "Video Editing",
        desc: "We deliver high-quality video editing services for promotional videos, social media content, advertisements, and business presentations to make your content more engaging and professional.",
        // Replace with actual image path from image_16.png
        image: "/graphic-designing/services/video-editing-display.jpg"
    }
];

const benefits = [
    "Strong brand identity",
    "Better audience engagement",
    "Professional brand image",
    "Higher marketing impact",
    "Improved brand recognition"
];

const designingFaqs = [
    {
        "id": 1,
        "question": "What design services do you offer?"
    },
    {
        "id": 2,
        "question": "How long does it take to design a logo or creative?"
    },
    {
        "id": 3,
        "question": "Do you offer revisions?"
    },
    {
        "id": 4,
        "question": "Can you create designs for social media marketing?"
    }
]

const processes = [
    {
        title: "Understanding your brand and goals",
        image: "/graphic-designing/processes/process1.jpg" // Replace with actual illustration path
    },
    {
        title: "Research and concept creation",
        image: "/graphic-designing/processes/process2.jpg"
    },
    {
        title: "Design and creative development",
        image: "/graphic-designing/processes/process3.jpg"
    },
    {
        title: "Client feedback and revisions",
        image: "/graphic-designing/processes/process4.jpg"
    },
    {
        title: "Final delivery of high-quality design files",
        image: "/graphic-designing/processes/process5.jpg"
    }
];
function GraphicDesigning() {

    return (
        <>

            <section className="relative bg-white py-8 lg:py-36 px-6 overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-20"
                    style={{ backgroundImage: "url('/graphic-designing/hero.jpg')" }}
                ></div>

                {/* Background Pattern - Optional visual element */}
                <div className="relative inset-0 opacity-5 pointer-events-none">
                    <img src="/path-to-your-bg-pattern.svg" alt="" className="w-full h-full object-cover" />
                </div>

                <div className="container mx-auto text-center relative z-10">
                    <Reveal animation="right">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-black mb-6 leading-tight">
                            Creative <span className="text-[#F27115]">Design Solutions</span> <br /> That Bring Your Brand to Life
                        </h1>
                    </Reveal>
                    <Reveal animation="left">
                        <p className="text-black text-center font-medium text-lg md:text-xl sm:px-20 mx-auto mb-10 leading-relaxed">
                            At Bynix Technology, we provide professional design services including logo design, creative graphics, and video editing to help your brand stand out and communicate effectively with your audience.
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
            <section className="py-20 bg-white overflow-hidden">
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
                                <Reveal key={index} animation="up" delay={index * 200}>
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
            <section className="relative py-20 overflow-hidden"> {/* removed bg-white */}
                <BackgroundGraphics topLeftImage="/home-section-bg.jpg" bottomRightImage="/home-section-bg.jpg" />

                <Reveal animation="right">
                    <section className="py-20 bg-white/0 overflow-hidden">
                        <div className="container mx-auto px-6 lg:px-20">
                            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                                {/* Left Content Side */}
                                <div className="w-full lg:w-1/2">
                                    {/* Heading with Yellow Underline */}
                                    <div className="mb-8">
                                        <h2 className="relative inline-block text-3xl md:text-4xl font-extrabold text-[#1a1a1a] pb-2">
                                            Why Good Design Matters
                                            <span className="absolute -bottom-1 left-0 w-full h-2 bg-[#FBC02D]"></span>
                                        </h2>
                                    </div>

                                    {/* Main Paragraph */}
                                    <p className="text-lg md:text-xl text-[#333] leading-relaxed mb-8 font-medium">
                                        Good design helps your business build trust, communicate clearly, and attract customers.
                                        Strong visuals create a lasting impression and help your brand stand out in a competitive market.
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
                                            src="/graphic-designing/design-collage.png" // Replace with your collage image path
                                            alt="Creative design elements collage"
                                            className="w-full h-auto object-contain"
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                </Reveal>

                <section className="py-20 bg-white/0 relative overflow-hidden">

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
                                <Reveal key={index} animation="up" delay={index * 200}>
                                    <div
                                        className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
                                    >
                                        {/* Illustration */}
                                        <div className="w-full aspect-square mb-8 flex items-center justify-center overflow-hidden">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                style={{animationDelay:`${index*0.5}s`}}
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