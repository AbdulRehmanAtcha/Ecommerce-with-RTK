import React, { useState } from "react";
import "./form.css";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../features/mySlice";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [cPass, setCPass] = useState("");

  const { userData } = useSelector((data) => data.name);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userData2 = {
    name: name,
    email: email,
    phone: phone,
    password: password,
  };

  // const { isRegister } = useSelector((data) => data.name);

  // useEffect(() => {
  //   if (isRegister === true) {
  //     navigate("/login");
  //   }
  // }, [isRegister, navigate]);

  const SignupHandler = (event) => {
    event.preventDefault();
    let isFOund = false;
    if (password !== cPass) {
      alert("Password Didn't Match");
    } else {
      for (var i = 0; i < userData.length; i++) {
        if (userData[i].email === userData2.email) {
          isFOund = true;
          toast.error("Email Already Registered!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      }
      if (!isFOund) {
        setName("");
        setEmail("");
        setPhone("");
        setPassword("");
        setCPass("");
        dispatch(signup(userData2));
        navigate("/login");
      }

      // if (filter < 0) {
      //   dispatch(signup(userData2));
      //   setName("");
      //   setEmail("");
      //   setPhone("");
      //   setPassword("");
      //   setCPass("");
      // } else {
      //   alert("Email Already Registered");
      // }
      // console.log(name);
      // console.log(email);
      // console.log(phone);
      // console.log(password);
      // console.log(cPass);
      // setName("");
      // setEmail("");
      // setPhone("");
      // setPassword("");
      // setCPass("");
      // dispatch(signup(userData));
      // navigate("/login");
    }
  };
  return (
    <div className="form-main">
      <div className="signup-main">
        <h1>Register</h1>
        <h2>It's Completely Free</h2>
        <hr
          style={{
            color: "white",
          }}
        />
        <form onSubmit={SignupHandler}>
          <div>
            <label htmlFor="name">Name</label>
            <br />
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <br />
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="cpassword">Confirm Password</label>
            <br />
            <input
              type="password"
              id="cpassword"
              value={cPass}
              onChange={(e) => setCPass(e.target.value)}
            />
          </div>
          <button type="submit">Register</button>
          <h5>Already Have An Account?</h5>
          <NavLink to={"/login"}>Login Here</NavLink>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
