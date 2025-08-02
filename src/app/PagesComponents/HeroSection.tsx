import Image from "next/image";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { DATA } from "@/data/resume";
import Logo from "../../../public/undraw_programming_65t2.svg";

const BLUR_FADE_DELAY = 0.04;

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="py-12 md:py-20 flex flex-col-reverse md:flex-row items-center justify-between gap-8"
    >
      {/* النصوص */}
      <div className="mx-auto w-full max-w-5xl flex flex-col items-start justify-center gap-8 px-4">
        <BlurFadeText
          delay={BLUR_FADE_DELAY}
          className="text-4xl font-extrabold tracking-tight sm:text-6xl xl:text-7xl/none"
          yOffset={8}
          text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
        />
        <BlurFadeText
          className="max-w-xl md:text-2xl text-muted-foreground"
          delay={BLUR_FADE_DELAY * 2}
          text={DATA.description}
        />
      </div>

      {/* الصورة */}
      <div className="flex justify-center md:justify-end w-full md:w-1/2">
        <Image
          src={Logo}
          alt="Programming Illustration"
          className="w-64 md:w-80 lg:w-96 h-auto object-contain"
          priority
        />
      </div>
    </section>
  );
}
