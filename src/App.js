import React from 'react'
import Routes from './_config/routes';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import './App.css';

function App() {
  const theme = extendTheme({
    styles: {
      global: {
        body: {
          fontFamily: "Montserrat",
          color: "#5b5b5b"
        }
      }
    },
    components: {
      Button: {
        baseStyle: {
          borderRadius: "3px",
        }
      }
    },
    colors: {
      green: {
        500: '#009966',
      },
      gray: {
        500: '#EDEDED'
      }
    }
  })

  return (
    <div>
      <ChakraProvider resetCSS theme={theme}>
        <Routes />
      </ChakraProvider>
    </div>
  )
}

export default App;
