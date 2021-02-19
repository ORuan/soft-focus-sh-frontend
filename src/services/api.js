import axios from 'axios';
const ApiCreate = async (method, endpoint, data = null, form=null) => {

    const auth_token = localStorage.getItem('auth-token')
    let content_type = 'application/json'

    if(form=true){
        content_type = 'multipart/form-data'
    }
    const header = { 'Authorization': 'Token ' + auth_token, 'Content-Type': content_type  }
    return axios({
        "baseURL": `https://${process.env.REACT_APP_.BACKEND_ADDR}/`,
        "method": method,
        "url": endpoint,
        "data": data,
        "headers": header
    })
}

export default ApiCreate;