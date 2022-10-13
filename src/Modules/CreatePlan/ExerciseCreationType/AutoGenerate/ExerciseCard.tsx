import React from "react";
import { IExercisePerDay, IExerciseSchedule } from "Typescript/Interface";
import { ExerciseType } from "Typescript/Types";
import Exercise from "../Exercise";

type props = {
  ExerciseSchedule: IExercisePerDay[] | undefined;
  Week: number;
  refProp: React.Ref<HTMLDivElement>;
};

function ExerciseCard({ ExerciseSchedule, Week, refProp }: props) {
  return (
    <div className="flex h-[100%] flex-col gap-2 overflow-auto border">
      <div ref={refProp}>
        <h3 className="text-center font-bold text-GrayishColor underline xs:text-lg">
          Week {Week}
        </h3>
      </div>

      {ExerciseSchedule?.map((schedule: IExercisePerDay) => (
        <div key={schedule.Day}>
          <h3 className="font-bold text-DarkBlueColor underline xs:text-base">
            {schedule.Day}
          </h3>
          <div className="flex flex-col gap-1 font-poppins">
            {schedule.Exercise.map((ExerciseInfo: ExerciseType) => (
              <Exercise key={ExerciseInfo.name} ExerciseInfo={ExerciseInfo} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExerciseCard;
