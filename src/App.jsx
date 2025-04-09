import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import BackGround from "/img/BackGround.svg";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <div
        className="min-h-screen w-full p-0 m-0 text-[16px] bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `url(${BackGround})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
