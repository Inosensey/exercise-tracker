import { IMealType } from "Typescript/Interface";
import MealCard from "./MealCard";
import Loading from "@/Common/Other/Loading";
import Ingredients from "./Ingredients";

type props = {
  setDietPlanCreateType: React.Dispatch<React.SetStateAction<string>>;
  mealPlan: IMealType[] | undefined;
  status: string;
};

const Days: Array<string> = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function AutoGenerate({ setDietPlanCreateType, mealPlan, status }: props) {
  if (status === "loading") return <Loading />;
  return (
    <div className="flex flex-col gap-3">
      {mealPlan?.map((meal: IMealType, index: number) => (
        <div key={Math.random() * 1000}>
          <h3 className="text-center font-bold text-GrayishColor underline xs:text-lg">
            {Days[index]}
          </h3>
          <MealCard MealType="Breakfast" MealInfo={meal.Breakfast} />
          <MealCard MealType="Lunch" MealInfo={meal.Lunch} />
          <MealCard MealType="Dinner" MealInfo={meal.Dinner} />
        </div>
      ))}

      <div className="flex justify-between font-poppins">
        <button
          onClick={() => setDietPlanCreateType("")}
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
