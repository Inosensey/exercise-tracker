import { AnimatePresence } from "framer-motion";
import React, { useRef, useState } from "react";
import { IExercisePerDay, IExerciseSet } from "Typescript/Interface";
import Pagination from "../../Pagination";
import PopUpExerciseForm from "./PopUpExerciseForm";
import CustomizeExerciseCard from "./CustomizeExerciseCard";

type props = {
  exerciseSet: IExerciseSet;
  setExerciseSet: React.Dispatch<React.SetStateAction<IExerciseSet>>;
};

//Default Values
const DefaultSelectedExerciseValue: IExercisePerDay = {
  Day: "",
  Exercise: [
    {
      bodyPart: "",
      equipment: "",
      name: "",
      target: "",
    },
  ],
};

function CustomizeExercises({ exerciseSet, setExerciseSet }: props) {
  const divRef = useRef<HTMLDivElement>(null);

  const [pagination, setPagination] = useState<number>(0);
  const [showPopUpExerciseForm, setShowPopUpExerciseForm] =
    useState<boolean>(false);
  const [selectedExercise, setSelectedExercise] = useState<IExercisePerDay>(
    DefaultSelectedExerciseValue
  );
  const [formAction, setFormAction] = useState<string>("Add");
  return (
    <>
      <div className="flex h-[100%] w-full flex-col items-center justify-between">
        <div className="flex h-[80%] w-full flex-col gap-3">
          <CustomizeExerciseCard
            Week={exerciseSet.Schedules[pagination].Week}
            ExerciseSchedule={
              exerciseSet.Schedules[pagination].ExerciseSchedule
            }
            setShowPopUpExerciseForm={setShowPopUpExerciseForm}
            setFormAction={setFormAction}
            setSelectedExercise={setSelectedExercise}
            refProp={divRef}
          />
        </div>
        <button
          className="w-4/12 cursor-pointer bg-PinkishColor p-1 text-white xs:text-sm"
          onClick={() => setShowPopUpExerciseForm(true)}
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
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {showPopUpExerciseForm && (
          <PopUpExerciseForm
            action={formAction}
            curWeek={`${pagination + 1}`}
            setShowPopUpAddExercise={setShowPopUpExerciseForm}
            ExerciseSchedules={exerciseSet.Schedules}
            setExerciseSet={setExerciseSet}
            exerciseSet={exerciseSet}
            selectedExercise={selectedExercise}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default CustomizeExercises;
