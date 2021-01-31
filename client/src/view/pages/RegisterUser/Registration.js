import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import './registration.scss'

const RegisterUser = () => {
    return (
        <div className="container form-container" style={{ backgroundColor: "white" }}>
            <img className="loginLogo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgIJfVwZ2ouhJCrqQBDb6xDMJBniWgOt3qTg&usqp=CAU"  />
            <Form className="login-form" >
                <Form.Group style={{marginTop:"30px"}}>
                    <h4 className="shiftToLeft">Create New Account</h4>
                </Form.Group>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label className="shiftToLeft">First name</Form.Label>
                        <Form.Control type='text' placeholder='Enter Firstname'></Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label className="shiftToLeft">Last name</Form.Label>
                        <Form.Control type='text' placeholder='Enter Lastname'></Form.Control>
                    </Form.Group>
                </Form.Row>
                <Form.Group controlId="email">
                    <Form.Label className="shiftToLeft">Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword" >
                    <Form.Label className="shiftToLeft">Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword" >
                    <Form.Label className="shiftToLeft">Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Re-enter Password" />
                </Form.Group>
                <fieldset>
                    <Form.Group as={Row} >

                        <Form.Label style={{ fontWeight: 500, fontSize: "large" }} className="shiftToLeft" as='legend' column sm="12">
                            Gender:
                            </Form.Label>


                        <Form.Check className="ml-3 mr-3" label="Male" type="radio" column sm="2" />
                        <Form.Check className="mr-3" label="Female" type="radio" column sm="2 " />
                        <Form.Check className="mr-3" label="Other" type="radio" column sm="2 " />

                    </Form.Group>
                </fieldset>
                <Button style={{ backgroundColor: "#00c853" }} type="submit">
                    Sign Up
             </Button>
            </Form>
        </div>
    )
}

export default RegisterUser