import axios from 'axios'
import {USER_LOADING,USER_LOADED,AUTH_ERROR,LOGIN_FAIL,LOGIN_SUCCESS,REGISTER_FAIL,REGISTER_SUCCESS} from './types'
import {returnErrors } from './messages'

export const loadUser = () => (dispatch,getState) => {
    axios.get('/api/auth/user',tokenConfig(getState))
         .then(res => {
             dispatch({
                 type:USER_LOADED,
                 payload:res.data
             })
         }).catch(err =>{
             dispatch(returnErrors(err.response.data,err.response.status))
             dispatch({
                 type:AUTH_ERROR
             })
         })
}
export const login = (username,password) => dispatch => {
    const config = {
        headers : {
            'Content-Type':'application/json'
        }
    };
    // Request body 
    const body = JSON.stringify({username,password})
    axios
    .post('/api/auth/login',body,config)
         .then(res => {
             dispatch({
                 type:LOGIN_SUCCESS,
                 payload:res.data
             })
         }).catch(err =>{
             dispatch(returnErrors(err.response.data,err.response.status))
             dispatch({
                 type:LOGIN_FAIL
             })
         })
}
export const register = ({username,password,email}) => dispatch => {
    const config = {
        headers : {
            'Content-Type':'application/json'
        }
    };
    // Request body 
    const body = JSON.stringify({username,password,email})
    axios
    .post('/api/auth/register',body,config)
         .then(res => {
             dispatch({
                 type:REGISTER_SUCCESS,
                 payload:res.data
             })
         }).catch(err =>{
             dispatch(returnErrors(err.response.data,err.response.status))
             dispatch({
                 type:REGISTER_FAIL
             })
         })
}
//Logout User
export const logout = () => (dispatch,getState) => {
    axios.get('/api/auth/logout',null,tokenConfig(getState))
         .then(res => {
             dispatch({
                 type:LOGOUT_SUCCESS
             })
         }).catch(err =>{
             dispatch(returnErrors(err.response.data,err.response.status))
             dispatch({
                 type:AUTH_ERROR
             })
         })
}

//Set Up confgi with token
export const tokenConfig = getState => {
     // get token fro state
     const token = getState().auth.token
     ///headers 
     const config = {
         headers : {
             'Content-Type':'application/json'
         }
     }
     // if token add to headers config 
        if (token){
            config.headers['Authorization'] = `Token ${token}`
        }
        return config
}