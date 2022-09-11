import React from "react";
import MealCard from "./MealCard";

function AutoGenerate(props: { setDietPlanCreateType: any }) {
  return (
    <div className="flex flex-col gap-3">
      <MealCard />
      <MealCard />
      <MealCard />
      <div className="flex justify-between font-poppins">
        <button
          onClick={() => props.setDietPlanCreateType("")}
          className="w-3/12  cursor-pointer rounded rounded-lg border border-DarkBlueColor p-1 font-bold text-DarkBlueColor xs:text-sm"
        >
          Cancel
        </button>
        <button className="w-3/12 cursor-pointer bg-PinkishColor p-1 font-bold text-white xs:text-sm">
          Save
        </button>
      </div>
    </div>
  );
}

export default AutoGenerate;
