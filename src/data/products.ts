export interface Product {
  id: string;
  name: string;
  category: "oils" | "spices" | "flours" | "snacks" | "nuts";
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
  // --- EDIBLE OILS & GHEE ---
  {
    id: "coconut-oil",
    name: "Cold Pressed Coconut Oil",
    category: "oils",
    shortDescription: "Premium unrefined coconut oil extracted from select sun-dried copra of Kerala. Perfect for everyday cooking.",
    description: "KARUN'S Cold Pressed Coconut Oil is produced using carefully selected coconuts and a controlled production process that helps preserve natural aroma, flavor, and quality.",
    benefits: [
      "Rich in lauric acid (approx 48-50%) for boosting immunity",
      "Contains medium-chain triglycerides (MCTs) for instant energy",
      "Stable at high cooking temperatures, retaining nutritional integrity",
      "Free from hexane, chemical solvents, preservatives, or additives"
    ],
    sizes: ["1L - ₹340", "5L - ₹1650", "12L - ₹3720", "Cold Pressed - ₹360"],
    whatsappText: "Hello Karuna Enterprises,\n\nI want to buy KARUN'S Cold Pressed Coconut Oil.\n\nPlease share delivery details.\n\nThank you.",
    priceApprox: "₹340",
    image: "/assets/cold-pressed-coconut-oil-karuns-kerala.png",
    isPrimary: true
  },
  {
    id: "half-virgin-coconut-oil",
    name: "Coconut Oil Cold Pressed Half Virgin",
    category: "oils",
    shortDescription: "Delicate half-virgin cold pressed coconut oil, retaining rich natural coconut flavor and aroma.",
    description: "KARUN'S Half Virgin Coconut Oil is mildly processed at controlled low temperatures from pure Kerala coconuts to retain a sweet aroma and subtle raw coconut profile.",
    benefits: [
      "Light, aromatic & naturally rich in lauric acid",
      "Ideal for health drinks, salads, and light cooking",
      "Cold-extracted without chemical refining or bleaching"
    ],
    sizes: ["1L - ₹360"],
    whatsappText: "Hello Karuna Enterprises,\n\nI want to buy KARUN'S Half Virgin Coconut Oil (1L - ₹360).\n\nPlease share delivery details.\n\nThank you.",
    priceApprox: "₹360",
    image: "/assets/half-virgin-coconut-oil.png"
  },
  {
    id: "extra-virgin-coconut-oil",
    name: "Extra Virgin Coconut Oil (EVCO)",
    category: "oils",
    shortDescription: "100% raw oil extracted from fresh coconut milk without heat. Perfect for baby care, skin, and direct intake.",
    description: "KARUN'S Extra Virgin Coconut Oil is extracted directly from fresh coconut milk without heat, chemicals, or preservatives. Extremely light, crystal clear, and full of natural antioxidants.",
    benefits: [
      "50%+ Lauric Acid content for immune health",
      "Gentle and nourishing for baby skin massage",
      "Ideal for daily oil pulling and raw consumption"
    ],
    sizes: ["100ml - ₹100", "250ml - ₹235", "500ml - ₹460", "1L - ₹900"],
    whatsappText: "Hello Karuna Enterprises,\n\nI want to buy KARUN'S Extra Virgin Coconut Oil.\n\nPlease share pricing and delivery details.\n\nThank you.",
    priceApprox: "₹100",
    image: "/assets/extra-virgin-coconut-oil-karuns-hero.png"
  },
  {
    id: "sesame-oil",
    name: "Cold Pressed Sesame Oil (എള്ള് എണ്ണ)",
    category: "oils",
    shortDescription: "Traditionally pressed gingelly oil rich in sesamol antioxidants. Essential for Ayurvedic cooking and wellness.",
    description: "KARUN'S Cold Pressed Sesame Oil is extracted from premium sesame seeds. Retains rich amber color, characteristic nutty aroma, and active antioxidants.",
    benefits: [
      "Abundant in sesamol and sesamin antioxidants",
      "Highly stable with natural long shelf life",
      "Tridosha-balancing in traditional Ayurveda"
    ],
    sizes: ["1L - ₹650"],
    whatsappText: "Hello Karuna Enterprises,\n\nI want to buy KARUN'S Cold Pressed Sesame Oil (1L - ₹650).\n\nPlease share delivery details.\n\nThank you.",
    priceApprox: "₹650",
    image: "/assets/sesame-oil-karuns-thrissur.png"
  },
  {
    id: "peanut-oil",
    name: "Cold Pressed Peanut Oil (കടല എണ്ണ)",
    category: "oils",
    shortDescription: "Double-filtered groundnut oil with a high smoke point. Ideal for healthy deep-frying and everyday cooking.",
    description: "KARUN'S Cold Pressed Peanut Oil is extracted using traditional methods from premium groundnuts. Offers clean neutral flavor and high heat stability.",
    benefits: [
      "High smoke point ideal for deep frying",
      "Rich in heart-friendly monounsaturated fatty acids",
      "Naturally high in Vitamin E"
    ],
    sizes: ["1L - ₹350"],
    whatsappText: "Hello Karuna Enterprises,\n\nI want to buy KARUN'S Cold Pressed Peanut Oil (1L - ₹350).\n\nPlease share delivery details.\n\nThank you.",
    priceApprox: "₹350",
    image: "/assets/peanut-oil-karuns-kerala.png"
  },
  {
    id: "mustard-oil",
    name: "Cold Pressed Mustard Oil (കടുക് എണ്ണ)",
    category: "oils",
    shortDescription: "Pungent cold pressed mustard oil rich in MUFA and Omega-3. Adds traditional zest to curries and pickles.",
    description: "KARUN'S Cold Pressed Mustard Oil is pressed from select brown and yellow mustard seeds. Delivers authentic aroma, rich golden hue, and natural immunity benefits.",
    benefits: [
      "Rich in Omega-3 fatty acids and natural antioxidants",
      "Protects heart health and boosts digestion",
      "Authentic pungent flavor for traditional recipes"
    ],
    sizes: ["1L - ₹700"],
    whatsappText: "Hello Karuna Enterprises,\n\nI want to buy KARUN'S Cold Pressed Mustard Oil (1L - ₹700).\n\nPlease share delivery details.\n\nThank you.",
    priceApprox: "₹700",
    image: "/assets/mustard-oil.png"
  },
  {
    id: "nadan-pure-ghee",
    name: "Nadan Pure Ghee",
    category: "oils",
    shortDescription: "Aromatic traditional cow ghee made with authentic slow-churning methods. Granular texture and rich taste.",
    description: "KARUN'S Nadan Pure Ghee is churned from fresh country cow milk butter. Perfectly golden, highly aromatic, and packed with health-boosting nutrients.",
    benefits: [
      "100% pure cow ghee with zero preservatives or additives",
      "Rich in vitamins A, D, E, K and healthy butyric acid",
      "Deep golden color with authentic granular texture"
    ],
    sizes: ["1L - ₹1200"],
    whatsappText: "Hello Karuna Enterprises,\n\nI want to buy KARUN'S Nadan Pure Ghee (1L - ₹1200).\n\nPlease share delivery details.\n\nThank you.",
    priceApprox: "₹1200",
    image: "/assets/nadan-pure-ghee.png"
  },

  // --- MASALA POWDERS & SPICES ---
  {
    id: "red-chilli",
    name: "Pure Red Chilli Powder",
    category: "spices",
    shortDescription: "Ground from clean sun-dried red chillies. Gives rich natural red color and robust heat without synthetic dyes.",
    description: "KARUN'S Red Chilli Powder is processed from clean quality red chillies. Provides authentic spicy warmth and beautiful natural red hue.",
    benefits: [
      "100% pure red chillies, free from added colors",
      "Natural source of capsaicin to boost metabolism",
      "Consistently spicy heat profile across dishes"
    ],
    sizes: ["1kg - ₹400"],
    whatsappText: "Hello Karuna Enterprises,\n\nI want to buy KARUN'S Pure Red Chilli Powder (1kg - ₹400).\n\nPlease share delivery details.\n\nThank you.",
    priceApprox: "₹400",
    image: "/assets/chilli-powder-karuns-thrissur.png"
  },
  {
    id: "kashmiri-chilli",
    name: "Kashmiri Chilli Powder",
    category: "spices",
    shortDescription: "Vibrant crimson red chilli powder with gentle mild heat. Gives stunning restaurant-style red color to curries.",
    description: "KARUN'S Kashmiri Chilli Powder is made from premium stemless Kashmiri chillies. Gives deep ruby red color without excessive spiciness.",
    benefits: [
      "Vibrant natural crimson red color",
      "Mild gentle heat suitable for all palates",
      "Zero added colors, chemicals, or fillers"
    ],
    sizes: ["1kg - ₹650"],
    whatsappText: "Hello Karuna Enterprises,\n\nI want to buy KARUN'S Kashmiri Chilli Powder (1kg - ₹650).\n\nPlease share delivery details.\n\nThank you.",
    priceApprox: "₹650",
    image: "/assets/kashmiri-chilli-powder.png"
  },
  {
    id: "black-pepper",
    name: "Black Pepper Powder",
    category: "spices",
    shortDescription: "Freshly ground from high-grade Malabar black peppercorns. Sharp aroma and intense warm bite.",
    description: "KARUN'S Black Pepper Powder is milled from premium sun-dried whole black pepper. Packed with essential piperine for digestive wellness.",
    benefits: [
      "High piperine content for enhanced nutrient absorption",
      "100% pure ground pepper with zero adulterants",
      "Pungent, sharp bite for soups, stews, and seasoning"
    ],
    sizes: ["100g - ₹100"],
    whatsappText: "Hello Karuna Enterprises,\n\nI want to buy KARUN'S Black Pepper Powder (100g - ₹100).\n\nPlease share delivery details.\n\nThank you.",
    priceApprox: "₹100",
    image: "/assets/black-pepper-powder.png"
  },
  {
    id: "coriander",
    name: "Pure Coriander Powder",
    category: "spices",
    shortDescription: "Freshly milled from dry-roasted whole coriander seeds. High essential oils and citrusy warm aroma.",
    description: "KARUN'S Coriander Powder is ground from carefully selected whole coriander seeds, roasted lightly in small batches to preserve volatile oils.",
    benefits: [
      "100% pure ground coriander seeds with zero fillers",
      "High volatile essential oils for rich curry gravy",
      "Aids digestion and adds body to curries"
    ],
    sizes: ["1kg - ₹300"],
    whatsappText: "Hello Karuna Enterprises,\n\nI want to buy KARUN'S Pure Coriander Powder (1kg - ₹300).\n\nPlease share delivery details.\n\nThank you.",
    priceApprox: "₹300",
    image: "/assets/coriander-powder-karuns-thrissur.png"
  },
  {
    id: "turmeric",
    name: "High-Curcumin Turmeric Powder",
    category: "spices",
    shortDescription: "High curcumin turmeric powder offering deep golden color and therapeutic anti-inflammatory value.",
    description: "KARUN'S Turmeric Powder is ground from select high-quality turmeric rhizomes. Rich warm flavor and bright yellow-orange color.",
    benefits: [
      "High curcumin content for natural immunity",
      "Zero artificial colors, lead chromate, or fillers",
      "Hygienically milled at low heat"
    ],
    sizes: ["1kg - ₹400"],
    whatsappText: "Hello Karuna Enterprises,\n\nI want to buy KARUN'S Turmeric Powder (1kg - ₹400).\n\nPlease share delivery details.\n\nThank you.",
    priceApprox: "₹400",
    image: "/assets/turmeric-powder-karuns-kerala.png"
  },
  {
    id: "chicken-masala",
    name: "Authentic Chicken Masala",
    category: "spices",
    shortDescription: "True Kerala chicken curry blend. Rich color, warm aroma, and spicy depth without artificial flavor enhancers.",
    description: "KARUN'S Chicken Masala is formulated using an authentic Kerala recipe combining coriander, chilli, pepper, fennel, and cardamom.",
    benefits: [
      "Authentic local recipe for Kerala chicken curry & fry",
      "No added MSG, colors, or artificial enhancers",
      "Pure spices sourced from South Indian estates"
    ],
    sizes: ["250g - ₹130"],
    whatsappText: "Hello Karuna Enterprises,\n\nI want to buy KARUN'S Chicken Masala (250g - ₹130).\n\nPlease share delivery details.\n\nThank you.",
    priceApprox: "₹130",
    image: "/assets/chicken-masala-karuns-kerala.png"
  },
  {
    id: "sambar",
    name: "Kerala Sambar Powder",
    category: "spices",
    shortDescription: "Authentic Kerala-style blend using dry-roasted spices. Balanced heat and aroma for the perfect Sambar.",
    description: "KARUN'S Sambar Powder combines roasted coriander, red chillies, turmeric, cumin, black pepper, and curry leaves for authentic Kerala sambar.",
    benefits: [
      "Traditional family recipe dry-roasted in small batches",
      "Zero MSG, artificial colors, or chemical preservatives",
      "Delivers authentic traditional Kerala sambar taste"
    ],
    sizes: ["250g - ₹130"],
    whatsappText: "Hello Karuna Enterprises,\n\nI want to buy KARUN'S Kerala Sambar Powder (250g - ₹130).\n\nPlease share delivery details.\n\nThank you.",
    priceApprox: "₹130",
    image: "/assets/sambar-powder-karuns-kerala.png"
  },
  {
    id: "garam-masala",
    name: "Traditional Garam Masala",
    category: "spices",
    shortDescription: "Aromatic blend of whole cardamom, cloves, cinnamon, and pepper. Handcrafted with zero fillers.",
    description: "KARUN'S Garam Masala is a handcrafted blend of premium spices roasted and milled in small quantities to retain essential aromatic oils.",
    benefits: [
      "Pure whole spice blend with zero salt, starch, or flour",
      "Highly concentrated—a small pinch adds deep flavor",
      "Traditional preparation without artificial fragrances"
    ],
    sizes: ["250g - ₹220"],
    whatsappText: "Hello Karuna Enterprises,\n\nI want to buy KARUN'S Garam Masala (250g - ₹220).\n\nPlease share delivery details.\n\nThank you.",
    priceApprox: "₹220",
    image: "/assets/garam-masala-karuns-thrissur.png"
  },
  {
    id: "meat-masala",
    name: "Authentic Meat Masala",
    category: "spices",
    shortDescription: "Rich roasted spice mix for Kerala beef roast, mutton curry, and meat roasts. Robust warm spice profile.",
    description: "KARUN'S Meat Masala blends dry-roasted coriander, black pepper, star anise, cloves, and chilli for rich authentic meat gravy and roasts.",
    benefits: [
      "Perfectly balanced spice blend for meat curries & roasts",
      "100% natural dry-roasted whole spices",
      "No added MSG, chemical preservatives, or dyes"
    ],
    sizes: ["250g - ₹140"],
    whatsappText: "Hello Karuna Enterprises,\n\nI want to buy KARUN'S Meat Masala (250g - ₹140).\n\nPlease share delivery details.\n\nThank you.",
    priceApprox: "₹140",
    image: "/assets/meat-masala.png"
  },
  {
    id: "biriyani-masala",
    name: "Kerala Biriyani Masala",
    category: "spices",
    shortDescription: "Exquisite blend of royal spices including green cardamom, mace, nutmeg, and cloves for Malabar Biriyani.",
    description: "KARUN'S Biriyani Masala brings the regal flavor of authentic Kerala & Malabar Dum Biriyani directly to your home kitchen.",
    benefits: [
      "Hand-selected royal spices for irresistible biriyani fragrance",
      "No artificial essence or synthetic perfume additives",
      "Ideal for chicken, mutton, and veg biriyani"
    ],
    sizes: ["250g - ₹180"],
    whatsappText: "Hello Karuna Enterprises,\n\nI want to buy KARUN'S Biriyani Masala (250g - ₹180).\n\nPlease share delivery details.\n\nThank you.",
    priceApprox: "₹180",
    image: "/assets/biriyani-masala.png"
  },

  // --- PUTTUPODI & FLOURS ---
  {
    id: "rice-puttupodi",
    name: "Rice Puttupodi",
    category: "flours",
    shortDescription: "Coarsely ground steam-processed rice flour for soft, fluffy traditional Kerala puttu.",
    description: "KARUN'S Rice Puttupodi is prepared from cleaned quality rice grains milled to perfect coarse granularity so puttu steams light and soft.",
    benefits: [
      "Steams into soft, non-sticky fluffy puttu",
      "Made from 100% clean natural rice with zero additives",
      "Hygienically processed for long shelf life"
    ],
    sizes: ["500g - ₹50"],
    whatsappText: "Hello Karuna Enterprises,\n\nI want to buy KARUN'S Rice Puttupodi (500g - ₹50).\n\nPlease share delivery details.\n\nThank you.",
    priceApprox: "₹50",
    image: "/assets/rice-puttupodi.png"
  },
  {
    id: "wheat-puttupodi",
    name: "Wheat Puttupodi",
    category: "flours",
    shortDescription: "Healthy whole wheat puttupodi rich in dietary fiber. Steams into aromatic, soft wheat puttu.",
    description: "KARUN'S Wheat Puttupodi is made by dry-roasting whole wheat grains and milling to coarse puttu consistency for diabetic-friendly meals.",
    benefits: [
      "High fiber content for healthy digestion & diabetes care",
      "Rich nutty flavor and golden wheat color",
      "Zero wheat flour adulterants or preservatives"
    ],
    sizes: ["500g - ₹70"],
    whatsappText: "Hello Karuna Enterprises,\n\nI want to buy KARUN'S Wheat Puttupodi (500g - ₹70).\n\nPlease share delivery details.\n\nThank you.",
    priceApprox: "₹70",
    image: "/assets/wheat-puttupodi.png"
  },
  {
    id: "ragi-puttupodi",
    name: "Ragi Puttupodi",
    category: "flours",
    shortDescription: "Calcium-rich finger millet (Ragi) puttupodi. Superfood breakfast choice for bone health and wellness.",
    description: "KARUN'S Ragi Puttupodi is ground from roasted ragi grains. Super rich in calcium, iron, and fiber for a wholesome healthy breakfast.",
    benefits: [
      "Extremely rich in calcium and natural iron",
      "Low glycemic index food ideal for weight management",
      "Soft texture and pleasant earthy flavor"
    ],
    sizes: ["500g - ₹85"],
    whatsappText: "Hello Karuna Enterprises,\n\nI want to buy KARUN'S Ragi Puttupodi (500g - ₹85).\n\nPlease share delivery details.\n\nThank you.",
    priceApprox: "₹85",
    image: "/assets/ragi-puttupodi.png"
  },
  {
    id: "ragi-sprouted",
    name: "Sprouted Ragi Flour",
    category: "flours",
    shortDescription: "Sprouted finger millet flour packed with maximum bio-available calcium, iron, and protein for babies & family.",
    description: "KARUN'S Sprouted Ragi Flour is made from sprouted and gently dried finger millets for enhanced digestion and nutritional absorption.",
    benefits: [
      "Sprouted process enhances calcium and iron absorption",
      "Ultra-gentle on baby stomach and easy to digest",
      "100% natural organic superfood"
    ],
    sizes: ["500g - ₹85"],
    whatsappText: "Hello Karuna Enterprises,\n\nI want to buy KARUN'S Sprouted Ragi Flour (500g - ₹85).\n\nPlease share delivery details.\n\nThank you.",
    priceApprox: "₹85",
    image: "/assets/ragi-puttupodi.png"
  },
  {
    id: "corn-puttupodi",
    name: "Corn Puttupodi",
    category: "flours",
    shortDescription: "Nutritious golden corn puttupodi made from sweet yellow corn. Rich in antioxidants and carotene.",
    description: "KARUN'S Corn Puttupodi offers a sweet golden twist to traditional puttu. Easy to steam, delicious, and highly nutritious.",
    benefits: [
      "Naturally gluten-free and rich in dietary fiber",
      "Beautiful yellow hue and pleasant corn sweetness",
      "Great breakfast choice for kids and health-conscious adults"
    ],
    sizes: ["500g - ₹85"],
    whatsappText: "Hello Karuna Enterprises,\n\nI want to buy KARUN'S Corn Puttupodi (500g - ₹85).\n\nPlease share delivery details.\n\nThank you.",
    priceApprox: "₹85",
    image: "/assets/corn-puttupodi.png"
  },
  {
    id: "kuthari-chemba",
    name: "Kuthari Chemba Puttupodi",
    category: "flours",
    shortDescription: "Authentic Kerala Chemba matta rice puttupodi. Rich reddish hue, nutty aroma, and packed with vitamins.",
    description: "KARUN'S Kuthari Chemba Puttupodi is made from steamed Kerala red Matta rice grains coarsely ground for traditional red puttu.",
    benefits: [
      "Made from authentic Kerala Matta Red Rice",
      "High B-vitamin content and low GI index",
      "Rich traditional red color and fragrant aroma"
    ],
    sizes: ["500g - ₹70"],
    whatsappText: "Hello Karuna Enterprises,\n\nI want to buy KARUN'S Kuthari Chemba Puttupodi (500g - ₹70).\n\nPlease share delivery details.\n\nThank you.",
    priceApprox: "₹70",
    image: "/assets/rice-puttupodi.png"
  },
  {
    id: "chammanthi-podi",
    name: "Roasted Chammanthi Podi",
    category: "flours",
    shortDescription: "Traditional Kerala dry coconut chutney powder. Slow-roasted fresh coconut, chilli, tamarind & spices.",
    description: "KARUN'S Chammanthi Podi is made by slow-roasting grated coconut with red chillies, curry leaves, tamarind, and shallots. Ready to eat with rice, kanji, or dosa.",
    benefits: [
      "Authentic homestyle roasted coconut taste",
      "Instant side dish—no cooking or water required",
      "Long shelf life without synthetic preservatives"
    ],
    sizes: ["100g - ₹80"],
    whatsappText: "Hello Karuna Enterprises,\n\nI want to buy KARUN'S Chammanthi Podi (100g - ₹80).\n\nPlease share delivery details.\n\nThank you.",
    priceApprox: "₹80",
    image: "/assets/chammanthi-podi.png"
  },
  {
    id: "idly-dosa-podi",
    name: "Idly Dosa Podi (Gunpowder)",
    category: "flours",
    shortDescription: "Spicy roasted lentil podi for idli and dosa. Mix with sesame oil or ghee for unbeatable South Indian breakfast taste.",
    description: "KARUN'S Idly Dosa Podi is roasted with urad dal, chana dal, red chillies, sesame seeds, and asafoetida. Spicy, crunchy, and aromatic.",
    benefits: [
      "Rich protein boost from roasted lentils",
      "Authentic South Indian gunpowder flavor",
      "Pairs perfectly with gingelly oil or hot ghee"
    ],
    sizes: ["500g - ₹60"],
    whatsappText: "Hello Karuna Enterprises,\n\nI want to buy KARUN'S Idly Dosa Podi (500g - ₹60).\n\nPlease share delivery details.\n\nThank you.",
    priceApprox: "₹60",
    image: "/assets/idly-dosa-podi.png"
  },

  // --- TRADITIONAL SNACKS & SPECIALTIES ---
  {
    id: "rice-pappadam",
    name: "Rice Pappadam",
    category: "snacks",
    shortDescription: "Traditional puffing rice pappadams. Crispy, golden, and light—the iconic companion to Kerala sadya.",
    description: "KARUN'S Rice Pappadams are hand-rolled using authentic black gram & rice flour dough with natural papad khar for maximum puffing when fried.",
    benefits: [
      "Puffs up big, golden, and crispy when fried",
      "100% traditional recipe made with high hygiene standards",
      "Essential crunch for meals and sadya"
    ],
    sizes: ["500g - ₹225"],
    whatsappText: "Hello Karuna Enterprises,\n\nI want to buy KARUN'S Rice Pappadam (500g - ₹225).\n\nPlease share delivery details.\n\nThank you.",
    priceApprox: "₹225",
    image: "/assets/rice-pappadam.png"
  },
  {
    id: "rice-kondattam",
    name: "Rice Kondattam",
    category: "snacks",
    shortDescription: "Sun-dried Kerala rice fryums (Kondattam Vathal). Crunchy side dish for rice and curd rice.",
    description: "KARUN'S Rice Kondattam is prepared by steaming spiced rice batter into small drops and sun-drying to crisp perfection.",
    benefits: [
      "Sun-dried naturally for long shelf life",
      "Fries crisp in seconds in hot oil",
      "Spiced with natural green chillies and salt"
    ],
    sizes: ["400g - ₹150"],
    whatsappText: "Hello Karuna Enterprises,\n\nI want to buy KARUN'S Rice Kondattam (400g - ₹150).\n\nPlease share delivery details.\n\nThank you.",
    priceApprox: "₹150",
    image: "/assets/rice-kondattam.png"
  },
  {
    id: "bitter-gourd-fry",
    name: "Bitter Gourd Fry (Pavakka Kondattam)",
    category: "snacks",
    shortDescription: "Sun-dried spiced bitter gourd chips fried crisp. Zesty, crunchy, and health-boosting side dish.",
    description: "KARUN'S Bitter Gourd Fry is prepared from fresh bitter gourds marinated in spicy curd seasoning and sun-dried.",
    benefits: [
      "Excellent natural regulator for blood sugar levels",
      "Crunchy, spiced, and tangy taste",
      "Quick fry-and-serve meal companion"
    ],
    sizes: ["100g - ₹80"],
    whatsappText: "Hello Karuna Enterprises,\n\nI want to buy KARUN'S Bitter Gourd Fry (100g - ₹80).\n\nPlease share delivery details.\n\nThank you.",
    priceApprox: "₹80",
    image: "/assets/kerala-spices-masala-combo.png"
  },
  {
    id: "curd-chilly",
    name: "Curd Chilly (Kondattam Mulaku)",
    category: "snacks",
    shortDescription: "Sun-dried salted curd chillies. Deep fried until dark and crispy for traditional curd rice & meals.",
    description: "KARUN'S Curd Chilly (Kondattam Mulaku) is soaked in spiced thick buttermilk and sea salt, then sun-dried.",
    benefits: [
      "Iconic companion for Kerala Kanji & Curd Rice",
      "Intense savory, salty, and spicy crunch",
      "100% natural sun-cured preserve"
    ],
    sizes: ["100g - ₹100"],
    whatsappText: "Hello Karuna Enterprises,\n\nI want to buy KARUN'S Curd Chilly (100g - ₹100).\n\nPlease share delivery details.\n\nThank you.",
    priceApprox: "₹100",
    image: "/assets/kerala-spices-masala-combo.png"
  },
  {
    id: "arrowroot-powder",
    name: "Pure Arrowroot Powder (Koova Podi)",
    category: "snacks",
    shortDescription: "100% natural wild arrowroot starch powder. Super cooling food for digestion, stomach healing & infants.",
    description: "KARUN'S Arrowroot Powder (Koova Podi) is extracted from wild arrowroot tubers. Ideal for stomach soothing and cooling porridge.",
    benefits: [
      "Soothes stomach acidity, ulcers, and digestion",
      "Extremely gentle cooling food for babies and elders",
      "100% pure wild-extracted starch"
    ],
    sizes: ["500g - ₹700"],
    whatsappText: "Hello Karuna Enterprises,\n\nI want to buy KARUN'S Pure Arrowroot Powder (500g - ₹700).\n\nPlease share delivery details.\n\nThank you.",
    priceApprox: "₹700",
    image: "/assets/kerala-spices-masala-combo.png"
  },
  {
    id: "jackfruit-powder",
    name: "Jackfruit Powder (Raw Chakka Podi)",
    category: "snacks",
    shortDescription: "100% natural raw green jackfruit flour. Lowers blood sugar and adds dietary soluble fiber to meals.",
    description: "KARUN'S Jackfruit Powder is made from mature raw green jackfruit. Mix 1 spoon daily into dosa batter, rotis, or curry.",
    benefits: [
      "Clinically proven to reduce blood glucose levels",
      "High soluble dietary fiber content",
      "Neutral taste mixes easily into rotis & dosa batter"
    ],
    sizes: ["500g - ₹400"],
    whatsappText: "Hello Karuna Enterprises,\n\nI want to buy KARUN'S Raw Jackfruit Powder (500g - ₹400).\n\nPlease share delivery details.\n\nThank you.",
    priceApprox: "₹400",
    image: "/assets/kerala-spices-masala-combo.png"
  },
  {
    id: "wheat-halwa",
    name: "Traditional Wheat Halwa",
    category: "snacks",
    shortDescription: "Rich dark Kerala wheat halwa made with fresh whole wheat milk extract, jaggery syrup, and pure ghee.",
    description: "KARUN'S Wheat Halwa is slow-cooked using extracted wheat milk, natural jaggery, cardamom, and pure ghee.",
    benefits: [
      "Melt-in-mouth soft gelatinous texture",
      "Rich in cow ghee and jaggery sweetness",
      "Traditional Kerala bakery favorite"
    ],
    sizes: ["500g - ₹200"],
    whatsappText: "Hello Karuna Enterprises,\n\nI want to buy KARUN'S Wheat Halwa (500g - ₹200).\n\nPlease share delivery details.\n\nThank you.",
    priceApprox: "₹200",
    image: "/assets/kerala-spices-masala-combo.png"
  },
  {
    id: "banana-chips",
    name: "Kerala Banana Chips",
    category: "snacks",
    shortDescription: "Crispy golden wafer-thin chips made from Nendran plantains fried in pure coconut oil.",
    description: "KARUN'S Kerala Banana Chips are crafted from hand-picked raw Nendran bananas, sliced thin and deep-fried in pure cold pressed coconut oil.",
    benefits: [
      "Fried in 100% pure coconut oil for authentic taste",
      "Zero trans-fat, artificial colors, or palm oil",
      "Crisp, crunchy, and lightly salted"
    ],
    sizes: ["1kg - ₹500"],
    whatsappText: "Hello Karuna Enterprises,\n\nI want to buy KARUN'S Kerala Banana Chips (1kg - ₹500).\n\nPlease share delivery details.\n\nThank you.",
    priceApprox: "₹500",
    image: "/assets/banana-chips.png"
  },
  {
    id: "sarkara-varatty",
    name: "Sarkara Varatty (Jaggery Banana Chips)",
    category: "snacks",
    shortDescription: "Thick banana cutlets coated in organic jaggery syrup, ginger, and cardamom powder.",
    description: "KARUN'S Sarkara Varatty features thick Nendran banana chunks fried crispy and tossed in caramelised organic jaggery syrup infused with dry ginger & cardamom.",
    benefits: [
      "Coated with pure jaggery, ginger, and cardamom",
      "Sweet, crunchy, and rich in natural iron",
      "Traditional Kerala festive sweet snack"
    ],
    sizes: ["1kg - ₹380"],
    whatsappText: "Hello Karuna Enterprises,\n\nI want to buy KARUN'S Sarkara Varatty (1kg - ₹380).\n\nPlease share delivery details.\n\nThank you.",
    priceApprox: "₹380",
    image: "/assets/sarkara-varatty.png"
  },
  {
    id: "chakka-varatty",
    name: "Chakka Varatty (Jackfruit Preserve)",
    category: "snacks",
    shortDescription: "Authentic slow-cooked jackfruit jam made with ripe Varikka chakka, pure jaggery, and ghee.",
    description: "KARUN'S Chakka Varatty is prepared by slow-cooking sweet ripe jackfruit bulbs with dark jaggery syrup and pure ghee for hours in traditional bronze uruli.",
    benefits: [
      "100% natural sweet preserve with zero added sugar",
      "Rich in natural antioxidants and fiber",
      "Can be stored for months or used for Elayappam & Payasam"
    ],
    sizes: ["1kg - ₹800"],
    whatsappText: "Hello Karuna Enterprises,\n\nI want to buy KARUN'S Chakka Varatty (1kg - ₹800).\n\nPlease share delivery details.\n\nThank you.",
    priceApprox: "₹800",
    image: "/assets/chakka-varatty.png"
  },
  {
    id: "chakka-halwa",
    name: "Kerala Chakka Halwa",
    category: "snacks",
    shortDescription: "Mouth-watering sweet jackfruit halwa made with pure ghee, jaggery, and roasted cashews.",
    description: "KARUN'S Chakka Halwa is a dense, fudge-like traditional Kerala dessert cooked with jackfruit pulp, jaggery, cardamom, ghee, and crunchy cashews.",
    benefits: [
      "Authentic homestyle sweet made with real jackfruit",
      "Rich in ghee, nuts, and organic jaggery",
      "Free from artificial flavors or synthetic colors"
    ],
    sizes: ["1kg - ₹900"],
    whatsappText: "Hello Karuna Enterprises,\n\nI want to buy KARUN'S Chakka Halwa (1kg - ₹900).\n\nPlease share delivery details.\n\nThank you.",
    priceApprox: "₹900",
    image: "/assets/chakka-halwa.png"
  },
  {
    id: "pulinji",
    name: "Authentic Kerala Pulinji (Inji Puli)",
    category: "snacks",
    shortDescription: "Tangy sweet and spicy ginger tamarind relish. Iconic taste-enhancer for Kerala Sadya.",
    description: "KARUN'S Pulinji (Inji Puli) is prepared by simmering finely diced ginger, green chillies, dark tamarind extract, and jaggery in sesame oil.",
    benefits: [
      "Combines 6 tastes: sweet, sour, spicy, salty & bitter",
      "Aids digestion after heavy festive meals",
      "Handcrafted homestyle recipe"
    ],
    sizes: ["150g - ₹80"],
    whatsappText: "Hello Karuna Enterprises,\n\nI want to buy KARUN'S Pulinji / Inji Puli (150g - ₹80).\n\nPlease share delivery details.\n\nThank you.",
    priceApprox: "₹80",
    image: "/assets/kerala-spices-masala-combo.png"
  },
  {
    id: "vadukapuli-pickle",
    name: "Vadukapuli Pickle (Wild Lemon Pickle)",
    category: "snacks",
    shortDescription: "Traditional Kerala wild lemon pickle cured with spices and sesame oil. Bold tangy flavor.",
    description: "KARUN'S Vadukapuli Pickle is made from wild Kerala lemons spiced with chilli powder, asafoetida, mustard seeds, and gingelly oil.",
    benefits: [
      "Made from authentic Vadukapuli wild lemons",
      "Matured naturally in sesame oil and spices",
      "Zesty companion for rice and kanji"
    ],
    sizes: ["250g - ₹80"],
    whatsappText: "Hello Karuna Enterprises,\n\nI want to buy KARUN'S Vadukapuli Pickle (250g - ₹80).\n\nPlease share delivery details.\n\nThank you.",
    priceApprox: "₹80",
    image: "/assets/kerala-spices-masala-combo.png"
  },

  // --- DRY FRUITS & NUTS ---
  {
    id: "cashew",
    name: "Nadan Pure Cashews",
    category: "nuts",
    shortDescription: "Premium whole cashew nuts (W240/W320 grade). Creamy, crunchy, and rich in healthy fats.",
    description: "KARUN'S Premium Cashews are hand-picked from quality cashew orchards in Kerala. Crisp, whole kernels with a naturally sweet creamy taste.",
    benefits: [
      "100% whole whole cashews with zero broken pieces",
      "Rich in plant protein, magnesium, and healthy fats",
      "Ideal for snack bowls, kheer, and festive gifting"
    ],
    sizes: ["1kg - ₹1350"],
    whatsappText: "Hello Karuna Enterprises,\n\nI want to buy KARUN'S Nadan Pure Cashews (1kg - ₹1350).\n\nPlease share delivery details.\n\nThank you.",
    priceApprox: "₹1350",
    image: "/assets/cashew.png"
  },
  {
    id: "badam",
    name: "Premium Badam (Almonds)",
    category: "nuts",
    shortDescription: "High-grade California almonds rich in Vitamin E, fiber, and brain-boosting nutrients.",
    description: "KARUN'S Premium Badam almonds are carefully selected for uniform size, crunchy bite, and sweet natural nut flavor.",
    benefits: [
      "High in Vitamin E, protein, and dietary fiber",
      "Supports memory, heart health, and energy levels",
      "Perfect for daily soaking and healthy snacking"
    ],
    sizes: ["1kg - ₹1300"],
    whatsappText: "Hello Karuna Enterprises,\n\nI want to buy KARUN'S Premium Badam (1kg - ₹1300).\n\nPlease share delivery details.\n\nThank you.",
    priceApprox: "₹1300",
    image: "/assets/badam.png"
  },
  {
    id: "walnut",
    name: "Premium Walnut Kernels",
    category: "nuts",
    shortDescription: "Extra-light brain-shaped walnut halves. Packed with Omega-3 ALA fatty acids for heart and brain health.",
    description: "KARUN'S Premium Walnut Kernels are raw, unsalted extra-light halves with crisp crunch and fresh buttery taste.",
    benefits: [
      "Highest Omega-3 fatty acid content among all nuts",
      "Boosts brain power, memory, and cardiovascular health",
      "Freshly packed to prevent bitterness or oil rancidity"
    ],
    sizes: ["1kg - ₹1650"],
    whatsappText: "Hello Karuna Enterprises,\n\nI want to buy KARUN'S Premium Walnuts (1kg - ₹1650).\n\nPlease share delivery details.\n\nThank you.",
    priceApprox: "₹1650",
    image: "/assets/walnut.png"
  }
];
