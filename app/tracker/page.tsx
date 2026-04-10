import Container from "@/common/container";

import ProductForm from "@/components/prodcut-form";
import ProductCard from "@/components/product-card";
import { TrendingDown } from "lucide-react";
import { createClient } from "@/lib/superbase/server";
import { Badge } from "@/components/ui/badge";

const images = [
  { src: "/product.png", className: "rotate-0 -z-1" },
  { src: "/product2.png", className: "rotate-10 -z-2" },
  { src: "/product3.png", className: "-rotate-10 -z-3" },
];

async function getProducts() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return [];

  const { data: products } = await supabase
    .from("products")
    .select("*")
    .eq("user_id", user.id);

  return products || [];
}

const Tracker = async () => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const products = user ? await getProducts() : [];

  return (
    <Container className="min-h-screen flex flex-col  bg-linear-to-tl ">
      <div className="flex items-center justify-center gap-4 mt-15 relative">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            className={`${image.className} w-30 h-30 opacity-90 absolute`}
            alt={`product-${index}`}
          />
        ))}
      </div>
      <div className="flex items-center justify-center my-25">
        <h2 className="text-4xl max-w-md  text-center font-medium text-neutral-500 ">
          Track your{" "}
          <span className="text-black text-5xl [font-family:var(--font-charm)] font-bold">
            Product
          </span>{" "}
          and{" "}
          <span className="text-black text-5xl [font-family:var(--font-charm)] font-bold">
            Price
          </span>{" "}
          history
        </h2>
      </div>
      <ProductForm user={user} />
      {products.length === 0 && (
        <>
          <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12 pt-10">
            <h2 className="text-balance text-4xl font-medium lg:text-5xl">
              Your Ultimate Product Comparison Tool
            </h2>
            <p>
              Discover, compare, and save. Our platform helps you find the best
              products online by providing detailed comparisons and price
              tracking, ensuring you make informed purchasing decisions.
            </p>
          </div>
          
        </>
      )}
      {user && products.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 py-20">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-semibold text-neutral-900">
              Your Tracked Product
            </h3>
            <Badge>
              {products.length} {products.length === 1 ? "product" : "products"}
            </Badge>
          </div>
          <div className="grid gap-6 md:grid-cols-2 items-start ">
            {products.map((product) => (
              <ProductCard key={product.id} prodcut={product} />
            ))}
          </div>
        </section>
      )}
      {user && products.length === 0 && (
        <section className="max-w-2xl mx-auto px-4 pb-20 text-center">
          <div className="bg-white rounded-xl border-2 border-dashed border-gray-300 p-12">
            <TrendingDown className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No products yet
            </h3>
            <p className="text-gray-600">
              Add your first product above to start tracking prices!
            </p>
          </div>
        </section>
      )}
    </Container>
  );
};

export default Tracker;
