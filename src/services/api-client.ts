import axios, { AxiosRequestConfig } from 'axios';
const axiosInstance = axios.create({
    baseURL :'https://api.rawg.io/api',
    params:{
        key :'9574b632b0ac41c18a849e6d0c88b8dd'
    } 
})

class APIClient <T>{
    endpoint  : string; 
    constructor(endpoint : string){
        this.endpoint = endpoint; 
    }
    getAll = (config : AxiosRequestConfig)=>{
         return axiosInstance.get<T>(this.endpoint, config).then(res=>res.data);     
    }

}
export default APIClient; 