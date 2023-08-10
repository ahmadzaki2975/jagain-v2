export default function Button({ text, variant, onClick, classname }) {
  if (variant == "primary")
    return (
      <button
        className={
          "bg-blue-primary text-[18px] outline outline-1 outline-blue-primary text-white font-medium rounded-[10px] hover:bg-blue-primary/90 transition duration-300" +
          " " +
          classname
        }
        onClick={onClick}
      >
        <h1 className="leading-[1]">{text}</h1>
      </button>
    );

  if (variant == "secondary")
    return (
      <button
        className={
          "bg-white text-[18px] outline outline-1 outline-blue-primary font-medium rounded-[10px] hover:drop-shadow-[0_0_5px_#628FFE] transition duration-300" +
          " " +
          classname
        }
        onClick={onClick}
      >
        <h1 className="leading-[1] ">{text}</h1>
      </button>
    );
}
