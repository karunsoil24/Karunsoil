"use client";

import { Suspense } from "react";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Star, Sparkles, Tag, ShoppingBag } from "lucide-react";
import { siteConfig, getWhatsAppLink } from "@/config/site";
import { products, Product } from "@/data/products";

const categories = [
  { id: "all", label: "All" },
  { id: "oils", label: "Oils & Ghee" },
  { id: "spices", label: "Masala Powders" },
  { id: "flours", label: "Puttupodi & Podi" },
  { id: "snacks", label: "Snacks & Sweets" },
  { id: "nuts", label: "Dry Fruits & Nuts" },
];

const priceListTableData = [
  {
    category: "Oil Items",
    items: [
      {
        name: "Coconut Oil",
        details: "1L: ₹340 | 5L: ₹1650 | 12L: ₹3720 | Cold Pressed: ₹360",
        message: "Hello Karuna Enterprises,\n\nI want to buy Coconut Oil.\n\nPlease share availability and delivery details.\n\nThank you."
      },
      {
        name: "Extra Virgin Coconut Oil",
        details: "100ml: ₹100 | 250ml: ₹235 | 500ml: ₹460 | 1L: ₹900",
        message: "Hello Karuna Enterprises,\n\nI want to buy Extra Virgin Coconut Oil.\n\nPlease share delivery details.\n\nThank you."
      },
      {
        name: "Sesame Oil",
        details: "1L: ₹650",
        message: "Hello Karuna Enterprises,\n\nI want to buy Sesame Oil (1L - ₹650).\n\nPlease share delivery details.\n\nThank you."
      },
      {
        name: "Peanut Oil",
        details: "1L: ₹350",
        message: "Hello Karuna Enterprises,\n\nI want to buy Peanut Oil (1L - ₹350).\n\nPlease share delivery details.\n\nThank you."
      },
      {
        name: "Mustard Oil",
        details: "1L: ₹700",
        message: "Hello Karuna Enterprises,\n\nI want to buy Mustard Oil (1L - ₹700).\n\nPlease share delivery details.\n\nThank you."
      }
    ]
  },
  {
    category: "Masala Powders",
    items: [
      {
        name: "Red Chilli",
        details: "1kg: ₹400",
        message: "Hello Karuna Enterprises,\n\nI want to buy Red Chilli Powder (1kg - ₹400).\n\nPlease share delivery details.\n\nThank you."
      },
      {
        name: "Kashmiri Chilli",
        details: "1kg: ₹650",
        message: "Hello Karuna Enterprises,\n\nI want to buy Kashmiri Chilli Powder (1kg - ₹650).\n\nPlease share delivery details.\n\nThank you."
      },
      {
        name: "Black Pepper",
        details: "100g: ₹100",
        message: "Hello Karuna Enterprises,\n\nI want to buy Black Pepper Powder (100g - ₹100).\n\nPlease share delivery details.\n\nThank you."
      },
      {
        name: "Coriander",
        details: "1kg: ₹300",
        message: "Hello Karuna Enterprises,\n\nI want to buy Coriander Powder (1kg - ₹300).\n\nPlease share delivery details.\n\nThank you."
      },
      {
        name: "Turmeric",
        details: "1kg: ₹400",
        message: "Hello Karuna Enterprises,\n\nI want to buy Turmeric Powder (1kg - ₹400).\n\nPlease share delivery details.\n\nThank you."
      },
      {
        name: "Chicken Masala",
        details: "250g: ₹130",
        message: "Hello Karuna Enterprises,\n\nI want to buy Chicken Masala (250g - ₹130).\n\nPlease share delivery details.\n\nThank you."
      },
      {
        name: "Sambar",
        details: "250g: ₹130",
        message: "Hello Karuna Enterprises,\n\nI want to buy Sambar Powder (250g - ₹130).\n\nPlease share delivery details.\n\nThank you."
      },
      {
        name: "Garam Masala",
        details: "250g: ₹220",
        message: "Hello Karuna Enterprises,\n\nI want to buy Garam Masala (250g - ₹220).\n\nPlease share delivery details.\n\nThank you."
      },
      {
        name: "Meat Masala",
        details: "250g: ₹140",
        message: "Hello Karuna Enterprises,\n\nI want to buy Meat Masala (250g - ₹140).\n\nPlease share delivery details.\n\nThank you."
      },
      {
        name: "Biriyani Masala",
        details: "250g: ₹180",
        message: "Hello Karuna Enterprises,\n\nI want to buy Biriyani Masala (250g - ₹180).\n\nPlease share delivery details.\n\nThank you."
      }
    ]
  },
  {
    category: "Puttupodi & Flours",
    items: [
      {
        name: "Rice Puttupodi",
        details: "500g: ₹50",
        message: "Hello Karuna Enterprises,\n\nI want to buy Rice Puttupodi (500g - ₹50).\n\nPlease share delivery details.\n\nThank you."
      },
      {
        name: "Wheat Puttupodi",
        details: "500g: ₹70",
        message: "Hello Karuna Enterprises,\n\nI want to buy Wheat Puttupodi (500g - ₹70).\n\nPlease share delivery details.\n\nThank you."
      },
      {
        name: "Ragi Puttupodi",
        details: "500g: ₹85",
        message: "Hello Karuna Enterprises,\n\nI want to buy Ragi Puttupodi (500g - ₹85).\n\nPlease share delivery details.\n\nThank you."
      },
      {
        name: "Ragi Sprouted",
        details: "500g: ₹85",
        message: "Hello Karuna Enterprises,\n\nI want to buy Sprouted Ragi Flour (500g - ₹85).\n\nPlease share delivery details.\n\nThank you."
      },
      {
        name: "Corn Puttupodi",
        details: "500g: ₹85",
        message: "Hello Karuna Enterprises,\n\nI want to buy Corn Puttupodi (500g - ₹85).\n\nPlease share delivery details.\n\nThank you."
      },
      {
        name: "Kuthari Chemba",
        details: "500g: ₹70",
        message: "Hello Karuna Enterprises,\n\nI want to buy Kuthari Chemba Puttupodi (500g - ₹70).\n\nPlease share delivery details.\n\nThank you."
      },
      {
        name: "Chammanthi Podi",
        details: "100g: ₹80",
        message: "Hello Karuna Enterprises,\n\nI want to buy Chammanthi Podi (100g - ₹80).\n\nPlease share delivery details.\n\nThank you."
      },
      {
        name: "Idly Dosa Podi",
        details: "500g: ₹60",
        message: "Hello Karuna Enterprises,\n\nI want to buy Idly Dosa Podi (500g - ₹60).\n\nPlease share delivery details.\n\nThank you."
      }
    ]
  },
  {
    category: "Snacks & Specialties",
    items: [
      {
        name: "Rice Pappadam",
        details: "500g: ₹225",
        message: "Hello Karuna Enterprises,\n\nI want to buy Rice Pappadam (500g - ₹225).\n\nPlease share delivery details.\n\nThank you."
      },
      {
        name: "Rice Kondattam",
        details: "400g: ₹150",
        message: "Hello Karuna Enterprises,\n\nI want to buy Rice Kondattam (400g - ₹150).\n\nPlease share delivery details.\n\nThank you."
      },
      {
        name: "Bitter Gourd Fry",
        details: "100g: ₹80",
        message: "Hello Karuna Enterprises,\n\nI want to buy Bitter Gourd Fry (100g - ₹80).\n\nPlease share delivery details.\n\nThank you."
      },
      {
        name: "Cord Chilly (Curd Chilly)",
        details: "100g: ₹100",
        message: "Hello Karuna Enterprises,\n\nI want to buy Cord Chilly (100g - ₹100).\n\nPlease share delivery details.\n\nThank you."
      },
      {
        name: "Arrowroot Powder",
        details: "500g: ₹700",
        message: "Hello Karuna Enterprises,\n\nI want to buy Arrowroot Powder (500g - ₹700).\n\nPlease share delivery details.\n\nThank you."
      },
      {
        name: "Jackfruit Powder",
        details: "500g: ₹400",
        message: "Hello Karuna Enterprises,\n\nI want to buy Jackfruit Powder (500g - ₹400).\n\nPlease share delivery details.\n\nThank you."
      },
      {
        name: "Wheat Halwa",
        details: "500g: ₹200",
        message: "Hello Karuna Enterprises,\n\nI want to buy Wheat Halwa (500g - ₹200).\n\nPlease share delivery details.\n\nThank you."
      },
      {
        name: "Banana Chips",
        details: "1kg: ₹500",
        message: "Hello Karuna Enterprises,\n\nI want to buy Banana Chips (1kg - ₹500).\n\nPlease share delivery details.\n\nThank you."
      },
      {
        name: "Sarkara Varatty",
        details: "1kg: ₹380",
        message: "Hello Karuna Enterprises,\n\nI want to buy Sarkara Varatty (1kg - ₹380).\n\nPlease share delivery details.\n\nThank you."
      },
      {
        name: "Chakka Varatty",
        details: "1kg: ₹800",
        message: "Hello Karuna Enterprises,\n\nI want to buy Chakka Varatty (1kg - ₹800).\n\nPlease share delivery details.\n\nThank you."
      },
      {
        name: "Chakka Halwa",
        details: "1kg: ₹900",
        message: "Hello Karuna Enterprises,\n\nI want to buy Chakka Halwa (1kg - ₹900).\n\nPlease share delivery details.\n\nThank you."
      },
      {
        name: "Pulinji",
        details: "150g: ₹80",
        message: "Hello Karuna Enterprises,\n\nI want to buy Pulinji (150g - ₹80).\n\nPlease share delivery details.\n\nThank you."
      },
      {
        name: "Vadukapuli Pickle",
        details: "250g: ₹80",
        message: "Hello Karuna Enterprises,\n\nI want to buy Vadukapuli Pickle (250g - ₹80).\n\nPlease share delivery details.\n\nThank you."
      },
      {
        name: "Nadan Ghee",
        details: "1L: ₹1200",
        message: "Hello Karuna Enterprises,\n\nI want to buy Nadan Ghee (1L - ₹1200).\n\nPlease share delivery details.\n\nThank you."
      },
      {
        name: "Cashew",
        details: "1kg: ₹1350",
        message: "Hello Karuna Enterprises,\n\nI want to buy Cashew (1kg - ₹1350).\n\nPlease share delivery details.\n\nThank you."
      },
      {
        name: "Badam",
        details: "1kg: ₹1300",
        message: "Hello Karuna Enterprises,\n\nI want to buy Badam (1kg - ₹1300).\n\nPlease share delivery details.\n\nThank you."
      },
      {
        name: "Walnut",
        details: "1kg: ₹1650",
        message: "Hello Karuna Enterprises,\n\nI want to buy Walnut (1kg - ₹1650).\n\nPlease share delivery details.\n\nThank you."
      }
    ]
  }
];

function ProductsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category") || "all";

  const handleCategoryChange = (category: string) => {
    if (category === "all") {
      router.push("/products");
    } else {
      router.push(`/products?category=${category}`);
    }
  };

  const productList = products;
  const flagshipProduct = products.find((p) => p.id === "coconut-oil")!;

  const filteredProducts = productList.filter((product) => {
    if (activeCategory === "all") {
      return product.id !== "coconut-oil";
    }
    return product.category === activeCategory;
  });

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "numberOfItems": productList.length,
    "itemListElement": productList.map((product, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "@id": `${siteConfig.url}/products#${product.id}`,
        "name": product.name,
        "sku": product.id,
        "description": `${product.shortDescription} Manufactured by Karuna Enterprises in Chelakkara, Thrissur, Kerala.`,
        "image": `${siteConfig.url}${product.image}`,
        "brand": {
          "@type": "Brand",
          "name": "KARUN'S"
        },
        "manufacturer": {
          "@type": "Organization",
          "name": "Karuna Enterprises",
          "url": siteConfig.url
        },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "INR",
          "price": product.priceApprox.replace(/[^0-9]/g, ""),
          "itemCondition": "https://schema.org/NewCondition",
          "availability": "https://schema.org/InStock",
          "priceValidUntil": "2027-12-31",
          "seller": {
            "@type": "Organization",
            "name": "Karuna Enterprises"
          }
        }
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteConfig.url
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Products",
        "item": `${siteConfig.url}/products`
      }
    ]
  };

  return (
    <div className="relative pt-28 pb-20 font-body text-left">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Crawlable GEO/AEO Summary Block for Search Engines & AI Crawlers */}
      <div className="sr-only" aria-hidden="false">
        <h2>KARUN&apos;S Complete Product Price List and Catalog</h2>
        <p>
          Karuna Enterprises manufactures 100% pure cold pressed oils, virgin coconut oil, pure cow ghee, authentic Kerala masala powders, puttupodi flours, traditional snacks, pickles, and dry fruits in Chelakkara, Thrissur, Kerala. All India delivery available.
        </p>
        <ul>
          {products.map((p) => (
            <li key={p.id}>
              <strong>{p.name}</strong>: {p.shortDescription} Pack sizes &amp; prices: {p.sizes.join(", ")}. Manufactured by KARUN&apos;S.
            </li>
          ))}
        </ul>
      </div>

      {/* Background decoration */}
      <div className="absolute top-[10%] right-[-5%] w-[450px] h-[450px] rounded-full bg-primary/8 blur-[110px] pointer-events-none -z-10 animate-float-slow" />
      <div className="absolute bottom-[20%] left-[-5%] w-[550px] h-[550px] rounded-full bg-accent/20 blur-[130px] pointer-events-none -z-10 animate-float-soft" />

      {/* --- FLAGSHIP PRODUCT FEATURED SECTION --- */}
      {(activeCategory === "all" || activeCategory === "oils") && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 mb-16">
          <div className="text-center md:text-left mb-6">
            <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-2">Our Signature Product</span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">Featured Flagship Oil</h2>
          </div>

          {/* Featured Row Layout Card */}
          <div className="relative overflow-hidden bg-gradient-to-br from-[#F0F2EB] to-[#FAF9F5] rounded-[2.5rem] border border-primary/20 p-8 sm:p-12 shadow-md hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Corner Decorative Star */}
            <div className="absolute top-6 right-6 text-gold shrink-0">
              <Sparkles className="w-8 h-8 opacity-40 animate-pulse" />
            </div>

            {/* Left Column: Flagship Image */}
            <div className="lg:col-span-5 relative w-full aspect-square rounded-3xl overflow-hidden border border-white/60 shadow-lg">
              <Image
                src="/assets/cold-pressed-coconut-oil-karuns-kerala.png"
                alt="KARUN'S Flagship Cold Pressed Coconut Oil - Pure Kerala Coconut Oil from Chelakkara, Thrissur"
                fill
                priority
                quality={85}
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 420px"
              />
              <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md">
                ✓ Flagship Choice
              </div>
            </div>

            {/* Right Column: Flagship Specs */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current text-gold" />
                  ))}
                </div>
                <span className="text-xs font-semibold text-foreground/80">Premium Grade · FSSAI Approved</span>
              </div>

              <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
                {flagshipProduct.name}
              </h1>

              <p className="text-sm sm:text-base text-foreground/85 leading-relaxed font-medium">
                {flagshipProduct.shortDescription}
              </p>

              {/* Price & Sizes */}
              <div className="flex items-center gap-2 flex-wrap">
                <Tag className="w-4 h-4 text-primary shrink-0" />
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Prices:</span>
                {flagshipProduct.sizes.map((s, idx) => (
                  <span key={idx} className="bg-primary/10 text-primary border border-primary/20 text-xs font-bold px-3 py-1 rounded-full">
                    {s}
                  </span>
                ))}
              </div>

              {/* Key Benefits */}
              <div className="pt-2">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {flagshipProduct.benefits.slice(0, 4).map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-1.5 text-sm text-foreground/85">
                      <span className="text-primary font-bold shrink-0">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA row */}
              <div className="pt-4 border-t border-border/60 flex justify-end">
                <a
                  href={getWhatsAppLink(flagshipProduct.whatsappText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-body text-xs font-bold uppercase tracking-wider text-white bg-primary px-7 py-4 rounded-full hover:bg-primary-glow shadow-sm hover:shadow transition-all duration-300 hover:-translate-y-0.5 group"
                >
                  Buy Now on WhatsApp
                  <MessageCircle className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:scale-110" />
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* --- HERO HEADER / CATEGORY INTRO --- */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-6 mb-10">
        <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-3">
          KARUN&apos;S OIL MILL CHELAKKARA
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-[1.15] mb-4">
          Explore Our Pure Food Products
        </h2>
        <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Cold pressed edible oils, pure ghee, roasted spices, puttupodi, traditional snacks, and dry fruits. All India Delivery.
        </p>
      </section>

      {/* --- TABS / FILTER --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex justify-start md:justify-center border-b border-border overflow-x-auto no-scrollbar pb-1">
          <div className="flex gap-2 sm:gap-4 min-w-max">
            {categories.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleCategoryChange(tab.id)}
                className={`py-3 px-4 rounded-full font-display text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 relative whitespace-nowrap ${
                  activeCategory === tab.id
                    ? "bg-primary text-white shadow-sm font-bold"
                    : "bg-card border border-border text-foreground/80 hover:bg-accent hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* --- PRODUCTS LIST (GRID VIEW) --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => {
              const waLink = getWhatsAppLink(product.whatsappText);

              return (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
                  className="group bg-card rounded-3xl border border-border p-6 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  <div className="space-y-5">
                    {/* Image Container with Fast Loading Responsive Optimization */}
                    <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden bg-muted border border-border/80 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                      <Image
                        src={product.image}
                        alt={`KARUN'S ${product.name} - Pure Kerala Food Product from Chelakkara, Thrissur`}
                        width={600}
                        height={800}
                        quality={85}
                        loading="lazy"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                      {product.isPrimary && (
                        <span className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                          Flagship Product
                        </span>
                      )}
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="font-display text-xl font-bold text-foreground">
                        {product.name}
                      </h3>
                      {/* Short Description */}
                      <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed">
                        {product.shortDescription}
                      </p>

                      {/* Sizes & Prices Pill Badges */}
                      <div className="pt-1 flex flex-wrap gap-1.5">
                        {product.sizes.map((size, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center text-[11px] font-bold bg-accent/80 text-foreground/90 border border-border px-2.5 py-0.5 rounded-full"
                          >
                            {size}
                          </span>
                        ))}
                      </div>

                      {/* Key Benefits (max 3, prefixed with ✓) */}
                      <div className="pt-2">
                        <ul className="space-y-1.5">
                          {product.benefits.slice(0, 3).map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-1.5 text-xs text-foreground/85">
                              <span className="text-primary font-bold shrink-0">✓</span>
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Footer Action */}
                  <div className="pt-5 border-t border-border/60 mt-6 flex justify-end">
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-primary text-white hover:bg-primary-glow shadow-sm hover:shadow transition-all duration-300 hover:-translate-y-0.5 text-xs font-bold uppercase tracking-wider group"
                      aria-label={`Buy ${product.name} on WhatsApp`}
                    >
                      <span>Buy Now on WhatsApp</span>
                      <MessageCircle className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:scale-110" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </section>

      {/* ================= PRICE LIST TABLE SECTION ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16">
        <div className="bg-gradient-to-br from-card via-background to-accent/30 rounded-[2.5rem] border border-border p-6 sm:p-10 md:p-12 shadow-lg relative overflow-hidden">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-border">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <ShoppingBag className="w-5 h-5 text-primary" />
                <span className="text-xs font-bold text-primary uppercase tracking-widest">
                  KARUN&apos;S OIL MILL CHELAKKARA
                </span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                Product Price List
              </h2>
            </div>
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 px-4 py-2 rounded-full shadow-sm">
                ✓ All India Delivery Available
              </span>
            </div>
          </div>

          {/* Tables Grouped by Category */}
          <div className="space-y-12">
            {priceListTableData.map((catGroup, idx) => (
              <div key={idx} className="space-y-4">
                <h3 className="font-display text-xl font-bold text-foreground flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary inline-block" />
                  {catGroup.category}
                </h3>

                <div className="overflow-x-auto rounded-2xl border border-border/80 bg-card shadow-sm">
                  <table className="w-full text-left border-collapse font-body text-sm">
                    <thead>
                      <tr className="bg-accent/60 text-foreground/90 font-display text-xs uppercase tracking-wider border-b border-border">
                        <th className="py-4 px-6 font-bold">Product Name</th>
                        <th className="py-4 px-6 font-bold">Pack Quantity / Variant &amp; Price</th>
                        <th className="py-4 px-6 font-bold text-right">Order Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/60 text-foreground/85">
                      {catGroup.items.map((item, itemIdx) => {
                        const waUrl = getWhatsAppLink(item.message);
                        return (
                          <tr
                            key={itemIdx}
                            className="hover:bg-accent/40 transition-colors duration-150 group"
                          >
                            <td className="py-4 px-6 font-semibold text-foreground font-display text-base">
                              {item.name}
                            </td>
                            <td className="py-4 px-6 font-medium text-foreground/90">
                              <span className="inline-block bg-primary/8 text-primary border border-primary/15 px-3 py-1 rounded-full text-xs font-bold">
                                {item.details}
                              </span>
                            </td>
                            <td className="py-4 px-6 text-right">
                              <a
                                href={waUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white bg-primary hover:bg-primary-glow px-4 py-2 rounded-full shadow-sm hover:shadow transition-all duration-200 hover:-translate-y-0.5"
                                aria-label={`Buy ${item.name} on WhatsApp`}
                              >
                                <span>Buy Now</span>
                                <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                              </a>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Callout */}
          <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p className="text-xs sm:text-sm text-muted-foreground">
              Need custom quantities, bulk wholesale rates, or franchise details? Contact us directly on WhatsApp.
            </p>
            <a
              href={getWhatsAppLink("Hello Karuna Enterprises,\n\nI want to inquire about bulk ordering / wholesale prices.\n\nPlease assist me.\n\nThank you.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary hover:text-primary-glow font-body transition-colors"
            >
              <span>Wholesale &amp; Bulk Enquiry</span>
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}

export default function ProductsClient() {
  return (
    <Suspense fallback={
      <div className="pt-40 pb-20 max-w-7xl mx-auto px-4 text-center">
        <span className="text-muted-foreground animate-pulse text-sm font-medium uppercase tracking-widest">Loading Catalog...</span>
      </div>
    }>
      <ProductsContent />
    </Suspense>
  );
}
