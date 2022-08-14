import "./styles.css";
import Calendar from './components/Calendar';
import DayTimes from "./components/Day-Times";

function App() {
  return (
    <div className="App">
      <h1>Interview Calendar</h1>
      <br />
      <Calendar />
      <DayTimes />
    </div >
  );
}

export default App;
