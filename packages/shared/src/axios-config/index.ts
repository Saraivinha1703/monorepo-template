import axios from 'axios'

const api = axios.create({
    baseURL: 'https://httpbin.org/'
})

async function getHeaders(){
    return await api.get('/headers')
}

export const API = {
    all: api,
    getHeaders: getHeaders,
}