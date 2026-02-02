import {
  Cpu,
  Fingerprint,
  Pencil,
  Settings2,
  Sparkles,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant Comparisons",
    description:
      "Quickly compare products side-by-side with real-time data and lightning-fast results.",
  },
  {
    icon: Cpu,
    title: "Comprehensive Data",
    description:
      "Access a vast database of product information, specifications, and user reviews for informed decisions.",
  },
  {
    icon: Fingerprint,
    title: "Secure & Private",
    description:
      "Shop with confidence knowing your data and privacy are protected on our platform.",
  },
  {
    icon: Pencil,
    title: "Customization",
    description: "It supports helping developers and businesses innovate.",
  },
  {
    icon: Settings2,
    title: "Control",
    description: "It supports helping developers and businesses innovate.",
  },
  {
    icon: Sparkles,
    title: "Built for AI",
    description: "It supports helping developers and businesses innovate.",
  },
];

export default function Features() {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <h2 className="text-balance text-4xl font-medium lg:text-5xl">
            Your Ultimate Product Comparison Tool
          </h2>
          <p>
            Discover, compare, and save. Our platform helps you find the best
            products online by providing detailed comparisons and price
            tracking, ensuring you make informed purchasing decisions.
          </p>
        </div>

        <div className="relative mx-auto grid max-w-4xl divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="space-y-3 bg-white">
              <div className="flex items-center gap-2">
                <feature.icon className="size-4" />
                <h3 className="text-sm font-medium">{feature.title}</h3>
              </div>
              <p className="text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
