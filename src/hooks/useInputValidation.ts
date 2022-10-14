import { ValidationType } from "Typescript/Types";

const useInputValidation = (
  inputName: string,
  inputValue: string
): ValidationType => {
  let result: ValidationType = {
    inputName: "",
    valid: false,
    message: "",
  };
  if (inputName === "exerciseSetName") {
    if (inputValue === "") {
      result = {
        inputName: inputName,
        valid: false,
        message: "This is a required field",
      };
    } else {
      result = {
        inputName: inputName,
        valid: true,
        message: "",
      };
    }
  }
  if (inputName === "numOfWeeks") {
    if (inputValue === "") {
      result = {
        inputName: inputName,
        valid: false,
        message: "This is a required field",
      };
    } else {
      result = {
        inputName: inputName,
        valid: true,
        message: "",
      };
    }
  }
  return result;
};

export default useInputValidation;
