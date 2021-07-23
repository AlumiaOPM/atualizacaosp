import React from 'react';
import Provider from '../Provider';
import { Link } from '@chakra-ui/react';

import { Link as LinkButton } from 'react-router-dom';

import {
  Button,
  Skeleton,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

import Disc from '../../assets/Disc2';

import logo from '../../assets/logo.jpg';

import './index.css';

export default function CourseHead({
  loading,
  courseTitle,
  handleModalOpen,
  isAlumeca,
  cartLink
}) {

  const CTADynamic = () => (
    <div>
      {loading &&
        <Skeleton height="40px" minWidth="180px" isLoaded={!loading} />
      }
      {!loading && isAlumeca &&
        <Link isExternal href={cartLink}>
          <Button
            colorScheme="black"
            variant="solid"
            background="transparent"
            border="1px solid #fff"
            borderRadius="3px"
            minWidth="180px"
            fontFamily="Open Sans"
            _hover={{
              background: "#111",
              borderColor: "#111",
            }}
          >
            INSCREVER-SE
            <ExternalLinkIcon marginLeft="2" />
          </Button>
        </Link>}
      {!loading && !isAlumeca &&
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
            borderColor: "#111",
          }}
        >
          SAIBA MAIS
        </Button>}
    </div>
  )

  return (
    <div className="header-course">

      <Provider>
        <div className="row">
          <div className="course-head">
            <div className="logo">
              <LinkButton to="/">
                <img src={logo} alt="logo" />
              </LinkButton>
              <div className="container-header-cta">
                <CTADynamic />
              </div>
            </div>

            <nav className="nav">
              <a href="#sobre-a-formacao">Sobre a formação</a>
              <a href="#programa">O Programa</a>
              <a href="#quando-acontece">Quando acontece</a>
              <a href="#investimento">Investimento</a>
              <CTADynamic />
            </nav>

          </div>
        </div>

        <div className="row">
          <h2 className="subtitle">DYNAMIC - UPDATE</h2>
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
