import axios from 'axios';
import React, { useContext } from 'react'
import { useState } from 'react'
import { Form, Button, Navbar, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';


const Update = () => {
    const { currentUser, vlogout } = useContext(AuthContext);
    const [product, setProduct] = useState({
        p_name: "",
        p_desc: "",
        p_image: "",
        p_price: null,
        cat_id: 1,
        v_id: 1
    });

    const navigate = useNavigate()
    const location = useLocation()
    const pid = location.pathname.split('/')[2];
    const handleChange = (e) => {
        setProduct(prev => ({ ...product, [e.target.name]: e.target.value }));

    };

    const handleClick = async e => {
        e.preventDefault()
        try {
            await axios.put("http://localhost:8800/updateProduct/" + pid, product)

            navigate("/vendor/Home")
        } catch (err) {
            console.log(err)
        }

    }
    console.log(product)
    return (
        <div className="d-flex flex-column site-container">
            <header className="App-header">
                <Navbar bg="dark" variant="dark" >

                    <Container>
                        <LinkContainer to="/vendor/Home">
                            <Navbar.Brand>E-mart</Navbar.Brand>
                        </LinkContainer>

                        {currentUser && <LinkContainer to="/add">
                            <Navbar.Brand>Add Product</Navbar.Brand>
                        </LinkContainer>}
                    </Container>

                    <div className="UserName">
                        <span></span>
                        {currentUser && <span className="logoutUser" onClick={vlogout}>Logout {currentUser?.v_name}</span>}
                    </div>
                </Navbar>
            </header>
            <main>
                <div className='form'>
                    <h1>Update the Product</h1>
                    <Form>
                        <Form.Group className="mb-3" >
                            <Form.Control type="text" onChange={handleChange} name='p_name' placeholder="Enter Product Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Control as="textarea" rows={3} onChange={handleChange} name='p_desc' placeholder="Enter Product Description" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control type="number" onChange={handleChange} name='p_price' placeholder="Enter Product Price" />
                        </Form.Group>
                        <Form.Select onChange={handleChange} className="mb-3" name='cat_id' >
                            <option disabled>Open this select menu</option>
                            <option value="1">Mobile</option>
                            <option value="2">Laptop</option>
                            <option value="3">Accessories</option>
                        </Form.Select>
                        <Form.Group className="mb-3" >
                            <Form.Control type="file" onChange={handleChange} name='p_image' placeholder="Upload Image" />
                        </Form.Group>
                        <Button variant="outline-dark" onClick={handleClick}>Update Product</Button>
                    </Form>

                </div>
            </main>
            <footer>
                <div className="text-center">All rights reserved</div>
            </footer>
        </div>
    )
}

export default Update

