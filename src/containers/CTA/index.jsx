import { Box, Center, Divider, Image, Text } from '@chakra-ui/react'
import React from 'react'

export default function CTA() {
  return (
    <Box bgColor='#003849' fontFamily='Poppins' mt='0rem'>
      <Box pt='130rem'>
        <Divider w='890rem' ml='auto' />
      </Box>
      <Center mt='-60rem'>
        <Text
          mt='60rem'
          fontSize='32rem'
          color='white'
          fontWeight='400'
          textAlign='right'
          w='900rem'
          ml='auto'
          pr='100rem'
        >
          Talk to an expert now and leave the bureaucracy of your European
          Citizenship to us!
        </Text>
      </Center>
      <Text
        mt='20rem'
        fontSize='20rem'
        color='white'
        fontWeight='200'
        textAlign='right'
        w='730rem'
        ml='auto'
        pr='100rem'
        fontFamily='Montserrat'
      >
        Get an estimate now in less than 10 minutes and find out what you need
        to do to open the doors of Europe for you.
      </Text>
      <Box w='100%' bgColor='#003849' mt='-350rem'>
        <Image src='./images/abstractbg.png' />
      </Box>
    </Box>
  )
}
