import Image from "next/image";
import Intro from "@/components/intro";
import About from "@/components/about";

export default function Home() {
  return (
    <main className="flex flex-col items-center pt-20 md:pt-28 px-4">
      <Intro />
      <About />
    </main>
  );
}
