import React from 'react';
import { MdOutlineCalendarToday, MdOutlineLocationOn } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Reveal from '../components/animate/Reveal';
import SEO from "../components/SEO";
import { Helmet } from "react-helmet-async";

const JobCard = ({ title, experience, location }) => {

    const handleApply = () => {
        const hrEmail = "hr@bynixtechnology.com";
        const subject = encodeURIComponent(`Application for ${title} Position`);
        const body = encodeURIComponent(
            `--- HR APPLICATION INSTRUCTIONS ---\n` +
            `Please replace this text with your actual email. \n` +
            `Make sure to include the following details in your email:\n\n` +
            `1. Full Name: [Enter your name]\n` +
            `2. Current Role & Experience: [Tell about your ${experience} exp]\n` +
            `3. Mobile Number: [Your active phone number]\n` +
            `4. Current Location: [City where you live]\n` +
            `5. Notice Period: [How soon can you join?]\n` +
            `6. Portfolio/LinkedIn Link: [Optional but recommended]\n\n` +
            `--- IMPORTANT ---\n` +
            `Don't forget to ATTACH YOUR RESUME (PDF format preferred) before clicking SEND.\n` +
            `----------------------------------\n\n` +
            `[Write your personal message to HR here...]`
        );
        window.location.href = `mailto:${hrEmail}?subject=${subject}&body=${body}`;
    };

    return (
        <div className="bg-white p-6 rounded-2xl shadow-xl flex flex-col items-start text-left w-full border border-gray-100">
            <span className="bg-[#cbd5e1] text-[#475569] text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-md mb-4">
                Full Time
            </span>
            <h3 className="text-xl font-extrabold text-gray-900 mb-4">{title}</h3>

            <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-700 gap-3 text-sm font-medium">
                    <MdOutlineCalendarToday className="text-[#f27115] text-lg" />
                    <span>Experience: {experience}</span>
                </div>
                <div className="flex items-center text-gray-700 gap-3 text-sm font-medium">
                    <MdOutlineLocationOn className="text-[#f27115] text-lg" />
                    <span>Location: {location}</span>
                </div>
            </div>

            <button
                onClick={handleApply}
                className="w-full bg-[#f27115] hover:bg-[#e66a12] text-white font-bold py-3 rounded-xl transition-all shadow-md active:scale-95 cursor-pointer"
            >
                Apply Now
            </button>
        </div>
    );
};



const Careers = () => {
    const jobs = [
        { title: "IT Sales", exp: "2+ years", loc: "Gandhi Path, Jaipur" },
        { title: "SEO Executive", exp: "3+ years", loc: "Gandhi Path, Jaipur" },
        { title: "Marketing Executive", exp: "2+ years", loc: "Gandhi Path, Jaipur" },
        { title: "SEO Intern", exp: "0-6 months", loc: "Gandhi Path, Jaipur" },
        { title: "Content Writer", exp: "2+ years", loc: "Gandhi Path, Jaipur" },
        { title: "Flutter App Developer", exp: "3+ years", loc: "Gandhi Path, Jaipur" },
    ];

    const jobsSchema = jobs.map(job => ({
        "@context": "https://schema.org",
        "@type": "JobPosting",
        "title": job.title,
        "description": `${job.title} position at Bynix Technology located in Jaipur. Candidates with ${job.exp} experience are encouraged to apply.`,
        "identifier": {
            "@type": "PropertyValue",
            "name": "Bynix Technology",
            "value": job.title.replace(/\s/g, "-").toLowerCase()
        },
        "datePosted": "2025-01-10",
        "validThrough": "2025-12-31",
        "employmentType": "FULL_TIME",
        "hiringOrganization": {
            "@type": "Organization",
            "name": "Bynix Technology",
            "sameAs": "https://bynixtechnology.com",
            "logo": "https://bynixtechnology.com/logo.png"
        },
        "jobLocation": {
            "@type": "Place",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Gandhi Path",
                "addressLocality": "Jaipur",
                "addressRegion": "Rajasthan",
                "addressCountry": "India"
            }
        },
        "applicantLocationRequirements": {
            "@type": "Country",
            "name": "India"
        }
    }));

    return (
        <>
            <SEO
                title="Careers"
                description="Join Bynix Technology and grow your career in web development and digital marketing."
                keywords="IT jobs Jaipur, careers Bynix Technology, developer jobs Jaipur"
            />

            <Helmet>
                {jobsSchema.map((schema, index) => (
                    <script
                        key={index}
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                    />
                ))}
            </Helmet>

            <div className="min-h-screen">
                {/* Hero Section */}
                <section className="relative bg-black py-8 lg:py-36 px-6 overflow-hidden">
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-20"
                        style={{ backgroundImage: "url('/careers/hero.jpg')" }}
                    ></div>

                    <div className="container mx-auto my-34 md:my-36 lg:my-32 text-center relative z-10">
                        <Reveal animation="right">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-2 leading-tight">
                                Careers
                            </h1>
                        </Reveal>
                        <Reveal animation="left">
                            <p className="text-white text-center font-medium text-lg md:text-xl sm:px-20 mx-auto mb-4 leading-relaxed">
                                Join our team and turn your passion into a career that makes a difference
                            </p>
                        </Reveal>

                        <Reveal animation="zoom" delay={200}>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <button className="px-8 py-3 cursor-pointer bg-white/0 border-2 border-gray-400 text-white font-bold rounded-lg hover:bg-gray-50 transition-all">
                                    Explore Our Solutions
                                </button>
                                <Link to={"/contact"} className="px-8 py-3 bg-black cursor-pointer text-white font-bold rounded-lg hover:bg-[#F27115] transition-all shadow-lg">
                                    Get In Touch
                                </Link>
                            </div>
                        </Reveal>
                    </div>
                </section>

                {/* Main Content Area */}
                <div className="relative w-full">

                    <section className="container mx-auto px-6">
                        {/* Header Title sits above the cards but below the hero */}
                        <h2 className="text-3xl font-semibold text-white relative z-40 -mt-38 lg:-mt-48 mb-8 md:mb-20">
                            Currently Open Positions
                        </h2>

                        {/* Staggered Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

                            {/* Left Column: Higher Position */}
                            <div className="space-y-10 md:-mt-10  relative z-40">
                                <JobCard title={jobs[0].title} experience={jobs[0].exp} location={jobs[0].loc} />
                                <JobCard title={jobs[3].title} experience={jobs[3].exp} location={jobs[3].loc} />
                            </div>

                            {/* Middle Column: Lower Position (Starts below the hero) */}
                            <div className="space-y-10 mt-10 relative z-40">
                                <JobCard title={jobs[1].title} experience={jobs[1].exp} location={jobs[1].loc} />
                                <JobCard title={jobs[4].title} experience={jobs[4].exp} location={jobs[4].loc} />
                            </div>

                            {/* Right Column: Higher Position */}
                            <div className="space-y-10 md:-mt-10 relative z-40">
                                <JobCard title={jobs[2].title} experience={jobs[2].exp} location={jobs[2].loc} />
                                <JobCard title={jobs[5].title} experience={jobs[5].exp} location={jobs[5].loc} />
                            </div>

                        </div>
                    </section>
                </div>
                <div className="h-20"></div> {/* Bottom Padding */}
            </div>
        </>
    );
}

export default Careers;