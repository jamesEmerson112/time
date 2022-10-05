import './FirstComponent.css';
import React, { useState, useEffect } from 'react';

function FirstComponent() {
  // VARIABLES
  const [data, setData] = useState({
    "age": "",
    "dailyWorkHrs":"",
    "dailyChoresHrs":"",
    "dailyTransportationHrs":"",
    "numberOfDaysOff":""
  });

  // FUNCTION
  const onChangeHandler = (event) => {
    setData(
      { ...data,
        [event.target.name]:
        event.target.value,
      }
      );
  }
  const pressSubmit = (e) => {
    e.preventDefault();
    console.log('data ', data);
  }

  return (
    <div className="FirstComponent">
       {/* <form className="form" action="/" method="post"> */}
       <form className="form" >
        <h2>CREATE AN ENTRY</h2>
        <p type="Number"><input type="text" name="age" placeholder="Enter your age here."
        onChange={onChangeHandler}></input></p>

        <p type="Number"><input type="text" name="dailyWorkHrs" placeholder="Enter your daily work hours"
        onChange={onChangeHandler}></input></p>

        <p type="Number"><input type="text" name="dailyChoresHrs" placeholder="Enter your daily chore hours"
        onChange={onChangeHandler}></input></p>

        <p type="Number"><input type="text" name="dailyTransportationHrs" placeholder="Enter your daily transportation hours"
        onChange={onChangeHandler}></input></p>

        <p type="Number"><input type="text" name="numberOfDaysOff" placeholder="Enter the number of your days off"
        onChange={onChangeHandler}></input></p>

        <input className="button" type="submit" value="Submit" onClick={pressSubmit}/>
      </form>
    </div>
  );
}

export default FirstComponent;
