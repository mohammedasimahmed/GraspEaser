import React from "react";
import team_detail from "../../content/team.json";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

type TeamDetail = (typeof team_detail)[0];

const TeamSection = () => {
  return (
    <section className="2xl:container mx-auto py-8 px-16 mt-32">
      <h1 className="text-5xl text-center mb-8">Our Team</h1>
      <div className="flex flex-col gap-16">
        {(team_detail as TeamDetail[]).map((member: TeamDetail, idx) => {
          const border = idx === team_detail.length - 1 ? "" : "border-b-2";
          const reverseDirection = idx % 2 ? "md:flex-row-reverse" : "";
          return (
            <div key={idx}>
              <div
                className={clsx(
                  border,
                  "pb-6 md:pb-12 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6",
                  reverseDirection,
                )}
              >
                <div className="max-w-80 flex flex-col">
                  <div className="w-60 h-60 mx-auto rounded-full overflow-hidden">
                    <Image
                      className="w-full relative bottom-6"
                      src={member.photo}
                      alt={member.name}
                      width={400}
                      height={400}
                    />
                  </div>
                  <h2 className="mt-6 text-xl font-bold text-center">
                    {member.name}
                  </h2>
                </div>
                <div className="flex flex-col items-center justify-center gap-8">
                  <p className="text-center px-8 md:px-16">
                    {member.description}
                  </p>
                  <SocialProfiles {...member} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

type MemberInfo = (typeof team_detail)[0];

const SocialProfiles: React.FC<MemberInfo> = ({ ...props }) => {
  return (
    <>
      <span className="px-4 py-2 rounded-2xl flex gap-4">
        <Link href={props.portfolio_url}>
          <Image
            className="w-8 hover:scale-125 transition-all"
            width={100}
            height={100}
            alt="Portfolio"
            src={"/icons/portfolio.png"}
          ></Image>
        </Link>
        <Link href={props.github}>
          <Image
            className="w-8 hover:scale-125 transition-all"
            width={100}
            height={100}
            alt="Github"
            src={"/icons/github.svg"}
          ></Image>
        </Link>
        <Link href={props.linkedin}>
          <Image
            className="w-8 hover:scale-125 transition-all"
            width={100}
            height={100}
            alt="Linkedin"
            src={"/icons/linkedin.svg"}
          ></Image>
        </Link>
        <Link href={props.twitter}>
          <Image
            className="w-8 hover:scale-125 transition-all"
            width={100}
            height={100}
            alt="Twitter"
            src={"/icons/twitter.svg"}
          ></Image>
        </Link>
      </span>
    </>
  );
};

export default TeamSection;
