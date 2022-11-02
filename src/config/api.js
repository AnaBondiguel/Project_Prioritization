import axios from 'axios';

// Define an API
const projectAPI = axios.create({
   //deployment for backend
    baseURL: 'http://localhost:3000'
})

export default projectAPI;