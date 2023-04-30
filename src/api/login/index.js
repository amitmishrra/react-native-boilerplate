import axios from 'axios';
const BASE_URL = 'YOUR_BASE_URL'
export default loginApi = async (params) => {
  const payload = {
    "kEY": "VALUE",
   
  };
  return axios.post(BASE_URL + 'ENDPOINT', payload)
    .then(response => response.data)
    .catch(error => error.response);
}