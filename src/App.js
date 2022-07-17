import React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import Navbar from "../src/Component/Navbar"
import AllRoutes from './Routes/AllRoutes';

function App() {
  return (
   <ChakraProvider theme={theme}>
      
      <Box textAlign="center" fontSize="xl">
        <Navbar></Navbar>
        <AllRoutes></AllRoutes>
      </Box>
    </ChakraProvider>
  );
}

export default App;
