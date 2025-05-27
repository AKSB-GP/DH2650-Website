import React from "react";
import Image from "next/image";
import Link from "next/link";

const Memberprofile = ({ member }) => {
  return (
    <div className="flex flex-col bg-orange-300 p-4 m-8 rounded-lg items-center">
      <div className="">
        <h1 className="text-xl font-bold text-center">{member.name}</h1>
        <Image
          className="rounded-full "
          src={member.image.src}
          alt={member.image.alt}
          width={member.image.width}
          height={member.image.height}
        />
      </div>

      <div className="flex flex-row items-center justify-left mt-2 ">
        <ol className="flex flex-col gap-2 text-center  p-4 rounded-xl">
          {member.responsibilities.map((responsibility, index) => (
            <li key={index}>
              <div className="rounded-lg px-2 py-1 shadow-lg bg-gradient-to-r from-orange-200 via-orange-150 to-orange-100 ">
                {responsibility}
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="flex flex-col space-x-4 mt-2">
        <p className="mt-2">{member.desc}</p>
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
