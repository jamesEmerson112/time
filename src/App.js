import './App.css';
import FirstComponent from './Components/FirstComponent';
import DashboardComponent from './Components/DashboardComponent';


function App() {
  return (
    <div className="App">
      <FirstComponent />

      <div>
        <DashboardComponent />
        {/* <DashboardComponent /> */}
      </div>
    </div>
  );
}

export default App;
