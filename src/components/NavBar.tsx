import React from 'react'
import { HStack, Image, Text, Box } from '@chakra-ui/react'
import instagram from '../assets/instagram.png'
import logoIcon from '../assets/logoIcon.svg'
import FirstLogo from '../assets/FirstLogo.png'
import DarkMode from './DarkMode'
const NavBar = () => {
  return (
    <HStack justifyContent='space-between'>
         <Box>
         <HStack>
        <Image src={FirstLogo} boxSize="50px" margin="10px"></Image>
        <Text fontSize="2xl" fontWeight="bold">GameNexus</Text>
        </HStack>
        </Box>
        <Box>
        <DarkMode/>
        </Box>
    </HStack>
  )
}

export default NavBar