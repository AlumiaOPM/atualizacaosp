import React from 'react';
import Provider from '../../components/Provider';

import { Button } from '@chakra-ui/react';

import waves from '../../assets/waves.png';

import './index.css';

export default function CTAFooter() {
  return (
    <div className="cta-footer">
      <Provider>

        <div className="cta-footer-container">
          <p>Dúvidas? Converse com um de nossos consultores!</p>
          <Button
            colorScheme="black"
            width="100%"
            height="54px"
            variant="solid"
            margin="20px auto 28px auto"
          >
            QUERO FALAR COM UM CONSULTOR
          </Button>

          <img src={waves} />
        </div>

      </Provider>
    </div>
  )
}
