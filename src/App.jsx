import './App.css'
import {Weather} from "./components/weather/Weather.jsx";
import {Counter} from "./components/Counter/Counter.jsx";
import {FilteredList} from "./components/FilterUsers/FilteredList.jsx";
import {RegistrationForm} from "./components/regForm/RegistrationForm.jsx";
import {Quiz} from "./components/quiz/Quiz.jsx";

function App() {

  return (
    <>
        <RegistrationForm/>
        <Quiz/>
    </>
  )
}

export default App
