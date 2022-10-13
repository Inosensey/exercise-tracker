import React, { useRef, useState } from "react";
import { IExerciseSet } from "Typescript/Interface";
import Pagination from "../Pagination";
import CustomizeExerciseCard from "./CustomizeExerciseCard";

type props = {
  exerciseSet: IExerciseSet;
  setShowPopUpAddExercise: React.Dispatch<React.SetStateAction<boolean>>;
};

function CustomizeExercises({ exerciseSet, setShowPopUpAddExercise }: props) {
  const divRef = useRef<HTMLDivElement>(null);

  const [pagination, setPagination] = useState<number>(0);
  return (
    <div className="flex h-[100%] w-full flex-col items-center justify-between">
      <div className="flex h-[80%] w-full flex-col gap-3">
        <CustomizeExerciseCard
          Week={exerciseSet.Schedules[pagination].Week}
          ExerciseSchedule={exerciseSet.Schedules[pagination].ExerciseSchedule}
          refProp={divRef}
        />
      </div>
      <button
        className="w-4/12 cursor-pointer bg-PinkishColor p-1 text-white xs:text-sm"
        onClick={() => setShowPopUpAddExercise(true)}
      >
        Add
      </button>
      <Pagination
        setPage={setPagination}
        maxPage={exerciseSet.Schedules.length}
        currentPage={pagination}
        pageTitle={`Week ${pagination + 1}`}
        refProp={divRef.current}
      />
    </div>
  );
}

export default CustomizeExercises;
