import { useState } from "react";
import SingleSelection from "./SingleSelection";
import MultiSelection from "./MultiSelection";

function Faqs() {
  const [isMultiSelect, setMultiSelect] = useState(false);

  const handleClick = (e) => {
    setMultiSelect(e.target.checked);
  };

  const Accordian = () => {
    return isMultiSelect ? <MultiSelection /> : <SingleSelection />;
  };

  return (
    <div className="grid gap-5">
      <div className="text-sm border-black border rounded-sm w-fit p-1 font-semibold">
        <input type="checkbox" id="checkboxx" onClick={handleClick} />{" "}
        <label htmlFor="checkboxx">Multi-select Accordian</label>
      </div>
      <div>
        <Accordian />
      </div>
    </div>
  );
}

export default Faqs;
