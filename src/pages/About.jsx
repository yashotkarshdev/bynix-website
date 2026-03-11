// import { Helmet } from "react-helmet-async";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// import 'swiper/css';
// import 'swiper/css/navigation';

// const testimonials = [
//     {
//         name: "Mark Ray",
//         role: "Marketing Director",
//         image: "/client-image.jpg", // Ensure path is correct
//         content: "Bynix Technology transformed our online presence. Within months, our website started ranking on the first page for competitive keywords. The increase in traffic and conversions exceeded our expectations.",
//         rating: "5"
//     },
//     {
//         name: "Amit Shah",
//         role: "Operations Head, Online Retail Company",
//         image: "/client-image.jpg",
//         content: "The team understands both SEO and conversion optimization. They helped us not only increase traffic but also turn visitors into paying customers.Highly recommended!",
//         rating: "5"
//     },
//     {
//         name: "Virat Roy",
//         role: "Founder, B2B Company",
//         image: "/client-image.jpg",
//         content: "What impressed us most was their data-driven approach. They didn’t just promise results — they delivered measurable growth. Our qualified leads have nearly doubled since partnering with Bynix Technology.",
//         rating: "5"
//     }
// ];

// export default function About() {
//     // --- SEO: Schema Markup (JSON-LD) ---
//     const jsonLd = {
//         "@context": "https://schema.org/",
//         "@type": "ItemList",
//         "itemListElement": testimonials.map((t, index) => ({
//             "@type": "ListItem",
//             "position": index + 1,
//             "item": {
//                 "@type": "Review",
//                 "author": { "@type": "Person", "name": t.name },
//                 "reviewBody": t.content,
//                 "reviewRating": {
//                     "@type": "Rating",
//                     "ratingValue": t.rating,
//                     "bestRating": "5"
//                 },
//                 "itemReviewed": {
//                     "@type": "LocalBusiness",
//                     "name": "Bynix Technology"
//                 }
//             }
//         }))
//     };
//     return (
//         <>
//             <Helmet>
//                 <title>About Us | BYNIX Technology</title>
//                 <meta name="description" content="Learn about BYNIX Technology, our clients, projects, ratings, and experience." />
//             </Helmet>

//             {/* Banner Section */}
//             <section
//                 className="relative h-[75vh] sm:h-[75vh] flex items-center justify-center"
//                 style={{
//                     backgroundImage: "url('/bg-image-about.png')",
//                     backgroundSize: "cover",
//                     backgroundPosition: "center",
//                 }}
//             >
//                 {/* Optional: background overlay for better text contrast */}
//                 <div className="absolute inset-0 bg-black/60"></div>
//                 <h1 className="relative z-10 text-white text-3xl sm:text-4xl font-bold drop-shadow-lg">About Us</h1>
//             </section>

//             {/* Stats Bar - Raise z-index, lower negative margin for safety */}
//             <div className="flex justify-center z-20 relative -mt-7 sm:-mt-14 mb-8 px-2">
//                 <div className="bg-white shadow-lg rounded-xl flex flex-wrap sm:flex-nowrap p-6 sm:p-8 gap-8 sm:gap-12 w-full max-w-7xl">
//                     <div className="flex flex-col items-center flex-1 min-w-[120px]">
//                         <span className="text-orange-500 font-extrabold text-2xl sm:text-4xl">99+</span>
//                         <span className="uppercase text-xs text-gray-500 mt-1 text-center">Happy Clients</span>
//                     </div>
//                     <div className="flex flex-col items-center flex-1 min-w-[120px]">
//                         <span className="text-orange-500 font-extrabold text-2xl sm:text-4xl">25</span>
//                         <span className="uppercase text-xs text-gray-500 mt-1 text-center">Success Project</span>
//                     </div>
//                     <div className="flex flex-col items-center flex-1 min-w-[120px]">
//                         <span className="text-orange-500 font-extrabold text-2xl sm:text-4xl">4.5</span>
//                         <span className="uppercase text-xs text-gray-500 mt-1 text-center">Client's Rating</span>
//                     </div>
//                     <div className="flex flex-col items-center flex-1 min-w-[120px]">
//                         <span className="text-orange-500 font-extrabold text-2xl sm:text-4xl">4+</span>
//                         <span className="uppercase text-xs text-gray-500 mt-1 text-center">Years Of Experience</span>
//                     </div>
//                 </div>
//             </div>
//             <section className="container mx-auto lg:py-12 py-5 lg:px-30 md:px-16 px-5">
//                 <button class="group flex items-center gap-4 rounded-full bg-white px-2 py-3 shadow-md shadow-gray-500">
//                     <span class="h-5 w-5 rounded-full bg-[#FF5722]"></span>

