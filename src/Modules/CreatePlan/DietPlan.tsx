import React, { useState } from "react";
import AutoGenerate from "./DietPlanCreationType/AutoGenerate";
import Customize from "./DietPlanCreationType/Customize";

function DietPlan() {
  const [dietPlanCreateType, setDietPlanCreateType] = useState<string>("");
  return (
    <div className="h-[100%] overflow-auto font-poppins">
      {dietPlanCreateType === "" && (
        <>
          <h1 className="text-black xs:text-xs">
            How do you want to create your diet plan? <br /> We can{" "}
            <span className="font-bold text-PinkishColor">generate</span> the
            best diet plan for you base on your BMI or you can customize your
            own.
          </h1>
          <p className="mt-4 text-black xs:text-xs">
            <span className="font-bold text-PinkishColor">Important Note:</span>{" "}
            Make sure you follow the recommended carbs when customizing your
            diet plan
          </p>
          <div className="mt-9 flex flex-col items-center gap-5 xs:text-sm">
            <button
              onClick={() => setDietPlanCreateType("Generate")}
              className="w-5/12 cursor-pointer bg-PinkishColor p-1 font-bold text-white"
            >
              Generate
            </button>
            <button
              onClick={() => setDietPlanCreateType("Customize")}
              className="w-5/12 cursor-pointer bg-DarkBlueColor p-1 font-bold text-white"
            >
              Customize
            </button>
          </div>
        </>
      )}
      {dietPlanCreateType === "Generate" && (
        <AutoGenerate setDietPlanCreateType={setDietPlanCreateType} />
      )}
      {dietPlanCreateType === "Customize" && (
        <Customize setDietPlanCreateType={setDietPlanCreateType} />
      )}
    </div>
  );
}

export default DietPlan;
