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
import { useParams } from 'react-router'
import { useGetProjectbyteamIdQuery, useGetTeamByIdQuery } from '../types/generated/generated'

export default function Team() {
    const { id } = useParams<{ id: string }>();
        console.log(id)

    const {data , error , loading} = useGetTeamByIdQuery({variables : {
        teamid : id
    }})

    console.log(data?.getTeamById.project)
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
       {data?.getTeamById.name}
      </Heading>
      <Heading
        fontSize={'4xl'}
        fontWeight='bold'
        textColor='white'
        marginBottom={0}
      >
       {data?.getTeamById.project?.title}
      </Heading>
      <Heading
        fontSize={'4xl'}
        fontWeight={300}
        textColor='#ff7e20'
        marginBottom={5}
      >
           {data?.getTeamById.project?.category}
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
                    {data?.getTeamById.project?.Q1}
                    </Td>
                </Tr>
                <Tr>
                    <Td fontWeight="bold">Uniqueness</Td>
                </Tr>
                <Tr>
                    <Td>
                    {data?.getTeamById.project?.Q2}

                    </Td>
                </Tr>
                <Tr>
                    <Td fontWeight="bold">Technology Implemented </Td>
                </Tr>
                <Tr>
                    <Td>
                    {data?.getTeamById.project?.Q3}

                    </Td>
                </Tr>
                <Tr>
                    <Td fontWeight="bold">Target crowd </Td>
                </Tr>
                <Tr>
                    <Td>
                    {data?.getTeamById.project?.Q4}

                    </Td>
                </Tr>
                <Tr>
                    <Td fontWeight="bold">IP Status </Td>
                </Tr>
                <Tr>
                    <Td>
                    {data?.getTeamById.project?.Q5}

                    </Td>
                </Tr>
                <Tr>
                    <Td fontWeight="bold">Partner Status </Td>
                </Tr>
                <Tr>
                    <Td>
                    {data?.getTeamById.project?.Q6}


                    </Td>
                </Tr>
                <Tr>
                    <Td fontWeight="bold">What stage is your prototype currently in? Is the prototype already under consideration for incubation by any other programs?</Td>
                </Tr>
                <Tr >
                    <Td borderBottom="none">
                    {data?.getTeamById.project?.Q7}


                    </Td>
                </Tr>
                <Tr >
                <Td fontWeight="bold">Video Link</Td>

                </Tr>
                <Tr >
                    <Td borderBottom="none">
                    {data?.getTeamById.project?.videolink}

                    </Td>
                </Tr>
            </Tbody>
        </Table>
       
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
           {
               data?.getTeamById.members.map(member => {
                   return(
                    <GridItem backgroundColor="white"p={4} borderRadius="10px">
                    <Flex flexDirection="column" className="member-grid-flex">
                         <Box fontSize="2xl" margin="auto" marginTop={2}>{member.name}</Box>
                         <Flex alignSelf="center" width="100%" justifyContent="space-between" marginTop={4}>
                             <Image src={email} width="10%"></Image>
                             <Box textAlign="center" marginLeft={2}>{member.email}</Box>
                         </Flex>
                         <Flex alignSelf="center" width="90%" justifyContent="space-between" marginTop={4}>
                             <Image src={phone} width="15%"></Image>
                             <Box textAlign="center" marginLeft={2}  >{member.contactno}</Box>
                         </Flex>
                         <Box fontSize="2xl" margin="auto" marginTop={2}>{member.institution}</Box>
                         <Flex alignSelf="center" width="90%" justifyContent="space-between" marginTop={4} marginBottom={2}>
                             {/* <Image src={p}  width="15%"></Image> */}
                             <Box textAlign="center" margin="auto">{member.city}, <br /> {member.state}</Box>
                         </Flex>
                    </Flex>
                 </GridItem>
                   )
               })
           }
           
        </Grid>
      </Box>
    </Flex>
  )
}
