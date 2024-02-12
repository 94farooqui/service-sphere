import axios from 'axios'
const serverUrl = 'http://localhost:9000';

export const getAllUsers = async () =>  {
    const res = await axios.get(`${serverUrl}/users`)
    console.log(res)
    if(res.statusText==='OK') return res.data
}