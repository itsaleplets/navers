import axios from 'axios';

const baseURL = 'https://navedex-api.herokuapp.com/v1/';

const login = async (email, password) => axios
.post(`${baseURL}/users/login`, {
  email, password
})
.then((res) => res.data)
.catch((err) => err);

const showNavers = async (token) => axios
.get('https://navedex-api.herokuapp.com/v1/navers/', { headers: { Authorization: `Bearer ${token}` } } )
.then(res => res.data)
.catch((err) => err);

export {
  login,
  showNavers
};
