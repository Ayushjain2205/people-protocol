import React, { useEffect } from "react";
import { useRouter } from "next/router";

const Landing = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/aadhar");
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img
        className="w-[390px] h-[250px] -mt-[100px] animate-pulse"
        src="/images/landing.png"
        alt=""
      />
    </div>
  );
};

export default Landing;
