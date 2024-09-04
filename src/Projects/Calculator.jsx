import CalculatorUI from "../Components/01-Calculator/CalculatorUI";

function Calculator() {
  return (
    <div className="grid place-content-center h-screen w-screen gap-5">
      <h1 className="text-3xl font-bold uppercase text-center">Calculator</h1>
      <CalculatorUI />
    </div>
  );
}

export default Calculator;
