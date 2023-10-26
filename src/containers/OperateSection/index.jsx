import {
  Box,
  Image,
  ListItem,
  Text,
  UnorderedList,
  useBreakpointValue,
} from '@chakra-ui/react'
import React from 'react'

export default function OperateSection() {
  const isMobile = useBreakpointValue({ m: true, d: false })

  return (
    <>
      <Box
        id='operateSection'
        h={{ d: '750rem', m: '520rem' }}
        bgColor='#5F2A2E'
        fontFamily='Poppins'
        w={{ d: '1440rem', m: '375rem' }}
        mt={{ m: '674rem', d: '655rem' }}
        mx='auto'
        overflow='hidden'
        position='relative'
      >
        {isMobile ? (
          <></>
        ) : (
          <Box w={{ d: '1440rem', m: '375rem' }} mx='auto'>
            <Box
              transform='scaleX(-1)'
              width='full'
              ml={{ d: '-2040rem', m: '-200rem' }}
              textAlign='center'
            >
              <Image
                src='../images/giantblob.png'
                w={{ d: '770rem' }}
                ml={{ d: '-350rem', m: '200rem' }}
                zIndex='1'
                position='absolute'
              />
              <Image
                src='../images/giantblob.png'
                transform='rotate(2deg)'
                w='750rem'
                ml={{ d: '-400rem', m: '250rem' }}
                zIndex='1'
                position='absolute'
                mt='10rem'
              />
            </Box>
            <Image
              src='../images/giantblob.png'
              w='770rem'
              ml={{ d: '-350rem' }}
              zIndex='1'
              position='absolute'
            ></Image>
            <Image
              src='../images/giantblob.png'
              transform='rotate(2deg)'
              w='750rem'
              ml={{ d: '-400rem' }}
              zIndex='1'
              position='absolute'
              mt='10rem'
            ></Image>
          </Box>
        )}
        <Box w={{ d: '1440rem', m: '375rem' }} px='10rem'>
          <Box
            position='absolute'
            mt={{ d: '60rem', m: '30rem' }}
            p='20rem'
            ml={{ d: '750rem', m: '5rem' }}
            w='fit-content'
            px='10rem'
          >
            <Text
              fontSize={{ d: '40rem', m: '26rem' }}
              color='white'
              px='10rem'
              alignSelf={'center'}
              zIndex='10'
            >
              Lugares aonde eu atuo
            </Text>
          </Box>
        </Box>{' '}
        <Box
          mt='150rem'
          h={{ d: '650rem', m: '550rem' }}
          zIndex='0'
          bgGradient='linear-gradient(to-bl, #FFF, #8B8B8B)'
          w='full'
          mx='auto'
          pt='30rem'
        >
          <Box ml={{ d: '720rem', m: '50rem' }}>
            <UnorderedList
              fontSize={{ d: '40rem', m: '22rem' }}
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
