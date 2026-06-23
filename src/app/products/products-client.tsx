"use client";

import { Suspense } from "react";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Star, Sparkles } from "lucide-react";
import { siteConfig, getWhatsAppLink } from "@/config/site";
import { products } from "@/data/products";

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

  // Separate flagship product
  const flagshipProduct = products.find((p) => p.id === "coconut-oil")!;

  const filteredProducts = productList.filter((product) => {
    // If viewing spices, show spices.
    if (activeCategory === "spices") {
      return ["coriander", "sambar", "chilli", "turmeric", "garam-masala", "chicken-masala"].includes(product.id);
    }
    // If viewing oils, show other oils (excluding flagship which is featured separately)
    if (activeCategory === "oils") {
      return ["sesame-oil", "peanut-oil"].includes(product.id);
    }
    // If viewing all, show all except flagship (which is featured at the top)
    return product.id !== "coconut-oil";
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
        "name": product.name,
        "description": product.shortDescription,
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
          "price": product.priceApprox.replace("₹", ""),
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

      {/* Background decoration */}
      <div className="absolute top-[10%] right-[-5%] w-[450px] h-[450px] rounded-full bg-primary/8 blur-[110px] pointer-events-none -z-10 animate-float-slow" />
      <div className="absolute bottom-[20%] left-[-5%] w-[550px] h-[550px] rounded-full bg-accent/20 blur-[130px] pointer-events-none -z-10 animate-float-soft" />

      {/* --- FLAGSHIP PRODUCT FEATURED SECTION (Viewed when All or Oils is active) --- */}
      {activeCategory !== "spices" && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
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
                alt="KARUN'S Flagship Cold Pressed Coconut Oil"
                fill
                className="object-cover"
                sizes="(max-w-720px) 100vw, 420px"
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

              {/* Key Benefits */}
              <div className="pt-2">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {flagshipProduct.benefits.slice(0, 3).map((benefit, idx) => (
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
                  Order Flagship Oil
                  <MessageCircle className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:scale-110" />
                </a>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* --- HERO HEADER / CATEGORY INTRO --- */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-10 mb-12">
        <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-4">
          All Products
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-[1.15] mb-6">
          Explore Our Food Product Catalog
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          From unrefined cold pressed oils to traditional spices ground fresh in Chelakkara, Thrissur. Select a category below.
        </p>
      </section>

      {/* --- TABS / FILTER --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex justify-center border-b border-border">
          <div className="flex gap-8">
            {["all", "oils", "spices"].map((tab) => (
              <button
                key={tab}
                onClick={() => handleCategoryChange(tab)}
                className={`py-4 px-2 font-display text-base font-semibold uppercase tracking-wider relative transition-colors ${activeCategory === tab ? "text-primary font-bold" : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {tab}
                {activeCategory === tab && (
                  <motion.div
                    className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-primary"
                    layoutId="activeTabIndicator"
                  />
                )}
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
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
                  className="group bg-card rounded-3xl border border-border p-6 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  <div className="space-y-5">
                    {/* Image Container */}
                    <div className="relative w-full aspect-[1086/1448] rounded-3xl overflow-hidden bg-muted border border-border/80 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={1086}
                        height={1448}
                        quality={90}
                        loading="lazy"
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                      {"isPrimary" in product && product.isPrimary && (
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
                      {/* 1-Line Description */}
                      <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed">
                        {product.shortDescription}
                      </p>

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
                      aria-label={`Order ${product.name} on WhatsApp`}
                    >
                      <span>Order on WhatsApp</span>
                      <MessageCircle className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:scale-110" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}

export default function ProductsClient() {
  return (
    <Suspense fallback={
      <div className="pt-40 pb-20 max-w-7xl mx-auto px-4 text-center">
        <span className="text-muted-foreground animate-pulse text-sm font-medium uppercase tracking-widest animate-pulse">Loading Catalog...</span>
      </div>
    }>
      <ProductsContent />
    </Suspense>
  );
}
