import { useState } from "react";
import LoadingScreen from "./Components/LoadingScreen";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";

const App = () => {
  const [isloaded, setIsLoaded] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  return (
    <>
      {!isloaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isloaded ? "opacity-100" : "opacity-0"
        } bg-black`}
      >
        <Navbar isMenu={isMenu} setIsMenu={setIsMenu} />
        <Home />
        <About />
        <Projects/>
        <Contact />
      </div>
    </>
  );
};

export default App;
