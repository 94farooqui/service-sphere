import axios from 'axios'
const serverUrl = 'http://localhost:9000';

export const createDomain = async (domain) => {
    domain =  {...domain, imageUrl:""}
    const res = await axios.post(`${serverUrl}/domains`, domain)
    if(res){
        return true;
    }
    else return false;
}

export const getAllDomains = async () => {
    //console.log("Getting domains")
    const res = await axios.get(`${serverUrl}/domains`)
    //console.log(res)
    if(res.status==200){
        return res.data
    }
}