import axios from 'axios'
import localStorage from 'localStorage'

const axiosInstance = axios.create({
    baseURL: 'https://swaaaap.herokuapp.com/',
    headers: { 'Content-Type': 'application/json' }
})

export const login = (username, password) => {
    const data = {
        username: username,
        password: password
    }

    return axiosInstance.post('login', data)
        .then(data => data)
        .catch(error => error.response)
}

export const register = (firstname ,lastname ,username,password,email,tel) => {
    const data = {
        firstname:firstname,
        lastname:lastname,
        username: username,
        password: password,
        email:email,
        tel:tel
    }

    return axiosInstance.post('api/user/signup', data)
        .then(data => data)
        .catch(error => error.response)
}


export const publishPost = (title, content) => {
    const data = {
        title: title,
        content: content,
        user: { username: localStorage.getItem('username') }
    }

    return axiosInstance.post('api/post/create/', data)
        .then(data => data)
        .catch(error => error.response)
}

export const getAllPosts = () => {
    return axiosInstance.get('/api/post/all/')
        .then(response => response.data)
        .catch(error => { throw (error.response) })
}


export const postItem = (name,description,look,send) => {
    const item = {
    name:name,
     description:description,
     look:look,
     send:send,
     user: { username: localStorage.getItem('username') }
     }
  
    return axiosInstance.post('api/item/create/', item)
      .then(item => item)
      .catch(error => error.response)
}

export const getAllItem = () => {
    return axiosInstance.get('/api/item/all/')
        .then(response => response.data)
        .catch(error => { throw (error.response) })
}

