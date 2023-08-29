import Image from "next/image";
import Logo from "../../../public/Logo.png";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import { useState } from "react";

export default function Dashboard() {
  const sectionClass = "bg-[#F5F9FF] p-20 rounded-[10px]";
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const [activeMonth, setActiveMonth] = useState(0);
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
            <h2 className="text-[17px] text-blue-primary leading-[130%]">
              Hi, There!
            </h2>
            <h1 className="text-[22px] font-semibold text-blue-primary leading-[100%]">
              User
            </h1>
          </div>
        </div>
      </nav>

      <main className="pt-5 pb-20 px-20 flex flex-col gap-7 font-montserrat">
        <section className="flex items-center gap-2">
          <BiSolidLeftArrow size={20} className="cursor-pointer" onClick={() => {
            if(activeMonth === 0) return
            setActiveMonth(activeMonth - 1)
          }} />
          <p className="text-[26px] font-semibold select-none">{months[activeMonth]} 2023</p>
          <BiSolidRightArrow size={20} className="cursor-pointer" onClick={() => {
            if(activeMonth === 11) return
            setActiveMonth(activeMonth + 1)
          }}/>
        </section>
        <section className={sectionClass}></section>
        <section className={sectionClass}></section>
      </main>
    </main>
  );
}
