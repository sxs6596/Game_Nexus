import React from 'react'
import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react"
import { FaChevronDown } from "react-icons/fa";
interface Props { 
    onSelectedSort : (sortOrder: string)=>void, 
    selectedSort : string | null
}
const SortSelector = ({onSelectedSort, selectedSort}:Props) => {
  const sortOrders = [
    {value : '', label:'Relavance'}, 
    {value : '-added', label:'Date Added'}, 
    {value : 'name', label:'Name'}, 
    {value : '-metacritic', label:'Release Date'}, 
    {value : '-rating', label:'Average Rating'}, 
  ]
  return (
    <>
    <Menu>
  <MenuButton as={Button} rightIcon={<FaChevronDown />}>
    Sort By {selectedSort ? selectedSort : ''} 
  </MenuButton>
  <MenuList>
   {sortOrders.map((sortOrder)=><MenuItem 
   key={sortOrder.value}
   onClick = {()=>onSelectedSort(sortOrder.value)}
   >{sortOrder.label}</MenuItem>)}
  </MenuList>
</Menu>
    </>
  )
}

export default SortSelector