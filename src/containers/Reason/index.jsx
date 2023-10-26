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
  useBreakpointValue,
} from '@chakra-ui/react'
import React from 'react'

export default function Reason() {
  const isMobile = useBreakpointValue({ m: true, d: false })

  return (
    <Box
      h={{ d: 'full' }}
      bgColor='#003849'
      fontFamily='Poppins'
      w={{ m: '375rem', d: 'full' }}
      id='pq'
    >
      <Box w={{ d: '1440rem', m: '375rem' }} mx='auto'>
        <Box
          h={{ d: '193rem', m: '100rem' }}
          zIndex='0'
          bgGradient={{
            d: 'linear-gradient(to-r, #5F2A2E 85%, #8B565E 100%)',
            m: 'linear-gradient(to-r, #5F2A2E 50%, #8B565E 100%)',
          }}
          borderRadius={{ d: '100rem' }}
          w={{ d: '3100rem', m: '' }}
          ml={{ d: '-2300rem', m: '' }}
        >
          <Box pl={{ d: '2250rem' }}>
            <Center h={{ d: '193rem', m: '100rem' }}>
              <Text fontSize={{ d: '48rem', m: '25rem' }} color='white'>
                Motivos para me contratar
              </Text>
            </Center>
          </Box>
        </Box>
        <HStack>
          <Box w={{ d: '718rem', m: 'full' }} bgColor='#C6CDD2'>
            <Accordion fontSize='20rem' defaultIndex={[0]}>
              <AccordionItem>
                <AccordionButton>
                  <Box as='span' flex='1' fontSize={{ d: '21rem', m: '16rem' }}>
                    Quem atual nos seus processos?
                  </Box>
                  <AccordionIcon boxSize={{ d: '50rem', m: '30rem' }} />
                </AccordionButton>
                <AccordionPanel
                  bgColor='#b2b8bd'
                  pb={4}
                  fontSize='14rem'
                  minHeight='70rem'
                  textAlign='center'
                >
                  Eu, pessoalmente e um time de parceiros experientes e
                  confiaveis
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton>
                  <Box as='span' flex='1' fontSize={{ d: '21rem', m: '16rem' }}>
                    Em quanto tempo voce retorna aos clientes?
                  </Box>
                  <AccordionIcon boxSize={{ d: '50rem', m: '30rem' }} />
                </AccordionButton>
                <AccordionPanel
                  bgColor='#b2b8bd'
                  pb={4}
                  fontSize='14rem'
                  minHeight='70rem'
                  textAlign='center'
                >
                  Nos dias uteis, das 9h as 17h, em ate 72 horas
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton>
                  <Box as='span' flex='1' fontSize={{ d: '21rem', m: '16rem' }}>
                    A quantas consultorias eu tenho direito de fazer sobre o meu
                    caso?
                  </Box>
                  <AccordionIcon boxSize={{ d: '50rem', m: '30rem' }} />
                </AccordionButton>
                <AccordionPanel
                  bgColor='#b2b8bd'
                  pb={4}
                  fontSize='14rem'
                  minHeight='70rem'
                  textAlign='center'
                >
                  Quatas voce precisar, dentro do assunto do seu caso.
                  Consultorias de outros assuntos seraom cobradas a parte.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton>
                  <Box as='span' flex='1' fontSize={{ d: '21rem', m: '16rem' }}>
                    Qual e' a importancia da etica no seu jeito de trabalhar?
                  </Box>
                  <AccordionIcon boxSize={{ d: '50rem', m: '30rem' }} />
                </AccordionButton>
                <AccordionPanel
                  bgColor='#b2b8bd'
                  pb={4}
                  fontSize='14rem'
                  minHeight='70rem'
                  textAlign='center'
                >
                  A importancia da etica na relacao com meus clientes e'
                  absoluta. Vai estar tudo esclarefido e formalizado por meio do
                  contrato de prestacao de servicos.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton>
                  <Box as='span' flex='1' fontSize={{ d: '21rem', m: '16rem' }}>
                    O que voce pensa sobre sigilo profesional?
                  </Box>
                  <AccordionIcon boxSize={{ d: '50rem', m: '30rem' }} />
                </AccordionButton>
                <AccordionPanel
                  bgColor='#b2b8bd'
                  pb={4}
                  fontSize='14rem'
                  minHeight='70rem'
                  textAlign='center'
                >
                  A sigilo profesional tem que ser respeitado 100%. A confianca
                  entre o cliente e seu advogado deve ser a pedra fundamental de
                  relacao.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton>
                  <Box as='span' flex='1' fontSize={{ d: '21rem', m: '16rem' }}>
                    Qual é a garantia de uma causa ter sucesso?
                  </Box>
                  <AccordionIcon boxSize={{ d: '50rem', m: '30rem' }} />
                </AccordionButton>
                <AccordionPanel
                  bgColor='#b2b8bd'
                  pb={4}
                  fontSize='14rem'
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
          {/* <Box
            w={{ d: '700rem', m: '375rem' }}
            h='568rem'
            bgColor='#003849'
          ></Box> */}
        </HStack>
      </Box>
      {isMobile && (
        <Box zIndex='2' bgColor='#5F2A2E' w='full' h='21rem' mt='20rem' />
      )}
    </Box>
  )
}
