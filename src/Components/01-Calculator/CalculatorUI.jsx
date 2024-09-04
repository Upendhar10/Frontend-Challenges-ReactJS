import { useState } from "react";

/*
    Learings:
    - While interacting with the DOM, prefer to use least number of DOm events, as a result DOM will be light weight and performant.
    - In this Implementation, instead of applying onClick() to each any every button independently, we chose to implement a single onClick button the container and based on the buttonContent we are performing the operation.

    - Instead of writing each button separately, we chose to use an array to built the buttons grid, this is an efficient way.
*/

function CalculatorUI() {
  const btns = [
    "AC",
    "DEL",
    "%",
    "/",
    7,
    8,
    9,
    "*",
    4,
    5,
    6,
    "-",
    1,
    2,
    3,
    "+",
    0,
    ".",
    "00",
    "=",
  ];

  const [value, setValue] = useState(" ");

  function handleInputChange(e) {
    setValue(e.target.value);
  }

  function handleBtnClick(e) {
    let btnValue = e.target.id;

    if (btnValue === "AC") {
      setValue(" ");
    } else if (btnValue === "DEL") {
      setValue((val) => val.slice(0, -1));
    } else if (btnValue === "=") {
      getResult();
    } else {
      setValue((val) => val + btnValue);
    }
  }

  function getResult() {
    try {
      const ans = eval(value);
      setValue(ans);
    } catch (error) {
      alert("Invalid Inputs", error);
      setValue(" ");
    }
  }

  return (
    <div className="border-2 rounded-md border-black shadow-2xl p-4 bg-[#f1f2f6]">
      <form onSubmit={getResult}>
        <input
          type="text"
          value={value}
          className="w-full p-1 text-end text-xl font-semibold mb-5 border-2 border-black rounded-sm outline-none"
          onChange={handleInputChange}
        />
      </form>
      <div className="grid grid-cols-4 gap-1" onClick={handleBtnClick}>
        {btns.map((btn, idx) => {
          return (
            <button
              id={btn}
              key={idx}
              className="text-white w-14 p-3 border-black font-semibold text-xl rounded-sm bg-[#45aaf2] hover:bg-[#45aaf289]"
              //   onClick={handleBtnClick}
            >
              {btn}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default CalculatorUI;
