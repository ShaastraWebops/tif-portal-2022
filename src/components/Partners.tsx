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
import pat6 from '../assests/Artboard 1@400.png';

function Partners() {
  return (
    <React.Fragment>
      <Box marginTop={5} width={'100%'}>
        <Center>
        <Heading textColor='#ff7e20' as='h1' size="2xl">
          Previous Partners
        </Heading>
        </Center>
        <Flex width={'100%'} flexDirection={'column'} alignItems='center' justifyItems='center'>
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
                  <a href='https://channeliam.com/' target={'_blank'}><Image src={pat2} objectFit={'contain'} alt='' boxSize={'300px'}/></a>
                  </Box>
                    <Box m={2} p={2}>
                  <a href='http://www.100x.vc/' target={'_blank'}>
                    <Image src={pat6} alt='' boxSize={'350px'}/></a>
                </Box>
              </Flex>
            </Center>

        </Flex>





        <Flex width={'100%'} flexDirection={'column'} alignItems='center' justifyItems='center'>
            <Center  width={'100%'} m={2} p={2}>
              <Flex width={'100%'} flexDirection={['column','column','row','row']} m={2} p={2} style={{'justifyContent':'space-between'}}>
                <Box m={2} p={2}>
                <a  target={'_blank'}>
                    <Image src={pat3} alt='' boxSize={'300px'}/></a>
                </Box>
                <Box m={2} p={2}>
                <a target={'_blank'}><Image src={pat4} objectFit={'contain'} alt='' boxSize={'300px'}/></a>
                </Box>
                <Box m={2} p={2}>
                <a target={'_blank'}><Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG23OR2ZLmbzkQ-01FHAKSRY4nOP8-Kwlg6g&usqp=CAU" objectFit={'contain'} alt='' boxSize={'300px'}/></a>
                </Box>
                <Box m={2} p={2}>
                <a target={'_blank'}><Image src="https://htic.iitm.ac.in/mti/wp-content/uploads/2017/03/IITMIC-logo-e1490164436990.jpg" objectFit={'contain'} alt='' boxSize={'300px'}/></a>
                </Box>
              </Flex>
            </Center>

        </Flex>


        <Flex width={'100%'} flexDirection={'column'} alignItems='center' justifyItems='center'>
            <Center  width={'100%'} m={2} p={2}>
              <Flex width={'100%'} flexDirection={['column','column','row','row']} m={2} p={2} style={{'justifyContent':'space-between'}}>
                <Box m={2} p={2}>
                <a target={'_blank'}>
                    <Image src="https://innovationlabasia.dk/wp-content/uploads/shell-e4.jpg" objectFit={'contain'} alt='' boxSize={'300px'}/></a>
                </Box>
                <Box m={2} p={2}>
                <a target={'_blank'}><Image src="https://image3.mouthshut.com/images/imagesp/925011768s.jpg" objectFit={'contain'} alt='' boxSize={'300px'}/></a>
                </Box>
              </Flex>
            </Center>

        </Flex>



        
      </Box>
    </React.Fragment>
  )
}

export default Partners
