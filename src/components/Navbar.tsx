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

function Navbar() {
  return (
    <React.Fragment>
      <Box height='300px'>
        <Heading textColor='#ff7e20' marginTop={5}>
          Rules and Regulations
        </Heading>
      </Box>
    </React.Fragment>
  )
}

export default Navbar
