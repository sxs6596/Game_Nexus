import React from 'react'
import { Text, HStack } from '@chakra-ui/react'
interface Platform { 
    id : number, 
    name : string, 
    slug : string
}
interface Props { 
    platforms : Platform[]
}
const PlatformIcons = ({platforms} : Props) => {
  return (
     <>
     <HStack marginY='1px'>
      {platforms.map((platform)=><Text key={platform.id}>{platform.name}</Text>)}
     </HStack>
     </>
  )
}

export default PlatformIcons