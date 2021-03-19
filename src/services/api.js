const baseURL = "../database.json";
const baseUrl = 'https://api.alumia.online/';

/**
 * Get all rows in the sheet default range: ESPM-ATU!A1:Z1000
 * @returns {Array} an array of arrays with all courses information
 */
export const getCourseDataAndThumbnails = async () => {
  try {
    const data = await(await fetch(`${baseUrl}/api/v1/sheets?range=ESPM-ATU`)).json();
    return data.values;

  } catch (error) {
    throw new Error(error);

  }
}

export const getIES = async () => {
  try {
    const response = await fetch(baseURL, { headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' } });
    const json = await response.json();
    return json.IES;
  } catch (error) {
    console.log(error);
  }
}

export const getCursos = async () => {
  try {
    const response = await fetch(baseURL, { headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' } });
    const json = await response.json();
    return json.Cursos;
  } catch (error) {
    console.log(error);
  }
}

export const getProfessores = async () => {
  try {
    const response = await fetch(baseURL, { headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' } });
    const json = await response.json();
    return json.Professores;
  } catch (error) {
    console.log(error);
  }
}

export const getCursoFilter = async (name) => {
  try {
    const response = await fetch(baseURL, { headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' } });
    const json = await response.json();

    var filter = json.Cursos.filter((item) => item.Slug === 'Curso/' + name)
    return filter;
  } catch (error) {
    console.log(error);
  }
}

export const getProfessorFilter = async (name) => {
  try {
    const response = await fetch(baseURL, { headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' } });
    const json = await response.json();

    var filter = json.Professores.filter((item) => item.Slug === '../Prof/' + name)
    return filter;
  } catch (error) {
    console.log(error);
  }
}