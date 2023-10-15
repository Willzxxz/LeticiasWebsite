import { Box, Center, Divider, Image, Text } from '@chakra-ui/react'
import React from 'react'

export default function CTA() {
  return (
    <Box bgColor='#003849' fontFamily='Poppins' mt='0rem'>
      <Box w='1440rem' mx='auto'>
        <Box pt='130rem'>
          <Divider w='990rem' ml='auto' />
        </Box>
        <Center mt='-60rem'>
          <Text
            mt='60rem'
            fontSize='32rem'
            color='white'
            fontWeight='400'
            textAlign='right'
            w='1000rem'
            ml='auto'
            pr='100rem'
          >
            Fale com um especialista agora e deixe a burocracia da sua cidadania
            europeia conosco!
          </Text>
        </Center>
        <Text
          mt='20rem'
          fontSize='20rem'
          color='white'
          fontWeight='200'
          textAlign='right'
          w='800rem'
          ml='auto'
          pr='100rem'
          fontFamily='Montserrat'
        >
          Obtenha uma estimativa agora em menos de 10 minutos e descubra o que
          precisa fazer para abrir as portas da Europa para você.
        </Text>
        <Box
          w='100%'
          bgColor='#003849'
          mt='-300rem'
          zIndex='-10'
          pointerEvents='none'
          userSelect='none'
          draggable='false'
        >
          <Image
            src='./images/abstractbg.png'
            transform='scale(1.2)'
            mt='-400rem'
          />
        </Box>
      </Box>
    </Box>
  )
}
