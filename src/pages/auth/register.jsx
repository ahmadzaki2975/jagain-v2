import Link from "next/link";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValue, setEmailValue] = useState("");

  return (
    <main className="min-h-screen py-10 lg:py-0 font-montserrat flex flex-col gap-10 lg:gap-0 lg:flex-row justify-center items-center px-[5%]">
      <section className="grid w-[90%] xs:w-[80%] max-w-[600px] 2xl:max-w-[800px] lg:w-1/2 place-items-center">
        <div className="flex gap-4 ">
          <img src="/Logo.png" alt="Logo" className="w-[42px] h-[97px]" />
          <h1 className="text-[56px] font-semibold text-blue-secondary">
            Jagain!
          </h1>
        </div>
      </section>

      <section className="w-[90%] xs:w-[70%] lg:w-1/2 max-w-[600px] 2xl:max-w-[700px] h-[90vh] overflow-y-scroll pt-10 pb-20 text-grey-primary shadow-[0_0_25px_#E0E9FF] p-8 rounded-[15px]">
        <h1 className="font-semibold text-[35px]">Register your account</h1>
        {/* <p className={"font-semibold" + (email == "" ? " block" : " hidden")}>
          New user?{" "}
          <Link href="/register" className="text-blue-primary">
            Register an account
          </Link>
        </p> */}
        <form
          className="flex flex-col mt-10"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label className={"block font-semibold"} htmlFor="email">
            Email Address
          </label>
          <input
            type="text"
            className={
              "py-1 border-b-[#D7D7D7] border-b-[.5px] focus:border-b-[#15181b]/90 !outline-none"
            }
            value={emailValue}
            onChange={(e) => {
              setEmailValue(e.target.value);
            }}
            placeholder="example@me.com"
          />
          <label className="block font-semibold mt-7" htmlFor="phone">
            Phone Number
          </label>
          <input
            name="phone"
            id="phone"
            type="text"
            className={
              "py-1 border-b-[#D7D7D7] border-b-[.5px] focus:border-b-[#15181b]/90 !outline-none"
            }
            placeholder="+6281234567890"
          />
          <label className={"block font-semibold mt-7"} htmlFor="password">
            Password
          </label>
          <input
            name="password"
            id="password"
            type="text"
            className={
              "py-1 border-b-[#D7D7D7] border-b-[.5px] focus:border-b-[#15181b]/90 !outline-none "
            }
            placeholder="********"
          />
          <button
            type="submit"
            className="bg-blue-primary w-fit px-4 self-end text-white font-semibold rounded-[8px] py-2 mt-5"
          >
            Continue
          </button>
        </form>
        <div className="flex items-center gap-2 mt-10">
          <div className="w-full h-[.5px] bg-[#D7D7D7]"></div>
          Or
          <div className="w-full h-[.5px] bg-[#D7D7D7]"></div>
        </div>
        <div className="flex gap-[10px] items-center justify-center py-3 unselectable transition hover:bg-[#DDDDDD]/60 w-full cursor-pointer text-center mt-5 rounded-[9px] border-[.5px] border-solid border-[#D7D7D7]">
          <FcGoogle size={22} /> Continue With Google
        </div>
      </section>
    </main>
  );
}
