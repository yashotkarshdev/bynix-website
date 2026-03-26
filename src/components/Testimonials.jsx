import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function Testimonials() {
    const testimonials = [
        {
            name: "Fit Quest",
            role: "Marketing Head",
            image: "/clientImages/fit-quest-jaipur.webp",
            content: "Bynix transformed our member acquisition with premium branding and high-quality leads that actually convert.",
            rating: "5"
        },
        {
            name: "Madistax",
            role: "Founder",
            image: "/clientImages/madistax.webp",
            content: "Bynix understood our business deeply and helped us achieve consistent growth with a clear strategic approach.",
            rating: "5"
        },
        {
            name: "Growth Happen",
            role: "Co-Founder",
            image: "/clientImages/growth-happen.webp",
            content: "Their execution, clarity, and ROI-focused strategies truly set Bynix apart from typical agencies.",
            rating: "5"
        },
        {
            name: "The Trusted Beauty ",
            role: "Brand Manager",
            image: "/clientImages/the-trusted-beuty.webp",
            content: "Bynix helped us stand out in a crowded market with strong positioning and performance-driven marketing.",
            rating: "5"
        },
        {
            name: "The Style Shaala",
            role: "Creative Director",
            image: "/clientImages/the-style-shaala.webp",
            content: "Our brand identity feels stronger and more engaging thanks to Bynix’s creative digital execution.",
            rating: "5"
        },
        {
            name: "Refreshing Flavours",
            role: "Business Owner",
            image: "/clientImages/refreshing-flavours.webp",
            content: "Bynix built a refreshing brand image and helped us connect with the right audience effectively.",
            rating: "5"
        },
        {
            name: "Elixir Balance",
            role: "Operations Head",
            image: "/clientImages/elixir-balance.webp",
            content: "Their attention to detail and strategic approach made a significant difference to our overall growth.",
            rating: "5"
        },
        {
            name: "Sine Elevators",
            role: "Director",
            image: "/clientImages/sineel-evators.webp",
            content: "Bynix gave our brand a modern, credible digital presence that resonates with potential clients.",
            rating: "5"
        },
        {
            name: "Pure Work Athletics",
            role: "Founder",
            image: "/clientImages/pure-work-athletics.webp",
            content: "They captured our brand vision perfectly and helped us build a strong identity in the fitness space.",
            rating: "5"
        },
        {
            name: "TheAutonTwk",
            role: "Digital Marketing Manager",
            image: "/clientImages/the-auton-twk.webp",
            content: "We saw immediate improvement in inquiries with Bynix’s performance marketing and website optimization.",
            rating: "5"
        }
    ];

        const jsonLd = {
        "@context": "https://schema.org/",
        "@type": "ItemList",
        "itemListElement": testimonials.map((t, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
                "@type": "Review",
                "author": { "@type": "Person", "name": t.name },
                "reviewBody": t.content,
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": t.rating,
                    "bestRating": "5"
                },
                "itemReviewed": {
                    "@type": "LocalBusiness",
                    "name": "Bynix Technology"
                }
            }
        }))
    };
    return (  
        <>
            {/* Testimonials */}
            <section className="relative py-24 px-4 overflow-hidden">
                <script type="application/ld+json">
                    {JSON.stringify(jsonLd)}
                </script>

                {/* <img
                    src="/client-success-stories-bg.png"
                    alt=""
                    className="absolute inset-0 w-screen h-full  object-cover z-0"
                    loading="lazy"
                /> */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#f27115] to-white"></div>

                <div className="container relative z-10 mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-center text-black mb-16">
                        Client Success Stories
                    </h2>

                    <div className="max-w-5xl mx-auto">
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={30}
                            slidesPerView={1}
                            centeredSlides={true}
                            loop={true}
                            autoplay={{ delay: 5000 }}
                            navigation={{ nextEl: '.custom-next', prevEl: '.custom-prev' }}
                            breakpoints={{
                                1024: { slidesPerView: 1.2 },
                            }}
                            className="!overflow-visible"
                        >
                            {testimonials.map((item, index) => (
                                <SwiperSlide key={index}>
                                    {({ isActive }) => (
                                        <article className={`bg-white rounded-[2rem] shadow-2xl p-8 md:p-12 transition-all duration-500 
                                            ${isActive ? 'opacity-100 scale-100' : 'opacity-40 scale-90 blur-[1px]'}`}>
                                            <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
                                                <img src={item.image} alt={item.name} className="h-20 w-20 rounded-full border-2 border-orange-100 object-cover shadow-md" />
                                                <div className="text-center sm:text-left">
                                                    <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                                                    <p className="text-orange-500 font-semibold">{item.role}</p>
                                                </div>
                                            </div>
                                            <blockquote className="relative">
                                                <p className="text-lg text-gray-700 leading-relaxed italic font-medium">
                                                    "{item.content}"
                                                </p>
                                            </blockquote>
                                        </article>
                                    )}
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <div className="flex justify-center items-center gap-6 mt-12">
                            <button className="custom-prev bg-white hover:bg-black hover:text-white text-black p-4 rounded-full shadow-lg transition-all border border-gray-100" aria-label="Previous">
                                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" /></svg>
                            </button>
                            <button className="custom-next bg-white hover:bg-black hover:text-white text-black p-4 rounded-full shadow-lg transition-all border border-gray-100" aria-label="Next">
                                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonials;