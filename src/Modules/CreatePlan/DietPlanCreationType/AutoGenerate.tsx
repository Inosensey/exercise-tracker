import { IMealType } from "Typescript/Interface";
import MealCard from "./MealCard";
import Loading from "@/Common/Other/Loading";
import Ingredients from "./Ingredients";
import { useRef, useState } from "react";
import Pagination from "../Pagination";
import MealPlan from "./MealPlan";

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
  const [pagination, setPagination] = useState<number>(0);
  const mealRef = useRef<HTMLDivElement>(null);
  if (status === "loading") return <Loading />;
  return (
    <div className="flex h-[100%] flex-col justify-between ">
      <div className="h-[80%]">
        <MealPlan
          Breakfast={mealPlan![pagination].Breakfast}
          Lunch={mealPlan![pagination].Lunch}
          Dinner={mealPlan![pagination].Dinner}
          Day={Days[pagination]}
          refProp={mealRef}
        />
      </div>
      <Pagination
        currentPage={pagination}
        maxPage={mealPlan?.length}
        pageTitle={Days[pagination]}
        setPage={setPagination}
        refProp={mealRef.current!}
      />
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
