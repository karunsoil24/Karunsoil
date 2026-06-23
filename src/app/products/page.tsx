import ProductsClient from "./products-client";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Products | Coconut Oil, Sesame Oil & Spice Powders | KARUN'S",
  description: "Shop our full range: cold pressed coconut oil, virgin coconut oil, sesame oil, peanut oil, and 7 authentic Kerala masala powders. FSSAI certified. Wholesale available.",
  alternates: {
    canonical: "https://www.karunsoil.com/products",
  },
  openGraph: {
    title: "Products | Coconut Oil, Sesame Oil & Spice Powders | KARUN'S",
    description: "Shop our full range: cold pressed coconut oil, virgin coconut oil, sesame oil, peanut oil, and 7 authentic Kerala masala powders. FSSAI certified. Wholesale available.",
    url: "https://www.karunsoil.com/products",
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/assets/karuna_logo.png",
        width: 512,
        height: 512,
        alt: `${siteConfig.name} Logo`,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Products | Coconut Oil, Sesame Oil & Spice Powders | KARUN'S",
    description: "Shop our full range: cold pressed coconut oil, virgin coconut oil, sesame oil, peanut oil, and 7 authentic Kerala masala powders. FSSAI certified. Wholesale available.",
    images: ["/assets/karuna_logo.png"],
  },
};

export default function Page() {
  return <ProductsClient />;
}
