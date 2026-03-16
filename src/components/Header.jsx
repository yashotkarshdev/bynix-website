// import React, { useState } from 'react';
// import { Link, NavLink } from 'react-router-dom';

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isServicesOpen, setIsServicesOpen] = useState(false);
//   const navigationSchema = {
//     "@context": "https://schema.org",
//     "@type": "ItemList",
//     "itemListElement": [
//       { "@type": "SiteNavigationElement", "position": 1, "name": "Home", "url": "https://bynix.com/" },
//       { "@type": "SiteNavigationElement", "position": 2, "name": "About Us", "url": "https://bynix.com/about" },
//       { "@type": "SiteNavigationElement", "position": 3, "name": "Services", "url": "https://bynix.com/services" },
//       { "@type": "SiteNavigationElement", "position": 4, "name": "blog", "url": "https://bynix.com/blogs" },
//       { "@type": "SiteNavigationElement", "position": 5, "name": "Contact Us", "url": "https://bynix.com/contact" }
//     ]
//   };

//   const navLinkStyles = ({ isActive }) =>
//     isActive
//       ? "text-orange-400 border-b-2 border-orange-400 pb-1 md:py-2 block transition-all"
//       : "text-white hover:text-orange-400 transition-colors py-2 block";

//   return (
//     <header className="bg-black w-full sticky top-0 z-100 mt-0 pt-0 shadow-md">
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(navigationSchema) }}
//       />

//       <nav aria-label="Main Navigation" className="container mx-auto flex items-center justify-between px-6 md:px-12 py-4">

//         {/* Logo */}
//         <div className="flex items-center z-110">
//           <Link to="/" className="block" aria-label="Bynix Technology Home">
//             <img
//               src="/logo.png"
//               alt="Bynix Technology"
//               width="180"
//               height="40"
//               className="h-8 md:h-10 w-auto transition-transform hover:scale-105"
//             />
//           </Link>
//         </div>

//         {/* Mobile Toggle Button */}
//         <button
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           className="md:hidden text-white focus:outline-none z-110"
//           aria-expanded={isMenuOpen}
//           aria-label="Toggle navigation menu"
//         >
//           <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             {isMenuOpen ? (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//             ) : (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//             )}
//           </svg>
//         </button>

//         {/* Navigation Links - Desktop & Mobile */}
//         <ul
//           className={`
// fixed md:static inset-0 md:inset-auto
// flex flex-col md:flex-row
// items-center justify-center
// gap-8 md:gap-10
// font-semibold text-base
// bg-black md:bg-transparent
// transition-transform duration-300 ease-in-out
// z-[100]
// ${isMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
// `}
//         >
//           <li>
//             <NavLink to="/" onClick={() => setIsMenuOpen(false)} className={navLinkStyles}>Home</NavLink>
//           </li>
//           <li>
//             <NavLink to="/about" onClick={() => setIsMenuOpen(false)} className={navLinkStyles}>About us</NavLink>
//           </li>
//           {/* <li>
//             <NavLink to="/services" onClick={() => setIsMenuOpen(false)} className={navLinkStyles}>Services</NavLink>
//           </li> */}
//           <li className="relative flex flex-col items-center w-full md:w-auto">
//             <button
//               onClick={() => setIsServicesOpen(!isServicesOpen)}
//               className="text-white hover:text-orange-400 flex items-center justify-center gap-1"
//             >
//               Services
//               <svg
//                 className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`}
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//               </svg>
//             </button>

//             {/* Dropdown */}
//             <ul
//               className={`overflow-hidden transition-all duration-300 w-full md:w-52
//   md:absolute md:left-0 md:top-full md:mt-2
//   bg-black border border-gray-700 rounded-md shadow-lg
//   ${isServicesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 md:max-h-0"}`}
//             >
//               <li>
//                 <NavLink
//                   to="/services"
//                   onClick={() => { setIsMenuOpen(false); setIsServicesOpen(false) }}
//                   className="block px-4 py-2 text-white hover:bg-orange-400 hover:text-black"
//                 >
//                   All Services
//                 </NavLink>
//               </li>

//                <li>
//                 <NavLink
//                   to="/services/web-app-development-service"
//                   onClick={() => setIsMenuOpen(false)}
//                   className="block px-4 py-2 text-white hover:bg-orange-400 hover:text-black"
//                 >
//                   Web & App Development Service
//                 </NavLink>
//               </li>

//               <li>
//                 <NavLink
//                   to="/services/smm-service"
//                   onClick={() => setIsMenuOpen(false)}
//                   className="block px-4 py-2 text-white hover:bg-orange-400 hover:text-black"
//                 >
//                   SMM Service
//                 </NavLink>
//               </li>

