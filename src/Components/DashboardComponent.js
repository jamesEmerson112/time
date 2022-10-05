import './DashboardComponent.css';
import React, {useEffect, useState} from 'react';
import ExtraInputInfoComponent from './DashboardComponents/ExtraInputInfoComponent';
import ReportComponent from './DashboardComponents/ReportComponent';
import UserInfoComponent from './DashboardComponents/UserInfoComponent';
import UserLifespanDashboard from './DashboardComponents/UserLifespanDashboard';


const fakeData = {
  'Age': 40,
  'dailyWorkHrs': 8,
  'dailyChoresHrs': 2,
  'dailyTransportationHrs': 1,
  'numberOfDaysOff': 2,
};

function DashboardComponent(props) {
  // const pressSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('hello');
  // }

  const { data } = props;

  console.log('DashboardComponent props data ', props)

  return (
    <div className="DashboardComponent"  >

      <p>Dashboard right here</p>
      <ReportComponent fakeData={fakeData} data={data}/>

      {/* <UserLifespanDashboard fakeData={fakeData} data={data}/> */}
      {/* <UserLifespanDashboard /> */}
      {/* <UserLifespanDashboard /> */}

    </div>
  );
}

export default DashboardComponent;
