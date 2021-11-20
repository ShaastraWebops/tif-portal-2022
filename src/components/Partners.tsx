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
  Image
} from '@chakra-ui/react'
import React from 'react';
import pat1 from '../assests/SpecialeInvest.png';
import pat2 from '../assests/Channel.jpg';
import pat3 from "../assests/TechCryptors.png";
import pat4 from "../assests/creya-logo.png";
import pat5 from '../assests/advantEdge.png';
function Partners() {
  return (
    <React.Fragment>
      <Box marginTop={5} width={'100%'}>
        <Center>
        <Heading textColor='#ff7e20' as='h1' size="2xl">
          Our Partners
        </Heading>
        </Center>
        <Flex width={'100%'} flexDirection={'column'} alignItems='center' justifyItems='center'>
          <Center style={{'textAlign':'center'}}>
            <Heading textColor='#ff7e20' marginTop={5} as='h2' size="xl">Tech and Innovation Fair</Heading>
            </Center>
            <Center  width={'100%'} m={2} p={2}>
              <Flex width={'100%'} flexDirection={['column','column','row','row']} m={2} p={2} style={{'justifyContent':'space-between'}}>
                <Box m={2} p={2}>
                  <a href='https://www.specialeinvest.com/' target={'_blank'}>
                    <Image src={pat1} alt='' boxSize={'350px'}/></a>
                </Box>
                <Box m={2} p={2}>
                  <a href='http://www.advantedge.vc/' target={'_blank'}>
                    <Image src={pat5} alt='' boxSize={'350px'}/></a>
                </Box>
                <Box  m={2} p={2}>
                  <a href='https://channeliam.com/' target={'_blank'}><Image src={pat2} objectFit={'cover'} alt='' boxSize={'300px'}/></a>
                  <Center><Heading textColor='white' m={2} p={2} as='h2' size="xl">Media Partner</Heading>
                </Center>
                  </Box>
              </Flex>
            </Center>

        </Flex>
        <Flex width={'100%'} flexDirection={'column'} alignItems='center' justifyItems='center'>
          <Center style={{'textAlign':'center'}}>
            <Heading textColor='#ff7e20' marginTop={5} as='h2' size="xl">Junior Make-a-Thon</Heading>
            </Center>
            <Center  width={'100%'} m={2} p={2}>
              <Flex width={'90%'} flexDirection={['column','column','row','row']} m={2} p={2} style={{'justifyContent':'space-between'}}>
              <Box  m={2} p={2}>
                  <a href='https://www.creyalearning.com/stemlearning/' target={'_blank'}><Image src={pat4} objectFit={'cover'} alt='' boxSize={'300px'}/></a>
                  <Center><Heading textColor='white' m={2} p={2} as='h2' size="xl">Innovation Partner</Heading>
                </Center>
                  </Box>
                
                <Box m={2} p={2}>
                  <a href='https://techcryptors.com/' target={'_blank'}>
                    <Image src={pat3} alt='' boxSize={'350px'}/></a>
                </Box>
                
              </Flex>
            </Center>

        </Flex>
      </Box>
    </React.Fragment>
  )
}

export default Partners
