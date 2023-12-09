import React from "react";

const Feed = () => {
  const services = [
    { image: "/images/services/service1.svg", name: "House Cleaning" },
    { image: "/images/services/service2.svg", name: "Electricity" },
    { image: "/images/services/service3.svg", name: "Carpentry" },
    { image: "/images/services/service4.svg", name: "Baby sitting" },
    { image: "/images/services/service5.svg", name: "Cooking" },
    { image: "/images/services/service6.svg", name: "Dog walking" },
  ];

  return (
    <div className="flex flex-col px-[27px] pt-[30px]">
      <div className="flex flex-row justify-end">
        <img src="/icons/menu.svg" alt="" />
      </div>

      <div className="flex flex-col">
        <p className="text-primary text-[20px] font-medium">Our superpowers</p>
        <p className="text-[12px]">Opt for a service</p>

        {/* Grid layout for services */}
        <div className="grid grid-cols-3 gap-[20px] mt-[30px]">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <div className="h-[92px] w-[92px] rounded-[10px] border border-black flex items-center justify-center">
                <img src={service.image} alt={service.name} />
              </div>
              <span className="text-[12px] w-[92px] text-center">
                {service.name}
              </span>
            </div>
          ))}
        </div>

        <p className="text-primary text-[16px] font-medium mt-[60px]">
          Superhumans near you
        </p>
      </div>
    </div>
  );
};

export default Feed;
