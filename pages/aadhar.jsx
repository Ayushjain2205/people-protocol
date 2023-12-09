import React, { useEffect } from "react";
import {
  LogInWithAnonAadhaar,
  useAnonAadhaar,
  AnonAadhaarProof,
} from "anon-aadhaar-react";

const Aadhar = () => {
  const [anonAadhaar] = useAnonAadhaar();

  useEffect(() => {
    console.log("Anon Aadhaar status: ", anonAadhaar.status);
  }, [anonAadhaar]);
  return (
    <div className="flex flex-col px-[27px]">
      <p className="text-[20px] font-[500] mt-[80px]">
        Aadhar Card Verification
      </p>
      <p className="text-[12px]">Verify on a click</p>
      <img className="mt-[80px]" src="/images/aadhar.png" alt="" />
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
