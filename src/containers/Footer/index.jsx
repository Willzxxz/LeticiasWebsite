import {
  Box,
  Button,
  Center,
  Divider,
  HStack,
  Image,
  Input,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react'
import ContactForm from 'components/ContectForm'
import React from 'react'

export default function Footer() {
  return (
    <Box bgColor='#003849' h='500rem' fontFamily='Poppins' mt='0rem'>
      <Box bgColor='white' w='100%' h='15rem' />

      <Box
        w='568rem'
        h='160rem'
        position='absolute'
        zIndex='5'
        mt='117rem'
        ml='65rem'
      >
        <HStack
          justifyContent='space-between'
          ml='10rem'
          pt='25rem'
          color='white'
          h='250rem'
        >
          <VStack h='250rem'>
            <Box w='107rem' fontSize='15rem' as='b'>
              <Text>Services</Text>
            </Box>
            <Box w='107rem' fontSize='15rem' pt='24rem'>
              <Text>Citizenship</Text>
            </Box>
            <Box w='107rem' fontSize='15rem' pt='16rem'>
              <Text>Civil Registry</Text>
            </Box>
            <Box w='107rem' fontSize='15rem' pt='16rem'>
              <Text>Passport</Text>
            </Box>
          </VStack>
          <VStack h='250rem' pl='40rem'>
            <Box w='220rem' fontSize='15rem' as='b'>
              Important Links
            </Box>
            <Box w='220rem' fontSize='15rem' pt='24rem'>
              <Text> EU official website</Text>
            </Box>
            <Box w='220rem' fontSize='15rem' pt='16rem'>
              <Text>Italian Immigration</Text>
            </Box>
            <Box w='220rem' fontSize='15rem' pt='16rem'>
              <Text>Portuguese Immigration</Text>
            </Box>
            <Box w='220rem' fontSize='15rem' pt='16rem'>
              <Text>Luxembourg Immigration</Text>
            </Box>
          </VStack>
          <VStack h='250rem' pl='10rem'>
            <Box w='270rem' pl='10rem' fontSize='24rem' as='b'>
              Contact
            </Box>
            <Box w='270rem' pl='10rem' fontSize='15rem' pt='16rem'>
              +55(48)9932-0387
            </Box>
            <Box w='270rem' pl='10rem' fontSize='15rem' pt='16rem'>
              LeticiaPortelinhas@gmail.com
            </Box>
            <Box w='270rem' pl='10rem' fontSize='15rem' pt='16rem'>
              Mon-Fri 9am to 6pm
            </Box>
          </VStack>
        </HStack>
      </Box>
      <HStack position='absolute' mt='117rem'>
        <Box w='67rem' h='51rem' bgColor='#8B565E'></Box>
        <Box w='140rem' h='51rem' bgColor='#5F2A2E'></Box>
        <Box w='550rem' h='51rem' bgColor='#8B565E'></Box>
      </HStack>
      <Box
        bgColor='#8B565E'
        w='140rem'
        h='full'
        ml='67rem'
        mb='-15rem'
        fontWeight='400'
      >
        <Center pt='15rem'>
          <Image src='../images/LPwhite.png' />
        </Center>
      </Box>
      <ContactForm />

      <Box bgColor='#653034' w='100%' h='95rem' mt='-20rem'>
        <Divider />
        <Text
          ml='65rem'
          mt='40rem'
          fontFamily='Montserrat'
          color='white'
          fontSize='18rem'
        >
          © LP, Inc. 2022.
        </Text>
      </Box>
    </Box>
  )
}