//                     <span class="text-lg tracking-tight text-black font-semibold">
//                         ABOUT US
//                     </span>

//                     <span class="h-5 w-5 rounded-full bg-[#FF5722]"></span>
//                 </button>

//                 {/* introduction to best */}
//                 <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-6 py-10 shrink-0 ">
//                     <div className="text-4xl font-semibold"><span className="text-[#FF5722]">Introduction</span> <span>To Best Digital Agency!</span></div>
//                     <div className="text-[14px]"><span>Bynix Technology is a leading Digital Marketing & IT Solutions firm dedicated to accelerating growth for brands, startups, and enterprises. </span></div>
//                     <div className="text-[14px]"><span>Welcome to Bynix Technology — a highly result-oriented and outcome-driven digital marketing company committed to helping businesses grow, compete, and lead in the digital space.</span></div>
//                 </div>

//                 {/* vision growth mission */}
//                 <div className="grid xl:grid-cols-3 lg:grid-cols-2  gap-4 md:py-10 ">
//                     <div className="flex items-center gap-4 bg-white p-5 rounded-lg shadow-md max-w-md">
//                         <div class="bg-orange-500 p-4 rounded-full w-20 h-20 shrink-0">
//                             <img src="./bulb.png" alt="combine analytics, innovation,
//                                 and strategy" />
//                         </div>
//                         <div>
//                             <h3 className="text-lg font-semibold">Vision</h3>
//                             <p className="text-gray-600 text-[11px] mt-1">
//                                 What sets us apart is our ability to combine analytics, innovation,
//                                 and strategy to drive sustainable success.
//                             </p>
//                         </div>
//                     </div>
//                     <div className="flex items-center gap-4 bg-white p-5 rounded-lg shadow-md max-w-md">
//                         <div class="bg-black p-4 rounded-full w-20 h-20 shrink-0">
//                             <img src="./growth.png" alt="Bynix Technology Growth Formula" />
//                         </div>
//                         <div className="max-w-[80%]">
//                             <h3 className="text-lg font-semibold">Growth Formula</h3>
//                             <p className="text-gray-600 text-[11px] mt-1">
//                                 Innovation + Strategy + Execution
//                                 = Success
//                             </p>
//                         </div>
//                     </div>
//                     <div className="flex items-center gap-4 bg-white p-5 rounded-lg shadow-md max-w-md">
//                         <div class="bg-orange-500 flex justify-center items-center p-4 rounded-full w-20 h-20 shrink-0">
//                             <img src="./mission.png" alt="Bynix Technology Mission" className="" />
//                         </div>
//                         <div>
//                             <h3 className="text-lg font-semibold">Mission</h3>
//                             <p className="text-gray-600 text-[11px] mt-1">
//                                 Our mission is to serve as a trusted strategic partner, helping brands achieve tangible results through  scalable solutions.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//                 {/* imgs */}
//                 <div className="p-6 py-20 flex justify-center items-center shrink-0">
//                     <span className=""><img src="./group-image1.png" alt="group-image-of-company-1" /></span>
//                     <span className="relative -left-20 hidden lg:block"><img src="./group-image2.png" alt="group-image-of-company-2" /></span>
//                 </div>

//             </section>
//             <div
//                 className="p-0 m-0 relative flex items-center justify-center h-16"
//                 style={{
//                     backgroundImage: "url('/your-vision-our-mission.png')",
//                     backgroundSize: "cover",
//                 }}
//             >
//                 {/* Optional: background overlay for better text contrast */}
//                 <h1 className="relative z-10 text-[#454545] text-2xl sm:text-4xl font-semibold drop-shadow-lg">Your Vision Our Mission</h1>
//             </div>
//             {/* why choose bynix technology */}
//             <section className="container mx-auto lg:py-12 py-5 lg:px-30 md:px-16 px-5">
//                 <div className="text-4xl font-semibold">
//                     <h2><span className="text-black block">Why Choose <span className="text-[#F95228] block">Bynix Technology?</span></span></h2>
//                 </div>
//                 <div className="py-6">

