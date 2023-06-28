import { Flex } from '@chakra-ui/react'

const Section = ({
  bg,
  bgColor,
  bgImage,
  bgPosition,
  bgRepeat,
  bgSize,
  children,
  parentProps,
  ...rest
}) => {
  return (
    <Flex
      as='section'
      direction='column'
      mx='auto'
      position='relative'
      bg={bg}
      bgColor={bgColor}
      bgImage={bgImage}
      bgPosition={bgPosition}
      bgRepeat={bgRepeat}
      bgSize={bgSize}
      {...parentProps}
    >
      <Flex mx='auto' w={{ m: '100%', d: '1200rem' }} {...rest}>
        {children}
      </Flex>
    </Flex>
  )
}

export default Section
