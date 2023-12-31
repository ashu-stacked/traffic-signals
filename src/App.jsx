import TrafficSignals from "./components/TrafficSignals";
import './App.css';

const trafficConfig = {
  red : {
    duration:5000,
    next: 'green'
  },
  yellow:{
    duration:500,
    next: 'red'
  },
  green:{
    duration:3000,
    next: 'yellow'
  }
}

function App() {

  return (
    <div className="trafficLights">
      <TrafficSignals config ={trafficConfig} />
    </div>
  )
}

export default App


/**
 * Pseudo code for traffic signals
 * red => 5000ms
 * yellow => 1000ms
 * green => 6000ms
 * red->yellow->green->red->yellow-->green
 */
