import { IMealType } from "Typescript/Interface";

const getMealPlan = async (bmi: number) => {
  try {
    const response = await fetch(
      `${process.env.mealApi}/recipes/setMealPlan/${bmi}`
    );
    const data = (await response.json()) as IMealType[];
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getMealPlan;
