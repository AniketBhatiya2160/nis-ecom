import React from 'react'
import { useState } from 'react'
import  axios  from 'axios'
import { Button, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

const VRegister = () => {
    const [inputs, setInputs] = useState({
        v_name: "",
        v_contact: "",
        v_email: "",
        v_address: "",
        v_pass: "",
    })
    const navigate=useNavigate();
    const handleChange = e => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const handleSubmit = async e => {
        e.preventDefault()
        try {
            await axios.post("http://localhost:8800/api/auth/vregister", inputs)
            navigate("/vendor");
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='auth'>
            <Form>
                <Form.Group className="mb-3" >
                    <Form.Control required  onChange={handleChange} name="v_name" type="text" placeholder="Enter Name" />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Control required  onChange={handleChange} name="v_email" type="email" placeholder="Enter Email" />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Control required onChange={handleChange} name="v_contact" type="number" placeholder="Enter Mobile Number" />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Control required onChange={handleChange} as="textarea" col={5} name="v_address" placeholder="Enter Shop Address" />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Control required onChange={handleChange} name="v_pass" type="password" placeholder="Enter Password" />
                </Form.Group>



                <Button onClick={handleSubmit} variant="outline-dark" type="submit">
                    Sign up
                </Button>{'  '}
                <span>Already have a Account? <Link to="/">Login</Link></span>
            </Form></div>
    )
}

export default VRegister