import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen pb-10">
      <nav className="flex z-[2] w-full justify-between items-center px-[100px] py-4 font-montserrat border-b-[.7px] border-[#D0D0D0]">
        <div className="flex items-center gap-3">
          <Image src="/Logo.png" width={29} height={60} />
          <h1 className="font-semibold text-blue-secondary text-[32px]">
            Jagain!
          </h1>
        </div>

        <div className="flex gap-5 font-semibold text-grey-primary">
          <Link href="#">About Us</Link>
          <Link href="#">Help & Support</Link>
        </div>
      </nav>

      <section className="flex text-center mt-20 //min-h-screen z-[1] text-blue-primary font-montserrat font-bold flex-col justify-center items-center">
        <p className="text-[60px] leading-[125%]">
          Easily manage <br /> <span className="text-grey-primary">your</span>{" "}
          personal finances
        </p>
        <div className="flex gap-8 mt-10">
          <Button text="Sign In" variant="secondary" classname="px-10 py-4" />
          <Button text="Register" variant="primary" classname="px-10 py-4" />
        </div>
        <div className="grid grid-cols-4 w-fit mx-auto gap-10 mt-[100px]">
          <div className="bg-blue-primary/20 text-[18px] text-grey-primary font-semibold px-[15px] py-[10px] rounded-[11px] w-[230px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            pharetra sem sit amet
          </div>
          <div className="bg-blue-primary/20 text-[18px] text-grey-primary font-semibold px-[15px] py-[10px] rounded-[11px] w-[230px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            pharetra sem sit amet
          </div>
          <div className="bg-blue-primary/20 text-[18px] text-grey-primary font-semibold px-[15px] py-[10px] rounded-[11px] w-[230px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            pharetra sem sit amet
          </div>
          <div className="bg-blue-primary/20 text-[18px] text-grey-primary font-semibold px-[15px] py-[10px] rounded-[11px] w-[230px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            pharetra sem sit amet
          </div>
        </div>
      </section>
    </main>
  );
}
