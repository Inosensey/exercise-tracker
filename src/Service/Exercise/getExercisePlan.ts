import { IExerciseSet } from "Typescript/Interface";

const getExercisePlan = async () => {
  try {
    const response = await fetch(
      `${process.env.exerciseApi}/exerciseSet/getExerciseSet/Beginner`
    );
    const data = (await response.json()) as IExerciseSet;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getExercisePlan;
