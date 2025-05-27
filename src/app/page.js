import Navbar from "./components/navbar.jsx";
import {TeamSection} from "./components/team.jsx";
import Features from "./components/features.jsx";
import Gallery from "./components/gallery.jsx";
import Start from "./components/home.jsx";
import data from "../app/data.json";

export default function Home() {
  return (
   <div className="flex flex-col  bg-[url(/wrecked.png)] bg-justify-center bg-no-repeat
">
    <div className = " bg-gray-900 text-white">
      <Navbar/> 
    </div>
    <div className="flex flex-col items-center justify-center">
      <Start/>
      <Features/>
      <Gallery/>
      <TeamSection TeamData={data} />
    </div>

  
   </div>
  );
}
