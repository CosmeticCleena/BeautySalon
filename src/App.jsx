import React, {useEffect} from "react";
import { Outlet ,useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import BackGround from "/img/BackGround.svg";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();

  // Cuộn lên đầu trang mỗi khi URL thay đổi
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
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
