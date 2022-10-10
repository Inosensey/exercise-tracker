import Loading from "@/Common/Other/Loading";
import { useRef, useState } from "react";
import { IExerciseSchedule, IExerciseSet } from "Typescript/Interface";
import Pagination from "../Pagination";

import ExerciseCard from "./ExerciseCard";

type props = {
  setExerciseCreateType: React.Dispatch<React.SetStateAction<string>>;
  exerciseSet: IExerciseSet | undefined;
  status: string;
};

function AutoGenerate({ setExerciseCreateType, exerciseSet, status }: props) {
  const [pagination, setPagination] = useState<number>(0);
  const exerciseRef = useRef<HTMLDivElement>(null);
  if (status === "loading") return <Loading />;
  return (
    <div className="flex h-[100%] flex-col justify-between">
      <div className="flex h-[80%] flex-col gap-3">
        <ExerciseCard
          key={exerciseSet!.Schedules[pagination].Week}
          ExerciseSchedule={exerciseSet!.Schedules[pagination].ExerciseSchedule}
          Week={exerciseSet!.Schedules[pagination].Week}
          refProp={exerciseRef}
        />
      </div>
      <Pagination
        setPage={setPagination}
        maxPage={exerciseSet?.Schedules.length}
        currentPage={pagination}
        pageTitle={`Week ${pagination + 1}`}
        refProp={exerciseRef.current}
      />
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
