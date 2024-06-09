import { Button } from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/react'
const DarkMode = () => {
  const {colorMode, toggleColorMode} = useColorMode()
  return (
        <Button onClick={toggleColorMode} margin={3}>
            Toggle {colorMode === 'light' ? 'dark' : 'light'}
        </Button>
  )
}

export default DarkMode