//                     <p class="text-gray-700 text-lg leading-relaxed">
//                         Our clients are our future growth partners. We value every interaction to provide feasible business solutions. Here's why our clients trust us:
//                     </p>

//                     <ul class="px-5">
//                         <li class="flex items-start">
//                             <span class="mr-2 text-gray-900 font-bold">•</span>
//                             <p class="text-gray-700 leading-relaxed">
//                                 <strong class="text-gray-900 font-semibold">Business-centric Strategies: </strong>
//                                 We avoid using generic templates but focus on strategies that drive leads and improve conversions.
//                             </p>
//                         </li>

//                         <li class="flex items-start">
//                             <span class="mr-2 text-gray-900 font-bold">•</span>
//                             <p class="text-gray-700 leading-relaxed">
//                                 <strong class="text-gray-900 font-semibold">Deliver Measurable Success: </strong>
//                                 We analyze the market to create impactful digital marketing strategies to deliver refined results.
//                             </p>
//                         </li>

//                         <li class="flex items-start">
//                             <span class="mr-2 text-gray-900 font-bold">•</span>
//                             <p class="text-gray-700 leading-relaxed">
//                                 <strong class="text-gray-900 font-semibold">Deliver Competitive Edge: </strong>
//                                 We implement creative solutions that turn visitors into loyal customers.
//                             </p>
//                         </li>
//                     </ul>
//                 </div>
//             </section>
//             {/* our team */}
//             <section className="container lg:py-12 py-5 box-border">
//                 <div className="bg-[#F3F3F3CC] h-fit py-16 flex items-center justify-center gap-16 flex-col w-screen">
//                     <button class="group flex items-center gap-4 rounded-full bg-white px-2 py-3 shadow-md shadow-gray-500">
//                         <span class="h-5 w-5 rounded-full bg-[#FF5722]"></span>

//                         <span class="text-lg tracking-tight text-black font-semibold">
//                             OUR TEAM
//                         </span>

//                         <span class="h-5 w-5 rounded-full bg-[#FF5722]"></span>
//                     </button>
//                     <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-x-24 gap-y-10">
//                         <div className="flex justify-center items-center flex-col gap-2">
//                             <img src="./founder-profile.jpg" alt="founder-profile-image-of-bynix-technology" className="h-26 w-26 rounded-full" />

//                             <div className="flex justify-center items-center flex-col">
//                                 <h3 className="font-semibold">Nitesh Gupta</h3>
//                                 <p>Founder</p>
//                             </div>
//                         </div>
//                         <div className="flex justify-center items-center flex-col gap-2">
//                             <div>
//                                 <img src="./founder-profile.jpg" alt="founder-profile.jpg" className="h-26 w-26 rounded-full" />
//                             </div>
//                             <div className="flex justify-center items-center flex-col">
//                                 <h3 className="font-semibold">Ravinder  Saini</h3>
//                                 <p>Software Developer</p>
//                             </div>
//                         </div>
//                         <div className="flex justify-center items-center flex-col gap-2">
//                             <div>
//                                 <img src="./founder-profile.jpg" alt="founder-profile.jpg" className="h-26 w-26 rounded-full" />
//                             </div>
//                             <div className="flex justify-center items-center flex-col">
//                                 <h3 className="font-semibold">Rajveer Singh</h3>
//                                 <p>SEO Lead</p>
//                             </div>
//                         </div>
//                         <div className="flex justify-center items-center flex-col gap-2">
//                             <div>
//                                 <img src="./founder-profile.jpg" alt="founder-profile.jpg" className="h-26 w-26 rounded-full" />
//                             </div>
//                             <div className="flex justify-center items-center flex-col">
//                                 <h3 className="font-semibold">Kanishka Sharma</h3>
//                                 <p>UI/UX Designer</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             {/* Client Success Stories */}
//             <section className="relative py-24 overflow-hidden" aria-labelledby="testimonials-title">

