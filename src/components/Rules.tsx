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
  UnorderedList,
  ListItem,
  Icon,
} from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import { TiChevronRight } from 'react-icons/ti'
import { FaChevronDown } from 'react-icons/fa'
import '../styles/Rules.css'

function Rules() {
  const [rule1, setrule1] = useState(true)
  const [rule2, setrule2] = useState(false)
  const [rule3, setrule3] = useState(false)
  const [rule4, setrule4] = useState(false)
  const [rule5, setrule5] = useState(false)
  const [rule6, setrule6] = useState(false)
  const [color1, setcolor1] = useState('#ff7e20')
  const [color2, setcolor2] = useState('#ff7e20')
  const [color3, setcolor3] = useState('#ff7e20')
  const [color4, setcolor4] = useState('#ff7e20')
  const [color5, setcolor5] = useState('#ff7e20')
  const [color6, setcolor6] = useState('#ff7e20')

  useEffect(() => {
    if (rule1 === true) {
      setcolor1('white')
    } else {
      setcolor1('#ff7e20')
    }
    if (rule2 === true) {
      setcolor2('white')
    } else {
      setcolor2('#ff7e20')
    }
    if (rule3 === true) {
      setcolor3('white')
    } else {
      setcolor3('#ff7e20')
    }
    if (rule4 === true) {
      setcolor4('white')
    } else {
      setcolor4('#ff7e20')
    }
    if (rule5 === true) {
      setcolor5('white')
    } else {
      setcolor5('#ff7e20')
    }
    if (rule6 === true) {
      setcolor6('white')
    } else {
      setcolor6('#ff7e20')
    }
  }, [rule1, rule2, rule3, rule4, rule5, rule6])

  function handleChange1() {
    setrule1(!rule1)
    setrule2(false)
    setrule3(false)
    setrule4(false)
    setrule5(false)
    setrule6(false)
    setcolor1('white')
  }

  function handleChange2() {
    setrule2(!rule2)
    setrule1(false)
    setrule3(false)
    setrule4(false)
    setrule5(false)
    setrule6(false)
  }

  function handleChange3() {
    setrule3(!rule3)
    setrule1(false)
    setrule2(false)
    setrule4(false)
    setrule5(false)
    setrule6(false)
  }
  function handleChange4() {
    setrule4(!rule4)
    setrule1(false)
    setrule2(false)
    setrule3(false)
    setrule5(false)
    setrule6(false)
  }
  function handleChange5() {
    setrule5(!rule5)
    setrule1(false)
    setrule2(false)
    setrule3(false)
    setrule4(false)
    setrule6(false)
  }
  function handleChange6() {
    setrule6(!rule6)
    setrule1(false)
    setrule2(false)
    setrule4(false)
    setrule5(false)
    setrule3(false)
  }

  return (
    <React.Fragment>
      <Flex
        alignItems='center'
        width='100%'
        flexDirection='column'
        justifyContent='center'
        maxWidth='100%'
        overflowX='hidden'
      >
        <Heading textColor='#ff7e20' p={2} marginBottom={6}>
          Rules and Regulations
        </Heading>
        <Box marginBottom={3} p={2} marginTop={15}>
          <Flex className='desktop-ctn'>
            <Flex
              float='left'
              flexDirection='column'
              width='50%'
              marginLeft={12}
            >
              <Flex>
                <Text
                  id='rule1'
                  textColor={color1}
                  fontSize='3xl'
                  onClick={() => {
                    handleChange1()
                  }}
                  _hover={{
                    textColor: 'white',
                  }}
                >
                  Eligibility
                </Text>
                {rule1 ? (
                  <Icon
                    as={TiChevronRight}
                    color='white'
                    h={10}
                    w={10}
                    marginLeft={5}
                    marginTop={1}
                  ></Icon>
                ) : (
                  <div></div>
                )}
              </Flex>
              <Flex>
                <Text
                  fontSize='3xl'
                  textColor={color2}
                  onClick={() => {
                    handleChange2()
                  }}
                  _hover={{
                    textColor: 'white',
                  }}
                >
                  Participation
                </Text>
                {rule2 ? (
                  <Icon
                    as={TiChevronRight}
                    color='white'
                    h={10}
                    w={10}
                    marginLeft={5}
                    marginTop={1}
                  ></Icon>
                ) : (
                  <div></div>
                )}
              </Flex>
              <Flex>
                <Text
                  textColor={color3}
                  fontSize='3xl'
                  onClick={() => {
                    handleChange3()
                  }}
                  _hover={{
                    textColor: 'white',
                  }}
                >
                  Mentorship
                </Text>
                {rule3 ? (
                  <Icon
                    as={TiChevronRight}
                    color='white'
                    h={10}
                    w={10}
                    marginLeft={5}
                    marginTop={1}
                  ></Icon>
                ) : (
                  <div></div>
                )}
              </Flex>
              <Flex>
                <Text
                  textColor={color4}
                  fontSize='3xl'
                  onClick={() => {
                    handleChange4()
                  }}
                  _hover={{
                    textColor: 'white',
                  }}
                >
                  Judging and Evaluation
                </Text>
                {rule4 ? (
                  <Icon
                    as={TiChevronRight}
                    color='white'
                    h={10}
                    w={10}
                    marginLeft={5}
                    marginTop={1}
                  ></Icon>
                ) : (
                  <div></div>
                )}
              </Flex>
              <Flex>
                <Text
                  textColor={color5}
                  fontSize='3xl'
                  onClick={() => {
                    handleChange5()
                  }}
                  _hover={{
                    textColor: 'white',
                  }}
                >
                  Modified Circumstances
                </Text>
                {rule5 ? (
                  <Icon
                    as={TiChevronRight}
                    color='white'
                    h={10}
                    w={10}
                    marginLeft={5}
                    marginTop={1}
                  ></Icon>
                ) : (
                  <div></div>
                )}
              </Flex>
              <Flex>
                <Text
                  textColor={color6}
                  fontSize='3xl'
                  onClick={() => {
                    handleChange6()
                  }}
                  _hover={{
                    textColor: 'white',
                  }}
                >
                  Mutual Understanding
                </Text>
                {rule6 ? (
                  <Icon
                    as={TiChevronRight}
                    color='white'
                    h={10}
                    w={10}
                    marginLeft={5}
                    marginTop={1}
                  ></Icon>
                ) : (
                  <div></div>
                )}
              </Flex>
            </Flex>
            <Box
              float='right'
              width='50%'
              marginRight={24}
              textColor='white'
              fontSize={'xl'}
            >
              {rule1 ? (
                <UnorderedList>
                  <ListItem>
                    The Competition is open to all currently enrolled college
                    students: All undergraduates from various programs,
                    Postgraduates and Ph.D. Research Scholars.
                  </ListItem>
                  <ListItem>
                    Early-stage startups are also eligible for the competition.
                  </ListItem>
                  <ListItem>
                    Teams should strictly have a hardware prototype while they
                    are registering for the event. App-based startups and
                    services are not eligible to apply for the event.
                  </ListItem>
                  <ListItem>
                    The competition accepts qualified teams, new ventures, or
                    significant expansion of existing business based on the
                    following condition: Proposed technology solution should
                    promise major innovation and expansion.
                  </ListItem>
                </UnorderedList>
              ) : rule2 ? (
                <UnorderedList>
                  <ListItem>
                    Shortlisted teams should be present and must participate in
                    all webinars and workshops conducted online and during
                    Shaastra.
                  </ListItem>
                  <ListItem>
                    Ignorance of the above criteria can lead to the elimination
                    of the team and discontinuation from the further process.
                  </ListItem>
                </UnorderedList>
              ) : rule3 ? (
                <UnorderedList>
                  <ListItem>
                    Professional and Guided mentorship will be provided to the
                    shortlisted teams.
                  </ListItem>
                  <ListItem>
                    Teams are highly encouraged to seek faculty, business, and
                    technical mentors assigned to them and are strongly advised
                    to develop a solid business plan and an idea of their market
                    by the end of the online mentoring sessions.
                  </ListItem>
                  <ListItem>
                    The freedom of seeking advice or suggestions is up to the
                    team and its members. If the team doesn't require the help
                    of a mentor, they must inform the organising team at the
                    earliest to eliminate futility.
                  </ListItem>
                  <ListItem>
                    Severe consequences (including discontinuation from the
                    process) shall be imposed on teams indulging in unfair means
                    or behaviour towards their mentors.
                  </ListItem>
                </UnorderedList>
              ) : rule4 ? (
                <UnorderedList>
                  <ListItem>
                    Each business plan and solution developed will be judged by
                    a group of entrepreneurs, venture capitalists, and business
                    professionals at the event's culmination.
                  </ListItem>
                  <ListItem>
                    The judges will evaluate your business plans and technology
                    as they would evaluate any business opportunity.
                  </ListItem>
                  <ListItem>
                    The decisions of the judging panel are final and have the
                    sole authority to determine the winners.
                  </ListItem>
                </UnorderedList>
              ) : rule5 ? (
                <UnorderedList>
                  <ListItem>
                    The above-mentioned guidelines and norms cannot anticipate
                    every circumstance, provided the organisers reserve the
                    right to modify these rules and regulations in any manner
                    for the well-being of the competition.
                  </ListItem>
                  <ListItem>
                    Any team that violates not only the rules and regulations
                    but the spirit of the competition may be disqualified
                    resulting in forfeiture of awards and prize money.
                  </ListItem>
                  <ListItem>
                    Inquiries related to eligibility can be sent to the contact
                    details mentioned in the website.
                  </ListItem>
                </UnorderedList>
              ) : rule6 ? (
                <UnorderedList>
                  <ListItem>
                    We reserve the right to use any information gathered during
                    the course of this event for our future promotions and
                    academic purpose.
                  </ListItem>
                  <ListItem>
                    All affiliates and the organizers of the Competition retain
                    the right to use all competition materials to promote the
                    events and for general academic purposes.
                  </ListItem>
                  <ListItem>
                    Under no circumstances shall the organising team sign any
                    sort of Non-Disclosure agreement with the teams.
                  </ListItem>
                </UnorderedList>
              ) : (
                <div></div>
              )}
            </Box>
          </Flex>
          <Box className='mobile-ctn'>
            <Flex
              flexDirection='column'
              alignItems='center'
              justifyContent='center'
              textAlign='center'
            >
              <Flex>
                <Text
                  id='rule1'
                  textColor={color1}
                  fontSize='3xl'
                  onClick={() => {
                    handleChange1()
                  }}
                  _hover={{
                    textColor: 'white',
                  }}
                >
                  Eligibility
                </Text>
                {rule1 ? (
                  <Icon
                    as={FaChevronDown}
                    color='white'
                    h={8}
                    w={8}
                    marginLeft={3}
                    marginTop={3}
                  ></Icon>
                ) : (
                  <div></div>
                )}
              </Flex>
              {rule1 ? (
                <UnorderedList marginLeft={5} marginRight={5} padding={2}>
                  <ListItem>
                    The Competition is open to all currently enrolled college
                    students: All undergraduates from various programs,
                    Postgraduates and Ph.D. Research Scholars.
                  </ListItem>
                  <ListItem>
                    Early-stage startups are also eligible for the competition.
                  </ListItem>
                  <ListItem>
                    Teams should strictly have a hardware prototype while they
                    are registering for the event. App-based startups and
                    services are not eligible to apply for the event.
                  </ListItem>
                  <ListItem>
                    The competition accepts qualified teams, new ventures, or
                    significant expansion of existing business based on the
                    following condition: Proposed technology solution should
                    promise major innovation and expansion.
                  </ListItem>
                </UnorderedList>
              ) : (
                <div></div>
              )}
              <Flex>
                <Text
                  fontSize='3xl'
                  textColor={color2}
                  onClick={() => {
                    handleChange2()
                  }}
                  _hover={{
                    textColor: 'white',
                  }}
                >
                  Participation
                </Text>
                {rule2 ? (
                  <Icon
                    as={FaChevronDown}
                    color='white'
                    h={8}
                    w={8}
                    marginLeft={3}
                    marginTop={3}
                  ></Icon>
                ) : (
                  <div></div>
                )}
              </Flex>
              {rule2 ? (
                <UnorderedList marginLeft={5} marginRight={5} padding={2}>
                  <ListItem>
                    Shortlisted teams should be present and must participate in
                    all webinars and workshops conducted online and during
                    Shaastra.
                  </ListItem>
                  <ListItem>
                    Ignorance of the above criteria can lead to the elimination
                    of the team and discontinuation from the further process.
                  </ListItem>
                </UnorderedList>
              ) : (
                <div></div>
              )}
              <Flex>
                <Text
                  textColor={color3}
                  fontSize='3xl'
                  onClick={() => {
                    handleChange3()
                  }}
                  _hover={{
                    textColor: 'white',
                  }}
                >
                  Mentorship
                </Text>
                {rule3 ? (
                  <Icon
                    as={FaChevronDown}
                    color='white'
                    h={8}
                    w={8}
                    marginLeft={3}
                    marginTop={3}
                  ></Icon>
                ) : (
                  <div></div>
                )}
              </Flex>
              {rule3 ? (
                <UnorderedList marginLeft={5} marginRight={5} padding={2}>
                  <ListItem>
                    Professional and Guided mentorship will be provided to the
                    shortlisted teams.
                  </ListItem>
                  <ListItem>
                    Teams are highly encouraged to seek faculty, business, and
                    technical mentors assigned to them and are strongly advised
                    to develop a solid business plan and an idea of their market
                    by the end of the online mentoring sessions.
                  </ListItem>
                  <ListItem>
                    The freedom of seeking advice or suggestions is up to the
                    team and its members. If the team doesn't require the help
                    of a mentor, they must inform the organising team at the
                    earliest to eliminate futility.
                  </ListItem>
                </UnorderedList>
              ) : (
                <div></div>
              )}
              <Flex>
                <Text
                  textColor={color4}
                  fontSize='3xl'
                  onClick={() => {
                    handleChange4()
                  }}
                  _hover={{
                    textColor: 'white',
                  }}
                >
                  Judging and Evaluation
                </Text>
                {rule4 ? (
                  <Icon
                    as={FaChevronDown}
                    color='white'
                    h={8}
                    w={8}
                    marginLeft={3}
                    marginTop={3}
                  ></Icon>
                ) : (
                  <div></div>
                )}
              </Flex>
              {rule4 ? (
                <UnorderedList marginLeft={5} marginRight={5} padding={2}>
                  <ListItem>
                    Each business plan and solution developed will be judged by
                    a group of entrepreneurs, venture capitalists, and business
                    professionals at the event's culmination.
                  </ListItem>
                  <ListItem>
                    The judges will evaluate your business plans and technology
                    as they would evaluate any business opportunity.
                  </ListItem>
                  <ListItem>
                    The decisions of the judging panel are final and have the
                    sole authority to determine the winners.
                  </ListItem>
                </UnorderedList>
              ) : (
                <div></div>
              )}
              <Flex>
                <Text
                  textColor={color5}
                  fontSize='3xl'
                  onClick={() => {
                    handleChange5()
                  }}
                  _hover={{
                    textColor: 'white',
                  }}
                >
                  Modified Circumstances
                </Text>
                {rule5 ? (
                  <Icon
                    as={FaChevronDown}
                    color='white'
                    h={8}
                    w={8}
                    marginLeft={3}
                    marginTop={3}
                  ></Icon>
                ) : (
                  <div></div>
                )}
              </Flex>
              {rule5 ? (
                <UnorderedList marginLeft={5} marginRight={5} padding={2}>
                  <ListItem>
                    The above-mentioned guidelines and norms cannot anticipate
                    every circumstance, provided the organisers reserve the
                    right to modify these rules and regulations in any manner
                    for the well-being of the competition.
                  </ListItem>
                  <ListItem>
                    Any team that violates not only the rules and regulations
                    but the spirit of the competition may be disqualified
                    resulting in forfeiture of awards and prize money.
                  </ListItem>
                  <ListItem>
                    Inquiries related to eligibility can be sent to the contact
                    details mentioned in the website.
                  </ListItem>
                </UnorderedList>
              ) : (
                <div></div>
              )}
              <Flex>
                <Text
                  textColor={color6}
                  fontSize='3xl'
                  onClick={() => {
                    handleChange6()
                  }}
                  _hover={{
                    textColor: 'white',
                  }}
                >
                  Mutual Understanding
                </Text>
                {rule6 ? (
                  <Icon
                    as={FaChevronDown}
                    color='white'
                    h={8}
                    w={8}
                    marginLeft={3}
                    marginTop={3}
                  ></Icon>
                ) : (
                  <div></div>
                )}
              </Flex>
              {rule6 ? (
                <UnorderedList marginLeft={5} marginRight={5} padding={2}>
                  <ListItem>
                    We reserve the right to use any information gathered during
                    the course of this event for our future promotions and
                    academic purpose.
                  </ListItem>
                  <ListItem>
                    All affiliates and the organizers of the Competition retain
                    the right to use all competition materials to promote the
                    events and for general academic purposes.
                  </ListItem>
                  <ListItem>
                    Under no circumstances shall the organising team sign any
                    sort of Non-Disclosure agreement with the teams.
                  </ListItem>
                </UnorderedList>
              ) : (
                <div></div>
              )}
            </Flex>
          </Box>
        </Box>
      </Flex>
    </React.Fragment>
  )
}

export default Rules
