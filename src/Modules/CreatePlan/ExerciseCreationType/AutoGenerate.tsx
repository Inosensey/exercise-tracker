import Loading from "@/Common/loading";
import { IExerciseSet } from "Typescript/Interface";

import ExerciseCard from "./ExerciseCard";

type props = {
  setExerciseCreateType: React.Dispatch<React.SetStateAction<string>>;
  exerciseSchedule: IExerciseSet | undefined;
  status: string;
};

function AutoGenerate({
  setExerciseCreateType,
  exerciseSchedule,
  status,
}: props) {
  if (status === "loading") return <Loading />;
  return (
    <div className="flex flex-col gap-3">
      <ExerciseCard />
      <ExerciseCard />
      <ExerciseCard />
      <ExerciseCard />
      <ExerciseCard />
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
