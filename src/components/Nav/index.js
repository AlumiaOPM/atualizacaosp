import React from 'react';
import Provider from '../Provider';

import { IconContext } from 'react-icons';
import { Skeleton } from '@chakra-ui/skeleton';
import { Button } from '@chakra-ui/button';

import {
  ModalHeader,
  ModalOverlay,
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Input,
  FormControl,
  Stack
} from '@chakra-ui/react';
import { FaRegCalendarAlt, FaRegClock } from 'react-icons/fa';

import './index.css';

export default function HeaderHome({ loading, courseTitle, inicio, cargaHoraria }) {
  const focusInputRef = React.useRef();
  const [isOpen, setIsOpen] = React.useState(false);
  const [submitLoading, setSubmitLoading] = React.useState(false);
  const [fields, setFields] = React.useState({
    error: false,
    name: '',
    email: '',
    phone: '',
  });

  const onClose = event => {
    setIsOpen(false);
  };

  const handleModalOpen = event => {
    setIsOpen(true);
  };

  const handleSubmit = event => {
    console.log(event);
  }

  return (
    <div className="header-course">
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        motionPreset="slideInBottom"
        blockScrollOnMount={false}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <p>Inscreva-se e entraremos <br></br>em contato!</p>
          </ModalHeader>
          <ModalCloseButton />

          <form onSubmit={handleSubmit}>
            <ModalBody>
              <Stack spacing={6}>
                <FormControl isRequired>
                  <Input
                    placeholder="Nome completo"
                    type="text"
                    onChange={e => setFields({ ...fields, name: e.target.value })}
                    ref={focusInputRef}
                  />
                </FormControl>
                <FormControl isRequired>
                  <Input
                    placeholder="email@example.com"
                    type="email"
                    onChange={e => setFields({ ...fields, email: e.target.value })}
                  />
                </FormControl>
                <FormControl isRequired>
                  <Input
                    placeholder="DDD e telefone"
                    type="tel"
                    onChange={e => setFields({ ...fields, phone: e.target.value })}
                  />
                </FormControl>
              </Stack>
            </ModalBody>
            <ModalFooter>
              <div className="modal-cta">
                <Button
                  w="100%"
                  margin="0px"
                  colorScheme="green"
                  mr={3}
                  type="submit"
                  isLoading={submitLoading}
                >
                  ENVIAR
                </Button>
              </div>
            </ModalFooter>
          </form>

        </ModalContent>
      </Modal>

      <Provider>
        <div className="row">
          <div className="course-head">
            <div className="logo">
              <img src={"../img/logo.jpg"} alt="logo" />
            </div>
            <nav className="nav">
              <a href="#">Sobre a formação</a>
              <a href="#">O Programa</a>
              <a href="#">Quando acontece</a>
              <a href="#">Investimento</a>
            </nav>
          </div>
        </div>

        <div className="row">
          <div className="title">
            <h1>{courseTitle}</h1>
            {loading && <Skeleton height="40px" margin="80px 0px 20px 0px" isLoaded={!loading} />}

            <div className="inicio">
              <p>
                {!loading && <IconContext.Provider value={{ size: "40", color: "#f1f1f1" }}><FaRegCalendarAlt /></IconContext.Provider>}
                {inicio}
                {loading && <Skeleton height="50px" width="100%" />}
              </p>
              <p>
                {!loading && <IconContext.Provider value={{ size: "40", color: "#f1f1f1" }}><FaRegClock /></IconContext.Provider>}
                {cargaHoraria}
                {loading && <Skeleton height="50px" width="100%" />}
              </p>
            </div>

            <div className="cta">
              <Button
                colorScheme="green"
                size="lg"
                width="100%"
                height="54px"
                onClick={handleModalOpen}
              >SAIBA MAIS</Button>
            </div>
          </div>
        </div>
      </Provider>

    </div>
  )
}
