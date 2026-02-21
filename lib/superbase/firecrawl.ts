import FirecrawlApp from "@mendable/firecrawl-js";
import { ScrapedProduct } from "@/utils/types";

const app = new FirecrawlApp({
  apiKey: process.env.FIRECRAWLER_API_KEY,
});

export async function scrapProduct(url: string): Promise<ScrapedProduct> {
  try {
    const result = await app.scrape(url, {
      formats: [
        {
          type: "json",
          prompt: "",
          schema: {
            type: "object",
            required: ["productName", "currentPrice"],
            properties: {
              productName: { type: "string" },
              currentPrice: { type: "number" },
              currencyCode: { type: "string" },
              productImageUrl: { type: "string" },
            },
            prompt:
              "Extract the product name as 'productName', current price as a number as 'currentPrice', currency code (USD, EUR, etc) as 'currencyCode', and product image URL as 'productImageUrl' if available",
          },
        },
      ],
    });
    const extractedData = result.json as ScrapedProduct;

    if (!extractedData || !extractedData.productName) {
      throw new Error("No data extracted from URL");
    }
    return extractedData;
  } catch (error: unknown) {
    console.error("Firecrawl scrap error");
    throw new Error(`Failed to srcap product: ${error instanceof Error ? error.message : "Unknown error"}`);
  }
}
