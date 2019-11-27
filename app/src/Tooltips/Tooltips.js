import React from "react";
import "./Tooltip.css";

export default function Tooltips(inputTooltips){
  const tooltips = inputTooltips.map(function(tooltip){
      return (
      <div 
        className="tooltip" 
        key={`${tooltip.id}-tooltip`}
        id={`${tooltip.id}-tooltip`} 
        style={{
          display:"none", 
          position:"relative",
          margin:"0 1em 0 12em", 
          padding: "1em",
          borderRadius: "5px",
          width:"14em", 
          top:`${tooltip.top}em`,
          backgroundColor: "#707070",}}>
        {tooltip.text}
      </div>) 
  })
  return <div style={{background:"none"}}>{tooltips}</div>
};