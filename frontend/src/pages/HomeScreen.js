import { useEffect, useState } from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Product from "../components/Product";
import Nav from "react-bootstrap/Nav";
import Header from "../components/Header";
import Form from "react-bootstrap/Form";
import Footer from "../components/Footer";

function HomeScreen() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:8800/api/products"); //in this result put in to this result varible

      setProducts(result.data);
    };
    fetchData();
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
        <h1>Featured Products</h1>
        <div className="products">
          <Row>
            {products.p_name === "" ? (
              <div>
                <p>NO DATA FOUND</p>
              </div>
            ) : (
              products
                .filter((item) => {
                  return search.toLowerCase() === ""
                    ? item
                    : item.p_name.toLowerCase().includes(search);
                })
                .map((product) => (
                  <Col key={product.p_id} sm={6} md={4} lg={3} className="mb-3">
                    <Product product={product}></Product>
                  </Col>
                ))
            )}
          </Row>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomeScreen;
