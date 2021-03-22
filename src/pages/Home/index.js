import React from 'react';

import HomeHeader from '../../components/HomeHeader';
import HomeSearch from '../../components/HomeSearch';
import HomeCollection from '../../components/HomeCollection';
import HomeFooter from '../../components/HomeFooter';

import { getCourseDataAndThumbnails } from '../../services/api';

export default function Home() {
  const [courses, setCourses] = React.useState([]);
  const [loading, setIsLoading] = React.useState(false);

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

  return (

    <div className="home">
      <HomeHeader />
      <HomeSearch />
      <HomeCollection
        title="Mais vendidos"
        data={courseFilter('mostSelled')}
        isLoading={loading}
      />
      <HomeCollection
        title="Marketing"
        data={courseFilter('Marketing')}
        isLoading={loading}
      />
      <HomeCollection
        title="Recursos Humanos"
        data={courseFilter('Recursos Humanos')}
        isLoading={loading}
      />
      <HomeCollection
        title="Ciência de Dados"
        data={courseFilter('Ciência de Dados')}
        isLoading={loading}
      />
      <HomeCollection
        title="Moda e Varejo"
        data={courseFilter('Moda e Varejo')}
        isLoading={loading}
      />
      <HomeFooter />
    </div>

  )
}
