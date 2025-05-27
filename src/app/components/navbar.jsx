const Navbar = () => {
  return (
    <nav className="bg-amber-600 bg-opacity-90 w-screen px-25">
      <div className="flex flex-row items-center justify-between w-full h-15">
        <h1 className="text-bold text-3xl font-header">Wrecked</h1>
        <div className="flex flex-row space-x-15 pr-10 text-2xl">
          <a href="#about" className="px-4">
            About
          </a>
          <a href="#features" className="px-4">
            Features
          </a>
          <a href="#team" className="px-4">
            Team
          </a>
        </div>
      </div>
    </nav>
  );
};


//   return (
//     <nav className="relative px-40 text-xl text-black ">

//       <div className="absolute inset-0 bg-amber-300  z-0 "></div>
//       <div className="relative flex flex-row justify-left ">
//         <h1 className="text-bold text-3xl pr-20">Wrecked</h1>

//         <div className="px-100 ">
//           <a href="#about" className="px-20">
//             About
//           </a>
//           <a href="#features" className="px-20">
//             Features
//           </a>
//           <a href="#team" className="px-20">
//             Team
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// };

export default Navbar;
