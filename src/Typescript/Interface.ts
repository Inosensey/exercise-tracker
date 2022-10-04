import { ExerciseType } from "./Types";

export interface IExercisePerDay {
  Day: string;
  Exercise: ExerciseType[];
}

export interface IExerciseSchedule {
  Week: number;
  ExerciseSchedule: IExercisePerDay[];
}
export interface IExerciseSet {
  SetName: string;
  Schedules: IExerciseSchedule[];
}
