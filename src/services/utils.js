import { readyException } from 'jquery'
import React from 'react'
import { Redirect } from 'react-router-dom'


const VerifyOrRedirect = () => {
    
    const path_redirect = document.location.pathname
    return Redirect(process.env.URLOGIN)
}
export default VerifyOrRedirect;