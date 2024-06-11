import {useState, useEffect} from 'react'; 
import apiClient from '../services/api-client';
import { Axios, AxiosRequestConfig } from 'axios';
export interface FetchResponse<T> { 
    count : number, 
    results : T[] 
}
const useData = <T>(endpoint : string, requestConfig?: AxiosRequestConfig, deps?:any[])=>{
    const [data, setData] = useState<T[]>([]); 
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    useEffect(()=>{
       apiClient.get<FetchResponse<T>>(endpoint, {...requestConfig})
                .then((res)=>{console.log(res.data.results);
                     setData(res.data.results); 
                     setIsLoading(false); 
                    })
                .catch((err)=>{
                    setError(err.message)
                    setIsLoading(false);
                })
    },deps ? [...deps] : []);
    return {data, error, isLoading};
}
export default useData; 