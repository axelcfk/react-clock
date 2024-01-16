import "./App.css";
import Clock from "./Clock";
import Timer from "./Timer";

function App() {
  return (
    <div className="container">
      <Clock city="Stockholm" timeZone="CET" />
      <div className="timerContainer">
        <Timer startingTime={10} />
        <Timer startingTime={20} />
        <Timer startingTime={30} />
        <Timer startingTime={40} />
      </div>
    </div>
  );
}

export default App;
