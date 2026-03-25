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

  const defaultDesc =
    "Bynix Technology provides Website Development, Mobile App Development, SEO and Digital Marketing services.";

  const defaultKeywords =
    "Bynix Technology, web development company Jaipur, digital marketing agency, SEO services Jaipur";

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

      <meta name="description" content={description || defaultDesc} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Bynix Technology" />
      <meta name="publisher" content="Bynix Technology" />

      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDesc} />
      <meta property="og:image" content={`${baseUrl}${image}`} />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:url" content={canonicalUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDesc} />
      <meta name="twitter:image" content={`${baseUrl}${image}`} />

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