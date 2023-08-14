import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen py-10 lg:py-0 font-montserrat flex flex-col gap-10 lg:gap-0 lg:flex-row justify-center items-center px-[5%] py-[5%]">
      <section className="grid w-[90%] xs:w-[80%] max-w-[600px] 2xl:max-w-[800px] lg:w-1/2 place-items-center">
        <div className="flex gap-4 ">
          <img src="/Logo.png" alt="Logo" className="w-[42px] h-[97px]" />
          <h1 className="text-[56px] font-semibold text-blue-secondary">
            Jagain!
          </h1>
        </div>
      </section>

      <section className="w-[90%] xs:w-[70%] lg:w-1/2 max-w-[600px] 2xl:max-w-[700px] h-fit text-grey-primary shadow-[0_0_25px_#E0E9FF] p-8 rounded-[15px]">
        <h1 className="font-semibold text-[35px]">Sign In</h1>
        <p className="font-semibold">
          New user?{" "}
          <Link href="/register" className="text-blue-primary">
            Register an account
          </Link>
        </p>
        <form
          className="flex flex-col mt-10"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Test");
          }}
        >
          <label htmlFor="email">Email Address</label>
          <input
            type="text"
            className="//bg-red-500 py-1 border-b-[#D7D7D7] border-b-[.5px] focus:border-b-[#15181b]/90 !outline-none"
          />
          {/* <label className="mt-5" htmlFor="email">Password</label>
          <input
            type="text"
            className="//bg-red-500 py-1 border-b-[#D7D7D7] border-b-[.5px] focus:border-b-[#15181b]/90 !outline-none"
          /> */}
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
        <div className="py-3 unselectable hover:bg-[#D7D7D7]/60 w-full cursor-pointer text-center mt-5 rounded-[9px] border-[.5px] border-solid border-[#D7D7D7]">
          Continue With Google
        </div>
        <Link href="#" className="block mt-10 text-blue-primary font-semibold">Need help?</Link>
      </section>
    </main>
  );
}
