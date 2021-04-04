import axios from 'axios';

const baseURL = 'https://6069d6bce1c2a10017544fbf.mockapi.io/';


const login = async (email, password) => axios
.post(`${baseURL}/login`, {
  email, password
})
.then((res) => res.data)
.catch((err) => err);

export default login;