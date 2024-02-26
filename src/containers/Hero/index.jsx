import React from 'react'

import {
  Box,
  Center,
  HStack,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import {
  faWhatsapp,
  faInstagram,
  faFacebook,
  faLinkedin,
  faXTwitter,
  faTiktok,
  faTelegram,
} from '@fortawesome/free-brands-svg-icons'

import Link from 'next/link'

export default function index() {
  const isMobile = useBreakpointValue({ m: true, d: false })

  return (
    <Box
      h='775rem'
      bgGradient='linear-gradient(to-bl, #EBEAE8, #003849)'
      mt={{ m: '-120rem', d: '-130rem' }}
      w={{ m: '375rem', d: 'full' }}
      fontFamily='Poppins'
      zIndex={-2}
      position={'absolute'}
    >
      <Box w={{ d: '1440rem', m: '375rem' }} mx='auto'>
        <Box
          w={{ d: '745rem', m: '375rem' }}
          h='400rem'
          position='absolute'
          mt='198rem'
        >
          {isMobile ? (
            <VStack alignItems='flex-start'>
              <Box w={{ d: '326rem' }} px='20rem' h='85rem' bgColor='#5F2A2E'>
                <Text
                  position='absolute'
                  color='white'
                  fontSize='25rem'
                  fontWeight='300'
                  mt='-40rem'
                >
                  Quem sou?
                </Text>
                <Text fontSize='64rem' fontWeight='400' color='white'>
                  Leticia
                </Text>
              </Box>
              <Box w={{ d: '420rem' }} pl='20rem' h='85rem' bgColor='#8B565E'>
                <Text fontSize='64rem' fontWeight='400' color='black'>
                  Portelinha
                </Text>
                <Text
                  fontSize='20rem'
                  fontWeight='400'
                  color='white'
                  w={{ d: '550rem' }}
                >
                  Sou Advogada de Imigração, eu torno o processo de obtenção de
                  sua cidadania rápido e fácil. Com muitos anos de experiência
                  na área, elimino o estresse de planejar esse grande passo em
                  sua vida.
                </Text>
              </Box>
            </VStack>
          ) : (
            <HStack>
              <Box w={{ d: '326rem' }} h='85rem' bgColor='#5F2A2E'>
                <Text
                  position='absolute'
                  color='white'
                  ml='55rem'
                  fontSize='25rem'
                  fontWeight='300'
                  mt='-40rem'
                >
                  Quem sou?
                </Text>
                <Text
                  fontSize='64rem'
                  fontWeight='400'
                  color='white'
                  ml='55rem'
                >
                  Leticia
                </Text>
              </Box>
              <Box w={{ d: '420rem' }} h='85rem' bgColor='#8B565E'>
                <Text
                  fontSize='64rem'
                  fontWeight='400'
                  color='black'
                  ml='17rem'
                >
                  Portelinha
                </Text>
                <Text
                  fontSize='20rem'
                  fontWeight='400'
                  color='white'
                  ml='17rem'
                  w={{ d: '550rem' }}
                >
                  Sou Advogada de Imigração, eu torno o processo de obtenção de
                  sua cidadania rápido e fácil. Com muitos anos de experiência
                  na área, elimino o estresse de planejar esse grande passo em
                  sua vida.
                </Text>
              </Box>
            </HStack>
          )}
        </Box>

        {isMobile ? (
          <Box bgColor='#8B565E' h='120rem' ml={{ m: '0rem' }} fontWeight='400'>
            <VStack
              justifyContent='space-between'
              pt={{ m: '650rem' }}
              zIndex='10'
            >
              <Box h='40rem'>
                <Center color='white' fontSize='15rem'>
                  <FontAwesomeIcon icon={faEnvelope} size='xl' />
                  <Link
                    passHref
                    href='mailto:leticiaportelinha@gmail.com?subject=Cidadenia Pelo Site&body=Ola, procuro informações sobre...'
                    target='_blank'
                  >
                    <Box ml='6rem'>Leticiaportelinha@gmail.com</Box>
                  </Link>
                </Center>
              </Box>
              <Box h='40rem'>
                <Center color='white' fontSize='15rem' mt='-5rem'>
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    beatFade
                    style={{ color: '#098b30' }}
                    size='xl'
                  />
                  <Link
                    target='_blank'
                    passHref
                    href='https://wa.me/5548999320387'
                  >
                    <Box ml='6rem'>+55 (48) 9932-0387</Box>
                  </Link>
                </Center>
              </Box>
              <Box h='40rem'>
                <Center color='white' fontSize='15rem' gap='20rem'>
                  <Link
                    target='_blank'
                    passHref
                    href='https://www.instagram.com/'
                  >
                    <Box _hover={{ color: 'black' }}>
                      <FontAwesomeIcon icon={faInstagram} size='xl' />
                    </Box>
                  </Link>

                  <Link
                    target='_blank'
                    passHref
                    href='https://www.facebook.com/'
                  >
                    <Box _hover={{ color: 'black' }}>
                      <FontAwesomeIcon icon={faFacebook} size='xl' />
                    </Box>
                  </Link>

                  <Link
                    target='_blank'
                    passHref
                    href='https://www.linkedin.com/'
                  >
                    <Box _hover={{ color: 'black' }}>
                      <FontAwesomeIcon icon={faLinkedin} size='xl' />
                    </Box>
                  </Link>

                  <Link target='_blank' passHref href='https://www.x.com/'>
                    <Box _hover={{ color: 'black' }}>
                      <FontAwesomeIcon icon={faXTwitter} size='xl' />
                    </Box>
                  </Link>

                  <Link target='_blank' passHref href='https://www.tiktok.com/'>
                    <Box _hover={{ color: 'black' }}>
                      <FontAwesomeIcon icon={faTiktok} size='xl' />
                    </Box>
                  </Link>

                  <Link
                    target='_blank'
                    passHref
                    href='https://www.telegram.com/'
                  >
                    <Box _hover={{ color: 'black' }}>
                      <FontAwesomeIcon icon={faTelegram} size='xl' />
                    </Box>
                  </Link>
                </Center>
              </Box>
            </VStack>
          </Box>
        ) : (
          <Box
            bgColor='#8B565E'
            w={{ d: '291rem' }}
            h='full'
            ml='34rem'
            fontWeight='400'
          >
            <HStack
              justifyContent='space-between'
              w={{ d: 'fit-content' }}
              pt='720rem'
              zIndex='10'
            >
              <Box h='40rem'>
                <Center
                  color='white'
                  fontSize='15rem'
                  w={{ d: '290rem' }}
                  _hover={{ color: 'black' }}
                >
                  <FontAwesomeIcon icon={faEnvelope} size='xl' />
                  <Link
                    passHref
                    href='mailto:leticiaportelinha@gmail.com?subject=Cidadenia Pelo Site&body=Ola, procuro informações sobre...'
                    target='_blank'
                  >
                    <Box ml='6rem' _hover={{ color: 'black' }}>
                      Leticiaportelinha@gmail.com
                    </Box>
                  </Link>
                </Center>
              </Box>
              <Box h='40rem'>
                <Center
                  color='white'
                  fontSize='15rem'
                  w={{ d: '270rem' }}
                  mt='-2rem'
                  _hover={{ color: 'black' }}
                >
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    beatFade
                    style={{ color: '#098b30' }}
                    size='2xl'
                  />
                  <Link
                    target='_blank'
                    passHref
                    href='https://wa.me/5548999320387'
                  >
                    <Box ml='6rem'>+55 (48) 9932-0387</Box>
                  </Link>
                </Center>
              </Box>
              <Box h='40rem'>
                <Center
                  color='white'
                  fontSize='15rem'
                  w={{ d: '290rem' }}
                  gap='20rem'
                >
                  <Link
                    target='_blank'
                    passHref
                    href='https://www.instagram.com/'
                  >
                    <Box _hover={{ color: 'black' }}>
                      <FontAwesomeIcon icon={faInstagram} size='xl' />
                    </Box>
                  </Link>

                  <Link
                    target='_blank'
                    passHref
                    href='https://www.facebook.com/'
                  >
                    <Box _hover={{ color: 'black' }}>
                      <FontAwesomeIcon icon={faFacebook} size='xl' />
                    </Box>
                  </Link>

                  <Link
                    target='_blank'
                    passHref
                    href='https://www.linkedin.com/'
                  >
                    <Box _hover={{ color: 'black' }}>
                      <FontAwesomeIcon icon={faLinkedin} size='xl' />
                    </Box>
                  </Link>

                  <Link target='_blank' passHref href='https://www.x.com/'>
                    <Box _hover={{ color: 'black' }}>
                      <FontAwesomeIcon icon={faXTwitter} size='xl' />
                    </Box>
                  </Link>

                  <Link target='_blank' passHref href='https://www.tiktok.com/'>
                    <Box _hover={{ color: 'black' }}>
                      <FontAwesomeIcon icon={faTiktok} size='xl' />
                    </Box>
                  </Link>

                  <Link
                    target='_blank'
                    passHref
                    href='https://www.telegram.com/'
                  >
                    <Box _hover={{ color: 'black' }}>
                      <FontAwesomeIcon icon={faTelegram} size='xl' />
                    </Box>
                  </Link>
                </Center>
              </Box>
            </HStack>
          </Box>
        )}
      </Box>
      <Box
        mb='0rem'
        position='absolute'
        zIndex='2'
        bgColor='#470800'
        w={{ d: 'full', m: '375rem' }}
        mt={{ d: '0rem', m: '650rem' }}
        h='25rem'
      />
    </Box>
  )
}
