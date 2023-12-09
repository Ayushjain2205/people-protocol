import React from "react";
import Link from "next/link";

const Landing = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 bg-[#FC770020]"></div>
      <div
        className="absolute inset-0 flex flex-col items-center"
        style={{
          background:
            "linear-gradient(0deg, rgba(252, 119, 0, 0.20) 0%, rgba(252, 119, 0, 0.20) 100%), radial-gradient(87.79% 88.47% at 50% 50%, #FC7700 0%, rgba(252, 119, 0, 0.00) 100%)",
        }}
      >
        <p className="text-white mt-[80px] ml-[27px] mr-[94px] mb-[120px] text-[24px] leading-[28px]">
          Hello, what would you like to do?
        </p>
        <Link href="/mint">
          <button className="w-[336px] h-[55px] rounded-[8px] bg-white  mr-[27px] ml-[27px] font-medium">
            <p className="text-[#FC7904]">Use Superpowers</p>
          </button>
        </Link>
        <p className="text-[#FFFFFF60] mt-[10px] ml-[120px] mr-[120px]">
          be a user
        </p>

        <button className="w-[336px] h-[55px] rounded-[8px] bg-white mt-[65px] mr-[27px] ml-[27px] font-medium">
          <p className="text-[#FC7904]">Offer your Superpowers</p>
        </button>

        <p className="text-[#FFFFFF60] mt-[10px] ml-[102px] mr-[102px]">
          be a service provider
        </p>
      </div>
    </div>
  );
};

export default Landing;