//                 <img
//                     src="/client-success-stories-bg.png" // Replace with your image path (ensure it's in /public)
//                     alt="Background showing business growth and collaboration" // Descriptive alt for SEO
//                     className="absolute inset-0 w-full h-full z-0"
//                     loading="lazy"
//                 />

//                 {/* 1. Inject Schema into the page for Google Crawlers */}
//                 <script
//                     type="application/ld+json"
//                     dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
//                 />

//                 <div className="container relative z-10 mx-auto px-4">
//                     {/* 2. Semantic Heading */}
//                     <header className="mb-16 text-center">
//                         <h2 id="testimonials-title" className="text-3xl md:text-5xl font-semibold text-black tracking-tight">
//                             Client Success Stories
//                         </h2>
//                     </header>

//                     {/* 3. The Carousel */}
//                     <div className="relative max-w-6xl mx-auto">
//                         <Swiper
//                             modules={[Navigation, Pagination, Autoplay]}
//                             spaceBetween={50} // Increased space slightly for better visual separation
//                             slidesPerView={1}
//                             centeredSlides={true}
//                             loop={true}
//                             autoplay={{ delay: 6000, disableOnInteraction: false }} // Slightly longer delay
//                             navigation={{
//                                 nextEl: '.custom-next',
//                                 prevEl: '.custom-prev',
//                             }}
//                             breakpoints={{
//                                 1024: { slidesPerView: 1.5 }, // Shows the "peek" effect on desktop
//                             }}
//                             className="!overflow-visible"
//                         >
//                             {testimonials.map((item, index) => (
//                                 <SwiperSlide key={index}>
//                                     {({ isActive }) => (
//                                         /* SUBTLE CHANGE: Added 'backdrop-blur-sm' and slightly transparent bg
//                                           to help the card pop against the background image.
//                                         */
//                                         <article
//                                             className={`bg-white/95 backdrop-blur-sm rounded-[2.5rem] shadow-2xl p-10 md:p-16 transition-all duration-700 ease-in-out
//                       ${isActive ? 'opacity-100 scale-100' : 'opacity-40 scale-90 blur-[2px]'}`}
//                                         >
//                                             <div className="flex items-center gap-6 mb-10">
//                                                 <img
//                                                     src={item.image}
//                                                     alt={`Testimonial from ${item.name}, ${item.role}`}
//                                                     className="h-24 w-24 rounded-full border-4 border-[#f39c57]/30 object-cover shadow-inner"
//                                                     loading="lazy"
//                                                 />
//                                                 <div>
//                                                     <h3 className="text-2xl font-bold text-gray-950">{item.name}</h3>
//                                                     <p className="text-[#f39c57] font-semibold text-lg">{item.role}</p>
//                                                 </div>
//                                             </div>

//                                             <blockquote className="relative">
//                                                 {/* Decorative Quote Icons */}
//                                                 <span className="text-7xl text-[#f39c57]/20 absolute -left-8 -top-8 font-serif">“</span>
//                                                 <p className="text-xl text-gray-800 leading-relaxed italic relative z-10 font-medium">
//                                                     {item.content}
//                                                 </p>
//                                                 <span className="text-7xl text-[#f39c57]/20 absolute -right-6 -bottom-12 font-serif">”</span>
//                                             </blockquote>
//                                         </article>
//                                     )}
//                                 </SwiperSlide>
//                             ))}
//                         </Swiper>

//                         {/* 4. Custom Accessible Navigation */}
//                         <div className="flex justify-center items-center gap-8 mt-20">
//                             <button
//                                 className="custom-prev bg-white/90 backdrop-blur-sm hover:bg-[#f39c57] hover:text-white text-gray-900 p-5 rounded-full shadow-xl transition-all border border-gray-100"
//                                 aria-label="Previous testimonial"
//                             >
//                                 <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" /></svg>
//                             </button>
//                             <button
//                                 className="custom-next bg-white/90 backdrop-blur-sm hover:bg-[#f39c57] hover:text-white text-gray-900 p-5 rounded-full shadow-xl transition-all border border-gray-100"
//                                 aria-label="Next testimonial"
//                             >
//                                 <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// }

