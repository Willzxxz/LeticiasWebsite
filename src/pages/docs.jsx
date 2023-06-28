import Head from 'next/head'
import { Box, Heading, Icon, Text, Wrap } from '@chakra-ui/react'
import { SiChakraui, SiFramer, SiNextdotjs, SiReact } from 'react-icons/si'
import { FaLongArrowAltLeft } from 'react-icons/fa'
import RouteButton from 'components/RouteButton'
import DocButton from 'components/DocButton'

const Docs = () => {
  return (
    <>
      <Head>
        <title>Documentation</title>
      </Head>

      <Box
        as='section'
        position='relative'
        w='800rem'
        textAlign='center'
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
        <Heading as='h2' fontSize='40rem' lineHeight='taller' mt='20rem'>
          Useful Links
        </Heading>
        <Text fontWeight={300} fontSize='18rem' lineHeight='tall'>
          Here are some important docs and links you should check out
        </Text>
        <Wrap
          w='580rem'
          justify='center'
          spacing='15rem'
          rowGap='10rem'
          mt='40rem'
          mx='auto'
        >
          <DocButton
            icon={SiNextdotjs}
            href='https://nextjs.org/docs/getting-started'
          >
            Next
          </DocButton>
          <DocButton
            icon={SiChakraui}
            href='https://chakra-ui.com/guides/first-steps'
          >
            Chakra UI
          </DocButton>
          <DocButton href='https://formik.org/docs/overview'>Formik</DocButton>
          <DocButton href='https://github.com/jquense/yup/tree/pre-v1'>
            Yup
          </DocButton>
          <DocButton href='https://emotion.sh/docs/introduction'>
            Emotion
          </DocButton>
          <DocButton icon={SiFramer} href='https://www.framer.com/docs/'>
            Framer Motion
          </DocButton>
          <DocButton
            icon={SiReact}
            href='https://react-icons.github.io/react-icons/'
          >
            React Icons
          </DocButton>
        </Wrap>
      </Box>
    </>
  )
}

export default Docs
