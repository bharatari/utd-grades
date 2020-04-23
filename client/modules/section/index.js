import data from '../../utils/data';

export async function fetchSections(params) {
  try { 
    const response = await data.request('section', 'get', null, params);
  } catch (e) {
    throw e;
  }
}

export async function fetchSection(id) {
  try {
    const response = await data.request('section', 'get', id);

    return response;
  } catch (e) {
    throw e;
  }
}
