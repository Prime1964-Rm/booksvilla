import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './login.scss'
import NavBarComponent from '../../../components/NavBar/NavBar.component'
// import { apis } from '../../../apis/apis'
import axios from 'axios'
import {setAuthToken} from '../../../redux/auth/authAction'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {userActions} from '../../../_actions/users.actions'
import API_SERVER_URL from '../../../config.json'
import { loginUserFailure, loginUserRequest, loginUserSuccess } from '../../../redux/Authentication/authenticationAction'

const Login = ({loading,loginUserRequest,loginUserSuccess,loginUserFailure}) => {
    console.log(loading)
    const history= useHistory()
    const [emailEntered,setEmailEntered] = useState()
    const [passwordEntered,setPasswordEntered] = useState()
    const [loader,setLoader] = useState(false)
    const [authMessage,setAuthMessage] = useState("Authenticating")

    useEffect(()=>{
        scrollToTop()
    },[])

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }


    const onChangeHandler = (e) =>{
        if(e.target.name==="email"){
            setEmailEntered(e.target.value)
        }
        if(e.target.name==="password"){
            setPasswordEntered(e.target.value)
        }
    }


    const loginUser = async () =>{
        loginUserRequest()
            let body={
                email: emailEntered,
                password: passwordEntered
            }
        try{
            const res = await axios.post('http://localhost:80/api/auth',body)
            
            
            // localStorage.setItem("jwt",res.data.token)
                // history.push({
                //     pathname:'/'
                // })
                if(res.status===200){
                    loginUserSuccess(res.data.user)
                }
              
        }
        catch(err){
            loginUserFailure(err.response)
            console.error(err)
                 
        }
    }

    return (
        <React.Fragment>
            <NavBarComponent/>
        <div className="container form-container " style={{ backgroundColor: "white" }}>
            <img className="loginLogo" style={{borderRadius:"50px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgIJfVwZ2ouhJCrqQBDb6xDMJBniWgOt3qTg&usqp=CAU" />
            <Form className="login-form" >
                <Form.Group style={{marginTop:"30px"}}>
                <h3>Login</h3>
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label className="shiftToLeft">Email address</Form.Label>
                    <Form.Control
                    onChange={onChangeHandler}
                    name="email"
                    type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword" >
                    <Form.Label className="shiftToLeft">Password</Form.Label>
                    <Form.Control
                    onChange={onChangeHandler} 
                    name="password"
                    type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox" className="shiftToLeft">
                    <Form.Check type="checkbox" label="Remember Me" />
                </Form.Group>
                <Button
                className="login-btn mt-3"
                style={{
                    backgroundColor:"rgb(0, 200, 83)",
                    fontWeight:"600",
                    fontSize:"1.2rem",
                    width:"100%"
                }}
                onClick={loginUser}
                >
                    <span>
                  {
                      (loader)?
                    
                        {authMessage}
                      :"Login"
                  }
                  </span>
                 </Button>
            </Form>
        </div>
        </React.Fragment>
    )
}

const mapStateToProps = state =>{
    return{
        loading: state.login.loading
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        loginUserRequest: ()=>{dispatch(loginUserRequest())},
        loginUserSuccess: (user)=>{dispatch(loginUserSuccess(user))},
        loginUserFailure: (err) => {dispatch(loginUserFailure(err))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)