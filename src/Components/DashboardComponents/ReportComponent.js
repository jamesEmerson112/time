import React from "react";
import {BsFillSquareFill} from "react-icons/bs";

export default function ReportComponent () {
  // let text = "";
  // for (let i = 0; i < 4383; i += 1) {
  //   text += '. ';
  // }

  return(
    <div className="ReportComponent">
      <p>Report info</p>
      <div>
        {[...Array(4383)].map((x, index) => {
          return <div key={index}> TEST <BsFillSquareFill /></div>
        })}
      </div >
    </div>
  )
}

