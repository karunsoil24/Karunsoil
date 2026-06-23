import FAQClient from "./faq-client";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "FAQ | KARUN'S Cold Pressed Oils & Spice Products",
  description: "Answers to frequently asked questions about our coconut oil, sesame oil, peanut oil, and spice powders. Purity, shelf life, wholesale, and delivery details.",
  alternates: {
    canonical: "https://www.karunsoil.com/faq",
  },
  openGraph: {
    title: "FAQ | KARUN'S Cold Pressed Oils & Spice Products",
    description: "Answers to frequently asked questions about our coconut oil, sesame oil, peanut oil, and spice powders. Purity, shelf life, wholesale, and delivery details.",
    url: "https://www.karunsoil.com/faq",
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
    title: "FAQ | KARUN'S Cold Pressed Oils & Spice Products",
    description: "Answers to frequently asked questions about our coconut oil, sesame oil, peanut oil, and spice powders. Purity, shelf life, wholesale, and delivery details.",
    images: ["/assets/karuna_logo.png"],
  },
};

export default function Page() {
  return <FAQClient />;
}
