import React from 'react';
import { Link, Button } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

import Provider from '../../components/Provider';

import './index.css';

export default function Investimento({ valor, cartLink }) {
  const semCifrao =
    valor && valor
      .replace('R$ ', '')
      .replace('.', '')
      .replace(',', '.')

  return (
    <div className="investimento">
      <Provider>

        <div className="investimento-flexSection">
          <div className="investimento-flexItem">
            <h3>Investimento</h3>
            <div className="investimento-container">
              <p className="background-black">Valor</p>
              <p className="background-gray">Boleto</p>
              <p>{valor}</p>
              <p className="background-gray">Cartão de crédito</p>
              <p>Em até 10X <strong>R$ {Number(semCifrao) / 10},00</strong></p>
            </div>
          </div>
        </div>

        <div className="investimento-cta">
          <Link isExternal href={cartLink}>
            <Button
              colorScheme="green"
              width="100%"
              height="54px"
              variant="solid"
            >
              INSCREVER-SE
              <ExternalLinkIcon marginLeft="2" />
            </Button>
          </Link>
        </div>

      </Provider>
    </div>
  )
}
