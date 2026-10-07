import React from "react";

interface JsonLdProps {
  data: Record<string, unknown>;
}

// Server Component for rendering JSON-LD structured data
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
