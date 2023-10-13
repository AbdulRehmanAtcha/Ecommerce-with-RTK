import React, { useEffect, useState } from "react";
import "./form.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../features/mySlice";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLogin, userData } = useSelector((data) => data.name);

  useEffect(() => {
    if (isLogin === true) {
      navigate("/");
    }
  }, [isLogin, navigate]);

  // const userData = {
  //   email: email,
  //   password: password,
  // };

  const LoginHandler = (event) => {
    event.preventDefault();
    let isFound = false;
    // dispatch(login(userData));
    for (var i = 0; i < userData.length; i++) {
      if (userData[i].email === email && userData[i].password === password) {
        dispatch(login());
        setEmail("");
        setPassword("");
        isFound = true;
      }
    }
    if (!isFound) {
      toast.error("Invalid Email or Password!", {
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
              type={showPass ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {password.length > 0 ? (
              <span onClick={() => setShowPass(!showPass)}>
                {showPass ? (
                  <AiFillEyeInvisible color="white" size={25} />
                ) : (
                  <AiFillEye color="white" size={25} />
                )}
              </span>
            ) : null}
          </div>
          <button type="submit">Register</button>
          <h5>Not Have An Account?</h5>
          <NavLink to={"/register"}>Create Here</NavLink>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signin;
