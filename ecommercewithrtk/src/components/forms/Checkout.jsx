import React from "react";
import "./form.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { confirmOrder } from "../../features/mySlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const CheckOutHandler = (event) => {
    event.preventDefault();
    toast.success("Confirmed. You will receive email shortly", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    setTimeout(() => {
      dispatch(confirmOrder());
      navigate("/");
    }, 2000);
  };
  return (
    <div className="form-main">
      <div className="check-main">
        <h1>Checkout</h1>
        <NavLink to={"/cart"}>
          <h2>Go Back</h2>
        </NavLink>
        <hr
          style={{
            color: "white",
          }}
        />
        <form onSubmit={CheckOutHandler}>
          <div>
            <label htmlFor="email">Email</label>
            <br />
            <input type="email" id="email" />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <br />
            <input type="tel" id="phone" />
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <br />
            <input type="text" id="address" />
          </div>

          <button type="submit">Confirm Order</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Checkout;
