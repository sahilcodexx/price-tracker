import { Button } from "@/components/ui/button";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-white px-8 py-5 rounded-xl shadow-sm border-transparent ring ring-neutral-200 backdrop-blur-2xl flex items-center justify-between md:max-w-5xl mx-auto max-w-md top-5 sticky z-10">
      <div>
        <Image
          src={"/lightlogo.png"}
          alt="logo"
          width={600}
          height={200}
          className="h-6 w-auto"
        />
      </div>
      <div>
        <Button>Sgin in</Button>
      </div>
    </header>
  );
};

export default Header;
