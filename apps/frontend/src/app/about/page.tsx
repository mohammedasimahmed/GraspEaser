import React from "react";
import about_content from "../../content/about.json";
import Link from "next/link";
import { FadeInAnimator, OnScrollFadeInAnimator } from "@/lib/animations";
import TeamSection from "@/components/sections/team-section";

const TeamPage = () => {
  return (
    <>
      <main className="2xl:container mx-auto px-8 h-screen">
        <FadeInAnimator>
          <div className="max-w-5xl pt-28 pb-16 md:pt-52 px-4 lg:px-8">
            <h1 className="text-4xl lg:text-6xl">
              Powered by <HighlightWord info={about_content.tech_stack[0]} />,{" "}
              <HighlightWord info={about_content.tech_stack[1]} /> and{" "}
              <HighlightWord info={about_content.tech_stack[2]} />.
            </h1>
          </div>
          <div className="max-w-2xl pl-4 md:pl-8">
            <p className="text-md w-full">{about_content.description}</p>
          </div>
        </FadeInAnimator>
      </main>
      <div className="h-[1px] bg-slate-300 w-screen"></div>
      <OnScrollFadeInAnimator>
        <TeamSection />
      </OnScrollFadeInAnimator>
    </>
  );
};

interface HighlightWordInterface {
  info: { name: string; href: string };
}
const HighlightWord: React.FC<HighlightWordInterface> = ({ info }) => {
  return (
    <Link href={info.href}>
      <strong>{info.name}</strong>
    </Link>
  );
};

export default TeamPage;
