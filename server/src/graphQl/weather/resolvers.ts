import WeatherData from "../../service";
import 'dotenv/config'
const cityNameApi = process.env.API_WEATHER_PREFIX
const API_KEY = process.env.API_WEATHER_KEY
const queries = {
  getWeatherByCityName: async (_:any,{parameter,condition}:{parameter:any,condition:string}) => {
    try{ 
      switch(condition){
        case 'cityName':
          return await WeatherData.getCityName(`${cityNameApi}?q=${parameter}&appid=${API_KEY}`)
        case 'cityID': 
          return await WeatherData.getCityID(`${cityNameApi}?id=${parameter}&appid=${API_KEY}`)
        case 'cityCoordinate':
          const lat = parameter.split('/')?.[0]
          const lon = parameter.split('/')?.[1]
          return await WeatherData.getCityCoordinate(`${cityNameApi}?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
        case 'cityZip':
          return await WeatherData.getCityZip(`${cityNameApi}?zip=${parameter}&appid=${API_KEY}`)
      }
    }catch(err){ 
      return err
    } 
  }
};

const mutations = {
  
};

export const resolvers = { queries, mutations };