const Navbar = () => {
  return (
    <nav className="relative flex flex-row justify-between items-start py-5 px-40 text-xl text-white">
      <div className="absolute inset-0 bg-gray-800 opacity-90 pointer-events-none z-0"></div>
      <div className="relative z-10 flex flex-row gap-8 w-full justify-between">
        <a href="#about">About</a>
        <a href="#features">Features</a>
        <a href="#team">Team</a>
      </div>
    </nav>
  );
}

export default Navbar;