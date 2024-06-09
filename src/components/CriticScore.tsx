import React from 'react'
import { Badge } from '@chakra-ui/react'
interface Props { 
    score : number 
}
const CriticScore = ({score}:Props) => {
    const color = score >= 85 ? 'green' : score >= 50 ? 'yellow' : 'red';
  return (
    <>
    <Badge colorScheme={color} paddingX={3} borderRadius={7}>{score}</Badge>
    </>
  )
}

export default CriticScore