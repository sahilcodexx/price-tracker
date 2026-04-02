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
            <CopyAnimation />
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
  return (
    <div className="flex flex-col gap-3 justify-center h-full w-full ">
      <div className="bg-white flex justify-between items-center px-3 py-2 rounded-2xl shadow-sm">
        <p className="text-sm"> Copy Urls</p>
        <span>
          <Copy size={14} />
        </span>
      </div>
      <div className="bg-white flex justify-between items-center px-3 py-2 rounded-2xl shadow-sm">
        <p className="text-sm"> Paste Urls</p>
        <span>
          <ClipboardPaste size={14} />
        </span>
      </div>
      <div className="bg-white flex justify-between items-center px-3 py-2 rounded-2xl shadow-sm">
        <p className="text-sm"> Get Details</p>
        <span>
          <Text size={14} />
        </span>
      </div>
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
