import Image from "next/image";

export default function Home() {
  return (
    <main className="font-sans min-h-screen ">
      <header className="">
        <div>
          <Image
            src={"/lightlogo.png"}
            alt="logo"
            width={600}
            height={200}
            className="h-10 w-auto"
          />
        </div>
        <div></div>
      </header>
      <h2>Home</h2>
    </main>
  );
}
