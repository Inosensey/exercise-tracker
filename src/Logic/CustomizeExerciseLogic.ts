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
    exerciseSet: IExerciseSet,
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
  const updateExercise = (
    exerciseSet: IExerciseSet,
    ExerciseInfo: ExerciseType,
    Week: string,
    Day: string,
    selectedExerciseName: string
  ) => {
    const exerciseSetCopy: IExerciseSet = exerciseSet;
    const exerciseWeekIndex = exerciseSet.Schedules.findIndex(
      (info: IExerciseSchedule) => info.Week === parseInt(Week)
    );
    const exerciseDayIndex = exerciseSet.Schedules[
      exerciseWeekIndex
    ].ExerciseSchedule.findIndex((info: IExercisePerDay) => info.Day === Day);
    const exerciseNameIndex = exerciseSetCopy.Schedules[
      exerciseWeekIndex
    ].ExerciseSchedule[exerciseDayIndex].Exercise.findIndex(
      (info: ExerciseType) => info.name === selectedExerciseName
    );

    exerciseSetCopy.Schedules[exerciseWeekIndex].ExerciseSchedule[
      exerciseDayIndex
    ].Exercise[exerciseNameIndex].name = ExerciseInfo.name;
    exerciseSetCopy.Schedules[exerciseWeekIndex].ExerciseSchedule[
      exerciseDayIndex
    ].Exercise[exerciseNameIndex].bodyPart = ExerciseInfo.bodyPart;
    exerciseSetCopy.Schedules[exerciseWeekIndex].ExerciseSchedule[
      exerciseDayIndex
    ].Exercise[exerciseNameIndex].target = ExerciseInfo.target;
    exerciseSetCopy.Schedules[exerciseWeekIndex].ExerciseSchedule[
      exerciseDayIndex
    ].Exercise[exerciseNameIndex].equipment = ExerciseInfo.equipment;
    return exerciseSetCopy;
  };
  return { SetExerciseWeeks, addExercises, updateExercise };
};

export default CustomizeExerciseLogic;