import { Helmet } from "react-helmet-async";
import TeamCarousel from "../components/TeamCarousel";
import SEO from "../components/Seo";
import SectionBadge from "../components/SectionBadge";


export default function About() {

    return (
        <div className="overflow-x-hidden">
            <SEO
                title="Our Story & Mission"
                description="Learn about Bynix Technology's journey. We are a team of dedicated developers and marketers committed to driving digital transformation and business growth."
                image="/about-team.jpg"
            />

            {/* Banner Section */}
            <section
                className="relative h-[50vh] sm:h-[75vh] flex items-center justify-center text-center px-4"
                style={{
                    backgroundImage: "url('/bg-image-about.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-black/60"></div>
                <h1 className="relative z-10 text-white text-4xl sm:text-6xl font-bold drop-shadow-lg">About Us</h1>
            </section>

            {/* Stats Bar */}
            <div className="flex justify-center z-20 relative -mt-10 sm:-mt-14 mb-8 px-4">
                <div className="bg-white shadow-xl rounded-xl grid grid-cols-2 md:grid-cols-4 p-6 sm:p-8 gap-6 w-full max-w-7xl">
                    <div className="flex flex-col items-center border-r last:border-0 border-gray-100 md:border-r">
                        <span className="text-[#F27115] font-extrabold text-2xl sm:text-4xl">99+</span>
                        <span className="uppercase text-[10px] sm:text-xs text-gray-500 mt-1 text-center font-medium">Happy Clients</span>
                    </div>
                    <div className="flex flex-col items-center md:border-r border-gray-100">
                        <span className="text-[#F27115] font-extrabold text-2xl sm:text-4xl">25</span>
                        <span className="uppercase text-[10px] sm:text-xs text-gray-500 mt-1 text-center font-medium">Success Project</span>
                    </div>
                    <div className="flex flex-col items-center border-r last:border-0 border-gray-100">
                        <span className="text-[#F27115] font-extrabold text-2xl sm:text-4xl">4.5</span>
                        <span className="uppercase text-[10px] sm:text-xs text-gray-500 mt-1 text-center font-medium">Client's Rating</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-[#F27115] font-extrabold text-2xl sm:text-4xl">4+</span>
                        <span className="uppercase text-[10px] sm:text-xs text-gray-500 mt-1 text-center font-medium">Years Experience</span>
                    </div>
                </div>
            </div>

            <section className="container mx-auto py-10 lg:py-16 px-5 lg:px-20">
                <SectionBadge title={"About Us"} />

                {/* introduction grid */}
                <div className="grid lg:grid-cols-3 gap-8 py-10">
                    <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">
                        <span className="text-[#FF5722]">Introduction</span> <br className="hidden sm:block" />
                        <span>To Best Digital Agency!</span>
                    </h2>
                    <p className="text-gray-600 text-base leading-relaxed">
                        Bynix Technology is a leading Digital Marketing & IT Solutions firm dedicated to accelerating growth for brands, startups, and enterprises.
                    </p>
                    <p className="text-gray-600 text-base leading-relaxed">
                        Welcome to Bynix Technology — a highly result-oriented and outcome-driven digital marketing company committed to helping businesses grow and lead in the digital space.
                    </p>
                </div>

                {/* vision growth mission */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
                    {/* Vision */}
                    <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm border border-gray-50 hover:shadow-md transition-shadow">
                        <div className="bg-[#F27115] p-4 rounded-full w-16 h-16 shrink-0 flex items-center justify-center">
                            <img src="/bulb.png" alt="Innovation Icon" loading="lazy" className="w-8 h-8 object-contain" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold">Vision</h3>
                            <p className="text-gray-600 text-sm mt-2 leading-snug">
                                We combine analytics, innovation, and strategy to drive sustainable success for every partner.
                            </p>
                        </div>
                    </div>
                    {/* Growth */}
                    <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm border border-gray-50 hover:shadow-md transition-shadow">
                        <div className="bg-black p-4 rounded-full w-16 h-16 shrink-0 flex items-center justify-center">
                            <img src="/growth.png" alt="Growth Icon" loading="lazy" className="w-8 h-8 object-contain" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-black">Growth Formula</h3>
                            <p className="text-gray-600 text-sm mt-2 leading-snug">
                                Innovation + Strategy + Execution = Success. We build the future of digital commerce.
                            </p>
                        </div>
                    </div>
                    {/* Mission */}
                    <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm border border-gray-50 hover:shadow-md transition-shadow md:col-span-2 lg:col-span-1">
                        <div className="bg-[#F27115] p-4 rounded-full w-16 h-16 shrink-0 flex items-center justify-center">
                            <img src="/mission.png" alt="Mission Icon" loading="lazy" className="w-8 h-8 object-contain" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold">Mission</h3>
                            <p className="text-gray-600 text-sm mt-2 leading-snug">
                                To serve as a trusted strategic partner, helping brands achieve tangible results through scalable solutions.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Team Images Section */}
                <div className="py-16 flex flex-col lg:flex-row justify-center items-center gap-6">
                    <img src="/group-image1.png" alt="Bynix Technology Team Collaboration" loading="lazy" className="rounded-2xl shadow-lg max-w-[60%] h-auto" />
                    <img src="/group-image2.png" alt="Digital Strategy Meeting" loading="lazy" className="hidden lg:block rounded-2xl shadow-lg relative lg:-left-16 z-10 max-w-[40%] h-auto" />
                </div>
            </section>

            {/* Middle Banner */}
            <div
                className="py-12 relative flex items-center justify-center min-h-[150px]"
                style={{
                    backgroundImage: "url('/your-vision-our-mission.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            >
                <div className="absolute inset-0 bg-white/20"></div>
                <h2 className="relative z-10 text-[#454545] text-2xl sm:text-5xl font-bold text-center px-4">Your Vision Our Mission</h2>
            </div>

            {/* Why Choose Section */}
            <section className="container mx-auto py-16 px-5 lg:px-20">
                <div className="max-w-4xl">
                    <h2 className="text-4xl font-bold mb-8">
                        Why Choose <span className="text-[#F95228]">Bynix Technology?</span>
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        Our clients are our future growth partners. We value every interaction to provide feasible business solutions. Here's why our clients trust us:
                    </p>
                    <ul className="space-y-4">
                        {[
                            { title: "Business-centric Strategies", desc: "We avoid using generic templates but focus on strategies that drive leads and improve conversions." },
                            { title: "Deliver Measurable Success", desc: "We analyze the market to create impactful digital marketing strategies to deliver refined results." },
                            { title: "Deliver Competitive Edge", desc: "We implement creative solutions that turn visitors into loyal customers." }
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                                <span className="text-[#F95228] font-bold text-2xl mt-[-4px]">•</span>
                                <p className="text-gray-700 leading-relaxed">
                                    <strong className="text-black font-bold">{item.title}: </strong>{item.desc}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Our Team Section
            <section className="bg-[#F3F3F3CC] py-20 px-4">
                <div className="container mx-auto flex flex-col items-center gap-12">
                    <div className="flex items-center gap-4 rounded-full bg-white px-6 py-3 shadow-md">
                        <span className="h-3 w-3 rounded-full bg-[#FF5722]"></span>
                        <span className="text-lg tracking-widest text-black font-bold uppercase">Our Team</span>
                        <span className="h-3 w-3 rounded-full bg-[#FF5722]"></span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 w-full max-w-6xl">
                        {[
                            { name: "Nitesh Gupta", role: "Founder" },
                            { name: "Ravinder Saini", role: "Software Developer" },
                            { name: "Rajveer Singh", role: "SEO Lead" },
                            { name: "Kanishka Sharma", role: "UI/UX Designer" }
                        ].map((member, i) => (
                            <div key={i} className="flex flex-col items-center gap-4 group">
                                <div className="overflow-hidden rounded-full h-32 w-32 border-4 border-white shadow-lg">
                                    <img src="./founder-profile.jpg" alt={member.name} className="h-full w-full object-cover md:object-contain group-hover:scale-110 transition-transform duration-300" />
                                </div>
                                <div className="text-center">
                                    <h3 className="font-bold text-xl text-gray-900">{member.name}</h3>
                                    <p className="text-[#FF5722] font-medium">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}
            <TeamCarousel />
        </div>
    );
}