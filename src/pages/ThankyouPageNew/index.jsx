import React from 'react';
import { useParams, Link } from 'react-router-dom';

import { Button } from '@chakra-ui/react';
import { ArrowLeftIcon } from '@chakra-ui/icons';

import './index.css';

export default function ThankyouPage(props) {
  const { slug } = useParams();

  return (
    <>
      { window.location.pathname !== "/obrigado/formacao-em-marketing-product-management-parceria-le-wagon" ?
      <div>
      <div id="thankyou-page">
        <div>
        </div>
        <div className="thankyou-page-container">
          <h2>Obrigado!</h2>

          <p>Agradecemos por entrar em contato, nossos consultores estão ansiosos em te atender!</p>
          <Link to={`/${slug}`}>
            <Button
              colorScheme="black"
              variant="solid"
              background="transparent"
              border="1px solid #fff"
              borderRadius="3px"
              margin="20px auto"
              minWidth="180px"
              fontFamily="Open Sans"
              zIndex="9999999"
              _hover={{
                background: "#111",
                borderColor: "#111",
              }}
            >
              <ArrowLeftIcon marginRight="2" />
              VOLTAR
            </Button>
          </Link>
        </div>
      </div>
    </div>
      :
      <div>
      <div id="thankyou-page-leWagon">
        <div>
        </div>
        <div className="thankyou-page-leWagon-container">
          <h2>Obrigado!</h2>

          <p>Agradecemos por entrar em contato, nossos consultores estão ansiosos em te atender!</p>
          <Link to={`/${slug}`}>
            <Button
              colorScheme="black"
              variant="solid"
              background="transparent"
              border="1px solid #fff"
              borderRadius="3px"
              margin="20px auto"
              minWidth="180px"
              fontFamily="Open Sans"
              zIndex="9999999"
              _hover={{
                background: "#111",
                borderColor: "#111",
              }}
            >
              <ArrowLeftIcon marginRight="2" />
              VOLTAR
            </Button>
          </Link>
        </div>
      </div>
    </div>
    }
    </>
  )
}
