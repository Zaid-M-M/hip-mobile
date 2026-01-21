// components/home/ClientTestimonials/TestimonialsSchemaServer.jsx
export default function TestimonialsSchemaServer({
  testimonials = [],
  siteName = "Your Site Name",
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: testimonials.map((t, i) => ({
      "@type": "Review",
      position: i + 1,
      author: { "@type": "Person", name: t.name },
      reviewBody: t.quote,
      itemReviewed: { "@type": "Organization", name: t.company },
      publisher: { "@type": "Organization", name: siteName },
      datePublished: t.date || undefined,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
