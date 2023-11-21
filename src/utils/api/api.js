import axios from "axios";
import { getAuthTokenDetails } from "../preferences/localStorage";


export const BASEURL = 'http://20.235.89.214:9092/api/';
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