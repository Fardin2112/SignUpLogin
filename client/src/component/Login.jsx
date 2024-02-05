import { Link } from "react-router-dom";
import { BiLogoGoogle } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function Login() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    // console.log("yes")
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { email, password })
      .then((result) => {
        console.log(result)
        if(result.data === "Success"){
          navigate("/logged");
        }else{
          console.log("Something is wrong")
        }
      })
      .catch(err=>console.log(err))
  };
  return (
    <>
      <div className="signup">
        <div className="container">
          <h1 className="Signup-heading">Login</h1>
          <div className="container-box">

            <form onSubmit={handleSubmit}>
              <h3>Email</h3>
              <input 
              type="email"
              placeholder="Email"
              // name = "email"
              onChange={(e)=> setEmail(e.target.value)}
              />
              <h3>Password</h3>
              <input 
              type="password" 
              placeholder="Password"
              onChange={(e)=> setPassword(e.target.value)} 
              />
              <div className="btncen">
                  <button type="sumbit" className="sign-button">Log in</button>
              </div>
            </form>

          </div>
          <label className="container-forget">
            <p>
              Already forget password <Link to="/forget">Forget password</Link>
            </p>
          </label>
          
          <div className="signup-using-g-ldn">
            <Link
              style={{
                border: "1px solid black",
                backgroundColor: "#3b3bfc",
                borderRadius: "5px",
              }}
            >
              <BiLogoGoogle
                style={{ width: "110px", height: "40px", color: "white" }}
              />
            </Link>
            <Link
              style={{
                border: "1px solid black",
                backgroundColor: "#3b3bfc",
                borderRadius: "5px",
              }}
            >
              <BiLogoLinkedin
                style={{ width: "110px", height: "40px", color: "white" }}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
