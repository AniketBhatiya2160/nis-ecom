import React from "react";
import { useNavigate } from "react-router-dom";

function Buy() {
  const navigate = useNavigate();
  const gotoCart = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Fill your details</h1>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Name</label>
          <input
            type="name"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter your name"
            required
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Address</label>
          <input
            type="Address"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="enter your Address"
            required
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">pincode</label>
          <input
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Enter your city pincode"
            required
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Mobile number</label>
          <input
            class="form-control"
            id="exampleInputPassword1"
            placeholder="enter your mobile number"
            required
          />
        </div>
        <br />
        <button
          type="submit"
          onClick={() => gotoCart()}
          class="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Buy;
