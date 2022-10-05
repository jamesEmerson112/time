import React from 'react';
import {BsFillSquareFill} from 'react-icons/bs';
import '../DashboardComponent.css';

const EIGHTTEEN_YEARS = 18;
const DAYS_OF_ONE_YEAR = 365;
const DAYS_OF_ONE_WEEK = 7;
const HOURS_OF_ONE_DAY = 24;
const WEEKS_OF_ONE_YEAR = 52;
const WEEKS_OF_EIGHT_TEEN_YEARS_EXCLUDING_SLEEP_TIME = Math.round(
((24*365*18 - (16*365) - (14*365) - (13*365*3) - (12*365*7) - (10*365*6)) / 24 / 7)); // 18 years = 620 weeks =

/**
 * Display the Report Dashboard.
 * @param {fakeData} props
 * @return nothing
 */
export default function ReportComponent(props) {
  // console.log(props);
  const {data} = props;
  if(!data) {
    return;
  }
  let test = '';

  // calculate parent's left over time
  const minimumDailySleepHrs = 8;
  const leftoverHrs = 24 -
                      data.dailyWorkHrs -
                      data.dailyChoresHrs -
                      data.dailyTransportationHrs -
                      minimumDailySleepHrs;

  const daysOffHrsOfOneYear = (data.numberOfDaysOff *
    (HOURS_OF_ONE_DAY - 8 - data.dailyChoresHrs)) *
  WEEKS_OF_ONE_YEAR;

  const daysOffOfOneYear = data.numberOfDaysOff * 52;
  const totalLeftoverHrs = (DAYS_OF_ONE_YEAR - daysOffOfOneYear) * EIGHTTEEN_YEARS * leftoverHrs +
  daysOffHrsOfOneYear* EIGHTTEEN_YEARS;

  // console.log('totalLeftoverHrs ', totalLeftoverHrs);
  let totalLeftoverWeeks = totalLeftoverHrs /
  (HOURS_OF_ONE_DAY * DAYS_OF_ONE_WEEK);

  totalLeftoverWeeks = Math.round(totalLeftoverWeeks);

  let percentageOfParentBeingPresent = totalLeftoverWeeks /
  WEEKS_OF_EIGHT_TEEN_YEARS_EXCLUDING_SLEEP_TIME * 100;
  percentageOfParentBeingPresent = Math.round(percentageOfParentBeingPresent);

  const totalLeftoverYears = totalLeftoverWeeks / 52;

  // console.log('totalLeftoverWeeks ', totalLeftoverWeeks);

  // 18 years === 620 weeks
  const weeksWithoutParent = WEEKS_OF_EIGHT_TEEN_YEARS_EXCLUDING_SLEEP_TIME -
  totalLeftoverWeeks;
  for (let i = 0; i < totalLeftoverWeeks; i += 1) {
    test += '| ';
  }
  for (let i = 0; i < weeksWithoutParent; i += 1) {
    // test.push(
    // <BsFillSquareFill key={i}>{" "}</BsFillSquareFill>
    // );
    test += '. ';
  }

  return (


    <div className="ReportComponent" id="id-report">

        <p>Report info</p>
        <p>Out of free time, you may spend maximum {totalLeftoverWeeks} weeks with your future children</p>
        <p>Children are awake for {WEEKS_OF_EIGHT_TEEN_YEARS_EXCLUDING_SLEEP_TIME} weeks within 18 years</p>
        <p>
          {test}
        </p>
        <p>You are there for {percentageOfParentBeingPresent} % of your child's life</p>
    </div>
  );
}

