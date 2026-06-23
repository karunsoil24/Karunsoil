import type { Metadata } from "next";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import { siteConfig, getWhatsAppLink } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact KARUN'S | Chelakkara, Thrissur, Kerala",
  description: "Contact Karuna Enterprises in Chelakkara, Thrissur, Kerala. Enquire for wholesale pricing, retail delivery, or B2B manufacturing.",
  alternates: {
    canonical: "https://www.karunsoil.com/contact",
  },
  openGraph: {
    title: "Contact KARUN'S | Chelakkara, Thrissur, Kerala",
    description: "Contact Karuna Enterprises in Chelakkara, Thrissur, Kerala. Enquire for wholesale pricing, retail delivery, or B2B manufacturing.",
    url: "https://www.karunsoil.com/contact",
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
    title: "Contact KARUN'S | Chelakkara, Thrissur, Kerala",
    description: "Contact Karuna Enterprises in Chelakkara, Thrissur, Kerala. Enquire for wholesale pricing, retail delivery, or B2B manufacturing.",
    images: ["/assets/karuna_logo.png"],
  },
};

export default function Contact() {
  return (
    <div className="relative pt-28 pb-20 font-body text-left">
      {/* Background blobs */}
      <div className="absolute top-[10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-primary/10 blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] right-[-5%] w-[500px] h-[500px] rounded-full bg-accent/15 blur-[120px] pointer-events-none -z-10" />

      {/* --- HERO HEADER --- */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-10 mb-16">
        <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-4">
          Connect With Us
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-foreground leading-[1.15] mb-6">
          Contact Karuna Enterprises
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Reach out for wholesale pricing, B2B manufacturing contracts, retail home delivery orders, or visiting our manufacturing unit in Thrissur.
        </p>
      </section>

      {/* --- CONTENT GRID --- */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Address Card */}
          <div className="bg-card border border-border p-6 rounded-[2rem] shadow-sm flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="text-left">
              <h4 className="font-display font-bold text-foreground mb-1">Our Address</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong>{siteConfig.legalName}</strong>
                <br />
                Chelakkara, Thrissur
                <br />
                Kerala, India - 680586
              </p>
            </div>
          </div>

          {/* Phone Card */}
          <div className="bg-card border border-border p-6 rounded-[2rem] shadow-sm flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div className="text-left">
              <h4 className="font-display font-bold text-foreground mb-1">Phone Number</h4>
              <p className="text-sm text-muted-foreground">
                <a href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`} className="hover:text-primary transition-colors">
                  {siteConfig.phoneFormatted}
                </a>
                <span className="block text-xs text-muted-foreground/80 mt-0.5">(Mon - Sat, 9:00 AM - 6:00 PM IST)</span>
              </p>
            </div>
          </div>

          {/* Email Card */}
          <div className="bg-card border border-border p-6 rounded-[2rem] shadow-sm flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div className="text-left">
              <h4 className="font-display font-bold text-foreground mb-1">Email Address</h4>
              <p className="text-sm text-muted-foreground">
                <a href={`mailto:${siteConfig.email}`} className="hover:text-primary transition-colors">
                  {siteConfig.email}
                </a>
                <span className="block text-xs text-muted-foreground/80 mt-0.5">We reply within 24 working hours</span>
              </p>
            </div>
          </div>

          {/* Quick WhatsApp Support */}
          <div className="bg-primary/5 border border-primary/20 p-6 rounded-[2rem] shadow-sm flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div className="text-left">
              <h4 className="font-display font-bold text-foreground mb-1">Instant Support</h4>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                Click below to chat immediately on WhatsApp for pricing queries.
              </p>
              <a
                href={getWhatsAppLink("Hello Karuna Enterprises,\n\nI want to chat with your support team regarding product catalogs.\n\nPlease assist me.\n\nThank you.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary uppercase tracking-wider hover:text-primary-glow font-body transition-colors"
              >
                Start Chatting Now &rarr;
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* --- CONTACT CTA --- */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <div className="bg-primary text-white rounded-[2rem] p-8 sm:p-12 shadow-xl border border-primary-glow/20 relative overflow-hidden">
          <div className="absolute top-[-50%] left-[-20%] w-[300px] h-[300px] rounded-full bg-white/5 blur-[80px]" />
          <div className="absolute bottom-[-50%] right-[-20%] w-[300px] h-[300px] rounded-full bg-white/5 blur-[80px]" />

          <div className="relative max-w-xl mx-auto space-y-6 flex flex-col items-center">
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Ready to Place an Order?
            </h2>
            <p className="font-body text-sm sm:text-base text-white/80 leading-relaxed max-w-md mx-auto">
              Get in touch with our team directly through WhatsApp for product enquiries, pricing, and delivery information.
            </p>
            <div className="pt-2">
              <a
                href={getWhatsAppLink("Hello Karuna Enterprises,\n\nI want to place an order or make a business enquiry.\n\nPlease share your current product catalog and delivery options.\n\nThank you.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body text-xs font-bold uppercase tracking-wider text-primary bg-white hover:bg-white/90 px-8 py-4.5 rounded-full shadow transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                <MessageSquare className="w-5 h-5 shrink-0" />
                Order on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
