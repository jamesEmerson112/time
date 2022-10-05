import React from 'react';
import {BsFillSquareFill} from 'react-icons/bs';
import '../DashboardComponent.css';

const EIGHTTEEN_YEARS = 18;
const DAYS_OF_ONE_YEAR = 365;
const DAYS_OF_ONE_WEEK = 7;
const HOURS_OF_ONE_DAY = 24;
const WEEKS_OF_ONE_YEAR = 52;
const WEEKS_OF_EIGHT_TEEN_YEARS_EXCLUDING_SLEEP_TIME =
620; // 18 years = 620 weeks =

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

  const daysOffHrs = (data.numberOfDaysOff *
    (HOURS_OF_ONE_DAY - 8 - data.dailyChoresHrs)) *
  WEEKS_OF_ONE_YEAR;

  const totalLeftoverHrs = DAYS_OF_ONE_YEAR * EIGHTTEEN_YEARS * leftoverHrs +
  daysOffHrs* EIGHTTEEN_YEARS;

  // console.log('totalLeftoverHrs ', totalLeftoverHrs);
  const totalLeftoverWeeks = totalLeftoverHrs /
  (HOURS_OF_ONE_DAY * DAYS_OF_ONE_WEEK);

  let percentageOfParentBeingPresent = totalLeftoverWeeks /
  WEEKS_OF_EIGHT_TEEN_YEARS_EXCLUDING_SLEEP_TIME * 100;
  percentageOfParentBeingPresent = Math.round(percentageOfParentBeingPresent);

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


    <div className="ReportComponent">

        <p>Report info</p>
        <p>Out of free time, you may spend maximum {totalLeftoverWeeks} with your future children</p>
        <p>Children are awake for 620 weeks within 18 years</p>
        <p>
          {test}
        </p>
        <p>You are there for {percentageOfParentBeingPresent} % of your child's life</p>
    </div>
  );
}

