import React from "react";
import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import usePlatform from '../hooks/usePlatform';
// import { Platform } from '../hooks/usePlatform';
interface Props { 
    onSelectedPlatform : (platform: Platform)=>void, 
    selectedPlatform : Platform | null // TOD0: changed from Platform to string
}
interface Platform { 
  id : number, 
  name : string, 
  slug  : string
}
const PlatformMenu = ({onSelectedPlatform, selectedPlatform}:Props) => {
  const {data, error, isLoading} = usePlatform();
  if(error) return null;
  return (
    <>
      <Menu>
        <MenuButton as={Button}rightIcon={<FaChevronDown />}>
          {selectedPlatform ? selectedPlatform.name : 'Actions'}
        </MenuButton>
        <MenuList>
         {data.map((platform)=><MenuItem key={platform.id} onClick={()=>onSelectedPlatform(platform)}>{platform.name}</MenuItem>)}
        </MenuList>
      </Menu>
    </>
  );
};

export default PlatformMenu;
