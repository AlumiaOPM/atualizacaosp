//Sheet metadata:
//data[0][0] - Código do Curso
//data[0][1] - Data de Início
//data[0][2] - Inicio pt 1
//data[0][3] - Inicio pt 2
//data[0][4] - Link atual da Oferta
//data[0][5] - Data de Encerramento da Captação
//data[0][6] - Mais vendido? (Se verdadeiro, aparecerá em "mais vendidos" na home de ATU)
//data[0][7] - Thumbnail link
//data[0][8] - Botao "avise-me"
//data[0][9] - Nome do Curso
//data[0][10] - Seção (se vazio, não puxa o curso no filtro)
//data[0][11] - Link da Landing Page
//data[0][12] - Slug
//data[0][13] - Carga-horaria
//data[0][14] - Valor de Face do Curso
//data[0][15] - Alumeca?
//data[0][16] - Objetivo do curso
//data[0][17] - Para quem se destina
//data[0][18] - Programa do curso
//data[0][19] - O que você vai aprender

"use-strict";

import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getCourseDataAndThumbnails } from '../../services/api';

import NavNew from '../../components/NavNew';
import CourseInformationNew from '../../components/CourseInformationNew';
import GenericSectionNew from '../../components/GenericSectionNew';
import ParaQuemSeDestina from '../../components/ParaQuemSeDestina';
import QuandoAconteceNew from '../../components/QuandoAconteceNew';
import InvestimentoNew from '../../components/InvestimentoNew';
import DiscountBannerNew from '../../components/DiscountBannerNew';
import FooterNew from '../../components/FooterNew';
import LGPDDrawer from '../../components/LGPDDrawer';

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
  Stack,
  Button
} from '@chakra-ui/react';

export default function Course(props) {
  const history = useHistory();
  const { slug } = useParams();
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [submitLoading, setSubmitLoading] = React.useState(false);
  const [isOpen, setisOpen] = React.useState(false);
  const [fields, setFields] = React.useState({
    error: false,
    name: '',
    email: '',
    phone: '',
  });

  React.useEffect(() => {

    (async function getData() {
      const response = await getCourseDataAndThumbnails();
      const courseinformations = response.filter(item => item[12] === slug);
      if (courseinformations.length <= 0) {
        return history.push(`/404?query=${slug}`);
      }

      setData(courseinformations);
      setLoading(false);
    })()

  }, [])

  const cartLink = data[0] && data[0][4];

  const onClose = event => {
    setisOpen(false);
  };

  const handleSubmit = event => {
    console.log(event);
  };

  const handleModalOpen = event => {
    setisOpen(true);
  };

  return (
    <div className="curso">
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

      <NavNew
        loading={loading}
        courseTitle={data[0] && data[0][9]}
        cargaHoraria={data[0] && data[0][13]}
        inicio={data[0] && data[0][1]}
        handleModalOpen={handleModalOpen}
        isAlumeca={data[0] && data[0][15] === "TRUE"}
        cartLink={cartLink}
      />

      {data &&
        <CourseInformationNew
          hero={data[0] && data[0][7]}
          cartLink={cartLink}
          inicioPt2={data[0] && data[0][3]}
          sectionId="sobre-a-formacao"
        />
      }

      {data &&
        <GenericSectionNew
          title="Objetivo do curso"
          content={data[0] && data[0][16]}
        />
      }

      {data &&
        <ParaQuemSeDestina 
          content={data[0] && data[0][17]}
        />
      }

      {data &&
        <GenericSectionNew
          title="O que você vai aprender?"
          content={data[0] && data[0][18]}
        />
      }

      {data &&
        <QuandoAconteceNew
          iniciopt1={data[0] && data[0][2]}
          iniciopt2={data[0] && data[0][3]}
        />
      }

      {data &&
        <InvestimentoNew
          valor={data[0] && data[0][14]}
          cartLink={cartLink}
        />
      }

      {data &&
        <DiscountBannerNew
          cartLink={cartLink}
          handleModalOpen={handleModalOpen}
        />
      }
      <FooterNew
        courseName={data[0] && data[0][9]}
      />

      <LGPDDrawer />
    </div>
  )
}
