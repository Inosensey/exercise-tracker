import Image from "next/image";

type Props = {
  Text: string;
};

function Header({ Text }: Props) {
  return (
    <div className="flex h-1/4 w-full flex-col items-center justify-center gap-4">
      <div className="relative h-2/5 w-1/5">
        <Image
          src="/img/logo.png"
          layout="fill"
          objectFit="contain"
          alt="Logo"
        />
      </div>
      <h2 className="font-poppins text-lg text-PinkishColor">{Text}</h2>
    </div>
  );
}

export default Header;
