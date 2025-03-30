import { SetStateAction } from "react";

const Navbar = ({
  isMenu,
  setIsMenu,
}: {
  isMenu: boolean;
  setIsMenu: React.Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <nav className="w-full fixed top-0 left-0 bg-[rgba(10,10,10,0.8)] shadow-lg text-white p-4 backdrop-blur-lg z-40 border-b border-white/10">
      <div className="max-w-5xl  mx-auto">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-bold font-mono text-xl">
            Shibin <span className="text-blue-500">M S</span>
          </a>

          {/* Mobile Menu */}
          <div
            className="w-7 h-5 relative z-40 md:hidden cursor-pointer"
            onClick={() => setIsMenu((prev) => !prev)}
          >
            {isMenu ? "✖" : "☰"}
          </div>

          {/* Desktop Menu */}

          <div className="hidden md:flex items-center justify-between gap-4 ">
            <a
              href="#home"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>

          {isMenu && (
            <div className="fixed top-0 left-0 flex h-screen justify-center items-center bg-opacity-90 bg-[rgba(10,10,10,0.8)] shadow-lg backdrop-blur-lg text-white w-full mt-5">
              <div className=" flex flex-col gap-4 items-center ">
                <a
                  href="#home"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => setIsMenu(false)}
                >
                  Home
                </a>
                <a
                  href="about"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => setIsMenu(false)}
                >
                  About
                </a>
                <a
                  href="projects"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => setIsMenu(false)}
                >
                  Projects
                </a>
                <a
                  href="contact"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => setIsMenu(false)}
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
