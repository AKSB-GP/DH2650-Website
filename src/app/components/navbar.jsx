import Link from "next/link";
import Image from "next/image";

const Navbar = () =>{
  return (

    <nav className ="flex flex-row justify-between items-start py-5 px-40 text-xl">
      <a href="#home">Home</a>
      <a href="#features">Features</a>
      <a href="#Gallery">Gallery</a>
      <a href="#team">Team</a>
    </nav>
  );
}

export default Navbar;