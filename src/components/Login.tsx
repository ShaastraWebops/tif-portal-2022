import React, { useContext } from 'react'
import { useState } from 'react'
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  Alert,
  AlertIcon,
} from '@chakra-ui/react'
import { useLoginMutation, UserRole } from '../types/generated/generated'
import { useHistory } from 'react-router'
import { Navbar } from './Navbar'
import { Usercontext } from '../utils/Context'

export default function Login() {
  const {setRole} = useContext(Usercontext);
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [login] = useLoginMutation()
  const history = useHistory()
  const [alert, setAlert] = React.useState()
  const handlelogin = () => {
    login({
      variables: {
        LoginInput: {
          email,
          password,
        },
      },
    })
      .then((res) => {
        console.log(res.data?.login?.isVerified, "yes")
        if(!res.data?.login?.isVerified){
          history.push('/verifyOTP')
        }
        if (res.data?.login?.isVerified && res.data?.login?.id && res.data.login.role === UserRole.Leader) {
          history.push('/application')
        }else if(res.data?.login?.id && res.data.login.role === UserRole.Admin){
          setRole(res.data.login.role)
          localStorage.setItem("role",res.data.login.role)
          history.push("/admin")
        }
      })
      .catch((err) => {
        setAlert(err.message)
        console.log(err.message)
      })

    setemail('')
    setpassword('')
  }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      backgroundColor='#2e2d2d'
    >
      {/***<Navbar isHome={true} isJMT={true} isLogin={false} isApp={false} />**/}
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textColor='#ff7e20'>
            Login to your account
          </Heading>
        </Stack>

        <Box rounded={'lg'} boxShadow={'lg'} p={8} bgColor='white'>
          <Stack spacing={4}>
            {alert ? (
              <Alert status='error'>
                <AlertIcon />
                {alert}
              </Alert>
            ) : null}
            <FormControl id='email'>
              <FormLabel color='black'>Email address</FormLabel>
              <Input
                isRequired
                variant='outline'
                borderColor='gray.500'
                placeholder='Enter Email address'
                _placeholder={{ color: 'gray.500' }}
                color='black'
                type='email'
                name='email'
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </FormControl>
            <FormControl id='password'>
              <FormLabel color='black'>Password</FormLabel>
              <Input
                isRequired={true}
                variant='outline'
                borderColor='gray.500'
                placeholder='Enter password'
                _placeholder={{ color: 'gray.500' }}
                color='black'
                type='password'
                name='password'
                value={password}
                border='2px black solid'
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
                  <Text marginRight={2} color='black'>
                    New User?
                  </Text>
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
                Log in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}
