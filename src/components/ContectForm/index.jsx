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
            Formulario de Contato
          </Text>
          <form ref={form} onSubmit={sendEmail}>
            <HStack gap='11rem' px='11rem' pt='44rem' py='16rem' color='white'>
              <Input
                placeholder='Nome'
                borderBottom='1rem solid'
                border=''
                required
                name='first'
              ></Input>
              <Input
                placeholder='Sobre Nome'
                required
                name='last'
                borderBottom='1rem solid'
                border=''
              ></Input>
            </HStack>
            <HStack gap='11rem' px='11rem' py='16rem' color='white'>
              <Input
                placeholder='Email'
                type='email'
                borderBottom='1rem solid'
                border=''
                required
                name='user_email'
              ></Input>
              <Input
                placeholder='Numero de telephone'
                borderBottom='1rem solid'
                border=''
                required
                name='phone'
              ></Input>
            </HStack>
            <HStack gap='11rem' px='11rem' py='16rem' color='white'>
              <Input
                placeholder='Estado/Pais'
                borderBottom='1rem solid'
                border=''
                required
                name='state'
              ></Input>
              <Input
                placeholder='Assunto'
                borderBottom='1rem solid'
                border=''
                name='subject'
              ></Input>
            </HStack>
            <Box
              my='16rem'
              borderBottom='1rem solid'
              border=''
              mx='11rem'
              h='fit-content'
              color='white'
            >
              <Textarea
                placeholder='Sua Mensagem'
                rows='3'
                border=''
                required
                resize='none'
                name='message'
                size='sm'
              ></Textarea>
            </Box>
            <Center>
              <Button w='260rem' type='submit' value='Send'>
                Enviar
              </Button>
            </Center>
          </form>
        </VStack>
      </Center>
    </Box>
  )
}
