import React, { useState } from 'react'
import { useContext } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/authContext'


const VLogin = () => {
    const [inputs, setInputs] = useState({      
        v_email: "",
        v_pass: "",
    })
    const navigate=useNavigate();
    const {vlogin}=useContext(AuthContext);
    const handleChange = e => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const handleSubmit = async e => {
        e.preventDefault()
        try {
            await vlogin(inputs)
            navigate("/vendor/Home");
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='auth'>
            <Form>
                <Form.Group className="mb-3" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control required type="email" name="v_email" placeholder="Enter email" onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control required type="password" placeholder="Password" name='v_pass' onChange={handleChange} />
                </Form.Group>
                
                <Button variant="outline-dark" onClick={handleSubmit} type="submit">
                    Login
                </Button>{'  '}
                <span>Don't have a Account? <Link to="/VRegister">Register</Link></span>
            </Form>
        </div>
    )
}

export default VLogin