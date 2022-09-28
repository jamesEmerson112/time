import React from "react";

export default function ReportComponent () {
  let text = "";
  for (let i = 0; i < 4383; i += 1) {
    text += '. ';
  }

  return(
    <div className="ReportComponent">
      <p>Report info</p>
      <div>
        {[...Array(4383)].map((x, index) => {
          return <div key={index} className='square'> TEST </div>
        })}
      </div >
    </div>
  )
}