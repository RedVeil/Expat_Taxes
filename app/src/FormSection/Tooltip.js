import React from "react";

export default function createTooltips(inputTooltips){
  const tooltips = inputTooltips.map(function(tooltip){
      return <div className="tooltip" key={`${tooltip.id}-tooltip`} id={`${tooltip.id}-tooltip`} style={{display:"none"}}>{tooltip.text}</div>
  })
  return <div style={{padding:"5em 2em 2em 2.5em", width:"14em"}}>{tooltips}</div>
};