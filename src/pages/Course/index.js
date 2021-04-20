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

export default function Course(props) {
  const { slug } = useParams();
  const history = useHistory();
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

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

  return (
    <div className="curso">
      <Nav
        loading={loading}
        courseTitle={data[0] && data[0][9]}
        cargaHoraria={data[0] && data[0][13]}
        inicio={data[0] && data[0][1]}
      />

      {data &&
        <CourseInformation
          hero={data[0] && data[0][7]}
          cartLink={cartLink}
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

      {data &&
        <GenericSection
          title="Programa do curso"
          content={data[0] && data[0][18]}
          background="#A134B1"
          color="light"
        />
      }

      {data &&
        <QuandoAcontece
          iniciopt1={data[0] && data[0][2]}
          iniciopt2={data[0] && data[0][3]}
        />
      }

      {data &&
        <Investimento
          valor={data[0] && data[0][14]}
          cartLink={cartLink}
        />
      }

      {data &&
        <DiscountBanner
          cartLink={cartLink}
        />
      }
      <Footer
        courseName={data[0] && data[0][9]}
      />
    </div>
  )
}
