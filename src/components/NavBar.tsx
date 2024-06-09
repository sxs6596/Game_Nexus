import React from 'react'
import { HStack, Image, Text } from '@chakra-ui/react'
import instagram from '../assets/instagram.png'
import logoIcon from '../assets/logoIcon.svg'
import FirstLogo from '../assets/FirstLogo.png'
import DarkMode from './DarkMode'
const NavBar = () => {
  return (
    <HStack>
        <Image src={FirstLogo} boxSize="50px" margin="10px"></Image>
        <Text>Navbar</Text>
        <DarkMode />
    </HStack>
  )
}

export default NavBar