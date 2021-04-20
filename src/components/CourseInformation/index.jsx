import React from 'react';
import { Link, Button } from '@chakra-ui/react';

import { ExternalLinkIcon } from '@chakra-ui/icons';

import Provider from '../Provider';

import './index.css';

export default function CourseInformation({ hero, cartLink }) {

  return (
    <Provider>
      <div className="flexSection">
        <div className="flexItem">
          <img src={hero} alt="Hero" />
        </div>

        <div className="flexItem">
          <ul>
            <li>
              <img src="https://www.espm.br/wp-content/themes/educationpack-child/nd-learning/assets/img/icons/icon-location-grey.svg" />
              <p>São Paulo - Joaquim Távoa</p>
            </li>
            <li>
              <img src="https://www.espm.br/wp-content/themes/educationpack-child/nd-learning/assets/img/icons/icon-typology-grey.svg" />
              <p>Aulas on-line</p>
            </li>
            <li>
              <img src="https://www.espm.br/wp-content/themes/educationpack-child/nd-learning/assets/img/icons/icon-difficulty-grey.svg" />
              <p>Atualização</p>
            </li>
            <li>
              <img src="https://www.espm.br/wp-content/themes/educationpack-child/nd-learning/assets/img/icons/icon-calendar-grey.svg" />
              <p>Aulas: ao vivo por webconferência, terça e quinta-feira</p>
            </li>
            <li>
              <img src="https://www.espm.br/wp-content/themes/educationpack-child/nd-learning/assets/img/icons/icon-price-grey.svg" />
              <p>Formas de Pagamento *À vista no boleto ou em até 10x sem juros no cartão de crédito.</p>
            </li>
          </ul>
          <Link isExternal href={cartLink}>
            <Button
              colorScheme="green"
              width="100%"
              height="54px"
              variant="solid"
            >
              QUERO ME INSCREVER
              <ExternalLinkIcon marginLeft="2"/>
            </Button>
          </Link>
        </div>
      </div>

    </Provider>
  );
};
