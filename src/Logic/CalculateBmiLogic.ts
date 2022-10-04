const CalCulateBmiLogic = (height: string = "", kilo: string = ""): number => {
  const ConvertedHeight: number = height === "" ? 0 : parseFloat(height);
  const ConvertedKilo: number = kilo === "" ? 0 : parseFloat(kilo);
  const BMI: number =
    (ConvertedKilo / ConvertedHeight / ConvertedHeight) * 10000;
  return parseFloat(BMI.toFixed(2));
};

export default CalCulateBmiLogic;
