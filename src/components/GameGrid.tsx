import React from 'react'
import { useState, useEffect } from 'react';
import apiClient from '../services/api-client';
import { useColorMode } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import { SimpleGrid } from '@chakra-ui/react'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton';
import { Genre } from '../hooks/useGenres';
interface Props { 
  selectedGenre : Genre | null; 
}
const GameGrid = ({selectedGenre}:Props) => {
    const {data:games, error, isLoading} = useGames(selectedGenre);
    const skeletons = [1,2,3,4,5,6]; 
  return (
      <>
       
       {error && <div>{error}</div>}
       <SimpleGrid columns={{
          sm:1,
          md:2,
          lg:3,
       }
       } spacing={10} padding='10px'>
        {isLoading ? skeletons.map((skeleton)=><GameCardSkeleton key={skeleton}>{skeleton}</GameCardSkeleton>) : null}
        {games.map((game)=><GameCard key={game.id} game={game}>{game.name}</GameCard>)}
         
       </SimpleGrid>
      </>
  )
}

export default GameGrid