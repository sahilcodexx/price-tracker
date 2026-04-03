"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Container from "@/common/container";

const faqsData = [
  {
    question: "How do I track a product price?",
    answer:
      "Simply copy the product URL from any e-commerce website and paste it into our tracking tool. We'll start monitoring the price immediately.",
  },
  {
    question: "How often do you check prices?",
    answer:
      "We check prices multiple times a day, 24/7. You can set your preferred notification frequency in settings.",
  },
  {
    question: "Will I get notified of price drops?",
    answer:
      "Yes! You'll receive instant notifications via email, SMS, or WhatsApp when the price drops below your target price.",
  },
  {
    question: "Is it free to use?",
    answer:
      "Yes, we offer a free plan with basic features. Premium plans include advanced features like historical price charts and unlimited tracking.",
  },
  {
    question: "Which e-commerce sites are supported?",
    answer:
      "We support all major e-commerce platforms including Amazon, Flipkart, Myntra, Ajio, Meesho, and many more.",
  },
  {
    question: "How accurate are the price updates?",
    answer:
      "Our system is highly accurate and updates in real-time. We directly fetch prices from the source websites.",
  },
];

export default function FaqSection() {
  return (
    <Container className="py-12 lg:py-20">
      <div className="flex flex-col gap-12 lg:gap-16">
        <div className="mx-auto w-full max-w-2xl text-center">
          <h2 className="text-4xl font-medium capitalize leading-tighter tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-neutral-600 mt-2">
            Everything you need to know about price tracking
          </p>
        </div>

        <div className="mx-auto w-full max-w-2xl">
          <Accordion type="single" className="w-full">
            {faqsData.map((faq) => (
              <AccordionItem key={faq.question} value={faq.question}>
                <AccordionTrigger className="text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mx-auto w-full max-w-2xl text-center">
          <p className="text-muted-foreground">
            Still have questions? We&apos;re here to help.{" "}
            <a
              href="https://x.com/sahilcodex"
              className="text-foreground underline"
            >
              Contact support
            </a>
          </p>
        </div>
      </div>
    </Container>
  );
}
