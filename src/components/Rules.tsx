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
import React, { useState } from 'react'
import { TiChevronRight } from 'react-icons/ti'

function Rules() {
  const [rule1, setrule1] = useState(true)
  const [rule2, setrule2] = useState(false)
  const [rule3, setrule3] = useState(false)
  const [rule4, setrule4] = useState(false)
  const [rule5, setrule5] = useState(false)
  const [rule6, setrule6] = useState(false)

  function handleChange1() {
    setrule1(!rule1)
    setrule2(false)
    setrule3(false)
    setrule4(false)
    setrule5(false)
    setrule6(false)
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
      <Flex alignItems='center' width='100%' flexDirection='column'>
        <Heading textColor='#ff7e20' marginTop={5} m={2} p={2} marginBottom={6}>
          Rules and Regulations
        </Heading>
        <Box m={2} p={2}>
          <Flex>
            <Flex
              float='left'
              flexDirection='column'
              width='50%'
              marginLeft={24}
            >
              <Flex>
                <Text
                  textColor='#ff7e20'
                  fontSize='3xl'
                  onClick={() => {
                    handleChange1()
                  }}
                >
                  Eligibility
                </Text>
                {rule1 ? (
                  <Icon
                    as={TiChevronRight}
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
                  textColor='#ff7e20'
                  fontSize='3xl'
                  onClick={() => {
                    handleChange2()
                  }}
                >
                  Participation
                </Text>
                {rule2 ? (
                  <Icon
                    as={TiChevronRight}
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
                  textColor='#ff7e20'
                  fontSize='3xl'
                  onClick={() => {
                    handleChange3()
                  }}
                >
                  Mentorship
                </Text>
                {rule3 ? (
                  <Icon
                    as={TiChevronRight}
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
                  textColor='#ff7e20'
                  fontSize='3xl'
                  onClick={() => {
                    handleChange4()
                  }}
                >
                  Judging and Evaluation
                </Text>
                {rule4 ? (
                  <Icon
                    as={TiChevronRight}
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
                  textColor='#ff7e20'
                  fontSize='3xl'
                  onClick={() => {
                    handleChange5()
                  }}
                >
                  Modified Circumstances
                </Text>
                {rule5 ? (
                  <Icon
                    as={TiChevronRight}
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
                  textColor='#ff7e20'
                  fontSize='3xl'
                  onClick={() => {
                    handleChange6()
                  }}
                >
                  Mutual Understanding
                </Text>
                {rule6 ? (
                  <Icon
                    as={TiChevronRight}
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
            <Box float='right' width='50%' marginRight={24}>
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
        </Box>
      </Flex>
    </React.Fragment>
  )
}

export default Rules
