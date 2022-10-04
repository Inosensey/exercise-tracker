import EntryMessage from "@/Common/Dashboard/EntryMessage";
import CreatePlan from "@/Modules/CreatePlan/CreatePlan";
import Nav from "@/Modules/Nav/Nav";
import { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";

const Dashboard: NextPage = () => {
  const [showMessage, setShowMessage] = useState(true);

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
        {showMessage ? (
          <EntryMessage setShowMessage={setShowMessage} />
        ) : (
          <CreatePlan />
        )}
      </main>
    </div>
  );
};

export default Dashboard;
