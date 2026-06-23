export const siteConfig = {
  name: "KARUN'S",
  legalName: "Karuna Enterprises",
  phone: "+917994782438", // Official contact number
  phoneFormatted: "+91 79947 82438",
  email: "karunaenterprisescka2024@gmail.com", // Official email
  address: "Karuna Enterprises, Chelakkara, Thrissur, Kerala, India - 680586",
  addressLocality: "Chelakkara, Thrissur",
  addressRegion: "Kerala",
  addressCountry: "India",
  url: "https://karunafoods.com", // Canonical URL domain placeholder
  title: "Pure Kerala Coconut Oil & Spices | KARUN'S",
  description: "Shop 100% pure cold pressed coconut oil, virgin coconut oil, sesame oil, peanut oil & authentic Kerala masala powders. FSSAI certified. Direct from Thrissur factory.",
  whatsappBaseUrl: "https://wa.me/917994782438", // Official WhatsApp link base

  keywords: [
    "Cold Pressed Coconut Oil Kerala",
    "Coconut Oil Thrissur",
    "Coconut Oil Kerala",
    "Edible Oil Manufacturer Kerala",
    "Spice Powder Manufacturer Kerala",
    "Sesame Oil Kerala",
    "Peanut Oil Kerala",
    "Kerala Spice Powders",
    "Thrissur Food Products",
    "Chelakkara",
    "Thrissur",
    "Kerala",
    "India"
  ],

  // Products Database
  products: {
    coconutOil: {
      id: "coconut-oil",
      name: "Cold Pressed Coconut Oil",
      shortDescription: "Premium unrefined coconut oil extracted from select sun-dried copra of Kerala. Perfect for everyday cooking.",
      description: "KARUN'S Cold Pressed Coconut Oil is produced using carefully selected coconuts and a controlled production process that helps preserve natural aroma, flavor, and quality. It is suitable for everyday cooking and traditional household use.",
      benefits: [
        "Rich in lauric acid (approx 48-50%) for boosting immunity",
        "Contains medium-chain triglycerides (MCTs) which provide instant energy",
        "Stable at high cooking temperatures, retaining its nutritional integrity",
        "Free from hexane, chemical solvents, preservatives, or artificial additives"
      ],
      keywords: ["Cold Pressed Coconut Oil Kerala", "Coconut Oil Thrissur", "Coconut Oil Kerala", "Coconut Oil India", "Pure Coconut Oil Kerala"],
      sizes: ["500ml", "1L", "2L", "5L", "15L Bulk"],
      whatsappText: "Hello Karuna Enterprises,\n\nI am interested in KARUN'S Cold Pressed Coconut Oil.\n\nCould you please share the available pack sizes, pricing, and delivery details?\n\nThank you.",
      priceApprox: "₹210",
      isPrimary: true
    },
    vco: {
      id: "vco",
      name: "Virgin Coconut Oil (VCO)",
      shortDescription: "Purest cold-pressed oil extracted from fresh coconut milk without heat. High in lauric acid, ideal for baby care and direct consumption.",
      description: "KARUN'S Virgin Coconut Oil (VCO) is extracted from fresh coconut milk without any heat processing, refining, or bleaching. This preserves all the natural antioxidants, vitamins, and a light, delicate coconut aroma.",
      benefits: [
        "Contains 50-53% lauric acid, mirroring the healthy compounds in mother's milk",
        "Rich in active antioxidants and polyphenols for healthy skin and hair",
        "100% raw, edible, and excellent for raw consumption (oil pulling)",
        "Gentle enough for newborn baby massage and skincare"
      ],
      keywords: ["Virgin Coconut Oil Kerala", "VCO Thrissur", "Cold Pressed VCO Kerala", "Pure Virgin Coconut Oil"],
      sizes: ["100ml", "250ml", "500ml", "1L"],
      whatsappText: "Hello Karuna Enterprises,\n\nI am interested in KARUN'S Virgin Coconut Oil (VCO).\n\nCould you please share the available pack sizes, pricing, and delivery details?\n\nThank you.",
      priceApprox: "₹450"
    },
    sesameOil: {
      id: "sesame-oil",
      name: "Cold Pressed Sesame Oil",
      shortDescription: "Traditionally pressed gingelly oil rich in sesamol antioxidants. A cornerstone of Ayurvedic cooking and wellness.",
      description: "KARUN'S Cold Pressed Sesame Oil (Gingelly Oil) is extracted from premium quality sesame seeds. It retains a rich amber color, characteristic nutty aroma, and active antioxidants that prevent rancidity naturally.",
      benefits: [
        "Abundant in sesamol and sesamin, strong natural antioxidants",
        "Highly stable with a naturally long shelf life without preservatives",
        "Tridosha-pacifying in Ayurveda, excellent for health and therapeutic massage",
        "Adds traditional rich taste to stir-fries, tempering, and marinades"
      ],
      keywords: ["Sesame Oil Kerala", "Gingelly Oil Kerala", "Cold Pressed Sesame Oil", "Ellu Enna Thrissur"],
      sizes: ["250ml", "500ml", "1L"],
      whatsappText: "Hello Karuna Enterprises,\n\nI would like to know more about KARUN'S Sesame Oil.\n\nPlease share pricing and availability.\n\nThank you.",
      priceApprox: "₹320"
    },
    peanutOil: {
      id: "peanut-oil",
      name: "Cold Pressed Peanut Oil",
      shortDescription: "Double-filtered peanut oil with a high smoke point. Ideal for healthy deep-frying and everyday cooking.",
      description: "KARUN'S Cold Pressed Peanut Oil (Groundnut Oil) is extracted using traditional cold-pressing methods from premium groundnuts. It offers a clean, neutral flavor and is highly stable at high heat.",
      benefits: [
        "High smoke point (225°C-232°C), preventing the formation of harmful compounds during frying",
        "Rich in heart-friendly monounsaturated fatty acids (oleic acid)",
        "Naturally rich in Vitamin E, protecting cells from oxidative stress",
        "No chemical refining, bleaching, or solvent extraction"
      ],
      keywords: ["Peanut Oil Kerala", "Groundnut Oil Kerala", "Cold Pressed Peanut Oil", "Kadala Enna Thrissur"],
      sizes: ["500ml", "1L", "5L"],
      whatsappText: "Hello Karuna Enterprises,\n\nI am interested in KARUN'S Peanut Oil.\n\nPlease share pricing and delivery details.\n\nThank you.",
      priceApprox: "₹280"
    },
    // Spice products
    coriander: {
      id: "coriander",
      name: "Pure Coriander Powder",
      shortDescription: "Freshly milled from clean, dry-roasted whole coriander seeds. Zero fillers, high essential oils.",
      description: "KARUN'S Coriander Powder is ground from carefully selected whole coriander seeds, roasted lightly in small batches to release their natural volatile oils. It has a fresh, slightly citrusy, warm aroma.",
      benefits: [
        "100% pure ground coriander seeds with zero fillers, starch, or colors",
        "High natural volatile oil content (1.5-2.5%) for rich aroma",
        "Acts as a natural digestive aid and anti-inflammatory spice",
        "Adds a rich, thick texture and balanced flavor to curries"
      ],
      keywords: ["Coriander Powder Thrissur", "Coriander Powder Kerala", "Pure Dhania Powder", "Kerala Spices Wholesale"],
      sizes: ["100g", "250g", "500g", "1kg"],
      whatsappText: "Hello Karuna Enterprises,\n\nI am interested in KARUN'S Pure Coriander Powder.\n\nCould you please share the available pack sizes, pricing, and delivery details?\n\nThank you.",
      priceApprox: "₹90"
    },
    sambar: {
      id: "sambar",
      name: "Kerala Sambar Powder",
      shortDescription: "Authentic local recipe using dry-roasted spices. Balanced heat and aroma for the perfect Sambar.",
      description: "KARUN'S Sambar Powder is an authentic Kerala-style blend of roasted coriander, dried red chillies, turmeric, cumin, black pepper, and curry leaves. Sourced and blended to deliver the perfect tangy and aromatic sambar.",
      benefits: [
        "Traditional family recipe dry-roasted in small batches",
        "Contains zero artificial colors, MSG, preservatives, or chemical flavor enhancers",
        "Perfectly balanced spice levels suitable for everyday family meals",
        "Rich in dietary fiber and beneficial spice micro-nutrients"
      ],
      keywords: ["Sambar Powder Kerala", "Sambar Masala Thrissur", "Kerala Style Sambar Powder", "Authentic Sambar Mix"],
      sizes: ["100g", "250g", "500g", "1kg"],
      whatsappText: "Hello Karuna Enterprises,\n\nI am interested in KARUN'S Kerala Sambar Powder.\n\nCould you please share the available pack sizes, pricing, and delivery details?\n\nThank you.",
      priceApprox: "₹120"
    },
    chilli: {
      id: "chilli",
      name: "Pure Chilli Powder",
      shortDescription: "Ground from premium sun-dried red chillies. Provides natural color and robust heat without synthetic dyes.",
      description: "KARUN'S Chilli Powder is processed from clean, premium quality red chillies. It gives your dishes a beautiful red color and a perfect spicy kick naturally.",
      benefits: [
        "Made from 100% pure red chillies, free from added colors or synthetic dyes",
        "Provides a natural source of capsaicin to boost metabolism",
        "Clean, dry-processed to prevent adulteration and moisture spoilage",
        "Consistent heat and color profile across batches"
      ],
      keywords: ["Chilli Powder Thrissur", "Chilli Powder Kerala", "Pure Red Chilli Powder", "Natural Chilli Spice"],
      sizes: ["100g", "250g", "500g", "1kg"],
      whatsappText: "Hello Karuna Enterprises,\n\nI am interested in KARUN'S Pure Chilli Powder.\n\nCould you please share the available pack sizes, pricing, and delivery details?\n\nThank you.",
      priceApprox: "₹110"
    },
    turmeric: {
      id: "turmeric",
      name: "High-Curcumin Turmeric Powder",
      shortDescription: "Premium turmeric powder with high curcumin content, offering deep color and strong therapeutic value.",
      description: "KARUN'S Turmeric Powder is ground from select high-quality turmeric rhizomes. Sourced from farms that cultivate high-curcumin varieties, it offers a deep yellow-orange color and a rich warm flavor.",
      benefits: [
        "High curcumin content providing powerful natural anti-inflammatory benefits",
        "No artificial coloring, lead chromate, or fillers",
        "FSSAI food-safety compliant and hygienically ground in low heat",
        "Ideal for cooking, wellness drinks (golden milk), and Ayurvedic home remedies"
      ],
      keywords: ["Turmeric Powder Kerala", "Turmeric Powder Thrissur", "High Curcumin Turmeric", "Pure Haldi Kerala"],
      sizes: ["100g", "250g", "500g", "1kg"],
      whatsappText: "Hello Karuna Enterprises,\n\nI am interested in KARUN'S High-Curcumin Turmeric Powder.\n\nCould you please share the available pack sizes, pricing, and delivery details?\n\nThank you.",
      priceApprox: "₹80"
    },
    garamMasala: {
      id: "garam-masala",
      name: "Traditional Garam Masala",
      shortDescription: "Aromatic blend of whole spices like cardamom, cloves, cinnamon, and pepper. Handcrafted with zero fillers.",
      description: "KARUN'S Garam Masala is a handcrafted blend of premium spices including cardamom, cloves, cinnamon, star anise, nutmeg, mace, and black pepper. We roast and mill them in small quantities to retain volatile aromatic oils.",
      benefits: [
        "Aromatic blend containing only pure spices with zero added salt, starch, or flour",
        "Rich in essential oils that aid digestion and improve metabolic function",
        "Highly concentrated—a small pinch adds deep flavor and aroma",
        "Traditionally prepared without artificial fragrances or chemicals"
      ],
      keywords: ["Garam Masala Thrissur", "Kerala Garam Masala", "Traditional Spice Blend", "Pure Garam Masala"],
      sizes: ["50g", "100g", "250g", "500g"],
      whatsappText: "Hello Karuna Enterprises,\n\nI am interested in KARUN'S Traditional Garam Masala.\n\nCould you please share the available pack sizes, pricing, and delivery details?\n\nThank you.",
      priceApprox: "₹150"
    },
    chickenMasala: {
      id: "chicken-masala",
      name: "Authentic Chicken Masala",
      shortDescription: "True Kerala chicken curry blend. Rich color, warm aroma, and spicy depth without artificial flavor enhancers.",
      description: "KARUN'S Chicken Masala is formulated using an authentic Kerala recipe. It combines coriander, chilli, black pepper, fennel, cardamom, and other warm spices to make your chicken dishes rich and aromatic.",
      benefits: [
        "Authentic local recipe optimized for traditional Kerala chicken curry and fry",
        "No added MSG, artificial flavor enhancers, or chemical stabilizers",
        "100% natural spices sourced from organic estates in South India",
        "Easy-to-use blend that eliminates the need for grinding whole spices"
      ],
      keywords: ["Chicken Masala Kerala", "Authentic Chicken Curry Masala", "Chicken Masala Thrissur", "No MSG Chicken Masala"],
      sizes: ["50g", "100g", "250g", "500g"],
      whatsappText: "Hello Karuna Enterprises,\n\nI am interested in KARUN'S Authentic Chicken Masala.\n\nCould you please share the available pack sizes, pricing, and delivery details?\n\nThank you.",
      priceApprox: "₹140"
    }
  },

  // FAQ Database (10 main FAQs)
  faqs: [
    {
      q: "What is cold pressed coconut oil and how is it made?",
      a: "Cold pressed coconut oil is extracted mechanically from sun-dried copra (coconut meat) at low temperatures without using heat or chemical solvents. This controlled extraction ensures the natural nutrients, lauric acid, and delicate fresh aroma of the coconut are completely preserved."
    },
    {
      q: "Where is KARUN'S located?",
      a: "KARUN'S products are manufactured by Karuna Enterprises located in Chelakkara, Thrissur, Kerala, India. We operate from a hygienic, FSSAI-licensed facility in this culturally rich agricultural district."
    },
    {
      q: "Do you deliver across India?",
      a: "Yes, we offer reliable all-India delivery. We ship our premium oils and spice blends to major cities and rural areas across India using trusted logistics partners. We also offer same-day delivery within the Thrissur area."
    },
    {
      q: "Do you accept wholesale or bulk orders?",
      a: "Absolutely! We supply restaurants, hotels, caterers, supermarkets, and B2B distributors. We offer competitive factory-direct pricing for bulk orders, starting from 5-litre cans up to wholesale drums. Contact us via WhatsApp for a custom quote."
    },
    {
      q: "How can I place an order?",
      a: "Ordering is simple! Click any 'Order on WhatsApp' button on our website to send us a pre-filled enquiry. We will share pricing, confirm size availability, calculate shipping to your location, and process your order securely."
    },
    {
      q: "What products do you manufacture?",
      a: "We manufacture a curated range of high-quality products. This includes edible oils (Cold Pressed Coconut Oil, Virgin Coconut Oil, Cold Pressed Sesame Oil, and Cold Pressed Peanut Oil) and spice powders (Coriander, Turmeric, Chilli, Garam Masala, Sambar Powder, and Chicken Masala)."
    },
    {
      q: "Is your coconut oil suitable for daily cooking?",
      a: "Yes, our Cold Pressed Coconut Oil is 100% food-grade and FSSAI certified. It is highly stable for daily cooking, tempering, sautéing, and traditional Kerala dishes."
    },
    {
      q: "What makes KARUN'S different from supermarket brands?",
      a: "KARUN'S stands out because we are a direct manufacturer focusing on zero-compromise purity. Unlike mass-market refined oils, our cold-pressed oils are free from chemical solvents, bleaching agents, and preservatives. Our spices contain zero fillers, artificial color, or MSG."
    },
    {
      q: "What is the difference between cold pressed and refined oil?",
      a: "Refined oil is extracted using high heat and chemical solvents (like hexane), then bleached and deodorized. This strips away all natural nutrients and flavors. Cold-pressed oil is mechanically extracted at low temperatures, retaining natural vitamins, antioxidants, color, and aroma."
    },
    {
      q: "How do I contact KARUN'S?",
      a: "You can reach us through our Contact Page. You can email us at karunaenterprisescka2024@gmail.com, call us at +91 79947 82438, or directly message us on WhatsApp using any of the Order on WhatsApp buttons."
    }
  ]
};

// WhatsApp Link Generator Helper
export function getWhatsAppLink(message: string): string {
  const cleanPhone = siteConfig.phone.replace(/[^0-9]/g, "");
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}
