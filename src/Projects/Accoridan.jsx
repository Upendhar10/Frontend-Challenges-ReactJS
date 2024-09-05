import Faqs from "../Components/03-Accordian/Faqs";

/*
    1. Single Selection
    2. Multi Selection

*/

function Accoridan() {
  return (
    <div className="grid place-content-center h-screen w-screen gap-5">
      <h1 className="text-3xl font-bold uppercase text-center">Accordian</h1>
      <Faqs />
    </div>
  );
}

export default Accoridan;
