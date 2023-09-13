import axios from 'axios'
type HeadersProps = {
    headers: HeaderProps
}

type HeaderProps = {
    "Accept": string;
    "Accept-Encoding": string; 
    "Accept-Language": string; 
    "Host": string, 
    "Sec-Ch-Ua": string; 
    "Sec-Ch-Ua-Mobile": string; 
    "Sec-Ch-Ua-Platform": string; 
    "Sec-Fetch-Dest": string; 
    "Sec-Fetch-Mode": string; 
    "Sec-Fetch-Site": string; 
    "Sec-Fetch-User": string; 
    "Upgrade-Insecure-Requests": string; 
    "User-Agent": string; 
    "X-Amzn-Trace-Id": string;
}
const api = axios.create({
    baseURL: 'https://httpbin.org/'
})

async function getHeaders(){
    return (await api.get<HeadersProps>('/headers')).data.headers.Host
}

export const API = {
    all: api,
    getHeaders: getHeaders,
}