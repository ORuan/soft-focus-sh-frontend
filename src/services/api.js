import axios from 'axios';
const ApiCreate = async (method, endpoint, data = null, form=false) => {

    const auth_token = localStorage.getItem('auth-token')
    let content_type = 'application/json'

    if(form=true){
        alert('oi')
        content_type = 'multipart/form-data'
    }
    const header = { 'Authorization': 'Token ' + auth_token, 'Content-Type': 'application/json'  }
    return axios({
        "baseURL": `http://${process.env.REACT_APP_.BACKEND_ADDR}/`,
        "method": method,
        "url": endpoint,
        "data": data,
        "headers": header
    })
}

export default ApiCreate;