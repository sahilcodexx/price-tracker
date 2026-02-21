"use server";

import { scrapProduct } from "@/lib/superbase/firecrawl";
import { createClient } from "@/lib/superbase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  revalidatePath("/");
  redirect("/");
}

export async function addProdcut(formData: FormData) {
  const url = formData.get("url") as string;

  if (!url) {
    return { error: "Url is Required" };
  }

  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return { error: "Not authenticated" };
    }
    const productData = await scrapProduct(url);
    if (!productData.productName || !productData.currentPrice) {
      console.log(productData, "productData");
      return { error: "Could not extract product information form this url" };
    }

    const newPrice = productData.currentPrice;
    const currency = productData.currencyCode || "INR";

    const { data: exisitingProduct } = await supabase
      .from("products")
      .select("id, current_price")
      .eq("user_id", user.id)
      .eq("url", url)
      .single();

    const isUpdate = !!exisitingProduct;

    const { data: product, error } = await supabase
      .from("products")
      .upsert(
        {
          user_id: user.id,
          url,
          name: productData.productName,
          current_price: newPrice,
          currency: currency,
          image_url: productData.productImageUrl,
          updated_at: new Date().toISOString(),
        },
        {
          onConflict: "user_id,url",
          ignoreDuplicates: false,
        },
      )
      .select()
      .single();
    const shouldAddHistory =
      !isUpdate || exisitingProduct.current_price !== newPrice;
    if (error) throw error;
    if (shouldAddHistory) {
      await supabase.from("price_history").insert({
        product_id: product.id,
        price: newPrice,
        currency: currency,
      });
    }

    revalidatePath("/");
  } catch (error: unknown) {
    console.error("Add product error:", error);
    return { error: error instanceof Error ? error.message : "Failed to add product" };
  }
}
