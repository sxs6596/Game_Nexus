import { Button } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/react';
import { MdDarkMode } from 'react-icons/md';
import { CiDark } from 'react-icons/ci';

const DarkMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button onClick={toggleColorMode} margin={3} leftIcon={colorMode === 'light' ? <MdDarkMode /> : <CiDark />} borderRadius='50%' padding={0} whiteSpace="nowrap">
       
    </Button>
  );
};

export default DarkMode;
