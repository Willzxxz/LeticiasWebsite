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
    <Box
      h='850rem'
      bgColor='#003849'
      fontFamily='Poppins'
      p='50rem'
      id='servicos'
    >
      <Box h='750rem' w='1100rem' bgColor='#5F2A2E' rounded='100rem' ml='auto'>
        <Center>
          <Stack>
            <Text mt='50rem' fontSize='40rem' color='white' mb='20rem'>
              Quais servicos eu presto?
            </Text>
            <UnorderedList fontSize='25rem' spacing='20rem' color='white'>
              <ListItem>Pesquisa geneologica</ListItem>
              <ListItem>Montagem de arvore geneologica</ListItem>
              <ListItem>Retificacao extrajudicial de registro civil</ListItem>
              <ListItem>Retificacao judicial de registro civil</ListItem>
              <ListItem>
                Assesoria juridica em processo de cidadenia europea
              </ListItem>
              <ListItem>Assesoria juridica na europa</ListItem>
              <ListItem>Consultoria em questão de cidadania Europea</ListItem>
              <ListItem>
                Consultoria e Assesoria em direito civil internacional
              </ListItem>

              <ListItem>Direito Internacional publico e privado</ListItem>
              <ListItem>
                Assessoria em pedido de autorização de residência de estrangeiro
                no Brasil
              </ListItem>
            </UnorderedList>
          </Stack>
        </Center>
      </Box>
    </Box>
  )
}
