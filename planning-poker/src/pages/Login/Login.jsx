import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import "./Login.scss";
import { LoggedInContext } from "../../App";

const Login = () => {
  const [newUser, setNewUser] = useState(false);
  const { setIsLoggedIn, currentUser, setCurrentUser } =
    useContext(LoggedInContext);
  const navigate = useNavigate();

  const changeForm = () => {
    setNewUser(!newUser);
  };

  const handleLoginSignUp = (e) => {
    e.preventDefault();
    let loginForm = document.getElementById("form-login");
    const formData = new FormData(loginForm);
   

    const httpRequest = new XMLHttpRequest();
    // httpRequest.onload = () => {
    //   console.log(httpRequest.responseText);
    // };

    httpRequest.onreadystatechange = () => {
      if (httpRequest.readyState == httpRequest.DONE) {

        if (JSON.parse(httpRequest.responseText) != "validation-failed") {
          //setting currently logged in user id
          setIsLoggedIn(true);
          setCurrentUser(JSON.parse(httpRequest.responseText));
          localStorage.setItem("currentUser", httpRequest.responseText);
          navigate("/dashboard");
        }
      } else {
        // console.log("Logging in...");
      }
    };

    httpRequest.open(
      "POST",
      "http://localhost/controller/loginUser.php"
    );
    httpRequest.send(formData);
  };

  return (
    <main className="main">
      <div className="login-form">
        <h2 className="heading-secondary ">
          {newUser ? "Create your account " : "Log into your account"}
        </h2>

        <form
          name="createUser"
          className="form"
          id="form-login"
          onSubmit={handleLoginSignUp}
        >
          {newUser && (
            <div className="form__group">
              <label htmlFor="full-name" className="form__label">
                Full Name
              </label>
              <input
                className="form__input"
                type="text"
                id="full-name"
                placeholder="John Doe"
                name="name"
              />
            </div>
          )}
          <div className="form__group">
            <label className="form__label" htmlFor="email">
              Email address
            </label>
            <input
              className="form__input"
              id="email"
              type="email"
              placeholder="you@example.com"
              required={true}
              name="email"
            />
          </div>
          <div className="form__group ">
            <label className="form__label" htmlFor="password">
              Password
            </label>
            <input
              className="form__input"
              id="password"
              type="password"
              placeholder="••••••••"
              required={true}
              minLength="8"
              name="password"
            />
          </div>
          <div className="form__group">
            <button
              className="btn btn--green"
              type="submit"
              name="newUser"
              value={newUser ? true : false}
              // onClick={handleLoginSignUp}
            >
              {newUser ? "SignUp" : "Login"}
            </button>
          </div>
        </form>
        <p className="change-form">
          {newUser ? "Already have an account? " : "Don't have an account? "}
          <span className="change-user" onClick={changeForm}>
            {newUser ? "Log in" : "Sign Up"}
          </span>
        </p>
      </div>
    </main>
  );
};

export default Login;
