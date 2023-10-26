// 'use client'
import { Box, Button, HStack, Image, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'

import {
  Flex,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'

const NAV_ITEMS = [
  {
    label: 'Lugares',
    href: '#operateSection',
  },
  {
    label: 'Serviços',
    href: '#servicos',
  },
  {
    label: 'Porque Eu?',
    href: '#pq',
  },
  {
    label: 'Depoimentos',
    href: '#depoimentos',
  },
]

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure()
  const isMobile = useBreakpointValue({ m: true, d: false })

  const mobileMenuRef = useRef()

  const closeMobileMenu = () => {
    if (isOpen) {
      onToggle()
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'auto'
    }

    return () => {
      document.body.style.overflowY = 'auto' // Ensure removal when unmounting
    }
  }, [isOpen])

  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
        closeMobileMenu()
      }
    }

    document.addEventListener('click', handleDocumentClick)

    return () => {
      document.removeEventListener('click', handleDocumentClick)
    }
  }, [isOpen])

  return (
    <Box w={{ d: '1440rem', m: '375rem' }} mx='auto' ref={mobileMenuRef}>
      <Flex
        // bg={useColorModeValue('#8B565E', 'gray.800')}
        color={useColorModeValue('black', 'white')}
        minH={'60rem'}
        py={{ m: 2 }}
        px={{ m: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('black', 'gray.900')}
        align={'center'}
      >
        <Flex
          flex={{ m: 1, d: 'auto' }}
          ml={{ m: -2 }}
          display={{ m: 'flex', d: 'none' }}
          position='absolute'
        >
          <IconButton
            onClick={onToggle}
            color='black'
            icon={
              isOpen ? (
                <FontAwesomeIcon icon={faX} />
              ) : (
                <FontAwesomeIcon icon={faBars} />
              )
            }
            variant={'unstyled'}
          />
        </Flex>
        <Flex flex={{ m: 1 }} justify={{ m: 'center', d: 'start' }} ml='35rem'>
          <Link passHref href='/'>
            <a>
              <Image
                w={{ d: '157rem', m: '100rem' }}
                mt='6rem'
                pointerEvents='none'
                userSelect='none'
                draggable='false'
                src='../images/LPblack1.png'
              />
            </a>
          </Link>

          <Flex display={{ m: 'none', d: 'flex' }} ml='100rem  '>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          // flex={{ m: 1, d: 0 }}
          justify={'flex-end'}
          direction={'row'}
          // spacing={6}
        >
          <Link passHref href='https://wa.me/5548999320387'>
            <a target='_blank'>
              {!isMobile && (
                <Button
                  fontSize='24rem'
                  rounded='40rem'
                  bgColor='#8B565E'
                  color='white'
                  h='50rem'
                  mr='40rem'
                  _hover={{
                    bg: '#5F2A2E',
                    transform: 'scale(1.05)',
                  }}
                >
                  Consulte Agora
                </Button>
              )}
            </a>
          </Link>
        </Stack>
      </Flex>

      <Collapse in={isOpen}>
        <MobileNav />
      </Collapse>
    </Box>
  )
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('black', 'gray.200')
  const linkHoverColor = useColorModeValue('gray.800', 'white')
  const popoverContentBgColor = useColorModeValue('white', 'gray.800')

  return (
    <HStack
      px='20rem'
      fontSize='20rem'
      gap='20rem'
      fontFamily='Poppins'
      fontWeight='400'
      w='850rem'
      justifyContent='space-between'
    >
      <Link
        passHref
        href='https://servicos.oab-sc.org.br/hbconselhos/pgs/ConsultaMembroConselho.aspx'
      >
        <a target='_blank'>
          <Text
            color='black'
            ml='10rem'
            fontSize='20rem'
            _hover={{ textDecoration: 'underline' }}
          >
            OAB/SC 55.417
          </Text>
        </a>
      </Link>

      <Stack direction={'row'} spacing='-20rem' w='520rem'>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Box
                  as='a'
                  m='20rem'
                  href={navItem.href ?? '#'}
                  fontWeight={300}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'underline',
                    color: linkHoverColor,
                  }}
                >
                  {navItem.label}
                </Box>
              </PopoverTrigger>
            </Popover>
          </Box>
        ))}
      </Stack>
    </HStack>
  )
}

const MobileNav = () => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.800')}
      position='absolute' // Add this line
      left='0'
      zIndex='2'
    >
      <Stack
        p='20rem'
        h='430rem'
        w='375rem'
        pt='-92rem'
        display={{ d: 'none' }}
        spacing='35rem'
        borderBottom='solid black 2rem'
      >
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
        <Link passHref href='https://wa.me/5548999320387'>
          <a target='_blank'>
            <Button
              fontSize='24rem'
              rounded='40rem'
              bgColor='#8B565E'
              color='white'
              h='50rem'
              w='220rem'
              _hover={{
                bg: '#5F2A2E',
                transform: 'scale(1.05)',
              }}
            >
              Consulte Agora
            </Button>
          </a>
        </Link>
      </Stack>
    </Box>
  )
}

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as='a'
        href={href ?? '#'}
        justifyContent='space-between'
        alignItems='center'
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text
          fontWeight={600}
          fontSize={'20rem'}
          color={useColorModeValue('black', 'gray.200')}
        >
          {label}
        </Text>
      </Box>

      {/* <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}
          >
            {children &&
              children.map((child) => (
                <Box as='a' key={child.label} py={2} href={child.href}>
                  {child.label}
                </Box>
              ))}
          </Stack>
        </Collapse> */}
    </Stack>
  )
}
