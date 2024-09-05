import { useState } from "react";
import AccordianData from "../../Config/AccordianData";

function SingleSelection() {
  const [selected, setSelected] = useState(null);

  function handleClick(getDataItemIdx) {
    setSelected(getDataItemIdx === selected ? null : getDataItemIdx);
  }

  return (
    <>
      <h2 className="text-xl font-bold uppercase text-center">
        Single - Selection Accordian
      </h2>
      <div className="min-w-[600px] my-5">
        {AccordianData && AccordianData.length > 0 ? (
          AccordianData.map((dataItem, index) => (
            <div key={index} className="border-2 border-black m-2 p-2">
              <h3
                className="flex items-center justify-between font-semibold text-2xl cursor-pointer"
                onClick={() => handleClick(index)}
              >
                {dataItem.question}{" "}
                <span className="text-3xl">
                  {selected === index ? "-" : "+"}
                </span>
              </h3>
              {selected === index && (
                <p className="m-3 font-semibold outline-t-2">
                  {dataItem.answer}
                </p>
              )}
            </div>
          ))
        ) : (
          <div>No Data Found!</div>
        )}
      </div>
    </>
  );
}

export default SingleSelection;
