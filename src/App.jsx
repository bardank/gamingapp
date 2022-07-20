import { Fragment, useState } from "react";
import Home from "./components/Home";
import News from "./components/News";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Favourite from "./components/Favourite";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="p-4 md:p-6 lg:px-12 lg:py-9 w-screen">
      <div className="header w-full flex justify-center items-center ">
        <button className="bg-black text-white p-4 opacity-80 font-extrabold tracking-[.3em]">
          Gaming Blog
        </button>
      </div>
      <Navbar />
      <Home id="home" />
      <News id="news" />
      <About id="about" />
      <Favourite id="favourite" />
      <Footer id="contact" />
    </div>
  );
}

export default App;
