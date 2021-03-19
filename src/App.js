import React from 'react'
import Routes from './_config/routes';
import { TinaProvider, TinaCMS } from 'tinacms';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import './App.css';

function App() {
  const theme = extendTheme({
    styles: {
      global: {
        body:{
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
        500: '#2D8C42',
      },
      gray: {
        500: '#EDEDED'
      }
    }
  })

  const cms = new TinaCMS({
    sidebar: true,
  })

  return (
    <div>
      <TinaProvider cms={cms}>
        <ChakraProvider resetCSS theme={theme}>
          <Routes />
        </ChakraProvider>
      </TinaProvider>
    </div>
  )
}

export default App;
