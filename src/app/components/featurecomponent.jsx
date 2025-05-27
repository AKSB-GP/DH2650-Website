import React from "react";
import Image from "next/image";
import Link from "next/link";
import featuresData from "../features.json";

const FeatureComponent = () => {
  const featuresObj = featuresData.features[0];
  //object till array
  const featuresArr = Object.entries(featuresObj);

  return (
    <div className="flex flex-wrap justify-center gap-8 text-white">
      {featuresArr.map(([name, { logo, desc }]) => (
        <div
          key={name}
          className="flex flex-col items-center rounded-xl shadow-lg p-6 m-4 max-w-xs  bg-gray-900 "
        >
          <Image
            src={logo}
            alt={name }
            width={80}
            height={80}
            className="mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">{name}</h2>
          <p>{desc}</p>
        </div>
      ))}
    </div>
  );
};


export default FeatureComponent;
