import Header from "@/common/header";
import Features from "@/components/features";

export default function Home() {
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
      <Features />
    </main>
  );
}
