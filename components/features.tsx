import Container from "@/common/container";
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
    <Container>
      <section className=" pb-20">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-3xl md:text-4xl max-w-sm text-center font-medium capitalize leading-tighter tracking-tight">
              Powerful Features for Smarter Shopping
            </h2>
            <p className="text-sm text-neutral-600 text-center max-w-xs">
              Discover how our platform empowers you to make informed decisions
              and save money.
            </p>
          </div>

          <div className="relative mx-auto grid max-w-5xl divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3">
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
    </Container>
  );
}
