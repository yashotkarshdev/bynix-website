import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

export default function SEO({
  title,
  description,
  keywords,
  image = "/og-image.jpg",
}) {

  const { pathname } = useLocation();

  const siteName = "Bynix Technology";
  const baseUrl = import.meta.env.VITE_SITE_URL;
  const canonicalUrl = `${baseUrl}${pathname}`;

  const fullTitle = title
    ? `${title} | ${siteName}`
    : `${siteName} | Website Development & Digital Marketing`;


  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    sameAs: [
      "https://www.linkedin.com/company/bynix-technology",
      "https://www.instagram.com/bynixtechnology"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: baseUrl
  };

  return (
    <Helmet>

      <title>{fullTitle}</title>

      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Bynix Technology" />
      <meta name="publisher" content="Bynix Technology" />

      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      {/* <meta property="og:image" content={`${baseUrl}${image}`} /> */}
      <meta property="og:image" content="https://bynixtechnology.com/og-image.jpg" />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:url" content={canonicalUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://bynixtechnology.com/og-image.jpg" />

      {/* Organization Schema */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

      {/* Website Schema */}
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>

    </Helmet>
  );
}