import React from 'react'
import { 
    Flex, 
    Heading,
    Box, 
    Table, 
    Tr, 
    Td, 
    Tbody, 
    Button, 
    Grid, 
    GridItem,
    Image } from '@chakra-ui/react'
import email from "../assests/Asset 10.png"
import phone from "../assests/Asset 11.png"
import "../styles/Admin.css"

export default function Team() {
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      backgroundColor='#2e2d2d'
      flexDirection='column'
      className="team"
      width="100vw"
    >
      {' '}
      <Heading
        fontSize={'6xl'}
        textColor='#ff7e20'
        m={2}
        p={1}
        marginBottom={0}
      >
        Team name
      </Heading>
      <Heading
        fontSize={'4xl'}
        fontWeight='bold'
        textColor='white'
        marginBottom={0}
      >
        Project name
      </Heading>
      <Heading
        fontSize={'4xl'}
        fontWeight={300}
        textColor='#ff7e20'
        marginBottom={5}
      >
        Category
      </Heading>
      <Box
      className="team-main-box"
        width="75%"
        display="flex"
        flexDirection="column"
      >
        <Heading 
            textColor="white"
            fontSize={'3xl'}
        >
            Project details
        </Heading>
        <Table 
            variant="striped" 
            colorScheme='orange' 
            backgroundColor='white'
            marginTop={4}
            fontSize="1.1vw"
            borderRadius="10px"
            className="team-question-grid"
        >
            <Tbody >
                <Tr>
                    <Td fontWeight="bold">Overview</Td>
                </Tr>
                <Tr>
                    <Td>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </Td>
                </Tr>
                <Tr>
                    <Td fontWeight="bold">Uniqueness</Td>
                </Tr>
                <Tr>
                    <Td>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </Td>
                </Tr>
                <Tr>
                    <Td fontWeight="bold">Technology Implemented </Td>
                </Tr>
                <Tr>
                    <Td>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </Td>
                </Tr>
                <Tr>
                    <Td fontWeight="bold">Target crowd </Td>
                </Tr>
                <Tr>
                    <Td>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </Td>
                </Tr>
                <Tr>
                    <Td fontWeight="bold">IP Status </Td>
                </Tr>
                <Tr>
                    <Td>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </Td>
                </Tr>
                <Tr>
                    <Td fontWeight="bold">Partner Status </Td>
                </Tr>
                <Tr>
                    <Td>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </Td>
                </Tr>
                <Tr>
                    <Td fontWeight="bold">What stage is your prototype currently in? Is the prototype already under consideration for incubation by any other programs?</Td>
                </Tr>
                <Tr >
                    <Td borderBottom="none">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </Td>
                </Tr>
            </Tbody>
        </Table>
        <Button
            fontSize="1.2vw"
             margin="auto"
             marginTop={4}
             p={6}
             width="fit-content"
              bg={'#ff7e20'}
              color={'white'}
              type='submit'
              _hover={{
                bg: 'white',
                textColor: 'black',
                border: '2px solid black',
              }}
        >
            Video link
        </Button>
      </Box>
      <Box
        className="team-main-box"
         marginTop={8}
         width="75%"
         display="flex"
         flexDirection="column"
         marginBottom={10}
      >
          <Heading 
            textColor="white"
            fontSize={'3xl'}
        >
            Team members
        </Heading>
        <Grid className="member-grid" fontSize={20} width="100%" templateRows="repeat(1, 1fr)" templateColumns="repeat(4, 1fr)" columnGap={3} marginTop={4}>
            <GridItem backgroundColor="white"p={4} borderRadius="10px">
               <Flex flexDirection="column" className="member-grid-flex">
                    <Box fontSize="2xl" margin="auto" marginTop={2}>Name</Box>
                    <Flex alignSelf="center" width="90%" justifyContent="space-between" marginTop={4}>
                        <Image src={email} width="15%"></Image>
                        <Box textAlign="center" marginLeft={2}>abc@gmail.com</Box>
                    </Flex>
                    <Flex alignSelf="center" width="90%" justifyContent="space-between" marginTop={4}>
                        <Image src={phone} width="15%"></Image>
                        <Box textAlign="center" marginLeft={2}  >234567890</Box>
                    </Flex>
                    <Box fontSize="2xl" margin="auto" marginTop={2}>College name</Box>
                    <Flex alignSelf="center" width="90%" justifyContent="space-between" marginTop={4} marginBottom={2}>
                        {/* <Image src={p}  width="15%"></Image> */}
                        <Box textAlign="center" margin="auto">city, <br /> state</Box>
                    </Flex>
               </Flex>
            </GridItem>
            <GridItem backgroundColor="white"p={4} borderRadius="10px">
               <Flex flexDirection="column" className="member-grid-flex">
                    <Box fontSize="2xl" margin="auto" marginTop={2}>Name</Box>
                    <Flex alignSelf="center" width="90%" justifyContent="space-between" marginTop={4}>
                        <Image src={email} width="15%"></Image>
                        <Box textAlign="center" marginLeft={2}>abc@gmail.com</Box>
                    </Flex>
                    <Flex alignSelf="center" width="90%" justifyContent="space-between" marginTop={4}>
                        <Image src={phone} width="15%"></Image>
                        <Box textAlign="center" marginLeft={2}  >234567890</Box>
                    </Flex>
                    <Box fontSize="2xl" margin="auto" marginTop={2}>College name</Box>
                    <Flex alignSelf="center" width="90%" justifyContent="space-between" marginTop={4} marginBottom={2}>
                        {/* <Image src={p}  width="15%"></Image> */}
                        <Box textAlign="center" margin="auto">city, <br /> state</Box>
                    </Flex>
               </Flex>
            </GridItem><GridItem backgroundColor="white"p={4} borderRadius="10px">
               <Flex flexDirection="column" className="member-grid-flex">
                    <Box fontSize="2xl" margin="auto" marginTop={2}>Name</Box>
                    <Flex alignSelf="center" width="90%" justifyContent="space-between" marginTop={4}>
                        <Image src={email} width="15%"></Image>
                        <Box textAlign="center" marginLeft={2}>abc@gmail.com</Box>
                    </Flex>
                    <Flex alignSelf="center" width="90%" justifyContent="space-between" marginTop={4}>
                        <Image src={phone} width="15%"></Image>
                        <Box textAlign="center" marginLeft={2}  >234567890</Box>
                    </Flex>
                    <Box fontSize="2xl" margin="auto" marginTop={2}>College name</Box>
                    <Flex alignSelf="center" width="90%" justifyContent="space-between" marginTop={4} marginBottom={2}>
                        {/* <Image src={p}  width="15%"></Image> */}
                        <Box textAlign="center" margin="auto">city, <br /> state</Box>
                    </Flex>
               </Flex>
            </GridItem><GridItem backgroundColor="white"p={4} borderRadius="10px">
               <Flex flexDirection="column" className="member-grid-flex">
                    <Box fontSize="2xl" margin="auto" marginTop={2}>Name</Box>
                    <Flex alignSelf="center" width="90%" justifyContent="space-between" marginTop={4}>
                        <Image src={email} width="15%"></Image>
                        <Box textAlign="center" marginLeft={2}>abc@gmail.com</Box>
                    </Flex>
                    <Flex alignSelf="center" width="90%" justifyContent="space-between" marginTop={4}>
                        <Image src={phone} width="15%"></Image>
                        <Box textAlign="center" marginLeft={2}  >234567890</Box>
                    </Flex>
                    <Box fontSize="2xl" margin="auto" marginTop={2}>College name</Box>
                    <Flex alignSelf="center" width="90%" justifyContent="space-between" marginTop={4} marginBottom={2}>
                        {/* <Image src={p}  width="15%"></Image> */}
                        <Box textAlign="center" margin="auto">city, <br /> state</Box>
                    </Flex>
               </Flex>
            </GridItem>
        </Grid>
      </Box>
    </Flex>
  )
}
