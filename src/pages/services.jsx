import { Link } from "react-router-dom";
import BackgroundGraphics from "../components/BackgroundGraphic";

function Services() {

const services = [
{
title: "Web & App Development",
desc: "Build powerful websites and mobile apps designed for performance, scalability, and user experience.",
image: "/web-app-development/custom-web.jpg",
link: "/services/web-app-development-service"
},
{
title: "SEO Services",
desc: "Improve your search rankings and organic traffic with data-driven SEO strategies.",
image: "/seo/onpage-seo.png",
link: "/services/seo-service"
},
{
title: "Social Media Marketing",
desc: "Grow your brand presence and engagement with targeted social media campaigns.",
image: "/smm-service/content.jpg",
link: "/services/smm-service"
},
{
title: "SaaS Development",
desc: "Develop scalable SaaS platforms that help businesses automate and scale efficiently.",
image: "/saas/service-graphic.png",
link: "/services/saas-service"
},
{
title: "Graphic Designing",
desc: "Professional design services including logos, graphics, and video editing to elevate your brand.",
image: "/graphic-designing/services/logo-design-display.jpg",
link: "/services/graphic-designing"
}
];

return (
<>
{/* HERO */}
<section className="relative py-24 lg:py-36 px-6 bg-white overflow-hidden">

<div className="container mx-auto text-center max-w-4xl">

<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6">
Our <span className="text-[#F27115]">Digital Services</span>
</h1>

<p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-10">
At Bynix Technology we provide end-to-end digital solutions designed
to help businesses grow online, improve visibility, and build
powerful digital products.
</p>

<Link
to="/contact"
className="px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-[#F27115] transition"
>
Get Started
</Link>

</div>

</section>

{/* SERVICES GRID */}

<section className="relative py-20 overflow-hidden">

<BackgroundGraphics
topLeftImage="/home-section-bg.jpg"
bottomRightImage="/home-section-bg.jpg"
/>

<div className="container mx-auto px-6 lg:px-18 relative z-10">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

{services.map((service,index)=>(
<div
key={index}
className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300"
>

<div className="h-56 overflow-hidden">
<img
src={service.image}
alt={service.title}
className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
/>
</div>

<div className="p-8">

<h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#F27115] transition">
{service.title}
</h3>

<p className="text-gray-600 mb-6 leading-relaxed">
{service.desc}
</p>

<Link
to={service.link}
className="inline-block font-semibold text-black border-b border-black hover:text-[#F27115] hover:border-[#F27115] transition"
>
Explore Service →
</Link>

</div>

</div>
))}

</div>

</div>

</section>

{/* CTA */}

<section className="py-24 bg-black text-white text-center">

<div className="container mx-auto px-6 max-w-3xl">

<h2 className="text-3xl md:text-4xl font-semibold mb-6">
Ready to grow your business online?
</h2>

<p className="text-lg text-gray-300 mb-10">
Our team helps businesses create powerful digital experiences,
increase visibility, and generate more customers.
</p>

<Link
to="/contact"
className="px-10 py-4 bg-[#F27115] rounded-lg font-semibold hover:bg-white hover:text-black transition"
>
Start Your Project
</Link>

</div>

</section>

</>
);
}

export default Services;