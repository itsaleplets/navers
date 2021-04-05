import axios from 'axios';

const baseURL = 'https://navedex-api.herokuapp.com/v1/';


const login = async (email, password) => axios
.post(`${baseURL}/users/login`, {
  email, password
})
.then((res) => res.data)
.catch((err) => err);

// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjJiMTVhNjcwLTAyNTEtNDM3Yy05MTdkLTMwMDFlNjVhMTZkZSIsImVtYWlsIjoidGVzdGVAY29tLmJyIiwiaWF0IjoxNjE3NjM5MzgxfQ.jQ3P3wWUEpxtfbfB5ED4ReW2HKqKF37kNKQfElWwhRI';

const showNavers = async (token) => axios
.get('https://navedex-api.herokuapp.com/v1/navers/', { headers: { Authorization: `Bearer ${token}` } } )
.then(res => res.data)
.catch((err) => err);

export {
  login,
  showNavers
};
