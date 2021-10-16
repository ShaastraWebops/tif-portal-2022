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
      <Box height='300px'>
        <Heading textColor='#ff7e20' marginTop={5}>
          Structure and Timeline
        </Heading>
        <Box>
          <div className='steps-timeline'>
            <div className='steps-one'>
              <CircularProgress
                value={0}
                className='steps-circle'
                color='#ff7e20'
              />
              <div className='text-ctn'>
                <p className='steps-description'>13th October</p>
                <p className='steps-description'>Registration</p>
              </div>
            </div>

            <div className='steps-two'>
              <CircularProgress
                value={20}
                className='steps-circle'
                color='#ff7e20'
              />
              <div className='text-ctn'>
                <p className='steps-description'>13th October</p>
                <p className='steps-description'>Registration</p>
              </div>
            </div>

            <div className='steps-three'>
              <CircularProgress
                value={40}
                className='steps-circle'
                color='#ff7e20'
              />
              <div className='text-ctn'>
                <p className='steps-description'>13th October</p>
                <p className='steps-description'>Registration</p>
              </div>
            </div>
            <div className='steps-four'>
              <CircularProgress
                value={60}
                className='steps-circle'
                color='#ff7e20'
              />
              <div className='text-ctn'>
                <p className='steps-description'>13th October</p>
                <p className='steps-description'>Registration</p>
              </div>
            </div>
            <div className='steps-five'>
              <CircularProgress
                value={80}
                className='steps-circle'
                color='#ff7e20'
                backgroundColor='#2e2d2d'
              />
              <div className='text-ctn'>
                <p className='steps-description'>13th October</p>
                <p className='steps-description'>Registration</p>
              </div>
            </div>
            <div className='steps-six'>
              <CircularProgress
                value={100}
                className='steps-circle'
                color='#ff7e20'
              />
              <div className='text-ctn'>
                <p className='steps-description'>13th October</p>
                <p className='steps-description'>Registration</p>
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </React.Fragment>
  )
}

export default Timeline
