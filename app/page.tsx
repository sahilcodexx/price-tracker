import Header from "@/common/header";
import Features from "@/components/features";
import ProductForm from "@/components/prodcut-form";
import { createClient } from "@/lib/superbase/server";
import { TrendingDown } from "lucide-react";

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

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const products = user ? await getProducts() : [];

  return (
    <main className="font-sans min-h-screen bg-linear-to-br  from-orange-100/60 via-white to-orange-100/60">
      <Header />
      <section className="py-20 px-4 text-center">
        <div className="max-w-7xl mx-auto flex flex-col gap-3  items-center">
          <div className="inline-flex items-center bg-orange-100/70 px-5 rounded-full text-orange-600 shadow-sm border-transparent ring ring-orange-600/20 py-1.5 mb-4">
            Made with love by SahilCodex
          </div>
          <h2 className="text-5xl font-bold ">Never Miss a price Drop</h2>
          <p className="text-neutral-500 max-w-xl">
            Track prices from any e-commerce site. Get instant alerts when price
            drops. save money effortlessly
          </p>
        </div>
      </section>
      <ProductForm />
      {products.length === 0 && <Features />}
      
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
    </main>
  );
}
