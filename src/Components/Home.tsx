const Home = () => {
  return (
    <div
      className="min-h-screen flex justify-center items-center bg-black"
      id="home"
    >
      <div className="max-w-2xl w-full space-y-7 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Hi, I'm Shibin M S
        </h1>
        <p className="text-gray-600 text-lg font-semibold mx-auto leading-relaxed">
          I am a passionate{" "}
          <span className="text-teal-400">Full-Stack Developer</span> with
          experience in the
          <span className="text-blue-400"> MERN stack</span>,{" "}
          <span className="text-purple-400">Next.js</span>, and{" "}
          <span className="text-yellow-400">SQL</span>. I specialize in building{" "}
          <span className="text-green-400">scalable web applications</span>,
          interactive UIs, and efficient backend systems. My expertise includes
          state management with
          <span className="text-red-400"> Zustand</span>, authentication with{" "}
          <span className="text-blue-300">Clerk</span>, and database management
          with <span className="text-pink-400">MongoDB</span>.
        </p>
        <div className="flex items-center gap-4 justify-center">
          <a className="px-6 py-3 rounded-xl text-white text-lg font-semibold shadow-lg transition-all duration-300 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-indigo-500 hover:scale-105">
            View Projects
          </a>
          <a
            className="px-6 py-3 rounded-xl text-white text-lg font-semibold shadow-lg transition-all duration-300 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-indigo-500 hover:scale-105"
            href="#contact"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
