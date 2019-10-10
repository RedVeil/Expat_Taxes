import React from 'react';
import './ProgressBar.css';



export class ProgressBar extends React.Component {
  render() {
    let style = {
      backgroundColor: "#FF4E50",
      width: `${(this.props.formID / this.props.maxLength) * 100}%`,
      transition: "width 0.3s ease-in-out",
      borderRadius: "9px 9px 9px 9px",
      backgroundImage: "linear-gradient( #FF4E50 10%, #8A2B3C 90%)",
    }
    return (
      <div className="progress" style={style}></div>
    )
  }
}