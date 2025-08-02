// import { useEffect } from "react";
// import Button from "./components/button";
// import Card from "./components/card";
// import Input from "./components/input";
// import "./App.css"
// import { useWeather } from "./context/weather";
// function App(){
//   const weather = useWeather();
//   console.log(weather);
  
//   useEffect(()=>{
//     // GET CURRENT LOCATION
//     weather.fetchlocation();
//   },[])
//   return(
//     <div className="App">
//        <h1>Weather App</h1>

//        <Input />
//        <Button value="Search" onClick={weather.fetchdata}/>

//        <Card />
//        <Button value="Refresh"/>
//     </div>
//   );
// }

// export default App;



import { useEffect, useState } from "react";
import Button from "./components/button";
import Card from "./components/card";
import Input from "./components/input";
import "./App.css";
import { useWeather } from "./context/weather";

function App() {
  const weather = useWeather();
  const [theme, setTheme] = useState("default");

  useEffect(() => {
    weather.fetchlocation();
  }, []);

  useEffect(() => {
    if (weather.data?.current) {
      const condition = weather.data.current.condition.text.toLowerCase();
      if (condition.includes("sunny") || condition.includes("clear")) {
        setTheme("sunny");
      } else if (condition.includes("rain")) {
        setTheme("rainy");
      } else if (condition.includes("cloud")) {
        setTheme("cloudy");
      } else {
        setTheme("default");
      }
    }
  }, [weather.data]);

  return (

      <div className={`App ${theme}`}>
      <div className="background-clouds">
        <div className="bg-cloud cloud1"></div>
        <div className="bg-cloud cloud2"></div>
        <div className="bg-cloud cloud3"></div>
      </div>

      <h1>🌤 Weather App</h1>
      <Input />
      <Button value="Search" onClick={weather.fetchdata} />
      <Card />
      <Button value="Refresh" onClick={weather.fetchlocation} />
    </div>
  );
}

export default App;
