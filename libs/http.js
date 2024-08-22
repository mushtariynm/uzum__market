import axios from "axios";

let baseUrl = 'http://localhost:8080/'

async function getData(endpoint) {
    try {
        let res = await axios.get(`${baseUrl}/${endpoint}`)
        return res
    } catch (error) {
        console.log(error);
        
    }
}

async function postData(endpoint, body) {
    try {
        let res = await axios.post(`${baseUrl}/${endpoint}`, body)

        return res
    } catch (error) {
        console.log(error);
        
    }
    
}

export{getData, postData}