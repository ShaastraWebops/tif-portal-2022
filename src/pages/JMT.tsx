import {
  Box,
  Center,
  Container,
  Flex,
  Grid,
  SimpleGrid,
  VStack,
} from '@chakra-ui/layout'
import { Heading, Button, Text, Image } from '@chakra-ui/react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Icon } from '@chakra-ui/react'
import { ImQuotesLeft } from 'react-icons/im'
import { Carousel } from 'react-responsive-carousel'
import React from 'react'
import '../styles/JMT.css'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

const JMT = () => {
  return (
    <React.Fragment>
      <Box minHeight={'100vh'} backgroundColor='#2e2d2d' p={3}>
        <Flex flexDirection='column' textAlign='center'>
          <Heading color='#ff7e20' m={1} p={1}>
            About JMT
          </Heading>
          <Box>
            <Text fontSize='xl' m={3} p={3}>
              Junior Make-a-Thon (JMT) is a one-of-a-kind event that centres
              around the ideas, imagination, and innovation skills of school
              students and allows them to learn practical skills and apply them
              to create new models and devices. One of the primary aims of JMT
              is to promote maker culture among school students, with quality
              mentorship and workshops. With the help of our partners, we
              encourage students to come up with solutions to problems
              persisting in different fields like agriculture, sustainability,
              healthcare, robotics, and home comfort. JMT 2020-21 was conducted
              in a virtual format successfully.
            </Text>
          </Box>
        </Flex>
        <Flex flexDirection='column' textAlign='center'>
          <Heading color='#ff7e20' m={1} p={1}>
            Innovision
          </Heading>
          <Box>
            <Text fontSize='xl' m={3} p={3}>
              Junior Make-a-Thon (JMT) is a one-of-a-kind event that centres
              around the ideas, imagination, and innovation skills of school
              students and allows them to learn practical skills and apply them
              to create new models and devices. One of the primary aims of JMT
              is to promote maker culture among school students, with quality
              mentorship and workshops. With the help of our partners, we
              encourage students to come up with solutions to problems
              persisting in different fields like agriculture, sustainability,
              healthcare, robotics, and home comfort. JMT 2020-21 was conducted
              in a virtual format successfully.
            </Text>
          </Box>
        </Flex>
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
                  Prithvi Vishak (Winner-JMT 2021)
                </Text>
                <Flex>
                  <Box>
                    <Text
                      fontSize='lg'
                      color='black'
                      marginTop={5}
                      marginRight={24}
                    >
                      I found Junior Make-a-Thon a few hours before
                      registrations closed. From the website, it seemed like a
                      fun, educational competition. Let’s just say the website
                      was right. Junior Make-a-Thon gave me incentive to think
                      of new things, and the guidance I needed to make those
                      things a reality. Everything from the format to the
                      problem statements was well thought-out and executed. The
                      workshops and student mentorship were immensely helpful in
                      learning how to think of, and prototype, solutions. The
                      competition pushed me to learn about new technology and
                      how I could use it to better the world. Thank you so much,
                      Junior Make-a-Thon!
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
                  TEAM Thriving trio - On Your Own Feet Again(Winner JMT-2020)
                </Text>
                <Flex>
                  <Box>
                    <Text
                      fontSize='lg'
                      color='black'
                      marginTop={5}
                      marginRight={24}
                    >
                      Junior make-a-thon was one of a kind competition that we
                      feel very proud to be part of. It was an entirely new
                      approach to competitions which motivated us to grow
                      interest toward product designing. The judges were highly
                      inspiring and the coordinator were the most supportive.
                      Our win in JMT has made us more confident in what we can
                      do and achieve. We developed a prototype of a shoe to
                      reduce the chances of elderly people from falling down. It
                      alerts the user of obstacles and turns on the lights in
                      dark places. We learned the key concepts involved in
                      making a great product such as market survey, key
                      differentiation of product, usability, cost and testing .
                      We would like to give our heartfelt thanks to JMT for
                      giving us this wonderful opportunity.
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

export default JMT
