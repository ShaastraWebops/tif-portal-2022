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

export default function ForgotPassword() {
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      backgroundColor='#2e2d2d'
    >
      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg='white'
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}
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
          >
            Request Reset
          </Button>
        </Stack>
      </Stack>
    </Flex>
  )
}
