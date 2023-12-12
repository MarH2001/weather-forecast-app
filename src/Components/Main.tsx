import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux'
import { getWeather, getApiAdress, getGeolocation } from '../Api';
import SearchBar from "./SearchBar";
import { WeatherDataType as TypesWeatherData } from "../Types/weather";
import LeftSideBar from "./LeftSideBar";
import Content from "./Content";

const Main = () => {
    const [weatherData, setWeatherData] = useState<TypesWeatherData>();
    const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
    const dispatch = useDispatch();

    useEffect(() => {
        getCurrentLocationWeather();
    }, []);

    const getCurrentLocationWeather = async () => {
        const userIp = await getApiAdress();
        const userGeoLocation = await getGeolocation(userIp.ip);
        const weatherData = await getWeather(userGeoLocation.geoplugin_countryName);
        const action = {
            type: 'SET_WEATHER',
            payload: weatherData
        }
        dispatch(action);
        setWeatherData(weatherData);
    }

    return (
        <div>
            {isSearchOpen ? <SearchBar setIsSearchOpen={setIsSearchOpen} /> :
                <LeftSideBar getCurrentLocationWeather={getCurrentLocationWeather}
                    setIsSearchOpen={setIsSearchOpen}
                />}
            <Content todaysForecast={weatherData?.forecast?.forecastday?.[0]} />

        </div>
    )
}
export default Main;