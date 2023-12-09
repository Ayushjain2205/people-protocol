import { useLogin } from "@privy-io/react-auth";
import Head from "next/head";
import { useRouter } from "next/router";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useLogin({
    onComplete: () => router.push("/aadhar"),
  });

  return (
    <>
      <Head>
        <title>Jan Protocol</title>
      </Head>

      <main className="flex flex-col h-screen items-center">
        <div>
          <img
            className="w-[390px] mt-[100px] h-[250px] animate-pulse"
            src="/images/landing.png"
            alt=""
          />
          <div className="mt-[90px] flex justify-center text-center">
            <button
              className="w-[336px] h-[46px] bg-primary text-white rounded-[8px]"
              onClick={login}
            >
              Log in
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
