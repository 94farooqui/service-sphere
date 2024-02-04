import axios from 'axios'
const serverUrl = 'http://localhost:9000';

export const createProject = async (project) => {
    const res = await axios.post(`${serverUrl}/projects`, project)
    if(res){
        return true;
    }
    else return false;
}

export const getAllProjects = async () =>  {
    const res = await axios.get(`${serverUrl}/projects`)
    console.log(res.data)
    return res.data;
}