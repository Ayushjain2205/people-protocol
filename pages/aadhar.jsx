import React, { useEffect } from "react";
import { LogInWithAnonAadhaar, useAnonAadhaar } from "anon-aadhaar-react";

const Aadhar = () => {
  const [anonAadhaar] = useAnonAadhaar();

  useEffect(() => {
    console.log("Anon Aadhaar status: ", anonAadhaar.status);
  }, [anonAadhaar]);
  return (
    <div>
      <LogInWithAnonAadhaar />
      <p>{anonAadhaar?.status}</p>
    </div>
  );
};

export default Aadhar;
