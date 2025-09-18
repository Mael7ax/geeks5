import './App.css'
import {Weather} from "./components/weather/Weather.jsx";
import {Counter} from "./components/Counter/Counter.jsx";
import {FilteredList} from "./components/FilterUsers/FilteredList.jsx";

function App() {

  return (
    <>
      <Weather/>
      <Counter/>
        <FilteredList/>
    </>
  )
}

export default App
