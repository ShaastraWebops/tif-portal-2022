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
import React from 'react'
import '../styles/Gallery.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import Image1 from '../assests/Image1.jpg'
import Image2 from '../assests/Image2.jpg'
import Image3 from '../assests/Image3.jpg'
import Image4 from '../assests/Image4.jpg'
import Image5 from '../assests/Image5.jpg'
import Image6 from '../assests/Image6.jpg'

function Gallery() {
  return (
    <React.Fragment>
      <Flex
        flexDirection={'column'}
        alignItems={'center'}
        justifyContent='center'
        maxWidth='100%'
        overflowX='hidden'
      >
        <Heading textColor='#ff7e20' m={3} p={3}>
          Gallery
        </Heading>
        <Box width={'75%'}>
          <Carousel infiniteLoop autoPlay dynamicHeight>
            <Box>
              <Image
                boxSize='500px'
                objectFit='cover'
                src={Image5}
                alt='Gallery'
              />
            </Box>
            <Box>
              <Image
                boxSize='500px'
                objectFit='cover'
                src={Image6}
                alt='Gallery'
              />
            </Box>
            <Box>
              <Image
                boxSize='500px'
                objectFit='cover'
                src={Image1}
                alt='Gallery'
              />
            </Box>
            <Box>
              <Image
                boxSize='500px'
                objectFit='cover'
                src={Image2}
                alt='Gallery'
              />
            </Box>
            <Box>
              <Image
                boxSize='500px'
                objectFit='cover'
                src={Image4}
                alt='Gallery'
              />
            </Box>
          </Carousel>
        </Box>
      </Flex>
    </React.Fragment>
  )
}

export default Gallery
