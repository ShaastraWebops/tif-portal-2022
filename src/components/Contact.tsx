import {
  Box,
  Center,
  Container,
  Flex,
  Grid,
  SimpleGrid,
  VStack,
  Heading,
  Button,
  Text,
} from '@chakra-ui/react'
import React from 'react'
import '../styles/Contact.css'

function Contact() {
  return (
    <React.Fragment>
      <Box height='300px' alignItems='center' className='contact'>
        <Heading textColor='white' marginTop={5}>
          Contact Us
        </Heading>
      </Box>
    </React.Fragment>
  )
}

export default Contact
