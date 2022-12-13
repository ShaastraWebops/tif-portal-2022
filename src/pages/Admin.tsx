import React from 'react'
import { Box, Flex, Heading, SimpleGrid , Link, Button, Text } from '@chakra-ui/react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react"
import "../styles/Admin.css"
import { useState } from 'react'
import { useExportCsvQuery, useGetTeamsQuery, useGetUsersQuery, useLogoutUserMutation } from '../types/generated/generated'
import { useHistory } from 'react-router'
import fileDownload from "js-file-download";
import { EditIcon } from '@chakra-ui/icons'


export default function Admin() {

  const [filter, setFilter] = useState("") 
  const [category, setCategory] = useState("")


  const { data , error , loading} = useGetTeamsQuery();
  const {data : udata} = useGetUsersQuery();
  console.log(data?.getTeams)
  const teams  = data?.getTeams;
  const history = useHistory();
  const [logout] = useLogoutUserMutation();
  const {data : data2 } = useExportCsvQuery();
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      backgroundColor='#2e2d2d'
      flexDirection='column'
      className="admin"
    >
      {' '}
      <Heading
        fontSize={'4xl'}
        textColor='#ff7e20'
        m={2}
        p={2}
      >
        Registration Details
      </Heading>
      <Flex flexDirection={['column','row-reverse']}>
      <Text float={'right'} color={"#ff7e20"} fontSize={'2xl'}
        mx={2}
         _hover={{
           cursor : "pointer"
        }}
         onClick={ async ()=>{
           await logout().then(res => {
             if(res.data?.logoutUser){
              history.replace("/")
             }
           })
         }}>Logout</Text>
          <Button
          color={"#ff7e20"}
          variant="outline"
          border="2px solid"
          borderColor="#ff7e20"
          size="sm"
          p={2}
          m={2}
          onClick={() => {
            fileDownload(
              data2?.exportCSV!,
              `teams_participants.csv`
            );
          }}
                  >
                    <EditIcon m={2} />
                    Download participants csv
                  </Button>

      </Flex>
      <Flex flexDirection={['column','row-reverse']}>
      <Box textColor="white" p={3} fontSize="30px">
        Total teams: {teams?.length}
      </Box>
      <Box textColor="white" p={3} fontSize="30px">
        Registered Users: {udata?.getUsers?.length}
      </Box>
      </Flex>
      <Flex width="75%" margin="0 auto" marginBottom={3} fontSize="1vw" justifyContent="space-between" >
        <input type="text" placeholder="Search teams..."  onChange={(e:any) => {setFilter(e.target.value)}}/>
        <select name="category" id="category" onChange={(e:any) => setCategory(e.target.value)}>
          <option value="">Select category</option>
          <option value="Agriculture">Agriculture</option>
          <option value="Home Comfort">Home Comfort</option>
          <option value="Ed-Tech">Ed-Tech</option>
          <option value="Design and Development">Design and Development</option>
          <option value="Renewable Energy">Renewable Energy</option>
          <option value="Healthcare and Sanitation">Healthcare and Sanitation</option>
          <option value="Defense and Service">Defense and Service</option>
          <option value="Transportation">Transportation</option>
          <option value="Communication">Communication</option>
          <option value="Others">Others</option>
        </select>
      </Flex>
      <Table 
        variant="striped" 
        colorScheme='orange' 
        backgroundColor='white' 
        width="75%"
      >
        <Thead>
          <Tr>
            <Th fontSize={'2xl'}>SNo.</Th>
            <Th fontSize={'2xl'}>Team name</Th>
            <Th fontSize={'2xl'}>Project</Th>
            <Th fontSize={'2xl'}>Category</Th>
          </Tr>
        </Thead>
        <Tbody>
          {
            filter != "" ? (teams?.map((d,index) => {
              if(d.name.includes(filter)) {
              return(
                <Tr>
                   <Td fontSize={'1xl'}>{index+1}</Td>
                    <Td fontSize={'1xl'} ><Text _hover={{cursor : "pointer"}} onClick={()=> history.push(`/team/${d.id}`)
                    }>{d.name}</Text></Td>
                    <Td fontSize={'1xl'}>{d.project?.title}</Td>
                    <Td fontSize={'1xl'}>{d.project?.category}</Td>
                </Tr>
              ) }
              else return null
            })) : category != "" ?
             teams?.map((d,index) => {
              if(d.project?.category === category) return(
                <Tr>
                   <Td fontSize={'1xl'}>{index+1}</Td>
                    <Td fontSize={'1xl'}><Text _hover={{cursor : "pointer"}} onClick={()=> history.push(`/team/${d.id}`)
                    }>{d.name}</Text></Td>
                    <Td fontSize={'1xl'}>{d.project.title}</Td>
                    <Td fontSize={'1xl'}>{d.project.category}</Td>
                </Tr>
              ) 
              else return null
            }) :
            data?.getTeams.map((d,index) => {
              return(
                <Tr>
                   <Td fontSize={'1xl'}>{index+1}</Td>
                    <Td fontSize={'1xl'}><Text _hover={{cursor : "pointer"}} onClick={()=> history.push(`/team/${d.id}`)
                    }>{d.name}</Text></Td>
                    <Td fontSize={'1xl'}>{d.project?.title}</Td>
                    <Td fontSize={'1xl'}>{d.project?.category}</Td>
                </Tr>
              )
            }) 
          } 
        </Tbody>
      </Table>

    </Flex>
  )
}
