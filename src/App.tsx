import React from 'react'
import {useState, useEffect} from 'react'; 
import DarkMode from './components/DarkMode'
import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import {useColorMode} from '@chakra-ui/react'
import GenresList from './components/GenresList';
import {Genre} from './hooks/useGenres';
const App = () => {
  const {colorMode} = useColorMode();
  const [selectedGenre, setSelectedGenre] = useState<Genre|null>(null); 
  return (
    <>
      
     <Grid
     templateAreas={{
      base : `"nav" "main"`, 
      lg : `"nav nav" "aside main"`
     }}
     color='blackAlpha.700'
     >
     <GridItem area={'nav'}
     color = {colorMode === 'light' ? 'blackAlpha.600' : 'whiteAlpha.800'}
     >
      <NavBar/>
      </GridItem>
     <Show above="lg">
     <GridItem  area ={'aside'}
     color ={colorMode === 'light' ? 'blackAlpha.600' : 'whiteAlpha.800'}
     >
      <GenresList onSelectedGenre ={(genre: Genre)=>setSelectedGenre(genre)}/>
     </GridItem>
     </Show>
     <GridItem  area={'main'}
      color ={colorMode === 'light' ? 'blackAlpha.600' : 'whiteAlpha.800'}
     >
      <GameGrid selectedGenre = {selectedGenre}/>
    </GridItem>
     </Grid>
    </>
  )
}

export default App