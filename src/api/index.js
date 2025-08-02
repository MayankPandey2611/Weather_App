

const baseURL ="https://api.weatherapi.com/v1/current.json?key=015cf1da982e40f0bd9130354250208"
export const getWeatherDataForCity = async(city)=>{
    const res = await fetch(`${baseURL}&q=${city}&aqi=yes`)
    return await res.json();
};


export const getWeatherDataForLocation = async(lat,lon)=>{
    const res = await fetch(`${baseURL}&q=${lat},${lon}&aqi=yes`)
    return await res.json();
};

