import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { usePrivy } from "@privy-io/react-auth";
import { useSmartAccount } from "../hooks/SmartAccountContext";
import { BASE_GOERLI_SCAN_URL, NFT_ADDRESS } from "../lib/constants";
import { encodeFunctionData } from "viem";
import ABI from "../lib/nftABI.json";
import { ToastContainer, toast } from "react-toastify";
import { Alert } from "../components/AlertWithLink";

const mint = () => {
  const router = useRouter();
  const { ready, authenticated, user, logout } = usePrivy();
  const {
    smartAccountAddress,
    smartAccountProvider,
    sendSponsoredUserOperation,
    eoa,
  } = useSmartAccount();

  // If the user is not authenticated, redirect them back to the landing page
  useEffect(() => {
    if (ready && !authenticated) {
      router.push("/");
    }
  }, [ready, authenticated, router]);

  const isLoading = !smartAccountAddress || !smartAccountProvider;
  const [isMinting, setIsMinting] = useState(false);

  const onMint = async () => {
    // The mint button is disabled if either of these are undefined
    if (!smartAccountProvider || !smartAccountAddress) return;

    // Store a state to disable the mint button while mint is in progress
    setIsMinting(true);
    const toastId = toast.loading("Minting Profile ....");

    try {
      // From a viem `RpcTransactionRequest` (e.g. calling an ERC-721's `mint` method),
      // build and send a user operation. Gas fees will be sponsored by the Base Paymaster.
      const userOpHash = await sendSponsoredUserOperation({
        from: smartAccountAddress,
        to: NFT_ADDRESS,
        data: encodeFunctionData({
          abi: ABI,
          functionName: "mint",
          args: [smartAccountAddress],
        }),
      });

      toast.update(toastId, {
        render: "Waiting for your transaction to be confirmed...",
        type: "info",
        isLoading: true,
      });

      // Once we have a hash for the user operation, watch it until the transaction has
      // been confirmed.
      const transactionHash =
        await smartAccountProvider.waitForUserOperationTransaction(userOpHash);

      toast.update(toastId, {
        render: (
          <Alert href={`${BASE_GOERLI_SCAN_URL}/tx/${transactionHash}`}>
            Profile NFT successfully minted! Click to verify!
          </Alert>
        ),
        type: "success",
        isLoading: false,
        autoClose: 5000,
      });

      // After showing the success toast, navigate to /feed after a 5 second delay
      setTimeout(() => {
        router.push("/feed");
      }, 5000);
    } catch (error) {
      console.error("Mint failed with error: ", error);
      toast.update(toastId, {
        render: (
          <Alert>
            There was an error sending your transaction. See the developer
            console for more info.
          </Alert>
        ),
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    }

    setIsMinting(false);
  };

  return (
    <div>
      <ToastContainer />
      <div className="flex flex-col items-center">
        <img
          className="w-[150px] h-[206px] mt-[170px]"
          src="/images/mint.svg"
          alt=""
        />
        <button
          onClick={onMint}
          className="w-[336px] h-[46px] mt-[94px] bg-primary text-white rounded-[8px]"
          disabled={isLoading || isMinting}
        >
          Mint your profile NFT
        </button>
      </div>
    </div>
  );
};

export default mint;
