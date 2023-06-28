import { Box, Button, HStack, Image } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <Box w='auto'>
      <HStack justifyContent='space-between'>
        <Image
          w='157rem'
          ml='54rem'
          mt='6rem'
          pointerEvents='none'
          userSelect='none'
          draggable='false'
          src='../images/LPblack1.png'
        ></Image>
        <Box
          pr='74rem'
          fontSize='22rem'
          gap='20rem'
          fontFamily='Poppins'
          fontWeight='400'
        >
          <HStack gap='64rem'>
            <HStack gap='16rem'>
              <Link href='/'>Home</Link>
              <Link href='/'>About</Link>
              <Link href='/'>Services</Link>
              <Link href='/'>Reviews</Link>
            </HStack>
            <Button fontSize='24rem'>Consult Now</Button>
          </HStack>
        </Box>
      </HStack>
    </Box>
  )
}
