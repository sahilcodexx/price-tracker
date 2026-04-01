import Container from "@/common/container";
import Amazon from "../icons/amazon-icon";

const OrbitAnimation = () => {
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
        <div className="absolute m-auto rounded-full  bottom-10 t z-30 flex h-120 w-120 items-center justify-center   left-1/2 -translate-x-1/2">
          <div className="animate-orbit absolute flex size-10 items-center justify-center rounded-md border border-transparent bg-white ring-1 p-1 ring-black/20 [--orbit-duration:8s] [--translate-position:240px]">
            <Amazon />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default OrbitAnimation;
