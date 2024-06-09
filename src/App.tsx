import React from 'react'
import DarkMode from './components/DarkMode'
import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
const App = () => {
  return (
    <>
      
     <Grid
     templateAreas={{
      base : `"nav" "main"`, 
      lg : `"nav nav" "aside main"`
     }}
     color='blackAlpha.700'
     >
     <GridItem bg="orange.300" area={'nav'}>
      <NavBar/>
      </GridItem>
     <Show above="lg">
     <GridItem bg="green.300" area ={'aside'}>aside</GridItem>
     </Show>
     <GridItem bg="blue.200" area={'main'}>
      <GameGrid/>
    </GridItem>
     </Grid>
    </>
  )
}

export default App