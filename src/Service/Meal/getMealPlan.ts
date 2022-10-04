import { IMealPlan } from "Typescript/Interface";

const getMealPlan = async (bmi: number) => {
  try {
    const response = await fetch(
      `${process.env.mealApi}/recipes/setMealPlan/${bmi}`
    );
    const data = (await response.json()) as IMealPlan;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getMealPlan;
