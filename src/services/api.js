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
};
