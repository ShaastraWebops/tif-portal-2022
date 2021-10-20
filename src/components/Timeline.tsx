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
  CircularProgress,
  CircularProgressLabel,
} from '@chakra-ui/react'
import '../styles/Timeline.scss'
import React from 'react'

function Timeline() {
  return (
    <React.Fragment>
      <Flex flexDirection='column' alignItems='center' justifyContent='center'>
        <Heading textColor='#ff7e20' marginTop={5} marginBottom={10}>
          Structure and Timeline
        </Heading>
        <Box>
          <div className='steps-timeline'>
            <div className='steps-one'>
              <CircularProgress
                value={0}
                className='steps-circle'
                color='#ff7e20'
                backgroundColor='#2e2d2d'
                thickness='16px'
              />
              <div className='text-ctn'>
                <p className='steps-heading'>13th October</p>
                <p className='steps-description'>Registration</p>
              </div>
            </div>
            <div className='line-ctn'></div>
            <div className='steps-two'>
              <CircularProgress
                value={20}
                className='steps-circle'
                color='#ff7e20'
                backgroundColor='#2e2d2d'
                thickness='16px'
              />
              <div className='text-ctn'>
                <p className='steps-heading'>30th October</p>
                <p className='steps-description'>Registration closes</p>
              </div>
            </div>

            <div className='steps-three'>
              <CircularProgress
                value={40}
                className='steps-circle'
                color='#ff7e20'
                backgroundColor='#2e2d2d'
                thickness='16px'
              />
              <div className='text-ctn'>
                <p className='steps-heading'>November</p>
                <p className='steps-description'>Screening</p>
              </div>
            </div>
            <div className='steps-four'>
              <CircularProgress
                value={60}
                className='steps-circle'
                color='#ff7e20'
                backgroundColor='#2e2d2d'
                thickness='16px'
              />
              <div className='text-ctn'>
                <p className='steps-heading'>December</p>
                <p className='steps-description'>Mentorship and Webinars</p>
              </div>
            </div>
            <div className='steps-five'>
              <CircularProgress
                value={80}
                className='steps-circle'
                color='#ff7e20'
                backgroundColor='#2e2d2d'
                thickness='16px'
              />
              <div className='text-ctn'>
                <p className='steps-heading'>13th January</p>
                <p className='steps-description'>Workshops</p>
              </div>
            </div>
            <div className='steps-six'>
              <CircularProgress
                value={100}
                className='steps-circle'
                color='#ff7e20'
                backgroundColor='#2e2d2d'
                thickness='16px'
              />
              <div className='vertical-line'></div>
              <div className='text-ctn'>
                <p className='steps-heading'>16th January</p>
                <p className='steps-description'>Final Pitching</p>
              </div>
            </div>
          </div>
        </Box>
      </Flex>
    </React.Fragment>
  )
}

export default Timeline
