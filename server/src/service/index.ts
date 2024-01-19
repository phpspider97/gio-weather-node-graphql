class WeatherData {
    public static async getCityName(apiUrl: string) {
        try{
            const dataByCityName = await fetch(`${apiUrl}`)
            const dataByCityNameJSON = await dataByCityName.json()
            if(dataByCityNameJSON.list != undefined){ 
                return [dataByCityNameJSON.list[0]]    
            }else{
                return []
            }
        }catch(err){
            return err
        }
    }
    public static async getCityID(apiUrl: string) {
        try{
            const dataByCityID = await fetch(`${apiUrl}`) 
            const dataByCityIDJSON = await dataByCityID.json()  
            if(dataByCityIDJSON.list != undefined){
                return [dataByCityIDJSON.list[0]]
            }else{
                return []
            }
        }catch(err){
            return err
        }  
    }
    public static async getCityCoordinate(apiUrl: string) {
        try{
            const dataByCityCoordinate = await fetch(`${apiUrl}`) 
            const dataByCityCoordinateJSON = await dataByCityCoordinate.json() 
            if(dataByCityCoordinateJSON.list != undefined){
                return [dataByCityCoordinateJSON.list[0]]
            }else{
                return []
            }
        }catch(err){
            return err
        }
    }
    public static async getCityZip(apiUrl: string) {
        try{
            const dataByCityZip = await fetch(`${apiUrl}`) 
            const dataByCityZipJSON = await dataByCityZip.json() 
            if(dataByCityZipJSON.list != undefined){
                return [dataByCityZipJSON.list[0]]   
            }else{
                return []
            }
        }catch(err){
            return err
        }
    }
 
}
export default WeatherData; 