import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
const Navbar = () => {
  const [nav, setnav] = useState(false);
  return (
    <div className="w-full bg-black h-20">
      <div>
        <div className="w-full bg-black h-20 flex fixed justify-between items-center">
          <div className="text-white font-semibold text-3xl pl-3">
            <p>UrbanTech</p>
          </div>
          <div className="hidden md:flex justify-between text-white text-xl font-semibold mr-10 cursor-pointer ">
            <p className="mr-10 hover:text-[#349c68]">Home</p>
            <p className="mr-10 hover:text-[#349c68]">About</p>
            <p className="mr-10 hover:text-[#349c68]">Services</p>
            <p className="mr-10 hover:text-[#349c68]">Contact</p>
          </div>
          <div className=" pr-3 sm:hidden " onClick={() => setnav(!nav)}>
            {!nav ? (
              <IoMenu color="white" size={30} />
            ) : (
              <IoMdClose color="white" size={30} />
            )}
          </div>
        </div>
      </div>
      {nav && (
        <div className=" w-[80%] bg-black text-white fixed h-screen right-0 flex flex-col items-center top-20 z-20 ">
          <div className="flex flex-col items-center my-[35%]  ">
            <p
              onClick={() => {
                setnav(false);
              }}
              className="mb-6 text-2xl font-semibold">
              Home
            </p>
            <p
              onClick={() => {
                setnav(false);
              }}
              className="mb-6 text-2xl font-semibold">
              About
            </p>
            <p
              onClick={() => {
                setnav(false);
              }}
              className="mb-6 text-2xl font-semibold">
              Services
            </p>
            <p
              onClick={() => {
                setnav(false);
              }}
              className="mb-6 text-2xl font-semibold">
              Contact
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
