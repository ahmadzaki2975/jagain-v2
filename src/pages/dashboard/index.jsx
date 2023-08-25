import Image from "next/image";
import Logo from "../../../public/Logo.png";

export default function Dashboard() {
  return (
    <main className="font-montserrat">
      <nav className="border-b-[0.7px] border-b-[#D0D0D0] px-[100px] py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Image src={Logo} alt="Logo" className="w-[30px]" />
          <h1 className="text-[32px] font-semibold text-blue-secondary">
            Jagain!
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-[54px] aspect-square rounded-full bg-red-500" />
          <div>
            <h2 className="text-[17px] text-blue-primary leading-[130%]">Hi, There!</h2>
            <h1 className="text-[22px] font-semibold text-blue-primary leading-[100%]">User</h1>
          </div>
        </div>
      </nav>
    </main>
  );
}
