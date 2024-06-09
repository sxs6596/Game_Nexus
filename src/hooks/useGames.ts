import {useState, useEffect} from 'react'; 

import apiClient from '../services/api-client';
import useData from './useData';
interface Platform { 
    id : number, 
    name : string, 
    slug : string
}
export interface Game { 
    id:number, 
    name:string,
    background_image : string, 
    parent_platforms : {platform : Platform}[], 
    metacritic:number

}

// interface FetchGamesResponse { 
//     count : number, 
//     results : Game[]
// }
// const useGames = ()=>{
//     const [games, setGames] = useState<Game[]>([]); 
//     const [error, setError] = useState('');
//     const [isLoading, setIsLoading] = useState(true);
//     useEffect(()=>{
//        apiClient.get<FetchGamesResponse>('/games')
//                 .then((res)=>{console.log(res.data.results);
//                      setGames(res.data.results); 
//                      setIsLoading(false); 
//                     })
//                 .catch((err)=>{
//                     setError(err.message)
//                     setIsLoading(false);
//                 })
//     },[])
//     return {games, error, isLoading};
// }
const useGames = ()=>useData<Game>('/games');
export default useGames; 