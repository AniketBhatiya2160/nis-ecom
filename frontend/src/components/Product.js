import { Link, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { AddCart } from "../utils/addToCart";

function Product(props) {
  const { product } = props;

  //for getting cart
  const handleClick = (p_id) => {
    AddCart(p_id);
  };

  return (
    <Card>
      <img
        src={"/images/p1.jpg"}
        className="card-img-top"
        alt={product.p_name}
      />

      <Card.Body>
        <Link to={`/product/${product.p_id}`}>
          <Card.Title>{product.p_name}</Card.Title>
        </Link>
        <Card.Text>{product.p_price}</Card.Text>
        <Button onClick={() => handleClick(product.p_id)}>Add to cart</Button>
      </Card.Body>
    </Card>
  );
}

export default Product;
