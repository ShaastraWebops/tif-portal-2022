import React from 'react'
import {
  Center,
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  SimpleGrid,
} from '@chakra-ui/react'

function About() {
  return (
    <Center minHeight={'100vh'} backgroundColor='#2e2d2d' p={3}>
      <Flex flexDirection={'column'} alignItems='center' justifyItems='center'>
        <Heading textColor='#ff7e20' marginTop={2}>
          About TIF
        </Heading>
        <Box width='95%' p={2} m={2}>
          <Text textColor='white' className='about-tif-text' textAlign={['justify']}>
            Tech and Innovation Fair (TIF) is a{' '}
            <b> flagship competition event </b>of Shaastra that scouts for
            budding entrepreneurs by
            <b> providing a platform to develop tech-based projects </b> and
            enhance their potential to grow into a commercial product.We invite prototypes from a wide range of categories.
          </Text>
        </Box>
        <Box width={['85%']}>
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
                    <b>angel investors, venture capitalists, incubators </b> and
                    other experts.
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
                      business pitches to a panel of judges and the winners will
                      be declared on the same day.
                    </Text>
                  </Flex>
                </Center>
              </Box>
            </Center>
          </SimpleGrid>
        </Box>
      </Flex>
    </Center>
  )
}

export default About
