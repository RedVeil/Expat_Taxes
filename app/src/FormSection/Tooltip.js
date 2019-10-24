import React from "react";

export default function createTooltips(inputTooltips){
  const tooltips = inputTooltips.map(function(tooltip){
      return (
      <div 
        className="tooltip" 
        key={`${tooltip.id}-tooltip`}
        id={`${tooltip.id}-tooltip`} 
        style={{
          display:"none", 
          position:"relative",
          padding:"0 2em 0 2.5em", 
          width:"14em", 
          top:`${tooltip.top}em`}}>
        {tooltip.text}
      </div>) 
  })
  return <div style={{background:"none"}}>{tooltips}</div>
};