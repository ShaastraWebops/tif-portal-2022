import React from 'react'
import { Flex, Heading, SimpleGrid } from '@chakra-ui/react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react"

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
      <Table variant="simple"  bgColor='white'
        rounded={'lg'}
        boxShadow={'lg'}
        p={8}
          width='75%'>
        <Thead>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Thead>
        <Tbody>
          
        
         
        </Tbody>
      </Table>
    </Flex>
  )
}
