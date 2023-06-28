import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Center,
  HStack,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react'
import React from 'react'

export default function Reason() {
  return (
    <Box h='750rem' bgColor='#003849' fontFamily='Poppins'>
      <Box
        // mb='0rem'
        h='193rem'
        zIndex='0'
        bgGradient='linear-gradient(to-r, #5F2A2E, #8B565E)'
        borderRightRadius='100rem'
        w='1035rem'
      >
        <Box>
          <Center h='193rem'>
            <Text fontSize='48rem' color='white'>
              Reasons why I should be your choice?
            </Text>
          </Center>
        </Box>
      </Box>
      <HStack>
        <Box w='718rem' h='550rem' bgColor='#C6CDD2'>
          <Accordion fontSize='20rem' defaultIndex={[0]}>
            <AccordionItem>
              <AccordionButton>
                <Box
                  as='span'
                  flex='1'
                  textAlign='left'
                  h='60rem'
                  fontSize='30rem'
                >
                  Section 1 title
                </Box>
                <AccordionIcon boxSize='50rem' />
              </AccordionButton>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box
                  as='span'
                  flex='1'
                  textAlign='left'
                  h='60rem'
                  fontSize='30rem'
                >
                  Section 1 title
                </Box>
                <AccordionIcon boxSize='50rem' />
              </AccordionButton>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box
                  as='span'
                  flex='1'
                  textAlign='left'
                  h='60rem'
                  fontSize='30rem'
                >
                  Section 1 title
                </Box>
                <AccordionIcon boxSize='50rem' />
              </AccordionButton>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box
                  as='span'
                  flex='1'
                  textAlign='left'
                  h='60rem'
                  fontSize='30rem'
                >
                  Section 1 title
                </Box>
                <AccordionIcon boxSize='50rem' />
              </AccordionButton>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box
                  as='span'
                  flex='1'
                  textAlign='left'
                  h='60rem'
                  fontSize='30rem'
                >
                  Section 1 title
                </Box>
                <AccordionIcon boxSize='50rem' />
              </AccordionButton>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
        <Box w='700rem' h='550rem' bgColor='#003849'></Box>
      </HStack>
      <Box zIndex='2' bgColor='#5F2A2E' w='100%' h='25rem' />
    </Box>
  )
}
