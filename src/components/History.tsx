import {
  Box,
  Center,
  Container,
  Flex,
  Grid,
  SimpleGrid,
  VStack,
  Heading,
  Button,
  Text,
} from '@chakra-ui/react'
import React from 'react'
import { BsBoxArrowDown } from 'react-icons/bs'
import '../styles/History.css'

function History() {
  return (
    <React.Fragment>
      <Box height='300px' className='history'>
        <Heading textColor='#ff7e20'>History and Evolution</Heading>
      </Box>
    </React.Fragment>
  )
}

export default History
