import Navbar from "./components/navbar.jsx";
import Team from "./components/team.jsx";
import Features from "./components/features.jsx";
import Gallery from "./components/gallery.jsx";
import Start from "./components/home.jsx";
export default function Home() {
  return (
   <div className="flex flex-col bg-red w-screen h-screen bg-fixed">
    <div className = " bg-gray-900 text-white">
      <Navbar/> 
    </div>
    <div class="flex flex-col items-center justify-center h-screen bg-cover bg-no-repeat bg-center">
      <Start/>
      <Features/>
      <Gallery/>
      <Team/>
    </div>

  
   </div>
  );
}
