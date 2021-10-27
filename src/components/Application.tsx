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
  Alert,
  AlertIcon,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
} from '@chakra-ui/react'
import {  DeleteIcon } from '@chakra-ui/icons'
import { useCreateTeamandRegisterMutation, useFillProjectMutation, useLogoutUserMutation, useMeQuery, useUpdateProjectMutation } from '../types/generated/generated'
import { useHistory } from 'react-router'


export default function Application() {
  const [members, setMembers] = React.useState([
    {
      name: '',
      contactno: ' ',
      email: ' ',
      institution: ' ',
      city: ' ',
      state: '',
    },
  ])

  const [teamname, setTeamname] = React.useState<string>()
  const [alert, setAlert] = React.useState(false)
  const [salert, setSalert] = React.useState(false)
  const [ualert, setuAlert] = React.useState(false)

  const { data, error, loading } = useMeQuery()
  const history = useHistory()

  const handleMembersInput = ({
    index,
    event,
  }: {
    index: number
    event: React.ChangeEvent<HTMLInputElement>
  }) => {
    const values = [...members]

    if (event.target.name === 'Name') {
      values[index]['name'] = event.target.value
    } else if (event.target.name === 'contact') {
      values[index]['contactno'] = event.target.value
    } else if (event.target.name === 'email') {
      values[index]['email'] = event.target.value
    } else if (event.target.name === 'college') {
      values[index]['institution'] = event.target.value
    } else if (event.target.name === 'city') {
      values[index]['city'] = event.target.value
    } else if (event.target.name === 'state') {
      values[index]['state'] = event.target.value
    }
    setMembers(values)
  }

  const [createteam] = useCreateTeamandRegisterMutation()
  const handleaddteam = (e : any) => {
    e.preventDefault()
    createteam({
      variables: {
        createTeamAndRegisterData: {
          name: teamname!,
          members: members,
        },
      },
    })
      .then((res) => {
        if (res.data?.createTeamAndRegister) {
          setAlert(true)
        }
      })
      .catch((err) => console.log(err))
  }

  const [title, setTitle] = React.useState(' ')
  const [fillproject] = useFillProjectMutation()
  const [othercategory, setOtherCategory] = useState(false)
  const [vother , setOthers] = useState('');
  const [category, setCategory] = useState('')
  const [Q1, setQ1] = useState('')
  const [Q2, setQ2] = useState('')
  const [Q3, setQ3] = useState('')
  const [Q4, setQ4] = useState('')
  const [Q5, setQ5] = useState('')
  const [Q6, setQ6] = useState('')
  const [Q7, setQ7] = useState('')
  const [videolink, setVideolink] = useState('');
  const [teamalert , setTeamalert] = useState(false);

  const handlefillproject = (e : any) => {
    e.preventDefault();
    alert ? fillproject({
      variables: {
        ProjectInput: {
          title,
          category : othercategory ? vother : category,
          Q1,
          Q2,
          Q3,
          Q4,
          Q5,
          Q6,
          Q7,
          videolink,
        },
      },
    })
      .then((res) => {
        if (res.data?.fillProject) {
          setSalert(true)
        }
      })
      .catch((err) => console.log(err)) : setTeamalert(true) ;
  }
  
  const [updateproject] = useUpdateProjectMutation();
  const handleUpdate = async (e : any) =>{
    e.preventDefault();
    await updateproject({
      variables :{
        ProjectInput:{
          title,
          category : othercategory ? vother : category,
          Q1,
          Q2,
          Q3,
          Q4,
          Q5,
          Q6,
          Q7,
          videolink
        }
      }
    }).then(res => {
      console.log(res.data?.updateProject)
      if(res.data?.updateProject){
        setuAlert(true)
      }
    })
    .catch(err => console.log(err))
  }
  const [logout] = useLogoutUserMutation();
  var {isOpen, onOpen, onClose} = useDisclosure();
  if(salert || ualert){
   const onClose = () => {
      window.location.reload()
  }
  return(
    <Modal isOpen={salert || ualert} onClose={onClose}>
            <ModalOverlay></ModalOverlay>
            <ModalContent backgroundColor="#2e2d2d" color="#ff7e20" >
                <ModalCloseButton onClick={onClose}></ModalCloseButton>
                <ModalHeader paddingTop="4vh" borderBottom="2px solid #1c1c2bc2" margin="0 1vw" textAlign="center">
                <h2>{salert ? "Application Submitted Successfully . Thank You" : null}
                   {ualert ? " Application Updated Successfully . Thank You" : null}</h2>
                </ModalHeader>
            </ModalContent>
        </Modal>
      
  )}
  
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      backgroundColor='#2e2d2d'
      flexDirection='column'
    >
      {/* <Navbar isHome={true} isJMT={true} isLogin={false} isApp={false} />{' '} */}
      <Heading
        fontSize={'4xl'}
        textColor='#ff7e20'
        m={2}
        p={2}
        marginBottom={5}
      >
        Complete your Application
      </Heading>
      <Box width = "75%"  p={2} >
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
      {
        data?.me?.isSubmitted ? 
         <Text float={'right'} color={"#ff7e20"} fontSize={'2xl'}
         _hover={{
           cursor : "pointer"
        }}
         onClick={()=>{
           history.push(`/team/${data?.me?.team?.id}`)
         }}>View Submitted Application |</Text>
         : null   
      }
        </Box> 
      <SimpleGrid
        rounded={'lg'}
        boxShadow={'lg'}
        p={8}
        bgColor='white'
        width='75%'
      >
         {
            alert && (!salert) ? (
              <Alert status="success">
              <AlertIcon />
              Team created successfully
            </Alert>
            ) : null
     } 
       { !data?.me?.isSubmitted || data.me.team === null ? 
       <form onSubmit={handleaddteam}>
        <Stack
          spacing={4}
          marginLeft={2}
          marginRight={2}
          paddingLeft={2}
          paddingRight={2}
          width={'auto'}
        >
          <Text color='black' marginTop={3} fontSize='xl' fontWeight='bold'>
            Enter your Team Details(Once team is created you wont able to change the team members)
          </Text>
          <FormControl id='teamName' isRequired>
            <FormLabel color='black'>Team Name</FormLabel>
            <Input
              type='text'
              name='teamName'
              variant='outline'
              borderColor='gray.500'
              placeholder='Enter team name'
              _placeholder={{ color: 'gray.500' }}
              color='black'
              value={teamname}
              onChange={(e) => {
                setTeamname(e.target.value)
              }}
            />
          </FormControl>
          {
          members.map((member, index) => {
            return (

              <React.Fragment key={index}>
                
                <Box key={index}>
                  
                  <Text
                    color='black'
                    fontWeight='medium'
                    fontSize='lg'
                    marginBottom={1}
                  >
                    Team Member {index + 1}{' '}
                    {index === 0 ? '(Your Details)' : null}
                    {index === 0 ? null : (
                      <IconButton
                        m={2}
                        style={{ display: 'inline' }}
                        colorScheme='red'
                        aria-label='Delete'
                        size='sm'
                        icon={<DeleteIcon />}
                        onClick={() => {
                          const values = [...members]
                          values.splice(index, 1)
                          setMembers(values)
                        }}
                      />
                    )}
                  </Text>

                  <SimpleGrid columns={[1, 2]} spacing={2} marginBottom={1}>
                    <FormControl id='name1' marginRight={2} isRequired>
                      <FormLabel color='black'>Name</FormLabel>
                      <Input
                        variant='outline'
                        borderColor='gray.500'
                        placeholder='Enter name'
                        _placeholder={{ color: 'gray.500' }}
                        color='black'
                        type='text'
                        name='Name'
                        onChange={(event) =>
                          handleMembersInput({ index, event })
                        }
                      />
                    </FormControl>
                    <FormControl id='contact1' isRequired>
                      <FormLabel color='black'>Contact No.</FormLabel>
                      <Input
                        type='number'
                        name='contact'
                        variant='outline'
                        borderColor='gray.500'
                        placeholder='Enter Contact No.'
                        _placeholder={{ color: 'gray.500' }}
                        color='black'
                        onChange={(event) =>
                          handleMembersInput({ index, event })
                        }
                      />
                    </FormControl>
                  </SimpleGrid>
                  <SimpleGrid columns={[1, 2]} spacing={2} marginBottom={1}>
                    <FormControl id='email1' marginRight={2} isRequired>
                      <FormLabel color='black'>
                        Email address
                        {index === 0 ? '(registration mail)' : null}
                      </FormLabel>
                      <Input
                        variant='outline'
                        borderColor='gray.500'
                        placeholder='Email address'
                        _placeholder={{ color: 'gray.500' }}
                        color='black'
                        type='email'
                        name='email'
                        onChange={(event) =>
                          handleMembersInput({ index, event })
                        }
                      />
                    </FormControl>
                    <FormControl id='college1' isRequired>
                      <FormLabel color='black'>College Name</FormLabel>
                      <Input
                        type='text'
                        name='college'
                        variant='outline'
                        borderColor='gray.500'
                        placeholder='College Name'
                        _placeholder={{ color: 'gray.500' }}
                        color='black'
                        onChange={(event) =>
                          handleMembersInput({ index, event })
                        }
                      />
                    </FormControl>
                  </SimpleGrid>
                  <SimpleGrid columns={[1, 2]} spacing={2}>
                    <FormControl id='city1' marginRight={2} isRequired>
                      <FormLabel color='black'>City</FormLabel>
                      <Input
                        variant='outline'
                        borderColor='gray.500'
                        placeholder='Enter city'
                        _placeholder={{ color: 'gray.500' }}
                        color='black'
                        type='text'
                        name='city'
                        onChange={(event) =>
                          handleMembersInput({ index, event })
                        }
                      />
                    </FormControl>
                    <FormControl id='state1' isRequired>
                      <FormLabel color='black'>State</FormLabel>
                      <Input
                        type='text'
                        name='state'
                        variant='outline'
                        borderColor='gray.500'
                        placeholder='Enter state'
                        _placeholder={{ color: 'gray.500' }}
                        color='black'
                        onChange={(event) =>
                          handleMembersInput({ index, event })
                        }
                      />
                    </FormControl>
                  </SimpleGrid>
                </Box>
              </React.Fragment>
            )
          })}

            <Flex justifyContent='center'>
            {
              members.length < 4 && !alert ? (
              <Button
                bg={'#ff7e20'}
                color={'white'}
                height='50px'
                _hover={{
                  bg: 'white',
                  textColor: 'black',
                  border: '2px solid black',
                }}
                onClick={() =>
                  setMembers([
                    ...members,
                    {
                      name: '',
                      contactno: ' ',
                      email: ' ',
                      institution: ' ',
                      city: ' ',
                      state: '',
                    },
                  ])
                }
              >
                Add team member
              </Button>
              ) : (
            <div></div>
          )}
              { !alert ? <Button
                mx={2}
                bg={'#ff7e20'}
                color={'white'}
                height='50px'
                type='submit'
                _hover={{
                  bg: 'white',
                  textColor: 'black',
                  border: '2px solid black',
                }}
              >
                Confirm Team
              </Button> : null }
            </Flex>
        </Stack></form>: null
       }
      
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
          <form onSubmit={data?.me?.isSubmitted && data.me.team !== null ? handleUpdate : handlefillproject}>
          <FormControl id='title' isRequired>
            <FormLabel color='black'>Title</FormLabel>
            <Input
              aria-required = {true}
              variant='outline'
              borderColor='gray.500'
              placeholder='Project title'
              _placeholder={{ color: 'gray.500' }}
              color='black'
              type='text'
              name='title'
              onChange={(e) => setTitle(e.target.value)}
            />
          </FormControl>
          <FormControl id='category' isRequired>
            <FormLabel color='black'>Select Category</FormLabel>
            <Select
              placeholder='Select category'
              variant='outline'
              _placeholder={{ color: 'gray.500' }}
              color='black'
              borderColor='gray.500'
              bgColor='white'
              value={category}
              onChange={(e) => {
                if (e.currentTarget.value === 'Others') {
                  setCategory('Others')
                  setOtherCategory(true)
                } else {
                  setCategory(e.currentTarget.value)
                  setOtherCategory(false)
                }
              }}
              required
            >
              <option value='Agriculture'>Agriculture</option>
              <option value='Home Comfort'>Home Comfort</option>
              <option value='Ed-Tech'>Ed-Tech</option>
              <option value='Design and Development'>
                Design and Development
              </option>
              <option value='Renewable Energy'>Renewable Energy</option>
              <option value='Healthcare and Sanitation'>
                Healthcare and Sanitation
              </option>
              <option value='Defense and Service'>Defense and Service</option>
              <option value='Transportation'>Transportation</option>
              <option value='Communication'>Communication</option>
              <option value='Others'>Others (Specify)</option>
            </Select>
            {othercategory ? (
              <FormControl id='otherCategory' marginTop={2} isRequired>
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
                  value={vother}
                  onChange={(e) => setOthers(e.currentTarget.value)}
                />
              </FormControl>
            ) : (
              <div></div>
            )}
          </FormControl>
          <Text color='black' marginTop={3} fontSize='lg' fontWeight='bold'>
            Description
          </Text>
          <FormControl id='question1' isRequired>
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
              value={Q1}
              onChange={(e) => setQ1(e.target.value)}
            />
          </FormControl>
          <FormControl id='question2' isRequired>
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
              value={Q2}
              onChange={(e) => setQ2(e.target.value)}
            />
          </FormControl>
          <FormControl id='question3' isRequired>
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
              value={Q3}
              onChange={(e) => setQ3(e.target.value)}
            />
          </FormControl>
          <FormControl id='question4' isRequired>
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
              value={Q4}
              onChange={(e) => setQ4(e.target.value)}
            />
          </FormControl>
          <FormControl id='question5' isRequired>
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
              value={Q5}
              onChange={(e) => setQ5(e.target.value)}
            />
          </FormControl>
          <FormControl id='question6' isRequired>
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
              value={Q6}
              onChange={(e) => setQ6(e.target.value)}
            />
          </FormControl>
          <Text color='black' marginTop={3} fontSize='xl' fontWeight='bold'>
            Miscellaneous Questions
          </Text>
          <FormControl id='question7' isRequired>
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
              value={Q7}
              onChange={(e) => setQ7(e.target.value)}
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
          <FormControl id='video' isRequired>
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
              value={videolink}
              onChange={(e) => setVideolink(e.target.value)}
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
            >
              {data?.me?.isSubmitted && data.me.team !== null ? "Update" : "Submit"}
            </Button>
            
          </Flex>
          </form>
          {
              teamalert ? ( <Alert status="error" textColor={'black'}>
              <AlertIcon />
              Create Team and Register
            </Alert>) : null
            }
        </Stack>
      </SimpleGrid>
    </Flex>
  )
}
