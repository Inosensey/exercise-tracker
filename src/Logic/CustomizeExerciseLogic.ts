import { IExerciseSchedule } from "Typescript/Interface";

const CustomizeExerciseLogic = () => {
  const SetExerciseWeeks = (numOfWeeks: number): IExerciseSchedule[] => {
    const ExerciseWeek: IExerciseSchedule[] = [];
    for (let i = 1; i <= numOfWeeks; i++) {
      ExerciseWeek.push({ Week: i, ExerciseSchedule: [] });
    }
    return ExerciseWeek;
  };
  return { SetExerciseWeeks };
};

export default CustomizeExerciseLogic;
