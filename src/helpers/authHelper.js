import axios from 'axios'
const serverUrl = 'http://localhost:9000';

const registerUser = async (user) => {
    //console.log("User details",user)
    const response = await axios.post(`${serverUrl}/auth/signup`, user)
    console.log(response)
    if(response.status == 201){
        return true;

    }
    else return false
}

const loginUser = async (user) => {
    console.log(user)
    const response = await axios.post(`${serverUrl}/auth/login`, user)
    console.log(response)
    if(response.status == 200){
        localStorage.setItem("jwtToken", response.data.token)
        return {status :true, user: response.data.email}
    }
    return false
}


export {registerUser, loginUser};