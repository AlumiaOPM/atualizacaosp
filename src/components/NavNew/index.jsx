import React from 'react';
import Provider from '../Provider';

import {
  Button,
  Skeleton,
} from '@chakra-ui/react';

import Disc from '../../assets/Disc2';

import logo from '../../assets/logo.jpg';

import './index.css';

export default function HeaderHome({
  loading,
  courseTitle,
  inicio,
  cargaHoraria,
  handleModalOpen,
  isAlumeca,
  cartLink
}) {

  return (
    <div className="header-course">

      <Provider>
        <div className="row">
          <div className="course-head">
            <div className="logo">
              <img src={logo} alt="logo" />
              <div className="container-header-cta">
                <Button
                  onClick={handleModalOpen}
                  colorScheme="black"
                  variant="solid"
                  background="transparent"
                  border="1px solid #fff"
                  borderRadius="3px"
                >
                  SAIBA MAIS
                </Button>
              </div>
            </div>

            <nav className="nav">
              <a href="#sobre-a-formacao">Sobre a formação</a>
              <a href="#programa">O Programa</a>
              <a href="#quando-acontece">Quando acontece</a>
              <a href="#investimento">Investimento</a>
              <Button
                onClick={handleModalOpen}
                colorScheme="black"
                variant="solid"
                background="transparent"
                border="1px solid #fff"
                borderRadius="3px"
                minWidth="180px"
                _hover={{
                  background: "#111",
                  borderColor: "#111"
                }}
              >
                SAIBA MAIS
              </Button>
            </nav>

          </div>
        </div>

        <div className="row">
          <h2 className="subtitle">Cursos de atualização</h2>
          <div className="title">
            <h1>{courseTitle}</h1>
            {loading && <Skeleton height="80px" width="100%" margin="80px 0px 20px 0px" isLoaded={!loading} />}
          </div>
          <h2 className="subtitle">Aulas online</h2>
        </div>
      </Provider>

      <Disc
        fill="#723090"
      />
    </div>
  )
}
