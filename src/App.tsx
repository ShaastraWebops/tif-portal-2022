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
import Login from './components/Login'
import ForgotPassword from './components/Forgotpassword'
import Register from './components/Register'

export const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
      <Route exact path='/' component={Home} />
      <Route exact path='/jmt' component={JMT} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/forgotpassword' component={ForgotPassword} />
      <Route exact path='/register' component={Register} />
    </Router>
  </ChakraProvider>
)
