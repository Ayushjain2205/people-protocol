import React, { useEffect } from "react";
import { useRouter } from "next/router";
import {
  LogInWithAnonAadhaar,
  useAnonAadhaar,
  AnonAadhaarProof,
} from "anon-aadhaar-react";

const Aadhar = () => {
  const [anonAadhaar] = useAnonAadhaar();
  const router = useRouter();

  useEffect(() => {
    // Log the Aadhaar status whenever it changes
    console.log("Anon Aadhaar status: ", anonAadhaar.status);

    // If the user is logged-in, navigate to '/feed' after 5 seconds
    if (anonAadhaar.status === "logged-in") {
      const timer = setTimeout(() => {
        router.push("/persona");
      }, 5000);

      // Clear the timeout if the component unmounts
      // to prevent a state update on an unmounted component
      return () => clearTimeout(timer);
    }
  }, [anonAadhaar.status, router]);

  return (
    <div className="flex flex-col px-[27px]">
      <p className="text-[20px] font-[500] mt-[80px]">
        Aadhar Card Verification
      </p>
      <p className="text-[12px]">Verify on a click</p>
      <img className="mt-[80px]" src="/images/aadhar.png" alt="Aadhar card" />
      <div className="login-btn mt-[70px]">
        <LogInWithAnonAadhaar />
      </div>
      {anonAadhaar?.status === "logged-in" && (
        <div className="proof mt-[35px]">
          <AnonAadhaarProof code={JSON.stringify(anonAadhaar.pcd, null, 2)} />
        </div>
      )}
    </div>
  );
};

export default Aadhar;
