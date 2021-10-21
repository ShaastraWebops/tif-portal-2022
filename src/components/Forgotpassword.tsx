import React from 'react'
import { useState } from 'react'
import {
  Button,
  FormControl,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react'
import { Navbar } from './Navbar'
import { useGetPasswordOtpMutation } from '../types/generated/generated'
import { useHistory } from 'react-router'

export default function ForgotPassword() {
  const [email, setemail] = useState('')
  const [getpasswordotp] = useGetPasswordOtpMutation()
  const history = useHistory();
  const handleresetpassword = () => {
    getpasswordotp({
      variables: {
        email,
      },
    }).then(res=>{
      if(res.data?.getPasswordOTP){
        history.push("/forgotpasswordOTP")
      }
    })
    setemail(' ')
  }
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      backgroundColor='#2e2d2d'
    >
      <Navbar isHome={true} isJMT={true} isLogin={false} isApp={false} />
      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg='white'
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}
        width='85%'
      >
        <Heading
          lineHeight={1.1}
          fontSize={{ base: '2xl', md: '3xl' }}
          textColor='#ff7e20'
        >
          Forgot your password?
        </Heading>
        <Text fontSize={{ base: 'sm', sm: 'md' }} color='black'>
          You&apos;ll get an email with a reset link
        </Text>
        <FormControl id='email'>
          <Input
            variant='outline'
            borderColor='gray.500'
            color='black'
            placeholder='your-email@example.com'
            _placeholder={{ color: 'gray.500' }}
            type='email'
            onChange={(e) => setemail(e.target.value)}
          />
        </FormControl>
        <Stack spacing={6}>
          <Button
            bg={'#ff7e20'}
            color={'white'}
            _hover={{
              bg: 'white',
              textColor: 'black',
              border: '2px solid black',
            }}
            onClick={handleresetpassword}
          >
            Request Reset
          </Button>
        </Stack>
      </Stack>
    </Flex>
  )
}
