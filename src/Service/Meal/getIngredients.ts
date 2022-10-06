import { IIngredients } from "Typescript/Interface";

const getIngredients = async (id: number) => {
  try {
    const response = await fetch(`${process.env.ingredientsApi}/${id}`);
    const data = (await response.json()) as IIngredients[];
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getIngredients;
