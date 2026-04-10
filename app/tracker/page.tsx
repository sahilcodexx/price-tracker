import Container from "@/common/container";
import Features from "@/components/features";
import ProductForm from "@/components/prodcut-form";
import ProductCard from "@/components/product-card";
import { TrendingDown } from "lucide-react";
import { createClient } from "@/lib/superbase/server";

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
    <Container className="min-h-screen flex flex-col gap-10 bg-linear-to-tl ">
      <div className="flex items-center justify-center my-25">
        <h2 className="text-4xl max-w-md text-center font-medium text-neutral-500 relative ">
          Track your{" "}
          <span className="text-black text-5xl [font-family:var(--font-charm)] font-bold">
            Product
          </span>{" "}
          and{" "}
          <span className="text-black text-5xl [font-family:var(--font-charm)] font-bold">
            Price
          </span>{" "}
          history
          <img
            src="/product.png"
            className="absolute w-20 h-20 -top-12 -z-1 left-1/2 -translate-x-1/2 -translate-y-1/2  opacity-90"
          />
          <img
            src="/product2.png"
            className="absolute w-20 h-20 -top-12 -z-2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-10 opacity-90"
          />
          <img
            src="/product3.png"
            className="absolute w-20 h-20 -top-12 -z-3 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-10 opacity-90"
          />
        </h2>
      </div>
      <ProductForm user={user} />
      {products.length === 0 && <Features />}
      {user && products.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 py-20">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-semibold text-neutral-900">
              Your Tracked Product
            </h3>
            <span className="text-sm text-neutral-500">
              {products.length} {products.length === 1 ? "product" : "products"}
            </span>
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
