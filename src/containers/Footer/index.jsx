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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
  faWhatsapp,
  faInstagram,
  faFacebook,
  faLinkedin,
  faXTwitter,
  faTiktok,
  faTelegram,
} from '@fortawesome/free-brands-svg-icons'
import ContactForm from 'components/ContectForm'
import Link from 'next/link'
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
            <Box w='150rem' fontSize='15rem' as='b'>
              <Text>Serviços</Text>
            </Box>
            <Box w='150rem' fontSize='15rem' pt='24rem'>
              <Text>Cidadania</Text>
            </Box>
            <Box w='150rem' fontSize='15rem' pt='16rem'>
              <Text>Registro Civil</Text>
            </Box>
            <Box w='150rem' fontSize='15rem' pt='16rem'>
              <Text>Assessoria Juridica</Text>
            </Box>
            <Box w='150rem' fontSize='15rem' pt='16rem'>
              <Text>Consultoria</Text>
            </Box>
          </VStack>
          <VStack h='250rem' pl='40rem'>
            <Box w='220rem' fontSize='15rem' as='b'>
              Links Importantes
            </Box>
            <Box w='220rem' fontSize='15rem' pt='24rem'>
              <Link passHref href='https://european-union.europa.eu/index_pt'>
                <a target='_blank'>
                  <Text _hover={{ textDecoration: 'underline' }}>
                    Site Oficial da Uniao Europeia
                  </Text>
                </a>
              </Link>
            </Box>
            <Box w='220rem' fontSize='15rem' pt='16rem'>
              <Link passHref href='https://ambbrasilia.esteri.it/pt/'>
                <a target='_blank'>
                  <Text _hover={{ textDecoration: 'underline' }}>
                    Embaixada Italia
                  </Text>
                </a>
              </Link>
            </Box>
            <Box w='220rem' fontSize='15rem' pt='16rem'>
              <Link
                passHref
                href='https://brasilia.embaixadaportugal.mne.gov.pt/pt/'
              >
                <a target='_blank'>
                  <Text _hover={{ textDecoration: 'underline' }}>
                    Embaixada Portugues
                  </Text>
                </a>
              </Link>
            </Box>
            <Box w='220rem' fontSize='15rem' pt='16rem'>
              <Link passHref href='https://brasil.diplo.de/br-pt'>
                <a target='_blank'>
                  <Text _hover={{ textDecoration: 'underline' }}>
                    Embaixada Alemão
                  </Text>
                </a>
              </Link>
            </Box>
          </VStack>
          <VStack h='250rem' pl='10rem'>
            <Box w='270rem' pl='10rem' fontSize='15rem' as='b'>
              Contato
            </Box>

            <HStack
              pt='24rem'
              color='white'
              fontSize='15rem'
              w='280rem'
              pl='10rem'
              _hover={{ textDecoration: 'underline' }}
            >
              <FontAwesomeIcon
                icon={faWhatsapp}
                style={{ color: '#098b30' }}
                size='lg'
              />
              <Link passHref href='https://wa.me/5548999320387'>
                <a target='_blank'>
                  <Box ml='6rem'>+55 (48) 9932-0387</Box>
                </a>
              </Link>
            </HStack>

            <HStack
              color='white'
              fontSize='15rem'
              pl='10rem'
              pt='14rem'
              w='280rem'
              _hover={{ textDecoration: 'underline' }}
            >
              <FontAwesomeIcon icon={faEnvelope} size='md' />
              <Link
                passHref
                href='mailto:leticiaportelinha@gmail.com?subject=Cidadenia Pelo Site&body=Ola, procuro informações sobre...'
              >
                <a target='_blank'>
                  <Box ml='6rem'>Leticiaportelinha@gmail.com</Box>
                </a>
              </Link>
            </HStack>

            <Box pl='10rem' fontSize='15rem' w='280rem' pt='16rem'>
              Segunda-Sexta 9hs ate 17hs
            </Box>
          </VStack>
        </HStack>
      </Box>
      <HStack position='absolute' mt='117rem'>
        <Box w='67rem' h='51rem' bgColor='#8B565E'></Box>
        <Box w='170rem' h='51rem' bgColor='#5F2A2E'></Box>
        <Box w='550rem' h='51rem' bgColor='#8B565E'></Box>
      </HStack>
      <Box
        bgColor='#8B565E'
        w='170rem'
        h='full'
        ml='67rem'
        mb='-15rem'
        fontWeight='400'
      >
        <Center pt='15rem'>
          <Image
            src='../images/LPwhite.png'
            pointerEvents='none'
            userSelect='none'
            draggable='false'
          />
        </Center>
      </Box>
      <ContactForm />

      <Box bgColor='#653034' w='1440rem' h='95rem' mt='-20rem'>
        <Divider />
        <HStack justifyContent='space-between' h='full'>
          <Text
            ml='65rem'
            fontFamily='Montserrat'
            color='white'
            fontSize='18rem'
          >
            © Leticia Portelinha. 2023. OAB/SC 55.417
          </Text>

          <Center
            color='white'
            fontSize='15rem'
            w='290rem'
            gap='20rem'
            pr='65rem'
          >
            <Link passHref href='https://www.instagram.com/'>
              <a target='_blank'>
                <Box _hover={{ color: 'black' }}>
                  <FontAwesomeIcon icon={faInstagram} size='xl' />
                </Box>
              </a>
            </Link>

            <Link passHref href='https://www.facebook.com/'>
              <a target='_blank'>
                <Box _hover={{ color: 'black' }}>
                  <FontAwesomeIcon icon={faFacebook} size='xl' />
                </Box>{' '}
              </a>
            </Link>

            <Link passHref href='https://www.linkedin.com/'>
              <a target='_blank'>
                <Box _hover={{ color: 'black' }}>
                  <FontAwesomeIcon icon={faLinkedin} size='xl' />
                </Box>{' '}
              </a>
            </Link>

            <Link passHref href='https://www.x.com/'>
              <a target='_blank'>
                <Box _hover={{ color: 'black' }}>
                  <FontAwesomeIcon icon={faXTwitter} size='xl' />
                </Box>{' '}
              </a>
            </Link>

            <Link passHref href='https://www.tiktok.com/'>
              <a target='_blank'>
                <Box _hover={{ color: 'black' }}>
                  <FontAwesomeIcon icon={faTiktok} size='xl' />
                </Box>{' '}
              </a>
            </Link>

            <Link passHref href='https://www.telegram.com/'>
              <a target='_blank'>
                <Box _hover={{ color: 'black' }}>
                  <FontAwesomeIcon icon={faTelegram} size='xl' />
                </Box>{' '}
              </a>
            </Link>
          </Center>
        </HStack>
      </Box>
    </Box>
  )
}
