import React from "react";

const mint = () => {
  return (
    <div className="flex flex-col items-center">
      <img
        className="w-[150px] h-[206px] mt-[170px]"
        src="/images/mint.svg"
        alt=""
      />
      <button className="w-[336px] h-[46px] mt-[94px] bg-primary text-white rounded-[8px]">
        Mint your profile NFT
      </button>
    </div>
  );
};

export default mint;
