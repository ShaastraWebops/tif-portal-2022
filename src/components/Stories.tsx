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
  Image,
} from '@chakra-ui/react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Icon } from '@chakra-ui/react'
import { ImQuotesLeft } from 'react-icons/im'
import { Carousel } from 'react-responsive-carousel'
import React from 'react'
import '../styles/Stories.css'
import storyImage from '../assests/stories.jpg'

function Stories() {
  return (
    <React.Fragment>
      <Box alignItems='center'>
        <Flex
          flexDirection={'column'}
          alignItems={'center'}
          className='stories'
        >
          <Heading textColor='#ff7e20' m={3} p={3}>
            Success Stories
          </Heading>
          <Box width={'90%'}>
            <Carousel infiniteLoop autoPlay>
              <Box>
                <Box>
                  <Icon
                    as={ImQuotesLeft}
                    color='#ff7e20'
                    h={24}
                    w={24}
                    position='relative'
                    float='left'
                    marginLeft={24}
                  ></Icon>
                </Box>
                <Text fontSize='xl' fontWeight='bold' color='black'>
                  Scavenger robot to eradicate manual scavenging (1st Runners
                  up- TIF 2021)
                </Text>
                <Flex>
                  <Box>
                    <Text
                      fontSize='lg'
                      color='black'
                      marginTop={5}
                      marginRight={10}
                    >
                      Competition has a lot of things we can learn even if we
                      win or not, these learnings will be useful throughout our
                      lives. The team of Shaastra did a great job. The
                      volunteers guided us patiently and the virtual creation of
                      IIT Madras was great.
                    </Text>
                    <Text
                      fontStyle='italic'
                      fontSize='lg'
                      color='black'
                      marginRight={10}
                    >
                      -Harikrishnan, Team Scavenger.
                    </Text>
                  </Box>
                </Flex>
              </Box>
              <Box>
                <Box>
                  <Icon
                    as={ImQuotesLeft}
                    color='#ff7e20'
                    h={24}
                    w={24}
                    position='relative'
                    float='left'
                    marginLeft={24}
                  ></Icon>
                </Box>
                <Text fontSize='xl' fontWeight='bold' color='black'>
                  Drowning rescue kit - Finds drowning people and launches life
                  jackets for rescue (Winner TIF- 2020)
                </Text>
                <Flex textAlign='center'>
                  <Box>
                    <Text
                      fontSize='lg'
                      color='black'
                      marginTop={5}
                      marginRight={24}
                    >
                      Initially, when we got the mail saying we’ve been
                      shortlisted for TIF at IIT Madras, we were surprised. No
                      one in our entire family, our generation, had ever seen an
                      IIT. We got a really good mentor and, Tech and Innovation
                      Fair was really supportive from Day 0. I thank the entire
                      team for everything they’ve done for us.
                    </Text>
                    <Text
                      fontStyle='italic'
                      fontSize='lg'
                      color='black'
                      marginRight={24}
                    >
                      -Mohammed Safi, Team Night Fury.
                    </Text>
                  </Box>
                </Flex>
              </Box>
              <Box>
                <Box>
                  <Icon
                    as={ImQuotesLeft}
                    color='#ff7e20'
                    h={24}
                    w={24}
                    position='relative'
                    float='left'
                    marginLeft={24}
                  ></Icon>
                </Box>
                <Text fontSize='xl' fontWeight='bold' color='black'>
                  Non Invasive Measurement of Blood Glucose & Haemoglobin
                  (Winner TIF-2019)
                </Text>
                <Flex>
                  <Box>
                    <Text
                      fontSize='lg'
                      color='black'
                      marginTop={5}
                      marginRight={24}
                    >
                      We were working on our device for few months and always
                      wanted to make it into a startup to help people. That’s
                      when we came across Tech and Innovation Fair at Shaastra
                      ‘19 in IIT Madras. The TIF platform helped us by
                      organising workshops on IPR and Pitching. At the end of
                      the day, we were also given an opportunity for
                      pre-incubation at the IITM Research Park. This event
                      helped us take our product to the next phase.
                    </Text>
                    <Text
                      fontStyle='italic'
                      fontSize='lg'
                      color='black'
                      marginRight={24}
                    >
                      -Sriram Shreedharan, Team Leader Glucoglobin.
                    </Text>
                  </Box>
                </Flex>
              </Box>
              <Box>
                <Box>
                  <Icon
                    as={ImQuotesLeft}
                    color='#ff7e20'
                    h={24}
                    w={24}
                    position='relative'
                    float='left'
                    marginLeft={24}
                  ></Icon>
                </Box>
                <Text fontSize='xl' fontWeight='bold' color='black'>
                  Foldable House (Winner TIF-2018)
                </Text>
                <Flex>
                  <Box>
                    <Text
                      fontSize='lg'
                      color='black'
                      marginTop={5}
                      marginRight={24}
                    >
                      We were a project prototype while we registered for
                      Shaastra TIF 2018. TIF 2018 gave us much insights through
                      its mentoring sessions and webinars. It helped us to work
                      more aggressively on our project and now its soon to be
                      launched as a startup.
                    </Text>
                    <Text
                      fontStyle='italic'
                      fontSize='lg'
                      color='black'
                      marginRight={24}
                    >
                      -Shree Ram, CEO & Co-founder, Modulus Housing.
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </Carousel>
          </Box>
        </Flex>
      </Box>
    </React.Fragment>
  )
}

export default Stories
