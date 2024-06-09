import React from 'react'
import DarkMode from './components/DarkMode'
import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import {useColorMode} from '@chakra-ui/react'
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
     <GridItem bg="orange.300" area={'nav'}>
      <NavBar/>
      </GridItem>
     <Show above="lg">
     <GridItem bg="green.300" area ={'aside'}>aside</GridItem>
     </Show>
     <GridItem  area={'main'}
      color ={colorMode === 'light' ? 'blackAlpha.600' : 'whiteAlpha.600'}
     >
      <GameGrid/>
    </GridItem>
     </Grid>
    </>
  )
}

export default App