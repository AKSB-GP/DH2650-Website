import React from "react";
import MemberProfile from "./memberprofile";

export const TeamSection = ({ TeamData }) => {
  return (
    <section
      id="team"
      className="flex flex-col min-h-screen items-center w-screen relative "
    >
      <h1 className="text-[60px] text-center font-boldtext-gray-800 bg-gradient-to-r from-orange-200 via-orange-150 to-orange-100 w-screen relative z-10">
        The Team
      </h1>
      <div className="absolute inset-0 bg-black opacity-80 z-0 "></div>
      <div className="z-10 pt-40 flex px-2">
        <>
          {TeamData.members.map((member, index) => (
            <div className="px-4">
              <MemberProfile key={index} member={member} />
            </div>
          ))}
        </>
      </div>
    </section>
  );
};
