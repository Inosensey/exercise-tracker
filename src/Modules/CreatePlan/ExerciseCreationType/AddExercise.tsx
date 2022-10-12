import CustomizeExerciseLogic from "@/logic/CustomizeExerciseLogic";
import { motion } from "framer-motion";
import React, { ChangeEvent, useState } from "react";
import {
  IExercisePerDay,
  IExerciseSchedule,
  IExerciseSet,
} from "Typescript/Interface";
import { ExerciseType } from "Typescript/Types";

type props = {
  setShowPopUpAddExercise: React.Dispatch<React.SetStateAction<boolean>>;
  ExerciseSchedules: IExerciseSchedule[];
  setExerciseSet: React.Dispatch<React.SetStateAction<IExerciseSet>>;
  exerciseSet: IExerciseSet;
};

// Framer Motion Variants
const ShowIn = {
  initial: {
    scale: 0.75,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
  },
  exit: {
    scale: 0,
    opacity: 0,
  },
};

// Default Values
const ExerciseInfo: ExerciseType = {
  bodyPart: "",
  equipment: "Body weight",
  name: "",
  target: "",
};
const DefaultExerciseDayInfo: IExercisePerDay = {
  Day: "",
  Exercise: [ExerciseInfo],
};
function AddExercise({
  setShowPopUpAddExercise,
  ExerciseSchedules,
  setExerciseSet,
  exerciseSet,
}: props) {
  // Deconstruct logic
  const { addExercises } = CustomizeExerciseLogic();

  const [exerciseSchedule, setExerciseSchedule] =
    useState<IExerciseSchedule[]>(ExerciseSchedules);
  const [week, setWeek] = useState<string>("");
  const [day, setDay] = useState<string>("");
  const [exerciseInput, setExerciseInput] =
    useState<ExerciseType>(ExerciseInfo);

  const addExerciseHandler = () => {
    const result: IExerciseSet = addExercises(
      exerciseSchedule,
      setExerciseSchedule,
      exerciseSet,
      setExerciseSet,
      exerciseInput,
      week,
      day
    );
    console.log(result);
    setExerciseSet(result);
  };

  console.log(exerciseSet);

  return (
    <div className="absolute top-0 left-0 z-20 flex h-screen w-full items-center justify-center bg-black bg-opacity-75 text-white">
      <motion.div
        variants={ShowIn}
        initial="initial"
        animate="visible"
        exit="exit"
        className="flex w-[95%] flex-col gap-2 border bg-white p-1"
      >
        <div className="flex flex-col">
          <label className="font-poppins font-bold text-black xs:text-sm">
            Week
          </label>
          <input
            className="w-full bg-DarkBlueColor p-1 font-poppins text-white xs:text-xs"
            type="text"
            name="week"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setWeek(e.target.value)
            }
            value={week}
            placeholder="Week"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-poppins font-bold text-black xs:text-sm">
            Day
          </label>
          <input
            className="w-full bg-DarkBlueColor p-1 font-poppins text-white xs:text-xs"
            type="text"
            name="day"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDay(e.target.value)
            }
            value={day}
            placeholder="Day"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-poppins font-bold text-black xs:text-sm">
            Exercise name
          </label>
          <input
            className="w-full bg-DarkBlueColor p-1 font-poppins text-white xs:text-xs"
            type="text"
            name="exerciseName"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setExerciseInput({ ...exerciseInput, name: e.target.value })
            }
            value={exerciseInput.name}
            placeholder="Exercise name"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-poppins font-bold text-black xs:text-sm">
            Body part
          </label>
          <input
            className="w-full bg-DarkBlueColor p-1 font-poppins text-white xs:text-xs"
            type="text"
            name="bodyPart"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setExerciseInput({ ...exerciseInput, bodyPart: e.target.value })
            }
            value={exerciseInput.bodyPart}
            placeholder="Body part"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-poppins font-bold text-black xs:text-sm">
            Target
          </label>
          <input
            className="w-full bg-DarkBlueColor p-1 font-poppins text-white xs:text-xs"
            type="text"
            name="target"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setExerciseInput({ ...exerciseInput, target: e.target.value })
            }
            placeholder="Target"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-poppins font-bold text-black xs:text-sm">
            Equipment
          </label>
          <input
            className="w-full bg-DarkBlueColor p-1 font-poppins text-white xs:text-xs"
            type="text"
            name="equipment"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setExerciseInput({ ...exerciseInput, equipment: e.target.value })
            }
            value={exerciseInput.equipment}
            placeholder="Equipment"
          />
        </div>
        <div className="flex">
          <div className="flex w-2/6 gap-2 border">
            <label className="font-poppins font-bold text-black xs:text-sm">
              Sets:
            </label>
            <input
              className="w-8/12 bg-DarkBlueColor p-1 font-poppins text-white xs:text-xs"
              type="number"
              name="sets"
              placeholder="Sets"
            />
          </div>
          <div className="flex w-2/6 gap-2 border">
            <label className="font-poppins font-bold text-black xs:text-sm">
              Reps:
            </label>
            <input
              className="w-8/12 bg-DarkBlueColor p-1 font-poppins text-white xs:text-xs"
              type="number"
              name="reps"
              placeholder="Reps"
            />
          </div>
        </div>
        <div className="flex justify-between font-poppins">
          <button
            onClick={() => setShowPopUpAddExercise(false)}
            className="w-3/12  cursor-pointer rounded rounded-lg border border-DarkBlueColor p-1 font-bold text-DarkBlueColor xs:text-sm"
          >
            Cancel
          </button>
          <button
            className="w-3/12 cursor-pointer bg-PinkishColor p-1 font-bold text-white xs:text-sm"
            onClick={() => {
              addExerciseHandler();
            }}
          >
            Save
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default AddExercise;
