import axios from 'axios'
const serverUrl = 'http://localhost:9000';


export const addComment = async(comment,bugId) => {
    const newComment = {...comment, user: '65b65e949e09feee22f9bee8' }
    console.log(newComment, bugId)
    ///bugs/:id/comments
    try{
        const response = await axios.post(`${serverUrl}/bugs/${bugId}/comments`, newComment)
        if(response.status === 200){
            //console.log(response)
            return true
        }
        else return false
    }
    catch(error){
        console.log("Something went wrong",error)
        return false
    }
}

export const getBugComments = async (bugId) => {
    try{
        //bugs/:id/comments
        //console.log(bugId)
        const bugComments = await axios.get(`${serverUrl}/bugs/${bugId}/comments/`)
        //console.log(bugComments)
        return bugComments.data
    }
    catch(error){

    }
}