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
    <div className="flex flex-col justify-center items-center h-screen">
      <LogInWithAnonAadhaar />
      <p>{anonAadhaar?.status}</p>
      {anonAadhaar?.status === "logged-in" && (
        <>
          <p>✅ Proof is valid</p>
          <AnonAadhaarProof code={JSON.stringify(anonAadhaar.pcd, null, 2)} />
        </>
      )}
    </div>
  );
};

export default Aadhar;
