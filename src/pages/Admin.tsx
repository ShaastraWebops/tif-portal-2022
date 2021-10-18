import React from 'react'
import { Flex, Heading, SimpleGrid } from '@chakra-ui/react'

export default function Admin() {
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
        Registration Details
      </Heading>
      <SimpleGrid
        rounded={'lg'}
        boxShadow={'lg'}
        p={8}
        bgColor='white'
        width='75%'
      ></SimpleGrid>
    </Flex>
  )
}
