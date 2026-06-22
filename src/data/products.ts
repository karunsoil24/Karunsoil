export interface Product {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  sizes: string[];
  whatsappText: string;
  priceApprox: string;
  image: string;
  isPrimary?: boolean;
}

export const products: Product[] = [
  {
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
    sizes: ["500ml", "1L", "2L", "5L", "15L Bulk"],
    whatsappText: "Hello Karuna Enterprises,\n\nI am interested in KARUN'S Cold Pressed Coconut Oil.\n\nCould you please share the available pack sizes, pricing, and delivery details?\n\nThank you.",
    priceApprox: "₹210",
    image: "/assets/Karun’s coconut oil.png",
    isPrimary: true
  },
  {
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
    sizes: ["250ml", "500ml", "1L"],
    whatsappText: "Hello Karuna Enterprises,\n\nI would like to know more about KARUN'S Sesame Oil.\n\nPlease share pricing and availability.\n\nThank you.",
    priceApprox: "₹320",
    image: "/assets/Karun's Sesame Seed Oil.png"
  },
  {
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
    sizes: ["500ml", "1L", "5L"],
    whatsappText: "Hello Karuna Enterprises,\n\nI am interested in KARUN'S Peanut Oil.\n\nPlease share pricing and delivery details.\n\nThank you.",
    priceApprox: "₹280",
    image: "/assets/Karun's Peanut oil.png"
  },
  {
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
    sizes: ["100g", "250g", "500g", "1kg"],
    whatsappText: "Hello Karuna Enterprises,\n\nI am interested in KARUN'S Pure Coriander Powder.\n\nCould you please share the available pack sizes, pricing, and delivery details?\n\nThank you.",
    priceApprox: "₹90",
    image: "/assets/Karun's Coriander powder.png"
  },
  {
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
    sizes: ["100g", "250g", "500g", "1kg"],
    whatsappText: "Hello Karuna Enterprises,\n\nI am interested in KARUN'S Kerala Sambar Powder.\n\nCould you please share the available pack sizes, pricing, and delivery details?\n\nThank you.",
    priceApprox: "₹120",
    image: "/assets/Karun's Sambar powder.png"
  },
  {
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
    sizes: ["100g", "250g", "500g", "1kg"],
    whatsappText: "Hello Karuna Enterprises,\n\nI am interested in KARUN'S Pure Chilli Powder.\n\nCould you please share the available pack sizes, pricing, and delivery details?\n\nThank you.",
    priceApprox: "₹110",
    image: "/assets/Karun's Chilly powder.png"
  },
  {
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
    sizes: ["100g", "250g", "500g", "1kg"],
    whatsappText: "Hello Karuna Enterprises,\n\nI am interested in KARUN'S High-Curcumin Turmeric Powder.\n\nCould you please share the available pack sizes, pricing, and delivery details?\n\nThank you.",
    priceApprox: "₹80",
    image: "/assets/Karun's turmeric powder.png"
  },
  {
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
    sizes: ["50g", "100g", "250g", "500g"],
    whatsappText: "Hello Karuna Enterprises,\n\nI am interested in KARUN'S Traditional Garam Masala.\n\nCould you please share the available pack sizes, pricing, and delivery details?\n\nThank you.",
    priceApprox: "₹150",
    image: "/assets/Karun's Garam masala.png"
  },
  {
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
    sizes: ["50g", "100g", "250g", "500g"],
    whatsappText: "Hello Karuna Enterprises,\n\nI am interested in KARUN'S Authentic Chicken Masala.\n\nCould you please share the available pack sizes, pricing, and delivery details?\n\nThank you.",
    priceApprox: "₹140",
    image: "/assets/Karun's chicken masala.png"
  }
];
