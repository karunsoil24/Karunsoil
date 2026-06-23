import HomeClient from "./home-client";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "KARUN'S | Cold Pressed Coconut Oil & Spice Products Kerala",
  description: "Shop 100% pure cold pressed coconut oil, virgin coconut oil, sesame oil, peanut oil & authentic Kerala masala powders. FSSAI certified. Direct from Thrissur factory.",
  alternates: {
    canonical: "https://www.karunsoil.com/",
  },
  openGraph: {
    title: "KARUN'S | Cold Pressed Coconut Oil & Spice Products Kerala",
    description: "Shop 100% pure cold pressed coconut oil, virgin coconut oil, sesame oil, peanut oil & authentic Kerala masala powders. FSSAI certified. Direct from Thrissur factory.",
    url: "https://www.karunsoil.com/",
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
    title: "KARUN'S | Cold Pressed Coconut Oil & Spice Products Kerala",
    description: "Shop 100% pure cold pressed coconut oil, virgin coconut oil, sesame oil, peanut oil & authentic Kerala masala powders. FSSAI certified. Direct from Thrissur factory.",
    images: ["/assets/karuna_logo.png"],
  },
};

export default function Page() {
  return <HomeClient />;
}
