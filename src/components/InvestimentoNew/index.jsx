import React from 'react';
import { Link, Button } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

import Provider from '../../components/Provider';

import { FaRegFileAlt, FaRegCreditCard } from 'react-icons/fa';
import { IconContext } from 'react-icons';

import './index.css';

export default function Investimento({ valor, cartLink, sectionId, handleModalOpen }) {
  const semCifrao =
    valor && valor
      .replace('R$ ', '')
      .replace('.', '')
      .replace(',', '.')


  const formattedPrice = `R$ ${((Number(semCifrao) / 10).toFixed(2)).replace('.', ',')}`

  return (
    <div className="investimento" id={sectionId}>
      <Provider>

        <div className="investimento-new">

          <div className="investimento-title">
            <h3>Investimento</h3>
          </div>
          <div>
            <div className="investimento-flexSection">

              <div className="investimento-flexItem">
                <IconContext.Provider value={{
                  size: 50,
                  color: "#A80532",
                }}>
                  <FaRegFileAlt />
                </IconContext.Provider>
                <h3>Boleto bancário</h3>
                <p>{valor}</p>
              </div>

              <div className="investimento-flexItem">
                <IconContext.Provider value={{
                  size: 50,
                  color: "#A80532"
                }}>
                  <FaRegCreditCard />
                </IconContext.Provider>
                <h3>Cartão de crédito</h3>
                <p>Em até <span>10 x {formattedPrice}</span></p>
              </div>

            </div>
          </div>

          <div className="investimento-new-cta">
            <Link>
              <Button
                colorScheme="black"
                width="100%"
                height="54px"
                variant="solid"
                onClick={handleModalOpen}
              >
                INSCREVER-SE
              <ExternalLinkIcon marginLeft="2" />
              </Button>
            </Link>
          </div>

        </div>

      </Provider>
    </div>
  )
}
