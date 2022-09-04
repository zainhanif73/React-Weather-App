import "./current-weather.css";

const CurrentWeather = ({ data }) => {
  console.log("\n\n", data);
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-description">{data.weather[0].description}</p>
        </div>
        <img
          src={`icons/${data.weather[0].icon}.png`}
          alt="wether"
          className="weather-icon"
        />
      </div>
      <div className="bottom">
        <p className="temperature">{Math.round(data.main.temp)}°C</p>
        <div className="detials">
          <div className="parameter-row">
            <span className="parameter-label">Details </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like: </span>
            <span className="parameter-value">
              {Math.round(data.main.feels_like)}°C
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind: </span>
            <span className="parameter-value">{data.wind.speed} m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity: </span>
            <span className="parameter-value">{data.main.humidity}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure: </span>
            <span className="parameter-value" style={{ marginLeft: "4px" }}>
              {" "}
              {data.main.pressure}hpa
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
