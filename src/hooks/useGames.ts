import {useState, useEffect} from 'react'; 
import apiClient from '../services/api-client';
interface Platform { 
    id : number, 
    name : string, 
    slug : string
}
export interface Game { 
    id:number, 
    name:string,
    background_image : string, 
    parent_platforms : {platform : Platform}[]
}

interface FetchGamesResponse { 
    count : number, 
    results : Game[]
}
const useGames = ()=>{
    const [games, setGames] = useState<Game[]>([]); 
    const [error, setError] = useState('');
    useEffect(()=>{
       apiClient.get<FetchGamesResponse>('/games')
                .then((res)=>{console.log(res.data.results); setGames(res.data.results)})
                .catch((err)=>setError(err.message))
    },[])
    return {games, error};
}
export default useGames; 