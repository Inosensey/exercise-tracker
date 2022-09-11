import Meal from "./Meal";

function MealCard() {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="font-bold text-DarkBlueColor underline xs:text-base">
        Breakfast
      </h3>
      <div className="flex flex-col gap-1 font-poppins">
        <Meal />
        <Meal />
        <Meal />
        <Meal />
        <Meal />
      </div>
    </div>
  );
}

export default MealCard;
