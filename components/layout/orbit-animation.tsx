import Container from "@/common/container";
import Image from "next/image";

const icons = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg",
    delay: "0s",
  },
  { src: "https://cdn.worldvectorlogo.com/logos/flipkart.svg", delay: "1.6s" },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/3/33/Meesho_logo.png",
    delay: "3.2s",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Myntra_Logo.png",
    delay: "4.8s",
  },
  { src: "https://cdn.worldvectorlogo.com/logos/ajio.svg", delay: "6.4s" },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/0/00/Nykaa_New_Logo.svg",
    delay: "8s",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/TATA_Cliq_Logo.jpg",
    delay: "9.6s",
  },
  { src: "https://cdn.worldvectorlogo.com/logos/h-m.svg", delay: "11.2s" },
  { src: "https://cdn.worldvectorlogo.com/logos/zara-2.svg", delay: "12.8s" },
  { src: "https://cdn.worldvectorlogo.com/logos/ebay.svg", delay: "14.4s" },
  { src: "https://cdn.worldvectorlogo.com/logos/snapdeal.svg", delay: "16s" },
  {
    src: "https://cdn.worldvectorlogo.com/logos/shopclues.svg",
    delay: "17.6s",
  },
  {
    src: "https://cdn.worldvectorlogo.com/logos/paytm-mall.svg",
    delay: "19.2s",
  },
  { src: "https://cdn.worldvectorlogo.com/logos/cred.svg", delay: "20.8s" },
  {
    src: "https://cdn.worldvectorlogo.com/logos/urban-ladder.svg",
    delay: "22.4s",
  },
];

const OrbitAnimation = () => {
  const totalIcons = icons.length;
  const duration = totalIcons * 1.6;
  const translatePosition = 240;

  return (
    <Container className="flex flex-col items-center justify-center  h-50">
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-4xl max-w-sm text-center font-medium capitalize leading-tighter tracking-tight">
          Stay connected with your favorite app
        </h2>
        <p className="text-sm text-neutral-600">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.{" "}
        </p>
      </div>
      <div className=" min-h-40 w-full relative overflow-hidden mask-t-from-60%">
        <div
          className="absolute m-auto rounded-full  bottom-10 t z-30 flex h-120 w-120 items-center justify-center   left-1/2 -translate-x-1/2"
          style={
            {
              ["--orbit-duration"]: `${duration}s`,
              ["--translate-position"]: `${translatePosition}px`,
            } as React.CSSProperties
          }
        >
          {icons.map((item, index) => (
            <div
              key={index}
              className="animate-orbit absolute flex size-12 items-center justify-center rounded-md border border-transparent bg-white ring-1 p-1 ring-black/20"
              style={{ animationDelay: item.delay }}
            >
              <Image
                src={item.src}
                alt="brand"
                width={40}
                height={40}
                className="object-contain w-10 h-10"
              />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default OrbitAnimation;
