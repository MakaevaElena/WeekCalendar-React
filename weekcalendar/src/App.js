import "./styles.css";
import Calendar from './components/Calendar';
import TimeTable from "./components/Day-Times/Day-Times";

function App() {
  return (
    <div className="App">
      <h1>Interview Calendar</h1>
      <br />
      <Calendar />
      <TimeTable />
    </div >
  );
}

export default App;
