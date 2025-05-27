import React from "react";
import Image from "next/image";
import Link from "next/link";

const Memberprofile = ({ member }) => {
    return (
    <div className="flex flex-col bg-gradient-to-r from-orange-200 via-orange-150 to-orange-100 rounded-lg items-center text-gray-700 py-10">
      <Image
        className="rounded-full"
        src={member.image.src}
        alt={member.image.alt}
        width={member.image.width}
        height={member.image.height}
      />
      <div>
        <h1 className="text-3xl font-bold text-center rounded-xl">
          {member.name}
        </h1>
        <ol className="flex flex-wrap text-center rounded-xl py-4">
          {member.responsibilities.map((responsibility, index) => (
            <li key={index}>
              <div className="rounded-lg px-2 py-1 shadow-lg bg-gradient-to-r from-orange-250 via-orange-150 to-orange-100">
                {responsibility}
              </div>
            </li>
          ))}
        </ol>

      </div>
        <p className="mt-2">{member.desc}</p>
      <div className="flex flex-row space-x-4 mt-2">
        <div className="flex flex-row gap-4">
          {Object.entries(member.socials).map(([platform, url]) => (
            <Link href={url} target="_blank" key={platform}>
              {platform}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Memberprofile;

