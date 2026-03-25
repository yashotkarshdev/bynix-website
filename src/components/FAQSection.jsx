// import React, { useState, useEffect } from "react";

// const FAQSection = () => {
//   const [faqs, setFaqs] = useState([]);
//   const [activeIndex, setActiveIndex] = useState(null);

//   useEffect(() => {
//     // Replace with backend API
//     const data = [
//       {
//         id: 1,
//         question: "What services does Bynix Technology provide?",
//         answer:
//           "Bynix Technology provides web development, digital marketing, SEO services, UI/UX design, and custom software solutions to help businesses grow online.",
//       },
//       {
//         id: 2,
//         question:
//           "What makes Bynix Technology different from other digital marketing agencies?",
//         answer:
//           "Bynix focuses on data-driven strategies, customized marketing plans, and measurable results that help businesses improve visibility and conversions.",
//       },
//       {
//         id: 3,
//         question: "How long does it take to see results from SEO?",
//         answer:
//           "Most SEO campaigns begin showing noticeable improvements within 3 to 6 months depending on the competition and strategy used.",
//       },
//       {
//         id: 4,
//         question: "Do you work with small businesses and startups?",
//         answer:
//           "Yes. Bynix Technology works with startups, small businesses, and enterprises to create scalable digital solutions.",
//       },
//     ];

//     setFaqs(data);
//   }, []);

//   const toggle = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <section className="py-8 lg:py-20 bg-white" id="faq">
//       <div className="max-w-5xl mx-auto px-6">

//         <h2 className="text-3xl font-bold text-center mb-10">
//           Frequently Asked Questions
//         </h2>

//         <div className="bg-white border border-gray-300 rounded-xl">

//           {faqs.map((faq, index) => (
//             <article key={faq.id} className="border-b border-gray-300 last:border-none">

//               <button
//                 onClick={() => toggle(index)}
//                 className="w-full flex justify-between items-center p-5 text-left"
//               >
//                 <h3 className="font-medium">
//                   {index + 1}. {faq.question}
//                 </h3>

//                 <span>{activeIndex === index ? "−" : "+"}</span>
//               </button>

//               {activeIndex === index && (
//                 <p className="px-5 pb-5 text-gray-600">
//                   {faq.answer}
//                 </p>
//               )}

//             </article>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// };

// export default FAQSection;

// import React, { useRef, useState } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger);


// const FAQSection = ({ faqs, title = "Frequently Asked Questions" }) => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggle = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   const scrollRef = useRef();
//   useGSAP(() => {
//     gsap.from(scrollRef.current, {
//       y: 200,
//       opacity: 0,
//       scrollTrigger: {
//         trigger: scrollRef.current,
//         start: "top 100%",
//         end: " bottom 50%",
//         scrub: 1.5,
//       },
//     });
//   }, { scope: scrollRef });

//   return (
//     <section className="py-8 lg:py-20 bg-transparent" id="faq">
//       <div ref={scrollRef} className="max-w-5xl mx-auto px-6">
//         <h2 className="text-3xl font-bold text-center mb-10">{title}</h2>

//         <div className="bg-white border border-gray-300 rounded-xl">
//           {faqs.map((faq, index) => (
//             <article key={faq.id} className="border-b border-gray-300 last:border-none">

//               {/* Button with SVG toggle */}
//               <button
//                 onClick={() => toggle(index)}
//                 className="w-full flex justify-between items-center p-5 text-left"
//               >
//                 <h3 className="font-medium">{index + 1}. {faq.question}</h3>

//                 {/* Arrow icon */}
//                 <svg
//                   className={`w-5 h-5 transform transition-transform duration-300 ${activeIndex === index ? "rotate-180" : "rotate-0"}`}
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                 </svg>
//               </button>

//               {activeIndex === index && (
//                 <p className="px-5 pb-5 text-gray-600">{faq.answer}</p>
//               )}

//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FAQSection;

import React, { useState } from "react";

const FAQSection = ({ faqs = [], title = "Frequently Asked Questions" }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-10 lg:py-20 bg-transparent" id="faq">
      <div className="max-w-5xl mx-auto px-6">
        
        <h2 className="text-3xl font-bold text-center mb-10">
          {title}
        </h2>

        <div className="bg-white border border-gray-300 rounded-xl overflow-hidden">

          {faqs.length === 0 ? (
            <p className="p-5 text-center text-gray-500">
              No FAQs available
            </p>
          ) : (
            faqs.map((faq, index) => (
              <article
                key={faq?.id || index}
                className="border-b border-gray-300 last:border-none"
              >
                {/* Question */}
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center p-5 text-left"
                >
                  <h3 className="font-medium pr-4">
                    {index + 1}. {faq?.question || "No question"}
                  </h3>

                  <svg
                    className={`w-5 h-5 transition-transform duration-300 ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeIndex === index
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-5 pb-5 text-gray-600">
                    {faq?.answer || "No answer available"}
                  </p>
                </div>
              </article>
            ))
          )}

        </div>
      </div>
    </section>
  );
};

export default FAQSection;