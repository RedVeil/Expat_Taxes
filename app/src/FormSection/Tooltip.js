import React from "react";

export default function createTooltips(inputTooltips){
  const tooltips = inputTooltips.map(function(tooltip){
      return <div className="tooltip" key={`${tooltip.id}-tooltip`} id={`${tooltip.id}-tooltip`} style={{display:"none"}}>{tooltip.text}</div>
  })
  return <div style={{padding:"0 2em 0 2.5em", width:"14em", position:"fixed", top:"16em", background:"#fff"}}>{tooltips}</div>
};