import { Box, Center, HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
// import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader

// import { Carousel } from 'react-responsive-carousel'
import Testimonials from './testimonials'

export default function Reviews() {
  return (
    <Box bgColor='#003849' fontFamily='Montserrat' mt='10rem' id='depoimentos'>
      <Box w='1440rem' mx='auto'>
        <Center h='164rem'>
          <Text mt='60rem' fontSize='48rem' color='white' fontWeight='400'>
            Estais em boas maos
          </Text>
        </Center>
        <Box w='100%'>
          <Box
            h='68rem'
            zIndex='0'
            bgGradient='linear-gradient(to-r, #5F2A2E 85%, #8B565E 100%)'
            borderRightRadius='8rem'
            w='3500rem'
            ml='-2300rem'
          ></Box>
          <Center>
            <Box position='absolute' mt='-75rem'>
              <Text fontSize='32rem' color='white'>
                Veja o que nossos clientes disse sobre nossos trabalhos.
              </Text>
            </Box>
          </Center>
        </Box>
        {/* <Box w='718rem' h='550rem' bgColor='#C6CDD2'></Box> */}
        <Box w='100%' h='280rem' bgColor='#003849' py='50rem'>
          <Center>
            <Testimonials />
          </Center>
        </Box>
      </Box>
    </Box>
  )
}
