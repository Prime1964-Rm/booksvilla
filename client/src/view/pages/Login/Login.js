import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './login.css'

const Login = () => {
    return (
        <div className="container form-container " style={{ backgroundColor: "white" }}>

            <img className="loginLogo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgIJfVwZ2ouhJCrqQBDb6xDMJBniWgOt3qTg&usqp=CAU" />
            <Form className="login-form" >
                <Form.Group style={{marginTop:"30px"}}>
                <h3>Login</h3>
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label className="shiftToLeft">Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword" >
                    <Form.Label className="shiftToLeft">Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox" className="shiftToLeft">
                    <Form.Check type="checkbox" label="Remember Me" />
                </Form.Group>
                <Button style={{ backgroundColor: "#00c853" }} type="submit">
                    Login
                 </Button>
            </Form>
        </div>
    )
}

export default Login