import React from 'react'
import { Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import { Navbar } from './Navbar'
import { Link } from 'react-router-dom'

function Verification() {
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      backgroundColor='#2e2d2d'
      flexDirection='column'
    >
      {/**<Navbar isHome={true} isJMT={true} isLogin={false} isApp={false} />**/}
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
          <Link to='/login'>
            <Text textColor={'teal.600'} style={{ display: 'inline' }}>
              {' '}
              Login
            </Text>
          </Link>{' '}
          to continue and complete your application.
        </Text>
      </SimpleGrid>
    </Flex>
  )
}

export default Verification
