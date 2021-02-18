import axios from 'axios';
import {API_SERVER_URL} from '../config.json'

export const userService = {
    login,
    logout,
    getAll
};


const login = async (email,password) =>{
    let body = {
        email,
        password
    }
    try{
        const res = await axios.post(API_SERVER_URL + "/auth", body,{
            headers:{
                "Content-Type" : "application/json"
            }
        })
        localStorage.setItem("booksVillaAuthToken", res.data.token)
        //then we need to set User
    }
    catch(err){
        console.log(err)
    }
}

const logout = ()=>{
    localStorage.removeItem("booksVillaAuthToken")
}