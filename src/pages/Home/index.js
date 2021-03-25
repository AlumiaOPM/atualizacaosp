import React from 'react';

import {
  ModalHeader,
  Modal,
  ModalBody,
  ModalFooter,
  ModalOverlay,
  ModalCloseButton,
  Button,
  Input,
  FormControl,
  ModalContent,
  Slide,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';

import HomeHeader from '../../components/HomeHeader';
import HomeSearch from '../../components/HomeSearch';
import HomeCollection from '../../components/HomeCollection';
import HomeFooter from '../../components/HomeFooter';

import { getCourseDataAndThumbnails } from '../../services/api';

export default function Home() {
  const [courses, setCourses] = React.useState([]);
  const [isOpen, setIsOpen] = React.useState(false);
  const [status, setStatus] = React.useState({ success: false, failed: false })
  const [loading, setIsLoading] = React.useState({
    coursesRequest: true,
    formSubmit: false
  });
  const [fields, setFields] = React.useState({
    error: false,
    coursename: '',
    email: '',
    inicio: '',
  });

  React.useEffect(() => {
    async function getData() {
      const data = await getCourseDataAndThumbnails();
      setCourses(data);
      setIsLoading({ ...loading, coursesRequest: false });
    };

    getData();
  }, []);

  /**
   * get courses by category
   * @param {String} filter  e.g mostSelled | Marketing | Recursos Humanos etc
   * @returns {Array} of arrays with course information
   */
  const courseFilter = filter => {
    if (filter === "mostSelled")
      return courses.filter(item => item[6] === "TRUE");

    const filtered = courses.filter(item => item[10] === filter);
    return filtered;
  }

  const onClose = event => {
    setIsOpen(false);
    setFields({ ...fields, error: '' })
  }

  const openPopup = (coursename, startDate, courseCode) => {
    setFields({
      ...fields,
      coursename: coursename,
      inicio: startDate,
      curso: courseCode,
      url: window.location.href
    })

    console.log(fields);
    return setIsOpen(true);
  }

  const handleSubmit = async event => {
    //loading ...
    setIsLoading({ ...loading, formSubmit: true })

    event.preventDefault();
    const { email, coursename, curso, url, inicio } = fields;
    const payload = {
      "submittedAt": Date.now(),
      "fields": [
        {
          "name": "email",
          "value": email,
        },
        {
          "name": "nome_do_curso",
          "value": coursename,
        },
        {
          "name": "curso",
          "value": curso,
        },
        {
          "name": "inicio_curso",
          "value": inicio,
        },
        {
          "name": "website",
          "value": url,
        }
      ]
    }

    try {
      const response = await fetch("https://api.hsforms.com/submissions/v3/integration/submit/6331207/01c7043a-2ca4-4506-b882-fbd00113ff4c", {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload),
      })

      if (response.ok) {
        setStatus({ success: true, failed: false });
        setIsLoading({ ...loading, formSubmit: false });
        return setIsOpen(false);
      } else {
        console.log(response)
        setLoading({ ...loading, formSubmit: false });
        setStatus({ success: false, failed: true })
        return setIsOpen(false);
      }
    } catch (error) {
      console.log(error)
      setLoading({ ...loading, formSubmit: false });
      setStatus({ success: false, failed: true })
      return setIsOpen(false);
    }
  }

  return (

    <div className="home">
      <Modal isOpen={isOpen} onClose={onClose} isCentered motionPreset="slideInBottom">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <p>Próxima turma:</p>
            <p style={{
              fontWeight: '500',
              fontSize: '14px',
              lineHeight: '20px',
              marginBottom: '-10px'
            }}>{fields.coursename}</p>
          </ModalHeader>
          <ModalCloseButton />

          <form onSubmit={handleSubmit}>
            <ModalBody>
              <FormControl isRequired>
                <Input
                  placeholder="email@example.com"
                  type="email"
                  onChange={e => setFields({ ...fields, email: e.target.value })}
                />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button
                colorScheme="green"
                mr={3}
                type="submit"
                isLoading={loading.formSubmit}
              >
                Avise-me
            </Button>
              <Button variant="ghost" onClick={onClose}>Fechar</Button>
            </ModalFooter>
          </form>

        </ModalContent>
      </Modal>

      <HomeHeader />
      <HomeSearch />
      <HomeCollection
        title="Mais vendidos"
        data={courseFilter('mostSelled')}
        openPopup={openPopup}
        isLoading={loading.coursesRequest}
      />
      <HomeCollection
        title="Marketing"
        data={courseFilter('Marketing')}
        openPopup={openPopup}
        isLoading={loading.coursesRequest}
      />
      <HomeCollection
        title="Recursos Humanos"
        data={courseFilter('Recursos Humanos')}
        openPopup={openPopup}
        isLoading={loading.coursesRequest}
      />
      <HomeCollection
        title="Ciência de Dados"
        data={courseFilter('Ciência de Dados')}
        openPopup={openPopup}
        isLoading={loading.coursesRequest}
      />
      <HomeCollection
        title="Moda e Varejo"
        data={courseFilter('Moda e Varejo')}
        openPopup={openPopup}
        isLoading={loading.coursesRequest}
      />
      <Slide
        direction="bottom"
        in={status.success}
        style={{ zIndex: 10 }}
        onClick={() => setStatus({ success: false, failed: false })}
      >
        <Alert status={"success"} colorScheme="green" variant="subtle" height="70px">
          <AlertIcon />
          Enviado com sucesso! Em nossa próxima turma, avisaremos você!
        </Alert>
      </Slide>
      <HomeFooter />
    </div>

  )
}
