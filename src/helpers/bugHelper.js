import axios from 'axios'
const serverUrl = 'http://localhost:9000';

export const addingBug = async (bug) => {
    // console.log(process.env.SERVER_URL)
    // description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    // name:"Something is not working"
    // project:"Project C"

    const newBug = {...bug, 
        author:"65b65e949e09feee22f9bee8", 
        project: "65b65f0f9e09feee22f9beec",
        assignee:["65b65e949e09feee22f9bee8"],
        status: "Open",
    }
    try{
        const response = await axios.post(`${serverUrl}/bugs`, newBug)
        if(response.status === 200){
            //console.log(response)
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
            console.log(response.data)
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
           //console.log(response)
            return response.data
        }
    }
    catch(error){
        console.log("Something went wrong", error)
    }
}

export const updateBug = async (bug) => {
    const response = await axios.put(`${serverUrl}/bugs/${bug.id}`, bug)
}