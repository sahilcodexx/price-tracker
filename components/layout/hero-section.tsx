import React from "react";
import { Button } from "../ui/button";
import { Play } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <main className="font-sans flex flex-col w-full gap-10 mb-40  ">
      <section className="py-20 px-4 text-center ">
        <div className="max-w-7xl mx-auto flex flex-col gap-5  items-center">
          <div className="inline-flex items-center text-xs bg-white  px-5 rounded-full  shadow-sm border-transparent ring ring-neutral-600/20 py-1.5 mb-4">
            Made with love by SahilCodex
          </div>

          <h2 className=" lg:text-5xl text-3xl font-semibold tracking-tight ">
            Track Prices Smartly and <br /> Save More Money
          </h2>
          <p className="text-neutral-500 text-sm lg:text-base max-w-xs lg:max-w-sm mb-10">
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
      <div className="w-full  relative overflow-hidden  max-w-330 px-2 m-auto">
        <div className="bg-blue-50 blur-2xl h-120 lg:h-400 rounded-full absolute -top-80 lg:-top-260 left-1/2 -translate-x-1/2 w-100 lg:w-420  z-1"></div>
        <div className="flex justify-center">
          <Image
            alt="hero Image"
            src={"/image.png"}
            width={1200}
            height={800}
            className="absolute z-10  rounded-3xl  px-7 lg:p-0"
          />
        </div>
        <div className="w-full rounded-b-3xl lg:rounded-b-[40px]  bg-linear-to-t from-blue-400 via-blue-700 to-blue-800 h-40 md:h-95 lg:min-h-155 mask-t-from-30% flex items-center justify-center relative"></div>
      </div>
    </main>
  );
};

export default HeroSection;
