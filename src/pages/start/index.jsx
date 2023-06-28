import Head from 'next/head'
import NextLink from 'next/link'
import { Box, Code, Heading, Icon, Stack, Text } from '@chakra-ui/react'

import RouteButton from 'components/RouteButton'
import { FaLongArrowAltLeft } from 'react-icons/fa'

const Start = () => {
  return (
    <>
      <Head>
        <title>Get Started</title>
      </Head>
      <Box
        as='section'
        position='relative'
        w='800rem'
        textAlign='justify'
        m='120rem auto'
      >
        <RouteButton
          display='flex'
          iconSpacing='8rem'
          leftIcon={<Icon as={FaLongArrowAltLeft} boxSize='22.5rem' />}
          href='/'
          position='absolute'
          top='-50rem'
          left='0'
          variant='unstyled'
          _hover={{
            color: 'blue.500',
          }}
        >
          Back
        </RouteButton>
        <Heading
          as='h2'
          fontSize='40rem'
          lineHeight='taller'
          textAlign='center'
          mt='20rem'
        >
          Get Started
        </Heading>
        <Text fontWeight={300} fontSize='18rem' lineHeight='tall'>
          For every project we use some libs as default to help in a more quick
          development, to check out all libs go to{' '}
          <NextLink href='/docs' passHref>
            <Code borderRadius='4px' cursor='pointer' p='2.5rem'>
              /docs
            </Code>
          </NextLink>
        </Text>
        <Text fontWeight={300} fontSize='18rem' lineHeight='tall'>
          The pattern for all projects is to use rem in an auto adaptive
          media-query for mobile and desktop screens. The media queries for this
          is in the <Code>/src/reset.css</Code> file, which should not be
          altered or used for other purposes. As well as other config files,
          that should not be altered in any way are:{' '}
          <Code>src/theme/defaults.js</Code> and <Code>.prettierrc.js</Code>
        </Text>

        <Text
          fontWeight={600}
          fontSize='25rem'
          lineHeight='tall'
          textAlign='center'
          mt='50rem'
        >
          Default folders
        </Text>
        <Stack textAlign='left' spacing='8rem' mt='20rem' maxW='75%' mx='auto'>
          <RouteButton href='/start/assets'>assets</RouteButton>
          <RouteButton href='/start/components'>components</RouteButton>
          <RouteButton href='/start/icons'>icons</RouteButton>
          <RouteButton href='/start/pages'>pages</RouteButton>
          <RouteButton href='/start/theme'>theme</RouteButton>
        </Stack>
      </Box>
    </>
  )
}

export default Start
