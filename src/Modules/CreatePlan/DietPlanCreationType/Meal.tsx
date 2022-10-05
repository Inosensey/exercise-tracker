import React from "react";
import { MealTypeInfo } from "Typescript/Types";

type props = {
  MealInfo: MealTypeInfo;
};

function Meal({ MealInfo }: props) {
  return (
    <div className="border border-DarkBlueColor text-black">
      <div className="border-b border-DarkBlueColor p-1">
        <label className="font-bold xs:text-sm">Meal name:</label>
        <p className="xs:text-sm">{MealInfo.title}</p>
      </div>
      <div className="border-b border-DarkBlueColor p-1">
        <label className="font-bold xs:text-sm">Calories:</label>
        <p className="xs:text-sm">{MealInfo.cal}</p>
      </div>
      <div className="border-b border-DarkBlueColor p-1">
        <button className="cursor-pointer bg-PinkishColor p-1 px-1.5 font-poppins text-white xs:text-sm">
          View ingredients
        </button>
      </div>
    </div>
  );
}

export default Meal;
