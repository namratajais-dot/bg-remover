import React from "react";
import { assets } from '../assets/assets/assets'

const Upload = () => {
  return (
    <div className="pb-16">
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-bold text-white py-6 md:py-16">
        See the magic. Try now{" "}
      </h1>

      <div className="text-center mb-24">
        <input type="file" name="" id="upload2" hidden />
        <label
          className=" inline-flex items-center justify-center gap-3 px-6 py-2 rounded-full cursor-pointer bg-gradient-to-r from-blue-900 to-blue-600 m-auto hover:scale-105 transition-all duration-700 "
          htmlFor="upload2"
        >
          <img
            className="w-10 h-10"
            src={assets.upload_btn_icon}
            alt="Upload Button Icon"
          />

          <p className="text-white text-sm"> Upload Your Image</p>
        </label>
      </div>
    </div>
  );
};

export default Upload;
