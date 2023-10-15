import { Box, Button, HStack, Image, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <Box w='1440rem' mx='auto'>
      <HStack justifyContent='space-between'>
        <Link passHref href='/'>
          <a>
            <Image
              w='157rem'
              ml='54rem'
              mt='6rem'
              pointerEvents='none'
              userSelect='none'
              draggable='false'
              src='../images/LPblack1.png'
            ></Image>
          </a>
        </Link>
        <Link
          passHref
          href='https://servicos.oab-sc.org.br/hbconselhos/pgs/ConsultaMembroConselho.aspx'
        >
          <a target='_blank'>
            <Text
              color='black'
              ml='-40rem'
              fontSize='20rem'
              _hover={{ textDecoration: 'underline' }}
            >
              OAB/SC 55.417
            </Text>
          </a>
        </Link>

        <Box
          pr='74rem'
          fontSize='20rem'
          gap='20rem'
          fontFamily='Poppins'
          fontWeight='400'
        >
          <HStack gap='32rem'>
            <HStack gap='16rem'>
              <Link passHref href='#operateSection'>
                <a>
                  <Box _hover={{ textDecoration: 'underline' }}>Lugares</Box>
                </a>
              </Link>
              <Link passHref href='#servicos'>
                <a>
                  <Box _hover={{ textDecoration: 'underline' }}>Serviços</Box>
                </a>
              </Link>
              <Link passHref href='#pq'>
                <a>
                  <Box _hover={{ textDecoration: 'underline' }}>Porque Eu?</Box>
                </a>
              </Link>{' '}
              <Link passHref href='#depoimentos'>
                <a>
                  <Box _hover={{ textDecoration: 'underline' }}>
                    Depoimentos
                  </Box>
                </a>
              </Link>
            </HStack>
            <Link passHref href='https://wa.me/5548999320387'>
              <a target='_blank'>
                <Button
                  fontSize='24rem'
                  rounded='40rem'
                  bgColor='#8B565E'
                  color='white'
                  h='50rem'
                  _hover={{
                    bg: '#5F2A2E',
                    transform: 'scale(1.05)',
                  }}
                >
                  Consulte Agora
                </Button>
              </a>
            </Link>
          </HStack>
        </Box>
      </HStack>
    </Box>
  )
}
