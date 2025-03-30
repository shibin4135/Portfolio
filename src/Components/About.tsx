const About = () => {
  const frontendSkills = [
    "Next Js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "JavaScript",
  ];
  const backendSkills = ["Node.js", "Express", "MongoDB"];

  return (
    <div
      id="about"
      className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white px-6"
    >
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
        About Me
      </h1>

      <div className="max-w-2xl w-full bg-gray-800 p-6 rounded-lg flex flex-col justify-center mt-4 items-center space-y-6">
        <p className="text-center ">
          A Passionate full stack developer who loves creating intuitigve and
          efficient web applications
        </p>

        <div className="flex flex-col items-center max-w-sm w-full justify-center">
          <h1 className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent text-3xl font-bold">
            Frontend
          </h1>
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            {frontendSkills.map((skill) => {
              return (
                <button className="px-4 py-2 text-white bg-gradient-to-r from-blue-500 to bg-purple-600 rounded-lg font-medium shadow-lg transition-transform hover:scale-150 duration-100 hover:-translate-y-3 hover:rotate-9 ease-in">
                  {skill}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col items-center max-w-sm w-full justify-center">
          <h1 className="text-2xl font-bold text-teal-400">Backend</h1>
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            {backendSkills.map((skill) => {
              return (
                <button className="px-4 py-2 text-white bg-gradient-to-r from-green-500 to-teal-500  rounded-lg font-medium shadow-lg transition-transform hover:scale-150 duration-100 hover:-translate-y-3 hover:rotate-9 ease-in">
                  {skill}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="bg-gray-800 p-4 rounded-lg space-y-5 mt-4 shadow-md max-w-xl w-full  flex flex-col items-center">
        <h1 className="text-2xl font-bold text-teal-400 ">Education</h1>
        <div className="bg-gray-900 max-w-lg rounded-lg p-4 space-y-3">
          <p>
            <strong>Btech</strong> in Computer Science and Engineering
          </p>
          <p className="text-gray-400 text-sm">
            Yenepoya Institute of Technology University | 2021 - 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
