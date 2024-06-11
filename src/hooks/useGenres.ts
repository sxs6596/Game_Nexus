import {useState, useEffect} from 'react'; 
import apiClient from '../services/api-client';
import useData, { FetchResponse } from './useData';
import { useQuery } from '@tanstack/react-query';
export interface Genre { 
    id:number, 
    name:string, 
    image_background:string
}

// interface FetchGenreResponse { 
//     count : number, 
//     results : Genre[] 
// }

// const useGenres = ()=>useData<Genre>('/genres');  

// export default useGenres; 

const useGenres = ()=>{

    return useQuery({
        queryKey : ['genres'], 
        queryFn : ()=>apiClient.get<FetchResponse<Genre>>('/genres').then(res=>res.data), 
        staleTime : 1000 * 60 * 60 * 24
    })
}

export default useGenres;