import React from 'react'
import { useState, useEffect } from 'react';
import apiClient from '../services/api-client';
import { useColorMode } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import { SimpleGrid } from '@chakra-ui/react'
import GameCard from './GameCard'
const GameGrid = () => {
    const {games, error} = useGames();

  return (
      <>
       {error && <div>{error}</div>}
       <SimpleGrid columns={{
          sm:1,
          md:2,
          lg:3,
       }
       } spacing={10} padding='10px'>
        {games.map((game)=><GameCard key={game.id} game={game}>{game.name}</GameCard>)}
         
       </SimpleGrid>
      </>
  )
}

export default GameGrid