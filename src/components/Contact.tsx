import {
  Box,
  Center,
  Container,
  Flex,
  SimpleGrid,
  Input,
  Stack,
  Heading,
  Button,
  Text,
  Icon,
  Textarea,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { HiMail, HiPhone } from 'react-icons/hi'
import { FaFacebook, FaInstagram, FaLink, FaLinkedin } from 'react-icons/fa'
import '../styles/Contact.css'

function Contact() {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [subject, setsubject] = useState('')
  const [message, setmessage] = useState('')

  function submitForm() {
    window.open(
      `mailto:${'webops@shaastra.org'}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(name)} (${encodeURIComponent(
        email
      )}): ${encodeURIComponent(message)}`
    )
  }

  return (
    <React.Fragment>
      <Flex
        alignItems='center'
        className='contact'
        height="100vh"
        justifyContent="center"
        width='100%'
        flexDirection='column'
      >
        <Heading textColor='white' marginTop={5} marginBottom={3}>
          Contact Us
        </Heading>
        <Center>
          <SimpleGrid
            m={2}
            p={2}
            alignItems='center'
            textAlign='center'
            columns={[1, 1, 2]}
            spacing={20}
            width='100%'
          >
            <Box backgroundColor='white'>
              <Text color='black' fontSize='m' marginTop={2} marginBottom={5}>
                If you have any query, feel free to reach out to us
              </Text>
              <form onSubmit={submitForm}>
                <Stack spacing={8} m={3} marginBottom={5}>
                  <Input
                    variant='flushed'
                    placeholder='Name'
                    _placeholder={{ color: 'gray.500' }}
                    color='black'
                    type='text'
                    id='name'
                    name='name'
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                    borderBottomColor='black'
                  />
                  <Input
                    variant='flushed'
                    placeholder='Email'
                    _placeholder={{ color: 'gray.500' }}
                    color='black'
                    type='email'
                    id='email'
                    name='email'
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    borderBottomColor='black'
                  />
                  <Input
                    variant='flushed'
                    placeholder='Subject'
                    _placeholder={{ color: 'gray.500' }}
                    color='black'
                    type='text'
                    id='subject'
                    name='subject'
                    value={subject}
                    onChange={(e) => setsubject(e.target.value)}
                    borderBottomColor='black'
                  />
                  <Textarea
                    variant='flushed'
                    placeholder='Message'
                    _placeholder={{ color: 'gray.500' }}
                    color='black'
                    type='text'
                    id='message'
                    name='message'
                    value={message}
                    onChange={(e) => setmessage(e.target.value)}
                    borderBottomColor='black'
                  />
                </Stack>
                <Button
                  color='black'
                  backgroundColor='#ff7e20'
                  marginTop={3}
                  marginBottom={5}
                  className='submit-btn'
                  onClick={submitForm}
                  type='submit'
                >
                  Submit
                </Button>
              </form>
            </Box>
            <Box marginLeft={20} marginRight={20}>
              <Stack spacing={5}>
                <Flex>
                  <Icon as={HiMail} color='white' w={10} h={10}></Icon>
                  <Text color='white' fontSize='xl' marginLeft={3} p={1}>
                    tif@shaastra.org
                  </Text>
                </Flex>
                <Flex>
                  <Icon
                    as={HiPhone}
                    color='white'
                    w={10}
                    h={10}
                    marginTop={3}
                  ></Icon>
                  <Box marginLeft={4}>
                    <Text color='white' fontSize='xl'>
                      Aman
                    </Text>
                    <Text color='white' fontSize='xl'>
                      +91 6385140247
                    </Text>
                  </Box>
                </Flex>
                <Flex>
                  <Icon
                    as={HiPhone}
                    color='white'
                    w={10}
                    h={10}
                    marginTop={3}
                  ></Icon>
                  <Box marginLeft={4}>
                    <Text color='white' fontSize='xl'>
                      Baibhabi
                    </Text>
                    <Text color='white' fontSize='xl'>
                      +91 9989591690
                    </Text>
                  </Box>
                </Flex>
              </Stack>
              <Flex marginTop={8}>
                <Text fontSize='xl' color='white'>
                  Follow us:
                </Text>
                <a href='https://www.facebook.com/Shaastra/'>
                  <Icon
                    as={FaFacebook}
                    color='white'
                    w={8}
                    h={8}
                    marginLeft={6}
                    marginRight={4}
                  ></Icon>
                </a>
                <a href='https://www.instagram.com/shaastra_iitm/'>
                  <Icon
                    as={FaInstagram}
                    color='white'
                    w={8}
                    h={8}
                    marginLeft={4}
                    marginRight={4}
                  ></Icon>
                </a>
                <a href='https://www.linkedin.com/company/shaastra-iit-madras/'>
                  <Icon
                    as={FaLinkedin}
                    color='white'
                    w={8}
                    h={8}
                    marginLeft={4}
                    marginRight={4}
                  ></Icon>
                </a>
              </Flex>
            </Box>
          </SimpleGrid>
        </Center>
      </Flex>
    </React.Fragment>
  )
}

export default Contact
