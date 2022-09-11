import Image from "next/image";
import React from "react";

function Nav() {
  return (
    <nav className="xs:h-18 flex w-full items-center justify-between bg-DarkBlueColor px-3 font-poppins xs:flex-col xs:gap-1">
      <div className="flex items-center gap-1">
        <div className="relative h-10 w-8 ">
          <Image
            src="/img/logo.png"
            layout="fill"
            objectFit="contain"
            alt="Logo"
          />
        </div>
        <p className="bg-gradient-to-b from-GrayColor to-PinkishColor bg-clip-text font-bold text-transparent">
          Workoutly
        </p>
      </div>
      <div className="flex items-center justify-between py-1 text-white xs:w-11/12">
        <div className="flex justify-between xs:w-10/12 xs:text-xs">
          <p>Home</p>
          <p>Exercise tracker</p>
          <p>Diet plan</p>
        </div>
        <i className="fa-solid fa-power-off cursor-pointer text-PinkishColor xs:text-lg"></i>
      </div>
    </nav>
  );
}

export default Nav;
