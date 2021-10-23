import React from 'react'
import {
  Flex,
  Heading,
  SimpleGrid,
  Text,
  Link,
  FormControl,
  FormLabel,
  Input,
  Button,
  Alert,
  AlertIcon,
} from '@chakra-ui/react'
import { useResetPasswordMutation, useVerifyUserMutation } from '../types/generated/generated'
import { useHistory } from 'react-router'

function ForgotPasswordOTP() {
  const [otp, setOtp] = React.useState('')
  const [email , setEmail] = React.useState('')
  const [newPassword , setNewpass] = React.useState('')
  const [alert , setAlert] = React.useState(false);
  const [resetpass] = useResetPasswordMutation();
  const [perror , setPerror] = React.useState(false);

  const handlesubmit = () => {
    resetpass({
      variables: {
        resetPasswordInput : {
            otp,
            email,
            newPassword
        }

      },
    })
      .then((res) => {
        if (res.data?.resetPassword) {
            setAlert(true)
        }
      })
      .catch((err) => console.log(err))
  }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      backgroundColor='#2e2d2d'
      flexDirection='column'
    >
       
      <SimpleGrid
        rounded={'lg'}
        boxShadow={'lg'}
        p={8}
        bgColor='white'
        width='50%'
      >
        <Heading fontSize={'3xl'} textColor='#ff7e20' marginBottom={3}>
            Enter OTP to change your Password
        </Heading>
        {
            alert ? 
            <Alert status="success">
              <AlertIcon />
              Your password is changed . Please <Text textColor={'teal.600'} style={{ display: 'inline' }} mx={1}>
              {' '}
              <Link href='/login'>Login</Link>
              
            </Text>
            using new credentials
            </Alert> : null
        }
        <FormControl id='otp' p ={2}>
          <FormLabel color='black'>OTP</FormLabel>
          <Input
            variant='outline'
            borderColor='gray.500'
            placeholder='OTP'
            _placeholder={{ color: 'gray.500' }}
            color='black'
            type='text'
            name='otp'
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
        </FormControl>
        <FormControl id='email' p={2}>
          <FormLabel color='black'>Email Id</FormLabel>
          <Input
            variant='outline'
            borderColor='gray.500'
            placeholder='Email Id'
            _placeholder={{ color: 'gray.500' }}
            color='black'
            type='text'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl id='newpass' p={2}>
          <FormLabel color='black'>New Password</FormLabel>
          <Input
            variant='outline'
            borderColor='gray.500'
            placeholder='New password'
            _placeholder={{ color: 'gray.500' }}
            color='black'
            type='password'
            name='password'
            value={newPassword}
            onChange={(e) => setNewpass(e.target.value)}
          />
        </FormControl>
        <FormControl id='vpassword' p={2}>
              <FormLabel color='black'>Verify Password</FormLabel>
              <Input
                type='password'
                name='password'
                variant='outline'
                borderColor={perror ? 'red' : 'gray.500'}
                placeholder='Re-enter password'
                _placeholder={{ color: 'gray.500' }}
                color='black'
                onChange={(e) => {
                  if (e.target.value === newPassword) {
                    setPerror(false)
                  } else {
                    setPerror(true)
                  }
                }}
              />
            </FormControl>
        <Flex justifyContent='center'>
          <Button
            m={2}
            bg={'#ff7e20'}
            color={'white'}
            type='submit'
            _hover={{
              bg: 'white',
              textColor: 'black',
              border: '2px solid black',
            }}
            onClick={handlesubmit}
          >
            Submit
          </Button>
        </Flex>
      </SimpleGrid>
    </Flex>
  )
}

export default ForgotPasswordOTP
