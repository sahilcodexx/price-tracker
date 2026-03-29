import Header from "@/common/header";
import { Button } from "@/components/ui/button";
// import Features from "@/components/features";
// import ProductForm from "@/components/prodcut-form";
// import ProductCard from "@/components/product-card";
// import { TrendingDown } from "lucide-react";
import { createClient } from "@/lib/superbase/server";
import { Play } from "lucide-react";
import Image from "next/image";

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
    <main className="font-sans flex flex-col w-full gap-10 mb-40  ">
      <Header />
      <section className="py-20 px-4 text-center ">
        <div className="max-w-7xl mx-auto flex flex-col gap-5  items-center">
          <div className="inline-flex items-center text-xs bg-white  px-5 rounded-full  shadow-sm border-transparent ring ring-neutral-600/20 py-1.5 mb-4">
            Made with love by SahilCodex
          </div>

          <h2 className="text-5xl font-semibold tracking-tight ">
            Track Prices Smartly and <br /> Save More Money
          </h2>
          <p className="text-neutral-500 max-w-sm mb-10">
            Track prices from any e-commerce site. Get instant alerts when price
            drops.
          </p>
        </div>
        <div className=" flex items-center justify-center gap-4">
          <Button variant={"outline"} className="shadow-lg">
            <Play /> Get Demo
          </Button>
          <Button className="bg-linear-to-b from-blue-500 to-blue-700">
            Get into details
          </Button>
        </div>
        
      </section>
      <div className="w-full  relative overflow-hidden  max-w-330   m-auto">
        <div className="bg-blue-50 blur-2xl h-400 rounded-full absolute -top-260 left-1/2 -translate-x-1/2 w-420  z-1"></div>
        <div className="flex justify-center">
          <Image
            alt="hero Image"
            src={"/image.png"}
            width={1200}
            height={800}
            className="absolute z-10 bg-neutral-100 p-2 rounded-3xl border"
          />
        </div>
        <div className="w-full rounded-b-[40px]  bg-linear-to-t from-blue-400 via-blue-700 to-blue-800 min-h-155 mask-t-from-30% flex items-center justify-center relative"></div>
      </div>
      {/* <ProductForm user={user} />
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
      )} */}
    </main>
  );
}
