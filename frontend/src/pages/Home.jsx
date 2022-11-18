import React, { useContext } from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import Products from './Products'
import { AuthContext } from '../context/authContext'

const Home = () => {
  const { currentUser, vlogout } = useContext(AuthContext);
  return (
    <div>
        <div className="d-flex flex-column site-container">
          <header className="App-header">
            <Navbar bg="dark" variant="dark" >

              <Container>
               <LinkContainer to="/vendor/Home">
                  <Navbar.Brand>E-mart</Navbar.Brand>
                </LinkContainer>

                {currentUser && <LinkContainer to="/vendor/add">
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
            <Products />
          </main>
          <footer>
            <div className="text-center">All rights reserved</div>
          </footer>
        </div>
    </div>
  )
}

export default Home;