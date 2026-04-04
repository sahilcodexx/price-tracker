"use client";
import Container from "@/common/container";
import { useState } from "react";
import { motion } from "motion/react";
import {
  ClipboardPaste,
  Copy,
  Text,
  TrendingDown,
  Mail,
  CheckCircle,
  ArrowRight,
  Search,
} from "lucide-react";
import Image from "next/image";

const stepsData = [
  {
    id: 1,
    title: "Copy and Paste",
    description: "Copy product URL from any  site",
    animation: "copy",
  },
  {
    id: 2,
    title: "Track Prices",
    description: "We monitor prices 24/7 for you",
    animation: "price",
  },
  {
    id: 3,
    title: "Get Alerts",
    description: "Receive  alert when prices drop",
    animation: "alert",
  },
];

const Steps = () => {
  return (
    <Container className="flex items-center justify-center gap-10 flex-col">
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-3xl md:text-4xl max-w-sm text-center font-medium capitalize leading-tighter tracking-tight">
          Start Tracking Prices in 3 Easy Steps
        </h2>
        <p className="text-sm text-neutral-600 text-center max-w-xs">
          Copy any product link, we will monitor the price and notify you when
          it drops.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-x-10 md:gap-10">
        {stepsData.map((step) => (
          <div
            key={step.id}
            className="bg-white p-2 rounded-2xl shadow-md border-transparent border ring ring-neutral-100 mt-5 md:mt-0"
          >
            <div className="bg-neutral-100 min-h-50 max-w-60 w-60 rounded-xl py-6 px-8">
              <div>
                {step.animation === "copy" && <CopyAnimation />}
                {step.animation === "price" && <DownPriceAnimation />}
                {step.animation === "alert" && <EmailAnimation />}
              </div>
            </div>
            <div className="px-4 py-2">
              <h2 className="text-sm">{step.title}</h2>
              <p className="text-xs text-neutral-500 whitespace-nowrap">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Steps;

const copySteps = [
  { label: "Copy URL", icon: <Copy size={14} /> },
  { label: "Paste URL", icon: <ClipboardPaste size={14} /> },
  { label: "Track It", icon: <Search size={14} /> },
];

const CopyAnimation = () => {
  return (
    <div className="flex flex-col gap-3 justify-center h-full w-full ">
      {copySteps.map((step, index) => (
        <motion.div
          initial={{ y: 10, filter: "blur(3px)", opacity: 0 }}
          animate={{ y: 0, filter: "blur(0)", opacity: 100 }}
          transition={{ delay: index * 0.2, duration: 1 }}
          whileInView={{ y: 0, filter: "blur(0)", opacity: 100 }}
          viewport={{ once: false }}
          key={index}
          className="bg-white flex justify-between items-center px-3 py-2 rounded-2xl shadow-sm"
        >
          <p className="text-sm">{step.label}</p>
          <span>{step.icon}</span>
        </motion.div>
      ))}
    </div>
  );
};

const priceData = [
  { height: 160, price: 1299 },
  { height: 120, price: 999 },
  { height: 80, price: 699 },
];

const DownPriceAnimation = () => {
  const [bars] = useState(() => priceData);

  return (
    <div className="flex items-end gap-8">
      {bars.map((bar, i) => (
        <motion.div
          key={i}
          className="bg-white shadow-sm w-10 origin-bottom flex items-end justify-center"
          style={{ height: bar.height }}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            delay: i * 0.2,
            ease: "easeOut",
          }}
        >
          <span className="flex items-center justify-center h-full text-xs font-semibold text-neutral-500 rotate-[-90deg] text-center mb-2">
            ₹{bar.price}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

const notifications = [
  { id: 1, name: "Price Alert", message: "Price dropped ..." },
  { id: 2, name: "Flash Sale", message: "Flat 50% off on..." },
  { id: 3, name: "Deal Alert", message: "Limited time off..." },
];

const EmailAnimation = () => {
  return (
    <div className="flex flex-col gap-2">
      {notifications.map((email, index) => (
        <motion.div
          initial={{ x: 10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: index * 0.4, duration: 1 }}
          viewport={{ once: false }}
          key={email.id}
          className="flex items-center justify-between gap-3 bg-white px-3 py-1 rounded-lg border border-neutral-200 shadow-xs"
        >
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/1280px-Gmail_icon_%282020%29.svg.png"
            alt="gmail"
            height={400}
            width={1500}
            className="h-5 w-7"
          />
          <div className="flex-1 border-l pl-2">
            <h3 className="text-sm text-neutral-800">{email.name}</h3>
            <p className="text-xs text-neutral-500">{email.message}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
