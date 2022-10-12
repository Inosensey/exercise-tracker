import {
  IExercisePerDay,
  IExerciseSchedule,
  IExerciseSet,
} from "Typescript/Interface";
import { ExerciseType } from "Typescript/Types";

const CustomizeExerciseLogic = () => {
  const SetExerciseWeeks = (numOfWeeks: number): IExerciseSchedule[] => {
    const ExerciseWeek: IExerciseSchedule[] = [];
    for (let i = 1; i <= numOfWeeks; i++) {
      ExerciseWeek.push({ Week: i, ExerciseSchedule: [] });
    }
    return ExerciseWeek;
  };
  const addExercises = (
    exerciseSchedule: IExerciseSchedule[],
    setExerciseSchedule: React.Dispatch<
      React.SetStateAction<IExerciseSchedule[]>
    >,
    exerciseSet: IExerciseSet,
    setExerciseSet: React.Dispatch<React.SetStateAction<IExerciseSet>>,
    ExerciseInfo: ExerciseType,
    Week: string,
    Day: string
  ): IExerciseSet => {
    let ExerciseSetCopy: IExerciseSet = exerciseSet;
    let newExercise: IExercisePerDay = { Day: "", Exercise: [] };
    const exerciseWeekIndex = exerciseSet.Schedules.findIndex(
      (info: IExerciseSchedule) => info.Week === parseInt(Week)
    );
    const exerciseDayIndex = exerciseSet.Schedules[
      exerciseWeekIndex
    ].ExerciseSchedule.findIndex((info: IExercisePerDay) => info.Day === Day);
    if (
      exerciseSet.Schedules[exerciseWeekIndex].ExerciseSchedule.some(
        (data: IExercisePerDay) => data.Day === Day
      )
    ) {
      ExerciseSetCopy.Schedules[exerciseWeekIndex].ExerciseSchedule[
        exerciseDayIndex
      ].Exercise.push(ExerciseInfo);
    } else {
      newExercise.Day = Day;
      newExercise.Exercise.push(ExerciseInfo);
      ExerciseSetCopy.Schedules[exerciseWeekIndex].ExerciseSchedule.push(
        newExercise
      );
    }
    return ExerciseSetCopy;
  };
  return { SetExerciseWeeks, addExercises };
};

export default CustomizeExerciseLogic;
