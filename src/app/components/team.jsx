import React from "react";
import MemberProfile from "./memberprofile";

export const TeamSection = ({ TeamData }) => {
  return (
 <section
      id="team"
      className="min-h-screen flex flex-col items-center w-screen relative snap-top"
    >
      <h1 className="text-[60px] text-center font-bold text-white  bg-gray-800 w-screen relative z-10">
        The Team
      </h1>
      <div className="flex flex-col text-xl text-center text-white items-center w-screen h-screen relative">
        <div className="absolute inset-0 bg-black opacity-80  z-0"></div>
        <div className="relative z-10 w-full flex flex-col items-center">
          <div className="flex flex-wrap justify-center justify-between items-center">
           {TeamData.members.map((member, index) => (
             <MemberProfile key={index} member={member}></MemberProfile>
           ))}
         </div>
        </div>
      </div>
    </section>

  )







  // return (
  //     <section id="team">
  //       <h1>The team</h1>
  //       <p> Our team wanted to create .....</p>
  //       <div className="flex flex-wrap justify-center justify-between items-center">
  //         {TeamData.members.map((member, index) => (
  //           <MemberProfile key={index} member={member}></MemberProfile>
  //         ))}
  //       </div>
  //     </section>
  // );
};
