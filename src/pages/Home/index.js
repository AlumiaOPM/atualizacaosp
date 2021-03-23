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
  ModalContent } from '@chakra-ui/react';

import HomeHeader from '../../components/HomeHeader';
import HomeSearch from '../../components/HomeSearch';
import HomeCollection from '../../components/HomeCollection';
import HomeFooter from '../../components/HomeFooter';

import { getCourseDataAndThumbnails } from '../../services/api';

export default function Home() {
  const [courses, setCourses] = React.useState([]);
  const [loading, setIsLoading] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [modalCourse, setModalCourse] = React.useState('');

  React.useEffect(() => {
    async function getData() {
      const data = await getCourseDataAndThumbnails();
      setCourses(data);
      setIsLoading(true);
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
  }

  const openPopup = (course) => {
    setModalCourse(String(course));
    setIsOpen(true);
  }


  return (

    <div className="home">
      <Modal isOpen={isOpen} onClose={onClose} isCentered motionPreset="slideInBottom">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <p>Avise-me:</p>
            <p style={{fontWeight:'500', fontSize:'14px', lineHeight:'20px', marginBottom:'-10px'}}>{modalCourse}</p>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input placeholder="email@example.com" type="email" required/>
          </ModalBody>
          <ModalFooter>
            <Button 
              colorScheme="green" 
              mr={3} 
              onClick={onClose}
              type="submit"
            >
              Enviar
            </Button>
            <Button variant="ghost" onClick={onClose}>Fechar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <HomeHeader />
      <HomeSearch />
      <HomeCollection
        title="Mais vendidos"
        data={courseFilter('mostSelled')}
        openPopup={openPopup}
        isLoading={loading}
      />
      <HomeCollection
        title="Marketing"
        data={courseFilter('Marketing')}
        openPopup={openPopup}
        isLoading={loading}
      />
      <HomeCollection
        title="Recursos Humanos"
        data={courseFilter('Recursos Humanos')}
        openPopup={openPopup}
        isLoading={loading}
      />
      <HomeCollection
        title="Ciência de Dados"
        data={courseFilter('Ciência de Dados')}
        openPopup={openPopup}
        isLoading={loading}
      />
      <HomeCollection
        title="Moda e Varejo"
        data={courseFilter('Moda e Varejo')}
        openPopup={openPopup}
        isLoading={loading}
      />
      <HomeFooter />
    </div>

  )
}
