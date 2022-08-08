import urls from "../helpers/url_helpers";
import { get } from "../helpers/api_helpers";


export async function getSponsoredStudents(config = {}) {
  return await get(urls.GET_SPONSORED_STUDENTS, config);
}

export async function getUnsponsoredStudents(config = {}) {
  return await get(urls.GET_UNSPONSORED_STUDENTS, config);
}