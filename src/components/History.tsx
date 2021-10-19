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
  Icon,
} from '@chakra-ui/react'
import React from 'react'
import { MdLocationOn } from 'react-icons/md'
import '../styles/History.scss'

function History() {
  return (
    <React.Fragment>
      <Flex
        className='history'
        alignItems='center'
        height='600px'
        flexDirection='column'
        maxWidth={"100vw"}
      >
        <Heading textColor='#ff7e20' marginTop={8}>
          History and Evolution
        </Heading>
        <Flex className='option-1'>
          <Icon
            as={MdLocationOn}
            w={14}
            h={14}
            color='#ff7e20'
            marginTop={12}
          ></Icon>
          <Box marginLeft={5} width='45%'>
            <Text color='#ff7e20' fontSize='2xl'>
              2021
            </Text>
            <Text fontSize='sm' fontWeight='bold' color='black'>
              TIF was successfully conducted as an online event. A project
              demonstration session was held for participants to showcase their
              prototypes. Workshops, panel discussions and the finals were all
              conducted through online platforms.
            </Text>
          </Box>
        </Flex>
        <Flex className='option-2'>
          <Box width='45%'>
            <Text color='#ff7e20' fontSize='2xl' textAlign='right'>
              2020
            </Text>
            <Text
              fontSize='sm'
              fontWeight='bold'
              color='black'
              textAlign='right'
              marginRight={2}
            >
              The current structure of TIF was formed which consists of
              mentorship, webinars, workshops, panel discussions, exhibitions
              and the final pitching ceremony.
            </Text>
          </Box>
          <Icon
            as={MdLocationOn}
            w={14}
            h={14}
            color='#ff7e20'
            marginTop={12}
          ></Icon>
        </Flex>
        <Flex className='option-3'>
          <Icon
            as={MdLocationOn}
            w={14}
            h={14}
            color='#ff7e20'
            marginTop={10}
          ></Icon>
          <Box width='45%' marginLeft={8}>
            <Text color='#ff7e20' fontSize='2xl'>
              2019
            </Text>
            <Text fontSize='sm' fontWeight='bold' color='black'>
              A B-plan event called Power2idea was organized by Colours of Youth
              during Shaastra.
            </Text>
          </Box>
        </Flex>
        <Flex className='option-4'>
          <Box width='45%' marginRight={2}>
            <Text color='#ff7e20' fontSize='2xl' textAlign='right'>
              2018
            </Text>
            <Text
              fontSize='sm'
              fontWeight='bold'
              color='black'
              textAlign='right'
            >
              TIF was officially launched. It consisted of 3 days of exhibitions
              and a pitching competition.
            </Text>
          </Box>
          <Icon
            as={MdLocationOn}
            w={14}
            h={14}
            color='#ff7e20'
            marginTop={10}
          ></Icon>
        </Flex>
      </Flex>
    </React.Fragment>
  )
}

export default History
