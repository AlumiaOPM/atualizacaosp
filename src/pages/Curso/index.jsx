import React from 'react';
import { getCourseDataAndThumbnails } from '../../services/api';

import Nav from '../../components/Nav';
import CourseInformation from '../../components/CourseInformation';

export default function Curso(props){
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function getData(){
      const response = await getCourseDataAndThumbnails();
      const courseinformations = response.filter(item => item[12] === props.match.params.slug);
      if(!courseinformations.length)
        return window.location.replace('/');

      setData(courseinformations);
      setLoading(false);
    };

    getData();
  }, [])

  return (
    <div className="curso">
      <Nav 
        loading={loading}
        courseTitle={data[0] && data[0][9]}
        cargaHoraria={data[0] && data[0][13]}
        inicio={data[0] && data[0][1]}
      />

      <CourseInformation 
        hero={data[0] && data[0][7]}
      />
    </div>
  )
}
