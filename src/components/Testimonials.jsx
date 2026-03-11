import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function Testimonials() {
    const testimonials = [
        {
            name: "Mark Ray",
            role: "Marketing Director",
            image: "/client-image.jpg",
            content: "Bynix Technology transformed our online presence. Within months, our website started ranking on the first page for competitive keywords. The increase in traffic and conversions exceeded our expectations.",
            rating: "5"
        },
        {
            name: "Amit Shah",
            role: "Operations Head, Online Retail Company",
            image: "/client-image.jpg",
            content: "The team understands both SEO and conversion optimization. They helped us not only increase traffic but also turn visitors into paying customers. Highly recommended!",
            rating: "5"
        },
        {
            name: "Virat Roy",
            role: "Founder, B2B Company",
            image: "/client-image.jpg",
            content: "What impressed us most was their data-driven approach. They didn’t just promise results — they delivered measurable growth. Our qualified leads have nearly doubled since partnering with Bynix Technology.",
            rating: "5"
        },
        {
            name: "Mark Ray",
            role: "Marketing Director",
            image: "/client-image.jpg",
            content: "Bynix Technology transformed our online presence. Within months, our website started ranking on the first page for competitive keywords. The increase in traffic and conversions exceeded our expectations.",
            rating: "5"
        },
        {
            name: "Amit Shah",
            role: "Operations Head, Online Retail Company",
            image: "/client-image.jpg",
            content: "The team understands both SEO and conversion optimization. They helped us not only increase traffic but also turn visitors into paying customers. Highly recommended!",
            rating: "5"
        },
        {
            name: "Virat Roy",
            role: "Founder, B2B Company",
            image: "/client-image.jpg",
            content: "What impressed us most was their data-driven approach. They didn’t just promise results — they delivered measurable growth. Our qualified leads have nearly doubled since partnering with Bynix Technology.",
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

                <img
                    src="/client-success-stories-bg.png"
                    alt=""
                    className="absolute inset-0 w-screen h-full  object-cover z-0"
                    loading="lazy"
                />

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