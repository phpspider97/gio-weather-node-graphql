import React from 'react'
export default function DisplayWeather({weatherData,cityName}) {
  return (
        <div className="flex-container"> 
            <div className="flex-box">
                <div className="first-div" style={{fontSize:'34px'}}> 
                    <span className="image-container"> 
                        <img src="https://cdn.pixabay.com/animation/2022/09/17/16/20/16-20-08-700_512.gif" className="weatherImage" />
                    </span>
                    <span className="condition"> 
                        {weatherData[0].weather[0].description} 
                    </span>
                    <span className="temp">
                        {weatherData[0].main.temp} &deg;
                    </span>
                    <span className="humidity">
                        Humidity : {weatherData[0].main.humidity}
                    </span>
                    <span className="wind">
                        Wind speed :  {weatherData[0].wind.speed}
                    </span>
                    <span className="location">
                        Location : {cityName}
                    </span>
                </div>
            </div>
        </div> 
  )
}
