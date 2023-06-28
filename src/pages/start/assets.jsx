import Head from 'next/head'
import { Box, Code, Heading, Icon, Text, Wrap } from '@chakra-ui/react'
import { FaLongArrowAltLeft } from 'react-icons/fa'
import RouteButton from 'components/RouteButton'
import DocButton from 'components/DocButton'
import { SiChakraui, SiReact } from 'react-icons/si'

const Assets = () => {
  return (
    <>
      <Head>
        <title>Folder - Assets</title>
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
          Assets
        </Heading>
        <Text fontWeight={300} fontSize='18rem' lineHeight='tall'>
          This folder should contain all the assets used in the project, every
          file of image, video, data or of any other kind should be in here. The
          files may be separated by type, section of which they belong,
          extension or any other logic you think is appropriate (<em>e.g.</em>,
          images, videos, svg, json, <em>etc</em>.). You should avoid duplicates
          of assets and use react icons whenever possible rather than using
          images of icons. For custom logos and icons use <em>.svg</em> rather
          than <em>.png</em>. When using images or videos you can either pass
          the path as string <em>e.g.</em>{' '}
          <Code>{"<Img alt='bg' src='/assets/images/bg.png' />"}</Code> or
          import the file and pass the <em>src</em> prop of the object{' '}
          <em>e.g.</em>{' '}
          <Code>
            {"import logo from '@images/logo.svg'\n"}
            {"<Img alt='logo' src={logo.src}/>"}
          </Code>
        </Text>
      </Box>
    </>
  )
}

export default Assets
