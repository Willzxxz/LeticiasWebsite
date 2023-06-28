import {
  Box,
  Button,
  Center,
  HStack,
  Input,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react'
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

export default function ContactForm() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_fb33x8b',
        'template_5rppf0y',
        form.current,
        'Y8XMNrp2QhJQvELm7'
      )
      .then(
        (result) => {
          console.log(result.text)
          console.log('message sent')
          e.target.reset()
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <Box bgColor='#8B565E' w='540rem' h='full' ml='820rem' mt='-500rem'>
      <Center>
        <VStack>
          <Text mt='30rem' fontSize='36rem' color='white'>
            Contact Form
          </Text>
          <form ref={form} onSubmit={sendEmail}>
            <HStack gap='11rem' px='11rem' pt='44rem' py='16rem'>
              <Input
                placeholder='First Name'
                bg='white'
                required
                name='first'
              ></Input>
              <Input
                placeholder='Last Name'
                bg='white'
                required
                name='last'
              ></Input>
            </HStack>
            <HStack gap='11rem' px='11rem' py='16rem'>
              <Input
                placeholder='Email'
                type='email'
                bg='white'
                required
                name='user_email'
              ></Input>
              <Input
                placeholder='Phone Number'
                bg='white'
                required
                name='phone'
              ></Input>
            </HStack>
            <HStack gap='11rem' px='11rem' py='16rem'>
              <Input
                placeholder='State/country you live'
                bg='white'
                required
                name='state'
              ></Input>
              <Input placeholder='Subject' bg='white' name='subject'></Input>
            </HStack>
            <Box my='16rem' bg='white' mx='11rem' h='fit-content'>
              <Textarea
                placeholder='Your Message'
                rows='3'
                bg='white'
                required
                resize='none'
                name='message'
                size='sm'
              ></Textarea>
            </Box>
            <Center>
              <Button w='260rem' type='submit' value='Send'>
                Send
              </Button>
            </Center>
          </form>
        </VStack>
      </Center>
    </Box>
  )
}
