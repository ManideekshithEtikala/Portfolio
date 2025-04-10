import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import ExperienceIntern from "./components/ExperienceIntern";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Certification from "./components/Certification";
function App() {
  return (
    <>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-slate-200 selection:text-black">
        <div className="fixed top-0 -z-10 h-full w-full">

        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
        </div>
        <div className="container mx-auto px-8">

        <Navbar />
        <Main />
        <About />
        <Technologies/>
        <ExperienceIntern/>
        <Projects/>
        <Certification/>
        <Contact/>
        </div>
      </div>

    </>
  );
}

export default App;
