import axios from 'axios'

export const apis = {
    
        login: (body) =>{
            console.log(body);
         axios.post('http://localhost:6000/api/auth',body,{
                    headers:{
                        "Content-Type":"application/json"
                    }
                }).then(res =>{
                    console.log("API call ===> data", res)
                    return res
                })
        }
    
}