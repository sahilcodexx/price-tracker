import { Button } from "@/components/ui/button";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-white/60 px-8 py-3 rounded-xl shadow-sm border-transparent ring ring-neutral-200 backdrop-blur-lg flex items-center justify-between md:max-w-5xl mx-auto max-w-sm top-5 sticky z-100 ">
      <div>
        <Image
          src={"/lightlogo.png"}
          alt="logo"
          width={600}
          height={200}
          className="h-4 w-auto"
        />
      </div>
      <div>
        <Button className="bg-orange-500 hover:bg-orange-600">Sgin in</Button>
      </div>
    </header>
  );
};

export default Header;
