import Head from 'next/head'
import { Box, Code, Heading, Icon, Text, Wrap } from '@chakra-ui/react'
import { FaLongArrowAltLeft } from 'react-icons/fa'
import RouteButton from 'components/RouteButton'
import DocButton from 'components/DocButton'
import { SiChakraui, SiFramer } from 'react-icons/si'

const Theme = () => {
  return (
    <>
      <Head>
        <title>Folder - Theme</title>
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
          Theme
        </Heading>
        <Text fontWeight={300} fontSize='18rem' lineHeight='tall'>
          This folder should contain the config files for customizing all
          generic styles for the project. Before you start editing read more
          about Chakra UI on how it works and how to customize styles. For
          editing global styles update the styles inside the file{' '}
          <Code>/src/theme/globals.js</Code>. If this file becomes too big
          create a new folder called <em>globals</em> and divide the file into
          smaller ones. When customizing styles for Chakra components create a
          new folder called <em>components</em> and for each component you want
          to customize create a new file named with the components name. It is
          recommended that, you create text styles for your project so you can
          easily create and set the styles for titles, paragraphs and other
          kinds of texts. For animations you may create an <em>animations</em>{' '}
          folder if needed be. Chakra uses Framer Motion for creating
          transitions, animations and other effects, for any other technical
          questions please consult Chakra and Framer docs.
        </Text>
        <Wrap spacing='16rem' mt='20rem'>
          <DocButton
            icon={SiChakraui}
            href='https://chakra-ui.com/guides/first-steps'
          >
            More about Chakra UI
          </DocButton>
          <DocButton icon={SiFramer} href='https://www.framer.com/docs/'>
            More about Framer
          </DocButton>
        </Wrap>
      </Box>
    </>
  )
}

export default Theme
