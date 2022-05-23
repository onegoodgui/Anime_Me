import axios from "axios";

const BASE_URL = 'https://anime-me-api.herokuapp.com'


function createConfig(token) {
    return { headers: { Authorization: `Bearer ${token}` } };
  }
  
  function signUp(signUpData) {
    return axios.post(`${BASE_URL}/sign-up`, signUpData);
  }
  
  function signIn(signInData) {
    return axios.post(`${BASE_URL}/sign-in`, signInData);
  }

function getAnimes(token, score){
    const config = createConfig(token);
    const result = axios.get(`${BASE_URL}/?score=${score}`, config);
    return result;

}

function addAnime(token, status, animeData){
  const config = createConfig(token);
  const animeObject = {status, ...animeData}
  return axios.post(`${BASE_URL}`,animeObject, config);
}

function getAnimeList(token){
  const config = createConfig(token);
  return axios.get(`${BASE_URL}/animelist`, config);
}

function updateAnimeStatus(token, statusData){
  const config = createConfig(token);
  return axios.put(`${BASE_URL}/status`,statusData,config)
}

export const api = {
    signUp,
    signIn,
    getAnimes,
    addAnime,
    getAnimeList,
    updateAnimeStatus
}