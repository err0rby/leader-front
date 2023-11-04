import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authsignIn } from "../../features/applicationSlice";
import "./styles.css";
const SignIn = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSetName = (e) => {
    setLogin(e.target.value);
  };
  const handleSetPass = (e) => {
    setPassword(e.target.value);
  };
  
  const navigate = useNavigate();
  const handleSignIn = (e) => {
    e.preventDefault();
    dispatch(authsignIn({ login, password }));
    navigate("/");
  };
  
  return (
    <div className="container">
      <form className="form" onSubmit={handleSignIn}>
        <h2>Sign In</h2>
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

export default SignIn;