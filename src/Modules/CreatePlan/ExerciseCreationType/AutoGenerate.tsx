import Loading from "@/Common/Other/Loading";
import { IExerciseSchedule, IExerciseSet } from "Typescript/Interface";

import ExerciseCard from "./ExerciseCard";

type props = {
  setExerciseCreateType: React.Dispatch<React.SetStateAction<string>>;
  exerciseSet: IExerciseSet | undefined;
  status: string;
};

function AutoGenerate({ setExerciseCreateType, exerciseSet, status }: props) {
  if (status === "loading") return <Loading />;
  return (
    <div className="flex flex-col gap-3">
      {exerciseSet?.Schedules.map((data: IExerciseSchedule) => (
        <ExerciseCard
          key={data.Week}
          ExerciseSchedule={data.ExerciseSchedule}
          Week={data.Week}
        />
      ))}

      <div className="flex justify-between font-poppins">
        <button
          onClick={() => setExerciseCreateType("")}
          className="w-3/12  cursor-pointer rounded rounded-lg border border-DarkBlueColor p-1 font-bold text-DarkBlueColor xs:text-sm"
        >
          Cancel
        </button>
        <button className="w-3/12 cursor-pointer bg-PinkishColor p-1 font-bold text-white xs:text-sm">
          Save
        </button>
      </div>
    </div>
  );
}

export default AutoGenerate;
