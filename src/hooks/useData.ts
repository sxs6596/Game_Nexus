import {useState, useEffect} from 'react'; 
import apiClient from '../services/api-client';
interface FetchResponse<T> { 
    count : number, 
    results : T[] 
}
const useGenres = <T>(endpoint : string)=>{
    const [data, setData] = useState<T[]>([]); 
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    useEffect(()=>{
       apiClient.get<FetchResponse<T>>(endpoint)
                .then((res)=>{console.log(res.data.results);
                     setData(res.data.results); 
                     setIsLoading(false); 
                    })
                .catch((err)=>{
                    setError(err.message)
                    setIsLoading(false);
                })
    },[])
    return {data, error, isLoading};
}
export default useGenres; 