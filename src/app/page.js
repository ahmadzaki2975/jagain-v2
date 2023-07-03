import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      <nav className="flex justify-between items-center px-[100px] py-4 font-montserrat border-b-[.7px] border-[#D0D0D0]">
        <div className="flex items-center gap-3">
          <Image src="/Logo.png" width={29} height={60} />
          <h1 className="font-semibold text-blue-secondary text-[32px]">Jagain!</h1>
        </div>

        <div className="flex gap-5 font-semibold text-grey-primary">
          <Link href="#">About Us</Link>
          <Link href="#">Help & Support</Link>
        </div>
      </nav>
    </main>
  );
}
