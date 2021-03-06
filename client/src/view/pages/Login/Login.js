import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './login.css'
import NavBarComponent from '../../../components/NavBar/NavBar.component'
// import { apis } from '../../../apis/apis'
import axios from 'axios'
import {setAuthToken} from '../../../redux/auth/authAction'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

const Login = ({setAuthToken}) => {

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


    const Login = async () =>{
        setLoader(true)
        let body={
            email:emailEntered,
            password: passwordEntered
        }
        try{
            const res = await axios.post('http://localhost:80/api/auth',body)
            console.log(res)
            console.log(res.data.token);
            localStorage.setItem("jwt",res.data.token)
            setAuthToken(res.data.token)
            if(res.data.token){
                setLoader(false)
                history.push({
                    pathname:'/'
                })
            }

        }
        catch(err){
            console.error(err)
            console.log(err.response)
            setLoader(false)
            setAuthMessage("Authentication Failed")
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
                onClick={Login}
                style={{ backgroundColor: "#00c853" }}>
                  {
                      (loader)?
                    <span>
                        <i class="fa fa-spinner fa-spin"></i>
                        <font>{authMessage}</font>
                    </span>  :"Login"
                  }
                 </Button>
            </Form>
        </div>
        </React.Fragment>
    )
}

const mapDispatchToProps = dispatch =>{
    return{
        setAuthToken: item=>{dispatch(setAuthToken(item))}
    }
}

export default connect(null, mapDispatchToProps)(Login)