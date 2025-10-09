import { Outlet } from "react-router"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { ToastContainer } from "react-toastify"

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />

      <ToastContainer />
    </>
  )
}

export default RootLayout