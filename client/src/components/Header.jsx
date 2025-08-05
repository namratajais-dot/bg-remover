import React from "react";
import { assets } from "../assets/assets/assets";

const Header = () => {
  return (
    <div className=" flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20">
      {/* ........Left Side...... */}
      <div>
        <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white leading-tight ">
          Remove the<br className="max-md:hidden"/>
           {"  "}
          <span className="bg-gradient-to-r from-blue-800 to-blue-300 bg-clip-text text-transparent">
            Background 
          </span>
            {"  "}
           from <br className="max-md:hidden" />
          images for free
        </h1>
        <p className="my-6 text-[18px] text-gray-200 ">
          Lorem ipsum dolor sit amet consectetur, gnissimos nihil, sunt
          repudiandae , <br className=" max-sm:hidden" /> magnam eveniet, expedita modi distinctio quam?
          Ad, ducimus exercitationem.
        </p>
        <div>
          <input type="file" name="" id="upload1" hidden />
          <label className=" inline-flex items-center justify-center gap-3 px-6 py-2 rounded-full cursor-pointer bg-gradient-to-r from-blue-900 to-blue-600 m-auto hover:scale-105 transition-all duration-700 " htmlFor="upload1">
            <img
              className="w-10 h-10"
              src={assets.upload_btn_icon}
              alt="Upload Button Icon"/>
            <p className="text-white text-sm" > Upload Your Image</p>
          </label>
        </div>
      </div>



      {/* ........Left Side...... */}

      {/* ........Right Side..... */}
      <div className=" w-full max-w-md ">
     <img src={assets.header_img} alt="" />



      </div>
      {/* ........Right Side..... */}
    </div>
  );
};

export default Header;
