import * as React from 'react'
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import JMT from './pages/JMT'
import Login from './components/Login'
import ForgotPassword from './components/Forgotpassword'
import Register from './components/Register'
import Admin from './pages/Admin'
import Team from './pages/Team'
import Application from './components/Application'
import Verification from './components/Verification'
import VerifyOtp from './components/VerifyOtp'
import ForgotPasswordOTP from './components/ForgotpasswordOTP'

export const App = () => {
  const [role, setRole] = React.useState<any | null>("")

  return(
    <ChakraProvider theme={theme}>
    <Router>
      <Route exact path='/' component={Home} />
      <Route exact path='/jmt' component={JMT} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/forgotpassword' component={ForgotPassword} />
      <Route exact path='/forgotpasswordOTP' component={ForgotPasswordOTP} />
      <Route exact path='/register' component={Register} />
      <Route exact path='/admin' component={Admin} />
      <Route exact path ='/team/:id' component={Team}></Route>
      <Route exact path='/application' component={Application} />
      <Route exact path='/verified' component={Verification} />
      <Route exact path='/verifyOTP' component={VerifyOtp} />
    </Router>
  </ChakraProvider>
  )
}
