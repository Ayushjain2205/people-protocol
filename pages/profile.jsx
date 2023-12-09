import Link from "next/link";
import React from "react";

const profile = () => {
  return (
    <div className="flex flex-col  pt-[30px]">
      <div className="flex flex-row px-[27px] justify-between">
        <Link href="/providers">
          <img src="/icons/back.svg" alt="" />
        </Link>
        <img src="/icons/menu.svg" alt="" />
      </div>
      <div className="flex flex-row justify-between px-[27px] pb-[30px] border-b border-[#EFEFEF]">
        <div className="flex flex-col mt-[26px]">
          <span className="text-[20px] font-[500] mb-[6px]">Jayesh Shah</span>
          <span className="text-[12px]">Cleaning</span>
          <span className="text-[12px]">Cooking</span>
          <span className="text-[12px]">Baby Sitting</span>
          <span className="text-[12px]">Dog walking</span>
          <span className="flex flex-row gap-[6px] mt-[15px] text-[12px] text-[#0FA958]">
            <img src="/icons/verified.svg" alt="" />
            AADHAR VERIFIED
          </span>
          <span className="text-[#7A7A7A] text-[12px]">
            Joined 5 months ago
          </span>
        </div>
        <div className="flex flex-col mt-[26px]">
          <img
            className="w-[136px] h-[146px]"
            src="/images/providers/provider4.png"
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-row py-[14px] px-[27px] gap-[5px] border-b border-[#EFEFEF]">
        <img src="/icons/location.svg" alt="" />
        <span className="text-[#00000050] text-[14px]">
          20 people near you used this service
        </span>
      </div>
      <div className="flex flex-col px-[27px] py-[20px] border-b border-[#EFEFEF]">
        <div className="flex flex-row w-full justify-between mb-[30px]">
          <div className="flex flex-col">
            <span className="text-[13px] text-[#00000050]">CLIENTS</span>
            <span className="text-[16px] font-[500]">25</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[13px] text-[#00000050]">RETENTION</span>
            <span className="text-[16px] font-[500]">20</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[13px] text-[#00000050]">PERFORMANCE</span>
            <span className="text-[16px] font-[500]">4/5</span>
          </div>
        </div>
        <Link href="/schedule">
          <button className="w-full  flex flex-row items-center justify-center bg-primary rounded-[8px] h-[46px] text-white text-[500]">
            Schedule service
          </button>
        </Link>
      </div>
      <div className="flex flex-col px-[27px] py-[20px] border-b border-[#EFEFEF]">
        <p className="text-[14px]">MY SUPERPOWERS</p>
        <ul className="list-disc list-inside mt-[11px]">
          <li className="text-[12px]">Punctual</li>
          <li className="text-[12px]">High Retention Rate</li>
          <li className="text-[12px]">Fully equipped tools </li>
          <li className="text-[12px]">Quick and efficient</li>
          <li className="text-[12px]">Cleaning in less than 3 hours</li>
        </ul>
      </div>
      <div className="flex flex-col px-[27px] py-[20px] border-b border-[#EFEFEF]">
        <p className="text-[14px]">REVIEW FROM CLIENT</p>

        <p className="text-[12px] mt-[10px]">
          Endorsed for cleaning by 6 people
        </p>
        <p className="text-[12px]">Endorsed for dog walking by 10 people</p>
        <div className="flex flex-row mt-[15px] justify-between">
          <div className="text-[12px] w-[153px]">Always on time</div>
          <div className="flex flex-row gap-[5px]">
            <img src="/icons/star-full.svg" alt="" />
            <img src="/icons/star-full.svg" alt="" />
            <img src="/icons/star-full.svg" alt="" />
            <img src="/icons/star-empty.svg" alt="" />
            <img src="/icons/star-empty.svg" alt="" />
          </div>
        </div>
        <div className="flex flex-row mt-[10px] justify-between">
          <div className="text-[12px] w-[153px]">Great cleaning</div>
          <div className="flex flex-row gap-[5px]">
            <img src="/icons/star-full.svg" alt="" />
            <img src="/icons/star-full.svg" alt="" />
            <img src="/icons/star-full.svg" alt="" />
            <img src="/icons/star-full.svg" alt="" />
            <img src="/icons/star-empty.svg" alt="" />
          </div>
        </div>
        <p className="text-[14px] underline mt-[35px]">View client history</p>
      </div>
    </div>
  );
};

export default profile;
