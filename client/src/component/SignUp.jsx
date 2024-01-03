import "../assets/CSS/SignUp.css";
import { Link } from "react-router-dom";
import { BiLogoGoogle } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";
import { useState } from "react";
import axios from "axios"

function SignUp() {

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('',{name,email,password})
    .then(result=> console.log(result))
    .catch(err=>console.log(err))
  }

  return (
    <>
      <div className="signup">
        <div className="container">
          <h1 className="Signup-heading">Sign Up</h1>
          <div className="container-box">
            <form onSubmit={handleSubmit}>
              <h3 className="user-name">Name</h3>
              <input 
              type="text" 
              placeholder="Your Name"
              name = "email"
              onChange={(e) => setName(e.target.value)}
              />
              <h3>Email</h3>
              <input 
              type="email" 
              placeholder="Email" 
              onChange={(e) => setEmail(e.target.value)}
              />
              <h3>Password</h3>
              <input type="password" 
              placeholder="Password" 
              onChange={(e) => setPassword(e.target.value)}
              />
            </form>
          </div>
          <label className="container-forget">
            <input type="checkbox" />
            <p>By accepting this agree with our term and condition</p>
          </label>
          <button className="sign-button">Sign Up</button>
          <div className="signup-using-g-ldn">
            <Link
              style={{ border: "1px solid black", backgroundColor: "#3b3bfc" , borderRadius:"5px" }}
            >
              <BiLogoGoogle
                style={{ width: "110px", height: "40px", color: "white" }}
              />
            </Link>
            <Link
              
              style={{ border: "1px solid black", backgroundColor: "#3b3bfc", borderRadius:"5px"  }}
            >
              <BiLogoLinkedin
                style={{ width: "110px", height: "40px", color: "white" }}
              />
            </Link>
          </div>
          <p className="already-login">
            Already Login <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default SignUp;
