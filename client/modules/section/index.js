import data from '../../utils/data';
import utils from './utils';

export async function fetchSections(params) {
  try { 
    let response = await data.request('section', 'get', null, params);

    response = utils.buildSectionNames(response);

    return response;
  } catch (e) {
    throw e;
  }
}

export async function fetchSection(id) {
  try {
    let response = await data.request('section', 'get', id);

    response = utils.buildSectionName(response);

    return response;
  } catch (e) {
    throw e;
  }
}
