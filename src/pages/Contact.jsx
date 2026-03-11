import Reveal from "../components/animate/Reveal";
import SEO from "../components/Seo";

function Contact() {
    return (
        <>
            <SEO
                title="Get a Free Quote | Contact Our Experts"
                description="Ready to start your project? Contact Bynix Technology today for a free consultation on web development, app design, or digital marketing services."
                image="/contact-hero.jpg"
            />
            {/* Contact Hero & Form Section */}
            <section className="container mx-auto py-16 lg:py-24 px-5 lg:px-20 grid lg:grid-cols-2 gap-12 items-center">
                <Reveal animation="left">
                <div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                        Your One-Stop Partner for <br />
                        <span className="text-[#F27115]">Digital Marketing, Website & App Development</span>
                    </h1>
                    <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-xl">
                        Get custom strategies, stunning websites, and powerful apps — all tailored to boost your growth.
                    </p>
                    <button className="bg-[#F27115] text-white px-8 py-3 rounded-lg font-bold hover:bg-black transition-colors shadow-lg">
                        Contact Us
                    </button>
                </div>
                </Reveal>

                {/* Lead Form */}
                <Reveal animation="right">
                <div className="bg-[#3D3D3D] p-8 md:p-10 rounded-[2rem] shadow-2xl w-full max-w-lg mx-auto lg:ml-auto">
                    <h2 className="text-white text-2xl font-bold text-center mb-8">Let's Build Your Success</h2>
                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full p-4 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#F95228]"
                        />
                        <input
                            type="text"
                            placeholder="Email/Phone Number"
                            className="w-full p-4 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#F95228]"
                        />
                        <input
                            type="text"
                            placeholder="Business"
                            className="w-full p-4 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#F95228]"
                        />
                        <textarea
                            placeholder="Share Your Project Idea"
                            rows="4"
                            className="w-full p-4 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#F95228] resize-none"
                        ></textarea>
                        <button className="w-full py-4 bg-transparent border border-white/20 text-white font-bold rounded-xl hover:bg-white hover:text-black transition-all">
                            Submit Request
                        </button>
                    </form>
                </div>
                </Reveal>
            </section>
        </>
    )
}
export default Contact;