import axios from 'axios'
const serverUrl = 'http://localhost:9000';


export const addComment = async(comment) => {
    const newComment = {...comment, user: '65b2788e7f7b228b13cbdc45' }
    console.log(newComment)
    try{
        const response = await axios.post(`${serverUrl}/comments`, newComment)
        if(response.status === 200){
            console.log(response)
            return true
        }
        else return false
    }
    catch(error){
        console.log("Something went wrong",error)
        return false
    }
}