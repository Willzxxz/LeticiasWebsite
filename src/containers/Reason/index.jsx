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
    <Box h='768rem' bgColor='#003849' fontFamily='Poppins' id='pq'>
      <Box
        // mb='0rem'
        h='193rem'
        zIndex='0'
        bgGradient='linear-gradient(to-r, #5F2A2E, #8B565E)'
        borderRightRadius='100rem'
        w='900rem'
      >
        <Box>
          <Center h='193rem'>
            <Text fontSize='48rem' color='white'>
              Motivos para me contratar
            </Text>
          </Center>
        </Box>
      </Box>
      <HStack>
        <Box w='718rem' h='568rem' bgColor='#C6CDD2'>
          <Accordion fontSize='20rem' defaultIndex={[0]}>
            <AccordionItem>
              <AccordionButton h='70rem'>
                <Box as='span' flex='1' fontSize='21rem'>
                  Quem atual nos seus processos?
                </Box>
                <AccordionIcon boxSize='50rem' />
              </AccordionButton>
              <AccordionPanel
                bgColor='#b2b8bd'
                pb={4}
                fontSize='16rem'
                minHeight='70rem'
                textAlign='center'
              >
                Eu, pessoalmente e um time de parceiros experientes e confiaveis
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box as='span' flex='1' fontSize='21rem'>
                  Em quanto tempo voce retorna aos clientes?
                </Box>
                <AccordionIcon boxSize='50rem' />
              </AccordionButton>
              <AccordionPanel
                bgColor='#b2b8bd'
                pb={4}
                fontSize='16rem'
                minHeight='70rem'
                textAlign='center'
              >
                Nos dias uteis, das 9h as 17h, em ate 72 horas
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box as='span' flex='1' fontSize='21rem'>
                  A quantas consultorias eu tenho direito de fazer sobre o meu
                  caso?
                </Box>
                <AccordionIcon boxSize='50rem' />
              </AccordionButton>
              <AccordionPanel
                bgColor='#b2b8bd'
                pb={4}
                fontSize='16rem'
                minHeight='70rem'
                textAlign='center'
              >
                Quatas voce precisar, dentro do assunto do seu caso.
                Consultorias de outros assuntos seraom cobradas a parte.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box as='span' flex='1' fontSize='21rem'>
                  Qual e' a importancia da etica no seu jeito de trabalhar?
                </Box>
                <AccordionIcon boxSize='50rem' />
              </AccordionButton>
              <AccordionPanel
                bgColor='#b2b8bd'
                pb={4}
                fontSize='16rem'
                minHeight='70rem'
                textAlign='center'
              >
                A importancia da etica na relacao com meus clientes e' absoluta.
                Vai estar tudo esclarefido e formalizado por meio do contrato de
                prestacao de servicos.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box as='span' flex='1' fontSize='21rem'>
                  O que voce pensa sobre sigilo profesional?
                </Box>
                <AccordionIcon boxSize='50rem' />
              </AccordionButton>
              <AccordionPanel
                bgColor='#b2b8bd'
                pb={4}
                fontSize='16rem'
                minHeight='70rem'
                textAlign='center'
              >
                A sigilo profesional tem que ser respeitado 100%. A confianca
                entre o cliente e seu advogado deve ser a pedra fundamental de
                relacao.
              </AccordionPanel>
            </AccordionItem>{' '}
            <AccordionItem>
              <AccordionButton>
                <Box as='span' flex='1' fontSize='21rem'>
                  Qual é a garantia de uma causa ter sucesso?
                </Box>
                <AccordionIcon boxSize='50rem' />
              </AccordionButton>
              <AccordionPanel
                bgColor='#b2b8bd'
                pb={4}
                fontSize='16rem'
                minHeight='70rem'
                textAlign='center'
              >
                O êxito de um caso está ligado à habilidade do advogado. No
                entanto, o advogado é geralmente obrigado a agir de forma
                diligente, mas não pode garantir a vitória. Isso significa que
                ele não pode ser responsabilizado se o caso for perdido, desde
                que tenha informado o cliente sobre os riscos e esforçado-se
                para obter sucesso no processo.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
        <Box w='700rem' h='568rem' bgColor='#003849'></Box>
      </HStack>
      <Box zIndex='2' bgColor='#5F2A2E' w='1440rem' h='21rem' />
    </Box>
  )
}
