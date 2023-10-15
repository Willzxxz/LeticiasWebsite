import { Box, ChakraProvider } from '@chakra-ui/react'
import theme from 'theme'
import 'reset.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Box as='main' mx='auto'>
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  )
}
