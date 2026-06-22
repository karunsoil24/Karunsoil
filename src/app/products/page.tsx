"use client";

import { Suspense } from "react";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Check, MessageCircle, Star, Sparkles } from "lucide-react";
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
        "offers": {
          "@type": "Offer",
          "priceCurrency": "INR",
          "price": product.priceApprox.replace("₹", ""),
          "availability": "https://schema.org/InStock",
          "priceValidUntil": "2027-12-31"
        }
      }
    }))
  };

  return (
    <div className="relative pt-28 pb-20 font-body text-left">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
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
                src="/assets/hero-coconut.png"
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

              <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                {flagshipProduct.description}
              </p>

              {/* Specifications checklist */}
              <div>
                <h4 className="text-xs uppercase font-bold tracking-wider text-muted-foreground mb-3">
                  Purity Standards & Sourcing details
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-foreground/85">
                  {flagshipProduct.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* B2B / Wholesale Section */}
              <div className="p-5 rounded-2xl bg-white/65 border border-primary/10 space-y-2">
                <span className="block text-[10px] uppercase font-bold tracking-widest text-primary">Wholesale & Trade Accounts</span>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  We supply private label white branding, hotel HoReCa accounts, and retail distributions across South India. Wholesale pricing quotes available immediately on inquiry.
                </p>
                <div className="flex items-center gap-4 text-xs font-semibold pt-1">
                  <span>MOQ: 15 Liters</span>
                  <span className="text-primary-glow">✓ Doorstep Cargo Shipping</span>
                </div>
              </div>

              {/* CTA row */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-4 border-t border-border/60">
                {/* Product Pricing - Waiting for final pricing
                <div className="flex flex-col text-left">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">Approximate Pricing</span>
                  <span className="font-display text-2xl font-bold text-foreground">
                    {flagshipProduct.priceApprox} <span className="text-xs font-body font-normal text-muted-foreground">/ size standard</span>
                  </span>
                  <span className="text-[10px] text-muted-foreground/80 mt-0.5">Sizes: {flagshipProduct.sizes.join(", ")}</span>
                </div>
                */}
                <div className="flex flex-col text-left">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">Availability</span>
                  <span className="font-display text-lg font-semibold text-foreground">
                    In Stock
                  </span>
                  <span className="text-[10px] text-muted-foreground/80 mt-0.5">Sizes: {flagshipProduct.sizes.join(", ")}</span>
                </div>
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
                className={`py-4 px-2 font-display text-base font-semibold uppercase tracking-wider relative transition-colors ${
                  activeCategory === tab ? "text-primary font-bold" : "text-muted-foreground hover:text-foreground"
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
                      <p className="text-sm text-foreground/80 leading-relaxed line-clamp-3">
                        {product.description}
                      </p>
                    </div>

                    {/* Benefits bullet points */}
                    <div className="pt-2">
                      <ul className="space-y-1 text-xs text-foreground/80">
                        {product.benefits.slice(0, 2).map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pack sizes chips */}
                    <div className="pt-3 border-t border-border/40">
                      <div className="flex flex-wrap gap-1.5">
                        {product.sizes.map((size) => (
                          <span
                            key={size}
                            className="bg-accent/60 border border-primary/5 text-[10px] font-semibold px-2.5 py-1 rounded-full text-foreground/90 shadow-sm"
                          >
                            {size}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Footer actions */}
                  <div className="flex items-center justify-between pt-6 border-t border-border/60 mt-6">
                    {/* Product Pricing - Waiting for final pricing
                    <div>
                      <span className="block text-[9px] uppercase font-bold tracking-wider text-muted-foreground">Approx. Price</span>
                      <span className="font-display text-lg font-bold text-foreground">
                        {product.priceApprox} <span className="text-xs font-body font-normal text-muted-foreground">/ standard</span>
                      </span>
                    </div>
                    */}
                    <div>
                      <span className="block text-[9px] uppercase font-bold tracking-wider text-muted-foreground">Availability</span>
                      <span className="text-sm font-semibold text-foreground/80">In Stock</span>
                    </div>
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center p-3 rounded-full bg-primary text-white hover:bg-primary-glow shadow-sm hover:shadow transition-all duration-300 hover:-translate-y-0.5"
                      aria-label={`Order ${product.name} on WhatsApp`}
                    >
                      <MessageCircle className="w-4.5 h-4.5" />
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

export default function Products() {
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
