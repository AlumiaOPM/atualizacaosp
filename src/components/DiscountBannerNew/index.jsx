import React from 'react';
import { Button, Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

import Provider from '../Provider';

import './index.css';

export default function DiscountBannerNew({ cartLink, handleModalOpen }) {
  const Stamp = ({discount, text}) => {
    return (
      <div className="stamp">
        <div className="stamp-before"></div>
        <div className="stamp-content">
          <div className="stamp-discount">
            <p><span>{discount}%</span> <br/> de bolsa</p>
          </div>
          <div className="stamp-text">
            <p>{text}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="discount-banner">
      <Provider>

        <div className="discount-container">
          <Stamp 
            discount={20}
            text="No valor integral do curso para Alunos e Ex-alunos da Graduação e Pós-Graduação ESPM"
          />
          <Stamp 
            discount={5}
            text="No valor integral do curso para Alunos e Ex-alunos dos cursos de Educação Continuada da ESPM"
          />
        </div>

      </Provider>
    </div>
  )
}
