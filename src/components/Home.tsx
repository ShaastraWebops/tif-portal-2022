import { Box, Center, Container, Flex, Grid, VStack } from '@chakra-ui/layout';
import { Heading ,Button } from '@chakra-ui/react';
import React from 'react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

const Home = () =>{
    return (
    <Center minHeight={"100vh"}>
    <Flex flexDirection={"column"} alignItems="center" justifyItems="center"  paddingTop={['10px','20px']} >
        <Box bg = "orange" width={'50%'} textColor="white" p={2} m={2}>
        <Center>
        <Heading size = "md" >Shaastra - 2022</Heading>
        </Center>
        </Box>
        <Heading p={2} m={2}>Tech and Innovation Fair</Heading>
        <Box p={2} m={2}>
            <Button bg="orange" borderRadius={'20px'} textColor="white">Register Now</Button>
        </Box>
    </Flex>
    </Center>
    )
}

export default Home
