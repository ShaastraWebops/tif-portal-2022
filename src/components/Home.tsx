import { Box, Center, Container, Flex, Grid, VStack } from '@chakra-ui/layout';
import { Heading ,Button ,Text} from '@chakra-ui/react';
import React from 'react';
import "../styles/Home.css";

const Home = () =>{
    return (
    <Center minHeight={"100vh"} className="home">
    <Flex flexDirection={"column"} alignItems="center" justifyItems="center">
        <Box bg = "orange" width={'50%'} borderRadius="20px" textColor="white" p={2} m={2}>
        <Center>
        <Text className="shaastra-title">SHASSTRA'22</Text>
        </Center>
        </Box>
        <Heading p={2} m={2} size="lg" fontFamily={'Montserrat'} color={"white"}>Tech and Innovation Fair</Heading>
        <Box p={2} m={2}>
            <Button bg="orange" borderRadius={'20px'} textColor="white" className="registerbutton">Register Now</Button>
        </Box>
    </Flex>
    </Center>
    )
}

export default Home
