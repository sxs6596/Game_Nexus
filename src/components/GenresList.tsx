import React from 'react'
import useGenres from '../hooks/useGenres';
import {ListItem, List, HStack, Image, Text} from '@chakra-ui/react'
const GenresList = () => {
  const {data, error, isLoading} = useGenres();   
  return (
    <>
    <List spacing={3} paddingX={3}>
    {data.map((genre)=><ListItem key={genre.id}>
       <HStack> 
         <Image src={genre.image_background} boxSize="32px" borderRadius={8}></Image>
         <Text>{genre.name}</Text>
       </HStack> 
    </ListItem>)}
    </List>
    </>
  )
}

export default GenresList