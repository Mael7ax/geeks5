import {SearchInput} from "./SearchInput.jsx";
import weatherData from '../../data/weatherData.json'
import {useCallback, useState} from "react";
import {WeatherBlock} from "./WeatherBlock.jsx";
import {ErrorMessage} from "./ErrorMessage.jsx";


export const Weather = () => {
    const [weather, setWeather] = useState(null);
    const  [city, setCity] = useState("");
    const [error, setError] = useState("");

    const handleSearch = useCallback((cityName) => {
        const searchCity = cityName.trim();

        if (weatherData[searchCity]) {
            setWeather(weatherData[searchCity]);
            setCity(searchCity);
            setError("")
        }else{
            setWeather(null)
            setCity("");
            setError("Город не найден ");
        }
    },[])
    return (
        <div>
            <SearchInput onSearch={handleSearch}/>
            {error && <ErrorMessage message={error} /> }
            {weather && <WeatherBlock weather={weather} city={city} />}
        </div>
    );
};