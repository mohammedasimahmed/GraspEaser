import React from "react";
import { AuroraBackground } from "../ui/aurora-background";
import herodata from "@/data/hero.json";

const Hero = () => {
  const { title, subtitle } = herodata;
  return (
    <>
      <AuroraBackground>
        <div className="flex flex-col justify-center items-center">
          <div className="text-8xl font-semibold mb-5 text-center">{title}</div>
          <div className="text-4xl font-extralight text-center">{subtitle}</div>
        </div>
      </AuroraBackground>
    </>
  );
};

export default Hero;
