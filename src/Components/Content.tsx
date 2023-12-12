import { FC } from "react";
import { ForecastEachDay } from "../Types/weather";
import styled from 'styled-components';

interface ContentProps {
    todaysForecast?: ForecastEachDay
}

const Container = styled.div`
    position: absolute;
    width: 70%;
    right: 0;
    top: 0;
    background: #100e1d;
    min-height: 100vh;
    color: white;
    `;

const HightlightsTitle = styled.div`
    font-family: Raleway,sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    color: #e7e7eb;
    margin: auto;
    margin-top: 14%;
    `;

const HightlightsDetails = styled.div`
    width: 80%;
    text-align: left;
    margin: 30px auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    `;

const WindStatus = styled.div`
    min-width: 350px;
    background: #1e213a;
    text-align: center;
    margin: 15px 0;
    `;

const WindStatusTitel = styled.h3`
    font-weight: 500;
    font-size: 16px;
    text-align: center;
    padding-top: 20px;
    font-family: Raleway,sans-serif;
    color: #e7e7eb;
    `;

const WindData = styled.div`
    font-weight: 700;
    font-size: 45px;
    font-family: Raleway,sans-serif;
    color: #e7e7eb;
    `;

const WindDesc = styled.span`
    font-size: 25px;
    font-weight: 400;
    font-family: Raleway,sans-serif;
    color: #e7e7eb;
    `;

const Humidity = styled.div`
    min-width: 350px;
    background: #1e213a;
    text-align: center;
    margin: 15px 0;
    `;

const HumidityTitel = styled.h3`
    font-weight: 500;
    font-size: 16px;
    text-align: center;
    padding-top: 20px;
    font-family: Raleway,sans-serif;
    color: #e7e7eb;
    `;

const HumidityData = styled.div`
    font-weight: 700;
    font-size: 45px;
    font-family: Raleway,sans-serif;
    color: #e7e7eb;
    `;

const HumidityDesc = styled.span`
    font-size: 25px;
    font-weight: 400;
    font-family: Raleway,sans-serif;
    color: #e7e7eb;
    `;

const Visibility = styled.div`
    min-width: 350px;
    background: #1e213a;
    text-align: center;
    margin-bottom: 15px;
    `;

const VisibilityTitel = styled.h3`
    font-weight: 500;
    font-size: 16px;
    text-align: center;
    padding-top: 20px;
    font-family: Raleway,sans-serif;
    color: #e7e7eb;
    `;

const VisibilityData = styled.div`
    font-weight: 700;
    font-size: 45px;
    font-family: Raleway,sans-serif;
    color: #e7e7eb;
    padding-bottom: 20px;
    `;

const VisibilityDesc = styled.span`
    font-size: 25px;
    font-weight: 400;
    font-family: Raleway,sans-serif;
    color: #e7e7eb;
    `;

const AirPressure = styled.div`
    min-width: 350px;
    background: #1e213a;
    text-align: center;
    margin-bottom: 20px;
    `;

const AirPressureTitel = styled.h3`
    font-weight: 500;
    font-size: 16px;
    text-align: center;
    padding-top: 20px;
    font-family: Raleway,sans-serif;
    color: #e7e7eb;
    `;

const AirPressureData = styled.div`
    font-weight: 700;
    font-size: 45px;
    font-family: Raleway,sans-serif;
    color: #e7e7eb;
    padding-bottom: 20px;
    `;

const AirPressureDesc = styled.span`
    font-size: 25px;
    font-weight: 400;
    font-family: Raleway,sans-serif;
    color: #e7e7eb;
    `;

const TopBtns = styled.div`
    margin-top: 40px;
    display: flex;
    justify-content: end;
    `;

const Btn = styled.div`
    border-radius: 100%;
    padding: 15px;
    font-family: Raleway,sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    margin-right: 25px;
    color: #110e3c;
    text-align: center;
    background: #585676;
    cursor: pointer;
    `;

const ProgresBar = styled.div`
    width: 80%;
    height: 7px;
    background: #fff;
    border-radius: 50px;
    overflow: hidden;
    margin: auto;
    margin-bottom: 20px;
    `;

const BarFill = styled.div`
    height: 8px;
    background: #ffec65;
    width: 81%;
    `;

const Content: FC<ContentProps> = ({ todaysForecast }) => {

    return (
        <Container>
            <TopBtns>
                <Btn>°C</Btn>
                <Btn>°F</Btn>
            </TopBtns>

            <HightlightsTitle>Today's Hightlights </HightlightsTitle>
            <HightlightsDetails>
                <WindStatus>
                    <WindStatusTitel> Wind status </WindStatusTitel>
                    <WindData>{todaysForecast?.hour[0].wind_mph}<WindDesc>mph</WindDesc></WindData>
                </WindStatus>

                <Humidity>
                    <HumidityTitel>Humidity</HumidityTitel>
                    <HumidityData>{todaysForecast?.hour[0].humidity}<HumidityDesc>%</HumidityDesc>
                        <ProgresBar>
                            <BarFill data-v-042b7e1e=""></BarFill>
                        </ProgresBar>
                    </HumidityData>
                </Humidity>

                <Visibility>
                    <VisibilityTitel>Visibility</VisibilityTitel>
                    <VisibilityData>{todaysForecast?.hour[0].vis_miles}<VisibilityDesc>miles</VisibilityDesc>
                    </VisibilityData>
                </Visibility>

                <AirPressure>
                    <AirPressureTitel>Air Pressure </AirPressureTitel>
                    <AirPressureData>{todaysForecast?.hour[0].pressure_mb}<AirPressureDesc>hPa</AirPressureDesc>
                    </AirPressureData>
                </AirPressure>
            </HightlightsDetails>
        </Container>
    )
}

export default Content;