import React from 'react'
import DarkMode from './components/DarkMode'
import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import {useColorMode} from '@chakra-ui/react'
import GenresList from './components/GenresList';
const App = () => {
  const {colorMode} = useColorMode();
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
      <GenresList/>
     </GridItem>
     </Show>
     <GridItem  area={'main'}
      color ={colorMode === 'light' ? 'blackAlpha.600' : 'whiteAlpha.800'}
     >
      <GameGrid/>
    </GridItem>
     </Grid>
    </>
  )
}

export default App