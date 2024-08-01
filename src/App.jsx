import React, { useState } from "react";
import obj from "./obj";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useEffect } from "react";

function App() {
  
  const [dropDown, setDropdown] = useState(false);
  
  
  const DropDownHandle = (index) => {
    setDropdown(dropDown === index ? false: index);
  };

  useEffect(()=>{
    setDropdown(0)
  },[])
  return (
    <>
      <div className="flex justify-center items-center h-screen flex-col">
        <h1 className="text-[30px] bg-red-300 p-3 rounded-md font-bold">
          Frequently Asked Questions
        </h1>
        <div className="flex flex-col m-5">
          {obj.map((item, index) => (
            <div className="flex flex-col m-2 bg-green-500 shadow-sm p-5 rounded-md font-bold w-[800px] transition duration-200 " key={index}>
              <button 
                className="flex items-center"
                onClick={() => DropDownHandle(index)}
              >
                {dropDown === index ? (<KeyboardArrowDownIcon />) : (<KeyboardArrowRightIcon />)}
                <h1 className="ml-2">{item.id}</h1>
              </button>

              {dropDown === index && (
                <div className="mt-5 ">
                  <p>{item.name}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
