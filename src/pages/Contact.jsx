import Reveal from "../components/animate/Reveal";
import SEO from "../components/SEO";
import { useState } from "react";
import api from "../services/api";
import { Helmet } from "react-helmet-async";

function Contact() {
    const contactSchema = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Bynix Technology",
        "url": "https://bynixtechnology.com/contact",
        "description": "Contact Bynix Technology for web development, mobile app development and digital marketing services."
    };
    const businessSchema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Bynix Technology",
        "url": "https://bynixtechnology.com",
        "image": "https://bynixtechnology.com/logo.png",
        "telephone": "+91-6376925384",

        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Jaipur",
            "addressRegion": "Rajasthan",
            "addressCountry": "India"
        },

        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "26.9032427",
            "longitude": "75.7187289"
        },

        "hasMap": "https://maps.google.com/?q=26.9032427,75.7187289",

        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
            ],
            "opens": "10:00",
            "closes": "18:00"
        },

        "areaServed": "India"
    };
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://bynixtechnology.com"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Contact",
                "item": "https://bynixtechnology.com/contact"
            }
        ]
    };

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [business, setBusiness] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)

    const validateForm = () => {

        if (!name.trim()) {
            alert("Name is required")
            return false
        }

        if (!email.trim()) {
            alert("Email is required")
            return false
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if (!emailRegex.test(email)) {
            alert("Invalid email")
            return false
        }

        if (phone && phone.length < 6) {
            alert("Invalid phone number")
            return false
        }

        if (!message.trim()) {
            alert("Message cannot be empty")
            return false
        }

        if (message.length < 10) {
            alert("Message must be at least 10 characters")
            return false
        }

        return true
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!validateForm()) return

        setLoading(true)

        try {

            await api.post("/contact", {
                name,
                email,
                phone,
                business,
                message
            })

            alert("Message sent successfully")

            setName("")
            setEmail("")
            setPhone("")
            setBusiness("")
            setMessage("")

        } catch (error) {

            alert("Failed to send message")

        }

        setLoading(false)
    }

    return (
        <>
            <SEO
                title="Contact Bynix Technology | Web Development & Digital Marketing"
                description="Contact Bynix Technology for website development, mobile apps, SEO and digital marketing services. Get a free consultation today."
                keywords="contact Bynix Technology, digital marketing company Jaipur contact, web development company Jaipur contact, SEO agency Jaipur contact"
                image="/contact-hero.jpg"
            />
            <Helmet>

                <script type="application/ld+json">
                    {JSON.stringify(contactSchema)}
                </script>

                <script type="application/ld+json">
                    {JSON.stringify(businessSchema)}
                </script>

                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbSchema)}
                </script>

            </Helmet>

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


                <Reveal animation="right">

                    <div className="bg-[#3D3D3D] p-8 md:p-10 rounded-[2rem] shadow-2xl w-full max-w-lg mx-auto lg:ml-auto">

                        <h2 className="text-white text-2xl font-bold text-center mb-8">
                            Let's Build Your Success
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-4">

                            <input
                                type="text"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full p-4 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#F95228]"
                            />

                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-4 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#F95228]"
                            />

                            <input
                                type="text"
                                placeholder="Phone Number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full p-4 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#F95228]"
                            />

                            <input
                                type="text"
                                placeholder="Business"
                                value={business}
                                onChange={(e) => setBusiness(e.target.value)}
                                className="w-full p-4 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#F95228]"
                            />

                            <textarea
                                placeholder="Share Your Project Idea"
                                rows="4"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="w-full p-4 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#F95228] resize-none"
                            />

                            <button
                                disabled={loading}
                                className="w-full py-4 bg-transparent border border-white/20 text-white font-bold rounded-xl hover:bg-white hover:text-black transition-all"
                            >
                                {loading ? "Sending..." : "Submit Request"}
                            </button>

                        </form>

                    </div>

                </Reveal>

            </section>
            {/* Google Map Section */}
            <section className="py-16">
                <div className="container mx-auto px-6 lg:px-20">

                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Visit Our Office
                        </h2>
                        <p className="text-gray-600 mt-2">
                            Bynix Technology — Jaipur, Rajasthan
                        </p>
                    </div>

                    <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.0079538017762!2d75.71872897572739!3d26.90324267665291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6012414350998dfb%3A0x36619253e57b773e!2sBynix%20Technology!5e0!3m2!1sen!2sin!4v1773649385264!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Bynix Technology Location"
                        ></iframe>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Contact;