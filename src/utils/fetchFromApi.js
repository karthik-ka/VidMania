import axios from "axios";

const BASE_URL= 'https://youtube-v31.p.rapidapi.com';

const options = {
  method: 'GET',
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '9dfe2b2174mshd6b44469a085306p182e24jsn5b3574874661',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};
  export const fetchFromApi = async (url)=>{
    const {data} = await axios.get(`${BASE_URL}/${url}`,options);
    return data;

  }
  