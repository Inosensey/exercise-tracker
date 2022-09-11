import CreatePlan from "@/Modules/CreatePlan/CreatePlan";
import Nav from "@/Modules/Nav/Nav";
import { NextPage } from "next";
import Head from "next/head";

const Dashboard: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Workoutly - Dashboard</title>
        <meta name="description" content="Exercise Tracker"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link rel="shortcut icon" href="logo.ico" type="image/x-icon" />
      </Head>
      <main className="relative h-screen w-full bg-GrayishColor">
        <Nav />
        <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-3 bg-DarkBlueColor p-1 text-center font-poppins text-white xs:h-48 xs:w-11/12">
          <p className="text-white xs:text-lg">
            Welcome,{" "}
            <span className="font-bold text-PinkishColor">Username Here</span>
          </p>
          <p className="xs:text-sm">
            Start your fitness journey with just click of a button!
          </p>
          <button className="w-28 cursor-pointer bg-PinkishColor p-1 text-sm">
            Start
          </button>
        </div>
        <CreatePlan />
      </main>
    </div>
  );
};

export default Dashboard;
