import React from "react";
import Collapsible from "../components/Collapsible";

const Data = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center mb-[30px] ml-[60px] ">
        <img src="/images/data-logo.svg" alt="" />
        <span className="text-primary font-[700] text-[20px]">
          People Protocol
        </span>
      </div>
      <div className="flex flex-col px-[30px]">
        <p className="text-[32px] font-[600] mb-[43px]">EXPLORE THE API</p>
        <div className="border-t border-[#7A7A7A]">
          <Collapsible
            title="/superheroes/{type}"
            description="Get all superheroes providing a certain service"
            requestUrl="https://people-protocol.netlify.app/api/superheroes"
            curlCommand="curl -X 'GET' \
    'ttps://netlify.app/api/superheroes' \
    -H 'accept: application/json'"
            parameters={[
              {
                name: "service_type",
                description:
                  "The service you want to filter superheroes by. Eg- Carpenters, Cooks, Electricians etc.",
              },
            ]}
          />
          <Collapsible
            title="/superheroes/{type}/{rating}"
            description="Get all superheroes providing a certain service above a rating"
            requestUrl="https://people-protocol.netlify.app/api/superheroes"
            curlCommand="curl -X 'GET' \
    'ttps://netlify.app/api/superheroes' \
    -H 'accept: application/json'"
            parameters={[
              {
                name: "service_type",
                description:
                  "The service you want to filter superheroes by. Eg- Carpenters, Cooks, Electricians etc.",
              },
            ]}
          />
          <Collapsible
            title="/superhero/{id}"
            description="Get information about a particular superhero"
            requestUrl="https://people-protocol.netlify.app/api/superhero/id/"
            curlCommand="curl -X 'GET' \
    'ttps://netlify.app/api/superheroes' \
    -H 'accept: application/json'"
            parameters={[
              {
                name: "id",
                description: "ID of the superhero to query data",
              },
            ]}
          />
          <Collapsible
            title="/superhero/{id}/payment_history"
            description="Get payment history of a particular superhero"
            requestUrl="https://people-protocol.netlify.app/api/superheroes"
            curlCommand="curl -X 'GET' \
    'ttps://netlify.app/api/superheroes' \
    -H 'accept: application/json'"
            parameters={[
              {
                name: "service_type",
                description:
                  "The service you want to filter superheroes by. Eg- Carpenters, Cooks, Electricians etc.",
              },
            ]}
          />
          <Collapsible
            title="/user/{id}"
            description="Get booking history of a user"
            requestUrl="https://people-protocol.netlify.app/api/superheroes"
            curlCommand="curl -X 'GET' \
    'ttps://netlify.app/api/superheroes' \
    -H 'accept: application/json'"
            parameters={[
              {
                name: "user_id",
                description: "User ID of the user",
              },
            ]}
          />
          <Collapsible
            title="/user/{id}/payment"
            description="Get payment history of a particular user"
            requestUrl="https://people-protocol.netlify.app/api/superheroes"
            curlCommand="curl -X 'GET' \
    'ttps://netlify.app/api/superheroes' \
    -H 'accept: application/json'"
            parameters={[
              {
                name: "service_type",
                description:
                  "The service you want to filter superheroes by. Eg- Carpenters, Cooks, Electricians etc.",
              },
            ]}
          />
          <Collapsible
            title="/services"
            description="Get list of all available type of services"
            requestUrl="https://people-protocol.netlify.app/api/services"
            curlCommand="curl -X 'GET' \
    'ttps://netlify.app/api/superheroes' \
    -H 'accept: application/json'"
            parameters={[
              {
                name: "items",
                description: "Number of services to list",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Data;
