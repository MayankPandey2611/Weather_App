import { createContext, useContext,useState } from "react";
import {getWeatherDataForCity , getWeatherDataForLocation} from "../api"
const WeatherContext = createContext(null);

export const  useWeather = ()=>{
    return useContext(WeatherContext);
};
export const WeatherProvider = (props)=>{
    const [data,setdata]=useState(null);
    const [searchcity,setcity]=useState(null);

    const fetchdata =async ()=>{
        const res = await getWeatherDataForCity(searchcity);
        setdata(res);
    };

    const fetchlocation = ()=>{
        navigator.geolocation.getCurrentPosition((position)=>{   
         getWeatherDataForLocation(position.coords.latitude,
            position.coords.longitude
        ).then(data => setdata(data));})
       

        
    }
    return (
    <WeatherContext.Provider value={{data,searchcity,setcity,fetchdata,fetchlocation}}>{props.children}</WeatherContext.Provider>
);
}
    
