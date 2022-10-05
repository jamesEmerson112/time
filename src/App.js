import './App.css';
import FirstComponent from './Components/FirstComponent';
import DashboardComponent from './Components/DashboardComponent';
import React, {useEffect, useState} from 'react';


function App() {
  const [data, setData] = useState(null);

  function onHandleData (data) {
    setData(data);
  }

  return (
    <div className="App">
        <FirstComponent onHandleData={onHandleData}/>

        <DashboardComponent className="scroll-page"  data={data}/>
        {/* <DashboardComponent /> */}
    </div>
  );
}

export default App;
