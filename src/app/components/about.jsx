import React from "react";
import Image from "next/image";
import playerviewimage from "../components/assets/gameassets/player_view.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center w-screen relative "
    >
      <h1 className="text-[60px] text-center font-bold text-white  bg-gray-900 w-screen relative z-10 font-header">
        About Wrecked
      </h1>
      <div className="flex flex-col text-xl text-center text-white items-center w-screen h-screen relative">
        <div className="absolute inset-0 bg-black opacity-80 z-0"></div>
        <div className="relative z-10 w-full flex flex-col items-center  justify-around h-full">
          <p className="py-4">
            Around the coast of Skull Island lies a curse. Legends say that
            ships in the area mysteriously capsize and that when the crewmates
            and captain drown they are transformed into skeletons.
          </p>
          <p className="py-4">
            And worst of all, the curse seems to lock everyone who tries to
            reach the treasure in an endless time loop. Just when you reach
            the treasure, time rewinds back to when you were first
            shipwrecked.
          </p>
          <p className="py-4">
            Now we follow 4 pirates; Red Rogers, Yellow Yates, Green Gabby,
            and Pink Plunderer in their quest to reach the treasure.
          </p>
          <p className="py-4">
            Can they be the first pirates to collect 10 points and break the
            curse? Or will they be dragged to the depths by the thousands of
            previous pirates who have already succumbed to the depths?
          </p>
          <div className="">
            <Image src={playerviewimage} alt="player view" className="w-full rounded-lg shadow-lg border-solid border-2"/>
            <p className="pt-4">
              Our game is a local split-screen 3D-platformer party game set in
              an adventurous world full of treasure and pirates!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;