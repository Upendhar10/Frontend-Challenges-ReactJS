import { useState } from "react";
import AccordianData from "../../Config/AccordianData";

function MultiSelection() {
  const [selected, setSelected] = useState([]);

  function handleClick(getDataItemIdx) {
    let SelectedList = [...selected]; // Initially Empty

    const findIndexOfCurrentDataItem = SelectedList.indexOf(getDataItemIdx);
    console.log(findIndexOfCurrentDataItem);

    if (findIndexOfCurrentDataItem === -1) SelectedList.push(getDataItemIdx);
    else SelectedList.splice(findIndexOfCurrentDataItem, 1);

    // console.log(SelectedList);

    setSelected(SelectedList);
  }

  return (
    <>
      <h2 className="text-xl font-bold uppercase text-center">
        Multi - Selection Accordian
      </h2>
      <div className="min-w-[600px] my-5">
        {AccordianData && AccordianData.length > 0 ? (
          AccordianData.map((dataItem, index) => {
            return (
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
                {selected.indexOf(index) != -1 && (
                  <p className="m-3 font-semibold outline-t-2">
                    {dataItem.answer}
                  </p>
                )}
              </div>
            );
          })
        ) : (
          <div>No Data Found</div>
        )}
      </div>
    </>
  );
}

// const findIndexOfCurrentDataItem = SelectedList.indexOf(getDataItemIdx);

// if (findIndexOfCurrentDataItem === -1) SelectedList.push(getDataItemIdx);
// else SelectedList.splice(findIndexOfCurrentDataItem, 1);

// setSelected(SelectedList);

export default MultiSelection;
