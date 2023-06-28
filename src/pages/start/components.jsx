import Head from 'next/head'
import { Box, Code, Heading, Icon, Text, Wrap } from '@chakra-ui/react'
import { FaLongArrowAltLeft } from 'react-icons/fa'
import RouteButton from 'components/RouteButton'
import DocButton from 'components/DocButton'
import { SiChakraui } from 'react-icons/si'

const Components = () => {
  return (
    <>
      <Head>
        <title>Folder - Components</title>
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
          Components
        </Heading>
        <Text fontWeight={300} fontSize='18rem' lineHeight='tall'>
          This folder should contain the components shared between pages and
          other components. Components must be small pieces of code, have few
          responsibilities and be named with CamelCase with first letter Capital
          <em>e.g.</em>, NewComponent. To create a new component create a new
          folder with the component´s name and create an <Code>index.jsx</Code>{' '}
          file inside, such as:
          <Code>/src/NewComponent/index.jsx</Code>. If a component starts to
          become too big, divide that into sub-components inside the same
          folder. If a component is used only by another component, it is
          considered to be a sub-component, therefore the file should be inside
          that component´s folder. When creating a new component to deal with
          forms, use Formik with Yup for validation.
        </Text>
        <Text
          fontWeight={400}
          fontSize='15rem'
          fontStyle='italic'
          lineHeight='taller'
          my='8rem'
        >
          The project should not contain any stylesheet or css files, but the{' '}
          <Code>reset.css</Code>, since it is not necessary when using Chakra
          UI.
        </Text>
        <Wrap spacing='16rem' mt='20rem'>
          <DocButton
            icon={SiChakraui}
            href='https://chakra-ui.com/guides/first-steps'
          >
            More about Chakra UI
          </DocButton>
          <DocButton href='https://formik.org/docs/overview'>
            {' '}
            More about Formik
          </DocButton>
          <DocButton href='https://github.com/jquense/yup/tree/pre-v1'>
            More about Yup
          </DocButton>
        </Wrap>
      </Box>
    </>
  )
}

export default Components
