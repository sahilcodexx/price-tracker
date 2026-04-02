"use client";
import Container from "@/common/container";
import React from "react";
import { motion } from "motion/react";
import { ClipboardPaste, Copy, Text } from "lucide-react";

const Steps = () => {
  return (
    <Container className="flex items-center justify-center">
      <div className="bg-white p-2 rounded-2xl shadow-md border-transparent border ring ring-neutral-100">
        <div className="bg-neutral-100 min-h-50 max-w-60 w-60 rounded-xl py-6 px-8">
          <div>
            {/* <CopyAnimation /> */}
            <DownPriceAnimation />
          </div>
        </div>
        <div className="px-4 py-2">
          <h2 className="text-sm"> Copy and Paste</h2>
          <p className="text-xs text-neutral-600"> Copy and Paste</p>
        </div>
      </div>
    </Container>
  );
};

export default Steps;

const CopyAnimation = () => {
  const steps = [
    { label: "Copy Urls", icon: <Copy size={14} /> },
    { label: "Paste Urls", icon: <ClipboardPaste size={14} /> },
    { label: "Get Details", icon: <Text size={14} /> },
  ];

  return (
    <div className="flex flex-col gap-3 justify-center h-full w-full ">
      {steps.map((step, index) => (
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

// const title = "Just Copy and Paste URL";
// const words = title.split(" ");
// const lastWordIndex = words.length - 1;
// return words.map((word, i) => {
//   const isLastWord = i === lastWordIndex;

//   return (
//     <motion.span
//       initial={{ opacity: 0, filter: "blur(6px)" }}
//       animate={{ opacity: 100, filter: "blur(0)" }}
//       transition={{ delay: 0.2 * i, duration: 0.8 }}
//       key={i}
//       className="mr-2 inline-block"
//     >
//       {word.split("").map((char, j) => (
//         <motion.span
//           key={j}
//           className={`text-sm text-wrap font-[450] leading- tracking-tight ${
//             isLastWord
//               ? "text-black/70 font-medium dark:text-white/90"
//               : "text-black/40 dark:text-zinc-600"
//           }`}
//         >
//           {char}
//         </motion.span>
//       ))}
//     </motion.span>
//   );
// });

const DownPriceAnimation = () => {
  return (
    // <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
    //   <motion.path
    //     d="M48.13,11.32a3,3,0,0,0-4.19,0L32.13,23.13l-7.29-7.29a3,3,0,0,0-4.19,0L8.59,27.9l.46-6a2.42,2.42,0,0,0-4.78-.71L1.08,35.53A3.3,3.3,0,0,0,5,39.47l14.18-3.18a2.42,2.42,0,0,0-.71-4.77l-5.54.42,9.8-9.81L30,29.42a3,3,0,0,0,4.2,0l13.9-13.9A3,3,0,0,0,48.13,11.32Z"
    //     fill="none"
    //     stroke="currentColor"
    //     strokeWidth=""
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //     strokeDasharray="1000"
    //     initial={{ strokeDashoffset: 1000  }}
    //     animate={{ strokeDashoffset: 0 }}
    //     transition={{ duration: 5 , ease: "easeOut" }}
    //   />
    // </motion.svg>
    <div>
      3
    </div>
  );
};
