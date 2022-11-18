import axios from "axios";

const url = "http://localhost:8800/api/cart_product/";

export const AddCart = async (p_id) => {
  console.log("clicked");
  try {
    const response = await axios.post(url, {
      c_id: 1,
      p_id,
    });
    //debugger;

    if (response.status === 200) {
      alert("item added to the cart"); // message
    }
  } catch (err) {
    console.log("error =====>", err);
  }
};
