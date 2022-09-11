import AddMeal from "./AddMeal";
import MealCard from "./MealCard";

function Customize(props: { setDietPlanCreateType: any }) {
  return (
    <div className="flex h-full flex-col gap-3">
      <div className="relative h-full">
        <div className="h-[65%] overflow-auto border">
          <MealCard />
        </div>
        {/* this is going to be a pop up */}
        <AddMeal setDietPlanCreateType={props.setDietPlanCreateType} />
      </div>
    </div>
  );
}

export default Customize;
