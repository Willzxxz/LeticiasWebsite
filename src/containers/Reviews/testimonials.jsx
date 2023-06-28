import React, { Component } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import { Box, Center, HStack, Image, Text } from '@chakra-ui/react'

const CustomIndicator = ({ onClick, isSelected }) => {
  const indicatorStyle = {
    width: '20rem',
    height: '20rem',
    borderRadius: '50%',
    background: isSelected ? 'White' : 'gray',
    // margin: '0 50rem',
    cursor: 'pointer',
  }

  return (
    <Center h='250rem' pt='200rem'>
      {/* <Box style={indicatorStyle} onClick={onClick}></Box> */}
    </Center>
  )
}

export default class Testimonials extends Component {
  render() {
    return (
      <Box width='1200rem' height='400rem' fontFamily='Montserrat'>
        <Carousel
          showArrows={false}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={1000}
          renderIndicator={(clickHandler, isSelected, index) => (
            <CustomIndicator
              key={index}
              onClick={clickHandler}
              isSelected={isSelected}
            />
          )}
        >
          <Box color='white'>
            <HStack w='1000rem'>
              <HStack>
                <HStack mr='100rem'>
                  <Image
                    h='150rem'
                    w='150rem'
                    borderRadius='full'
                    src='../images/profilepics/1.jpg'
                    mt='-100rem'
                  />
                  <Box pl='20rem' h='250rem' textAlign='left'>
                    <Text fontSize='32rem' fontWeight='700'>
                      Carlos
                    </Text>
                    <Text fontSize='14rem' w='400rem'>
                      Et modi laborum ut expedita blanditiis id esse
                      reprehenderit aut excepturi Quis et unde omnis in fugiat
                      corrupti. Sed voluptatem consectetur vel ipsam nisi ad
                      veritatis.
                    </Text>
                  </Box>
                </HStack>
                <HStack pl='100rem'>
                  <Image
                    h='150rem'
                    w='150rem'
                    borderRadius='full'
                    src='../images/profilepics/4.jpg'
                    mt='-100rem'
                  />
                  <Box pl='20rem' h='250rem' textAlign='left'>
                    <Text fontSize='32rem' fontWeight='700'>
                      Joao
                    </Text>
                    <Text fontSize='14rem' w='400rem'>
                      Et modi laborum ut expedita blanditiis id esse
                      reprehenderit aut excepturi Quis et unde omnis in fugiat
                      corrupti. Sed voluptatem consectetur vel ipsam nisi ad
                      veritatis.
                    </Text>
                  </Box>
                </HStack>
              </HStack>
            </HStack>
          </Box>
        </Carousel>
      </Box>
    )
  }
}
