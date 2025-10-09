import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import UiLoading from "../components/UiLoading";

const RootLayout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if(loading) return <UiLoading />
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />

      <ToastContainer />
    </>
  );
};

export default RootLayout;
