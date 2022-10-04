import React from "react";

interface InputType {
  type: string;
  label: string;
  name: string;
}

function Input(props: InputType) {
  return (
    <div className="flex w-full flex-col gap-1.5">
      <label className="font-poppins text-sm text-white">{props.label}</label>
      <input
        className="w-full rounded-lg p-1 font-poppins text-sm "
        type={props.type}
        name={props.name}
      />
    </div>
  );
}

export default Input;
