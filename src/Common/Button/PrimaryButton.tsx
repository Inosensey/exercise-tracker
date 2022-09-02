interface props {
  BtnName: string;
}

export default function PrimaryButton({ BtnName }: props) {
  return (
    <button className="w-full rounded-lg bg-PinkishColor p-1 font-poppins text-sm text-white">
      {BtnName}
    </button>
  );
}
