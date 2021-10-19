import React from 'react'
import { useState } from 'react'
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
} from '@chakra-ui/react'
import { useLoginMutation } from '../types/generated/generated'

export default function Login() {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [login] = useLoginMutation();
  const handlelogin = () =>{
    login({
      variables : {
        LoginInput:{
          email,
          password
        }
      }
    }).catch((err) => console.log(err))

    setemail('');
    setpassword('');
  }

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
            Login to your account
          </Heading>
        </Stack>
        <Box rounded={'lg'} boxShadow={'lg'} p={8} bgColor='white'>
          <Stack spacing={4}>
            <FormControl id='email'>
              <FormLabel>Email address</FormLabel>
              <Input
                type='email'
                name='email'
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
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
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}
              >
                <Flex>
                  <Text marginRight={2}>New User?</Text>
                  <Link color={'blue.400'} href='/register'>
                    Register
                  </Link>
                </Flex>
                <Link color={'blue.400'} href='/forgotpassword'>
                  Forgot password?
                </Link>
              </Stack>
              <Button
                bg={'#ff7e20'}
                color={'white'}
                _hover={{
                  bg: 'white',
                  textColor: 'black',
                  border: '2px solid black',
                }}
                onClick={handlelogin}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}
