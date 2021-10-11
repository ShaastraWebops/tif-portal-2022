import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
      <Route exact path="/" component={Home} />
    </Router>
  </ChakraProvider>
)
