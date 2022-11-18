import axios from "axios";

export const removetoCart = async (cart_id) => {
  //console.log("clicked");
  try {
    const response = await axios.delete(
      `http://localhost:8800/api/cart_product/cartscreen/${cart_id}`
    );
    //debugger;
    console.log(cart_id);

    if (response.status === 200) {
      alert("item deleted to the cart"); // message
    }
  } catch (err) {
    console.log("error =====>", err);
  }
};
