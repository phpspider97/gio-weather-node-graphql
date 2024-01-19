import react, {useState, useEffect} from 'react'
import { gql, useQuery } from "@apollo/client"; 
import DisplayWeather from './component/DisplayWeather';
import "./index.css";

const query = gql`
  query getWeatherData($searchData: String!,$conditionData: String!) {
    getWeatherByCityName(parameter: $searchData, condition : $conditionData) {
      main
      wind
      weather 
    }
  }
`;

function App() {
  const [searchData,setSearchData] = useState('')
  const [weatherData,setWeatherData] = useState([])
  const [errData,setErrData] = useState('')
  const [conditionData,setConditionData] = useState('cityName')
  const [lonData,setLonData] = useState(0)
  const [latData,setLatData] = useState(0)

  const { data, loading, error } = useQuery(query, { variables: { searchData,conditionData } } );
   
  //if (loading) return <h1>Loadingt this is data.....</h1>
      
    const getWeatherData = () => {
        if(error) throw new Error(error)
        if(data != undefined && data.getWeatherByCityName?.length>0){
            setWeatherData(data.getWeatherByCityName)
        }else{
            setErrData('No result found.')
            setSearchData('')
        }
    }

    const resetData = () => {
        setWeatherData('')
        setSearchData('') 
    } 
    const setCoordinateData = (val,para) => {
        if(para == 'lat'){
            setSearchData(val)
            setLatData(val)
        }else{
            setSearchData(val)
            setLonData(val)
        }
        setSearchData(`${latData}/${lonData}`)
    }
  return (
    <>
      {
        weatherData?.length>0?
        <>
            <span onClick={resetData} className="back-button">Back</span>
            <DisplayWeather weatherData={weatherData} cityName={searchData}/>
        </>
        :
        <div className="flex-container-2"> 
            <div className="flex-box">
                <div className="first-div">
                    {   errData?
                        <><span className="err-message">{errData}</span><br/></>:''
                    }
                    {
                        conditionData == 'cityCoordinate' ?
                            <div className="coordinate-input-container">
                                <input type="number" onKeyDown={(e)=>setCoordinateData(e.target.value,'lat')} className="coordinate-input" defaultValue={latData} placeholder="Latitude"/> 
                                <input type="number" onKeyDown={(e)=>setCoordinateData(e.target.value,'lon')} className="coordinate-input" defaultValue={lonData} placeholder="Longitude"/>
                            </div>
                        :
                            <input type="text" onChange={(e)=>setSearchData(e.target.value)} className="search-input" value={searchData} placeholder="Search..."/>  
                    }
                           
                    <button className="btn fill-button" onClick={getWeatherData}> Start</button><br /><br />    
                    <div className="condition-radio-div">
                        <input type="radio" className="condition-radio" name="condition"  value='1' onChange={()=>{setConditionData('cityName')
                        setSearchData('')}} checked={conditionData=='cityName'} /> City Name <br />
                        <input type="radio" className="condition-radio" name="condition"  value='1' onChange={()=>{setConditionData('cityID') 
                        setSearchData('')}} checked={conditionData=='cityID'} /> City ID <br />
                        <input type="radio" className="condition-radio" name="condition"  value='1' onChange={()=>{setConditionData('cityCoordinate') 
                        setLonData('')
                        setLatData('')
                        }} checked={conditionData=='cityCoordinate'}/> City Coordinate <br />
                        <input type="radio" className="condition-radio" name="condition"  value='1'onChange={()=>{setConditionData('cityZip') 
                        setSearchData('')}} checked={conditionData=='cityZip'} /> City Zip
                    </div>
                </div>
            </div>
        </div>
    }
    </>
  )
}

export default App;