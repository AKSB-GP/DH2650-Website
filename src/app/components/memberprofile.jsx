import React from "react";
import Image from "next/image";
import Link from "next/link";

const Memberprofile = ({ member }) => {
  return (
    <div className="m-1 px-2">
      <div className="flex flex-col bg-gray-900 rounded-lg items-center text-white py-6">
        <Image
          className="rounded-full"
          src={member.image.src}
          alt={member.image.alt}
          width={member.image.width}
          height={member.image.height}
        />
        <div className="w-full">
          <h1 className="text-3xl font-bold text-center rounded-xl py-2">
            {member.name}
          </h1>
          <ol className="flex flex-wrap text-center rounded-x ">
            {member.responsibilities.map((responsibility, index) => (
              <li key={index}>
                <div className="rounded-lg px-2 mx-1 py-1 shadow-lg bg-gray-700">
                  {responsibility}
                </div>
              </li>
            ))}
          </ol>
        </div>
        {
          <div className=" pb-4 px-4 flex flex-col">
            <p className="mt-4 bg-gray-700 text-wrap w-96 rounded-lg p-2 break-words">
              {member.desc}
            </p>
          </div>
        }
        <div className="flex flex-row  ">
          {Object.entries(member.socials).map(([platform, url]) => (
            <Link
              href={url}
              target="_blank"
              key={platform}
              className="rounded-lg px-2 mx-1 py-1 shadow-lg bg-gray-700"
            >
              {platform}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Memberprofile;
