import axios from "axios";
import { useEffect, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Product from "../components/Product";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MobileScreen() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios.get("http://localhost:8800/api/products").then((res) => setProducts(res.data));
  }, []);

  return (
    <div>
      <Header />
      <div className="ABody">

      <Nav className="ml-auto">
        <Form inline="true">
          <Form.Control
            type="text"
            placeholder="Search Filter"
            className="mr-sm-2"
            onChange={(e) => setSearch(e.target.value)}
            />
        </Form>
      </Nav>
      <h1>Mobile</h1>
      {products
        ?.filter((cat) => cat.cat_id === 1)
        .filter((item) => {
          return search.toLowerCase() === ""
          ? item
          : item.p_name.toLowerCase().includes(search);
        })
        .map((product) => {
          return (
            <div className="products">
              <Row>
                <Col key={product.p_id} sm={6} md={4} lg={3} className="mb-3">
                  <Product product={product}></Product>
                </Col>
              </Row>
            </div>
          );
        })}
        </div>
        <Footer/>
    </div>
  );
}

export default MobileScreen;
