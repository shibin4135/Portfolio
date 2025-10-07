const Projects = () => {
  const projects = [
    {
      title: "Full Stack Blog App",
      description: "Built a full-stack blog application with features like bookmarks, likes, comments, and pagination. Focused on creating a clean, responsive UI with React while implementing REST API and database design",
      link: "https://blog.shibinx.dev",
    },
    {
      title: "Full Stack Job Portal",
      description:
        "A full-stack job portal built with Next.js, Prisma, TypeScript, and Tailwind CSS. It enables users to sign up, log in/out, create and apply for jobs, and browse all available listings through a clean, responsive interface powered by a robust backend.",
      link: "https://jobport-ten.vercel.app",
    },
    {
      title: "Quiz-App",
      description:
        "Created a Basic Quiz app using React and Typescript With timer for each question and Sound Effects",
      link: "https://github.com/shibin4135/Quiz-App-",
    },
    {
      title: "Recipe-App",
      description:
        " A simple and intuitive CRUD application for managing recipes. Add, edit, view, and delete your favorite recipes with ease. Built for a seamless user experience with a responsive design and efficient data handling.",
      link: "https://github.com/shibin4135/Recipe",
    },
  ];

  return (
    <section id="projects" className="py-12 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition"
            >
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <a href={project.link} className="text-blue-400 hover:underline">
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
