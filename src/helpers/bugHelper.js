import axios from 'axios'
const serverUrl = 'http://localhost:9000';

export const addingBug = async (bug) => {
    // console.log(process.env.SERVER_URL)
    // description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    // name:"Something is not working"
    // project:"Project C"

    const newBug = {...bug, 
        author:"65b2796ad8aaf6838183f8c5", 
        project: "65b27b5baaf0968e5f4f7982",
        dateResolved: '',
        assignee:"65b2796ad8aaf6838183f8c5",
        status: "Open",
    }
    try{
        const response = await axios.post(`${serverUrl}/bugs`, newBug)
        if(response.status === 200){
            console.log(response)
            return true
        }
    }
    catch(error){
        console.log("Something went wrong",error)
        return false
    }
    
}

export const getAllBugs = async () => {
    try{
        const response = await axios.get(`${serverUrl}/bugs`);
        if(response.status === 200){
            return response.data
        }
    }
    catch(error){
        console.log("Something went wrong", error)
    }
}

export const getBug = async (id) => {
    //console.log("ID:",id)
    try{
        const response = await axios.get(`${serverUrl}/bugs/${id}`);
        if(response.status === 200){
           console.log(response)
            return response.data
        }
    }
    catch(error){
        console.log("Something went wrong", error)
    }
}