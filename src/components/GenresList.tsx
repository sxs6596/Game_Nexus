import React from 'react'
import useGenres from '../hooks/useGenres';
import {ListItem, List, HStack, Image, Text, Button} from '@chakra-ui/react'
import { Genre } from '../hooks/useGenres';
interface Props { 
  onSelectedGenre : (genre: Genre)=>void

}
const GenresList = ({onSelectedGenre}:Props) => {
  const {data, error, isLoading} = useGenres();   
  return (
    <>
    <Text fontSize='xl' fontWeight='bold' padding={3}>Genres</Text>
    <List spacing={3} paddingX={3}>
    {data.map((genre)=><ListItem key={genre.id}>
       <HStack> 
         <Image src={genre.image_background} boxSize="32px" borderRadius={8}></Image>
         <Button onClick={()=>onSelectedGenre(genre)} variant='link'>{genre.name}</Button>
       </HStack> 
    </ListItem>)}
    </List>
    </>
  )
}

export default GenresList