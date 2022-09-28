import './FirstComponent.css';

function FirstComponent() {
  const pressSubmit = (e) => {
    e.preventDefault();
    console.log('hello');
  }

  return (
    <div className="FirstComponent">
       {/* <form className="form" action="/" method="post"> */}
       <form className="form" >
        <h2>CREATE AN ENTRY</h2>
        <p type="Number"><input type="text" name="age" placeholder="Enter your age here."></input></p>

        <p type="Number"><input type="text" name="dailyWorkHrs" placeholder="Enter your daily work hours"></input></p>

        <p type="Number"><input type="text" name="dailyChoresHrs" placeholder="Enter your daily chore hours"></input></p>

        <p type="Number"><input type="text" name="dailyTransportationHrs" placeholder="Enter your daily transportation hours"></input></p>

        <p type="Number"><input type="text" name="numberOfDaysOff" placeholder="Enter the number of your days off"></input></p>

        <input className="button" type="submit" value="Submit" onClick={pressSubmit}/>
      </form>
    </div>
  );
}

export default FirstComponent;