//               <li>
//                 <NavLink
//                   to="/services/seo-service"
//                   onClick={() => setIsMenuOpen(false)}
//                   className="block px-4 py-2 text-white hover:bg-orange-400 hover:text-black"
//                 >
//                   SEO Service
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/services/saas-service"
//                   onClick={() => setIsMenuOpen(false)}
//                   className="block px-4 py-2 text-white hover:bg-orange-400 hover:text-black"
//                 >
//                   SAAS Service
//                 </NavLink>
//               </li>

//               <li>
//                 <NavLink
//                   to="/services/graphic-designing"
//                   onClick={() => setIsMenuOpen(false)}
//                   className="block px-4 py-2 text-white hover:bg-orange-400 hover:text-black"
//                 >
//                   Graphic Designing
//                 </NavLink>
//               </li>
//             </ul>
//           </li>
//           <li>
//             <NavLink to="/blogs" onClick={() => setIsMenuOpen(false)} className={navLinkStyles}>blog</NavLink>
//           </li>
//           <li>
//             <NavLink to="/contact" onClick={() => setIsMenuOpen(false)} className={navLinkStyles}>Contact us</NavLink>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { Link, NavLink } from "react-router-dom";

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isServicesOpen, setIsServicesOpen] = useState(false);

//   const navigationSchema = {
//     "@context": "https://schema.org",
//     "@type": "ItemList",
//     itemListElement: [
//       { "@type": "SiteNavigationElement", position: 1, name: "Home", url: "https://bynix.com/" },
//       { "@type": "SiteNavigationElement", position: 2, name: "About Us", url: "https://bynix.com/about" },
//       { "@type": "SiteNavigationElement", position: 3, name: "Services", url: "https://bynix.com/services" },
//       { "@type": "SiteNavigationElement", position: 4, name: "blog", url: "https://bynix.com/blogs" },
//       { "@type": "SiteNavigationElement", position: 5, name: "Contact Us", url: "https://bynix.com/contact" }
//     ]
//   };

//   useEffect(() => {
//     document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
//   }, [isMenuOpen]);

//   const navLinkStyles = ({ isActive }) =>
//     isActive
//       ? "text-orange-400 border-b-2 border-orange-400 pb-1 lg:py-2 block transition-all"
//       : "text-white hover:text-orange-400 transition-colors py-2 block";

//   return (
//     <header className="bg-black w-full sticky top-0 z-50 shadow-lg">
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(navigationSchema) }}
//       />

//       <nav className="container mx-auto flex items-center justify-between px-6 md:px-12 py-4">

//         {/* Logo */}
//         <div className="flex items-center z-[70]">
//           <Link to="/" aria-label="Bynix Technology Home">
//             <img
//               src="/logo.png"
//               alt="Bynix Technology"
//               width="180"
//               height="40"
//               className="h-8 md:h-10 w-auto transition-transform hover:scale-105"
//             />
//           </Link>
//         </div>

//         {/* Mobile Toggle */}
//         <button
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           className="lg:hidden text-white z-[70]"
//           aria-label="Toggle navigation"
//         >
//           <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             {isMenuOpen ? (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//             ) : (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//             )}
//           </svg>
//         </button>

//         {/* Navigation */}
//         <ul
//           className={`
// fixed lg:static inset-0 lg:inset-auto
// flex flex-col lg:flex-row
// items-start lg:items-center
// justify-start lg:justify-center
// pt-24 lg:pt-0 pl-8 lg:pl-0
// gap-8 lg:gap-10
// font-semibold text-base
// bg-black lg:bg-transparent
// transition-transform duration-300 ease-in-out
// z-[60]
// ${isMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
// `}
//         >
//           <li>
//             <NavLink to="/" onClick={() => setIsMenuOpen(false)} className={navLinkStyles}>
//               Home
//             </NavLink>
//           </li>

//           <li>
//             <NavLink to="/about" onClick={() => setIsMenuOpen(false)} className={navLinkStyles}>
//               About us
//             </NavLink>
//           </li>

//           {/* Services */}
//           <li
//             className="relative flex flex-col lg:flex-row items-start lg:items-center w-full lg:w-auto"
//             onMouseEnter={() => window.innerWidth >= 1024 && setIsServicesOpen(true)}
//             onMouseLeave={() => window.innerWidth >= 1024 && setIsServicesOpen(false)}
//           >
//             <button
//               onClick={() => setIsServicesOpen(!isServicesOpen)}
//               className="text-white hover:text-orange-400 flex items-center justify-between lg:justify-center gap-1 w-full lg:w-auto"
//             >
//               Services

//               <svg
//                 className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`}
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//               </svg>
//             </button>

