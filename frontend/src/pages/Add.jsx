
import axios from 'axios';
import React, { useContext } from 'react'
import { useState } from 'react'
import { Button, Container, Form, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';


const Add = () => {
    const { currentUser, vlogout } = useContext(AuthContext);

    const [p_name, setP_Name] = useState("");
    const [p_desc, setP_Desc] = useState("");
    const [p_image, setP_Image] = useState(null);
    const [p_price, setP_Price] = useState("");
    const [cat_id, setCat_Id] = useState(1);
    const [v_id, setV_ID] = useState(currentUser.v_id);

    const upload = async () => {
        try {
            const formData = new FormData();
            formData.append("p_image", p_image);
            const res = await axios.post("http://localhost:8800/uploads", formData);

            return res.data
        } catch (error) {
            console.log(error)
        }
    }

    const navigate = useNavigate()
    // const handleChange = (e) => {
    //     // setProduct(prev => ({ ...prev, [e.target.name]: e.target.value }));
    // };
    const handleClick = async e => {
        e.preventDefault()
        setV_ID(currentUser.v_id)
        console.log(v_id)
        const imgUrl = await upload();

        try {
            await axios.post('http://localhost:8800/api/product', { p_name, p_desc, p_price, cat_id, imgUrl, v_id })
            navigate("/vendor/Home");
        } catch (error) {
            console.log(error)
        }

    }


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
                    <h1>Add New Product</h1>
                    <Form>
                        <Form.Group className="mb-3" >
                            <Form.Control type="text" onChange={e => setP_Name(e.target.value)} name='p_name' placeholder="Enter Product Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Control as="textarea" rows={3} onChange={e => setP_Desc(e.target.value)} name='p_desc' placeholder="Enter Product Description" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control type="number" onChange={e => setP_Price(e.target.value)} name='p_price' placeholder="Enter Product Price" />
                        </Form.Group>
                        <Form.Select onChange={e => setCat_Id(parseInt(e.target.value))} className="mb-3" name='cat_id' >
                            <option disabled>Open this select menu</option>
                            <option value="1">Mobile</option>
                            <option value="2">Laptop</option>
                            <option value="3">Accessories</option>
                        </Form.Select>
                        <Form.Group className="mb-3" >
                            <Form.Control type="file" onChange={e => setP_Image(e.target.files[0])} name='p_image' placeholder="Upload Image" />
                        </Form.Group>
                        <Button variant="outline-dark" onClick={handleClick}>Add Product</Button>
                    </Form>

                </div>
            </main>
            <footer>
                <div className="text-center">All rights reserved</div>
            </footer>
        </div>
    )
}

export default Add