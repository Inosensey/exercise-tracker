import { motion } from "framer-motion";

type props = {
  setShowPopUpAddExercise: React.Dispatch<React.SetStateAction<boolean>>;
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

function AddExercise({ setShowPopUpAddExercise }: props) {
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
            placeholder="Week"
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
            placeholder="Exercise name"
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
          <button className="w-3/12 cursor-pointer bg-PinkishColor p-1 font-bold text-white xs:text-sm">
            Save
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default AddExercise;
