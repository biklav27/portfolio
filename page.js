import Image from "next/image";
import { assets } from "./assets/image/assets";
import Skills from "./skills/page";
import Projects from "./projects/page";

export default function Home() {
  return (
    <section>
      {/* HERO SECTION */}
      <section className="px-30 py-20 md:px-20 lg:px-40 md:py-20 lg:py-40 bg-[#011]">
        <div className="grid gap-20 items-center justify-between md:flex ">
          {/* text btn */}
          <div className="flex flex-col gap-4 md:gap-6 text-white">
            <h1 className="font-bold text-2xl md:text-4xl lg:text-6xl">Hello I'm Biklav</h1>
            <p className="text-md md:text-xl lg:text-3xl">
              A professional Front-End Developer creating modern UI <br /> and
              smooth UX experiences.
            </p>
            <button className="px-4 py-2 w-40 bg-[#060] rounded-xl text-[#011] text-lg font-bold hover:bg-[#011] hover:text-[#7cf03d] hover:border hover:border-[#7cf03d]">
              View Portfolio
            </button>
          </div>
          {/* profile */}
          <div>
            <Image
              height={100}
              width={150}
              src={assets.profile2}
              alt="profile"
              className="rounded-full w-auto border-4 border-[#7cf03d]"
            />
          </div>
        </div>
      </section>
      {/* <Skills />
      <Projects /> */}
    </section>
  );
}
