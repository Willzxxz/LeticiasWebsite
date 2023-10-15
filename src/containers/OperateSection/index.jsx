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
        w='1440rem'
        overflow='hidden'
        position='relative' // Ensure relative positioning for absolutely positioned children
      >
        <Box ml='-250rem'>
          <Image
            src='../images/giantblob.png'
            w='770rem'
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
        <Box
          position='absolute'
          mt='100rem'
          ml='800rem'
          w='fit-content'
          border=''
        >
          <Text fontSize='40rem' color='white' zIndex='10'>
            Lugares aonde eu atuo
          </Text>
        </Box>

        <Box
          mt='200rem'
          h='550rem'
          zIndex='0'
          bgGradient='linear-gradient(to-bl, #FFF, #8B8B8B)'
          w='1440rem'
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
        <Box
          // mb='0rem'
          position='absolute'
          mt='742rem'
          zIndex='2'
          bgColor='#C6CDD2'
          w='1440rem'
          h='25rem'
        />
      </Box>
    </>
  )
}
