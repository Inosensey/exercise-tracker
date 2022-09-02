import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import PrimaryButton from "@/Common/Button/PrimaryButton";
import Input from "@/Common/Input/Input";
import Form from "@/Common/LoginRegister/Form";
import Header from "@/Common/LoginRegister/Header";

const RegisterPage: NextPage = () => {
  return (
    <div className="bg-GrayishColor">
      <Head>
        <title>Workoutly</title>
        <meta name="description" content="Exercise tracker" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <main>
        <Form>
          <div className="flex flex-col items-center  xs:w-full sm:h-4/5 sm:w-4/5 md:w-3/5 lg:w-1/3">
            <Header Text="Sign Up to Workoutly" />
            <form className="flex w-4/5 flex-col gap-4 rounded-xl bg-DarkBlueColor p-6">
              <div className="w-full">
                <Input type="email" name="email" label="Email" />
              </div>
              <div className="w-full">
                <Input type="password" name="password" label="Password" />
              </div>
              <div>
                <PrimaryButton BtnName="Sign Up" />
              </div>
            </form>
            <div className="mt-3 w-4/5 border border-PinkishColor p-3">
              <p className="text-center font-poppins text-xs text-white">
                Already have an account?{" "}
                <Link href="/">
                  <span className="cursor-pointer text-PinkishColor underline-offset-1 hover:underline">
                    Sign in
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </Form>
      </main>
    </div>
  );
};

export default RegisterPage;
