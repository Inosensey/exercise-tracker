import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  IExercisePerDay,
  IExerciseSchedule,
  IExerciseSet,
} from "Typescript/Interface";
import { ExerciseType } from "Typescript/Types";
import { SecondaryInput } from "@/Common/Input/Input";
import CustomizeExerciseLogic from "@/logic/CustomizeExerciseLogic";

type props = {
  setShowPopUpAddExercise: React.Dispatch<React.SetStateAction<boolean>>;
  ExerciseSchedules: IExerciseSchedule[];
  setExerciseSet: React.Dispatch<React.SetStateAction<IExerciseSet>>;
  exerciseSet: IExerciseSet;
  curWeek: string;
  action: string;
  selectedExercise: IExercisePerDay;
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
  day: {
    valid: false,
    message: "",
  },
  exerciseName: {
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
    valid: true,
    message: "",
  },
};
function PopUpExerciseForm({
  setShowPopUpAddExercise,
  ExerciseSchedules,
  setExerciseSet,
  exerciseSet,
  curWeek,
  action,
  selectedExercise,
}: props) {
  // Deconstruct logic
  const { addExercises, updateExercise } = CustomizeExerciseLogic();

  const [exerciseSchedule, setExerciseSchedule] =
    useState<IExerciseSchedule[]>(ExerciseSchedules);
  const [week, setWeek] = useState<string>(curWeek);
  const [day, setDay] = useState<string>("");
  const [exerciseInput, setExerciseInput] =
    useState<ExerciseType>(ExerciseInfo);
  const [validation, setValidation] = useState(DefaultValidDetails);
  const [validToSubmit, setValidToSubmit] = useState<boolean>(false);

  const checkFormAction = () => {
    if (action === "Edit") {
      setValidToSubmit(true);
      setDay(selectedExercise.Day);
      setExerciseInput({
        ...exerciseInput,
        name: selectedExercise.Exercise[0].name,
        bodyPart: selectedExercise.Exercise[0].bodyPart,
        equipment: selectedExercise.Exercise[0].equipment,
        target: selectedExercise.Exercise[0].target,
      });
      setValidation((prev) => ({
        ...validation,
        day: { ...prev.day, valid: true },
        exerciseName: { ...prev.exerciseName, valid: true },
        bodyPart: { ...prev.bodyPart, valid: true },
        target: { ...prev.target, valid: true },
        equipment: { ...prev.equipment, valid: true },
      }));
    }
  };
  const addExerciseHandler = () => {
    const result: IExerciseSet = addExercises(
      exerciseSet,
      exerciseInput,
      week,
      day
    );
    setExerciseSet(result);
    setShowPopUpAddExercise(false);
  };
  const updateExerciseHandler = () => {
    const result = updateExercise(
      exerciseSet,
      exerciseInput,
      week,
      day,
      selectedExercise.Exercise[0].name
    );
    setExerciseSet(result);
    setShowPopUpAddExercise(false);
  };
  const checkIfInfoIsValidToSubmit = () => {
    if (
      validation.day.valid &&
      validation.exerciseName.valid &&
      validation.bodyPart.valid &&
      validation.target.valid &&
      validation.equipment.valid
    ) {
      setValidToSubmit(true);
    } else {
      setValidToSubmit(false);
    }
  };

  useEffect(() => {
    checkIfInfoIsValidToSubmit();
  }, [validation]);
  useEffect(() => {
    checkFormAction();
  }, []);

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
          isDisable={true}
          enableValidation={false}
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
          validation={validation.exerciseName}
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
            className={`w-3/12 cursor-pointer p-1 font-bold text-white xs:text-sm ${
              validToSubmit ? `bg-PinkishColor` : `bg-FadedPinkishColor`
            }`}
            disabled={validToSubmit ? false : true}
            onClick={() => {
              action !== "Edit"
                ? addExerciseHandler()
                : updateExerciseHandler();
            }}
          >
            Save
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default PopUpExerciseForm;
