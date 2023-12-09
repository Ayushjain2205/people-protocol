interface Provider {
  name: string;
  rating: string;
  distance: string;
  location: string;
  services: string[];
  imageUrl: string;
}

const ProviderCard: React.FC<{ provider: Provider }> = ({ provider }) => {
  return (
    <div className="flex flex-row justify-between w-[336px] h-[120px] border border-[#26262614] rounded-[10px] bg-[#fbfbfb]">
      <div className="flex flex-col py-[14px] ml-[20px]">
        <span className="text-[16px] font-[400]">{provider.name}</span>
        <span className="text-[12px] font-[400] text-[#00000070] mt-[5px]">
          {provider.rating} | {provider.distance}km away, {provider.location}
        </span>
        <div className="flex flex-row gap-[10px] mt-[30px]">
          {provider.services.map((service, index) => (
            <span key={index} className="text-[#7a7a7a] text-[10px]">
              {service}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center h-full mr-[12px]">
        <img className="h-[97px] w-[88px]" src={provider.imageUrl} alt="" />
      </div>
    </div>
  );
};

export default ProviderCard;
