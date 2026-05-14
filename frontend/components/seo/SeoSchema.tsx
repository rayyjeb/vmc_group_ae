import React from "react";

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.vmcgroupuae.com/#website",
      url: "https://www.vmcgroupuae.com",
      name: "VMC General Trading LLC",
      alternateName: "VMC Group UAE",
      publisher: {
        "@id": "https://www.vmcgroupuae.com/#organization",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://www.vmcgroupuae.com/#organization",
      name: "VMC General Trading LLC",
      url: "https://www.vmcgroupuae.com",
      logo: "https://www.vmcgroupuae.com/icon.png",
      foundingDate: "2008",
      email: "info@vmcgroupuae.com",
      telephone: ["+971-4-2298205", "+971-52-3113329"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dubai",
        addressCountry: "AE",
      },
      areaServed: [
        "UAE",
        "GCC",
        "Saudi Arabia",
        "Qatar",
        "Kuwait",
        "Oman",
        "Bahrain",
      ],
      description:
        "VMC General Trading LLC is a leading food solutions provider in the UAE and GCC region, established in 2008. We specialize in food packaging solutions, frozen food distribution, raw food supply, daily essentials, and import/export services. Trusted by 500+ businesses across the UAE and GCC, we deliver quality, safety, and innovation across the entire food supply chain.",
      knowsAbout: [
        "Food Packaging Solutions",
        "Frozen Food Distribution",
        "Cold Chain Management",
        "Raw Food Supply",
        "Daily Essentials Supply",
        "Import Export Services UAE",
        "Food Supply Chain UAE",
        "Wholesale Food Distribution GCC",
        "Eco-Friendly Packaging UAE",
        "HACCP Certified Food Supplier",
        "ISO 22000 Food Safety",
        "Halal Food Supply UAE",
        "Bulk Food Wholesale Dubai",
        "Food Trading Company Dubai",
        "General Trading LLC Dubai",
      ],
      hasCredential: [
        "HACCP Certified",
        "ISO 22000:2018",
        "FDA Registered",
        "Dubai Municipality Approved",
        "Halal Certified",
        "Emirates Authority for Standardization",
      ],
      numberOfEmployees: {
        "@type": "QuantitativeValue",
        minValue: 50,
      },
      slogan: "Empowering Quality Service Since 2008",
    },
    {
      "@type": "Service",
      name: "Food Packaging Solutions",
      provider: { "@id": "https://www.vmcgroupuae.com/#organization" },
      url: "https://www.vmcgroupuae.com/products?category=68a46af2977d8d4329e0bb7c",
      description:
        "VMC General Trading offers custom and standard food packaging solutions across the UAE and GCC, including eco-friendly, biodegradable, and custom-size options. With 20+ packaging types, paper, plastic, and bio materials, and a minimum order of 1,000 units, we serve 150+ clients across 10+ export countries. Our 2-week lead time ensures timely delivery for restaurants, hotels, cafés, and retailers.",
      serviceType: "Food Packaging",
      areaServed: ["UAE", "GCC"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Packaging Products",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Eco-Friendly Food Packaging",
              description:
                "Biodegradable and sustainable food packaging solutions for restaurants, hotels, and retail businesses across UAE and GCC. Available in paper, plastic, and bio materials with custom branding options.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Size Food Packaging",
              description:
                "Tailor-made packaging solutions including coffee cups, disposable food boxes, shopping bags, carton boxes, and cake packaging, designed to meet specific business requirements with MOQ of 1,000 units.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Disposable Packaging Wholesale UAE",
              description:
                "Wholesale supply of disposable cups, plastic cups, trash bags, hand gloves, tissue boxes, and custom roll stickers for labelling, serving businesses across Dubai and the wider GCC region.",
            },
          },
        ],
      },
    },
    {
      "@type": "Service",
      name: "Frozen Food Distribution UAE",
      provider: { "@id": "https://www.vmcgroupuae.com/#organization" },
      url: "https://www.vmcgroupuae.com/products?category=68a70a8949dfd59b50c389b9",
      description:
        "Complete cold chain management and frozen food distribution across UAE and GCC. With a fleet of 50 trucks, 4 distribution centers, 25+ cities covered, and a 98% on-time delivery rate, VMC handles 10,000 tons annually at temperatures ranging from -18°C to 5°C. Products include frozen french fries, frozen meat, frozen strawberries, frozen peas, and more.",
      serviceType: "Frozen Food Distribution",
      areaServed: ["UAE", "GCC"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Frozen Food Products",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Frozen French Fries UAE",
              description:
                "Premium frozen french fries made from farm-fresh potatoes, flash-frozen to lock in crispiness and flavor. Preservative-free and ideal for restaurants, cafés, and retail. Available from Nemo Foods and direct wholesale supply.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Frozen Meat Supply GCC",
              description:
                "Carefully processed and hygienically packed frozen meat, frozen at peak freshness to preserve natural flavor, tenderness, and nutrition. Suitable for households, restaurants, hotels, and large-scale catering operations.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Frozen Vegetables UAE",
              description:
                "High-quality frozen peas, frozen strawberries, and a range of frozen vegetables packed using advanced freezing technology to retain freshness, flavor, and nutritional value throughout the cold chain.",
            },
          },
        ],
      },
    },
    {
      "@type": "Service",
      name: "Raw Food Supply UAE",
      provider: { "@id": "https://www.vmcgroupuae.com/#organization" },
      url: "https://www.vmcgroupuae.com/products?category=68a46af2977d8d4329e0bb7a",
      description:
        "Bulk and wholesale supply of premium raw food ingredients across UAE and GCC. VMC sources from 30+ certified suppliers, offering 100+ products with a minimum order of 10kg and delivery within 3 days. All products carry ISO and HACCP certifications. Product range includes basmati rice, fresh eggs, pistachios, and other raw food essentials.",
      serviceType: "Raw Food Supply",
      areaServed: ["UAE", "GCC"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Raw Food Products",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Super Basmati Rice Dubai",
              description:
                "Premium super basmati rice, carefully harvested and hygienically packed for consistent aroma, texture, and taste. Ideal for households, restaurants, hotels, and large-scale food service operations across UAE and GCC.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Fresh Eggs Wholesale UAE",
              description:
                "Farm-fresh eggs sourced from healthy, well-nurtured hens, cleaned and packed under strict hygienic conditions. Rich in protein and essential vitamins, ideal for bulk supply to restaurants, bakeries, and food processors.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Bulk Dry Goods UAE",
              description:
                "Wholesale supply of dry food ingredients including premium pistachios, grains, and other raw food essentials. Sourced from 30+ trusted suppliers with ISO and HACCP certifications, serving businesses across UAE and GCC.",
            },
          },
        ],
      },
    },
    {
      "@type": "Service",
      name: "Daily Essentials Supply UAE",
      provider: { "@id": "https://www.vmcgroupuae.com/#organization" },
      url: "https://www.vmcgroupuae.com/products?category=68a46af2977d8d4329e0bb7b",
      description:
        "Bulk supply and private label solutions for daily essentials including detergents, toilet paper, tissues, cleaning products, trash bags, and hygiene supplies. VMC supports 20+ brands across the UAE and GCC, offering 40+ products with a minimum order of 500 units and 1-week delivery. Private label options are available.",
      serviceType: "Daily Essentials Supply",
      areaServed: ["UAE", "GCC"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Daily Essentials Products",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Toilet Paper Wholesale UAE",
              description:
                "Premium multi-ply toilet paper, soft, strong, and absorbent, hygienically manufactured and packed for hotels, offices, restaurants, and facilities across Dubai and GCC.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Cleaning Products Bulk Supply GCC",
              description:
                "Wholesale cleaning and hygiene products including liquid detergents, hand gloves, trash bags, and tissue boxes. Available in bulk with private label options for businesses across UAE and GCC.",
            },
          },
        ],
      },
    },
    {
      "@type": "Service",
      name: "Import Export Services UAE",
      provider: { "@id": "https://www.vmcgroupuae.com/#organization" },
      url: "https://www.vmcgroupuae.com/services",
      description:
        "VMC General Trading facilitates comprehensive international trade with import and export services across 40+ countries. With 60+ global partners, 5,000 tons export volume, 3,000 tons import volume, and 48-hour customs clearance, we provide end-to-end logistics, shipping, and customs support with 24/7 availability.",
      serviceType: "Import Export Services",
      areaServed: "Worldwide",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Trade Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Food Export Dubai",
              description:
                "End-to-end food export solutions from Dubai and UAE to 40+ countries, covering documentation, customs clearance within 48 hours, logistics coordination, and international shipping with 24/7 support.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Food Import UAE",
              description:
                "Comprehensive food import services into the UAE and GCC, managing sourcing from 60+ global partners, customs clearance, compliance, and last-mile distribution to warehouses and businesses.",
            },
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What services does VMC General Trading LLC offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "VMC General Trading LLC offers five core services: food packaging solutions (custom and standard), frozen food distribution (cold chain across UAE and GCC), raw food supply (bulk wholesale ingredients), daily essentials (detergents, tissues, cleaning products), and import/export trade services across 40+ countries.",
          },
        },
        {
          "@type": "Question",
          name: "How long has VMC General Trading been operating in UAE?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "VMC General Trading LLC was established in 2008 and has been operating in the UAE and GCC region for over 15 years, serving 500+ satisfied clients with a commitment to quality, safety, and innovation across the food supply chain.",
          },
        },
        {
          "@type": "Question",
          name: "Is VMC General Trading HACCP and ISO certified?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. VMC General Trading holds HACCP certification, ISO 22000:2018 food safety certification, FDA registration, Dubai Municipality approval, Halal certification, and Emirates Authority for Standardization compliance, ensuring the highest standards of food safety and quality.",
          },
        },
        {
          "@type": "Question",
          name: "What is the minimum order quantity for food packaging?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The minimum order quantity (MOQ) for food packaging solutions at VMC General Trading is 1,000 units, with a lead time of 2 weeks. Custom sizes, eco-friendly, and biodegradable options are available across paper, plastic, and bio materials.",
          },
        },
        {
          "@type": "Question",
          name: "Does VMC supply frozen food across the entire GCC?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. VMC General Trading operates a full cold chain distribution network covering 25+ cities across the UAE and GCC, with a fleet of 50 trucks, 4 distribution centers, and a 98% on-time delivery rate, handling 10,000 tons of frozen food annually at temperatures between -18°C and 5°C.",
          },
        },
        {
          "@type": "Question",
          name: "Does VMC offer private label solutions for daily essentials?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. VMC General Trading offers private label solutions for daily essentials including detergents, toilet paper, tissues, and cleaning products. With support for 20+ brands and a minimum order of 500 units, private label options are available for businesses across UAE and GCC.",
          },
        },
        {
          "@type": "Question",
          name: "Which industries does VMC General Trading serve?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "VMC General Trading serves a wide range of industries including restaurants, hotels, cafés, bakeries, offices, universities, supermarkets, retail stores, catering companies, food processors, and distributors across UAE and GCC.",
          },
        },
        {
          "@type": "Question",
          name: "How can I contact VMC General Trading for a quote?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can reach VMC General Trading LLC via email at info@vmcgroupuae.com, by phone at 04-2298205 or 052-3113329, or by submitting a free quote request at https://www.vmcgroupuae.com/contact-us. The company is based in Dubai, UAE.",
          },
        },
      ],
    },
    {
      "@type": "Dataset",
      name: "VMC General Trading SEO Keyword Analysis",
      description:
        "High-impact SEO keywords for VMC General Trading LLC, targeting food distribution, packaging, and trading searches across UAE and GCC markets.",
      creator: { "@id": "https://www.vmcgroupuae.com/#organization" },
      variableMeasured: [
        { "@type": "PropertyValue", name: "food packaging UAE", value: "8100", description: "Monthly Volume: 8100 | Core service keyword" },
        { "@type": "PropertyValue", name: "frozen food distribution UAE", value: "6600", description: "Monthly Volume: 6600 | Core service keyword" },
        { "@type": "PropertyValue", name: "general trading Dubai", value: "5400", description: "Monthly Volume: 5400 | Brand identity keyword" },
        { "@type": "PropertyValue", name: "food supplier UAE", value: "4400", description: "Monthly Volume: 4400 | B2B buyer intent keyword" },
        { "@type": "PropertyValue", name: "wholesale food Dubai", value: "3600", description: "Monthly Volume: 3600 | Buyer intent keyword" },
        { "@type": "PropertyValue", name: "cold chain logistics UAE", value: "2900", description: "Monthly Volume: 2900 | Logistics service keyword" },
        { "@type": "PropertyValue", name: "food trading company Dubai", value: "2400", description: "Monthly Volume: 2400 | Brand category keyword" },
        { "@type": "PropertyValue", name: "import export services Dubai", value: "2400", description: "Monthly Volume: 2400 | Trade service keyword" },
        { "@type": "PropertyValue", name: "eco-friendly food packaging", value: "2200", description: "Monthly Volume: 2200 | Sustainability keyword" },
        { "@type": "PropertyValue", name: "HACCP certified food supplier", value: "1900", description: "Monthly Volume: 1900 | Trust and compliance keyword" },
        { "@type": "PropertyValue", name: "bulk food supply GCC", value: "1600", description: "Monthly Volume: 1600 | Regional B2B keyword" },
        { "@type": "PropertyValue", name: "disposable packaging wholesale UAE", value: "1600", description: "Monthly Volume: 1600 | Product keyword" },
        { "@type": "PropertyValue", name: "frozen meat supplier Dubai", value: "1300", description: "Monthly Volume: 1300 | Product-specific keyword" },
        { "@type": "PropertyValue", name: "food distribution company GCC", value: "1300", description: "Monthly Volume: 1300 | Regional service keyword" },
        { "@type": "PropertyValue", name: "raw food wholesale UAE", value: "1000", description: "Monthly Volume: 1000 | Wholesale buyer keyword" },
        { "@type": "PropertyValue", name: "daily essentials supplier Dubai", value: "1000", description: "Monthly Volume: 1000 | Product category keyword" },
        { "@type": "PropertyValue", name: "private label food UAE", value: "880", description: "Monthly Volume: 880 | B2B differentiation keyword" },
        { "@type": "PropertyValue", name: "food supply chain UAE", value: "720", description: "Monthly Volume: 720 | Industry keyword" },
        { "@type": "PropertyValue", name: "halal food supplier GCC", value: "720", description: "Monthly Volume: 720 | Certification keyword" },
        { "@type": "PropertyValue", name: "VMC General Trading UAE", value: "590", description: "Monthly Volume: 590 | Brand search keyword" },
        { "@type": "PropertyValue", name: "food packaging solutions Dubai", value: "590", description: "Monthly Volume: 590 | Service + location keyword" },
        { "@type": "PropertyValue", name: "ISO 22000 food supplier UAE", value: "480", description: "Monthly Volume: 480 | Quality certification keyword" },
      ],
    },
  ],
};

const SeoSchema = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default SeoSchema;
