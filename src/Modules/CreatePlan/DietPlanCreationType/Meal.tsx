import Image from "next/image";
import React from "react";
import { QueryFunctionContext, useQuery } from "react-query";
import getIngredients from "Service/Meal/getIngredients";
import { IIngredients } from "Typescript/Interface";
import { MealTypeInfo } from "Typescript/Types";

type props = {
  MealInfo: MealTypeInfo;
};

function Meal({ MealInfo }: props) {
  const fetchIngredients = async (id: number) => {
    const response: IIngredients[] | undefined = await getIngredients(id);
    return response;
  };

  const { status, data, error, refetch } = useQuery(
    ["Ingredients", MealInfo.id],
    () => fetchIngredients(MealInfo.id),
    { enabled: false }
  );
  return (
    <div className="border border-DarkBlueColor text-black">
      <div className="h-60 border-b border-DarkBlueColor p-1">
        <div className="relative h-[100%] w-[100%]">
          <Image
            src={MealInfo.image}
            alt={MealInfo.title}
            objectFit="contain"
            layout="fill"
            priority={true}
            placeholder="blur"
            blurDataURL={MealInfo.image}
          />
        </div>
      </div>
      <div className="border-b border-DarkBlueColor p-1">
        <label className="font-bold xs:text-sm">Meal name:</label>
        <p className="xs:text-sm">{MealInfo.title}</p>
      </div>
      <div className="border-b border-DarkBlueColor p-1">
        <label className="font-bold xs:text-sm">Calories:</label>
        <p className="xs:text-sm">{MealInfo.cal}</p>
      </div>
      <div className="border-b border-DarkBlueColor p-1">
        <button
          onClick={() => refetch()}
          className="cursor-pointer bg-PinkishColor p-1 px-1.5 font-poppins text-white xs:text-sm"
        >
          View ingredients
        </button>
      </div>
    </div>
  );
}

export default Meal;
