import Head from 'next/head'
import { Box, Heading, Icon, Text, Wrap } from '@chakra-ui/react'
import { FaLongArrowAltLeft } from 'react-icons/fa'
import RouteButton from 'components/RouteButton'
import DocButton from 'components/DocButton'
import { SiChakraui, SiReact } from 'react-icons/si'
import CircleIcon from 'icons/CircleIcon'

const Icons = () => {
  return (
    <>
      <Head>
        <title>Folder - Icons</title>
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
          Icons
        </Heading>
        <Text fontWeight={300} fontSize='18rem' lineHeight='tall'>
          This folder may not be needed in some projects since it contains only
          custom icons that do not exists in React Icons and can not be used as
          pure images. Each icon should have it´s own component file, please
          name the component accordingly. For any other case, use react-icons or
          images as svg or png files, respecting this priority order.
        </Text>
        <Text fontWeight={300} fontSize='18rem' lineHeight='taller'>
          Example:{' '}
          <CircleIcon
            transition='all 0.2s linear'
            _hover={{
              color: 'white',
              border: '1.5px solid red',
              borderRadius: '100px',
            }}
            color='red'
          />
        </Text>
        <Wrap spacing='16rem' mt='20rem'>
          <DocButton
            icon={SiChakraui}
            href='https://chakra-ui.com/guides/first-steps'
          >
            More about Chakra UI
          </DocButton>
          <DocButton
            icon={SiReact}
            href='https://react-icons.github.io/react-icons/'
          >
            Search for React Icons
          </DocButton>
        </Wrap>
      </Box>
    </>
  )
}

export default Icons
