import { motion } from "framer-motion";
import { useState } from "react";
import { IExerciseSchedule, IExerciseSet } from "Typescript/Interface";
import { ExerciseType } from "Typescript/Types";
import { SecondaryInput } from "@/Common/Input/Input";
import CustomizeExerciseLogic from "@/logic/CustomizeExerciseLogic";

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
const DefaultValidDetails = {
  week: {
    valid: false,
    message: "",
  },
  day: {
    valid: false,
    message: "",
  },
  name: {
    valid: false,
    message: "",
  },
  bodyPart: {
    valid: false,
    message: "",
  },
  target: {
    valid: false,
    message: "",
  },
  equipment: {
    valid: false,
    message: "",
  },
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
  const [validation, setValidation] = useState(DefaultValidDetails);

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
    setExerciseSet(result);
    setShowPopUpAddExercise(false);
  };

  return (
    <div className="absolute top-0 left-0 z-20 flex h-screen w-full items-center justify-center bg-black bg-opacity-75 font-poppins font-bold text-black xs:text-sm">
      <motion.div
        variants={ShowIn}
        initial="initial"
        animate="visible"
        exit="exit"
        className="flex w-[95%] flex-col gap-2 border bg-white p-1"
      >
        <SecondaryInput
          label="Week"
          name="week"
          type="text"
          value={week}
          setValue={setWeek}
          enableValidation={true}
          validation={validation.week}
          setValidation={setValidation}
        />
        <SecondaryInput
          label="Day"
          name="day"
          type="text"
          value={day}
          setValue={setDay}
          enableValidation={true}
          validation={validation.day}
          setValidation={setValidation}
        />
        <SecondaryInput
          label="Exercise name"
          name="exerciseName"
          type="text"
          value={exerciseInput.name}
          setValue={(value) =>
            setExerciseInput({ ...exerciseInput, name: value })
          }
          enableValidation={true}
          validation={validation.name}
          setValidation={setValidation}
        />
        <SecondaryInput
          label="Body part"
          name="bodyPart"
          type="text"
          value={exerciseInput.bodyPart}
          setValue={(value) =>
            setExerciseInput({ ...exerciseInput, bodyPart: value })
          }
          enableValidation={true}
          validation={validation.bodyPart}
          setValidation={setValidation}
        />
        <SecondaryInput
          label="Target"
          name="target"
          type="text"
          value={exerciseInput.target}
          setValue={(value) =>
            setExerciseInput({ ...exerciseInput, target: value })
          }
          enableValidation={true}
          validation={validation.target}
          setValidation={setValidation}
        />
        <SecondaryInput
          label="Equipment"
          name="equipment"
          type="text"
          value={exerciseInput.equipment}
          setValue={(value) =>
            setExerciseInput({ ...exerciseInput, equipment: value })
          }
          enableValidation={true}
          validation={validation.equipment}
          setValidation={setValidation}
        />

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
