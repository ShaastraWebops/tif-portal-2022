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
import React, { useState } from 'react'
import '../styles/Home.css'
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  IconButton,
} from '@chakra-ui/react'
import History from '../components/History'
import Gallery from '../components/Gallery'
import Timeline from '../components/Timeline'
import Rules from '../components/Rules'
import About from '../components/About'
import Stories from '../components/Stories'
import Partners from '../components/Partners'
import Contact from '../components/Contact'
import Logo1 from '../assests/Logo1.png'
import Logo2 from '../assests/Logo2.png'
import Logo3 from '../assests/Logo3.png'
import { ChevronDownIcon, HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { Navbar } from '../components/Navbar'

const Home = () => {
  const [display, changeDisplay] = useState('none')
  return (
    <React.Fragment>
      <Center minHeight={'100vh'} className='home'>
        <Flex
          flexDirection={'column'}
          alignItems='center'
          justifyItems='center'
          maxWidth='100%'
          overflowX='hidden'
        >
          <Flex maxWidth='100%' overflowX='hidden'>
            <Flex className='nav' backgroundColor='gray.100'>
              {/* Desktop */}
              <Flex display={['none', 'none', 'flex', 'flex']}>
                <Link href='/jmt' passHref>
                  <Button
                    as='a'
                    variant='ghost'
                    aria-label='Jmt'
                    my={5}
                    fontSize='lg'
                    w='100%'
                    color='#ff7e20'
                  >
                    JMT
                  </Button>
                </Link>

                <Link href='/login' passHref>
                  <Button
                    as='a'
                    variant='ghost'
                    aria-label='Jmt'
                    my={5}
                    fontSize='lg'
                    w='100%'
                    color='#ff7e20'
                  >
                    Login
                  </Button>
                </Link>
                <Menu>
                  <MenuButton
                    as={Button}
                    rightIcon={<ChevronDownIcon />}
                    variant='ghost'
                    aria-label='Home'
                    my={5}
                    w='100%'
                    fontSize='lg'
                    color='#ff7e20'
                  >
                    Navigate
                  </MenuButton>
                  <MenuList>
                    <MenuItem>
                      <Link href='#about'>About TIF</Link>
                    </MenuItem>
                    <MenuItem>
                      <Link href='#history'>History and Evolution</Link>
                    </MenuItem>
                    <MenuItem>
                      <Link href='#gallery'>Gallery</Link>
                    </MenuItem>
                    <MenuItem>
                      <Link href='#timeline'>Structure and Timeline</Link>
                    </MenuItem>
                    <MenuItem>
                      <Link href='#prizes'>Prizes</Link>
                    </MenuItem>
                    <MenuItem>
                      <Link href='#rules'>Rules and Regulations</Link>
                    </MenuItem>
                    <MenuItem>
                      <Link href='#stories'>Success Stories</Link>
                    </MenuItem>
                    <MenuItem>
                      <Link href='#contact'>Contact Us</Link>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Flex>

              {/* Mobile */}
              <IconButton
                aria-label='Open Menu'
                size='lg'
                mr={2}
                color='#ff7e20'
                icon={<HamburgerIcon />}
                onClick={() => changeDisplay('flex')}
                display={['flex', 'flex', 'none', 'none']}
              />
            </Flex>

            {/* Mobile Content */}
            <Flex
              w='100vw'
              display={display}
              bgColor='gray.50'
              zIndex={20}
              h='100vh'
              pos='fixed'
              top='0'
              left='0'
              overflowY='auto'
              flexDir='column'
            >
              <Flex justify='flex-end'>
                <IconButton
                  mt={2}
                  mr={2}
                  aria-label='Open Menu'
                  size='lg'
                  color='#ff7e20'
                  icon={<CloseIcon />}
                  onClick={() => changeDisplay('none')}
                />
              </Flex>

              <Flex flexDir='column' align='center' color='#ff7e20'>
                <Link href='/jmt' passHref marginRight={5}>
                  <Button
                    as='a'
                    variant='ghost'
                    aria-label='Home'
                    my={5}
                    w='100%'
                    fontSize='lg'
                    color='#ff7e20'
                  >
                    JMT
                  </Button>
                </Link>
                <Link href='/login' passHref marginRight={5}>
                  <Button
                    as='a'
                    variant='ghost'
                    aria-label='Home'
                    my={5}
                    w='100%'
                    fontSize='lg'
                    color='#ff7e20'
                  >
                    Login
                  </Button>
                </Link>
                <Menu>
                  <MenuButton
                    as={Button}
                    rightIcon={<ChevronDownIcon />}
                    variant='ghost'
                    aria-label='Home'
                    my={5}
                    w='50%'
                    fontSize='lg'
                    color='#ff7e20'
                  >
                    Navigate
                  </MenuButton>
                  <MenuList>
                    <MenuItem>
                      <Link href='#about' onClick={() => changeDisplay('none')}>
                        About TIF
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link
                        href='#history'
                        onClick={() => changeDisplay('none')}
                      >
                        History and Evolution
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link
                        href='#gallery'
                        onClick={() => changeDisplay('none')}
                      >
                        Gallery
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link
                        href='#timeline'
                        onClick={() => changeDisplay('none')}
                      >
                        Structure and Timeline
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link
                        href='#prizes'
                        onClick={() => changeDisplay('none')}
                      >
                        Prizes
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link href='#rules' onClick={() => changeDisplay('none')}>
                        Rules and Regulations
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link
                        href='#stories'
                        onClick={() => changeDisplay('none')}
                      >
                        Success Stories
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link
                        href='#contact'
                        onClick={() => changeDisplay('none')}
                      >
                        Contact Us
                      </Link>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Flex>
            </Flex>
          </Flex>

          <Box bg='#ff7e20' width={'50%'} textColor='white' p={2} m={2}>
            <Center>
              <Text className='shaastra-title' fontSize={'xl'}>
                SHAASTRA'22
              </Text>
            </Center>
          </Box>
          <Center>
            <Heading
              p={2}
              m={2}
              size='xl'
              fontFamily={'Montserrat'}
              color={'white'}
              textAlign={'center'}
            >
              Tech and Innovation Fair
            </Heading>
          </Center>
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
              fontSize={'xl'}
            >
              <Link href='/register'>Register Now</Link>
            </Button>
          </Box>
        </Flex>
      </Center>
      <div id='about'>
        {' '}
        <About />
      </div>

      <Center minHeight={'100vh'} backgroundColor='#2e2d2d' p={3} id='history'>
        <Flex
          flexDirection={'column'}
          alignItems='center'
          justifyItems='center'
        >
          <History />
        </Flex>
      </Center>
      <Center minHeight={'100vh'} backgroundColor='#2e2d2d' p={3}>
        <Flex
          flexDirection={'column'}
          alignItems='center'
          justifyItems='center'
          className='about'
        >
          <div id='gallery'>
            {' '}
            <Gallery />
          </div>
          <div id='timeline'>
            <Timeline />
          </div>
        </Flex>
      </Center>

      <Center minHeight={'100vh'} backgroundColor='#2e2d2d' id='prizes'>
        <Flex
          flexDirection={'column'}
          alignItems='center'
          justifyItems='center'
        >
          <Heading
            textColor='#ff7e20'
            marginBottom={10}
            p={2}
            marginTop={[5, 5, 5, 10]}
          >
            What's in Store
          </Heading>
          <SimpleGrid
            columns={[1, 1, 2, 3]}
            spacing={10}
            width='100%'
            textColor='white'
            textAlign='justify'
            marginTop={10}
            marginBottom={10}
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
                    <Text fontSize='2xl' m={2} p={2}>
                      Incubation Opportunities
                    </Text>
                  </Flex>
                </Center>
              </Box>
            </Center>
          </SimpleGrid>
          <div id='rules'>
            <Rules />
          </div>
        </Flex>
      </Center>

      <Center minHeight={'100vh'} backgroundColor='#2e2d2d' p={3}>
        <Flex
          flexDirection={'column'}
          alignItems='center'
          justifyItems='center'
        >
          <div id='stories'>
            {' '}
            <Stories />
          </div>

          {/* <Partners /> */}
          <div id='contact'>
            {' '}
            <Contact />
          </div>
        </Flex>
      </Center>
    </React.Fragment>
  )
}

export default Home
