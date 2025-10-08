import logo from "../assets/logo.png"
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#001931]">
      <div className="container mx-auto">
        <div className="pt-[35px] flex justify-between items-center border-b-1 border-[#627382] pb-2">
          <div className="flex gap-2">
            <img className="w-7" src={logo} alt="" />
            <h2 className="text-white">B12A08 Apps Store</h2>
          </div>
          <div className="text-white">
            <h2>Social Links</h2>
            <div className="flex gap-4 mt-2 cursor-pointer">
              <TbBrandLinkedinFilled />
              <FaTwitterSquare />
              <FaFacebookSquare />
            </div>
          </div>
        </div>
        <div className="py-[30px] text-center">
          <small className="text-white">Copyright © 2025 - All right reserved</small>
        </div>
      </div>
    </div>
  )
}

export default Footer