import { extendTheme } from '@chakra-ui/react'
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
  mainColor: 'black',
}
const theme = extendTheme({ config })

export default theme