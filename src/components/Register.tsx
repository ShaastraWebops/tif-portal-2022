import React from 'react'
import { useState } from 'react'
import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Input,
  Button,
  Link,
  FormControl,
  FormLabel,
  SimpleGrid,
} from '@chakra-ui/react'

export default function Register() {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [username, setusername] = useState('')
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      backgroundColor='#2e2d2d'
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textColor='#ff7e20'>
            Register
          </Heading>
        </Stack>
        <SimpleGrid rounded={'lg'} boxShadow={'lg'} p={8} bgColor='white'>
          <Stack
            spacing={4}
            marginLeft={2}
            marginRight={2}
            paddingLeft={2}
            paddingRight={2}
          >
            <FormControl id='name'>
              <FormLabel>Username</FormLabel>
              <Input
                type='text'
                name='name'
                value={username}
                onChange={(e) => setusername(e.target.value)}
              />
            </FormControl>
            <FormControl id='email'>
              <FormLabel>Email address</FormLabel>
              <Input
                type='email'
                name='email'
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </FormControl>
            <FormControl id='vemail'>
              <FormLabel>Verify Email address</FormLabel>
              <Input type='email' name='email' />
            </FormControl>
            <FormControl id='password'>
              <FormLabel>Password</FormLabel>
              <Input
                type='password'
                name='password'
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
            </FormControl>
            <FormControl id='vpassword'>
              <FormLabel>Verfiy Password</FormLabel>
              <Input type='password' name='password' />
            </FormControl>
          </Stack>
        </SimpleGrid>
      </Stack>
    </Flex>
  )
}
