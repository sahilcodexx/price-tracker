import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/utils/utils";
import Container from "@/common/container";

type Testimonial = {
  quote: string;
  image: string;
  name: string;
  role: string;
  company?: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "This tool saved me hundreds of dollars! I tracked a phone for 2 weeks and got it at the lowest price.",
    image: "https://github.com/shadcn.png",
    name: "Shadcn",
    role: "Founder",
    company: "Shadcn UI",
  },
  {
    quote:
      "Best price tracker I've used. The email alerts are super convenient and always on time.",
    image: "https://github.com/rauchg.png",
    name: "Guillermo Rauch",
    role: "CEO",
    company: "Vercel",
  },
  {
    quote:
      "I bought my entire shopping list at 40% off just by setting up price alerts. This is incredible!",
    image: "https://unavatar.io/x/elonmusk",
    name: "Elon Musk",
    role: "CEO",
    company: "X.com",
  },
  {
    quote:
      "Simple and effective. Just paste the product link and forget about checking prices manually.",
    image: "https://unavatar.io/x/tim_cook",
    name: "Tim Cook",
    role: "CEO",
    company: "Apple",
  },
  {
    quote:
      "Great for online shoppers! I've saved over $500 in the last month alone using this tool.",
    image: "https://unavatar.io/x/JeffBezos",
    name: "Jeff Bezos",
    role: "Founder",
    company: "Amazon",
  },
  {
    quote:
      "The historical price chart helped me understand the best time to buy. Highly recommend!",
    image: "https://unavatar.io/x/sama",
    name: "Sam Altman",
    role: "CEO",
    company: "OpenAI",
  },
  {
    quote:
      "Works perfectly with Amazon, Flipkart, Myntra - all my favorite shopping sites. Game changer!",
    image: "https://unavatar.io/x/sundarpichai",
    name: "Sundar Pichai",
    role: "CEO",
    company: "Google",
  },
  {
    quote:
      "Finally, a tool that actually works! No more FOMO on sales - I get notified every time.",
    image: "https://github.com/steven-tey.png",
    name: "Steven Tey",
    role: "Founder",
    company: "Dub.co",
  },
  {
    quote:
      "Super easy to use. Now I never miss a good deal thanks to the instant notifications!",
    image: "https://unavatar.io/x/peer_rich",
    name: "Peer Richelsen",
    role: "Co-Founder",
    company: "Cal.com",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export function TestimonialsSection() {
  return (
    <Container className="mt-40 max-w-full">
      <section className="relative py-10">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto flex max-w-sm flex-col items-center justify-center gap-4">
            <div className="flex justify-center">
              <div className="rounded-lg border shadow-sm bg-white px-4 py-1">
                Testimonials
              </div>
            </div>

            <h2 className="text-4xl max-w-sm text-center font-medium capitalize leading-tighter tracking-tight">
              What our users say
            </h2>

            <p className="text-center text-muted-foreground text-sm">
              See what our customers have to say about us.
            </p>
          </div>

          <div
            className={cn(
              "mt-10 flex max-h-160 justify-center gap-6 overflow-hidden",
              "mask-[linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]",
            )}
          >
            <InfiniteSlider direction="vertical" speed={30} speedOnHover={15}>
              {firstColumn.map((testimonial) => (
                <TestimonialsCard
                  key={testimonial.name}
                  testimonial={testimonial}
                />
              ))}
            </InfiniteSlider>
            <InfiniteSlider
              className="hidden md:block"
              direction="vertical"
              speed={50}
              speedOnHover={25}
            >
              {secondColumn.map((testimonial) => (
                <TestimonialsCard
                  key={testimonial.name}
                  testimonial={testimonial}
                />
              ))}
            </InfiniteSlider>
            <InfiniteSlider
              className="hidden lg:block"
              direction="vertical"
              speed={35}
              speedOnHover={17}
            >
              {thirdColumn.map((testimonial) => (
                <TestimonialsCard
                  key={testimonial.name}
                  testimonial={testimonial}
                />
              ))}
            </InfiniteSlider>
          </div>
        </div>
      </section>
    </Container>
  );
}

function TestimonialsCard({
  testimonial,
  className,
  ...props
}: React.ComponentProps<"figure"> & {
  testimonial: Testimonial;
}) {
  const { quote, image, name, role, company } = testimonial;
  return (
    <figure
      className={cn(
        "w-full max-w-xs rounded-3xl border bg-card p-8 shadow-foreground/10 shadow-lg dark:bg-card/20",
        className,
      )}
      {...props}
    >
      <blockquote>{quote}</blockquote>
      <figcaption className="mt-5 flex items-center gap-2">
        <Avatar className="size-8 rounded-full">
          <AvatarImage alt={`${name}'s profile picture`} src={image} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <cite className="font-medium not-italic leading-5 tracking-tight">
            {name}
          </cite>
          <span className="text-muted-foreground text-sm leading-5 tracking-tight">
            {role} {company && `, ${company}`}
          </span>
        </div>
      </figcaption>
    </figure>
  );
}
