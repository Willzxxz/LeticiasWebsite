import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

export default function OperateSection() {
  return (
    <Box h='750rem' bgColor='#5F2A2E' fontFamily='Poppins'>
      <Box ml='-100rem'>
        <Image
          src='../images/giantblob.png'
          w='750rem'
          ml='100rem'
          zIndex='1'
          position='absolute'
        ></Image>
        <Image
          src='../images/giantblob.png'
          transform='rotate(2deg)'
          w='750rem'
          zIndex='1'
          position='absolute'
          mt='10rem'
        ></Image>
      </Box>
      <Box position='absolute' right='50rem' bottom='-540rem' w='fit-content'>
        <Text fontSize='48rem' color='white'>
          Where do I operate?
        </Text>
      </Box>

      <Box
        // mb='0rem'
        position='absolute'
        mt='560rem'
        h='196rem'
        zIndex='0'
        bgGradient='linear-gradient(to-bl, #FFF, #8B8B8B)'
        w='100%'
      >
        <Box
          position='absolute'
          right='50rem'
          top='35%'
          w='fit-content'
          zIndex='3'
        >
          <Text fontSize='48rem' color='black'>
            Florianopolis
          </Text>
        </Box>
      </Box>
      <Box
        // mb='0rem'
        position='absolute'
        mt='742rem'
        zIndex='2'
        bgColor='#C6CDD2'
        w='100%'
        h='25rem'
      />
    </Box>
  )
}
