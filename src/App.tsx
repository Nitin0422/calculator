import { useState } from "react";

function App() {
  const [value, setValue] = useState<string>("");

  const handleNumbersClick = (val: string) => {
    console.log(value.charAt(value.length - 1));
    if (
      value.charAt(value.length - 1) !== "*" &&
      value.charAt(value.length - 1) !== "/" &&
      value.charAt(value.length - 1) !== "+" &&
      value.charAt(value.length - 1) !== "-"
    ) {
      setValue(value + val);
    } else if (val !== "*" && val !== "/" && val !== "+" && val !== "-") {
      setValue(value + val);
    }
  };

  return (
    <div className="min-w-screen min-h-screen flex flex-col justify-center items-center bg-neutral-900 gap-8">
      <div className="flex justify-center">
        <h1 className="text-3xl font-bold text-neutral-400">
          {" "}
          Simple Calculator
        </h1>
      </div>
      <div className=" bg-neutral-800 flex flex-col gap-4 rounded-xl p-5">
        <div className="flex justify-between gap-3">
          <div className="p-2 flex-grow py-4 text-white text-xl text-right bg-neutral-900 rounded-xl">
            {value === "" ? 0 : value}
          </div>
          <input
            type="button"
            value="DEL"
            className="bg-neutral-900 rounded-xl p-2  font-thin text-xs text-white hover:bg-stone-800 focus:outline-none transition duration-100 transform-gpu active:scale-95"
            onClick={() => {setValue(value.slice(0, -1))}}
          />
        </div>
        <div className="buttons grid grid-rows-4 grid-cols-4 gap-4">
          <input
            type="button"
            value="7"
            className="bg-neutral-900 rounded-full p-3 shadow-lg shadow-neutral-600 font-thin text-3xl text-white hover:bg-neutral-800 focus:outline-none transition duration-100 transform-gpu active:scale-95"
            onClick={(e) => {
              handleNumbersClick(e.target.value);
            }}
          />

          <input
            type="button"
            value="8"
            className="bg-neutral-900 rounded-full p-3 shadow-lg shadow-neutral-600 font-thin text-3xl text-white hover:bg-neutral-800 focus:outline-none transition duration-100 transform-gpu active:scale-95"
            onClick={(e) => {
              handleNumbersClick(e.target.value);
            }}
          />
          <input
            type="button"
            value="9"
            className="bg-neutral-900 rounded-full p-3 shadow-lg shadow-neutral-600 font-thin text-3xl text-white hover:bg-neutral-800 focus:outline-none transition duration-100 transform-gpu active:scale-95"
            onClick={(e) => {
              handleNumbersClick(e.target.value);
            }}
          />
          <input
            type="button"
            value="AC"
            className="bg-neutral-900 rounded-full p-3 shadow-lg shadow-neutral-600 font-thin text-3xl text-white hover:bg-neutral-800 focus:outline-none transition duration-100 transform-gpu active:scale-95"
            onClick={() => setValue("")}
          />
          <input
            type="button"
            value="4"
            className="bg-neutral-900 rounded-full p-3 shadow-lg shadow-neutral-600 font-thin text-3xl text-white hover:bg-neutral-800 focus:outline-none transition duration-100 transform-gpu active:scale-95"
            onClick={(e) => {
              handleNumbersClick(e.target.value);
            }}
          />
          <input
            type="button"
            value="5"
            className="bg-neutral-900 rounded-full p-3 shadow-lg shadow-neutral-600 font-thin text-3xl text-white hover:bg-neutral-800 focus:outline-none transition duration-100 transform-gpu active:scale-95"
            onClick={(e) => {
              handleNumbersClick(e.target.value);
            }}
          />
          <input
            type="button"
            value="6"
            className="bg-neutral-900 rounded-full p-3 shadow-lg shadow-neutral-600 font-thin text-3xl text-white hover:bg-neutral-800 focus:outline-none transition duration-100 transform-gpu active:scale-95"
            onClick={(e) => {
              handleNumbersClick(e.target.value);
            }}
          />
          <input
            type="button"
            value="-"
            className="bg-neutral-900 rounded-full p-3 shadow-lg shadow-neutral-600 font-thin text-3xl text-white hover:bg-neutral-800 focus:outline-none transition duration-100 transform-gpu active:scale-95"
            onClick={(e) => {
              handleNumbersClick(e.target.value);
            }}
          />
          <input
            type="button"
            value="1"
            className="bg-neutral-900 rounded-full p-3 shadow-lg shadow-neutral-600 font-thin text-3xl text-white hover:bg-neutral-800 focus:outline-none transition duration-100 transform-gpu active:scale-95"
            onClick={(e) => {
              handleNumbersClick(e.target.value);
            }}
          />
          <input
            type="button"
            value="2"
            className="bg-neutral-900 rounded-full p-3 shadow-lg shadow-neutral-600 font-thin text-3xl text-white hover:bg-neutral-800 focus:outline-none transition duration-100 transform-gpu active:scale-95"
            onClick={(e) => {
              handleNumbersClick(e.target.value);
            }}
          />
          <input
            type="button"
            value="3"
            className="bg-neutral-900 rounded-full p-3 shadow-lg shadow-neutral-600 font-thin text-3xl text-white hover:bg-neutral-800 focus:outline-none transition duration-100 transform-gpu active:scale-95"
            onClick={(e) => {
              handleNumbersClick(e.target.value);
            }}
          />
          <input
            type="button"
            value="+"
            className="bg-neutral-900 rounded-full p-3 shadow-lg shadow-neutral-600 font-thin text-3xl text-white hover:bg-neutral-800 focus:outline-none transition duration-100 transform-gpu active:scale-95"
            onClick={(e) => {
              handleNumbersClick(e.target.value);
            }}
          />
          <input
            type="button"
            value="/"
            className="bg-neutral-900 rounded-full p-3 shadow-lg shadow-neutral-600 font-thin text-3xl text-white hover:bg-neutral-800 focus:outline-none transition duration-100 transform-gpu active:scale-95"
            onClick={(e) => {
              handleNumbersClick(e.target.value);
            }}
          />
          <input
            type="button"
            value="0"
            className="bg-neutral-900 rounded-full p-3 shadow-lg shadow-neutral-600 font-thin text-3xl text-white hover:bg-neutral-800 focus:outline-none transition duration-100 transform-gpu active:scale-95"
            onClick={(e) => {
              handleNumbersClick(e.target.value);
            }}
          />
          <input
            type="button"
            value="*"
            className="bg-neutral-900 rounded-full p-3 shadow-lg shadow-neutral-600 font-thin text-3xl text-white hover:bg-neutral-800 focus:outline-none transition duration-100 transform-gpu active:scale-95"
            onClick={(e) => {
              handleNumbersClick(e.target.value);
            }}
          />
          <input
            type="button"
            value="="
            className="bg-neutral-900 rounded-full p-3 shadow-lg shadow-neutral-600 font-thin text-3xl text-white hover:bg-neutral-800 focus:outline-none transition duration-100 transform-gpu active:scale-95"
            onClick={() => {
              value && setValue(eval(value).toString());
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
