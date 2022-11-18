import axios from "axios";
import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useParams } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/esm/Button";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { AddCart } from "../utils/addToCart";

function ProductScreen() {
  const params = useParams();
  const { p_id } = params;
  //for getting pid with help of params
  const [products, setProducts] = useState();
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`http://localhost:8800/api/products/${p_id}`)
        .then((response) => setProducts(response.data));
    };
    fetchData();
  }, [p_id]);

  //for add to cart
  const handleClick = (productId) => {
    AddCart(productId);
  };
  //console.log(products);
  return (
    <div>
      <Header />
      <div className="ABody">
        {products?.map((product) => {
          return (
            <Row key={product.p_id}>
              <Col md={6} key={product.p_id}>
                <img
                  className="img-large"
                  src={"/images/p1.jpg"}
                  alt={product?.p_name}
                ></img>
              </Col>
              <Col md={3}>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <h1>{product?.p_name}</h1>
                  </ListGroup.Item>
                  <ListGroup.Item>Price:{product?.p_price}</ListGroup.Item>
                  <ListGroup.Item>Description:{product?.p_desc}</ListGroup.Item>
                  <ListGroup.Item>
                    <div className="d-grid">
                      <Button
                        variant="primary"
                        onClick={() => handleClick(product.p_id)}
                      >
                        Add to cart
                      </Button>
                    </div>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default ProductScreen;
