import React from 'react';
import { Link } from 'react-router-dom';

// Common tailwind classes for consistency and reusability
const containerCardClasses = "flex-1 rounded-[2.5rem] p-8 shadow-[-5px_5px_15px_rgba(0,0,0,0.1)] flex flex-col items-center justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)]";
const titleCardClasses = "bg-white border-none rounded-xl py-3 px-8 shadow-[0_5px_20px_rgba(0,0,0,0.08)] mb-4 w-fit";
const titleTextClasses = "text-center text-xl font-bold text-[#101828] leading-tight";
const descriptionTextClasses = "text-center text-xs text-[#667085] leading-relaxed max-w-xs px-4 mb-6";
const featureListClasses = "w-full text-center space-y-3 mb-8 text-sm font-medium text-[#475467]";
const buttonClasses = "border border-[#D0D5DD] rounded-full py-2.5 px-8 text-sm font-bold text-[#101828] hover:bg-gray-50 transition-colors";

const SEOPackageCard = ({ packageTitle, description, price, features, isHighlighted }) => (
  <div className={`${containerCardClasses} ${isHighlighted ? "bg-[#F27115] text-white" : "bg-white"}`}>
    {isHighlighted && <span className="text-3xl text-[#FFCB00] mb-3">★</span>}
    <div className={titleCardClasses}>
      <h3 className={titleTextClasses}>{packageTitle}</h3>
    </div>
    <p className={`${descriptionTextClasses} ${isHighlighted ? "text-white/80" : ""}`}>{description}</p>
    
    <div className={`rounded-full py-4 px-10 mb-8 font-extrabold flex items-center justify-center gap-1.5 ${isHighlighted ? "bg-white text-[#101828]" : "bg-[#F27115] text-white"}`}>
      <span className="text-lg align-top font-bold">$</span>
      <span className="text-5xl leading-none">{price}</span>
      <span className="text-xs align-bottom font-medium ml-1">Month</span>
    </div>

    <ul className={featureListClasses}>
      {features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>

    <Link to="/contact" className={`${buttonClasses} ${isHighlighted ? "bg-white border-white text-[#101828] hover:bg-white/90" : ""}`}>
      Order Now
    </Link>
  </div>
);

const SEOPricingSection = () => {
  const commonFeatures = [
    "SEO Audit & Strategy",
    "On-Page SEO Optimization",
    "Content & Keyword Optimization",
    "Authority & Link Building",
    "Performance Tracking & Reporting",
  ];

  const packages = [
    {
      title: "Basic SEO Package",
      description: "Up to 15 Keywords & 120 Backlinks",
      price: 99,
      features: [...commonFeatures],
    },
    {
      title: "Advance SEO Package",
      description: "Up to 25 Keywords & 200 Backlinks",
      price: 199,
      features: [...commonFeatures],
    },
    {
      title: "Professional SEO Package",
      description: "Up to 35 Keywords & 300 Backlinks",
      price: 299,
      features: [commonFeatures[0], commonFeatures[1], "AI-Driven SEO Enhancements", ...commonFeatures.slice(2)],
      isHighlighted: true,
    },
    {
      title: "Premium SEO Package",
      description: "Up to 50 Keywords & 500 Backlinks",
      price: 399,
      features: [commonFeatures[0], commonFeatures[1], "AI-Driven SEO Enhancements", ...commonFeatures.slice(2)],
    },
  ];

  return (
    <div className="bg-transparent p-6 max-w-7xl mx-auto min-h-screen flex flex-col">
      <div className="flex justify-between items-center border-b pb-6 mb-10">
        <div>
          <h1 className="text-4xl font-black text-black tracking-tight">SEO Packages</h1>
          <p className="text-gray-500 font-medium mt-1">Choose the perfect plan to boost your online visibility.</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 flex-1 items-start">
        {packages.map((pkg, index) => (
          <SEOPackageCard
            key={index}
            packageTitle={pkg.title}
            description={pkg.description}
            price={pkg.price}
            features={pkg.features}
            isHighlighted={pkg.isHighlighted}
          />
        ))}
      </div>
    </div>
  );
};

export default SEOPricingSection;