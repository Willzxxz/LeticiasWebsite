import Head from 'next/head'
import { Box, Code, Heading, Icon, Text } from '@chakra-ui/react'
import { FaLongArrowAltLeft } from 'react-icons/fa'
import { SiNextdotjs } from 'react-icons/si'
import RouteButton from 'components/RouteButton'
import DocButton from 'components/DocButton'

const Pages = () => {
  return (
    <>
      <Head>
        <title>Folder - Pages</title>
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
          href='/start'
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
          Pages
        </Heading>
        <Text fontWeight={300} fontSize='18rem' lineHeight='tall'>
          This folder should contain the pages of the website. As you create new
          files the routes and configs are managed automatically by the Next
          lib. Names for new pages should be always lowercase.
          <br />
          Files on the <Code>src/pages/api</Code> subfolder are treated
          differently since it resolves as request routes for the server. Try
          hitting this route{' '}
          <RouteButton
            display='inline'
            fontWeight={400}
            fontSize='16rem'
            href='/api/hello'
            size='xs'
          >
            /api/hello
          </RouteButton>
        </Text>
        <DocButton
          icon={SiNextdotjs}
          href='https://nextjs.org/docs/getting-started'
          mt='20rem'
        >
          More about Next
        </DocButton>
      </Box>
    </>
  )
}

export default Pages
