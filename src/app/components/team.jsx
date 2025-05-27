import React from "react";
import MemberProfile from "./memberprofile";

export const TeamSection = ({ TeamData }) => {
  return (
      <section id="team">
        <h1>The team</h1>
        <p> Our team wanted to create .....</p>
        <div className="flex flex-wrap justify-center justify-between items-center">
          {TeamData.members.map((member, index) => (
            <MemberProfile key={index} member={member}></MemberProfile>
          ))}
        </div>
      </section>
  );
};
