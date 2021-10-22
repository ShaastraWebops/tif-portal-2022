import {
  Box,
  Center,
  Container,
  Flex,
  Grid,
  SimpleGrid,
  Stack,
  StackDivider,
} from '@chakra-ui/layout'
import { Heading, Button, Text, Image } from '@chakra-ui/react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Icon } from '@chakra-ui/react'
import { ImQuotesLeft } from 'react-icons/im'
import { Carousel } from 'react-responsive-carousel'
import React from 'react'
import { Navbar } from '../components/Navbar'
import '../styles/JMT.css'
import Image1 from '../assests/innovision.png'

const JMT = () => {
  return (
    <React.Fragment>
      <Box minHeight={'100vh'} backgroundColor='#2e2d2d' p={3}>
        <Flex
          flexDirection={'column'}
          alignItems='center'
          justifyItems='center'
          maxWidth='100%'
          overflowX='hidden'
        >
          <Navbar isHome={true} isJMT={false} isLogin={true} isApp={false} />
          <Flex flexDirection='column' textAlign='center' marginTop={8}>
            <Heading color='#ff7e20' m={1} p={1} marginTop={10}>
              About JMT
            </Heading>
            <Box>
              <Text
                fontSize='xl'
                m={3}
                p={3}
                color='white'
                textAlign={'justify'}
              >
                Junior Make-a-Thon (JMT) is a one-of-a-kind event that centres
                around the ideas, imagination, and innovation skills of school
                students and allows them to learn practical skills and apply
                them to create new models and devices. One of the primary aims
                of JMT is to promote maker culture among school students, with
                quality mentorship and workshops. With the help of our partners,
                we encourage students to come up with solutions to problems
                persisting in different fields like agriculture, sustainability,
                healthcare, robotics, and home comfort. JMT 2020-21 was
                conducted in a virtual format successfully.
              </Text>
            </Box>
          </Flex>
          <Flex flexDirection='column' textAlign='center' marginBottom={5}>
            <Heading color='#ff7e20' m={1} p={1}>
              Innovision
            </Heading>
            <Flex flexDirection='column' alignItems='center'>
              <Stack
                direction={['column', 'row']}
                spacing='24px'
                // marginLeft={5}
                marginRight={5}
              >
                <Box>
                  <Text
                    fontSize='xl'
                    m={3}
                    p={3}
                    textAlign={'justify'}
                    color='white'
                  >
                    Innovision was a maker culture awareness session organized
                    in schools all over the country. We conducted an interactive
                    webinar with the students on topics like ideas, how to
                    innovate, maker culture, peer learning, tinkering and much
                    more.These webinars also acted as an introduction to JMT.
                  </Text>
                </Box>
                <Box>
                  <Image
                    src={Image1}
                    alt='photo'
                    height={'200px'}
                    width={'600px'}
                  ></Image>
                </Box>
              </Stack>
              <Stack
                direction={['column', 'row']}
                spacing='24px'
                divider={<StackDivider borderColor='#ff7e20' />}
              >
                <Box w='300px' h='150px'>
                  <Flex
                    flexDirection='column'
                    alignItems='center'
                    textAlign='center'
                  >
                    <Text color='#ff7e20' fontSize='5xl'>
                      900+
                    </Text>
                    <Text color='white' fontSize='xl'>
                      registrations
                    </Text>
                  </Flex>
                </Box>
                <Box w='300px' h='150px'>
                  <Flex
                    flexDirection='column'
                    alignItems='center'
                    textAlign='center'
                  >
                    <Text color='#ff7e20' fontSize='5xl'>
                      30+
                    </Text>
                    <Text color='white' fontSize='xl'>
                      schools
                    </Text>
                  </Flex>
                </Box>
                <Box w='300px' h='150px'>
                  <Flex
                    flexDirection='column'
                    alignItems='center'
                    textAlign='center'
                  >
                    <Text color='#ff7e20' fontSize='5xl'>
                      20+
                    </Text>
                    <Text color='white' fontSize='xl'>
                      cities
                    </Text>
                  </Flex>
                </Box>
              </Stack>
            </Flex>
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
                <Box justifyContent='center'>
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
                        problem statements was well thought-out and executed.
                        The workshops and student mentorship were immensely
                        helpful in learning how to think of, and prototype,
                        solutions. The competition pushed me to learn about new
                        technology and how I could use it to better the world.
                        Thank you so much, Junior Make-a-Thon!
                      </Text>
                    </Box>
                  </Flex>
                </Box>
                <Box justifyContent='center'>
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
                        interest toward product designing. The judges were
                        highly inspiring and the coordinator were the most
                        supportive. Our win in JMT has made us more confident in
                        what we can do and achieve. We developed a prototype of
                        a shoe to reduce the chances of elderly people from
                        falling down. It alerts the user of obstacles and turns
                        on the lights in dark places. We learned the key
                        concepts involved in making a great product such as
                        market survey, key differentiation of product,
                        usability, cost and testing . We would like to give our
                        heartfelt thanks to JMT for giving us this wonderful
                        opportunity.
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              </Carousel>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </React.Fragment>
  )
}

export default JMT
