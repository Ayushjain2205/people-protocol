import React from "react";

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
        <img src="/images/logo.svg" alt="" />
      </div>
    </div>
  );
};

export default Landing;
