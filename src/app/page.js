import Navbar from "./components/navbar.jsx";
import {TeamSection} from "./components/team.jsx";
import About from "./components/about.jsx";
import features from "../app/features.json"; 
//import Gallery from "./components/gallery.jsx";
import Start from "./components/home.jsx";
import data from "../app/data.json";
import Features from "./components/features.jsx";
export default function Home() {
  return (
<div className="flex flex-col bg-[url(/wrecked.png)] bg-cover bg-center bg-fixed w-screen  min-h-screen text-white snap-x">
    <Navbar/> 
  <div className="flex flex-col items-center justify-center ">
    <Start/>
    <About/>
    <Features Features={features}/>
    <TeamSection TeamData={data} />
  </div>
</div>
  );
}
