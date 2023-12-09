// @ts-nocheck
import Link from "next/link";
import React, { useState } from "react";

const feed = () => {
  const [selectedTime, setSelectedTime] = useState(null);

  const timeSlots = ["8:00", "10:00", "13:00"]; // Add as many timeslots as needed

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  return (
    <div className="flex flex-col px-[27px] py-[30px]">
      <div className="flex flex-row justify-between">
        <Link href="/profile">
          <img src="/icons/back.svg" alt="" />
        </Link>
        <img src="/icons/menu.svg" alt="" />
      </div>

      <div>
        <p className="text-black text-[20px] font-medium mt-[26px]">
          Schedule your service with Jay
        </p>

        <div>
          <p className="text-black text-[14px] mt-[30px]">Choose service</p>
        </div>

        <div className="flex flex-row justify-between items-center w-[336px] h-[48px] border border-black rounded-[6px] mt-[8px] px-[8px]">
          <select className="w-[336px] border-none appearance-none outline-none focus:outline-none">
            <option value="option1">House cleaning</option>
            <option value="option2">Cooking</option>
            <option value="option3">Baby Sitting</option>
            <option value="option4">Dog walking</option>
          </select>
        </div>

        <div>
          <p className="text-black text-[14px] mt-[30px]">Date</p>
          <input
            type="date"
            className="w-[336px] h-[48px] border border-black rounded-[6px] mt-[8px] px-[12px]"
          />
        </div>

        <div>
          <p className="text-black text-[14px] mt-[30px]">Select time slot</p>
        </div>

        <div className="flex flex-row justify-between gap-[20px]">
          {timeSlots.map((time) => (
            <button
              key={time}
              onClick={() => handleTimeSelect(time)}
              className={`w-[94px] h-[40px] rounded-[6px] ${
                selectedTime === time
                  ? "bg-primary text-white"
                  : "bg-white text-black"
              } border border-black mt-[10px] font-regular text-[14px]`}
            >
              {time}
            </button>
          ))}
        </div>

        <div>
          <button className="w-[336px] h-[46px] rounded-[6px] bg-[#FC7904] mt-[60px] font-regular text-[14px]">
            <p className="text-[#FFFFFF] text-[16px] font-[500]">Pay now</p>
          </button>
        </div>

        <div>
          <Link href="/otp">
            <button className="w-[336px] h-[40px] rounded-[6px] bg-white mt-[20px] underline text-[14px]">
              <p className="text-[#000000] text-[16px]">Pay after service</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default feed;
