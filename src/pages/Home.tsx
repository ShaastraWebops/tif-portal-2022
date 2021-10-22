import {
  Box,
  Center,
  Container,
  Flex,
  Grid,
  SimpleGrid,
  Stack,
} from '@chakra-ui/layout'
import { Heading, Button, Text, Image, Link } from '@chakra-ui/react'
import React from 'react'
import '../styles/Home.css'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import History from '../components/History'
import Gallery from '../components/Gallery'
import Timeline from '../components/Timeline'
import Rules from '../components/Rules'
import Stories from '../components/Stories'
import Partners from '../components/Partners'
import Contact from '../components/Contact'
import Logo1 from '../assests/Logo1.png'
import Logo2 from '../assests/Logo2.png'
import Logo3 from '../assests/Logo3.png'
import { Navbar } from '../components/Navbar'

const Home = () => {
  return (
    <React.Fragment>
      <Center minHeight={'100vh'} className='home'>
        <Flex
          flexDirection={'column'}
          alignItems='center'
          justifyItems='center'
        >
          <Navbar />
          <Box bg='#ff7e20' width={'50%'} textColor='white' p={2} m={2}>
            <Center>
              <Text className='shaastra-title'>SHASSTRA'22</Text>
            </Center>
          </Box>
          <Heading
            p={2}
            m={2}
            size='xl'
            fontFamily={'Montserrat'}
            color={'white'}
          >
            Tech and Innovation Fair
          </Heading>
          <Box p={2} m={2}>
            <Button
              bg='#ff7e20'
              textColor='white'
              className='registerbutton'
              _hover={{
                bg: 'white',
                textColor: 'black',
                border: '2px solid black',
              }}
            >
              <Link href='/register'>Register Now</Link>
            </Button>
          </Box>
        </Flex>
      </Center>
      <Center minHeight={'100vh'} backgroundColor='#2e2d2d' p={3}>
        <Flex 
          flexDirection={'column'}
          alignItems='center'
          justifyItems='center'
          className="about"
        >
          <Heading textColor='#ff7e20' marginTop={2} height="30vh">
            About TIF
          </Heading>
          <Box width='95%' p={2} m={2} height="20vh">
            <Text textColor='white' className='about-tif-text'>
              Tech and Innovation Fair (TIF) is a{' '}
              <b> flagship competition event </b>of Shaastra that scouts for
              budding entrepreneurs by
              <b> providing a platform to develop tech-based projects </b> and
              enhance their potential to grow into a commercial product. We
              invite prototypes from various fields like robotics, healthcare,
              biotechnology, agriculture, and IoT.
            </Text>
          </Box>
          <Box width={['85%']}  height="50vh">
            <SimpleGrid
              columns={[1, 1, 2, 3]}
              spacing={10}
              width='100%'
              textColor='white'
              textAlign='justify'
              marginBottom={3}
            >
              <Box m={3} bgColor={'#ff7e20'} height='300px'>
                <Center>
                  <Flex
                    flexDirection='column'
                    alignItems='center'
                    justifyItems='center'
                  >
                    <Heading p={2} m={2} size='lg'>
                      Mentorship
                    </Heading>
                    <Text p={2} m={2}>
                      The teams will be exposed to{' '}
                      <b> dedicated mentoring sessions </b> aimed at converting
                      their prototype into a <b> minimum-viable product </b>with
                      structured business models.
                    </Text>
                  </Flex>
                </Center>
              </Box>
              <Box m={3} bgColor={'#ff7e20'} height='300px'>
                <Center>
                  <Flex
                    flexDirection='column'
                    alignItems='center'
                    justifyItems='center'
                  >
                    <Heading p={2} m={2} size='lg'>
                      Networking
                    </Heading>
                    <Text p={2} m={2}>
                      TIF promises its participants professional assistance and
                      support by <b>networking with professionals </b>
                      from established firms categorised under{' '}
                      <b>
                        angel investors, venture capitalists, incubators{' '}
                      </b>{' '}
                      and other experts.
                    </Text>
                  </Flex>
                </Center>
              </Box>
              <Center>
                <Box m={3} bgColor={'#ff7e20'} height='300px'>
                  <Center>
                    <Flex
                      flexDirection='column'
                      alignItems='center'
                      justifyItems='center'
                    >
                      <Heading p={2} m={2} size='lg'>
                        Final pitching event
                      </Heading>
                      <Text p={2} m={2}>
                        The event culminates in a final pitching competition
                        during Shaastra 2022. Participants will present their
                        business pitches to a panel of judges and the winners
                        will be declared on the same day.
                      </Text>
                    </Flex>
                  </Center>
                </Box>
              </Center>
            </SimpleGrid>
          </Box>
          <History />
          <Gallery />
          <Timeline />
          <Flex flexDirection='column' alignItems='center' m={2} marginTop={10} height="100vh" justifyContent="center">
            <Heading textColor='#ff7e20' m={2} p={2}>
              What's in Store
            </Heading>
            <SimpleGrid
              columns={[1, 1, 2, 3]}
              spacing={10}
              width='100%'
              textColor='white'
              textAlign='justify'
            >
              <Box m={3} height='250px'>
                <Center>
                  <Flex
                    flexDirection='column'
                    alignItems='center'
                    justifyItems='center'
                  >
                    <Box boxSize='200px'>
                      <Image src={Logo1} alt='logo' objectFit='cover'></Image>
                    </Box>
                    <Text fontSize='2xl' m={2} p={2}>
                      Mentorship
                    </Text>
                  </Flex>
                </Center>
              </Box>
              <Box m={3} height='250px' marginRight={10} marginLeft={10}>
                <Center>
                  <Flex
                    flexDirection='column'
                    alignItems='center'
                    justifyItems='center'
                  >
                    <Box boxSize='200px'>
                      <Image src={Logo2} alt='logo' objectFit='cover'></Image>
                    </Box>
                    <Text fontSize='2xl' m={2} p={2}>
                      Cash Prizes
                    </Text>
                  </Flex>
                </Center>
              </Box>
              <Center>
                <Box m={3} height='250px'>
                  <Center>
                    <Flex
                      flexDirection='column'
                      alignItems='center'
                      justifyItems='center'
                    >
                      <Box boxSize='200px'>
                        <Image src={Logo3} alt='logo' objectFit='cover'></Image>
                      </Box>
                      <Text fontSize='2xl'>Incubation Opportunities</Text>
                    </Flex>
                  </Center>
                </Box>
              </Center>
            </SimpleGrid>
          </Flex>
          <Rules />
          <Stories />
          <Partners />
          <Contact />
        </Flex>
      </Center>
    </React.Fragment>
  )
}

export default Home
