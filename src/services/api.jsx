import axios from 'axios';

const baseURL = 'https://navedex-api.herokuapp.com/v1/users';


const login = async (email, password) => axios
.post(`${baseURL}/login`, {
  email, password
}, { headers: {bearer: { token: '11111'}} } )
// .then(res => console.log(res.data))
.then((res) => res.data)
.catch((err) => err);

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjJiMTVhNjcwLTAyNTEtNDM3Yy05MTdkLTMwMDFlNjVhMTZkZSIsImVtYWlsIjoidGVzdGVAY29tLmJyIiwiaWF0IjoxNjE3NjM5MzgxfQ.jQ3P3wWUEpxtfbfB5ED4ReW2HKqKF37kNKQfElWwhRI'

const getTest = async () => axios
.get('https://navedex-api.herokuapp.com/v1/navers/', { headers: { Authorization: `Bearer ${token}` } } )
.then(res => console.log(res.data))
.catch((err) => err);

export default login;
