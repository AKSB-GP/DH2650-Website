import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
  return (


    <nav className ="flex flex-row justify-evenly items-start py-5 px-10">
      <Image scr="/globe.svg" alt="logo"></Image>
      <a href="#home">Home</a>
      <a href="#features">Features</a>
      <a href="#Gallery">Gallery</a>
      <a href="#team">Team</a>
    </nav>
  );
}
