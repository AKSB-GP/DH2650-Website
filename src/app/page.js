import Navbar from "./components/navbar.jsx";



export default function Home() {
  return (
   <div className="flex flex-col bg-red w-screen h-screen bg-fixed">
    <div className = " bg-gray-900 text-white">
    <Navbar/> </div>

     <section id="home" >
        <h1>Welcome to My Game</h1>
      </section>

      <section id="features" >
        <h2>Features</h2>
        <p>Cool mechanics, great graphics, etc.</p>
      </section>

      <section id="gameplay" >
        <h2>Gameplay</h2>
        <p>Here's how the game works...</p>
      </section>

      <section id="team" >
        <h2>The team behind Wrecked</h2>
        <p></p>
      </section>



   </div>
  );
}
