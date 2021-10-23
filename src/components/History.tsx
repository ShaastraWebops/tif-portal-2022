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
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


function History() {
  return (
    <React.Fragment>
      <Flex
        flexDirection='column'
        maxWidth='100%'
        overflowX='hidden'
        bgColor='white'
        alignItems='center'
      >
        <Heading textColor='#ff7e20' marginTop={4} marginBottom={4}>
          History and Evolution
        </Heading>
        <Flex
          height='650px'
          className='history'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
        >
          <Flex className='option-4'>
            <Flex
              flexDirection='column'
              borderRadius='5px'
              marginLeft={5}
              maxWidth='60%'
              bgColor={'#2e2d2d'}
              paddingLeft={2}
              paddingRight={2}
              paddingBottom={1}
              textAlign='center'
            >
              <Text color='#ff7e20' fontSize='2xl' textAlign='center'>
                2018
              </Text>
              <Text
                fontSize='sm'
                fontWeight='bold'
                color='white'
                textAlign='center'
              >
                TIF was officially launched. It consisted of 3 days of
                exhibitions and a pitching competition.
              </Text>
            </Flex>
            <Icon
              as={MdLocationOn}
              w={14}
              h={14}
              color='#ff7e20'
              marginTop={10}
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
            <Flex
              flexDirection='column'
              borderRadius='5px'
              marginLeft={5}
              maxWidth='60%'
              bgColor={'#2e2d2d'}
              paddingLeft={2}
              paddingRight={2}
              paddingBottom={1}
              textAlign='center'
            >
              <Text color='#ff7e20' fontSize='2xl'>
                2019
              </Text>
              <Text fontSize='sm' fontWeight='bold' color='white'>
                A B-plan event called Power2idea was organized by Colours of
                Youth during Shaastra.
              </Text>
            </Flex>
          </Flex>
          <Flex className='option-2'>
            <Flex
              flexDirection='column'
              borderRadius='5px'
              marginLeft={5}
              bgColor={'#2e2d2d'}
              paddingLeft={2}
              maxWidth='40%'
              paddingRight={2}
              textAlign='center'
              paddingBottom={1}
            >
              <Text color='#ff7e20' fontSize='2xl' textAlign='center'>
                2020
              </Text>
              <Text
                fontSize='sm'
                fontWeight='bold'
                color='white'
                textAlign='center'
                marginRight={2}
              >
                The current structure of TIF was formed which consists of
                mentorship, webinars, workshops, panel discussions, exhibitions
                and the final pitching ceremony.
              </Text>
            </Flex>
            <Icon
              as={MdLocationOn}
              w={14}
              h={14}
              color='#ff7e20'
              marginTop={12}
            ></Icon>
          </Flex>
          <Flex className='option-1'>
            <Icon
              as={MdLocationOn}
              w={14}
              h={14}
              color='#ff7e20'
              marginTop={10}
            ></Icon>
            <Flex
              flexDirection='column'
              borderRadius='5px'
              maxWidth='60%'
              marginLeft={5}
              bgColor={'#2e2d2d'}
              paddingLeft={2}
              paddingRight={2}
              paddingBottom={1}
              textAlign='center'
            >
              <Text color='#ff7e20' fontSize='2xl'>
                2021
              </Text>
              <Text fontSize='sm' fontWeight='bold' color='white'>
                TIF was successfully conducted as an online event. A project
                demonstration session was held for participants to showcase
                their prototypes. Workshops, panel discussions and the finals
                were all conducted through online platforms.
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex className="mobile-timeline" display="none">
      <VerticalTimeline>
        <VerticalTimelineElement>
             <Text color='#ff7e20' fontSize='2xl' textAlign='center'>
                2018
              </Text>
              <Text
                fontSize='sm'
                fontWeight='bold'
                color='#2e2d2d'
                textAlign='center'
              >
                TIF was officially launched. It consisted of 3 days of
                exhibitions and a pitching competition.
              </Text>
        </VerticalTimelineElement>
        <VerticalTimelineElement>
              <Text color='#ff7e20' fontSize='2xl' textAlign="center">
                2019
              </Text>
              <Text fontSize='sm' fontWeight='bold'  color='#2e2d2d' textAlign="center">
                A B-plan event called Power2idea was organized by Colours of
                Youth during Shaastra.
              </Text>
        </VerticalTimelineElement>
        <VerticalTimelineElement>
            <Text color='#ff7e20' fontSize='2xl' textAlign='center'>
                2020
              </Text>
              <Text
                fontSize='sm'
                fontWeight='bold'
                color='#2e2d2d'
                textAlign='center'
                marginRight={2}
              >
                The current structure of TIF was formed which consists of
                mentorship, webinars, workshops, panel discussions, exhibitions
                and the final pitching ceremony.
              </Text>
        </VerticalTimelineElement>
        <VerticalTimelineElement>
              <Text color='#ff7e20' fontSize='2xl' textAlign="center">
                2021
              </Text>
              <Text fontSize='sm' fontWeight='bold' color='#2e2d2d' textAlign="center">
                TIF was successfully conducted as an online event. A project
                demonstration session was held for participants to showcase
                their prototypes. Workshops, panel discussions and the finals
                were all conducted through online platforms.
              </Text>
        </VerticalTimelineElement>
      </VerticalTimeline>
      </Flex>
    </React.Fragment>
  )
}

export default History
