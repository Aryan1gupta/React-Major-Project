import {useState} from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city:"Delhi",
        feelsLike:41.55,
        temp:42.84,
        tempMin:42.84,
        tempMax:43.05,        
        humidity:15,
        weather:"dust",
    });

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App By Me</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo}/>
        </div>
    )
}