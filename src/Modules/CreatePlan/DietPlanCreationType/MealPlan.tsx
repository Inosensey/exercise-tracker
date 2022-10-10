import React from "react";
import { MealTypeInfo } from "Typescript/Types";
import MealCard from "./MealCard";

type props = {
  Breakfast: MealTypeInfo;
  Lunch: MealTypeInfo;
  Dinner: MealTypeInfo;
  Day: string;
  refProp: React.Ref<HTMLDivElement>;
};

function MealPlan({ Breakfast, Lunch, Dinner, Day, refProp }: props) {
  return (
    <div className="flex h-[100%] flex-col gap-3 overflow-auto">
      <div ref={refProp}>
        <h3 className="text-center font-bold text-GrayishColor underline xs:text-lg">
          {Day}
        </h3>
      </div>
      <MealCard MealType="Breakfast" MealInfo={Breakfast} />
      <MealCard MealType="Lunch" MealInfo={Lunch} />
      <MealCard MealType="Dinner" MealInfo={Dinner} />
    </div>
  );
}

export default MealPlan;
