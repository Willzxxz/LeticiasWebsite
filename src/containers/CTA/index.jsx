import {
  Box,
  Center,
  Divider,
  Image,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import React from 'react'

export default function CTA() {
  const isMobile = useBreakpointValue({ m: true, d: false })

  return (
    <Box
      bgColor='#003849'
      fontFamily='Poppins'
      w={{ d: 'full', m: '375rem' }}
      h={{ d: '561rem' }}
      mt='0rem'
      pt='50rem'
    >
      <Box w={{ d: '1440rem', m: '375rem' }} px='20rem' mx='auto'>
        {isMobile ? (
          <></>
        ) : (
          <Box pt={{ d: '130rem' }} ml='-20rem'>
            <Divider w={{ d: '990rem', m: '375rem' }} ml='auto' />
          </Box>
        )}
        <Center mt={{ d: '-60rem', m: '0rem' }}>
          <Text
            mt={{ d: '60rem', m: '0rem' }}
            fontSize={{ d: '32rem', m: '20rem' }}
            color='white'
            fontWeight='400'
            textAlign={{ d: 'right', m: 'left' }}
            w={{ d: '1000rem' }}
            ml='auto'
            pr={{ d: '100rem' }}
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
          textAlign={{ d: 'right', m: 'left' }}
          w={{ d: '800rem' }}
          ml='auto'
          pr={{ d: '100rem' }}
          fontFamily='Montserrat'
        >
          Obtenha uma estimativa agora em menos de 10 minutos e descubra o que
          precisa fazer para abrir as portas da Europa para você.
        </Text>
        <Box
          w={{ d: '100%', m: '385rem' }}
          ml={{ d: '', m: '-30rem' }}
          bgColor='#003849'
          mt={{ d: '-300rem', m: '-50rem' }}
          zIndex='-10'
          pointerEvents='none'
          userSelect='none'
          draggable='false'
        >
          <Image
            src='./images/abstractbg.png'
            transform={{ d: 'scale(1.2)', m: '' }}
            mt={{ d: '-440rem', m: '20rem' }}
          />
        </Box>
      </Box>
    </Box>
  )
}
