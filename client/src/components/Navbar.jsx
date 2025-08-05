import React from "react";
import { assets } from "../assets/assets/assets";
import { Link } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { isSignedIn, user } = useUser(); 

  return (
    <div className="flex items-center h-20 justify-between py-0 px-3 lg:px-44 w-full bg-slate-400 border border-yellow-500">
      <Link to="/">
        <img className="w-40 rounded-full" src={assets.logo} alt="Logo" />
      </Link>

      {isSignedIn ? (
        <div>
          <UserButton />
        </div>
      ) : (
        <button
          onClick={() => openSignIn({})}
          className="bg-zinc-800 text-white flex items-center gap-4 px-4 py-2 sm:px-8 rounded-xl"
        >
          Get Started{" "}
          <img className="w-3 sm:w-4" src={assets.arrow_icon} alt="Arrow Icon" />
        </button>
      )}
    </div>
  );
};

export default Navbar;

