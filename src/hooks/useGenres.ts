import {useState, useEffect} from 'react'; 
import APIClient from '../services/api-client';
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

    const apiClient = new APIClient<Genre>('/genres'); 

    return useQuery({
        queryKey : ['genres'], 
        queryFn : apiClient.getAll,
        staleTime : 1000 * 60 * 60 * 24
    })
}

export default useGenres;