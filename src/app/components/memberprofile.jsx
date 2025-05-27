import React from "react";
import Image from "next/image";
import Link from "next/link";



const Memberprofile = ({member}) => {
  
    return (
    <div className="flex flex-col bg-orange-300 p-4 m-4 rounded-lg">
      <h1 className="text-xl font-bold">{member.name}</h1>
        <Image
            src={member.image.src}
            alt={member.image.alt}
            width={member.image.width}
            height={member.image.height}
        />

        <ul className="list-disc list-inside mt-2">
            {member.responsibilities.map((responsibility) => (
            <li>{responsibility}</li>
            ))}
        </ul>
      <p className="mt-2">{member.desc}</p>
        <div className="flex space-x-4 mt-2">
            {Object.entries(member.socials).map(([platform, url]) => (
            <Link href={url} target="_blank">
              {platform}
            </Link>
            ))}
     </div>

    </div>
  );
};

export default Memberprofile;
