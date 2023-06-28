import { Box, ChakraProvider } from '@chakra-ui/react'
import theme from 'theme'
import 'reset.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Box as='main' h='100vh'>
        {/* <Box w='1440rem' mx='auto' border='solid'> */}
        <Component {...pageProps} />
        {/* </Box> */}
      </Box>
    </ChakraProvider>
  )
}
