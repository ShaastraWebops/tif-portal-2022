import * as React from 'react'
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import JMT from './pages/JMT'

export const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
      <Route exact path='/' component={Home} />
      <Route exact path='/jmt' component={JMT} />
    </Router>
  </ChakraProvider>
)
