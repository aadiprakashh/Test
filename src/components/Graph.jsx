import { useState } from "react";
const Graph = () => {

  const [bold,setBold] =useState(false);
  const [italics,setItalics] =useState(false);
  const [under,setUnderline] =useState(false);
  const [line,setline] =useState(false);

  return (
    <div className="mx-auto flex flex-col gap-5">
      <p className={`${bold === true  ? 'font-bold' : ''} ${italics === true  ? 'italic' : ''} ${under === true  ? 'underline' : ''} ${line === true  ? 'line-through' : ''}`}>This is a text formater</p>
      <div className="flex gap-3">
        <button className="p-1 bg-gray-200 rounded" onClick={()=>{setBold((prev)=>!prev)}} >
          Bold
        </button>
        <button className="p-1 bg-gray-200 rounded" onClick={() => {setItalics((prev)=>!prev)}}>
          Italics
        </button>
        <button className="p-1 bg-gray-200 rounded" onClick={() => {setUnderline((prev)=>!prev)}}>
          Underline
        </button>
        <button className="p-1 bg-gray-200 rounded" onClick={() => {setline((prev)=>!prev)}}>
          Strike
        </button>
      </div>
    </div>
  );
};

export default Graph;
