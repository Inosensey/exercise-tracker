import useInputValidation from "hooks/useInputValidation";
import React from "react";
import { ValidationType } from "Typescript/Types";

type PrimaryInputType = {
  type: string;
  label: string;
  name: string;
};

type SecondaryInputType = {
  type: string;
  label: string;
  name: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<any>>;
  enableValidation: boolean;
  validation?: any;
  setValidation?: any;
};

export const PrimaryInput = ({ type, label, name }: PrimaryInputType) => {
  return (
    <div className="flex w-full flex-col gap-1.5">
      <label className="font-poppins text-sm text-white">{label}</label>
      <input
        className="w-full rounded-lg p-1 font-poppins text-sm "
        type={type}
        name={name}
      />
    </div>
  );
};

export const SecondaryInput = ({
  type,
  name,
  label,
  value,
  setValue,
  enableValidation = false,
  validation,
  setValidation,
}: SecondaryInputType) => {
  return (
    <div className="flex flex-col gap-1">
      <label>{label}:</label>
      <input
        type={type}
        name={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          if (enableValidation) {
            const validationRes: ValidationType = useInputValidation(
              name,
              e.target.value
            );
            setValidation((prev: any) => ({
              ...prev,
              [validationRes.inputName]: {
                valid: validationRes.valid,
                message: validationRes.message,
              },
            }));
          }
          setValue(e.target.value);
        }}
        value={value}
        className="w-full rounded-lg bg-DarkBlueColor p-2 font-poppins font-normal text-white xs:text-xs"
        placeholder={label}
        onBlur={() => {
          if (enableValidation) {
            const validationRes: ValidationType = useInputValidation(
              name,
              value
            );
            setValidation((prev: any) => ({
              ...prev,
              [validationRes.inputName]: {
                valid: validationRes.valid,
                message: validationRes.message,
              },
            }));
          }
        }}
      />
      {validation.message !== "" && !validation.valid && (
        <div className="flex items-center gap-1 font-normal">
          <i className="fa-solid fa-circle-exclamation text-InvalidColor xs:text-xs"></i>
          <p className="text-InvalidColor xs:text-xs">{validation.message}</p>
        </div>
      )}
    </div>
  );
};
