import Image from "next/image";
import Logo from "../../../public/Logo.png";

export default function Dashboard() {
  const sectionClass = "bg-[#F5F9FF] p-20 rounded-[10px]"
  return (
    <main className="font-montserrat">
      <nav className="border-b-[0.7px] border-b-[#D0D0D0] px-[20px] sm:px-[50px] lg:px-[100px] py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Image src={Logo} alt="Logo" className="w-[30px]" />
          <h1 className="text-[32px] font-semibold text-blue-secondary">
            Jagain!
          </h1>
        </div>
        <div className="items-center gap-3 hidden xs:flex">
          <div className="w-[54px] aspect-square rounded-full bg-red-500" />
          <div>
            <h2 className="text-[17px] text-blue-primary leading-[130%]">Hi, There!</h2>
            <h1 className="text-[22px] font-semibold text-blue-primary leading-[100%]">User</h1>
          </div>
        </div>
      </nav>

      <main className="p-20">
      <section className={sectionClass}></section>
      </main>
    </main>
  );
}
