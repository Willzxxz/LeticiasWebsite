import {
  Box,
  Center,
  List,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from '@chakra-ui/react'
import React from 'react'

export default function Services() {
  return (
    <Box h='760rem' bgColor='#003849' fontFamily='Poppins' p='50rem'>
      <Box h='650rem' w='700rem' bgColor='#5F2A2E' rounded='100rem' ml='auto'>
        <Center>
          <Stack>
            <Text mt='50rem' fontSize='40rem' color='white' mb='20rem'>
              What services do I offer?
            </Text>
            <UnorderedList fontSize='25rem' spacing='20rem' color='white'>
              <ListItem>Lorem ipsum dolor sit amet</ListItem>
              <ListItem>Consectetur adipiscing elit</ListItem>
              <ListItem>Integer molestie lorem at massa</ListItem>
              <ListItem>Facilisis in pretium nisl aliquet</ListItem>
              <ListItem>Consectetur adipiscing elit</ListItem>
              <ListItem>Integer molestie lorem at massa</ListItem>
              <ListItem>Facilisis in pretium nisl aliquet</ListItem>
              <ListItem>Integer molestie lorem at massa</ListItem>
            </UnorderedList>
          </Stack>
        </Center>
      </Box>
    </Box>
  )
}
