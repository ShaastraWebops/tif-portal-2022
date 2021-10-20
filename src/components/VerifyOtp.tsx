import React from 'react'
import { Flex, Heading, SimpleGrid, Text, Link ,  FormControl,FormLabel,Input, Button} from '@chakra-ui/react'
import { useVerifyUserMutation } from '../types/generated/generated'
import { useHistory } from 'react-router'

function VerifyOtp() {
    const [otp, setOtp] = React.useState('')
    const history = useHistory();
    const [verifyuser] = useVerifyUserMutation();

    const handlesubmit = () =>{

        verifyuser({
            variables : {
                otp
            }
        })
        .then(res => {
            if(res.data?.verifyUser){
                history.push("/verified")
            }
        }
            )
        .catch(err => console.log(err))
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
            <FormLabel color='black'>OTP</FormLabel>
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
          </Flex>
        </SimpleGrid>
      </Flex>
    )
}

export default VerifyOtp




