import React from "react";
import SEO from "../components/SEO";

const policies = [
  {
    id: "01",
    title: "Information We Collect",
    content:
      "We may collect your name, email address, phone number, and company details when you contact us, subscribe to updates, or request a demo. We also gather basic usage data like your browser type, device information, and IP address."
  },
  {
    id: "02",
    title: "How We Use Your Information",
    content:
      "We use your data to provide services, respond to inquiries, improve our platform, and share updates or promotional materials — only with your consent."
  },
  {
    id: "03",
    title: "Data Protection",
    content:
      "We use industry-standard encryption and security practices to protect your information from unauthorized access, alteration, or disclosure."
  },
  {
    id: "04",
    title: "Sharing of Data",
    content:
      "Your personal information is never sold. It may be shared only with trusted partners who assist in delivering our services, and only under strict confidentiality agreements."
  },
  {
    id: "05",
    title: "Your Rights",
    content:
      "You have the right to access, correct, or delete your personal data. You can also opt out of receiving promotional emails at any time."
  },
  {
    id: "06",
    title: "Free Demo Information",
    content:
      "When requesting a free demo, we collect basic contact information solely for scheduling and demonstration purposes. Your data will not be shared or reused."
  },
  {
    id: "07",
    title: "Third-Party Links",
    content:
      "Our website may include links to third-party websites. We are not responsible for their content or privacy practices. Please review their policies separately."
  },
  {
    id: "08",
    title: "Policy Updates",
    content:
      "We may revise this Privacy Policy from time to time. Updates will be posted on this page with the latest effective date."
  }
];

const PrivacyPolicy = () => {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Read the privacy policy of Bynix Technology to understand how we collect, use and protect your information."
      />
      <div className="bg-white min-h-screen">

        {/* Hero Section */}
        <div className="bg-[#F27115] pt-16 pb-24 md:pt-20 md:pb-32 px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4">
            Privacy Policy
          </h1>

          <p className="text-orange-100 font-medium text-base md:text-lg max-w-2xl mx-auto opacity-90">
            Learn how Bynix Technology collects, uses, and protects your personal information.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 -mt-12 md:-mt-16 pb-20 relative z-10">

          <div className="bg-white border border-gray-100 rounded-[1.5rem] md:rounded-[2.5rem] p-6 sm:p-8 md:p-14 shadow-[0_20px_50px_rgba(242,113,21,0.08)]">

            {/* Intro */}
            <div className="mb-12 pb-8 border-b border-gray-100">
              <p className="text-gray-700 leading-relaxed text-lg italic border-l-4 border-[#F27115] pl-6">
                Welcome to <span className="text-[#F27115] font-bold">Bynix Technology</span>.
                We value your privacy and are committed to protecting your personal information when you use our services.
              </p>
            </div>

            {/* Policy Sections */}
            <div className="space-y-10 md:space-y-16">
              {policies.map((policy) => (
                <div key={policy.id} className="group relative">

                  <div className="flex flex-col md:flex-row gap-4 md:gap-8">

                    <div className="hidden md:block text-4xl md:text-5xl font-black text-[#F27115]/20 md:text-[#F27115]/10 group-hover:text-[#F27115]/30 transition-colors shrink-0 leading-none">
                      {policy.id}
                    </div>

                    <div className="flex-1">

                      <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                        <span className="md:hidden text-[#F27115] font-black">
                          {policy.id}.
                        </span>
                        {policy.title}
                      </h2>

                      <p className="text-gray-600 leading-relaxed text-sm md:text-lg">
                        {policy.content}
                      </p>

                    </div>

                  </div>

                </div>
              ))}
            </div>

            {/* Footer Contact */}
            <div className="mt-16 bg-gray-50 rounded-2xl md:rounded-3xl p-6 md:p-10 border border-gray-100">

              <div className="flex flex-col md:flex-row justify-between items-center gap-8">

                <div className="text-center md:text-left">

                  <h3 className="text-[#F27115] font-black uppercase tracking-widest text-[10px] md:text-xs mb-3">
                    Privacy Support
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

export default PrivacyPolicy;