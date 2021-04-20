import React from 'react';
import { Button, Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

import Provider from '../Provider';

import './index.css';

export default function DiscountBanner({ cartLink }) {
  return (
    <div className="discount-banner">
      <Provider>

        <div className="discount-container">
          <h3>BOLSAS DE ATÉ 20%</h3>
          <p>NO VALOR INTEGRAL DO CURSO PARA ALUNOS E EX-ALUNOS DA GRADUAÇÃO E PÓS-GRADUAÇÃO ESPM</p>
          <p>Bolsa de 5% no valor integral do curso para Alunos e Ex-alunos dos cursos de Educação Continuada da ESPM</p>

        </div>

        <div className="discount-cta">
          <p style={{margin: "20px auto"}}>Dúvidas? Converse com um de nossos consultores!</p>
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
