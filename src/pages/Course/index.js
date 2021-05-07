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
//data[0][20] - formId

"use-strict";

import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getCourseDataAndThumbnails } from '../../services/api';

import Nav from '../../components/Nav';
import CourseInformation from '../../components/CourseInformation';
import GenericSection from '../../components/GenericSection';
import QuandoAcontece from '../../components/QuandoAcontece';
import Investimento from '../../components/Investimento';
import DiscountBanner from '../../components/DiscountBanner';
import Footer from '../../components/Footer';
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
    nome_completo: '',
    email: '',
    mobilephone: '',
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

  const handleSubmit = async event => {
    setSubmitLoading(true);
    event.preventDefault();

    const payload = {
      "submittedAt": Date.now(),
      "fields": [
        {
          "name": "firstname",
          "value": fields.nome_completo,
        },
        {
          "name": "email",
          "value": fields.email,
        },
        {
          "name": "mobilephone",
          "value": fields.mobilephone,
        }
      ]
    }

    try {
      const url = data[0] && `https://api.hsforms.com/submissions/v3/integration/submit/6331207/${data[0][20]}` || false;

      if (!url)
        throw new Error("handleSubmit() -> Fetch error: no URL param");

      const response = await fetch(url, {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload),
      })

      if (response.ok) {
        console.log(event);
        setSubmitLoading(false);
        return history.push(`/obrigado/${data[0][12]}`);
      } else {
        console.log(response);
        return setSubmitLoading(false);
      }
    } catch (error) {
      console.log(error)
      return setSubmitLoading(false);
    }

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
                    onChange={e => setFields({ ...fields, nome_completo: e.target.value })}
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
                    onChange={e => setFields({ ...fields, mobilephone: e.target.value })}
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

      <Nav
        loading={loading}
        courseTitle={data[0] && data[0][9]}
        cargaHoraria={data[0] && data[0][13]}
        inicio={data[0] && data[0][1]}
        handleModalOpen={handleModalOpen}
        isAlumeca={data[0] && data[0][15] === "TRUE"}
        cartLink={cartLink}
      />

      {data &&
        <CourseInformation
          hero={data[0] && data[0][7]}
          cartLink={cartLink}
          inicioPt2={data[0] && data[0][3]}
          sectionId="sobre-a-formacao"
        />
      }

      {data &&
        <GenericSection
          title="Objetivo do curso"
          content={data[0] && data[0][16]}
          background="#fff"
          color="dark"
        />
      }

      {data &&
        <GenericSection
          title="Para quem se destina?"
          content={data[0] && data[0][17]}
          background="#828282"
          color="light"
        />
      }

      {(data && data[0] && data[0][19] !== "FALSE") &&
        <GenericSection
          title="O que você vai aprender?"
          content={data[0][19]}
          background="#20549F"
          color="light"
        />
      }

      {data &&
        <GenericSection
          title="Programa do curso"
          content={data[0] && data[0][18]}
          background="#A134B1"
          color="light"
          sectionId="programa"
        />
      }

      {data &&
        <QuandoAcontece
          iniciopt1={data[0] && data[0][2]}
          iniciopt2={data[0] && data[0][3]}
          sectionId="quando-acontece"
        />
      }

      {data &&
        <Investimento
          valor={data[0] && data[0][14]}
          cartLink={cartLink}
          sectionId="investimento"
        />
      }

      {data &&
        <DiscountBanner
          cartLink={cartLink}
          handleModalOpen={handleModalOpen}
        />
      }
      <Footer
        courseName={data[0] && data[0][9]}
      />

      <LGPDDrawer />
    </div>
  )
}
