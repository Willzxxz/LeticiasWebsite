import { Box, Image, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import React from 'react'

export default function OperateSection() {
  return (
    <>
      <Box
        id='operateSection'
        h='750rem'
        bgColor='#5F2A2E'
        fontFamily='Poppins'
        // w='1440rem'
        mx='auto'
        overflow='hidden'
        position='relative' // Ensure relative positioning for absolutely positioned children
      >
        <Box w='1440rem' mx='auto'>
          <Box
            transform='scaleX(-1)'
            width='full'
            // position='absolute'
            // left='0'
            // right='0'
            ml='-2040rem'
            textAlign='center'
          >
            <Image
              src='../images/giantblob.png'
              w='770rem'
              ml='-350rem'
              zIndex='1'
              position='absolute'
            />
            <Image
              src='../images/giantblob.png'
              transform='rotate(2deg)'
              w='750rem'
              ml='-400rem'
              zIndex='1'
              position='absolute'
              mt='10rem'
            />
          </Box>
          <Image
            src='../images/giantblob.png'
            w='770rem'
            ml='-350rem'
            zIndex='1'
            position='absolute'
          ></Image>
          <Image
            src='../images/giantblob.png'
            transform='rotate(2deg)'
            w='750rem'
            ml='-400rem'
            zIndex='1'
            position='absolute'
            mt='10rem'
          ></Image>
        </Box>
        <Box w='1440rem' mx='auto'>
          <Box
            position='absolute'
            mt='80rem'
            ml='800rem'
            w='fit-content'
            border=''
          >
            <Text fontSize='40rem' color='white' zIndex='10'>
              Lugares aonde eu atuo
            </Text>
          </Box>
        </Box>{' '}
        <Box
          mt='200rem'
          h='550rem'
          zIndex='0'
          bgGradient='linear-gradient(to-bl, #FFF, #8B8B8B)'
          w='full'
          mx='auto'
          pt='30rem'
        >
          <Box ml='720rem'>
            <UnorderedList
              fontSize='40rem'
              spacing='20rem'
              color='black'
              mx='auto'
              w='fit-content'
            >
              <ListItem>Brasil</ListItem>
              <ListItem>Portugal</ListItem>
              <ListItem>Luxembuorgo</ListItem>
              <ListItem>Alemanha</ListItem>
              <ListItem>Italia</ListItem>
              <ListItem>Polonia</ListItem>
            </UnorderedList>
          </Box>
        </Box>
        {/* <Box
          // mb='0rem'
          position='absolute'
          mt='742rem'
          zIndex='2'
          bgColor='#C6CDD2'
          w='1440rem'
          h='25rem'
        /> */}
      </Box>
    </>
  )
}
