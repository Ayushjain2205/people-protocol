import React from "react";
import Link from "next/link";

const otp = () => {
  return (
    <div className="flex flex-col px-[27px] py-[30px]">
      <div className="flex flex-row justify-between">
        <Link href="/schedule">
          <img src="/icons/back.svg" alt="" />
        </Link>
        <img src="/icons/menu.svg" alt="" />
      </div>

      <div>
        <p className="w-full font-[20px] mt-[200px] text-center">
          Share OTP to start service
        </p>
      </div>

      <div>
        <p className="w-full text-[40px] mt-[22px] text-center text-[#FC7904] font-semibold">
          643-472
        </p>
      </div>

      <div>
        <button className="w-full h-[40px] rounded-[6px] bg-white mt-[200px] underline text-[14px] text-center">
          <p className="text-[#000000]">Reschedule</p>
        </button>
      </div>
    </div>
  );
};

export default otp;
