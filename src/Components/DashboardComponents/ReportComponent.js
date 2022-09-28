import React from "react";
import {BsFillSquareFill} from "react-icons/bs";
import '../DashboardComponent.css';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
}




export default function ReportComponent () {
  let test = [];
  for (let i = 0; i < 4343; i += 1) {
    test.push(<BsFillSquareFill key={i}></BsFillSquareFill>);
  }

  console.log(test);

  return(
    <div className="ReportComponent">
      <p>Report info</p>
      <div className="ReportComponent Test">
        {test.map((item, index) => {
          return item;
        })}
      </div >
    </div>
  )
}

