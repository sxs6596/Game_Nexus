import {useState, useEffect} from 'react'; 

import apiClient from '../services/api-client';
import useData from './useData';
import {Genre} from './useGenres';
import {Platform} from './usePlatform';

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
const useGames = (selectedGenre : Genre | null, selectedPlatform : Platform | null, selectedSort : string | null)=>{
    console.log(`selected Genre Id is ${selectedGenre?.id} and selected Platform Id is ${selectedPlatform?.id}`);
    return (useData<Game>('/games', 
    {params:
        {genres:selectedGenre?.id,
         platforms:selectedPlatform?.id, 
         ordering:selectedSort
        }},
    [selectedGenre?.id, selectedPlatform?.id, selectedSort]));
}
export default useGames; 