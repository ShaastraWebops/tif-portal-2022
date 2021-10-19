import React from 'react'
import { Flex, Heading, SimpleGrid, Text, Link } from '@chakra-ui/react'

function Verification() {
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
          Email Verified
        </Heading>
        <Text color='black' fontSize='xl'>
          Email address verified. Please{' '}
          <Link to='/login' color='teal.600'>
            Login
          </Link>{' '}
          to continue and complete your application.
        </Text>
      </SimpleGrid>
    </Flex>
  )
}

export default Verification
