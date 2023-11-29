import axios from "axios";
import { getAuthTokenDetails } from "../preferences/localStorage";


export const BASEURL = 'https://kovela.app/customer/api';
export const POPULARURL = 'https://kovela.app/profile';
let bearer_token = getAuthTokenDetails();

export const authAxiousInstance1 = axios.create({
  baseURL: BASEURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

  export const axiousInstanceNew1 = axios.create({
    baseURL: BASEURL,
    headers: {
      Authorization: bearer_token,
    },
  });

  export const axiosInstence = axios.create({
    baseURL: POPULARURL,
    headers: {
      Authorization: bearer_token,
    }
  })

  axiosInstence.interceptors.request.use(async function (config) {
    let token = await getAuthTokenDetails();
    config.headers.Authorization = token;
    return config
  })