import { useState } from "react";
import CalculateBMI from "./CalculateBMI";
import DietPlan from "./DietPlan";
import Exercises from "./Exercises";
import Final from "./Final";
import PlanTabs from "./PlanTabs";

function CreatePlan() {
  const [activeTab, setActiveTab] = useState<string>("Calculate BMI");
  const [bmi, setBmi] = useState<number>(0);
  return (
    <div className="mt-2 w-full items-center justify-center xs:h-[85%]">
      <div className="bg-white xs:h-full xs:w-full">
        <PlanTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="p-1 pt-4 xs:h-[92%]">
          {activeTab === "Calculate BMI" && (
            <CalculateBMI setBmi={setBmi} bmi={bmi} />
          )}
          {activeTab === "Exercises" && <Exercises />}
          {activeTab === "Diet plan" && <DietPlan bmi={bmi} />}
          {activeTab === "Finish" && <Final />}
        </div>
      </div>
    </div>
  );
}

export default CreatePlan;
