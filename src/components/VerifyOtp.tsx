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
import { useResendVerificationMailMutation, useVerifyUserMutation } from '../types/generated/generated'
import { useHistory } from 'react-router'

function VerifyOtp() {
  const [otp, setOtp] = React.useState('')
  const history = useHistory()
  const [verifyuser] = useVerifyUserMutation()
  const [resendmail] = useResendVerificationMailMutation();
  const [email , setemail] = React.useState('');
  const [input , setInput] = React.useState(false);
  const [alert , setalert] = React.useState(false)
  const handlesubmit = () => {
    verifyuser({
      variables: {
        otp,
      },
    })
      .then((res) => {
        if (res.data?.verifyUser) {
          history.push('/verified')
        }
      })
      .catch((err) => console.log(err))
  }
  const resend = () =>{
    resendmail({variables:{
      requestForgotPassInput : {
        email
      }
    }}).then(res => {
      if(res.data?.resendVerificationMail){
        setalert(true)
      }
    })
    .catch(err => console.error(err)
    )
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
          Verify your mail Id
        </Heading>
        <FormControl id='name'>
          <FormLabel color='black'>OTP  (Check in the promotions if email not found)</FormLabel>
          <Input
            variant='outline'
            borderColor='gray.500'
            placeholder='OTP'
            _placeholder={{ color: 'gray.500' }}
            color='black'
            type='text'
            name='name'
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
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
          {
            !input ? (<Button onClick = {()=>setInput(true)}
              m={2}
              bg={'#ff7e20'}
              color={'white'}
              type='submit'
              _hover={{
                bg: 'white',
                textColor: 'black',
                border: '2px solid black',
              }}>
               Resend Verification mail
             </Button>) : null
          }
        </Flex>
        {
        input ? ( < Flex flexDirection={['column']}><FormControl id='name'>
        <FormLabel color='black'>Email</FormLabel>
        <Input
          variant='outline'
          borderColor='gray.500'
          placeholder='email'
          _placeholder={{ color: 'gray.500' }}
          color='black'
          type='email'
          name='oemail'
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
      </FormControl> 
      <Button onClick = {resend}
      m={2}
      bg={'#ff7e20'}
      color={'white'}
      type='submit'
      _hover={{
        bg: 'white',
        textColor: 'black',
        border: '2px solid black',
      }}>
       Resend Verification mail
     </Button>
     {
       alert ? (
         <Alert status='success'>
           <AlertIcon />
           Verification mail has been sent 
         </Alert>
       ) : null
     } </Flex>) : null
      }
      </SimpleGrid>
    
    </Flex>
  )
}

export default VerifyOtp
