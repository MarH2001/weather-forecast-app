import { FC, useState, useEffect } from "react";
import styled from 'styled-components';
import { GoLocation } from 'react-icons/go';
import { useSelector, connect } from 'react-redux';

interface LeftSideBarProps {
    getCurrentLocationWeather: () => Promise<void>;
    setIsSearchOpen: (isOpen: boolean) => void;
}

const Main = styled.div`
    background: linear-gradient(rgba(30,33,58,.95),rgba(30,33,58,.95) 0),url(/img/Cloud-background.343e2b41.png);
    background-position: 50% 0;
    background-color: rgba(30,33,58,.95);
    background-repeat: no-repeat;
    background-size: 150%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 30%;
    overflow-y: auto;
`;

const SearchLoc = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
`;

const SearchBtn = styled.button`
    margin-left: 50px;
    padding: 10px 18px;
    background: #6e707a;
    font-family: Raleway,sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    box-shadow: 0 4px 4px rgb(0 0 0 / 25%);
    color: #e7e7eb;
    cursor: pointer;
`;

const CurrentLocationBtn = styled.button`
    background: hsla(0,0%,100%,.2);
    border-radius: 100%;
    padding: 7px 8px;
    box-shadow: 0 4px 4px rgb(0 0 0 / 25%);
    color: #e7e7eb;
    margin-left: 5px;
    cursor: pointer;
`;

const TodaysWeatherData = styled.div`
    color: #a09fb1;
    font-size: 15px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

const WeatherImage = styled.img`
    width: 190px;
    margin-top: 10px;
`;

const Weather = styled.div`
    color: #e7e7eb;
    font-size: 65px;
    margin-top: 10px;
`;

const Condition = styled.div`
    color: #a09fb1;
    font-size: 22px;
    margin: 30px 0;
`;

const CurrentLoc = styled.div`
    display: flex;
    align-items: center;
    font-family: Raleway,sans-serif;
    font-style: normal;
    font-size: 15px;
    line-height: 21px;
    margin-top: 30px;
    color: #88869d;
`;

const LeftSideBar: FC<LeftSideBarProps> = ({ getCurrentLocationWeather, setIsSearchOpen }) => {
    const [weatherData, setWeatherData] = useState<any>(null);
    const weatherDataList = useSelector<any>(state => state.weatherData);

    useEffect(() => {
        if (weatherDataList != null) {
            setWeatherData(weatherDataList);
        }
    }, [weatherDataList])

    const todaysForecast = weatherData?.forecast?.forecastday?.[0];

    return (
        <Main>
            <TodaysWeatherData>
                <SearchLoc>
                    <SearchBtn onClick={() => setIsSearchOpen(true)}>Search for places</SearchBtn>
                    <CurrentLocationBtn className="btn-icon material-icons" onClick={getCurrentLocationWeather}> gps_fixed </CurrentLocationBtn>
                </SearchLoc>
                <WeatherImage src={todaysForecast?.day.condition.icon} />
                <Weather>{todaysForecast?.day.avgtemp_c}<span>°C</span></Weather>
                <Condition>{todaysForecast?.day.condition.text}</Condition>
                <div><span>Today • </span>{weatherData?.todaysForecast?.date}</div>
                <CurrentLoc> <GoLocation /> {weatherData?.location?.name} </CurrentLoc>
            </TodaysWeatherData>
        </Main>
    )
}
export default connect(state => state)(LeftSideBar); 