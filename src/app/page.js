import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      <nav className="flex absolute top-0 z-[2] w-full justify-between items-center px-[100px] py-4 font-montserrat border-b-[.7px] border-[#D0D0D0]">
        <div className="flex items-center gap-3">
          <Image src="/Logo.png" width={29} height={60} />
          <h1 className="font-semibold text-blue-secondary text-[32px]">Jagain!</h1>
        </div>

        <div className="flex gap-5 font-semibold text-grey-primary">
          <Link href="#">About Us</Link>
          <Link href="#">Help & Support</Link>
        </div>
      </nav>

      <section className="flex text-center min-h-screen z-[1] leading-[125%] text-blue-primary font-montserrat text-[60px] font-bold flex-col justify-center items-center">
        <p>Easily manage <br /> <span className="text-grey-primary">your</span> personal finances</p>
      </section>
    </main>
  );
}
