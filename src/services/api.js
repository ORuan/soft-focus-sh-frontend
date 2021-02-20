import axios from 'axios';
const ApiCreate = async (method, endpoint, data = null, form = false) => {

    const auth_token = localStorage.getItem('auth-token')
    let header = {}
    let type = ''
    if (form == true) {
        type = 'multipart/form-data'
    } else {
        type = 'application/json'
    }

    if (auth_token != null) {
        header = { 'Content-Type': type }
    } else {
        header = { 'Authorization': 'Token ' + auth_token, 'Content-Type': type }
    }

    return axios({
        "baseURL": `http://${process.env.REACT_APP_.BACKEND_ADDR}/`,
        "method": method,
        "url": endpoint,
        "data": data,
        "headers": header
    })
}

export default ApiCreate;