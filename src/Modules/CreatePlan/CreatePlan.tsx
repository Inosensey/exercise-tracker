import { useState } from "react";
import CalculateBMI from "./CalculateBMI";
import DietPlan from "./DietPlan";
import Exercises from "./Exercises";
import Final from "./Final";
import PlanTabs from "./PlanTabs";

function CreatePlan() {
  const [activeTab, setActiveTab] = useState<string>("Calculate BMI");
  return (
    <div className="absolute top-0 left-0 flex h-screen w-full items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white xs:h-96 xs:w-11/12">
        <PlanTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="h-[87%] p-1 pt-4">
          {activeTab === "Calculate BMI" && <CalculateBMI />}
          {activeTab === "Exercises" && <Exercises />}
          {activeTab === "Diet plan" && <DietPlan />}
          {activeTab === "Finish" && <Final />}
        </div>
      </div>
    </div>
  );
}

export default CreatePlan;
