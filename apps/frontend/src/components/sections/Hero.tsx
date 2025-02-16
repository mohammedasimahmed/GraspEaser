import React from "react";
import { AuroraBackground } from "../ui/aurora-background";
import herodata from "@/content/hero.json";
import { FadeInAnimator } from "@/lib/animations";

const Hero = () => {
  const { title, subtitle } = herodata;
  return (
    <>
      <AuroraBackground>
        <div className="flex flex-col justify-center items-center">
          <FadeInAnimator duration={1}>
            <div className="text-6xl sm:text-7xl md:text-8xl font-semibold mb-5 text-center">{title}</div>
          </FadeInAnimator>
          <FadeInAnimator duration={2.5}>
            <div className="text-3xl md:text-4xl font-extralight text-center">{subtitle}</div>
          </FadeInAnimator>
        </div>
      </AuroraBackground>
    </>
  );
};

export default Hero;
