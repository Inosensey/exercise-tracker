export type MealTypeInfo = {
  id: number;
  title: string;
  image: string;
  imageType: string;
  cal: number;
  mealType: string;
};

export type ExerciseType = {
  _id?: string;
  bodyPart: string;
  equipment: string;
  gifUrl?: string;
  name: string;
  target: string;
  difficulty: string;
  exerciseSet: string;
};
