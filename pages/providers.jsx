import React from "react";
import ProviderCard from "../components/ProviderCard";
import Link from "next/link";

const Providers = () => {
  const providerList = [
    {
      name: "Jayesh Shah",
      rating: "2/5",
      distance: "6",
      location: "Bangalore",
      services: ["Car washing", "Cooking", "Gardening"],
      imageUrl: "/images/providers/provider4.png",
    },
    {
      name: "Aarti Singh",
      rating: "3/5",
      distance: "2",
      location: "Bangalore",
      services: ["Cleaning", "Cooking", "Gardening"],
      imageUrl: "/images/providers/provider1.png",
    },
    {
      name: "Manisha Bhatt",
      rating: "4/5",
      distance: "4",
      location: "Bangalore",
      services: ["Baby sitting", "Cleaning", "Cooking"],
      imageUrl: "/images/providers/provider2.png",
    },
    {
      name: "Shabir Khan",
      rating: "4/5",
      distance: "8",
      location: "Bangalore",
      services: ["Carpentering", "Deep Cleaning"],
      imageUrl: "/images/providers/provider3.png",
    },
  ];
  return (
    <div className="flex flex-col  pt-[30px] px-[27px]">
      <div className="flex flex-row justify-between">
        <Link href="/feed">
          <img src="/icons/back.svg" alt="" />
        </Link>
        <img src="/icons/menu.svg" alt="" />
      </div>
      <p className="text-primary text-[20px] font-medium mt-[26px]">
        House Cleaning
      </p>

      <div className="flex flex-col gap-[30px] mt-[45px]">
        {providerList.map((provider, index) => (
          <ProviderCard key={index} provider={provider} />
        ))}
      </div>
    </div>
  );
};

export default Providers;
