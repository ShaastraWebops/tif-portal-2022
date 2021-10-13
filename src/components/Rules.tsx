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
import { BsChevronDoubleRight, BsChevronDoubleDown } from 'react-icons/bs'

function Rules() {
  const [rule1, setrule1] = useState(false)
  const [rule2, setrule2] = useState(false)
  const [rule3, setrule3] = useState(false)
  const [rule4, setrule4] = useState(false)
  const [rule5, setrule5] = useState(false)
  const [rule6, setrule6] = useState(false)

  return (
    <React.Fragment>
      <Box height='300px'>
        <Heading textColor='#ff7e20' marginTop={5} m={2} p={2}>
          Rules and Regulations
        </Heading>
        <Box>
          <SimpleGrid columns={[1, 1, 2]}>
            <Flex float='left' marginLeft={10} flexDirection='column'>
              <Flex>
                <Text
                  textColor='#ff7e20'
                  fontSize='3xl'
                  onClick={() => setrule1(!rule1)}
                >
                  Eligibility
                </Text>
                {rule1 ? (
                  <Icon
                    as={BsChevronDoubleRight}
                    h={7}
                    w={7}
                    marginLeft={20}
                    marginTop={2}
                  ></Icon>
                ) : (
                  <div></div>
                )}
              </Flex>
              <Flex>
                <Text
                  textColor='#ff7e20'
                  fontSize='3xl'
                  onClick={() => setrule2(!rule2)}
                >
                  Participation
                </Text>
                {rule2 ? (
                  <Icon
                    as={BsChevronDoubleRight}
                    h={7}
                    w={7}
                    marginLeft={20}
                    marginTop={2}
                  ></Icon>
                ) : (
                  <div></div>
                )}
              </Flex>
              <Flex>
                <Text
                  textColor='#ff7e20'
                  fontSize='3xl'
                  onClick={() => setrule3(!rule3)}
                >
                  Mentorship
                </Text>
                {rule3 ? (
                  <Icon
                    as={BsChevronDoubleRight}
                    h={7}
                    w={7}
                    marginLeft={20}
                    marginTop={2}
                  ></Icon>
                ) : (
                  <div></div>
                )}
              </Flex>
              <Flex>
                <Text
                  textColor='#ff7e20'
                  fontSize='3xl'
                  onClick={() => setrule4(!rule4)}
                >
                  Judging and Evaluation
                </Text>
                {rule4 ? (
                  <Icon
                    as={BsChevronDoubleRight}
                    h={7}
                    w={7}
                    marginLeft={20}
                    marginTop={2}
                  ></Icon>
                ) : (
                  <div></div>
                )}
              </Flex>
              <Flex>
                <Text
                  textColor='#ff7e20'
                  fontSize='3xl'
                  onClick={() => setrule5(!rule5)}
                >
                  Modified Circumstances
                </Text>
                {rule5 ? (
                  <Icon
                    as={BsChevronDoubleRight}
                    h={7}
                    w={7}
                    marginLeft={20}
                    marginTop={2}
                  ></Icon>
                ) : (
                  <div></div>
                )}
              </Flex>
              <Flex>
                <Text
                  textColor='#ff7e20'
                  fontSize='3xl'
                  onClick={() => setrule6(!rule6)}
                >
                  Mutual Understanding
                </Text>
                {rule6 ? (
                  <Icon
                    as={BsChevronDoubleRight}
                    h={7}
                    w={7}
                    marginLeft={20}
                    marginTop={2}
                  ></Icon>
                ) : (
                  <div></div>
                )}
              </Flex>
            </Flex>
            <Box float='right' marginRight={8} m={2} p={2}>
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
              ) : (
                <div></div>
              )}
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
    </React.Fragment>
  )
}

export default Rules
