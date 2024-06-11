import React from 'react'
import {useState, useEffect} from 'react'; 
import DarkMode from './components/DarkMode'
import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import {useColorMode} from '@chakra-ui/react'
import GenresList from './components/GenresList';
import {Genre} from './hooks/useGenres';
import PlatformMenu from './components/PlatformMenu';
import {HStack} from '@chakra-ui/react'
import SortSelector from './components/SortSelector'
import {Platform} from './hooks/usePlatform'
const App = () => {
  const {colorMode} = useColorMode();
  const [selectedGenre, setSelectedGenre] = useState<Genre|null>(null); 
  const [selectedPlatform , setSelectedPlatform] = useState<Platform|null>(null);
  const [selectedSort, setSelectedSort] = useState<string|null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  // useEffect (()=>{
  //    console.log('selected search is :',searchTerm); 
  // },[searchTerm]);

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
      <NavBar onSearch={(search)=>setSearchTerm(search)}/>
      </GridItem>
      {/* Aside area  */}
     <Show above="lg">
     <GridItem  area ={'aside'}
     color ={colorMode === 'light' ? 'blackAlpha.600' : 'whiteAlpha.800'}
     >
      
      <GenresList onSelectedGenre ={(genre: Genre)=>setSelectedGenre(genre)}/>
     </GridItem>
     </Show>
     {/* Main Area */}
     
     <GridItem  area={'main'}
      color ={colorMode === 'light' ? 'blackAlpha.600' : 'whiteAlpha.800'}
     >
      <HStack spacing={3}>
        <PlatformMenu onSelectedPlatform={(platform)=>setSelectedPlatform(platform)} selectedPlatform={selectedPlatform}/>
        <SortSelector onSelectedSort={(sortOrder)=>setSelectedSort(sortOrder)} selectedSort={selectedSort}/>
      </HStack>

      <GameGrid selectedGenre = {selectedGenre} selectedPlatform={selectedPlatform} selectedSort={selectedSort} searchTerm={searchTerm}/>
    </GridItem>
     </Grid>
    </>
  )
}

export default App