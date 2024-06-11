import React from 'react'
import {Input, InputGroup, InputLeftElement} from '@chakra-ui/react'; 
import {FaSearch} from 'react-icons/fa';
import { useRef } from 'react';
interface Props { 
    onSearch : (searchTerm: string)=>void

}
const SearchInput = ({onSearch}:Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <>
     <form onSubmit={(event)=>{
            event.preventDefault(); 
            onSearch(ref.current?.value || '');
     }}>
         <InputGroup>
            <InputLeftElement pointerEvents='none' children={<FaSearch color='gray.300'/>}/>
            <Input type='text' placeholder='Search Games...'variant='filled' borderRadius={10}
            ref ={ref}
            />
         </InputGroup>
     </form>
    </>
  )
}

export default SearchInput;