//             {/* Dropdown */}
//             <ul
//               className={`
// overflow-hidden transition-all duration-300
// w-full lg:w-56
// lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-full lg:mt-3
// bg-black border border-gray-700 rounded-lg shadow-xl
// ${isServicesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
// `}
//             >
//               <li>
//                 <NavLink
//                   to="/services/web-app-development-service"
//                   onClick={() => { setIsMenuOpen(false); setIsServicesOpen(false); }}
//                   className="block px-4 py-2 text-white hover:bg-orange-400 hover:text-black"
//                 >
//                   Web & App Development Service
//                 </NavLink>
//               </li>

//               <li>
//                 <NavLink
//                   to="/services/smm-service"
//                   onClick={() => { setIsMenuOpen(false); setIsServicesOpen(false); }}
//                   className="block px-4 py-2 text-white hover:bg-orange-400 hover:text-black"
//                 >
//                   SMM Service
//                 </NavLink>
//               </li>

//               <li>
//                 <NavLink
//                   to="/services/seo-service"
//                   onClick={() => { setIsMenuOpen(false); setIsServicesOpen(false); }}
//                   className="block px-4 py-2 text-white hover:bg-orange-400 hover:text-black"
//                 >
//                   SEO Service
//                 </NavLink>
//               </li>

//               <li>
//                 <NavLink
//                   to="/services/saas-service"
//                   onClick={() => { setIsMenuOpen(false); setIsServicesOpen(false); }}
//                   className="block px-4 py-2 text-white hover:bg-orange-400 hover:text-black"
//                 >
//                   SAAS Service
//                 </NavLink>
//               </li>

//               <li>
//                 <NavLink
//                   to="/services/graphic-designing"
//                   onClick={() => { setIsMenuOpen(false); setIsServicesOpen(false); }}
//                   className="block px-4 py-2 text-white hover:bg-orange-400 hover:text-black"
//                 >
//                   Graphic Designing
//                 </NavLink>
//               </li>
//             </ul>
//           </li>

//           <li>
//             <NavLink to="/blogs" onClick={() => setIsMenuOpen(false)} className={navLinkStyles}>
//               Blogs
//             </NavLink>
//           </li>

//           <li>
//             <NavLink to="/contact" onClick={() => setIsMenuOpen(false)} className={navLinkStyles}>
//               Contact us
//             </NavLink>
//           </li>

//           {/* Quick Contact Icons */}
//           <li className="flex items-center gap-6 mt-2 lg:mt-0">
//             {/* Phone Icon */}
//             <a
//               href="tel:+916376925384"
//               className="text-white hover:text-orange-400 transition-colors duration-300"
//               aria-label="Call Us"
//             >
//               <svg
//                 className="w-5 h-5"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
//               </svg>
//             </a>

//             {/* Mail Icon */}
//             <a
//               href="mailto:info@bynixtechnology.com"
//               className="text-white hover:text-orange-400 transition-colors duration-300"
//               aria-label="Email Us"
//             >
//               <svg
//                 className="w-5 h-5"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <rect width="20" height="16" x="2" y="4" rx="2" />
//                 <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
//               </svg>
//             </a>
//           </li>

//         </ul>
//       </nav>
//     </header>
//   );
// }

