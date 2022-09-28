import './DashboardComponent.css';
import React, {useEffect, useState} from 'react';

const fakeData = {
  'Age': 40,
  'dailyWorkHrs': 8,
  'dailyChoresHrs': 2,
  'dailyTransportationHrs': 1,
  'numberOfDaysOff': 2,
};

function DashboardComponent() {
  // const pressSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('hello');
  // }

  console.log(fakeData);

  return (
    <div className="DashboardComponent">
      <p>Dashboard right here</p>

    </div>
  );
}

export default DashboardComponent;
