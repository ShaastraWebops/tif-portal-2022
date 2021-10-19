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
  Select,
  FormControl,
  FormLabel,
  SimpleGrid,
  IconButton,
  Textarea,
} from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'

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
      flexDirection='column'
    >
      {' '}
      <Heading
        fontSize={'4xl'}
        textColor='#ff7e20'
        m={2}
        p={2}
        marginBottom={5}
      >
        Register
      </Heading>
      <SimpleGrid
        rounded={'lg'}
        boxShadow={'lg'}
        p={8}
        bgColor='white'
        width='50%'
      >
        <Stack
          spacing={4}
          marginLeft={2}
          marginRight={2}
          paddingLeft={2}
          paddingRight={2}
        >
          <FormControl id='name'>
            <FormLabel color='black'>Username</FormLabel>
            <Input
              variant='outline'
              borderColor='gray.500'
              placeholder='Username'
              _placeholder={{ color: 'gray.500' }}
              color='black'
              type='text'
              name='name'
              value={username}
              onChange={(e) => setusername(e.target.value)}
            />
          </FormControl>
          <SimpleGrid columns={[1, 2]} spacing={2}>
            <FormControl id='email'>
              <FormLabel color='black'>Email address</FormLabel>
              <Input
                variant='outline'
                borderColor='gray.500'
                placeholder='Email address'
                _placeholder={{ color: 'gray.500' }}
                color='black'
                type='email'
                name='email'
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </FormControl>
            <FormControl id='vemail'>
              <FormLabel color='black'>Verify Email address</FormLabel>
              <Input
                type='email'
                name='email'
                variant='outline'
                borderColor='gray.500'
                placeholder='Re-enter Email address'
                _placeholder={{ color: 'gray.500' }}
                color='black'
              />
            </FormControl>
          </SimpleGrid>
          <SimpleGrid columns={[1, 2]} spacing={2}>
            <FormControl id='password' marginRight={2}>
              <FormLabel color='black'>Password</FormLabel>
              <Input
                variant='outline'
                borderColor='gray.500'
                placeholder='Password'
                _placeholder={{ color: 'gray.500' }}
                color='black'
                type='password'
                name='password'
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
            </FormControl>
            <FormControl id='vpassword'>
              <FormLabel color='black'>Verify Password</FormLabel>
              <Input
                type='password'
                name='password'
                variant='outline'
                borderColor='gray.500'
                placeholder='Re-enter password'
                _placeholder={{ color: 'gray.500' }}
                color='black'
              />
            </FormControl>
          </SimpleGrid>
          <Flex justifyContent='center'>
            <Button
              bg={'#ff7e20'}
              color={'white'}
              type='submit'
              _hover={{
                bg: 'white',
                textColor: 'black',
                border: '2px solid black',
              }}
            >
              Sign Up
            </Button>
          </Flex>
        </Stack>
      </SimpleGrid>
    </Flex>
  )
}
