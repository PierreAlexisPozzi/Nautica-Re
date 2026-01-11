
import React from 'react';

interface SEOProps {
  title: string;
  description: string;
  schema?: any;
}

const SEO: React.FC<SEOProps> = ({ title, description, schema }) => {
  React.useEffect(() => {
    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    } else {
      const newMeta = document.createElement('meta');
      newMeta.name = 'description';
      newMeta.content = description;
      document.head.appendChild(newMeta);
    }

    if (schema) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      script.id = 'json-ld-schema';
      document.head.appendChild(script);
      return () => {
        const existingScript = document.getElementById('json-ld-schema');
        if (existingScript) existingScript.remove();
      };
    }
  }, [title, description, schema]);

  return null;
};

export default SEO;
