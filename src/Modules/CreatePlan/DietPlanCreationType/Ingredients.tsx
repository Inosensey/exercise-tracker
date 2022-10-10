import { motion } from "framer-motion";
import Image from "next/image";
import { IIngredients, IIngredientsInfo } from "Typescript/Interface";

type props = {
  setShowPopUpIngredients: React.Dispatch<React.SetStateAction<boolean>>;
  ingredients: IIngredients[] | undefined;
  recipeName: string;
};

// Framer Motion Variants
const DropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

function Ingredients({
  setShowPopUpIngredients,
  ingredients,
  recipeName,
}: props) {
  console.log(ingredients);
  return (
    <div className="absolute top-0 left-0 z-10 flex h-screen w-full items-center justify-center bg-black bg-opacity-75 text-white">
      <i
        className="fa-regular fa-circle-xmark left-50 absolute top-1.5 -translate-x-2/4 text-lg text-PinkishColor"
        onClick={() => setShowPopUpIngredients(false)}
      ></i>
      <motion.div
        className="overflow-auto bg-white xs:h-[90%] xs:w-[95%]"
        variants={DropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="flex flex-col gap-1 p-1">
          <h3 className="text-center font-bold text-DarkBlueColor xs:text-base">
            {recipeName} ingredients
          </h3>
          {ingredients?.map((data: IIngredients) =>
            data.ingredients.map((ingredientsInfo: IIngredientsInfo) => (
              <div
                key={ingredientsInfo.name}
                className="flex flex-col border border-DarkBlueColor xs:min-h-[10%]"
              >
                <div className="flex h-40 items-center justify-center border-b border-DarkBlueColor p-1">
                  <div className="relative h-[100%] w-[40%]">
                    <Image
                      src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredientsInfo.image}`}
                      alt={ingredientsInfo.image}
                      objectFit="contain"
                      layout="fill"
                      priority={true}
                      placeholder="blur"
                      blurDataURL={`spoonacular.com/cdn/ingredients_100x100/${ingredientsInfo.image}`}
                    />
                  </div>
                </div>
                <div className="border-b border-DarkBlueColor p-1">
                  <label className="font-bold text-black xs:text-sm">
                    Name:
                  </label>
                  <p className="text-black xs:text-sm">
                    {ingredientsInfo.name}
                  </p>
                </div>
                <div className="border-b border-DarkBlueColor p-1">
                  <h3 className="font-bold text-black xs:text-sm">Amount</h3>
                  <label className="font-bold text-black underline underline-offset-1 xs:text-sm">
                    Metric:
                  </label>
                  <p className="text-black xs:text-sm">
                    <>
                      {ingredientsInfo.amount.metric.value}{" "}
                      {ingredientsInfo.amount.metric.unit}
                    </>
                  </p>
                  <label className="font-bold text-black underline underline-offset-1 xs:text-sm">
                    Us:
                  </label>
                  <p className="text-black xs:text-sm">
                    <>
                      {ingredientsInfo.amount.us.value}{" "}
                      {ingredientsInfo.amount.us.unit}
                    </>
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default Ingredients;
