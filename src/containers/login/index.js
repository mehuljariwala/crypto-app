import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.scss";

const Login = () => {
  const [details, setDetails] = useState({ email: "", pass: "", err: "" });
  const navigate = useNavigate();

  const onLogin = () => {
    if (details.email === "demo@gmail.com" && details.pass === "demo@123") {
      navigate("/dashboard");
    } else {
      setDetails({ ...details, err: "Invalid credentials try again" });
    }
  };

  const onHandleChange = ({ target: { name, value } }) => {
    setDetails({ ...details, [name]: value });
  };

  const isLoginDisabled = Boolean(!details?.email || !details.pass);

  return (
    <div className="login-main">
      <div className="container">
        <div className="forms">
          <div className="form login">
            <span className="title">Login</span>

            <div className="title-info">
              <div>demo@gmail.com</div>
              <div>demo@123</div>
            </div>

            <form action="#">
              <div className="input-field">
                <input
                  type="text"
                  placeholder="Enter your email"
                  required
                  name="email"
                  value={details?.email}
                  onChange={onHandleChange}
                />
                <i className="uil uil-envelope"></i>
              </div>

              <div className="input-field">
                <input
                  type="password"
                  className="password"
                  placeholder="Enter your password"
                  value={details?.pass}
                  name="pass"
                  onChange={onHandleChange}
                  required
                />
                <i className="uil uil-lock icon"></i>
                <i className="uil uil-eye-slash showHidePw"></i>
              </div>

              <div className="checkbox-text">
                <div className="checkbox-content">
                  <input type="checkbox" id="logCheck" />
                  <label htmlFor="logCheck" className="text">
                    Remember me
                  </label>
                </div>

                <a href="#void" className="text">
                  Forgot password?
                </a>
              </div>

              {!!details.err && <div className="err-alert">{details.err}</div>}

              <div className="input-field button">
                <input
                  type="button"
                  value="Login Now"
                  style={{
                    cursor: isLoginDisabled ? "not-allowed" : "pointer",
                    opacity: isLoginDisabled ? 0.1 : 1,
                  }}
                  onClick={onLogin}
                  disabled={isLoginDisabled}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
