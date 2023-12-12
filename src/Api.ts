import { WEATHER_API_URL, ADRESS_API_URL, GEOLOCATION_API_URL} from "./config";

export const getWeather = async (country: string): Promise<any> => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5817bed704msh8572f54f12ddaefp1db5e2jsn887f87e72c7d',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    try {
        const weather = await fetch(WEATHER_API_URL + `{${country}}&days=6&aqi=no&alerts=no`, options)
        return weather.json();
    }
    catch (err) {
        console.log(err);
    }
}

export const getApiAdress = async (): Promise<any> => {
    try {
        const ip = await fetch(ADRESS_API_URL);
        return ip.json();
    }
    catch (err) {
        console.log(err);
    }
}

export const getGeolocation = async (userIp: string): Promise<any> => {
    try {
        const geoLocation = await fetch(GEOLOCATION_API_URL + `${userIp}`)
        return geoLocation.json();
    }
    catch (err) {
        console.log(err);
    }
}
