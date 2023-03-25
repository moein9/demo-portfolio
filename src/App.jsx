import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import Portfolio from "./components/main-portfolio";

function App() {
  const [isNightMode, setIsNightMode] = useState(false);

  function toggleNightMode() {
    setIsNightMode(!isNightMode);
  }

  return (
    <div
      className={isNightMode ? "bg-gray-800 text-white" : "bg-white text-black"}
    >
      <main className="bg-white px-10 ">
        <section className=" min-h-screen">
          <Navbar isNightMode={isNightMode} toggleNightMode={toggleNightMode} />
          <Portfolio isNightMode={isNightMode} />
        </section>
      </main>
    </div>
  );
}

export default App;
