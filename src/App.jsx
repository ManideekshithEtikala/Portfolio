import "./App.css";
import About from "./components/About";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-slate-200 selection:text-black">
    <Navbar/>
    <Main/>
    <About/>
    </div>
    <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
    </>
  );
}

export default App;
