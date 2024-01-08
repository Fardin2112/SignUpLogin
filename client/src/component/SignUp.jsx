import "../assets/CSS/SignUp.css";
import { Link } from "react-router-dom";
import { BiLogoGoogle } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";
import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

function SignUp() {

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate  = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/register', {name,email,password})
    .then(result => {console.log(result)
      navigate('/login')
    })
    .catch(err=>console.log(err))
  }

  return (
    <>
      <div className="signup">
        <div className="container">
          <div className="allelement">
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
              <input 
              type="password" 
              placeholder="Password" 
              onChange={(e) => setPassword(e.target.value)}
              />
              <label className="container-forget">
                <input type="checkbox" />
                <p>Agree with our term and condition</p>
              </label>
              <div className="btncen">
              <button type="sumbit" className="sign-button">Sign Up</button>
              </div>
            </form>

          </div>
          
          <div className="signup-using-g-ldn">
            <div className="gogglebtn">
                <span>
                  <Link >
                        <BiLogoGoogle style={{width:"40px" ,height:"40px"}}/>  
                  </Link>
                </span>
                <div className="vl"></div>
            <p>Goggle</p>
            </div>

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
      </div>
    </>
  );
}

export default SignUp;
