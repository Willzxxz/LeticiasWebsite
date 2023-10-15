import React from 'react'

import { Box, Center, HStack, Text } from '@chakra-ui/react'
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
import Link from 'next/link'

export default function index() {
  return (
    <Box
      h='775rem'
      bgGradient='linear-gradient(to-bl, #EBEAE8, #003849)'
      mt='-115rem'
      fontFamily='Poppins'
    >
      <Box mt='99rem' position='absolute' w='1440rem'>
        <Box border='1px solid black' w='1350rem' mx='auto' />
      </Box>
      <Box w='745rem' h='85rem' position='absolute' mt='198rem'>
        <HStack>
          <Box w='326rem' h='85rem' bgColor='#5F2A2E'>
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
            <Text fontSize='64rem' fontWeight='400' color='white' ml='55rem'>
              Leticia
            </Text>
          </Box>
          <Box w='420rem' h='85rem' bgColor='#8B565E'>
            <Text fontSize='64rem' fontWeight='400' color='black' ml='17rem'>
              Portelinha
            </Text>
            <Text
              fontSize='20rem'
              fontWeight='400'
              color='white'
              ml='17rem'
              w='550rem'
            >
              Sou Advogada de Imigração, eu torno o processo de obtenção de sua
              cidadania rápido e fácil. Com muitos anos de experiência na área,
              elimino o estresse de planejar esse grande passo em sua vida.
            </Text>
          </Box>
        </HStack>
      </Box>
      <Box bgColor='#8B565E' w='291rem' h='full' ml='34rem' fontWeight='400'>
        <HStack
          justifyContent='space-between'
          w='fit-content'
          pt='730rem'
          zIndex='10'
        >
          <Center
            color='white'
            fontSize='15rem'
            w='290rem'
            _hover={{ color: 'black' }}
          >
            <FontAwesomeIcon icon={faEnvelope} size='xl' />
            <Link
              passHref
              href='mailto:leticiaportelinha@gmail.com?subject=Cidadenia Pelo Site&body=Ola, procuro informações sobre...'
            >
              <a target='_blank'>
                <Box ml='6rem' _hover={{ color: 'black' }}>
                  Leticiaportelinha@gmail.com
                </Box>
              </a>
            </Link>
          </Center>
          <Center
            color='white'
            fontSize='15rem'
            w='290rem'
            _hover={{ color: 'black' }}
          >
            <FontAwesomeIcon
              icon={faWhatsapp}
              beatFade
              style={{ color: '#098b30' }}
              size='2xl'
            />
            <Link passHref href='https://wa.me/5548999320387'>
              <a target='_blank'>
                <Box ml='6rem'>+55 (48) 9932-0387</Box>
              </a>
            </Link>
          </Center>

          <Center color='white' fontSize='15rem' w='290rem' gap='20rem'>
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
      <Box
        mb='0rem'
        position='absolute'
        zIndex='2'
        bgColor='#470800'
        w='1440rem'
        h='25rem'
      />
    </Box>
  )
}
