import React from "react";
import { useWeather } from "../context/weather";
const Input = ()=>{
    const weather = useWeather();
    console.log(weather);
    
    return(
        <input className="input-field"
        placeholder="search here"
         value={weather.searchcity} 
         onChange={(e)=>weather.setcity(e.target.value)}

         />
    )
}

export default Input;