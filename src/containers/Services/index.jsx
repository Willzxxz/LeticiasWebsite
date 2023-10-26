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
      h={{ d: '850rem', m: '710rem' }}
      bgColor='#003849'
      fontFamily='Poppins'
      w={{ m: '375rem', d: 'full' }}
      p={{ d: '50rem' }}
      py={{ m: '20rem' }}
      id='servicos'
    >
      <Box w={{ d: '1440rem', m: '320rem' }} mx='auto'>
        <Box
          h={{ d: '750rem', m: '670rem' }}
          w={{ d: '1100rem', m: 'full' }}
          bgColor='#5F2A2E'
          rounded='100rem'
          ml={{ d: '200rem', m: '0rem' }}
          pr='16rem'
          pl='30rem'
        >
          <Center>
            <Stack>
              <Text
                mt='50rem'
                alignSelf='center'
                fontSize={{ d: '40rem', m: '18rem' }}
                color='white'
                mb='20rem'
              >
                Quais servicos eu presto?
              </Text>
              <UnorderedList
                fontSize={{ d: '25rem', m: '14rem' }}
                spacing='20rem'
                color='white'
              >
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
                  Assessoria em pedido de autorização de residência de
                  estrangeiro no Brasil
                </ListItem>
              </UnorderedList>
            </Stack>
          </Center>
        </Box>{' '}
      </Box>
    </Box>
  )
}
