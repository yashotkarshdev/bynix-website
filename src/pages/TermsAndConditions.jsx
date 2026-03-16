import React from "react";

const terms = [
  { id: "01", title: "Services", content: "Bynix Technology offers website development, SEO, digital marketing, and related IT solutions." },
  { id: "02", title: "Payments", content: "Payments must be made as per agreed terms. Advance payments may be required." },
  { id: "03", title: "Client Responsibilities", content: "Clients must provide accurate requirements and materials (logos, content) in a timely manner." },
  { id: "04", title: "Intellectual Property", content: "Upon full payment, deliverables become the client’s property." },
  { id: "05", title: "Confidentiality", content: "Both parties agree to maintain the confidentiality of sensitive information." },
  { id: "06", title: "Limitation of Liability", content: "Bynix Technology shall not be held liable for incidental damages from third-party platforms." },
  { id: "07", title: "Free Demo Conditions", content: "Free demos are for evaluation only. Ownership remains with Bynix Technology." },
  { id: "08", title: "Termination", content: "Either party may terminate the agreement with written notice if terms are breached." },
  { id: "09", title: "Governing Law", content: "These Terms are governed by Indian laws, subject to Jaipur jurisdiction." },
  { id: "10", title: "Updates", content: "We may modify these Terms periodically. Updates will be posted on this page." }
];

const TermsAndConditions = () => {
  return (
    <>
    <div className="bg-white min-h-screen">

      {/* Hero Section */}
      <div className="bg-[#F27115] pt-16 pb-24 md:pt-20 md:pb-32 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4">
          Terms & Conditions
        </h1>

        <p className="text-orange-100 font-medium text-base md:text-lg max-w-2xl mx-auto opacity-90">
          Please read these terms carefully before using Bynix Technology services.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 -mt-12 md:-mt-16 pb-20 relative z-10">

        <div className="bg-white border border-gray-100 rounded-[1.5rem] md:rounded-[2.5rem] p-6 sm:p-8 md:p-14 shadow-[0_20px_50px_rgba(242,113,21,0.08)]">

          {/* Intro */}
          <div className="mb-12 pb-8 border-b border-gray-100">
            <p className="text-gray-700 leading-relaxed text-lg italic border-l-4 border-[#F27115] pl-6">
              Welcome to <span className="text-[#F27115] font-bold">Bynix Technology</span>. By accessing our services, you agree to these terms.
            </p>
          </div>

          {/* Terms List */}
          <div className="space-y-10 md:space-y-16">
            {terms.map((term) => (
              <div key={term.id} className="group relative">

                <div className="flex flex-col md:flex-row gap-4 md:gap-8">

                  {/* Number */}
                  <div className="hidden md:block text-4xl md:text-5xl font-black text-[#F27115]/20 md:text-[#F27115]/10 group-hover:text-[#F27115]/30 transition-colors shrink-0 leading-none">
                    {term.id}
                  </div>

                  <div className="flex-1">

                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                      <span className="md:hidden text-[#F27115] font-black">
                        {term.id}.
                      </span>
                      {term.title}
                    </h2>

                    <p className="text-gray-600 leading-relaxed text-sm md:text-lg">
                      {term.content}
                    </p>

                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-16 bg-gray-50 rounded-2xl md:rounded-3xl p-6 md:p-10 border border-gray-100">

            <div className="flex flex-col md:flex-row justify-between items-center gap-8">

              {/* Contact */}
              <div className="text-center md:text-left">

                <h3 className="text-[#F27115] font-black uppercase tracking-widest text-[10px] md:text-xs mb-3">
                  Legal Support
                </h3>

                <div className="flex flex-col gap-2">

                  <a
                    href="mailto:info@bynixtechnology.com"
                    className="text-gray-900 font-bold hover:text-[#F27115] transition-all break-words"
                  >
                    info@bynixtechnology.com
                  </a>

                  <a
                    href="tel:+91-6376925384"
                    className="text-gray-900 font-bold hover:text-[#F27115] transition-all"
                  >
                    +91 6376925384
                  </a>

                </div>
              </div>

              {/* Location */}
              <div className="text-center md:text-right">

                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-1">
                  Headquarters
                </p>

                <p className="text-gray-900 font-bold">
                  Jaipur, Rajasthan, India
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
    </>
  );
};

export default TermsAndConditions;