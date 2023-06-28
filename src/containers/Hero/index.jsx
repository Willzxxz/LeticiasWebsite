import { Box, Center, HStack, Text } from '@chakra-ui/react'
import React from 'react'

export default function index() {
  return (
    <Box
      h='775rem'
      bgGradient='linear-gradient(to-bl, #EBEAE8, #003849)'
      mt='-115rem'
      fontFamily='Poppins'
    >
      <Box
        mt='99rem'
        position='absolute'
        border='1px solid black'
        w='91%'
        mx='55rem'
      />
      <Box w='745rem' h='85rem' position='absolute' mt='198rem'>
        <HStack>
          <Box w='326rem' h='85rem' bgColor='#5F2A2E'>
            <Text
              position='absolute'
              color='white'
              ml='55rem'
              fontSize='25rem'
              fontWeight='300'
              mt='-40rem'
            >
              Who am I
            </Text>
            <Text fontSize='64rem' fontWeight='400' color='white' ml='55rem'>
              Leticia
            </Text>
          </Box>
          <Box w='420rem' h='85rem' bgColor='#8B565E'>
            <Text fontSize='64rem' fontWeight='400' color='black' ml='17rem'>
              Portelinha
            </Text>
            <Text
              fontSize='24rem'
              fontWeight='400'
              color='white'
              ml='17rem'
              w='548rem'
            >
              I am an Immigration Attorney, and I make getting your citizenship
              quick and easy. With years of experience in the field I take the
              stress out of planning this huge step in your life.
            </Text>
          </Box>
        </HStack>
      </Box>
      <Box bgColor='#8B565E' w='291rem' h='full' ml='34rem' fontWeight='400'>
        <HStack
          position='absolute'
          bottom='10rem'
          justifyContent='space-between'
          w='fit-content'
        >
          <Text color='white' fontSize='15rem' w='300rem' px='35rem'>
            Leticiaportelinha@gmail.com
          </Text>
          <Text color='white' fontSize='15rem' w='300rem'>
            <Center>+55 (48) 9932-0387</Center>
          </Text>
          <Text color='white' fontSize='15rem' w='300rem' px='35rem'>
            <Center>Social Medias</Center>
          </Text>
        </HStack>
      </Box>
      <Box
        mb='0rem'
        position='absolute'
        zIndex='2'
        bgColor='#470800'
        w='100%'
        h='25rem'
      />
    </Box>
  )
}
