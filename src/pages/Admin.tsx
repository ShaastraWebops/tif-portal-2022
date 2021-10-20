import React from 'react'
import { Box, Flex, Heading, SimpleGrid , Link } from '@chakra-ui/react'
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

export default function Admin() {

  const [filter, setFilter] = useState("") 
  const [category, setCategory] = useState("")
  const data = [
    {
      no: '1', 
      name: 'ABC', 
      project: 'Foldable House',
      category: 'Home Comfort'
    },
    {
      no: '1', 
      name: 'ABC', 
      project: 'Non Invasive Measurement of Blood Glucose & Haemoglobin',
      category: 'Healthcare and Sanitation'
    },
    {
      no: '1', 
      name: 'ABC', 
      project: '	Scavenger robot to eradicate manual scavenging',
      category: 'Others'
    }
 ]

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
        fontSize={'6xl'}
        textColor='#ff7e20'
        m={2}
        p={2}
        marginBottom={5}
      >
        Registration Details
      </Heading>
      <Box textColor="white" p={3} fontSize="30px">
        Total teams: 4
      </Box>
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
            filter != "" ? data.map(d => {
              if(d.name.includes(filter)) return(
                <Tr>
                   <Td fontSize={'1xl'}>{d.no}</Td>
                    <Td fontSize={'1xl'}><Link>{d.name}</Link></Td>
                    <Td fontSize={'1xl'}><Link>{d.project}</Link></Td>
                    <Td fontSize={'1xl'}>{d.category}</Td>
                </Tr>
              ) 
              else return null
            }) : category != "" ? data.map(d => {
              if(d.category === category) return(
                <Tr>
                   <Td fontSize={'1xl'}>{d.no}</Td>
                    <Td fontSize={'1xl'}><Link>{d.name}</Link></Td>
                    <Td fontSize={'1xl'}><Link>{d.project}</Link></Td>
                    <Td fontSize={'1xl'}>{d.category}</Td>
                </Tr>
              ) 
              else return null
            }) :
            data.map(d => {
              return(
                <Tr>
                   <Td fontSize={'1xl'}>{d.no}</Td>
                    <Td fontSize={'1xl'}><Link>{d.name}</Link></Td>
                    <Td fontSize={'1xl'}><Link>{d.project}</Link></Td>
                    <Td fontSize={'1xl'}>{d.category}</Td>
                </Tr>
              )
            }) 
          }
          {/* <Tr>
            <Td fontSize={'1xl'}>1.</Td>
            <Td fontSize={'1xl'}><Link>ABC</Link></Td>
            <Td fontSize={'1xl'}><Link>Foldable House</Link></Td>
            <Td fontSize={'1xl'}>Home Comfort</Td>
          </Tr>
          <Tr>
            <Td>2.</Td>
            <Td><Link>ABC</Link></Td>
            <Td><Link>Non Invasive Measurement of Blood Glucose & Haemoglobin</Link></Td>
            <Td>Healthcare and sanitation</Td>
          </Tr>
          <Tr>
            <Td>3.</Td>
            <Td><Link>ABC</Link></Td>
            <Td><Link>Scavenger robot to eradicate manual scavenging</Link></Td>
            <Td>Others</Td>
          </Tr> */}
        </Tbody>
      </Table>

    </Flex>
  )
}
