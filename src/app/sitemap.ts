import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { products } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url || "https://www.karunsoil.com";
  const currentDate = new Date();

  // Core static pages with specified priorities and frequencies
  const sitemapEntries: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // Dynamically include any product-specific subroutes
  if (products && Array.isArray(products)) {
    products.forEach((product) => {
      sitemapEntries.push({
        url: `${baseUrl}/products/${product.id}`,
        lastModified: currentDate,
        changeFrequency: "weekly",
        priority: 0.8,
      });
    });
  }

  return sitemapEntries;
}
