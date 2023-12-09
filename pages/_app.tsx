import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { PrivyProvider } from "@privy-io/react-auth";
import { useRouter } from "next/router";
import { baseGoerli } from "viem/chains";
import { SmartAccountProvider } from "../hooks/SmartAccountContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AnonAadhaarProvider } from "anon-aadhaar-react";

const app_id = process.env.NEXT_PUBLIC_APP_ID || "";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <Head>
        <link rel="icon" href="/favicons/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicons/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" />
        <link rel="manifest" href="/favicons/manifest.json" />
        <title>People Protocol</title>
        <meta name="description" content="People Protocol" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <AnonAadhaarProvider _appId={app_id}>
        <PrivyProvider
          appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID || ""}
          config={{
            loginMethods: ["email", "google"],
            appearance: {
              theme: "light",
              accentColor: "#676FFF",
            },
            embeddedWallets: {
              createOnLogin: "users-without-wallets",
              noPromptOnSignature: true,
            },
            defaultChain: baseGoerli,
          }}
          onSuccess={() => router.push("/dashboard")}
        >
          <SmartAccountProvider>
            <ToastContainer position="top-right" />
            <Component {...pageProps} />
          </SmartAccountProvider>
        </PrivyProvider>
      </AnonAadhaarProvider>
    </>
  );
}

export default MyApp;
