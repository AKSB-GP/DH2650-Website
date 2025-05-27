import React from "react";
import MemberProfile from "./memberprofile";

export const TeamSection = ({ TeamData }) => {
  return (
    <section
      id="features"
      className="h-1/2 flex flex-col items-center w-screen relative snap-top"
    >
      <h1 className="text-[60px] text-center font-bold text-white  bg-gray-900 w-screen relative z-10">
        Features
      </h1>
      <div className="flex flex-col text-xl text-center z-10">
        <div className="z-10 pt-30 px-0 flex flex-row justify-center ">
          {TeamData.members.map((member, index) => (
            <div key={index}>
              <MemberProfile member={member} />
            </div>
          ))}
        </div>{" "}
      </div>
      <div className="absolute inset-0 bg-black opacity-80 z-0"></div>
    </section>
  );
  /* return (
    <section
      id="team"
      className="flex flex-col  min-h-screen items-center w-screen relative text-white"
    >
      <h1 className="text-[60px] text-center font-bold bg-gray-900 w-screen z-10">
        The Team
      </h1>
      <div className="absolute inset-0 bg-black opacity-80 z-0 "></div>
      <div className="z-10 pt-30 px-0 flex flex-row justify-center ">
        {TeamData.members.map((member, index) => (
          <div key={index}>
            <MemberProfile member={member} />
          </div>
        ))}
      </div>
    </section> 
  );*/
};