import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isEmailOpen, setIsEmailOpen] = useState(false);

  const navigationSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      { "@type": "SiteNavigationElement", position: 1, name: "Home", url: "https://bynix.com/" },
      { "@type": "SiteNavigationElement", position: 2, name: "About Us", url: "https://bynix.com/about" },
      { "@type": "SiteNavigationElement", position: 3, name: "Services", url: "https://bynix.com/services" },
      { "@type": "SiteNavigationElement", position: 4, name: "blog", url: "https://bynix.com/blogs" },
      { "@type": "SiteNavigationElement", position: 5, name: "Contact Us", url: "https://bynix.com/contact" }
    ]
  };

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  const navLinkStyles = ({ isActive }) =>
    isActive
      ? "text-orange-400 border-b-2 border-orange-400 pb-1 lg:py-2 block transition-all"
      : "text-white hover:text-orange-400 transition-colors py-2 block";

  return (
    <header className="bg-black w-full sticky top-0 z-50 shadow-lg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(navigationSchema) }}
      />

      <nav className="container mx-auto flex items-center justify-between px-6 md:px-12 py-4">

        {/* Logo */}
        <div className="flex items-center z-[70]">
          <Link to="/" aria-label="Bynix Technology Home">
            <img
              src="/logo.png"
              alt="Bynix Technology"
              width="180"
              height="40"
              className="h-8 md:h-10 w-auto transition-transform hover:scale-105"
            />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
            setIsEmailOpen(false);
          }}
          className="lg:hidden text-white z-[70]"
          aria-label="Toggle navigation"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Navigation */}
        <ul
          className={`
fixed lg:static inset-0 lg:inset-auto
flex flex-col lg:flex-row
items-start lg:items-center
justify-start lg:justify-center
pt-24 lg:pt-0 pl-8 lg:pl-0
gap-8 lg:gap-10
font-semibold text-base
bg-black lg:bg-transparent
transition-transform duration-300 ease-in-out
z-[60]
${isMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
`}
        >
          <li>
            <NavLink to="/" onClick={() => setIsMenuOpen(false)} className={navLinkStyles}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" onClick={() => setIsMenuOpen(false)} className={navLinkStyles}>
              About us
            </NavLink>
          </li>

          {/* Services */}
          <li
            className="relative flex flex-col lg:flex-row items-start lg:items-center w-full lg:w-auto"
            onMouseEnter={() => window.innerWidth >= 1024 && setIsServicesOpen(true)}
            onMouseLeave={() => window.innerWidth >= 1024 && setIsServicesOpen(false)}
          >
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="text-white hover:text-orange-400 flex items-center justify-between lg:justify-center gap-1 w-full lg:w-auto"
            >
              Services

              <svg
                className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown */}
            <ul
              className={`
overflow-hidden transition-all duration-300
w-full lg:w-56
lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-full lg:mt-3
bg-black border border-gray-700 rounded-lg shadow-xl
${isServicesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
`}
            >
              <li>
                <NavLink
                  to="/services/web-app-development-service"
                  onClick={() => { setIsMenuOpen(false); setIsServicesOpen(false); }}
                  className="block px-4 py-2 text-white hover:bg-orange-400 hover:text-black"
                >
                  Web & App Development Service
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/services/smm-service"
                  onClick={() => { setIsMenuOpen(false); setIsServicesOpen(false); }}
                  className="block px-4 py-2 text-white hover:bg-orange-400 hover:text-black"
                >
                  SMM Service
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/services/seo-service"
                  onClick={() => { setIsMenuOpen(false); setIsServicesOpen(false); }}
                  className="block px-4 py-2 text-white hover:bg-orange-400 hover:text-black"
                >
                  SEO Service
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/services/saas-service"
                  onClick={() => { setIsMenuOpen(false); setIsServicesOpen(false); }}
                  className="block px-4 py-2 text-white hover:bg-orange-400 hover:text-black"
                >
                  SAAS Service
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/services/graphic-designing"
                  onClick={() => { setIsMenuOpen(false); setIsServicesOpen(false); }}
                  className="block px-4 py-2 text-white hover:bg-orange-400 hover:text-black"
                >
                  Graphic Designing
                </NavLink>
              </li>
            </ul>
          </li>

          <li>
            <NavLink to="/blogs" onClick={() => setIsMenuOpen(false)} className={navLinkStyles}>
              Blogs
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" onClick={() => setIsMenuOpen(false)} className={navLinkStyles}>
              Contact us
            </NavLink>
          </li>

          {/* Quick Contact Icons */}
          <li className="flex items-center justify-start lg:justify-center gap-6 mt-4 lg:mt-0 w-full lg:w-auto">

            {/* Phone */}
            <a
              href="tel:+916376925384"
              className="text-white hover:text-orange-400 transition-colors duration-300"
              aria-label="Call Us"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </a>

            {/* Email Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsEmailOpen(!isEmailOpen)}
                className="text-white hover:text-orange-400 flex items-center"
                aria-label="Email Us"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </button>

              < div
                className={`absolute left-0 lg:left-auto lg:right-0 mt-3 w-64 max-w-[90vw]
                bg-black border border-gray-700 rounded-xl shadow-lg overflow-hidden
                transition-all duration-300
                ${isEmailOpen ? "opacity-100 visible" : "opacity-0 invisible"}
                `}
              >
                <a
                  href="mailto:info@bynixtechnology.com"
                  className="block px-4 py-3 border-b border-gray-800 hover:bg-orange-400 hover:text-black text-white text-sm"
                >
                  info@bynixtechnology.com
                </a>

                <a
                  href="mailto:support@bynixtechnology.com"
                  className="block px-4 py-3 border-b border-gray-800 hover:bg-orange-400 hover:text-black text-white text-sm"
                >
                  support@bynixtechnology.com
                </a>

                <a
                  href="mailto:hr@bynixtechnology.com"
                  className="block px-4 py-3 hover:bg-orange-400 hover:text-black text-white text-sm"
                >
                  hr@bynixtechnology.com
                </a>
              </div>
            </div>

          </li>

        </ul>
      </nav>
    </header >
  );
}