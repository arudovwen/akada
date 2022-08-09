import urls from "../helpers/url_helpers";
import { get } from "../helpers/api_helpers";


export async function getSponsoredStudents({pageNumber, query}, config = {}) {
  return await get(`${urls.GET_SPONSORED_STUDENTS}?page=${pageNumber}`, config);
}

export async function getUnsponsoredStudents({ pageNumber, query }, config = {}) {
  return await get(
    `${urls.GET_UNSPONSORED_STUDENTS}?page=${pageNumber}`,
    config
  );
}