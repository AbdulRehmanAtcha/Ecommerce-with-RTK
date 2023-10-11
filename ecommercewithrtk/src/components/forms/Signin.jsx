import React, { useEffect, useState } from "react";
import "./form.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../features/mySlice";
import { NavLink, useNavigate } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLogin } = useSelector((data) => data.name);

  useEffect(() => {
    if (isLogin === true) {
      navigate("/home");
    }
  }, [isLogin, navigate]);

  const userData = {
    email: email,
    password: password,
  };

  const LoginHandler = (event) => {
    event.preventDefault();
    dispatch(login(userData));
    setEmail("");
    setPassword("");
  };
  return (
    <div className="form-main">
      <div className="sigin-main">
        <h1>Login</h1>
        <h2>Welcome Back</h2>
        <hr
          style={{
            color: "white",
          }}
        />
        <form onSubmit={LoginHandler}>
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
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Register</button>
          <h5>Not Have An Account?</h5>
          <NavLink to={"/register"}>Create Here</NavLink>
        </form>
      </div>
    </div>
  );
};

export default Signin;
