import { MealTypeInfo } from "Typescript/Types";
import Meal from "./Meal";

type props = {
  MealType: string;
  MealInfo: MealTypeInfo;
};

function MealCard({ MealType, MealInfo }: props) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="font-bold text-DarkBlueColor underline xs:text-base">
        {MealType}
      </h3>
      <div className="flex flex-col gap-1 font-poppins">
        <Meal MealInfo={MealInfo} />
      </div>
    </div>
  );
}

export default MealCard;
