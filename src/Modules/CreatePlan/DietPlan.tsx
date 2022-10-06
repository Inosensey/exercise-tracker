import React, { useState } from "react";
import { useQuery } from "react-query";
import getMealPlan from "Service/Meal/getMealPlan";
import { IMealType } from "Typescript/Interface";
import AutoGenerate from "./DietPlanCreationType/AutoGenerate";
import Customize from "./DietPlanCreationType/Customize";

type props = {
  bmi: number;
};

function DietPlan({ bmi }: props) {
  const [dietPlanCreateType, setDietPlanCreateType] = useState<string>("");

  const fetchMealPlan = async () => {
    const response: IMealType[] | undefined = await getMealPlan(bmi);
    return response;
  };

  const { status, data, error, refetch } = useQuery<IMealType[] | undefined>(
    "MealPlan",
    fetchMealPlan,
    { enabled: false }
  );
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
            Make sure you follow the recommended calories when customizing your
            diet plan
          </p>
          <div className="mt-9 flex flex-col items-center gap-5 xs:text-sm">
            <button
              onClick={() => {
                setDietPlanCreateType("Generate");
                refetch();
              }}
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
        <AutoGenerate
          mealPlan={data}
          status={status}
          setDietPlanCreateType={setDietPlanCreateType}
        />
      )}
      {dietPlanCreateType === "Customize" && (
        <Customize setDietPlanCreateType={setDietPlanCreateType} />
      )}
    </div>
  );
}

export default DietPlan;
