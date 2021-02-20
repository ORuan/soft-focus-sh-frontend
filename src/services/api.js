import axios from 'axios';
const ApiCreate = async (method, endpoint, data = null, form=false) => {

    const auth_token = localStorage.getItem('auth-token')
    let header = {}
    if(form=true){
        header = { 'Authorization': 'Token ' + auth_token, 'Content-Type': 'multipart/form-data'  }
    }else{
        header = { 'Authorization': 'Token ' + auth_token, 'Content-Type': 'application/json'  }
    }
    
    return axios({
        "baseURL": `https://${process.env.REACT_APP_.BACKEND_ADDR}/`,
        "method": method,
        "url": endpoint,
        "data": data,
        "headers": header
    })
}

export default ApiCreate;