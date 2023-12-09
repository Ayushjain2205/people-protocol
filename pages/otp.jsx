import React, { useState, useEffect } from "react";
import Link from "next/link";

const Otp = () => {
  // State to store the OTP
  const [otp, setOtp] = useState("");

  // Function to generate a random 6-digit number as a string with a hyphen after the first three digits
  const generateOtp = () => {
    const randomSixDigitNumber = Math.floor(100000 + Math.random() * 900000);
    const otpString = randomSixDigitNumber.toString();
    const otpWithHyphen =
      otpString.substring(0, 3) + "-" + otpString.substring(3);
    setOtp(otpWithHyphen);
  };

  // Use `useEffect` to generate an OTP on component mount
  useEffect(() => {
    generateOtp();
  }, []);

  return (
    <div className="flex flex-col px-[27px] py-[30px]">
      <div className="flex flex-row justify-between">
        <Link href="/schedule">
          <img src="/icons/back.svg" alt="Back" />
        </Link>
        <img src="/icons/menu.svg" alt="Menu" />
      </div>

      <div>
        <p className="w-full font-[20px] mt-[200px] text-center">
          Share OTP to start service
        </p>
      </div>

      <div>
        <p className="w-full text-[40px] mt-[22px] text-center text-[#FC7904] font-semibold">
          {otp}
        </p>
      </div>

      <div>
        <button
          onClick={generateOtp} // Regenerate OTP when button is clicked
          className="w-full h-[40px] rounded-[6px] bg-white mt-[200px] underline text-[14px] text-center"
        >
          <p className="text-[#000000]">Reschedule</p>
        </button>
      </div>
    </div>
  );
};

export default Otp;
