import React from "react";
import ProviderCard from "../components/ProviderCard";

const Providers = () => {
  const providerList = [
    {
      name: "Jayesh Shah",
      rating: "2/5",
      distance: "5",
      location: "Bangalore",
      services: ["Cleaning", "Cooking", "Baby sitting"],
      imageUrl: "/images/providers/provider1.png",
    },
    {
      name: "Jayesh Shah",
      rating: "2/5",
      distance: "5",
      location: "Bangalore",
      services: ["Cleaning", "Cooking", "Baby sitting"],
      imageUrl: "/images/providers/provider2.png",
    },
    {
      name: "Jayesh Shah",
      rating: "2/5",
      distance: "5",
      location: "Bangalore",
      services: ["Cleaning", "Cooking", "Baby sitting"],
      imageUrl: "/images/providers/provider3.png",
    },
    {
      name: "Jayesh Shah",
      rating: "2/5",
      distance: "5",
      location: "Bangalore",
      services: ["Cleaning", "Cooking", "Baby sitting"],
      imageUrl: "/images/providers/provider4.png",
    },
    // Add more provider objects here
  ];
  return (
    <div className="flex flex-col  pt-[30px] px-[27px]">
      <div className="flex flex-row justify-between">
        <img src="/icons/back.svg" alt="" />
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
