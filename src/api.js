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

export const editprofile = (firstname ,lastname ,username,password,email,tel) => {
    const data = {
        firstname:firstname,
        lastname:lastname,
        username: username,
        password: password,
        email:email,
        tel:tel
    }

    return axiosInstance.put('api/user/editprofile', data)
        .then(data => data)
        .catch(error => error.response)
}

export const postItem = (name,description,lookfor,send,category) => {
    const item = {
    itemimage:'abc.jpg',
    itemname:name,
     description:description,
     lookfor:lookfor,
     transfer:send,
     category:category,
     owner: localStorage.getItem('username')
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

export const getUser= () => {
    return axiosInstance.get('/api/user/getuser/')
        .then(response => response.data)
        .catch(error => { throw (error.response) })
}
export const getCategory= () => {
    return axiosInstance.get('/api/category')
        .then(response => response.data)
        .catch(error => { throw (error.response) })
}

export const postCategory = (categoryname,value) => {
    const data = {
        categoryname:categoryname,
        value:value
    }

    return axiosInstance.post('api/category/create', data)
        .then(data => data)
        .catch(error => error.response)
}
