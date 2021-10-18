import React from 'react'
import { useState } from 'react'
import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Input,
  Button,
  Select,
  FormControl,
  FormLabel,
  SimpleGrid,
  IconButton,
  Textarea,
} from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'

export default function Register() {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [username, setusername] = useState('')
  const [member2, setMember2] = useState(false)
  const [member3, setMember3] = useState(false)
  const [member4, setMember4] = useState(false)
  const [teamLimit, setTeamLimit] = useState(true)
  const [othercategory, setOtherCategory] = useState(false)
  const [category, setCategory] = useState('')

  function addTeamMember() {
    if (member2 === false) {
      setMember2(true)
    } else if (member3 === false) {
      setMember3(true)
    } else {
      setMember4(true)
      setTeamLimit(false)
    }
  }

  function deleteMember() {
    setTeamLimit(true)
    if (member4 === true) {
      setMember4(false)
    } else if (member3 === true) {
      setMember3(false)
    } else {
      setMember2(false)
    }
  }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      backgroundColor='#2e2d2d'
      flexDirection='column'
    >
      {' '}
      <Heading
        fontSize={'4xl'}
        textColor='#ff7e20'
        m={2}
        p={2}
        marginBottom={5}
      >
        Register
      </Heading>
      <SimpleGrid
        rounded={'lg'}
        boxShadow={'lg'}
        p={8}
        bgColor='white'
        width='75%'
      >
        <Stack
          spacing={4}
          marginLeft={2}
          marginRight={2}
          paddingLeft={2}
          paddingRight={2}
        >
          <FormControl id='name'>
            <FormLabel color='black'>Username</FormLabel>
            <Input
              variant='outline'
              borderColor='gray.500'
              placeholder='Username'
              _placeholder={{ color: 'gray.500' }}
              color='black'
              type='text'
              name='name'
              value={username}
              onChange={(e) => setusername(e.target.value)}
            />
          </FormControl>
          <SimpleGrid columns={[1, 2]} spacing={2}>
            <FormControl id='email'>
              <FormLabel color='black'>Email address</FormLabel>
              <Input
                variant='outline'
                borderColor='gray.500'
                placeholder='Email address'
                _placeholder={{ color: 'gray.500' }}
                color='black'
                type='email'
                name='email'
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </FormControl>
            <FormControl id='vemail'>
              <FormLabel color='black'>Verify Email address</FormLabel>
              <Input
                type='email'
                name='email'
                variant='outline'
                borderColor='gray.500'
                placeholder='Re-enter Email address'
                _placeholder={{ color: 'gray.500' }}
                color='black'
              />
            </FormControl>
          </SimpleGrid>
          <SimpleGrid columns={[1, 2]} spacing={2}>
            <FormControl id='password' marginRight={2}>
              <FormLabel color='black'>Password</FormLabel>
              <Input
                variant='outline'
                borderColor='gray.500'
                placeholder='Password'
                _placeholder={{ color: 'gray.500' }}
                color='black'
                type='password'
                name='password'
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
            </FormControl>
            <FormControl id='vpassword'>
              <FormLabel color='black'>Verify Password</FormLabel>
              <Input
                type='password'
                name='password'
                variant='outline'
                borderColor='gray.500'
                placeholder='Re-enter password'
                _placeholder={{ color: 'gray.500' }}
                color='black'
              />
            </FormControl>
          </SimpleGrid>
        </Stack>
        <Stack
          spacing={4}
          marginLeft={2}
          marginRight={2}
          paddingLeft={2}
          paddingRight={2}
        >
          <Text color='black' marginTop={3} fontSize='xl' fontWeight='bold'>
            Team Details
          </Text>
          <FormControl id='teamName'>
            <FormLabel color='black'>Team Name</FormLabel>
            <Input
              type='text'
              name='teamName'
              variant='outline'
              borderColor='gray.500'
              placeholder='Enter team name'
              _placeholder={{ color: 'gray.500' }}
              color='black'
            />
          </FormControl>
          <Box>
            <Text
              color='black'
              fontWeight='medium'
              fontSize='lg'
              marginBottom={1}
            >
              Team Member 1
            </Text>
            <SimpleGrid columns={[1, 2]} spacing={2} marginBottom={1}>
              <FormControl id='name1' marginRight={2}>
                <FormLabel color='black'>Name</FormLabel>
                <Input
                  variant='outline'
                  borderColor='gray.500'
                  placeholder='Enter name'
                  _placeholder={{ color: 'gray.500' }}
                  color='black'
                  type='text'
                  name='name1'
                />
              </FormControl>
              <FormControl id='contact1'>
                <FormLabel color='black'>Contact No.</FormLabel>
                <Input
                  type='number'
                  name='contact1'
                  variant='outline'
                  borderColor='gray.500'
                  placeholder='Enter Contact No.'
                  _placeholder={{ color: 'gray.500' }}
                  color='black'
                />
              </FormControl>
            </SimpleGrid>
            <SimpleGrid columns={[1, 2]} spacing={2} marginBottom={1}>
              <FormControl id='email1' marginRight={2}>
                <FormLabel color='black'>Email address</FormLabel>
                <Input
                  variant='outline'
                  borderColor='gray.500'
                  placeholder='Email address'
                  _placeholder={{ color: 'gray.500' }}
                  color='black'
                  type='email'
                  name='email1'
                />
              </FormControl>
              <FormControl id='college1'>
                <FormLabel color='black'>College Name</FormLabel>
                <Input
                  type='text'
                  name='college1'
                  variant='outline'
                  borderColor='gray.500'
                  placeholder='College Name'
                  _placeholder={{ color: 'gray.500' }}
                  color='black'
                />
              </FormControl>
            </SimpleGrid>
            <SimpleGrid columns={[1, 2]} spacing={2}>
              <FormControl id='city1' marginRight={2}>
                <FormLabel color='black'>City</FormLabel>
                <Input
                  variant='outline'
                  borderColor='gray.500'
                  placeholder='Enter city'
                  _placeholder={{ color: 'gray.500' }}
                  color='black'
                  type='text'
                  name='city1'
                />
              </FormControl>
              <FormControl id='state1'>
                <FormLabel color='black'>State</FormLabel>
                <Input
                  type='text'
                  name='state1'
                  variant='outline'
                  borderColor='gray.500'
                  placeholder='Enter state'
                  _placeholder={{ color: 'gray.500' }}
                  color='black'
                />
              </FormControl>
            </SimpleGrid>
          </Box>
          {member2 ? (
            <Box>
              <Flex>
                <Text
                  color='black'
                  fontWeight='medium'
                  fontSize='lg'
                  marginBottom={1}
                  marginRight={2}
                >
                  Team Member 2
                </Text>
                <IconButton
                  colorScheme='red'
                  aria-label='Delete'
                  size='sm'
                  icon={<DeleteIcon />}
                  onClick={deleteMember}
                />
              </Flex>
              <SimpleGrid columns={[1, 2]} spacing={2} marginBottom={1}>
                <FormControl id='name2' marginRight={2}>
                  <FormLabel color='black'>Name</FormLabel>
                  <Input
                    variant='outline'
                    borderColor='gray.500'
                    placeholder='Enter name'
                    _placeholder={{ color: 'gray.500' }}
                    color='black'
                    type='text'
                    name='name2'
                  />
                </FormControl>
                <FormControl id='contact2'>
                  <FormLabel color='black'>Contact No.</FormLabel>
                  <Input
                    type='number'
                    name='contact2'
                    variant='outline'
                    borderColor='gray.500'
                    placeholder='Enter Contact No.'
                    _placeholder={{ color: 'gray.500' }}
                    color='black'
                  />
                </FormControl>
              </SimpleGrid>
              <SimpleGrid columns={[1, 2]} spacing={2} marginBottom={1}>
                <FormControl id='email2' marginRight={2}>
                  <FormLabel color='black'>Email address</FormLabel>
                  <Input
                    variant='outline'
                    borderColor='gray.500'
                    placeholder='Email address'
                    _placeholder={{ color: 'gray.500' }}
                    color='black'
                    type='email'
                    name='email2'
                  />
                </FormControl>
                <FormControl id='college2'>
                  <FormLabel color='black'>College Name</FormLabel>
                  <Input
                    type='text'
                    name='college2'
                    variant='outline'
                    borderColor='gray.500'
                    placeholder='College Name'
                    _placeholder={{ color: 'gray.500' }}
                    color='black'
                  />
                </FormControl>
              </SimpleGrid>
              <SimpleGrid columns={[1, 2]} spacing={2}>
                <FormControl id='city2' marginRight={2}>
                  <FormLabel color='black'>City</FormLabel>
                  <Input
                    variant='outline'
                    borderColor='gray.500'
                    placeholder='Enter city'
                    _placeholder={{ color: 'gray.500' }}
                    color='black'
                    type='text'
                    name='city2'
                  />
                </FormControl>
                <FormControl id='state2'>
                  <FormLabel color='black'>State</FormLabel>
                  <Input
                    type='text'
                    name='state2'
                    variant='outline'
                    borderColor='gray.500'
                    placeholder='Enter state'
                    _placeholder={{ color: 'gray.500' }}
                    color='black'
                  />
                </FormControl>
              </SimpleGrid>
            </Box>
          ) : (
            <div></div>
          )}
          {member3 ? (
            <Box>
              <Flex>
                <Text
                  color='black'
                  fontWeight='medium'
                  fontSize='lg'
                  marginBottom={1}
                  marginRight={2}
                >
                  Team Member 3
                </Text>
                <IconButton
                  colorScheme='red'
                  aria-label='Delete'
                  size='sm'
                  icon={<DeleteIcon />}
                  onClick={deleteMember}
                />
              </Flex>
              <SimpleGrid columns={[1, 2]} spacing={2} marginBottom={1}>
                <FormControl id='name3' marginRight={2}>
                  <FormLabel color='black'>Name</FormLabel>
                  <Input
                    variant='outline'
                    borderColor='gray.500'
                    placeholder='Enter name'
                    _placeholder={{ color: 'gray.500' }}
                    color='black'
                    type='text'
                    name='name3'
                  />
                </FormControl>
                <FormControl id='contact3'>
                  <FormLabel color='black'>Contact No.</FormLabel>
                  <Input
                    type='number'
                    name='contact3'
                    variant='outline'
                    borderColor='gray.500'
                    placeholder='Enter Contact No.'
                    _placeholder={{ color: 'gray.500' }}
                    color='black'
                  />
                </FormControl>
              </SimpleGrid>
              <SimpleGrid columns={[1, 2]} spacing={2} marginBottom={1}>
                <FormControl id='email3' marginRight={2}>
                  <FormLabel color='black'>Email address</FormLabel>
                  <Input
                    variant='outline'
                    borderColor='gray.500'
                    placeholder='Email address'
                    _placeholder={{ color: 'gray.500' }}
                    color='black'
                    type='email'
                    name='email3'
                  />
                </FormControl>
                <FormControl id='college3'>
                  <FormLabel color='black'>College Name</FormLabel>
                  <Input
                    type='text'
                    name='college3'
                    variant='outline'
                    borderColor='gray.500'
                    placeholder='College Name'
                    _placeholder={{ color: 'gray.500' }}
                    color='black'
                  />
                </FormControl>
              </SimpleGrid>
              <SimpleGrid columns={[1, 2]} spacing={2}>
                <FormControl id='city3' marginRight={2}>
                  <FormLabel color='black'>City</FormLabel>
                  <Input
                    variant='outline'
                    borderColor='gray.500'
                    placeholder='Enter city'
                    _placeholder={{ color: 'gray.500' }}
                    color='black'
                    type='text'
                    name='city3'
                  />
                </FormControl>
                <FormControl id='state3'>
                  <FormLabel color='black'>State</FormLabel>
                  <Input
                    type='text'
                    name='state3'
                    variant='outline'
                    borderColor='gray.500'
                    placeholder='Enter state'
                    _placeholder={{ color: 'gray.500' }}
                    color='black'
                  />
                </FormControl>
              </SimpleGrid>
            </Box>
          ) : (
            <div></div>
          )}
          {member4 ? (
            <Box>
              <Flex>
                <Text
                  color='black'
                  fontWeight='medium'
                  fontSize='lg'
                  marginBottom={1}
                  marginRight={2}
                >
                  Team Member 4
                </Text>
                <IconButton
                  colorScheme='red'
                  aria-label='Delete'
                  size='sm'
                  icon={<DeleteIcon />}
                  onClick={deleteMember}
                />
              </Flex>
              <SimpleGrid columns={[1, 2]} spacing={2} marginBottom={1}>
                <FormControl id='name4' marginRight={2}>
                  <FormLabel color='black'>Name</FormLabel>
                  <Input
                    variant='outline'
                    borderColor='gray.500'
                    placeholder='Enter name'
                    _placeholder={{ color: 'gray.500' }}
                    color='black'
                    type='text'
                    name='name4'
                  />
                </FormControl>
                <FormControl id='contact4'>
                  <FormLabel color='black'>Contact No.</FormLabel>
                  <Input
                    type='number'
                    name='contact4'
                    variant='outline'
                    borderColor='gray.500'
                    placeholder='Enter Contact No.'
                    _placeholder={{ color: 'gray.500' }}
                    color='black'
                  />
                </FormControl>
              </SimpleGrid>
              <SimpleGrid columns={[1, 2]} spacing={2} marginBottom={1}>
                <FormControl id='email4' marginRight={2}>
                  <FormLabel color='black'>Email address</FormLabel>
                  <Input
                    variant='outline'
                    borderColor='gray.500'
                    placeholder='Email address'
                    _placeholder={{ color: 'gray.500' }}
                    color='black'
                    type='email'
                    name='email4'
                  />
                </FormControl>
                <FormControl id='college4'>
                  <FormLabel color='black'>College Name</FormLabel>
                  <Input
                    type='text'
                    name='college4'
                    variant='outline'
                    borderColor='gray.500'
                    placeholder='College Name'
                    _placeholder={{ color: 'gray.500' }}
                    color='black'
                  />
                </FormControl>
              </SimpleGrid>
              <SimpleGrid columns={[1, 2]} spacing={2}>
                <FormControl id='city4' marginRight={2}>
                  <FormLabel color='black'>City</FormLabel>
                  <Input
                    variant='outline'
                    borderColor='gray.500'
                    placeholder='Enter city'
                    _placeholder={{ color: 'gray.500' }}
                    color='black'
                    type='text'
                    name='city4'
                  />
                </FormControl>
                <FormControl id='state4'>
                  <FormLabel color='black'>State</FormLabel>
                  <Input
                    type='text'
                    name='state4'
                    variant='outline'
                    borderColor='gray.500'
                    placeholder='Enter state'
                    _placeholder={{ color: 'gray.500' }}
                    color='black'
                  />
                </FormControl>
              </SimpleGrid>
            </Box>
          ) : (
            <div></div>
          )}
          {teamLimit ? (
            <Flex justifyContent='center'>
              <Button
                bg={'#ff7e20'}
                color={'white'}
                height='50px'
                _hover={{
                  bg: 'white',
                  textColor: 'black',
                  border: '2px solid black',
                }}
                onClick={addTeamMember}
              >
                Add team member
              </Button>
            </Flex>
          ) : (
            <div></div>
          )}
        </Stack>
        <Stack
          spacing={4}
          marginLeft={2}
          marginRight={2}
          paddingLeft={2}
          paddingRight={2}
        >
          <Text color='black' marginTop={3} fontSize='xl' fontWeight='bold'>
            Project/Prototype Details
          </Text>
          <FormControl id='title'>
            <FormLabel color='black'>Title</FormLabel>
            <Input
              required
              variant='outline'
              borderColor='gray.500'
              placeholder='Project title'
              _placeholder={{ color: 'gray.500' }}
              color='black'
              type='text'
              name='title'
            />
          </FormControl>
          <FormControl id='category'>
            <FormLabel color='black'>Select Category</FormLabel>
            <Select
              placeholder='Select category'
              variant='outline'
              _placeholder={{ color: 'gray.500' }}
              color='black'
              borderColor='gray.500'
              bgColor='white'
              onChange={(e) => {
                if (e.currentTarget.value === 'option10') {
                  setOtherCategory(true)
                } else {
                  setOtherCategory(false)
                }
              }}
              required
            >
              <option value='option1'>Agriculture</option>
              <option value='option2'>Home Comfort</option>
              <option value='option3'>Ed-Tech</option>
              <option value='option4'>Design and Development</option>
              <option value='option5'>Renewable Energy</option>
              <option value='option6'>Healthcare and Sanitation</option>
              <option value='option7'>Defense and Service</option>
              <option value='option8'>Transportation</option>
              <option value='option9'>Communication</option>
              <option value='option10'>Others (Specify)</option>
            </Select>
            {othercategory ? (
              <FormControl id='otherCategory' marginTop={2}>
                <FormLabel color='black'>Specify other category</FormLabel>
                <Input
                  required={othercategory}
                  variant='outline'
                  borderColor='gray.500'
                  placeholder='Please Enter'
                  _placeholder={{ color: 'gray.500' }}
                  color='black'
                  type='text'
                  name='otherCategory'
                />
              </FormControl>
            ) : (
              <div></div>
            )}
          </FormControl>
          <Text color='black' marginTop={3} fontSize='lg' fontWeight='bold'>
            Description
          </Text>
          <FormControl id='question1'>
            <FormLabel color='black'>
              Overview (What problem does it address)
            </FormLabel>
            <Textarea
              required
              type='text'
              name='question1'
              variant='outline'
              borderColor='gray.500'
              placeholder='Please enter'
              _placeholder={{ color: 'gray.500' }}
              color='black'
            />
          </FormControl>
          <FormControl id='question2'>
            <FormLabel color='black'>
              Uniqueness (Indicate ways in which your solution is better than
              the existing solution, highlighting the unique advantages of your
              solution over the others)
            </FormLabel>
            <Textarea
              required
              type='text'
              name='question2'
              variant='outline'
              borderColor='gray.500'
              placeholder='Please enter'
              _placeholder={{ color: 'gray.500' }}
              color='black'
            />
          </FormControl>
          <FormControl id='question3'>
            <FormLabel color='black'>
              Technology Implemented (Describe your technology briefly and
              mention how you’re using it in your solution)
            </FormLabel>
            <Textarea
              required
              type='text'
              name='question3'
              variant='outline'
              borderColor='gray.500'
              placeholder='Please enter'
              _placeholder={{ color: 'gray.500' }}
              color='black'
            />
          </FormControl>
          <FormControl id='question4'>
            <FormLabel color='black'>
              Target crowd (As a startup, whom will you approach for building
              revenues, i.e., who is your paying customer? Also, do mention if
              you have had prior experience in the corporate world)
            </FormLabel>
            <Textarea
              required
              type='text'
              name='question4'
              variant='outline'
              borderColor='gray.500'
              placeholder='Please enter'
              _placeholder={{ color: 'gray.500' }}
              color='black'
            />
          </FormControl>
          <FormControl id='question5'>
            <FormLabel color='black'>
              IP Status (Have you filed an IP or patent for your solution? If
              yes, kindly explain your IP strategy)
            </FormLabel>
            <Textarea
              required
              type='text'
              name='question5'
              variant='outline'
              borderColor='gray.500'
              placeholder='Please enter'
              _placeholder={{ color: 'gray.500' }}
              color='black'
            />
          </FormControl>
          <FormControl id='question6'>
            <FormLabel color='black'>
              Partner Status (As a startup, who will be your working partner(s)
              while scaling up? (e.g.: product development, industrial firms,
              testing or validation)
            </FormLabel>
            <Textarea
              required
              type='text'
              name='question6'
              variant='outline'
              borderColor='gray.500'
              placeholder='Please enter'
              _placeholder={{ color: 'gray.500' }}
              color='black'
            />
          </FormControl>
          <Text color='black' marginTop={3} fontSize='xl' fontWeight='bold'>
            Miscellaneous Questions
          </Text>
          <FormControl id='question7'>
            <FormLabel color='black'>
              What stage is your prototype currently in? Is the prototype
              already under consideration for incubation by any other programs?
            </FormLabel>
            <Textarea
              required
              type='text'
              name='question7'
              variant='outline'
              borderColor='gray.500'
              placeholder='Please enter'
              _placeholder={{ color: 'gray.500' }}
              color='black'
            />
          </FormControl>
          <Text color='black' marginTop={3} fontSize='xl' fontWeight='bold'>
            Video Attachment
          </Text>
          <Text color='black' fontSize='md'>
            The video file should consist of a brief explanation of the
            prototype by the team members. It should clearly present the working
            state of the prototype. (Software based models are not encouraged)
            The duration should be somewhere between 5-10 minutes. The
            submission should be via google drive link.
          </Text>
          <FormControl id='video'>
            <FormLabel color='black'>Enter Video Link</FormLabel>
            <Input
              required
              type='link'
              name='video'
              variant='outline'
              borderColor='gray.500'
              placeholder='Please enter'
              _placeholder={{ color: 'gray.500' }}
              color='black'
            />
          </FormControl>
          <Flex justifyContent='center'>
            <Button
              bg={'#ff7e20'}
              color={'white'}
              type='submit'
              _hover={{
                bg: 'white',
                textColor: 'black',
                border: '2px solid black',
              }}
              onClick={addTeamMember}
            >
              Submit
            </Button>
          </Flex>
        </Stack>
      </SimpleGrid>
    </Flex>
  )
}
