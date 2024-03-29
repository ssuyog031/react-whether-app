import React, { useEffect, useState } from "react";
import '../style/style.css';
const TempComponent = () => {
  const [city, setCity] = useState(null);
  const [search, SetSearch] = useState("Pune");
  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=ec341eea937e278e38d2c1c86ad55795`;
      const response = await fetch(url);
      const resJson = await response.json();
      console.log(resJson);
      setCity(resJson);
    };
    fetchApi();
  }, [search]);
  return (
    <div className="box">
      <div className="inputData">
        <input
          type="search"
          placeholder="Enter a City"
          onChange={(event) => {
            SetSearch(event.target.value);
          }}
        />
      </div>
      {!city ? (
        <p>no data found</p>
      ) : (
        <div className="information">
          <h2 className="location">City Name : {search}</h2>
          {/* {console.log(city,"city1")} */}
          <h2>Temperature : {city?.main?.temp} °C</h2>
          <h2>Country : {city.sys?.country}</h2>

          <h3>
            Min temp : {city?.main?.temp_min} °C | Max temp :{city?.main?.temp_max}°C{" "}
          </h3>
          <h3>humidity :{city?.main?.humidity}</h3>
        </div>
      )}
    </div>
  );
};

export default TempComponent;
// https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=ec341eea937e278e38d2c1c86ad55795
// https://api.openweathermap.org/data/2.5/weather?q={pune}&appid=ec341eea937e278e38d2c1c86ad55795
