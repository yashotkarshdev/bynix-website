import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

export default function SEO({ 
  title, 
  description, 
  image = "/og-image.jpg", 
  type = "website" 
}) {
  const { pathname } = useLocation();
  const siteName = "Bynix Technology";
  const baseUrl = "https://bynixtechnology.com";
  
  // Automatically generate the canonical URL based on the current path
  const canonicalUrl = `${baseUrl}${pathname}`;
  
  const fullTitle = title ? `${title} | ${siteName}` : `${siteName} | Digital Transformation Experts`;
  const defaultDesc = "Bynix Technology provides top-tier Website Development, Mobile App Development, and Digital Marketing strategies.";

  // Logic to switch Schema Type based on URL path
  const getSchemaType = () => {
    if (pathname === "/contact") return "ContactPage";
    if (pathname === "/about") return "AboutPage";
    if (pathname.includes("/services")) return "Service";
    return "ProfessionalService"; // Default for Home
  };

  // Improved Structured Data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": getSchemaType(),
    "name": siteName,
    "url": canonicalUrl,
    "logo": `${baseUrl}/logo.png`,
    "image": `${baseUrl}${image}`,
    "description": description || defaultDesc,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Jaipur",
      "addressRegion": "RJ",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://www.linkedin.com/company/bynixtechnology",
      "https://www.instagram.com/bynixtechnology"
      // Add your actual social links here
    ]
  };

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDesc} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDesc} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={`${baseUrl}${image}`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDesc} />
      <meta name="twitter:image" content={`${baseUrl}${image}`} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}