import React from 'react'
import {Card, CardBody, Skeleton, SkeletonText} from '@chakra-ui/react'
const GameCardSkeleton = () => {
  return (
    <>
    <Card>
        <Skeleton  width='400px' borderRadius={10} height='300px'/>
        <CardBody>
            <SkeletonText noOfLines={3} spacing='4'/>
        </CardBody>
    </Card>
    </>
  )
}

export default GameCardSkeleton