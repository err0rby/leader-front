
import { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./App.css";

const SignUp = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const mutation = useMutation(
    ({ login, password }) =>
      axios.post("http://localhost:4000/auth", { login, password }).then((res) => res.data),
    {
      onSuccess: (data) => {
        localStorage.setItem("token", data.token);
        navigate("/login");
      },
    }
  );

  const handleSetName = (e) => {
    setLogin(e.target.value);
  };

  const handleSetPass = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    mutation.mutate({ login, password });
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSignUp}>
        <h2>Sign Up</h2>
        <div className="input">
          <div className="inputBox">
            <label htmlFor="">Username</label>
            <input
              type="text"
              value={login}
              placeholder="name"
              onChange={handleSetName}
            />
          </div>
          <div className="inputBox">
            <label htmlFor="">Password</label>
            <input
              type="password"
              value={password}
              placeholder="password"
              onChange={handleSetPass}
            />
          </div>
          <div className="inputBox">
            <input type="submit" value={"Sign In"} />
          </div>
        </div>
        <p className="forgot">
          Forgot Password? <a href="#">Click Here</a>
        </p>
      </form>
    </div>
  );
};

export default SignUp;