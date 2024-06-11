import useData from './useData'
import { useQuery } from '@tanstack/react-query';
import { FetchResponse } from './useData';
import APIClient from '../services/api-client';

export interface Platform { 
    id : number, 
    name : string, 
    slug  : string
}

// const usePlatform = ()=>useData<Platform>('platforms/lists/parents'); 


// export default usePlatform; 

const usePlatform = ()=>{
    const apiClient = new APIClient<Platform>('platforms/lists/parents');
    return useQuery({
        queryKey:['platforms'], 
        queryFn:apiClient.getAll, 
        staleTime : 24*60*60*1000 // 24 hours
    })
}
export default usePlatform;